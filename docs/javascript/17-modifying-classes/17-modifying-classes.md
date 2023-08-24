---
title: Modifying Classes
description: "Modifying Classes"
hide_table_of_contents: true
---

Modifying or Changing classes means you can `add` or `remove` classes from scripts. You also add `CSS` effects on that class.

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
  <head>
    <title>Modifying Classes</title>
    <style>
      .container {
        border: 1px solid black;
        padding: 5px;
      }

      .bg-warning {
        background-color: yellow;
      }

      .bg-danger {
        background-color: tomato;
      }

      .bg-info {
        background-color: skyblue;
      }
    </style>
  </head>

  <body>
    <div class="container bg-warning" id="box">This is Box</div>
    <br />

    <button type="button" onclick="danger()">Danger</button>
    <button type="button" onclick="warning()">Warning</button>
    <button type="button" onclick="info()">Info</button>

    <script>
      const box = document.getElementById("box");
      function danger() {
        box.classList.remove("bg-warning");
        box.classList.remove("bg-info");
        box.classList.add("bg-danger");
      }
      function warning() {
        box.classList.remove("bg-danger");
        box.classList.remove("bg-info");
        box.classList.add("bg-warning");
      }
      function info() {
        box.classList.remove("bg-danger");
        box.classList.remove("bg-warning");
        box.classList.add("bg-info");
      }
    </script>
  </body>
</html>
```

**Output :**

- **After Click On `Danger` Button.**

<img src="/javascript/17/screenshot-1.png" alt="screenshot-1" width="600px"/>

- **After Click On `Warning` Button.**

<img src="/javascript/17/screenshot-2.png" alt="screenshot-2" width="600px"/>

- **After Click On `Info` Button.**

<img src="/javascript/17/screenshot-3.png" alt="screenshot-3" width="600px"/>

**Explanation :**

In the above example, `classlist` is a object, we can `add` or `remove` classes from the script using `.classList` method.

In line number 36, 37, 41, 42, 46 and 47, we can used `box.classList.remove(" ");` it is used to remove the classes such as, `bg-warning` , `bg-info` , `bg-danger` from your script.

In line number 38, 43 and 48, we can used `box.classList.add(" ");` it is used to add the `bg-danger` , `bg-warning` and `bg-info`from your script.

**This example after optimizing each functions and remove classList.**

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
  <head>
    <title>ClassName</title>
    <style>
      .container {
        border: 1px solid black;
        padding: 5px;
      }

      .bg-warning {
        background-color: yellow;
      }

      .bg-danger {
        background-color: tomato;
      }

      .bg-info {
        background-color: skyblue;
      }
    </style>
  </head>
  <body>
    <div class="container bg-warning" id="box">This is Box</div>
    <br />
    <button type="button" onclick="danger()">Danger</button>
    <button type="button" onclick="warning()">Warning</button>
    <button type="button" onclick="info()">Info</button>

    <script>
      const box = document.getElementById("box");

      function danger() {
        box.className = "container bg-danger";
      }
      function warning() {
        box.className = "container bg-warning";
      }
      function info() {
        box.className = "container bg-info";
      }
    </script>
  </body>
</html>
```

**Output :**

- **After Click On `Danger` Button.**

<img src="/javascript/17/screenshot-1.png" alt="screenshot-1" width="600px"/>

- **After Click On `Warning` Button.**

<img src="/javascript/17/screenshot-2.png" alt="screenshot-2" width="600px"/>

- **After Click On `Info` Button.**

<img src="/javascript/17/screenshot-3.png" alt="screenshot-3" width="600px"/>

**This example after converting all functions into one function.**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
  <head>
    <title>Modifying Classes</title>
    <style>
      .container {
        border: 1px solid black;
        padding: 5px;
      }

      .bg-warning {
        background-color: yellow;
      }

      .bg-danger {
        background-color: tomato;
      }

      .bg-info {
        background-color: skyblue;
      }

      .bg-pink {
        background-color: pink;
      }

      .bg-primary {
        background-color: blueviolet;
      }
    </style>
  </head>

  <body>
    <div class="container bg-warning" id="box">This is Box.</div>
    <br />
    <button type="button" onclick="ChangeClassName('bg-danger')">Danger</button>
    <button type="button" onclick="ChangeClassName('bg-warning')">
      Warning
    </button>
    <button type="button" onclick="ChangeClassName('bg-info')">Info</button>
    <button type="button" onclick="ChangeClassName('bg-pink')">Pink</button>
    <button type="button" onclick="ChangeClassName('bg-primary')">
      Primary
    </button>

    <script>
      function ChangeClassName(bgName) {
        const box = document.getElementById("box");
        box.className = `container ${bgName}`;
      }
    </script>
  </body>
</html>
```

**Output :**

- **After Click On `Danger` Button.**

<img src="/javascript/17/screenshot-4.png" alt="screenshot-3" width="600px"/>

- **After Click On `Warning` Button.**

<img src="/javascript/17/screenshot-5.png" alt="screenshot-3" width="600px"/>

- **After Click On `Info` Button.**

<img src="/javascript/17/screenshot-6.png" alt="screenshot-3" width="600px"/>

- **After Click On `Pink` Button.**

<img src="/javascript/17/screenshot-7.png" alt="screenshot-3" width="600px"/>

- **After Click On `Primary` Button.**

<img src="/javascript/17/screenshot-8.png" alt="screenshot-3" width="600px"/>

### Dark Mode and Light Mode

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Dark Light Mode</title>
  </head>
  <style>
    .container {
      padding: 5px;
      margin: 10px;
      border-radius: 25px;
    }

    .container-light {
      background-color: bisque;
      padding: 15px;
      border: 1px solid brown;
      color: brown;
    }

    .container-dark {
      background-color: dimgray;
      padding: 15px;
      border: 1px solid black;
      color: white;
    }
  </style>

  <body>
    <div class="container container-light" id="box">This is Box.</div>
    <br />

    <button type="button" onclick="changeTheme('dark')">Dark Mode</button>
    <button type="button" onclick="changeTheme('light')">Light Mode</button>

    <script>
      function changeTheme(themeName) {
        const box = document.getElementById("box");
        box.className = `container container-${themeName}`;
      }
    </script>
  </body>
</html>
```

**Output :**

- **After Click On Dark Mode Button.**

<img src="/javascript/17/screenshot-9.png" alt="screenshot-9" width="600px"/>

- **After Click On Light Mode Button.**

<img src="/javascript/17/screenshot-10.png" alt="screenshot-10" width="600px"/>
