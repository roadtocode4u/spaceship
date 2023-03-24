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

## Method on Array

**1. length**

To count total elements in the array 

**Code :**

```js
let marks = [50,45,30,20,10]
marks.length
```

**Output :**

>5

**2. push()**

To add element from the end of array

**Code :**

```js
const students = ["A","B","C","D"]
console.log(students)
students.push("E")
console.log(students)
```

**Output :**

>['A','B','C','D'] <br/>
>['A','B','C','D','E]

**3. pop()**

To remove element from the end of array

**Code :**

```js
const students = ["A","B","C","D"]
console.log(students)
students.pop()
console.log(students)
```

**Output :**

>['A','B','C','D'] <br/>
>['A','B','C']

**4. unshift**

To insert element from the start of array.

**Code :**

```js
const students = ["A","B","C","D"]
console.log(students)
students.unshift("E")
console.log(students)
```

**Output :**

>['A','B','C','D'] <br/>
>['E','A','B','C','D']

**5. Shift**

To delete elements from the start of array.

**Code :**

```js
const students = ["A","B","C","D"]
console.log(students)
students.shift()
console.log(students)
```

**Output :**

>['A','B','C','D'] <br/>
>['B','C','D']

**6. splice()**
This function can perform insertion and deletion at once.

```js
splice(index, no.of elements to delete, elements to insert)
```

**Code :**

```js
const students = ["A","B","C","D","E","F"]
console.log(students)
students.splice(1, 2,"W","Q")
console.log(students)
```

**Output :**

>['A','B','C','D','E','F'] <br/>
>['A','B','W','Q',E,'F']

**7. join()**

Convert array to string default separator is `,` but we can change it. 

**Code :**

```js
const students = ["A","B","C","D","E","F"] <br/>
console.log(students.join())
```

**Output :**

>['A','B','C','D','E','F'] <br/>
>A,B,C,D,E,F

**Code :**

```js
const students = ["A","B","C","D","E","F"]
console.log(students.join("*"))
```

**Output :**

>['A','B','C','D','E','F'] <br/>
>A*B*C*D*E*F

**8. reverse()**

**Code :**

```js
const arr = ["A","B","C","D"]
arr.reverse()
console.log(arr)
```

**Output :**

>['D','C','B','A']


**9. sort()**

**Code :**

```js
const arr = ["Z","A","D","B"]
arr.sort()
console.log(arr)
```

**Output :**

>['A','B','D','Z']

**10. indexOf()**

**Code :**

```js
const arr = ["Z","A","D","B"]
const index = arr.indexOf("A")
console.log(index)
```

**Output :**

>2