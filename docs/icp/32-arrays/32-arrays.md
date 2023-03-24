---
title: Arrays
description: "Arrays"
hide_table_of_contents: true
---

## Array in js

Single variable which can store multiple values. An array is a data structure that allows you to store a collection of elements, such as numbers, strings, objects, or other arrays, in a single variable. Arrays are defined using square brackets `[]` and each element in the array is separated by a `comma`.Array index always start from `0`.

**Code :**

```js
const students = ['Harsh','Kashifa','Yogita','Ankita','Vrushali']
console.log(students)
```

**Output :**
> ['Harsh','Kashifa','Yogita','Ankita','Vrushali']

**You can access elements in an array using their index, which starts at `0`. For example, to access the first element in `students`, you would use:**

```js 
console.log(students[0]);
```

```js
const students = ['Harsh','Kashifa','Yogita','Ankita','Vrushali']

const lastStudent = students[4]

console.log(lastStudent)
```

**Output :**

> Vrushali

In the above example we creates an array called `students` that contains the names of five students:
It then creates a constant variable called `lastStudent` and assigns to it the value of the last element of the `students` array using the index `4`.Finally, the `console.log()` function is used to output the value of `lastStudent` to the console.

**You can also change the value of an element in an array by assigning a new value to its index, like this:**

```js
students[3] = "four";
```

```js
const students = ['Harsh','Kashifa','Yogita','Ankita','Vrushali']

students[4] = "Vrushali Khedkar"

console.log(students)
```
