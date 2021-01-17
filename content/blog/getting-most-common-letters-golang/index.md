---
title: Implementing a counter in Go, to find the most popular characters in a string
date: 2021-01-11
template: post
description: A Go data structure for recording the counts of each character in a string and sorting it by character frequency, and then alphabetically in the case of a tie.
tags: ["golang", "algorithms","data structures"]
---

This was inspired by advent-of-code, I've been using old challenges to practice Go. They also make me think of Christmas, which is nice in a miserable January lockdown 😆. 

The problem in particular was https://adventofcode.com/2016/day/5 (a particularly merry christmas). 

The main part of the problem is ordering the characters in a sentence, first by letter frequency and then alphabetically in the case of a tie. An intuitive way to solve this is with a character counter (like `collections.Counter` in Python).

Here are two options I'd consider if using python for this.

<div class="filename">counter.py</div>

```python
sentence = "Hello world"
# with external libraries
counter = collections.Counter(sentence)

# without external libraries
counter = {}
for c in sentence:
    if c.isalpha():
        if c not in counter:
            counter[c] = 0
        counter[c] += 1

# sort by most common letters, and then alphabetically
ordering = sorted(counter.items(), key=lambda item: (-item[1], item[0]))
print(ordering)
# [('l', 3), ('o', 2), ('H', 1), ('d', 1), ('e', 1), ('r', 1), ('w', 1)]
```

> We could also alternatively a `collections.defaultdict(int)` to remove the `if c not in counter` check in the second one. 
I didn't, because it's the no external libraries option. 

The lambda function I am passing to `sorted` handles the sorting first by popularity (decreasing hence the minus), and then by alphabet.

How about Go? Now the counter itself follows much the same, we can create a map of runes to ints, and increase the values as we iterate over the string. 

<div class="filename">counter.go</div>

```go
sentence = "Hello world"
counter := make(map[rune]int)
for _, c := range s {
    if c != ' ' {
        counter[c] += 1
    }
}
```

The bit that's somewhat more involved is sorting them (with a custom sorting function).

For this, I use the Go `sort` package (https://golang.org/pkg/sort/) and a list of letter structs.

```go 

type letter struct {
	char  rune
	count int
}

type letters []letter
```

We can use `sort.Interface`, which dictates what can be passed into the package's generic sorting function.
Sort.Interface has 3 methods; Len, Swap and Less. 
For this simple example, Len and Swap are trivial.

```go 
func (l letters) Len() int { return len(l) }

func (l letters) Swap(i, j int) {
	l[i], l[j] = l[j], l[i]
}
```

The key to getting the sort right is the `Less` function. 
Here if two letters are tied we compare the characters.

```go
func (l letters) Less(i, j int) bool {
	switch fd := l[i].count - l[j].count; {
	case fd < 0:
		return false
	case fd > 0:
		return true
	}
	return l[i].char < l[j].char
}
```

Bringing this together is then simple. We have to loop over our initial counter to create the letters slice, but then `sort.Sort` function will handle the heavy lifting.

I've also added a function to print out the slice nicely too.

```go
func (l letters) Print() {
	for _, letter := range l {
		fmt.Printf("%s : %d ", string(letter.char), letter.count)
	}
}

lettersSlice := letters{}
for char, freq := range counter {
    lettersSlice = append(lettersSlice, letter{char, freq})
}
sort.Sort(lettersSlice)
lettersSlice.Print()
// l : 3 o : 2 d : 1 e : 1 h : 1 r : 1 w : 1
```

More information about sorting in Go can be found here https://gobyexample.com/sorting-by-functions.

I've found this data structure very useful when solving algorithm challenges in the past.
I also like the nice clean example of types, structs and interfaces in Go. 

All code used in the post is [here](https://gist.github.com/jcockbain/e76b65fc13e4f19faf9d2ae318c7f5a6).
My solution to the original problem that inspired it can be found [here](https://github.com/jcockbain/advent-of-code-2016/blob/main/day05/main.go).


Thanks for checking out this quick post! 👊
