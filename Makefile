all:
	go build -v

test:
	./dwarfviewer -file tests/hello

test2:
	./dwarfviewer -file tests/hello -pattern 'main'

test3:
	./dwarfviewer -file tests/hello -pattern 'main.main'

test4:
	./dwarfviewer -file tests/hello -pattern 'main' -webui

test100:
	./dwarfviewer -file tests/hello -pattern 'main'

testdata:
	go build -gcflags "all=-N -l" -o tests/hello tests/hello.go

clean:
	rm dwarfviewer tests/hello

.PHONY: clean testdata test test2 test3 test4 test100
