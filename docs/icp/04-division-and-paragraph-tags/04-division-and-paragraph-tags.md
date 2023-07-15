---
title: Division and Paragraph Tags
description: "Division and Paragraph Tags"
hide_table_of_contents: true
---

# Division and Paragraph Tags

### Paragraph Tags

The paragraph tag `<p>` is used to define a block of text in HTML as a paragraph. It represents a unit of content that is separated from other elements on the page

**Syntax :**

```html
<p>Text</p>
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Paragraph Tag</title>
  </head>
  <body>
    <p>
      pizza, dish of Italian origin consisting of a flattened disk of bread
      dough topped with some combination of olive oil, oregano, tomato, olives,
      mozzarella or other cheese, and many other ingredients, baked
      quickly—usually, in a commercial setting, using a wood-fired oven heated
      to a very high temperature—and served hot.
    </p>
    <p>
      Biryani (/bɜːrˈjɑːni/) is a mixed rice dish originating among the Muslims
      of the Indian subcontinent. It is made with Indian spices, rice, and
      usually some type of meat (chicken, beef, goat, lamb, prawn, fish) or in
      some cases without any meat, and sometimes, in addition, eggs and
      potatoes.
    </p>
  </body>
</html>
```

**Output :**

<img src="/icp/04/output-1.png" alt="output-1" width="600px" height="300px"/>

### Align

The `align` attribute is used to specify the horizontal alignment of the text within a paragraph. It can be set to one of three values:  `left`, `center`, or `right`.
**Syntax :**

```html
<p align="left">Text</p>
<p align="center">Text</p>
<p align="right">Text</p>
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Paragraph Tag</title>
  </head>
  <body>
    <p align="left">This id Pragraph 1</p>
    <p align="center">This id Pragraph 2</p>
    <p align="right">This id Pragraph 3</p>
  </body>
</html>
```

**Output :**

<img src="/icp/04/output-2.png" alt="output-2" width="600px"/>

### Division Tags

he division tag `<div>` is used to create a division or section in an HTML document. It is a container that allows you to group and style related content together.

**Syntax :**

```html
<div>Text</div>
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Paragraph Tag</title>
  </head>
  <body>
    <div>
      <h1>🍕 Pizaa</h1>
      <p>
        pizza, dish of Italian origin consisting of a flattened disk of bread
        dough topped with some.
      </p>
    </div>
    <div>
      <h1>🥘 Biryani</h1>
      <p>
        Biryani (/bɜːrˈjɑːni/) is a mixed rice dish originating among the
        Muslims of the Indian subcontinent.
      </p>
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/04/output-3.png" alt="output-3" width="600px"/>
