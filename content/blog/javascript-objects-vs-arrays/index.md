---
title: Javascript objects vs arrays
date: 2020-03-28
template: post
description: Coming soon! This article will be about the basic differences between working with javascript arrays of objects and objects of objects.
tags: ["javascript"]
---

This article will be about the basic differences between working with javascript arrays of objects and objects of objects.

The plan is to look at the methods of CRUD operations on these structures, and the pros and cons of each with regards to both code simplicity and efficiency.

A canine based example would be:

<div class="filename">dogArray.js</div>

```javascript{numberLines: true}
const dogs = [
  {
    name: "Frank",
    breed: "Labrador",
    age: 12,
  },
  {
    name: "Minty",
    breed: "Westipoo",
    age: 2,
  },
]
```

vs

<div class="filename">dogObject.js</div>

```javascript{numberLines: true}
const dogs = {
  Frank: {
    breed: "Labrador",
    age: 12,
  },
  Minty: {
    breed: "Westipoo",
    age: 2,
  },
}
```

Coming soon!
