---
title: Events
description: "Events"
hide_table_of_contents: true
---

## Events in Javascript

JavaScript interacts with HTML through events when the browser manipulates the page. When a page loads, it's called an event. When user clicks on a button, that click is also an event.

**Types of events in javascript**

* onClick
* onChange
* onmouseover
* onmouseout
* onkeydown
* onload

### onClick

The onClick event occurs when the user clicks on an element.

**Code :**
```html
<!DOCTYPE html>
<html>
<head>
    <script>

    </script>
</head>
<body>
    <button onClick="alert(Message is send)">Send Message</button>
</body>
</html>
```
**Output :**

<img src="/icp/33/output-1.png" alt="output-1" width="600px"/>

In the above code we creates a button element that, when clicked, triggers a JavaScript `alert` function with the message `Message is send`. This is a simple way to provide feedback to the user when they interact with the button.

### onmouseover

The onmouseover event occurs when the pointer is moved onto an element.

**Code :**

```html
<!DOCTYPE html>
<html>
<head>
    <script>
        
    </script>
</head>
<body>
    <button onmouseover = "alert('Button is clicked..')"> Send Message
    </button>
</html>
```

**Output :**

<img src="/icp/33/output-2.png" alt="output-2" width="600px"/>

When a user hovers their mouse over the button, an `alert` will appear saying `Button is clicked..`. However, this message is a show since the code will only trigger when the mouse is hovered over the button, not when it's actually clicked. If the goal is to trigger an alert when the button is clicked, the code should be modified to include an `onclick` event listener instead of `onmouseover`.

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
  <script>

  </script>
</head>

<body>
  <button onclick="sendMessage()"> Send Message
  </button>


  <script>
    function sendMessage(){
      alert("Sending Message...");
    }
  </script>
</html>
```

**Output :**

<img src="/icp/33/output-3.png" alt="output-3" width="600px"/>

In the above code button element with the text `Send Message` and an onclick attribute that calls the `sendMessage()` function when the button is clicked.

The `sendMessage()` function simply displays an alert message that says `Sending Message...`. This can be useful for providing feedback to the user that their action has been recognized and processed.

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
  <script>

  </script>
</head>

<body>
  <button onclick="printOne()">
    One
  </button>

  <button onclick="printTwo()">
    Two
  </button>

  <script>
    function printOne(){
      console.log(1);
    }

    function printTwo(){
      console.log(2);
    }
  </script>
</html>
```

<img src="/icp/33/output-4.png" alt="output-4" width="600px"/>

In the above code this is a simple HTML code that creates two buttons labeled `One` and `Two`, respectively. Each button is assigned an `onclick` attribute that calls a JavaScript function when clicked. The JavaScript code defines two functions, `printOne()` and `printTwo()`, which log the values `1` and `2`, respectively, to the console.

When the user clicks on the `One` button, the `printOne()` function will be called, and the value `1` will be logged to the console. Similarly, when the user clicks on the `Two` button, the `printTwo()` function will be called, and the value `2` will be logged to the console.

## onmouseout

The onmouseout event occurs when a user moves the mouse pointer out of an element.

**Code :**

```html
<!DOCTYPE html>
<html>
<head>
    <script>
        
    </script>
</head>
<body>
    <button 
    onmouseout="console.log('mouse goes out')">
    Mouse Events
    </button>
</html>
```

**Output :**

<img src="/icp/33/output-5.png" alt="output-5" width="600px"/>

This is a button element that has an `onmouseout` event listener attached to it. The `onmouseout` event is triggered when the mouse pointer moves out of the button element. In this case, when the `onmouseout` event is triggered, the console will log the message `mouse goes out`.

## onkeypress

The onkeypress event occurs when the user presses a key.

## onkeyup

The onkeyup event occurs when the user releases a key.



