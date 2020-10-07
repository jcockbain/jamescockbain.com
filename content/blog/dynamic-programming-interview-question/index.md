---
title: Word Segmentation - Solving an algorithms interview problem
date: 2020-10-02
template: post
description: An interview question I was asked, with an interesting recursive solution.
tags: ["algorithms", "python","dynamic programming"]
---

I've just completed a job-search. As a non computer-science graduate, something I prepared for in depth were algorithms questions.

An area I, and many others, find challenging is recursion dynamic.
Therefore, when the following question popped up in one, I felt a familiar sense of dread.

I felt it was an interesting problem, a nice step up from the classic fibonacci / triple jump examples for recursive algorithms.

Here's a summary of the problem, and how my answer developed.

## The Problem

I was asked to write a function which, given a set of words and an input string, returns a valid segmentation of that string into words from the set.
The online IDE had a couple of tests of the following form pre-written.

```python
    words = ["hello", "world"]
    assert("hello world", valid_segmentation(words, "helloworld"))
    assert("", valid_segmentation(words, "helloworlds"))
```

> I'm returning an empty string here if there is no valid segmentation. I can't remember if this was the brief but we'll do it here for simplicity.

## Greedy Solution

To get this simple test case to pass, my instinct was to use a greedy style approach, whereby I built up each word until it was seen in my word set.

```python
    def valid_segmentation(words, string):
        current_string = ""
        res = []
        for c in string:
            current_string += c
            if current_sting in words:
                res.append(current_string)
                current_string = ""
        return
```

Nice! Green tests, but I deep-down I knew celebrations were premature.
The interviewers hit me with a second set of tests, in the following style.

```python
    words = ["cats", "cat", "and"]
    assert(True, valid_segmentation(words, "catsand"))
```

Now, our initial approach will jump straight in and pull out `cat` as a first word.
It will then get to the end of the string with current_word as `sand`, which is not a word according to our dictionary.
The greedy algorithm has led us down a dead-end.

## Dynamic Programming Solution - Part 1

We need a way to trial different paths. My inclination here was that recursion would help.

Whenever a word is a match for one the word set, we trial

```python
    def valid_segmentation(words, string):

        def avl
        current_string = ""
        res = []
        for c in string:
            current_string += c
            if current_sting in words:
                res.append(current_string)
                current_string = ""
        return\
```

What's the efficiency here?

## Dynamic Programming Solution - Part 2

