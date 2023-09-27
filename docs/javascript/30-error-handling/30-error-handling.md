---
title:  Error Handling (try-catch)
description: "Error Handling (try-catch)"
hide_table_of_contents: true
---

Error handling is the process of managing and responding to errors or exceptions that can occur during the execution of a JavaScript program. Errors can occur for various reasons, such as `incorrect input`, `network issues`, or `programming mistakes`.

Here are the key aspects of error handling in JavaScript:

1. **Error Objects**: JavaScript provides built-in error objects like `Error`, `SyntaxError`, `TypeError`, and others that represent different types of errors. These objects contain information about the error, such as a message and a stack trace.

2. **Throwing Errors**: You can manually throw errors using the `throw` statement. This allows you to create custom error messages and scenarios:

    ```javascript
    function divide(a, b) {
      if (b === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return a / b;
    }
    ```

3. **Try...Catch Statements**: The primary mechanism for handling errors in JavaScript is the `try...catch` statement. You wrap the code that might throw an error inside a `try` block, and if an error occurs, it's caught and handled in the `catch` block.

 Here's a basic example:

```javascript
    try {
      // Code that might throw an error
    } catch (error) {
      // Handle the error here
    }
```

### Error Object :
 The `"Error" object` is typically used to handle and report runtime errors.

```js
1. name => Error
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

**Example Explanation:**

1. We define a function called `sayHello` using the keyword `function`. This function doesn't take any parameters , simply returns the string "Hello."

2. We declare a variable named `message` and initialize it with the value `null`. 

3. Inside a `try` block, we attempt to call the `sayHello` function and assign its result to the `message` variable. This means we're trying to set the `message` variable to "Hello".

4. There's a `try...catch` construct. If any errors occur within the `try` block (like if `sayHello` had a problem), the code inside the `catch` block would execute. In this case, if there were an error, it would log the error to the console using `console.log(e)`.

5. `console.log(message)`. This line prints the value of the `message` variable to the console.

So, when you run this code, it will print "Hello" to the console.  it defines a function to say hello, calls that function to get the message "Hello" and then prints that message to the console.

