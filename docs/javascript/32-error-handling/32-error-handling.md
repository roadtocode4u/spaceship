---
title:  Error Handling (try-catch)
description: "Error Handling (try-catch)"
hide_table_of_contents: true
---

Error handling is the process of managing and responding to errors or exceptions that can occur during the execution of a JavaScript program. Errors can occur for various reasons, such as `incorrect input`, `network issues`, or `programming mistakes`.

1. **Throwing Errors**: You can use the throw statement to manually throw custom errors or exceptions. This is often useful when you want to create your own error conditions in your code.

    ```javascript
    console.log('Statement 1')
    throw new Error('You have an error!')
    console.log('Statement 2')
    console.log('Statement 3')
    ```

2. **Try...Catch Statements**: The most common way to handle errors in JavaScript is by using `try-catch statements`. You wrap the code that might throw an error inside a `try` block, and if an error occurs, it's caught and handled in the `catch` block.

**Syntax :**
```javascript
    try {
      // Code that might throw an error
    } catch (error) {
      // Handle the error here
    }
```
**Example :**

```javascript
   console.log('Statement 1')
   console.log('Statement 2')
    try {
      throw new Error('You have an error!')
    } catch (error){
      console.log(error)
    }
    console.log('Statement 3')
```
**output:**
>Statement 1 <br/>
>Statement 2 <br/>
>Error: You have an errror!<br/>
>Statement 3

### Error Object :
There are 3 parameters in Error Object:

```js
1. name
2. message
3. stack
```
**1. name:**
This field indicates the type or name of the error, such as `"TypeError"` or `"SyntaxError."` It helps identify the nature of the error.

```javascript
console.log('Statement 1')
console.log('Statement 2')
try{
    throw new Error('You have an error!')
}
catch(e){
    console.log(e.name)
}
console.log('Statement 3')
```
**Output :**

>Statement 1<br/>
>Statement 2<br/>
>Error<br/>
>Statement 3

**2. message:**
The `message` field contains a human-readable description of the error, providing more details about what went wrong. It helps developers understand the issue.

```javascript
console.log('Statement 1')
console.log('Statement 2')
try{
    throw new Error('You have an error!')
}
catch(e){
    console.log(e.message)
}
console.log('Statement 3')
```
**Output :**

>Statement 1<br/>
>Statement 2<br/>
>You have an error!<br/>
>Statement 3

**3. stack:**
The `stack field` contains a trace of the function calls and execution context that led to the error. It helps developers trace back to the source of the error in the code.

```javascript
console.log('Statement 1')
console.log('Statement 2')
try{
    throw new Error('You have an error!')
}
catch(e){
    console.log(e.message)
}
console.log('Statement 3')
```
**Output :**

>Statement 1<br/>
>Statement 2<br/>
>Error : You have an error! <br/>
at Object. (D:\RTC Internship Cohort\RTC Practice code\javascript-practice\error-handling.js:4:11)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47<br/>
>Statement 3

**Example :**

```javascript
function sayHello(){
    return "Hello"
}

let message =  null;
try {
    message = sayHello()
}
catch(e){
    console.log(e)
}
console.log(message)
```
**Output :**

>Hello