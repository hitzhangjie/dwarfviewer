package main

import (
	"debug/dwarf"
	"fmt"
	"regexp"
)

// DIE represents a Debug Information Entry with its attributes
type DIE struct {
	Entry    *dwarf.Entry `json:"Entry"`
	Children []*DIE       `json:"Children"`
}

// parseDIE recursively parses a DIE and its children
func parseDIE(reader *dwarf.Reader, entry *dwarf.Entry) (*DIE, error) {
	die := &DIE{
		Entry:    entry,
		Children: make([]*DIE, 0),
	}

	if entry.Children {
		for {
			child, err := reader.Next()
			if err != nil {
				return nil, err
			}
			if child == nil {
				break
			}
			if child.Tag == 0 {
				break
			}
			childDIE, err := parseDIE(reader, child)
			if err != nil {
				return nil, err
			}
			die.Children = append(die.Children, childDIE)
		}
	}
	return die, nil
}

// printDIE recursively prints a DIE and its attributes
func printDIE(die *DIE, depth int, data *dwarf.Data) {
	indent := ""
	for i := 0; i < depth; i++ {
		indent += "  "
	}

	fmt.Printf("%sTag: %s\n", indent, die.Entry.Tag)

	for _, field := range die.Entry.Field {
		fmt.Printf("%s  %s: ", indent, field.Attr)
		switch field.Class {
		case dwarf.ClassAddress:
			fmt.Printf("0x%x", field.Val)
		case dwarf.ClassBlock:
			fmt.Printf("%v", field.Val)
		case dwarf.ClassConstant:
			fmt.Printf("%v", field.Val)
		case dwarf.ClassExprLoc:
			fmt.Printf("%v", field.Val)
		case dwarf.ClassFlag:
			fmt.Printf("%v", field.Val)
		case dwarf.ClassLinePtr:
			fmt.Printf("%v", field.Val)
		case dwarf.ClassLocListPtr:
			fmt.Printf("%v", field.Val)
		case dwarf.ClassMacPtr:
			fmt.Printf("%v", field.Val)
		case dwarf.ClassRangeListPtr:
			fmt.Printf("%v", field.Val)
		case dwarf.ClassReference:
			// Try to resolve the reference
			if ref, ok := field.Val.(dwarf.Offset); ok {
				// read the reference
				data.Reader().Seek(ref)
				if entry, err := data.Reader().Next(); err == nil {
					fmt.Printf("-> %s", entry.Tag)
				} else {
					fmt.Printf("%v", field.Val)
				}
				// seek back to the original position
				// TODO: do we need to do this? maybe not.
				data.Reader().Seek(die.Entry.Offset)
			} else {
				fmt.Printf("%v", field.Val)
			}
		case dwarf.ClassString:
			fmt.Printf("%s", field.Val)
		case dwarf.ClassReferenceAlt:
			fmt.Printf("%v", field.Val)
		case dwarf.ClassStringAlt:
			fmt.Printf("%v", field.Val)
		default:
			fmt.Printf("%v", field.Val)
		}
		fmt.Println()
	}

	if die.Entry.Children {
		// depth+1
		indent := Indent(indent)
		fmt.Printf("%sChildren: %d children\n", indent, len(die.Children))
	}
	for _, child := range die.Children {
		printDIE(child, depth+2, data)
	}
}

func Indent(indent string) string {
	return indent + "  "
}

// filterDIE recursively filters DIEs based on a regex pattern
func filterDIE(die *DIE, pattern *regexp.Regexp) []*DIE {
	var matches []*DIE

	// Check if current DIE matches
	for _, field := range die.Entry.Field {
		if field.Attr == dwarf.AttrName {
			if name, ok := field.Val.(string); ok {
				if pattern.MatchString(name) {
					matches = append(matches, die)
					break
				}
			}
		}
	}

	// Recursively check children
	for _, child := range die.Children {
		matches = append(matches, filterDIE(child, pattern)...)
	}

	return matches
}
