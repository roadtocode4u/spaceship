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

