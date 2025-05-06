package main

import (
	"debug/dwarf"
	"debug/elf"
	"encoding/json"
	"flag"
	"fmt"
	"net/http"
	"os"
	"regexp"
)

func main() {
	// Parse command line arguments
	filePath := flag.String("file", "", "Path to the ELF file")
	pattern := flag.String("pattern", "", "Regex pattern to filter DIEs")
	webUI := flag.Bool("webui", false, "Display DIEs in web interface")
	flag.Parse()

	if *filePath == "" {
		fmt.Println("Please provide an ELF file path using -file flag")
		os.Exit(1)
	}

	// Open and parse the ELF file
	file, err := elf.Open(*filePath)
	if err != nil {
		fmt.Printf("Error opening ELF file: %v\n", err)
		os.Exit(1)
	}
	defer file.Close()

	// Get DWARF data
	dwarfData, err := file.DWARF()
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

	// If pattern is provided, filter DIEs
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

	// display the matched DIEs
	if *webUI {
		// Setup web server
		http.HandleFunc("/", serveIndex)
		http.HandleFunc("/api/dies", func(w http.ResponseWriter, r *http.Request) {
			serveDIEs(w, r, matches, dwarfData)
		})
		http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

		fmt.Println("Starting web server at http://localhost:8080")
		if err := http.ListenAndServe(":8080", nil); err != nil {
			fmt.Printf("Error starting web server: %v\n", err)
			os.Exit(1)
		}
		return
	} else {
		fmt.Printf("Found %d matching DIEs:\n", len(matches))
		for i, die := range matches {
			printDIE(die, 0, dwarfData)
			if i < len(matches)-1 {
				fmt.Println("---")
			}
		}
	}
}

func serveIndex(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/index.html")
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
