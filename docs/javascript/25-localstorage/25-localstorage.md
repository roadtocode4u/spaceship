---
title: Localstorage
description: "Localstorage"
hide_table_of_contents: true
---

### What is LocalStorage?

LocalStorage is a feature provided by web browsers that allows web applications to store data locally on a user's device. It provides a way to save information that persists even when the user closes or refreshes the web page.

### Why use LocalStorage

LocalStorage is a feature provided by web browsers that allows web applications to store data locally on a user's device. It provides a way to save information that persists even when the user closes or refreshes the web page.

### How to Use LocalStorage?

1. **Storing Data**

To store data in LocalStorage, you can use the `localStorage.setItem(key, value)` method. It takes two parameters: the `key`, which is a string that represents the name of the data, and the `value`, which can be a string, number, or even an object (as long as it is converted to a string).

**Code :**

```js
localStorage.setItem('username', 'Anand');
```
**Output :**
<img src="/javascript/25/screenshot1.png" alt="screenshot1.png" width="600px"/>

2. **Retrieving Data**

To retrieve data from LocalStorage, you can use the `localStorage.getItem(key`) method. It takes the `key` as a parameter and returns the corresponding value.

```js
const username = localStorage.getItem('username');
console.log(username);
```
**Output :**
<img src="/javascript/25/screenshot2.png" alt="screenshot1.png" width="600px"/>

3. **Removing Data**

To remove a specific item from LocalStorage, you can use the `localStorage.removeItem(key)` method. It takes the key of the item you want to remove as a parameter.

```js 
localStorage.removeItem('username');
const removedUsername = localStorage.getItem('username');
console.log(removedUsername); 
```
**Output :**
<img src="/javascript/25/screenshot3.png" alt="screenshot1.png" width="600px"/>

4. **Clearing All Data**

If you want to remove all the data stored in LocalStorage, you can use the localStorage.`clear()` method. Be cautious when using this, as it will remove all items and cannot be undone.

```js
localStorage.clear();
```
**Output :**
<img src="/javascript/25/screenshot4.png" alt="screenshot1.png" width="600px"/>
<br/>
<br/>


This program appears to be a JavaScript code snippet that demonstrates working with an object (`obj`), storing it in the browser's `localStorage`, and retrieving it from `localStorage`. Let's break down what's happening step by step:

<img src="/javascript/25/screenshot5.png" alt="screenshot1.png" width="600px"/>

1. First, an object `obj` is created with two properties: `"name"` with the value `"Anand"` and `"age"` with the value `23`.

2. You access the properties of the `obj` object using dot notation:
   - `obj.name` returns `'Anand'`.
   - `obj.age` returns `23`.

3. `localStorage.setItem("Anand", JSON.stringify(obj))`: This line  stores a JavaScript object named `obj` in the browser's localStorage under the key `"Anand"` after converting it to a `JSON string` using `JSON.stringify()`.

<img src="/javascript/25/screenshot6.png" alt="screenshot1.png" width="600px"/>

4. `localStorage.getItem('Anand')` retrieves a string from the `localStorage` with the key `'Anand'`.

5. `studentObj` initially stores this string, which contains JSON data:
 `{"name":"Anand","age":23}`.

6. When you try to access `studentObj.name`, it returns `'undefined'` because `studentObj` is just a string, and strings don't have properties like 'name'. Similarly, `studentObj.age` also returns `'undefined'` for the same reason.

7. You use `JSON.parse()` to convert the JSON string into a `proper` JavaScript object, and you store it in `properObj`.

8. Now, `properObj` is a valid JavaScript object with properties. When you access `properObj.name`, it correctly returns `'Anand'`, and when you access `properObj.age`, it correctly returns `23`.

This is because `properObj` is an object with properties `'name'` and `'age'`.

<img src="/javascript/25/screenshot7.png" alt="screenshot1.png" width="600px"/>


