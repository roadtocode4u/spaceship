---
title:  Async Await and Promises
description: "Async Await and Promises"
hide_table_of_contents: true
---

## Async

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

## Promise

A Promise can be  of three states:

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

**Example 1: Rejected**

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

## Await

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











