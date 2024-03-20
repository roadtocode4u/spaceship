---
title: Events in JS
description: "Events in JS"
hide_table_of_contents: true
---

Events are actions or occurrences that happen in the browser, such as user interactions like `clicking a button`, `moving the mouse`, or `pressing a key`. Changes in the document like the document finishing loading or interactions with elements on a `web page` like submitting a form or resizing a window are also considered as events.

**Events in javascript**

### Click Events
- `onclick()`
- `ondblclick()`

### Key Events
- `onkeypress()`
- `onkeydown()`
- `onkeyup()`

### Mouse Events
- `onmouseover()`
- `onmousemove()`
- `onmouseout()`

### General Events
- `onload()`
- `onchange()`

## onclick

The `onclick` event in Javascript occurs when the user `clicks` on an element.

**For example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>onclick</title>
  </head>

  <body>
         <button onclick="console.log('Button1')">Button one</button>

         <button onclick="console.log('Button2')">Button Two</button>
  </body>
</html>
```

**Output :**

<img src="/javascript/12/screenshot1.png" alt="screenshot1" width="600px"/>

**Example explanation :**

In the above example, we have created  two button `Button One` and `Button two`. When clicked a button one triggers a JavaScript `console.log` function with the message `Button1`. Similarly, when clicked a button two triggers a Javascript `console` function with the message `Button2`. This is a simple way to provide feedback to the user when they interact with the button.

## onchange

The `onchange` event in JavaScript is triggered when the value of an element or form element is changed by the user.

**For example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>onchange</title>
  </head>

  <body>
     <input type="text" onchange="change()" />
    <script>
       function change(){
        console.log('change')
       }
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/12/screenshot2.png" alt="screenshot2" width="600px"/>

**Example explanation :**

In the above example, we create a input box. when user enters the value of input in the input box the `onchange` event trigger.

## onkeypress
The `onkeypress` event  is triggered when a user presses a key on the `keyboard`.

## onkeydown
The `onkeydown` event is activated when a key on the keyboard is pressed `down`.

## onkeyup
The `keyup` event is triggered when a key on the keyboard is released after being `pressed`.

**For example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>onkeypress onkeydown onkeyup </title>
  </head>

  <body>
     <input type="text" onkeypress="keyPress()" 
     onkeydown="keyDown()"
     onkeyup="keyUp()"/>
    <script>
       function keyPress(){
        console.log('keyPress()')
       }

       function keyDown(){
        console.log('keyDown()')
       }

       function keyUp(){ 
        console.log('keyUp()')
       }
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/12/screenshot3.png" alt="screenshot3" width="600px"/>

## onmouseover

The `onmouseover` event occurs when the pointer is moved onto an element.

**For example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>onmouseover</title>
  </head>
  <body>
    <img src="pizza.png" onmouseover="imageOver()"/>

    <script>
        function imageOver(){
            console.log("Image Over")
        }
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/12/screenshot9.png" alt="screenshot9" width="600px"/>

**Example explanation :**

When a user hovers their mouse over the input box, an `console` will appear saying `over`. However, this message is a show since the code will only trigger when the mouse is hovered over the input box, not when it's actually clicked.

## onmouseout

The `onmouseout`event in JavaScript is triggered when the mouse pointer moves out of an element.

**For example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>onmouseout</title>
  </head>
  <body>
    <img src="pizza.png" onmouseout="imageOut()"/>

    <script>
        function imageOut(){
            console.log("Image Out")
        }
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/12/screenshot10.png" alt="screenshot10" width="600px"/>

**Example explanation :**

In the above example, When a user leave their mouse out the input box, an `console` will appear saying `onmouse out event occurs`. However, this message is a show since the code will only trigger when the mouse is leave from the input box, not when it's actually clicked.

## onmousemove

The `onmousemove` event is triggered when the mouse pointer moves over an HTML element and generates a continuous stream of events as the mouse moves.

**For example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>onmouseout</title>
  </head>

  <body>
   <img src="/pizza.png" onmousemove="imageOver()"/>
   <script>
    function imageOver(){
        const number = Math.random();
        console.log(`Image Over: ${number}`); 
    }
   </script>
  </body>
</html>
```
**Output :**

<img src="/javascript/12/screenshot7.png" alt="screenshot7" width="600px"/>

**Example explanation :**

In the above example, when you hover the mouse pointer over this image, it triggers the `onmousemove` event. The `imageOver()` function, a random number between `0 and 1` is generated using `Math.random()`, and a message is logged to the console.

## ondblclick

The `ondblclick` event is triggered when a user double-clicks on an HTML element.

**For example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>ondblclick</title>
  </head>

  <body>
   <img src="/pizza.png" ondblclick="dbl()"/>
   <script>
    function dbl(){
       alert('Awesome'); 
    }
   </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/12/screenshot8.png" alt="screenshot8" width="600px"/>

**Example explanation :**

In the above example, when you load the web page in a browser, the image` "/pizza.png"` is displayed. if you `double-click` on the image, the `ondblclick` event is triggered.
The `dbl()` function, an alert dialog open with the message `Awesome` is displayed.


## onload

When the webpage loads, the `onload` event is triggered.

**For example :**

```html
<!DOCTYPE html> 
<html>
  <head>
    <title>onload</title>
  </head>
  <body onload="load()">
     <script>
        function load(){
            alert("Page Loading Completed...")
        }
     </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/12/screenshot6.png" alt="screenshot6" width="600px"/>


**Example explanation :**

In the above example, the `load` event is trigger when webpage is load.



