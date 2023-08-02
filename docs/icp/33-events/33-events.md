---
title: Events
description: "Events"
hide_table_of_contents: true
---

JavaScript interacts with HTML through events when the browser manipulates the page. When a page loads, it's called an `event`. When user clicks on a button, that click is also an event.
Events are the action's that happened in the webpage.

**Types of events in javascript**

- onClick
- onChange
- onmouseover
- onmouseout
- onkeydown
- onload

### onClick

The `onClick` event in Javascript occurs when the user clicks on an element.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <button onclick="console.log('Button1')">Button one</button>

    <button onclick="console.log('Button2')">Button Two</button>
  </body>
</html>
```

**Output :**

<img src="/icp/33/output-7.png" alt="output-7" width="600px"/>

In the above example, we create a two button `Button One` and `Button two`. when clicked a button one triggers a JavaScript `console` function with the message `Button1`. Similarly, when clicked a button two triggers a Javascript `console` function with the message `Button2`. This is a simple way to provide feedback to the user when they interact with the button.

## onChange

The `change` event in JavaScript is triggered when the value of an input element or form element is changed by the user.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <input type="text" onchange="console.log('Changed')" />
  </body>
</html>
```

**Output :**

<img src="/icp/33/output-8.png" alt="output-8" width="600px"/>

**Example explanation :**

In the above example, we create a input box. when user enters the value of input in the input box the onchange event trigger.

## onmouseover

The onmouseover event occurs when the pointer is moved onto an element.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <input type="text" onmouseover="console.log('over')" />
  </body>
</html>
```

**Output :**

<img src="/icp/33/output-9.png" alt="output-9" width="600px"/>

When a user hovers their mouse over the input box, an `console` will appear saying `over`. However, this message is a show since the code will only trigger when the mouse is hovered over the input box, not when it's actually clicked.

## onmouseout

The `onmouseout`event in JavaScript is triggered when the mouse pointer moves out of an element.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>onmouseout</title>
  </head>

  <body>
    <input type="text" onmouseout="console.log('onmouse out event occurs')" />
  </body>
</html>
```

**Output :**

<img src="/icp/33/output-10.png" alt="output-10" width="600px"/>

**Example explanation :**

In the above example, When a user leave their mouse out the input box, an `console` will appear saying `onmouse out event occurs`. However, this message is a show since the code will only trigger when the mouse is leave from the input box, not when it's actually clicked.

## onkeypress

The onkeypress event occurs when the user presses a key.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>onkeypress</title>
  </head>

  <body>
    <input type="text" onkeypress="console.log('onkeypress event ocurs')" />
  </body>
</html>
```

**Output :**

<img src="/icp/33/output-11.png" alt="output-11" width="600px"/>

**Example explanation :**

In the above example, when user press a key the onkeypress event is triggered.

## onkeyup

The keyup event in JavaScript is triggered when a key on the keyboard is released after being pressed.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>onkeyup</title>
  </head>

  <body>
    <input type="text" onkeyup="console.log('onkeypress event ocurs')" />
  </body>
</html>
```

**Output :**

<img src="/icp/33/output-12.png" alt="output-12" width="600px"/>

In the above example, when the user press a key the onkeyup event is triggred.

## onload

When webpage is load then `onload` event trigger.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>onload</title>
  </head>
  <body onload="console.log('page is loaded')"></body>
</html>
```

**Output :**

<img src="/icp/33/output-6.png" alt="output-6" width="600px"/>

**Example explanation :**

In the above example, the load event is trigger when webpage is load.
