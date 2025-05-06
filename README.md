# DWARF Viewer

A command-line tool for viewing and filtering DWARF debugging information from ELF executables.

## Features

- Reads DWARF debugging information from ELF executables
- Parses and displays Debug Information Entries (DIEs)
- Supports filtering DIEs using regular expressions
- Recursively displays DIE attributes and references

## Usage

```bash
# Build the program
go build

# View all DWARF information
./dwarfviewer -file <path-to-elf-file>

# Filter DIEs by name using regex
./dwarfviewer -file <path-to-elf-file> -pattern "main"
```

## Example

To view all functions in a program:
```bash
./dwarfviewer -file myprogram -pattern "function"
```

To view all variables:
```bash
./dwarfviewer -file myprogram -pattern "variable"
```
