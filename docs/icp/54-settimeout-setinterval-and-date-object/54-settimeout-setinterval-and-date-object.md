---
title: setTimeout, setInterval and Date Object
description: "setTimeout, setInterval and Date Object"
hide_table_of_contents: true
---

# setTimeout, setInterval and Date Object

Time-related functionality in JavaScript is essential for creating dynamic web applications. By utilizing timers and the Date object, developers can control the execution of code based on time intervals and manage date and time information effectively.

1. **setTimeout :**

 The setTimeout function is used to schedule the execution of a specified code snippet or function after a designated time delay. It is particularly useful for introducing delays or triggering actions after a specific time has elapsed.

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

 The code begins with printing `A` to the console. Following this, setTimeout schedules the execution of the anonymous function (that logs "Hello") after a delay of `5000` milliseconds (5 seconds). While the timer is active, `B` is printed to the console. Once the 5-second delay expires, the anonymous function executes, resulting in `Hello`` being printed.

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

In the above example, The `setTimeout` function to schedule the execution of the `sayHello` function after a delay of` 5 seconds` (5000 milliseconds). You define a function called `sayHello`, which print `"Hello" `to the console when executed. `setTimeout(sayHello, 5000)` is used to set a timer. It tells the JavaScript engine to wait for `5000 milliseconds (5 seconds)` and then execute the `sayHello` function.

2. **setInterval :**

The function  `setInterval `is `repeatedly executes` a specified function or code snippet at a specified time interval, measured in milliseconds. It is commonly used for creating periodic or repetitive tasks within web applications.

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

3. **Date Object :**
The `Date object` is a `in-built` class  that provides methods and properties for working with `dates and times`. It allows you to create, manipulate, and format dates and times in various ways.

```js
 const date = new Date();
```
### Methods of Date Object
1. getHours()
2. getMinutes()
3. getSeconds()

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>Date Object</title>
</head>
<body>
    <button type="button" onclick="displayTime()">
        Display Time
    </button>

    <script>
       function displayTime(){
        const date = new Date();

        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();

        console.log(`${h}: ${m}: ${s}`)
       }
    </script>
</body>
</html>
```

**Output :**
>13:51:24 <br/>
>13:52:20

In the above example, `onclick="displayTime()": `This attribute defines an event handler. It specifies that when the button is clicked, the JavaScript function `displayTime()` should be executed.<br/>

`const date = new Date();`: This line creates a new JavaScript Date object, which represents the `current date and time`. <br/>

`const h = date.getHours();, const m = date.getMinutes();, and const s = date.getSeconds();:` These lines extract the `current hour, minute, and second` from the Date object and store them in separate variables. <br/>

`console.log(${h}:${m}:${s}): `This line logs a formatted string to the browser's console. It displays the current time in the format` "hour:minute:second"` using the values stored in the `h, m, and s` variables. <br/>

When you load this page and click the `"Display Time" button,` the JavaScript function `displayTime()` is triggered. It gets the `current time`, formats it as `"hour:minute:second,"` and then print this time to the `browser's console` using` console.log()`.

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>Date Object</title>
    <style>
        .clock-container{
            background-color: black;
            width: 200px;
            text-aligh: center;
            color: white;
            padding: 10px;
            border-radius: 10px;
            font-size: 25px
        }
    </style>
</head>
<body>
    <div class="clock-container">
        <span id="h">HH</span>:<span id="m">MM</span>:<span id="s">SS</span>
    </div>

    <script>
       function displayTime(){
        const date = new Date();

        const h = document.getElementById("h");
        h.innerHTML = date.getHours();

        const m = document.getElementById("m");
        m.innerHTML = date.getMinutes();

        const s = document.getElementById("s");
        s.innerHTML = date.getSeconds();
       }

       setInterval(displayTime, 1000);
    </script>

</body>
</html>
```

**Output :**

<img src="/icp/54/screenshot1.png" alt="screenshot1" width="600px"/>

`<div class="clock-container">:` This is a `<div>` element with the class` "clock-container"` It serves as a container for displaying the clock.

Inside the container, there are three `<span> elements` with unique IDs:

`<span id="h">HH</span>:` This `<span>` element with the ID `"h"` initially displays `"HH"` and represents the `hours`.
`<span id="m">MM</span>:` This `<span>` element with the ID `"m"` initially displays `"MM"` and represents the `minutes`.
`<span id="s">SS</span>:` This `<span> `element with the ID `"s"` initially displays `"SS"` and represents the seconds.

Inside the `displayTime()` function:

`const date = new Date();`: This line creates a new JavaScript Date object, which represents the `current date and time`.

`const h = document.getElementById("h");`: This line selects the HTML element with the ID `"h"` `(the hours <span>)` and stores it in the `h` variable.

`h.innerHTML = date.getHours();`: This line sets the inner HTML content of the` h` element to the current hour obtained from the Date object.

Similar operations are performed for the `minutes` and `seconds`, updating the content of the `"MM"` and `"SS"` `<span>` elements with the `current minutes and seconds`, respectively.

`setInterval(displayTime, 1000);`:

This line sets up  the` setInterval` function. It `repeatedly calls the displayTime()` function every `1000 milliseconds (1 second)`. This ensures that the clock display is updated every second.

When you load this HTML page, it initially displays `"HH:MM:SS" `within the clock container. Then, the  code continuously updates the `hours, minutes, and seconds` in real-time by fetching the current time and setting the inner HTML content of the corresponding `<span>` elements. This results in a live clock display that updates every `second, showing the current time`.








