package main

import (
	"debug/elf"
	"flag"
	"fmt"
	"os"
	"regexp"
)

func main() {
	// Parse command line arguments
	filePath := flag.String("file", "", "Path to the ELF file")
	pattern := flag.String("pattern", "", "Regex pattern to filter DIEs")
	// children := flag.Bool("children", true, "show children separately")
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
	if *pattern != "" {
		re, err := regexp.Compile(*pattern)
		if err != nil {
			fmt.Printf("Invalid regex pattern: %v\n", err)
			os.Exit(1)
		}

		var matches []*DIE
		for _, die := range rootDIEs {
			matches = append(matches, filterDIE(die, re)...)
		}

		fmt.Printf("Found %d matching DIEs:\n", len(matches))
		for i, die := range matches {
			printDIE(die, 0, dwarfData)
			if i < len(matches)-1 {
				fmt.Println("---")
			}
		}
	} else {
		// Print all DIEs
		for i, die := range rootDIEs {
			printDIE(die, 0, dwarfData)
			if i < len(rootDIEs)-1 {
				fmt.Println("---")
			}
		}
	}
}
