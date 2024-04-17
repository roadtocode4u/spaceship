---
title: Array
description: "Array"
hide_table_of_contents: true
---

## Array in js

Single variable which can **store** multiple values. An array is a data structure that allows you to store a **collection of elements**, such as **numbers, strings, objects**, or other arrays, in a `single variable`. Arrays are defined using square brackets `[]` and each element in the array is separated by a `comma`. Array index always start from `0`.

**Example :**

```js
const students = ["Harsh", "Kashifa", "Yogita", "Ankita", "Vrushali"];
console.log(students);
```

**Output :**

> ['Harsh', 'Kashifa', 'Yogita', 'Ankita', 'Vrushali']

In the above code, we defines an array called `students` with five elements: `Harsh`, `Kashifa`, `Yogita`, `Ankita`, and `Vrushali`.

The `console.log()` function is then used to print the entire `students` array to the console.

**You can access elements in an array using their index, which starts at `0`. For example, to access the first element in `students`, you would use:**

```js
console.log(students[0]);
```

```js
const students = ["Harsh", "Kashifa", "Yogita", "Ankita", "Vrushali"];

const lastStudent = students[4];

console.log(lastStudent);
```

**Output :**

> Vrushali

In the above example, we creates an array called `students` that contains the names of five students.
Then it creates a constant variable called `lastStudent` and assigns to it the value of the last element of the `students` array using the index `4`. Finally, the `console.log()` function is used to output the value of `lastStudent` to the console.

**You can also change the value of an element in an array by assigning a new value to its index, like this:**

**Syntax :**

```js
students[3] = "four";
```

**Example :**

```js
const students = ["Harsh", "Kashifa", "Yogita", "Ankita", "Vrushali"];

students[4] = "Vrushali Khedkar";

console.log(students);
```

**Output :**

> ['Harsh','Kashifa','Yogita','Ankita','Vrushali Khedkar']

## Methods On Array

**1. length :**

To `count` total elements in the array.

**Example :**

```js
let marks = [50, 45, 30, 20, 10];
let count = marks.length;
console.log(count);
```

**Output :**

> 5

In the above example, we defines an array called `marks` with five elements: `50`, `45`, `30`, `20`, and `10`.

The `length` property of the `marks` array is then accessed using the `.` notation and returned. The length property returns the number of elements in the array, which is `5` in this case.

**2. push() :**

To `add` element from the end of array.

**Example :**

```js
const students = ["A", "B", "C", "D"];
console.log(students);
students.push("E");
console.log(students);
```

**Output :**

