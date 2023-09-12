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

3. Then, you attempt to store the `obj` object in the browser's `localStorage`. However, there's a typo in your code. The correct method to store an object in `localStorage` is `JSON.stringify()` to convert the object into a JSON string. So, you should use `JSON.stringify(obj)` instead of `JSON.stringfy(obj)`.

4. After fixing the typo, you correctly store the serialized JSON string in `localStorage` with the key `'Anand'`.

<img src="/javascript/25/screenshot6.png" alt="screenshot1.png" width="600px"/>

5. Next, you try to retrieve the stored value from `localStorage` using `localStorage.getItem('Anand')`. However, there's a typo here as well. The correct method name is `localStorage` (with a lowercase "s"), not `localstorage`. So, you should use `localStorage.getItem('Anand')` instead.

6. You store the result of `localStorage.getItem('Anand')` in the variable `studentObj`.

<img src="/javascript/25/screenshot7.png" alt="screenshot1.png" width="600px"/>

7. When you log `studentObj`, you see the JSON string that was previously stored in `localStorage`: `{"name": "Anand", "age":23}`.

8. However, `studentObj` is still a JSON string at this point, so you cannot directly access its properties using dot notation like `studentObj.name` or `studentObj.age`. You need to parse it back into a JavaScript object using `JSON.parse()`.

9. You parse the JSON string using `JSON.parse(localStorage.getItem('Anand'))` and store the resulting object in the variable `properObj`.

10. Now, when you log `properObj`, you get a JavaScript object: `{name: "Anand", age: 23}`.

11. Finally, you can access the properties of `properObj` using dot notation:
   - `properObj.name` returns `"Anand"`.
   - `properObj.age` returns `23`.

So, the main issue in your code was the typos in the `localStorage` methods (`localStorage` instead of `localstorage` and `JSON.stringify()` instead of `JSON.stringfy()`). Once you fixed those issues and correctly parsed the retrieved JSON string, you were able to access the properties of the object stored in `localStorage`.

