package parser

import (
	"debug/dwarf"
	"debug/elf"
	"fmt"
)

// ELFParser 实现了ELF文件的解析
type ELFParser struct {
	BaseParser
	file *elf.File
}

// NewELFParser 创建一个新的ELF文件解析器
func NewELFParser(filePath string) *ELFParser {
	return &ELFParser{
		BaseParser: BaseParser{filePath: filePath},
	}
}

// Open 打开ELF文件
func (p *ELFParser) Open(filePath string) error {
	file, err := elf.Open(filePath)
	if err != nil {
		return fmt.Errorf("error opening ELF file: %v", err)
	}
	p.file = file
	return nil
}

// Close 关闭ELF文件
func (p *ELFParser) Close() error {
	if p.file != nil {
		return p.file.Close()
	}
	return nil
}

// GetDWARF 获取ELF文件的DWARF数据
func (p *ELFParser) GetDWARF() (*dwarf.Data, error) {
	if p.file == nil {
		return nil, fmt.Errorf("file not opened")
	}
	return p.file.DWARF()
}
