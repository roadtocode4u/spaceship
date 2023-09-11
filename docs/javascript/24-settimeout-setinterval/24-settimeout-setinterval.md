---
title: setTimeout, setInterval
description: "setTimeout, setInterval"
hide_table_of_contents: true
---

1. **setTimeout :**

Think of setTimeout as a way to tell your computer to do something (like saying "Hello") after waiting for a certain amount of time (let's say 5 seconds). It's like setting an alarm clock for your computer code.

**Syntax :**

```js
setTimeout(callbackfunction, time);
```

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>setTimeout</title>
</head>
<body>
    <script>
       function sayHello(){
        console.log("Hello");
       }

       console.log('A');
       setTimeout(sayHello, 5000);
       console.log('B')
    </script>
</body>
</html>
```

**Output :**
>A <br/>
>B <br/>
>Hello

Line no 8, The code starts running, and `A` is printed to the console.

Then, it encounters `setTimeout`, which tells it to wait for `5` seconds before running the `sayHello` function.

While waiting for those `5` seconds, the code continues to execute, so `B` is printed immediately after `A`.

After the `5-second` delay expires, the `sayHello` function is executed, printing `Hello` to the console.


**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>setTimeout</title>
</head>
<body>
    <script>
       function sayHello(){
        console.log("Hello");
       }
       setTimeout(sayHello, 5000);
    </script>
</body>
</html>
```

**Output :**

>Hello

This code defines a function `sayHello` that says `Hello` when called. Then, it uses `setTimeout` to wait for `5` seconds and then calls `sayHello`, resulting in `Hello` being printed to the console after the delay.

2. **setInterval :**

`setInterval` is like a repeating alarm. You tell your computer to do something (say "Hello") every few seconds (let's say every 5 seconds). It keeps doing it over and over, like a timer that beeps regularly.

```js
setInterval(callbackfunction, time);
```

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>setInterval</title>
</head>
<body>
    <script>
       function sayHello(){
        console.log("Hello");
       }
       setInterval(sayHello, 5000);
    </script>
</body>
</html>
```

**Output :**
>Hello <br/>
>Hello <br/>
>Hello <br/>
>Hello <br/>
>Hello <br/>
>Hello <br/>...


In the abouve example, The `setInterval` function to repeatedly execute the `sayHello` function at a regular interval of` 5 seconds (5000 milliseconds)`.You define a function called `sayHello`, which print `"Hello"` to the console when executed.` setInterval(sayHello, 5000)` is used to set up an interval. It instructs the JavaScript engine to execute the `sayHello` function every `5000 milliseconds (5 seconds)`.
