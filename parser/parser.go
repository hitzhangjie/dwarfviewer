package parser

import (
	"debug/dwarf"
	"fmt"
	"os"
)

// FileType 表示支持的文件类型
type FileType int

const (
	FileTypeUnknown FileType = iota
	FileTypeELF
	FileTypePE
	FileTypeMachO
)

// FileParser 定义了文件解析器的接口
type FileParser interface {
	// Open 打开并解析文件
	Open(filePath string) error
	// Close 关闭文件
	Close() error
	// GetDWARF 获取DWARF数据
	GetDWARF() (*dwarf.Data, error)
}

// BaseParser 提供了基本的文件解析器实现
type BaseParser struct {
	filePath string
}

// detectFileType 通过读取文件头来判断文件类型
func detectFileType(filePath string) (FileType, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return FileTypeUnknown, err
	}
	defer file.Close()

	// 读取文件头
	header := make([]byte, 16)
	_, err = file.Read(header)
	if err != nil {
		return FileTypeUnknown, err
	}

	// 检查ELF文件头 (0x7F 0x45 0x4C 0x46)
	if len(header) >= 4 && header[0] == 0x7F && header[1] == 0x45 && header[2] == 0x4C && header[3] == 0x46 {
		return FileTypeELF, nil
	}

	// 检查PE文件头 (0x4D 0x5A)
	if len(header) >= 2 && header[0] == 0x4D && header[1] == 0x5A {
		return FileTypePE, nil
	}

	// 检查Mach-O文件头 (0xFE 0xED 0xFA 0xCE 或 0xFE 0xED 0xFA 0xCF)
	if len(header) >= 4 && header[0] == 0xFE && header[1] == 0xED && header[2] == 0xFA && (header[3] == 0xCE || header[3] == 0xCF) {
		return FileTypeMachO, nil
	}

	return FileTypeUnknown, fmt.Errorf("unknown file format")
}

// NewParser 创建一个新的文件解析器
func NewParser(filePath string) (FileParser, error) {
	// 检查文件是否存在
	if _, err := os.Stat(filePath); os.IsNotExist(err) {
		return nil, err
	}

	// 通过文件头检测文件类型
	fileType, err := detectFileType(filePath)
	if err != nil {
		return nil, fmt.Errorf("error detecting file type: %v", err)
	}

	// 根据检测到的文件类型创建相应的解析器
	switch fileType {
	case FileTypeELF:
		parser := NewELFParser(filePath)
		if err := parser.Open(filePath); err != nil {
			return nil, err
		}
		return parser, nil
	case FileTypePE:
		// TODO: 实现PE文件解析器
		return nil, fmt.Errorf("PE file format not supported yet")
	case FileTypeMachO:
		// TODO: 实现Mach-O文件解析器
		return nil, fmt.Errorf("Mach-O file format not supported yet")
	default:
		return nil, fmt.Errorf("unsupported file format")
	}
}
