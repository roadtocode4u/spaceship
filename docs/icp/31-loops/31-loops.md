---
title: Loops
description: "Loops"
hide_table_of_contents: true
---

## Loops in Javascript

Loop are used to execute give codeblock repetatively & contineously.

**There are 3 types of loops are available in JavaScript.**

1. `for loop`
2. `while loop`
3. `do-while loop`

### for loop

The `for loop` is the most commonly used loop in JavaScript. It iterates over a block of code a specific number of times.

**Syntax :**

```js
for (initialization; condition; expression) {
  // code to be executed
}
```

Here, In the above Syntax

**Initialization :** It is usually a variable declaration and initialization.

**Condition :** This is where you specify the condition that must be true for the loop to continue executing. If the condition is false, the loop will terminate.

**Expression :** This is where you update the value of the loop counter after each iteration.

**Example :**

```js
for (let i = 0; i < 5; i++) {
  document.write("<br/> Hello Students");
}
```

**Output :**

Hello Students <br/>
Hello Students <br/>
Hello Students <br/>
Hello Students <br/>
Hello Students

In the above example, `let i=0;` initializes a variable `i` with a value of `0`. `i<5;` sets the condition for the loop to continue running, which is that `i` must be less than `5`. `i++` increments `i` by `1` after each iteration of the loop. `document.write("<br/> Hello Students");` writes the string `"<br/> Hello Students"` to the HTML document.

### Break and Continue Keyword

#### break

`break` keyword is used to immediately terminate a loop and resume execution at the next statement after the loop.

**Example :**

```js
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
```

**Output :**

0 <br/>
1 <br/>
2 <br/>
3 <br/>
4 <br/>

In the above example `for` loop that starts at `0` and iterates up to `9`, with `i` being the loop counter variable.

During each iteration of the loop, it checks if `i` is equal to `5` using an `if statement`. If `i` is equal to `5`, then the `break` statement is executed, causing the loop to terminate immediately and skip the remaining iterations.

If `i` is not equal to `5`, then the loop continues to execute normally and the `console.log(i)` statement is executed, which prints the current value of `i` to the console.

#### continue

`continue` is used to skip the current iteration of a loop and move on to the next iteration.

**Example :**

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
```

In the above example for loop that starts at `0` and iterates up to `9`, with `i` being the loop counter variable.

During each iteration of the loop, it checks if `i` is divisible by `2` (i.e., if i % 2 === 0) using an `if statement`. If `i` is divisible by `2`, then the continue statement is executed, causing the current iteration of the loop to be skipped and moving on to the next iteration.

If `i` is not divisible by `2`, then the loop continues to execute normally and the `console.log(i)` statement is executed, which prints the current value of `i` to the console.

### while loop and do-while loop

In a while loop, the loop executes as long as the condition is `true`.

**Syntax :**

```js
while (condition) {
  // code block to be executed
}
```

**Example :**

```js
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
```

In the above example, this loop initializes `i` to `0` and continues to execute as long as `i is less than 10`. On each iteration of the loop, the value of `i` is printed to the console using `console.log()`, and then `i` is incremented by `1` using `i++`.

**You can also use a do-while loop, which is similar to a while loop but guarantees that the loop body is executed at least once.**

**Syntax :**

```js
do {
  // statements to be executed inside the loop
} while (condition);
```

**Example :**

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
```

In the above example, this loop initializes `i` to `0 ` and executes the loop body at least `once`. On each iteration of the loop, the value of `i` is printed to the console using `console.log()`, and then `i` is incremented by `1` using `i++`. The loop continues to execute as long as `i is less than 10`.

## Loops Using Array

```js
const arr = ["A", "B", "C", "D"];

for (let i = 0; i < 4; i++) {
  console.log(arr[i]);
}
```

**Output :**

A<br/>
B<br/>
C<br/>
D

**Example :**

```js
const students = [
  "Gitanjali",
  "Achal",
  "Kunal",
  "Kaveri",
  "Shanzey",
  "Suyash",
  "Vrushali",
];

for (let i = 0; i < 7; i++) {
  console.log(`Hello ${students[i]}`);
}
```

**Output :**

> Hello Gitanjali<br/>
> Hello Achal<br/>
> Hello Kunal<br/>
> Hello Kaveri<br/>
> Hello Shanzey<br/>
> Hello Suyash<br/>
> Hello Vrushali

In the above example, we initialized an array name of that array is `students` is declared with a list of student names. Each name is a string element in the array. This is a for loop that starts with `i` initialized to `0`. The loop will continue as long as `i` is less than `7`.

After each iteration, the value of `i` is incremented by `1`. Then prints a greeting message using the `console.log()` function. In this message we use template string for combine the string `"Hello"` with the current student's name using the `students[i]`.

**Example :**

```js
const students = [
  "Gitanjali",
  "Achal",
  "Kunal",
  "Kaveri",
  "Shanzey",
  "Suyash",
  "Vrushali",
];

for (let i = 0; i < students.length; i++) {
  console.log(`Hello ${students[i]}`);
}
```

**Output :**

Hello Gitanjali<br/>
Hello Achal<br/>
Hello Kunal<br/>
Hello Kaveri<br/>
Hello Shanzey<br/>
Hello Suyash<br/>
Hello Vrushali

In the above example, we initialized an array name of that array is `students` is declared with a list of student names. Each name is a string element in the array. This is a for loop that starts with `i` initialized to `0`. The loop will continue as long as `i` is less than `students.length`.

After each iteration, the value of `i` is incremented by `1`. Then prints a greeting message using the `console.log()` function. In this message we use template string for combine the string `"Hello"` with the current student's name using the `students[i]`.

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Array With Loop</title>
    <style>
      .student-card {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
        background-color: blueviolet;
        color: white;
      }
    </style>
  </head>
  <body>
    <script>
      const students = [
        "Achal",
        "Kunal",
        "Kaveri",
        "Shanzey",
        "Suyash",
        "Vrushali",
        "Swapnali",
        "Yash",
        "Komal",
        "Urmila",
      ];

      for (let i = 0; i < students.length; i++) {
        document.write(
          ` <div class='student-card'>
        Hello ${students[i]}
      </div>`
        );
      }
    </script>
  </body>
</html>
```

**Output :**

<img src="/icp/31/screenshot-1.png" alt="screenshot-1" width="600px"/>

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>
      body {
        background-color: bisque;
      }
      .student-card {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
        background-color: blueviolet;
        color: white;
        font-size: 20px;
      }
      .app-title {
        text-align: center;
        color: deepskyblue;
      }
      .list {
        background-color: white;
        padding: 10px;
        border-radius: 15px;
      }
    </style>
  </head>
  <body>
    <h1 class="app-title">Student's List</h1>

    <div class="list" id="list"></div>

    <script>
      const students = ["Achal", "Kunal", "Kaveri", "Shanzey", "Suyash"];

      const listElement = document.getElementById("list");

      for (let i = 0; i < students.length; i++) {
        listElement.innerHTML += `
        <div class='student-card'>
             Hello ${students[i]}
        </div>
       `;
      }
    </script>
  </body>
</html>
```

**Output :**

<img src="/icp/31/screenshot-2.png" alt="screenshot-2" width="600px"/>
