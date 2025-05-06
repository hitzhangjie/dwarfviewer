package main

import "fmt"

type Person struct {
	Name string
	Sex  int
}

func (p *Person) String() string {
	return fmt.Sprintf("Name: %s, Sex: %d", p.Name, p.Sex)
}

func main() {
	s := &Person{
		Name: "John",
		Sex:  1,
	}
	fmt.Println(s.String())
}