> ['A','B','C','D'] <br/> >['A','B','C','D','E]

In the above example, we defines an array called `students` with four elements: `A`, `B`, `C`, and `D`.

The first `console.log()` function is then used to print the entire students array to the console.

The `push()` method is then called on the students array with the argument `E`. This adds the string `E` as a new element at the `end` of the students array.

The second `console.log()` function is then used to print the updated students array to the console.

**3. pop() :**

To `remove` element from the end of array.

**Example :**

```js
const students = ["A", "B", "C", "D"];
console.log(students);
students.pop();
console.log(students);
```

**Output :**

> ['A','B','C','D'] <br/> >['A','B','C']

In the above example, we defines an array called `students` with four elements: `A`, `B`, `C`, and `D`.

The first `console.log()` function is then used to print the entire students array to the console.

The `pop()` method is then called on the students array. This `removes` the last element `D` from the students array.

The second `console.log()` function is then used to print the updated students array to the console

**4. unshift() :**

To `insert` element from the start of array.

**Example :**

```js
const students = ["A", "B", "C", "D"];
console.log(students);
students.unshift("E");
console.log(students);
```

**Output :**

> ['A','B','C','D'] <br/> >['E','A','B','C','D']

In the above example, we defines an array called `students` with four elements: `A`, `B`, `C`, and `D`.

The first `console.log()` function is then used to print the entire students array to the console.

The `unshift()` method is then called on the students array with the argument `E`. This `adds` the string `E` as a new element at the `beginning of the students array`.

The second `console.log()` function is then used to print the updated students array to the console.

**5. shift() :**

To `delete` elements from the start of array.

**Example :**

```js
const students = ["A", "B", "C", "D"];
console.log(students);
students.shift();
console.log(students);
```

**Output :**

> ['A','B','C','D'] <br/> >['B','C','D']

In the above example, we defines an array called `students` with four elements: `A`, `B`, `C`, and `D`.

The first `console.log()` function is then used to print the entire students array to the console.

The `shift()` method is then called on the `students` array. This `removes the first element A from the students array`.

The second `console.log()` function is then used to print the updated students array to the console.


### Implementing Queue using Array

Queue is a line where we can perform various operation on Queue  like` push(), pop(), unshift(), shift() `.

**Example of train ticket booking**
```js
const wl = ["Sahil", "Bhakti", "Sakshi"];
console.log(wl);
wl.push("Nikita");
console.log(wl);

wl.shift()
console.log(wl)
```
**Output**

> ["Sahil", "Bhakti", "Sakshi"] <br/> >["Sahil", "Bhakti", "Sakshi". "Nikita"]

>["Bhakti", "Sakshi". "Nikita"]


`wl.push(" ")` used to add passenger name in queue.
`wl.shift(" ")` used to remove or shift name from queue.

In this program  `[0:Sahil, 1:Bhakti, 2:Sakshi, 3:Nikita ]` this are waiting list names, this names can be added by using `wl.push()`.

After this if the ticket is confirm of index number 1:sahil then it will be automatically shift by using `wl.shift()`,then the list will be `[0:Bhakti, 1:Sakshi, 2:Nikita]`.

**6. splice() :**

This function can perform `insertion` and `deletion` at once.

**Syntax :**

```js
splice(index, no.of elements to delete, elements to insert)
```

**Example :**

```js
const students = ["A", "B", "C", "D", "E", "F"];
console.log(students);
students.splice(1, 2, "W", "Q");
console.log(students);
```

**Output :**

> ['A','B','C','D','E','F'] <br/> >['A','W','Q','D','E','F']

In the above example, we can defines an array called `students` with six elements: `A`, `B`, `C`, `D`, `E`, and `F`.

The first `console.log()` function is then used to print the entire students array to the console.

The ``splice()` method is then called on the `students` array with the arguments `1`, `2`, `W`, and `Q`. This removes two elements starting from the index `1`, which removes `C` and `D`, and inserts two new elements `W` and `Q` in their place.

The second `console.log()` function is then used to print the updated students array to the console.

**7. join() :**

Convert `array to string default` separator is `,` but we can change it.

**Example :**

```js
const students = ["A","B","C","D","E","F"]
console.log(students.join())
```

**Output :**

> ['A','B','C','D','E','F'] <br/>
> A,B,C,D,E,F

**Example :**

```js
const students = ["A", "B", "C", "D", "E", "F"];
console.log(students.join("*"));
```

**Output :**

> ['A','B','C','D','E','F'] <br/> >`A*B*C*D*E*F`

**8. reverse() :**

Converts an array in `reverse` order or `decending` order.

**Example :**

```js
const arr = ["A", "B", "C", "D"];
arr.reverse();
console.log(arr);
```

**Output :**

> ['D','C','B','A']

**9. sort() :**

Converts an array in `ascending` order.

**Example of ascending order :**

```js
const arr = ["Z", "A", "D", "B"];
arr.sort();
console.log(arr);
```

**Output :**

> ['A','B','D','Z']

**Example of descending order :**

```js
const arr = ["Z", "A", "D", "B"];
arr.sort();
console.log("Ascending :" + arr);

arr.reverse();
console.log("Descending : " + arr);
```

**Output :**

> Ascending : A,B,D,Z <br/>
> Descending : Z,D,B,A

**10. indexOf( ) :**

`indexOf()` method is used to find an array of element.

**Example :**

```js
const arr = ["Z", "A", "D", "B"];
const index = arr.indexOf("A");
console.log(index);
```

**Output :**

> 1

**11. includes() :**

`.includes()` method is used when you need to check if an array contains a particular value before proceeding with further operations.

**Example :**

```js
const students = ['Sargam', 'Sumit', 'Vishal', 'Vaishnavi'];

console.log(fruits.includes('Vishal')); // Output: true
console.log(fruits.includes('prajyot')); // Output: false

```

**Output :**

> true

> false


