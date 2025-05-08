package main

import (
	"debug/dwarf"
	"embed"
	"encoding/json"
	"flag"
	"fmt"
	"net/http"
	"os"
	"regexp"
	"strconv"

	"github.com/hitzhangjie/dwarfviewer/parser"
)

//go:embed static
var staticFiles embed.FS

func main() {
	// Parse command line arguments
	filePath := flag.String("file", "", "Path to the binary file")
	pattern := flag.String("pattern", "", "Regex pattern to filter DIEs")
	webUI := flag.Bool("webui", false, "Display DIEs in web interface")
	flag.Parse()

	if *filePath == "" {
		fmt.Println("Please provide a binary file path using -file flag")
		os.Exit(1)
	}

	// 创建并打开文件解析器
	fileParser, err := parser.NewParser(*filePath)
	if err != nil {
		fmt.Printf("Error creating file parser: %v\n", err)
		os.Exit(1)
	}
	defer fileParser.Close()

	// 获取DWARF数据
	dwarfData, err := fileParser.GetDWARF()
	if err != nil {
		fmt.Printf("Error reading DWARF data: %v\n", err)
		os.Exit(1)
	}

	// Parse all DIEs
	reader := dwarfData.Reader()
	var rootDIEs []*DIE
	for {
		entry, err := reader.Next()
		if err != nil {
			fmt.Printf("Error reading DIE: %v\n", err)
			os.Exit(1)
		}
		if entry == nil {
			break
		}
		if entry.Tag == 0 {
			continue
		}
		die, err := parseDIE(reader, entry)
		if err != nil {
			fmt.Printf("Error parsing DIE: %v\n", err)
			os.Exit(1)
		}
		rootDIEs = append(rootDIEs, die)
	}

	// webui mode
	if *webUI {
		// Setup web server
		http.HandleFunc("/", serveIndex)
		http.HandleFunc("/api/dies", func(w http.ResponseWriter, r *http.Request) {
			serveDIEs(w, r, rootDIEs, dwarfData)
		})
		http.HandleFunc("/api/dies/search", func(w http.ResponseWriter, r *http.Request) {
			serveSearch(w, r, rootDIEs, dwarfData)
		})
		http.HandleFunc("/api/dies/type/", func(w http.ResponseWriter, r *http.Request) {
			serveTypeDIE(w, r, rootDIEs, dwarfData)
		})
		// Serve static files from embedded filesystem
		http.Handle("/static/", http.FileServer(http.FS(staticFiles)))

		fmt.Println("Starting web server at http://localhost:8080")
		if err := http.ListenAndServe(":8080", nil); err != nil {
			fmt.Printf("Error starting web server: %v\n", err)
			os.Exit(1)
		}
		return
	}

	// termui mode
	var matches []*DIE
	if *pattern != "" {
		re, err := regexp.Compile(*pattern)
		if err != nil {
			fmt.Printf("Invalid regex pattern: %v\n", err)
			os.Exit(1)
		}

		var dies []*DIE
		for _, die := range rootDIEs {
			dies = append(dies, filterDIE(die, re)...)
		}

		matches = dies
	} else {
		matches = rootDIEs
	}

	fmt.Printf("Found %d matching DIEs:\n", len(matches))
	for i, die := range matches {
		printDIE(die, 0, dwarfData)
		if i < len(matches)-1 {
			fmt.Println("---")
		}
	}
}

func serveIndex(w http.ResponseWriter, r *http.Request) {
	content, err := staticFiles.ReadFile("static/index.html")
	if err != nil {
		http.Error(w, "Error reading index.html", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "text/html")
	w.Write(content)
}

func serveDIEs(w http.ResponseWriter, r *http.Request, dies []*DIE, dwarfData *dwarf.Data) {
	jsonData, err := json.Marshal(dies)
	if err != nil {
		http.Error(w, "Error converting DIEs to JSON", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonData)
}

func serveSearch(w http.ResponseWriter, r *http.Request, dies []*DIE, dwarfData *dwarf.Data) {
	query := r.URL.Query().Get("q")
	if query == "" {
		serveDIEs(w, r, dies, dwarfData)
		return
	}

	re, err := regexp.Compile(query)
	if err != nil {
		http.Error(w, "Invalid search pattern", http.StatusBadRequest)
		return
	}

	var matches []*DIE
	for _, die := range dies {
		matches = append(matches, filterDIE(die, re)...)
	}

	jsonData, err := json.Marshal(matches)
	if err != nil {
		http.Error(w, "Error converting DIEs to JSON", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonData)
}

// serveTypeDIE handles requests for DIEs referenced by type
func serveTypeDIE(w http.ResponseWriter, r *http.Request, dies []*DIE, dwarfData *dwarf.Data) {
	// Extract the type offset from the URL
	typeOffset := r.URL.Path[len("/api/dies/type/"):]
	offset, err := strconv.ParseUint(typeOffset, 10, 64)
	if err != nil {
		http.Error(w, "Invalid type offset", http.StatusBadRequest)
		return
	}

	// Find the DIE with the matching offset
	var foundDie *DIE

NextRootDIE:
	for _, die := range dies {
		if die.Entry.Offset == dwarf.Offset(offset) {
			foundDie = die
			break
		}
		for _, child := range die.Children {
			if child.Entry.Offset == dwarf.Offset(offset) {
				foundDie = child
				break NextRootDIE
			}
		}
	}

	if foundDie == nil {
		http.Error(w, "DIE not found", http.StatusNotFound)
		return
	}

	// Return the found DIE as JSON
	jsonData, err := json.Marshal(foundDie)
	if err != nil {
		http.Error(w, "Error converting DIE to JSON", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonData)
}
