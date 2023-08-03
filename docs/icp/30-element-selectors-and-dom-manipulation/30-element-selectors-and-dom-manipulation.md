---
title: Element Selectors and DOM Manipulation
description: "Element Selectors and DOM Manipulation"
hide_table_of_contents: true
---

Element selector are methods that allow you to access HTML elements from the DOM (Document Object Model). There are different element selectors in javascript.

1. getElementById()
2. getElementsByClassName()
3. getElementByTagName()

_Case_

1. Camel Case

   ex: HelloWorldBye

   ex: helloWorldBye

2. Snake case

   ex : hello_world

Let's learn one by one...

1. **`getElementById()`** is a method in JavaScript that is used to retrieve a reference to an HTML element with a specific `identifier` or `ID`. This method searches the document for an element with a matching `ID` and returns a reference to it if found. This method used to select an element by its `id` attribute.

**For example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Javscript</title>
  </head>

  <body>
    <h1 id="firstHeading">This is Heading 1</h1>

    <script>
      const element = document.getElementById("firstHeading");
      console.log(element);
    </script>
  </body>
</html>
```

**Output :**

<img src="/icp/30/output-1.png" alt="output-1" width="600px"/>

**Example explanation:**

In the above example, the `getElementById()` method to retrieve a reference to an HTML element with the ID `firstHeading` and it to the console using `console.log()`.

The first two lines of code define heading elements with ID `firstHeading`. The third line uses `getElementById()` to retrieve a reference to the `firstHeading` element and assigns it to the variable `element`. The fourth line logs the value of element to the console, which will be the HTML element with the ID `firstHeading`.

### innerHtml

`innerHTML` is a property that allows you to access and modify the content inside an HTML element using JavaScript.

**For example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Javscript</title>
  </head>

  <body>
    <div id="box">
      <h1>Hello</h1>

      <h2>Bye Bye</h2>
    </div>
    <script>
      const element = document.getElementById("box");
      console.log(element.innerHTML);
    </script>
  </body>
</html>
```

**Output :**

<img src="/icp/30/output-2.png" alt="output-2" width="600px"/>

**Example explanation :**

In the above example, the `getElementById()` method to retrieve a reference to an HTML element with the ID `box` and it to the console using `console.log()`.

The first two lines of code define heading elements with ID `box`. The third line uses `getElementById()` to retrieve a reference to the `box` element and assigns it to the variable `element`. The fourth line logs the value of element to the console, which will be the HTML element with `innerHTML` the ID `box`. The `inner.HtMl` provide HTML element.

### innerText

`innerText` is a property that allows to access or modify the text content of an element. It return only textual data.

**For example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Javscript</title>
  </head>

  <body>
    <div id="box">
      <h1>Hello</h1>

      <h2>Bye Bye</h2>
    </div>
    <script>
      const element = document.getElementById("box");
      console.log(element.innerText);
    </script>
  </body>
</html>
```

**Output :**

<img src="/icp/30/output-3.png" alt="output-3" width="600px"/>

**Example explanation :**

In the above example, the `getElementById()` method to retrieve a reference to an HTML element with the ID `box` and it to the console using `console.log()`.

The first two lines of code define heading elements with ID `box`. The third line uses `getElementById()` to retrieve a reference to the `box` element and assigns it to the variable `element`. The fourth line logs the value of element to the console, which will be the HTML element with `innerHTML` the ID `box`. The `inner.Text` returns only textual data.

**Another example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Javscript</title>
  </head>

  <body>
    <div id="box">
      <h1>Hello Javascript</h1>
    </div>
    <script>
      const element = document.getElementById("box");
      element.innerText = "Bye Bye";
    </script>
  </body>
</html>
```

**Output :**

<img src="/icp/30/output-4.png" alt="output-4" width="600px"/>

In above example the `getElementById()` method to retrieve a reference to an HTML element with the ID `element` and then accessing its `innerHTML` property to change its content.

The first two lines of code define heading elements with ID `box`. The third line uses `getElementById()` to retrieve a reference to the `box` element and assigns it to the variable `element`.

The fourth line sets the `innerHTML` property of the tag element to `element` which will replace the original text `Hello Javascript` with `Bye Bye`.

When you run this code, you should see the text of the `box` element updated in the browser to display `Bye Bye`.

## Dom-Manipulation

Dom Manipulation is a process of dynamically interacting with the elements and content of an HTML document. You can add, change or remove elements from document using javascript.
