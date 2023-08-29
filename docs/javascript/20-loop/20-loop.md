---
title: Loop
description: "Loop"
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


**Example :**

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

 
 In the above example,`let i=0;` initializes a variable `i` with a value of `0`. `i<5;` sets the condition for the loop to continue running, which is that `i` must be less than `5`. `i++` increments `i` by `1` after each iteration of the loop. `document.write("<br/> Hello Students");` writes the string `"<br/> Hello Students"` to the HTML document.

## increment

**Example :**

```js
for(let i=1; i<5; i++)
{
    console.log(i);
}
```

**Output :**

 1 <br/>
 2 <br/>
 3 <br/>
 4 <br/>


 In the above example, `let i=1;` initializes a variable `i` with a value of `1`. `i<5;` sets the condition for the loop to continue running, which is that `i` must be less than `5`. `i++` increments `i` by `1` after each iteration of the loop. The value of `'i'` is printed to the console. So, it will display the numbers `1 to 5 `on the console.

 **Example :**

```js
for(let i=1; i<=5; i++)
{
    console.log(i);
}
```

**Output :**

 1 <br/>
 2 <br/>
 3 <br/>
 4 <br/>
 5

In the above example, a` 'for'` loop is used to count from `1 to 5`, and with each iteration, the value of `'i'` is printed to the console. So, it will display the numbers `1 to 5 `on the console.

**Example :**

```js
for(let i=1; i<=20; i++)
{
    if(i%2==0){
         console.log(i)
    }
}
```

**Output :**

 2 <br/>
 4 <br/>
 8 <br/>
 10 <br/>
 12 <br/>
 14 <br/>
 16 <br/>
 18 <br/>
 20 <br/>

 In the above example, a `'for`' loop is used to iterate from `1 to 20`. During each iteration, the code checks if the current value of `'i' `is `divisible by 2 `(which means it's an even number). If `'i'` is  `even`, it will be printed to the `console`. So, this code will display all the `even` numbers from `1 to 20` on the console.

 **Example :**

```js
for(let i=1; i<=20; i++)
{
    if(i%2!=0){
         console.log(i)
    }
}
```

**Output :**

 1 <br/>
 3 <br/>
 5 <br/>
 7 <br/>
 9 <br/>
 11 <br/>
 13 <br/>
 15 <br/>
 17 <br/>
 19 <br/>

 In the above example, a `'for'` loop is used to count from `1 to 20`. Within each iteration, there's a condition that checks if the current value of` 'i' `is not `divisible by 2`, effectively identifying `odd numbers`. If `'i'` is  an `odd number`, it gets printed to the `console`. Consequently, this code will display all the `odd numbers` between `1 and 20` on the console.

 **Example :**

```js
for(let i=1; i<=20; i+=2)
{
         console.log(i)
}
```

**Output :**

 1 <br/>
 3 <br/>
 5 <br/>
 7 <br/>
 9 <br/>
 11 <br/>
 13 <br/>
 15 <br/>
 17 <br/>
 19 <br/>

In the above example, a `'for'` loop is used to `start at 1 and increment 'i' by 2` in each iteration, effectively skipping even numbers. During each iteration, the value of `'i'` is printed to the console. So, this code will display a sequence of `odd numbers` starting from `1 and ending at 19` on the console.

 **Example :**

```js
for(let i=2; i<=20; i+=2)
{
     console.log(i)
}
```

**Output :**

 2 <br/>
 4 <br/>
 8 <br/>
 10 <br/>
 12 <br/>
 14 <br/>
 16 <br/>
 18 <br/>
 20 <br/>

In the above example, a `'for' `loop begins with `'i'` set to` 2 and increments 'i' by 2 `in each iteration. This means it focuses on `even numbers`. During each iteration, the value of `'i'` is printed to the console. So, this code will display a sequence of `even numbers `starting from `2 and ending at 20 `on the console.

 
 ## decrement

 **Example :**

```js
for(let i=5; i>=1; i--)
{
     console.log(i)
}
```

**Output :**

 5 <br/>
 4 <br/>
 3 <br/>
 2 <br/>
 1 

 
In the above example, a `'for'` loop starts with `'i'` set to `5 `and counts `down to 1` in each iteration. During each iteration, the value of` 'i'` is printed to the console. So, this code will display a countdown of numbers from `5 to 1` on the console.

 ## Using Array with Loop

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

```js
 function sendEmail(studentName){
    console.log(`Mail send to ${studentName}`)
 }
 
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
  sendEmail(students[i]);
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