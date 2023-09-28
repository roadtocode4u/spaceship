---
title:  Async Await and Promises
description: "Async Await and Promises"
hide_table_of_contents: true
---

## Async Functions

Async functions are a way to handle asynchronous operations in JavaScript. They make it easier to write and reason about asynchronous code by allowing you to write code that looks more synchronous.

**Example 1:**

```javascript
function runForLongTime(){
    for (let i = 0; i < 1000000000; i++){}
    console.log('Run for long time done !');
}

function runForShortTime(){
    console.log('Run for short time done !');
}

runForLongTime();
runForShortTime();
```
**output:**
>Run for long time done ! <br/>
>Run for short time done ! <br/>

In this example, you have two functions: `runForLongTime` and `runForShortTime`. In the first function, you have a long-running loop, and in the second one, you simply log a message. When you call these functions, the long-running function blocks other code execution until it's finished, which is why the `Run for short time done !` message is only printed after the long-running function is done.

**Example 2:**

```javascript
async function runForLongTime(){
    for (let i = 0; i < 1000000000; i++){}
    console.log('Run for long time done !');
}

async function runForShortTime(){
    console.log('Run for short time done !');
}

runForLongTime();
runForShortTime();
```
**output:**
>Run for long time done ! <br/>
>Run for short time done ! <br/>

In this example, the same functions are marked as `async`. Even though `runForLongTime` has a long-running loop, it doesn't block other code execution because it's marked as `async`. The event loop continues to run other code while this function is running. This makes your code more responsive.

**Example 3:**

```javascript
async function runForLongTime(){
   return "Done"
}

const p = runForLongTime();

console.log(p);
```
**output:**
>Promise { 'Done' }

In this example, `runForLongTime` is an `async` function that doesn't contain any asynchronous operations. It returns `Done` When you call this function, it returns a `Promise` immediately, which resolves with `Done` You can use `.then()` to handle the result when the `promise` is resolved.

## Promise

A promise is an object that eventually leads to an asynchronous operation’s `completion` or `failure`. A promise can be in one of three states: `pending`, `fulfilled`, or `rejected`. When the asynchronous operation is completed, the Promise will either be fulfilled with a value or rejected with an error.

```javascript
1. Pending 2. Fulfilled 3. Rejected
```

1. **Pending:** Initial state, before the promise is resolved or rejected.

2. **Fulfilled:** The promise is resolved successfully, and it has a result value.

3. **Rejected:** The promise is rejected with an error or reason for failure.

**Example 1: Fullfilled**

```javascript
async function runForLongTime(){
    for(let i = 0; i < 3000000000; i++){}
   return "Function Finished";
}

const p = runForLongTime();
console.log(p);

p. then((result)=>{
    console.log(result);
});
```
**output:**
>Promise { 'Function Finished' }<br/>
>Function Finished

In this example, `runForLongTime` is an async function with a long-running loop. When you call it, it returns a `Promise` that immediately enters the `Fulfilled` state with the value `Function Finished` You can use `.then()` to handle the resolved value.

**Example 2:**

```javascript
async function runForLongTime(){
    for(let i = 0; i < 3000000000; i++){}
    
    return "Function Finished";
}

const p = runForLongTime();
console.log(p);

p. then((result)=>{
    console.log("Promise resolved");
    console.log(result);
}).catch((err)=>{
    console.log("Error caught");
    console.log(err);
});
```
**output:**
>Promise { 'Function Finished' }<br/>
>Promise resolved<br/>
>Function Finished

This example is similar to the previous one but also includes a `.catch()` block. If an error occurs in the `async` function, it will reject the Promise, and you can use` .catch()` to handle the error.

**Example 3: Rejected**

```javascript
async function runForLongTime(){
    for(let i = 0; i < 3000000000; i++){}

    throw new Error("Something went wrong...");

    return "Function Finished";
}

const p = runForLongTime();
console.log(p);

p. then((result)=>{
    console.log("Promise resolved");
    console.log(result);
}).catch((err)=>{
    console.log("Error caught");
    console.log(err);
});
```
**output:**
>Promise { <br/>
  < rejected > Error: Something went wrong...<br/>
      at runForLongTime (D:\RTC Internship Cohort\RTC Practice <br/>code\javascript-practice\async-await.js:43:11)<br/>
}<br/>
Error caught<br/>
Error: Something went wrong...<br/>

