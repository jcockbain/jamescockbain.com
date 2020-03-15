---
title: Javascript objects vs arrays
date: 2020-03-25
template: post
description: Coming soon! This article will be about the basic differences between working with javascript arrays of objects and objects of objects.
tags: ["javascript"]
---

This article will be about the basic differences between working with javascript arrays of objects and objects of objects.

The plan is to look at the methods of CRUD operations on these structures, and the pros and cons of each with regards to both code simplicity and efficiency.

A canine based example would be:

```Javascript
[
  {
    name: "Frank",
    breed: "Poodle",
    age: 12,
  },
  {
    name: "Dave",
    breed: "Jack Russell",
    age: 7,
  },
]
```

vs

```Javascript
{
  "Frank": {
    breed: "Poodle",
    age: 12,
  },
  "Dave": {
    breed: "Jack Russell",
    age: 7,
  },
}
```

Coming soon!
