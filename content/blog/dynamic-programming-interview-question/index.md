---
title: Word Segmentation - Solving a recursive algorithms problem
date: 2020-10-12
template: post
description: Given a set of words, and a string of characters - return a valid segmentation into a sentence.
tags: ["algorithms", "python","dynamic programming"]
---

## Introduction

I've just completed a job-search, this post details a problem I was asked in one of my interviews.
I've been a software developer for two years, but I'm not a computer science graduate and haven't completed a formal algorithms course.
My research of technical-interviews suggested algorithms questions were popular, particularly with [FAANG companies](https://en.wikipedia.org/wiki/Big_Tech).

I've therefore spent time practising these types of questions through [Leetcode](https://leetcode.com/), [HackerRank](https://www.hackerrank.com/dashboard) and the [Cracking the Coding Interview](http://www.crackingthecodinginterview.com/) book.
I was actually only asked algorithms questions for 2/8 London developer roles I interviewed for, so don't let this panic you.
More popular technical tests I found were take-home tests, or live coding exercises, which were a bit closer to day-to-day life on the job - fixing a bug, adding a feature to a codebase etc..
That said, I've really enjoyed learning about data-structures and algorithms, and definitely think it's a worthwhile thing to learn!

I felt this particular problem was interesting, and a nice step up from the classic fibonacci style examples for recursive algorithms.
There are also plenty of variants of it on LeetCode, which I've found helpful for testing and extending my understanding on this kind of programming.

The rest of this post will summarise the problem, then follow how my answer developed as I worked though solutions with the two very helpful interviewers.
Examples of my code are in Python, but more important is the logic behind building the solution.

## The Problem

I was asked to write a function which, given a set of words and an input string, returns a valid segmentation of that string into words from the set.
The online IDE had a couple of tests of the following form pre-written.

```python
words = {"hello", "world"}
assert("hello world", valid_segmentation(words, "helloworld"))
assert("", valid_segmentation(words, "helloworlds"))
```

I only needed to return segmentation, as long as one existed. Essentially, the crux is where to add spaces in a string to create a valid sentence.

> I'm returning an empty string here if there is no valid segmentation. I can't remember if this was the brief but we'll do it here for simplicity.

## Greedy Solution

To get these simple test case to pass, my first instinct was to use a greedy style approach, whereby I built up each word until it was seen in my word set.

```python
def valid_segmentation(words, string):
    current_string = ""
    res = []
    for c in string:
        current_string += c
        if current_string in words:
            res.append(current_string)
            current_string = ""
    return "" if current_string else " ".join(res)
```

So, we're building a word until it is valid, at which point we add that word to the sentence and reset our word.
If we end with an empty string, we know a segmentation has been found - otherwise it's invalid and we return an empty string.

I did realise here that further tests would break my solution, but in getting a basic solution written I did a couple of things:

- Settled my nerves
- Confirmed my understanding of the problem
- Showed my interviewers my basic coding skills, before potentially getting tangled in more complex logic
- Gave us a chance to have a quick chat about Test Driven Development, and using short development cycles to pass specific tests

After quickly running through this code, the interviewers hit me with a second set of tests, in the following style. As expected, this failed with my initial implementation.

```python
words = ["cats", "cat", "and"]
assert("cat sand", valid_segmentation(words, "catsand"))
```

Now, our initial approach will jump straight in and pull out "cat" as a first word. It will then get to the end of the string with current_string as "sand", which is not a word according to our dictionary.

The greedy algorithm has led us down a dead-end. We need a way to trial all possible paths. My inclination therefore was that recursion would help.

## Dynamic Programming Solution

Whenever a word is found, we need to test both the path that includes that word, and the ones that continue to build the current word.
To do this, we can use a recursive function that takes a start index of the string.
Its job is to find whether we can segment the string from that index onwards - and then if we can to return a valid segmentation (there may be multiple).

The trickiest part I find with these problems is identifying what to return and how to handle it. This is where I spent the most time in interview.
You'll see in the code below I'm using a second return value, to indicate whether a segmentation was possible from that start index.


```python
def valid_segmentation_2(words, string):
    def valid_segmentation_recursive(start):
        if start == len(string):
            return [], True
        for end in range(start, len(string) + 1):
            word = string[start:end]
            if word in words:
                remaining_words, result = valid_segmentation_recursive(end)
                if result:
                    return [word] + remaining_words, True
        return [""], False

    segmentation, is_valid = valid_segmentation_recursive(0)
    return " ".join(segmentation)
```

In the interview, I was asked to walk through the code for the given test cases.
We can see, as planned, the first path "cat sand" is explored but doesn't end on a valid word, and so our algorithm moves on to "cats and", which is valid and is therefore returned.

What is the efficiency here? It's a recursive function, so my instinct was recursive efficiency.
Thinking about the worst case scenario, where every new letter creates a word, we're making 2 choices per letter of the string.
Hence, we can say it's O(2ⁿ), where n refers to the length of the input string.

## Top Down Dynamic Programming

Following the next stage of the Dynamic Programming procedure, we can look for repeated subproblems to cache.
In this case, we can cache whether we can segment the substring after an index, and the first valid segmentation itself from that index.
I do this below by using an array of tuples for each index.

```python
def valid_segmentation_3(words, string):
    cache = [None] * len(string)

    def valid_segmentation_recursive(start):
        if start == len(string):
            return ([], True)

        if start not in cache:
            segmentation, segmentation_exists = [""], False
            for end in range(start, len(string) + 1):
                word = string[start:end]
                if word in words:
                    remaining_words, result = valid_segmentation_recursive(end)
                    if result:
                        segmentation_exists = True
                        segmentation = [word] + remaining_words
                        break
            cache[start] = segmentation, segmentation_exists
        return cache[start]

    segmentation, is_valid = valid_segmentation_recursive(0)
    return " ".join(segmentation)
```

A small change to the code, but this brings the time complexity down to O(n²).
To prove this efficiency is quite complex, but it essentially boils down to the sum of the integers 1 to n being n².

## Bottom Up Dynamic Programming

The final stage in the thought process.
Now we understand the cached sub-problems required to build our algorithm, can we simplify the code to build this "bottom-up"?

We can do this by thinking about building up the string

```python
def valid_segmentation_4(words, string):
    cache = [([], False)] * (len(string) + 1)
    cache[0] = ([], True)
    for i in range(len(string)):
        for j in range(i, len(string)):
            word = string[i : j + 1]
            if cache[i][1] and word in words:
                cache[j + 1] = (cache[i][0] + [word], True)
    segmentation, is_valid = cache[-1]
    return " ".join(segmentation) if is_valid else ""
```

O(n²) time efficiency but you could say simpler code, not requiring recursion.
In come cases, bottom-up dynamic programming can bring improvements in space-efficiency too.

## Wrapping Up

Hopefully this has given an insight into the flow of this technical interview.
Something that definitely helped me grasp Dynamic Programming was understanding this as a procedure, which has become my go-to whenever my instinct suggests a recursive solution: 

1. Writing a "brute force" recursive algorithm, looking to minimise the input variables to make caching simpler
2. Look at optimisations through caching subproblem results
3. Look at optimisations through iteratively building up subproblem results

[Grokking Dynamic Programming Patterns for Coding Interviews](https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews) offers a fantastic course on this prcedure, with plenty of examples to practice on.

Some closely-related LeetCode questions are here:

- https://leetcode.com/problems/word-break/
- https://leetcode.com/problems/word-break-ii/

Alongside the Dynamic Programming Leetcode problems, I've benefited from the Recursion chapter in Cracking the Coding Interview.
My solutions to the problems in the book are [here](https://github.com/jcockbain/ctci-solutions), if you're interested.

It's worth noting my thought processes and code here are the product of reflection time and without the pressure of interview. What has presented here is more polished than that which I produced at the time, and I received positive feedback and a job offer.

Thanks for reading, and good luck!