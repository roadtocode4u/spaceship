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


