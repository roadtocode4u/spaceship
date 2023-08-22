---
title: DOM Manipulation
description: "DOM Manipulation"
hide_table_of_contents: true
---

**DOM -** is a Document Object Model. It is structured representation of webpages in the form of nodes (object).

**Document -** Webpage<br/>
**Object -** Node of the tree like structure<br/>
**Model -** Structure of Node

### Element Selectors

Element selector are methods that allow you to access HTML elements from the DOM (Document Object Model).

**There are different element selectors in Javascript.**

1. getElementById()
2. getElementsByClassName()
3. getElementByTagName()

**Let's Learn Selectors one by one...**

1. **getElementById() :** The `getElementById()` method is commonly used in HTML DOM read or edit an HTML element. It returns an element with a specific value and null if the element does not exist.

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM</title>
  </head>
  <body>
    <div>
      <h1 id="heading">DOM Manipulation</h1>
    </div>
    <script></script>
  </body>
</html>
```

**Output :**

<img src="/javascript/13/screenshot-1.png" alt="screenshot-1" width="600px"/>

**Explanation :**

In the above example, we take a simple `h1` tag and pass a string `DOM Manipulation`.

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM</title>
  </head>
  <body>
    <div>
      <div class="container">
        <h1 id="heading">DOM Manipulation</h1>
        <p id="text">This is Paragraph.</p>
      </div>
    </div>
    <script>
      const element = document.getElementById("heading");
      element.innerText = "This is Structural Paragraph.";
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/13/screenshot-2.png" alt="screenshot-2" width="600px"/>

**Explantion :**

`<div class="container">` : This is another `<div>` tag with a class attribute set to `container`. It's used to group elements together and apply styling.

`<h1 id="heading">` : DOM Manipulation `</h1>`: This line contains an `<h1>` (header) tag with an id attribute set to `heading`. It displays the text `DOM Manipulation` as a main heading.

`<p id="text">This is Paragraph.</p>` : This line contains a `<p> ` tag with an id set to text. It displays the text `This is Paragraph.` as a paragraph of content.
