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
	"sort"
	"strconv"
	"text/tabwriter"

	"github.com/hitzhangjie/dwarfviewer/parser"
)

//go:embed static
var staticFiles embed.FS

func main() {
	// Parse command line arguments
	filePath := flag.String("file", "", "Path to the binary file")
	pattern := flag.String("pattern", "", "Regex pattern to filter DIEs")
	webUI := flag.Bool("webui", false, "Display DIEs in web interface")
	view := flag.String("view", "info", "View mode: info (default) or line")
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
		http.HandleFunc("/api/line-table", func(w http.ResponseWriter, r *http.Request) {
			serveLineTable(w, r, dwarfData)
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
	if *view == "line" {
		// Get line table information from the DWARF data
		if err := printLineTable(dwarfData); err != nil {
			fmt.Printf("Error printing line table: %v\n", err)
			os.Exit(1)
		}
		return
	}

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

// Get line table information from the DWARF data and print it
func printLineTable(dwarfData *dwarf.Data) error {
	// Get the reader for all DIEs
	reader := dwarfData.Reader()

	// Traverse through all compilation units
	for {
		entry, err := reader.Next()
		if err != nil {
			return fmt.Errorf("error reading DIE: %v", err)
		}
		if entry == nil {
			break
		}

		// Only process compilation units
		if entry.Tag != dwarf.TagCompileUnit {
			continue
		}

		// Get compilation unit name
		name := entry.Val(dwarf.AttrName)
		if name == nil {
			name = "unknown"
		}

		// Print compilation unit header
		fmt.Printf("\nCompilation Unit: ```%s```\n\n", name)

		// Print line table for this compilation unit
		if err := printCompilationUnitLineTable(dwarfData, entry); err != nil {
			return err
		}
	}
	return nil
}

// printCompilationUnitLineTable prints the line table entries for a single compilation unit
func printCompilationUnitLineTable(dwarfData *dwarf.Data, entry *dwarf.Entry) error {
	// Create a new tabwriter
	w := tabwriter.NewWriter(os.Stdout, 0, 0, 2, ' ', tabwriter.Debug)
	defer w.Flush()

	fmt.Fprintln(w, "Address\tFile\tLine\tColumn\tIsStmt\tBasic Block")
	fmt.Fprintln(w, "-------\t----\t----\t------\t-------\t-----------")

	// Get line table reader for this compilation unit
	lineReader, err := dwarfData.LineReader(entry)
	if err != nil {
		return fmt.Errorf("read linetable fail: %v", err)
	}

	// Read all line table entries for this compilation unit
	var entries []dwarf.LineEntry
	for {
		var entry dwarf.LineEntry
		err := lineReader.Next(&entry)
		if err != nil {
			break
		}
		entries = append(entries, entry)
	}

	// Sort entries by address
	sort.Slice(entries, func(i, j int) bool {
		return entries[i].Address < entries[j].Address
	})

	// Print sorted entries
	for _, entry := range entries {
		fmt.Fprintf(w, "0x%08x\t%s\t%d\t%d\t%v\t%v\n",
			entry.Address,
			entry.File.Name,
			entry.Line,
			entry.Column,
			entry.IsStmt,
			entry.BasicBlock)
	}
	return nil
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

// serveLineTable handles requests for line table data
func serveLineTable(w http.ResponseWriter, r *http.Request, dwarfData *dwarf.Data) {
	// Get the reader for all DIEs
	reader := dwarfData.Reader()

	// Create a map to store line table entries by compilation unit
	lineTableEntries := make(map[string][]dwarf.LineEntry)

	// Traverse through all compilation units
	for {
		entry, err := reader.Next()
		if err != nil {
			http.Error(w, fmt.Sprintf("Error reading DIE: %v", err), http.StatusInternalServerError)
			return
		}
		if entry == nil {
			break
		}

		// Only process compilation units
		if entry.Tag != dwarf.TagCompileUnit {
			continue
		}

		// Get compilation unit name
		name := entry.Val(dwarf.AttrName)
		if name == nil {
			name = "unknown"
		}
		cuName := name.(string)

		// Get line table reader for this compilation unit
		lineReader, err := dwarfData.LineReader(entry)
		if err != nil {
			http.Error(w, fmt.Sprintf("Error reading line table for %s: %v", cuName, err), http.StatusInternalServerError)
			return
		}

		// Read all line table entries for this compilation unit
		var entries []dwarf.LineEntry
		for {
			var entry dwarf.LineEntry
			err := lineReader.Next(&entry)
			if err != nil {
				break
			}
			entries = append(entries, entry)
		}

		// Sort entries by address
		sort.Slice(entries, func(i, j int) bool {
			return entries[i].Address < entries[j].Address
		})

		lineTableEntries[cuName] = entries
	}

	// Return the entries as JSON
	jsonData, err := json.Marshal(lineTableEntries)
	if err != nil {
		http.Error(w, "Error converting line table to JSON", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonData)
}
