---
title: Loops
description: "Loops"
hide_table_of_contents: true
---

## Loops in Javascript

Loop are used to execute give codeblock repetatively & contineously.

In Javascript 3 types of loop are avilable: 

1. `for loop`
2. `while loop`
3. `do-while loop`


### for loop

The `for loop` is the most commonly used loop in JavaScript. It iterates over a block of code a specific number of times.

**Syntax :**

```js
for (initialization; condition; expression) 
{
  // code to be executed
}
```

Here, In the above syntax

**Initialization**: It is usually a variable declaration and initialization.

**Condition**: This is where you specify the condition that must be true for the loop to continue executing. If the condition is false, the loop will terminate.

**Expression**: This is where you update the value of the loop counter after each iteration.


**Code :**

```js
for(let i=0; i<5; i++)
{
    document.write("<br/> Hello Students");
}
```

**Output :**

 Hello Students <br/>
 Hello Students <br/>
 Hello Students <br/>
 Hello Students <br/>
 Hello Students

 In the above code 

 `let i=0;` initializes a variable `i` with a value of `0`. `i<5;` sets the condition for the loop to continue running, which is that `i` must be less than `5`. `i++` increments `i` by `1` after each iteration of the loop. `document.write("<br/> Hello Students");` writes the string `"<br/> Hello Students"` to the HTML document.


 ### Break And Continue Keyword

#### break 

`break` keyword is used to immediately terminate a loop and resume execution at the next statement after the loop.

**Code :**

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

If `i` is not equal to `5`, then the loop continues to execute normally and the `console.log(i)`  statement is executed, which prints the current value of `i` to the console.

#### continue

`continue` is used to skip the current iteration of a loop and move on to the next iteration.


**code :**

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