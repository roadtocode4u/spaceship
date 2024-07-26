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

**Example :**

```html 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>localStorage</title>
</head>
<body>
  <input type="text" id="name" placeholder="Enter your name">
  <button id="save" onclick="save()">Save</button>
  <button id="logout" onclick="logout()">Logout</button>
  <p id="greeting">
    Hello User
  </p>

  <script>
    const nameElement = document.getElementById('name');
    const greetingElement = document.getElementById('greeting');
    const btnElement = document.getElementById('save');

    function save(){
      const userName = nameElement.value;

      if(!userName){
        alert('Please enter your name');
        return;
      }

      localStorage.setItem('name', userName);
      greetingElement.innerText = `Hello ${userName}`;
      hideElements();
    }

    const userName = localStorage.getItem('name');

    if(userName){
      greetingElement.innerText = `Hello ${userName}`;
      hideElements();
    }

    function hideElements(){
      btnElement.style.display = 'none';
      nameElement.style.display = 'none';
    }

    function logout(){
      localStorage.removeItem('name');
      window.location.reload();
    }
  </script>
</body>
</html>
```

**Output :**