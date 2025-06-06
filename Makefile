all:
	go build -v

# test .debug_info
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

# test .debug_line
test200:
	./dwarfviewer -file tests/hello -view=line

test201:
	./dwarfviewer -file tests/hello -pattern 'main' -webui

testdata:
	GOOS=linux GOARCH=amd64 go build -gcflags "all=-N -l" -o tests/hello tests/hello.go

clean:
	rm dwarfviewer tests/hello

.PHONY: clean testdata test test2 test3 test4 test100 test200 test201