In this example, `runForLongTime` throws an error and doesn't return any value. This leads to the `Promise` being in a `Rejected` state. You can use `.catch()` to handle the error.

## Await

The `await` keyword is used inside async functions to pause the execution of the function until the Promise is resolved. It makes it easy to work with Promises in a more synchronous style.

**Example 1**

```javascript
 async function runForLongTime(){
    for (let i = 0; i< 3000000000; i++) {}

    throw new Error("Something went wrong...");

    return "Function finished";
 }

 (async function (){
    try{
        const result = await runForLongTime();
        console.log(result);
    }
    catch(err){
        console.log(err.message)
    }
 })();
```

**output:**
>Something went wrong...

In this example, `await` is used to pause the execution of `runForLongTime` and catch any errors that occur. This allows you to handle exceptions gracefully.

**Example 2**

```javascript
async function apiCall(){
    return{
        type: 'API_CALL'
    }
 }

 const response = await apiCall();
 console.log(response);
```
**output:**
>const response = await apiCall();<br/>
>                  ^^^^^<br/>
>**SyntaxError: await is only valid in async functions and the top level bodies of modules**<br/>
>   at internalCompileFunction (node:internal/vm:73:18)<br/>
>   at wrapSafe (node:internal/modules/cjs/loader:1176:20)<br/>
>   at Module._compile (node:internal/modules/cjs/loader:1218:27)<br/>
>   at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)<br/>
>   at Module.load (node:internal/modules/cjs/loader:1117:32)<br/>
>   at Module._load (node:internal/modules/cjs/loader:958:12)<br/>
>   at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)<br/>
>   at node:internal/main/run_main_module:23:47<br/>
>Node.js v18.16.0

his example attempts to use `await` outside of an async function, which results in a `syntax` error. You can only use await inside an async function.

**Example 3**

```javascript
async function apiCall(){
    return{
        type: 'API_CALL'
    }
 }

const triggerAPICall = async ()=>{
 const response = await apiCall();
 console.log(response);
}
triggerAPICall();
```
**output:**
>{ type: 'API_CALL' }

**Example 4**

```javascript
async function apiCall(){
   const obj = {
        type: 'API_CALL'
    }

    return obj;
 }

const triggerAPICall = async ()=>{
 const response = await apiCall();
 console.log(response);
}
triggerAPICall();
```
**output:**
>{ type: 'API_CALL' }

In this example, `await` is used inside an async function to wait for the result of the `apiCall` function and then log the response.

**Example 5**

```javascript
async function weatherInfo(city){

    const cities = ["Pune", "Mumbai", "Delhi", "Nagpur"]

   const obj = {
        name: city,
        temp: Math.floor(Math.random() * 100)
    }

    if(cities.includes(city)){
       return obj;
    }
     else{
        throw new Error("city not found")
    }
 }

const triggerAPICall = async ()=>{
 const response = await weatherInfo("Pune");
 console.log(response);
}
triggerAPICall();
```
**output:**
>{ name: 'Pune', temp: 17 }

Here, the `weatherInfo` function simulates fetching weather information for a city. It either returns an object with the city name and a random temperature or throws an error if the city is not found. When calling triggerAPICall, it awaits the result of weatherInfo("Pune") and logs the response.

**Example 6**

```javascript
async function weatherInfo(city){

    const cities = ["Pune", "Mumbai", "Delhi", "Nagpur"]

   const obj = {
        name: city,
        temp: Math.floor(Math.random() * 100)
    }

    if(cities.includes(city)){
       return obj;
    }
     else{
        throw new Error("city not found")
    }
 }

const triggerAPICall = async ()=>{
    let response;
    try{
      response = await weatherInfo("Hadapsar");
    }
    catch(err){
      response = err.message;
    }
    console.log(response)
}
triggerAPICall();
```
**output:**
>city not found

This is a variation of the previous example, but it uses a try...catch block to catch any errors thrown by the weatherInfo function. If the city is not found, it logs `city not found`.`













