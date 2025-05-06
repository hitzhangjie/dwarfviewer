# DWARF Viewer

A powerful tool for viewing and analyzing DWARF debugging information from ELF executables. It provides both command-line and web interface for exploring debug information entries (DIEs).

## Features

- Reads DWARF debugging information from ELF executables
  > the fileparser could be extended to support Mach-O, PE, etc.
- Displays the DIEs and their Children recursively
- Displays the DIEs and their siblings recursively
- Supports filtering DIEs using regular expressions
- Interactive web interface for exploring DIEs
- Hierarchical navigation of DIE relationships
- Support for all DWARF tags and attributes

## Requirements

- Go 1.21 or later
- ELF executable with DWARF debugging information

## Installation

```bash
go install -v github.com/hitzhangjie/dwarfviewer@latest
```

or 

```bash
git clone https://github.com/hitzhangjie/dwarfviewer
cd dwarfviewer
go install -v
```

## Testing

Run the tests and learn how to use it before inspecting your own ELF file.

```bash
# Build the program
make

# Run tests
make test
make test2
make test3
make test4
```

## Usage

### Command Line Interface

```bash
# Build the program
go build

# View all DWARF information
./dwarfviewer -file <path-to-elf-file>

# Filter DIEs by name using regex
./dwarfviewer -file <path-to-elf-file> -pattern "main"

# Launch web interface
./dwarfviewer -file <path-to-elf-file> -webui
```

### Web Interface

When launched with the `-webui` flag, the tool provides an interactive web interface at `http://localhost:8080` with the following features:

- Hierarchical view of all DIEs
- Search functionality for filtering DIEs
- Detailed view of DIE attributes and values
- Navigation breadcrumbs for exploring DIE relationships
- Interactive tree view of DIE children

## Finally

Let's delve into the DWARF debugging information details.
