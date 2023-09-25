---
title: Callback Function
description: "Callback Function"
hide_table_of_contents: true
---

A **callback function** is a function that is passed as an argument to another function and is intended to be called when a specific event occurs or when a particular task is completed. Callback functions are a fundamental concept in event-driven and asynchronous programming.

- **Passing a Function:** You provide a function (the callback) as an argument to another function (often called the "parent" or "caller" function).

- **Execution Control:** The parent function carries on with its execution, and at some point, it triggers or calls the callback function based on certain conditions or events.

- **Custom Behavior:** The `callback function` is designed to perform a specific action or set of actions. When it's called by the parent function, it executes those actions.

**Example :**

```javascript
function sayHello(){
  console.log('Hello');
}

function useEffect(fn, arr){
  fn(); // Here, we're calling the function passed as 'fn', which is sayHello
  console.log(arr); // Here, we're logging the 'arr' array to the console
}

useEffect(sayHello, ['a', 'b', 'c']);
```

1. **`sayHello` Function**: This is a simple function that logs "Hello" to the console when called.

2. **`useEffect` Function**: It takes two parameters:

   - `fn` (Function): This parameter is a callback function. In this case, it's the `sayHello` function, which is the function to be executed.
   - `arr` (Array): This parameter is an array of values, which will be logged to the console.

   Inside `useEffect`:
   - It calls the `fn` function, which is the callback function `sayHello`. This is where the callback function is used. The callback function is executed when `useEffect` is called.
   - It logs the contents of the `arr` array to the console.

3. **Calling `useEffect`**: The `useEffect` function is called with two arguments:

   - `sayHello`: This is the callback function that will be executed.
   - `['a', 'b', 'c']`: This is an array that will be logged to the console.

So, in this example,

`sayHello` is the `callback function` because it's passed as an argument to the `useEffect` **higher-order function.**

`useEffect` is **the higher-order function** because it takes a `callback function (fn)` as one of its arguments.

1. Calls the `sayHello` function, which logs "Hello" to the console.
2. Logs the array `['a', 'b', 'c']` to the console.

This demonstrates the use of a callback function (`sayHello`) within the `useEffect` function.

Callbacks are commonly used in scenarios where you want to specify a custom action to be executed within another function at a specific point in its execution. In this example, `sayHello` is the callback function that gets executed within `useEffect`.


