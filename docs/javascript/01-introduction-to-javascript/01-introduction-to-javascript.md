---
title: Introduction to javascript
description: "Introduction to javascript"
hide_table_of_contents: true
---

## 🤔What is JavaScript ?

JavaScript is a dynamic programming language, a scripting language used to develop web applications, games, and more. It allows us to implement dynamic features on web pages that cannot do with just HTML and CSS. Javscript are supported by all browsers.

> Brendan Eich invented JavaScript in 1995.

**You can Add JavaScript in Html elements then use this script tag. 👇**

```js
<script></script>
```

**Code**

```js
<!DOCTYPE html>
<html>
<head>
    <title>Javscript</title>
</head>
<body>
    <script>
        document.write("Hello World")
    </script>
</body>
</html>
```

**Output**

<img src="/javascript/01/output-1.jpg" alt="output-1" width="600px"/>

In the above example `<script>` tag is used to embed JavaScript code within an HTML document.
Inside the `<script>` tag, you have the above JavaScript code  `document.write("Hello World");`. Here's what this code does:
* `document`: This is a built-in object in JavaScript that represents the web page/document.
* `write()`: This is a method of the document object. It allows you to write content directly to the HTML document.


**In JavaScript, you can use both single quotes (`'`) and double quotes (`"`) to define strings. Both serve the same purpose of representing textual data. The choice between single and double quotes often comes down to personal preference and specific use cases.**

**Example 1:**

```javascript
document.write("I'm Suraj");
```

In this example, the string contains a single quote (`'`) within it. To avoid confusion with the string delimiter, which is also a single quote, you've used double quotes (`"`) to define the entire string. This way, JavaScript knows that the string starts with the first double quote and ends with the closing double quote, allowing the single quote within the string to be treated as part of the text.

**Example 2:**

```javascript
document.write('He said, "How Are You?"');
```

Here, the string contains double quotes (`"`) within it. To handle this scenario, you've used single quotes (`'`) to define the string. By doing so, the JavaScript interpreter understands that the string begins with the first single quote and ends with the closing single quote, allowing the double quotes within the string to be interpreted as part of the text.

**In summary:**

- If your string contains single quotes, you can define the string using double quotes.
- If your string contains double quotes, you can define the string using single quotes.

## `alert()`

The `alert()` function is a built-in JavaScript function that displays a simple dialog box or popup in the user's web browser with a specified message. This message is often used to convey important information, warnings, or prompts to the user. The user needs to acknowledge the alert by clicking the `OK`` button before they can continue interacting with the web page.

**Code**

```js
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <title>Javscript</title>
    </head>

    <body>
        <script>
            alert('Hey there!')
        </script>
    </body>

    </html>
```

**Output**

<img src="/javascript/01/output-2.png" alt="output-2" width="600px"/>

In the above Code, `<script>` tag is used to embed JavaScript code within an HTML document. Inside the `<script>` tag, you have the above JavaScript code `alert('Hey there!');` Here's what this code does:

`alert()`: This is the built-in JavaScript function that triggers a dialog box (alert) with the specified message.
The message `Hey there` is provided as an argument to the `alert()` function. When this code is executed, it will display a dialog box with the message `Hey there!`` in the user's web browser.


**You can run JavaScript code directly in your web browser's developer `console`. The developer console is a tool that allows you to interact with and manipulate web pages, test code snippets, and debug your JavaScript code. It provides an environment where you can execute JavaScript commands and see their results immediately.**

<img src="/javascript/01/output-3.png" alt="output-3" width="600px"/>

```console.error("jhdfg")```

### jhdfgfyug