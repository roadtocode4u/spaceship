---
title: Border and Border Radius
description: "Border and Border Radius "
hide_table_of_contents: true
---

## Border

A border is a decorative or structural element that can be added to HTML elements to visually separate. It is a line that surrounds the content of an element and can be customized in terms of color, width, style.

CSS Border have different properties like **border style**, **border color**, **border width**.

**Syntax :**

```css
selector {
  border-style: solid;
  border-color: aqua;
  border-width: 5px;
}
```

`border-style` property is used to defines the style of the border line, `border-color` property is used to sets the color of the border and `border-width` property is used to sets the thickness or width of the border, it can be specified using a specific value in pixels(px).

**There are four types of border styles :**

1. **`solid` :** Continuous line. For example : (\_\_)

2. **`double` :** Two parallel lines. For example :(===)

3. **`dashed` :** A series of short dashes. For example : (-----)

4. **`dotted` :** A series of small dots. For example : (..........)

### **solid :**

The solid border style in CSS creates solid line around an element. It can be applied to a elements, such as divs, paragraphs, headings, buttons, and images.

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Solid Border</title>
    <style>
      .box {
        background-color: #ffcccc;
        height: 150px;
        width: 300px;
        border-style: solid;
        border-width: 3px;
        border-color: #ff6666;
      }
    </style>
  </head>
  <body>
    <div class="box">Aabra ka Dabra</div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-2.png" alt="output-2" width="600px"/>

**You can apply different border colors to different sides of an element :** `left`, `right`, `top`, `bottom`

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Border</title>
    <style>
      .box {
        height: 200px;
        width: 300px;
        background-color: #99c2ff;
        border: solid 4px;
        border-left: 5px solid rgb(68, 255, 0);
        border-top: 5px solid red;
        border-right: 5px solid blue;
        border-bottom: 5px solid green;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-9.png" alt="output-9" width="600px"/>

### **double :**

To create a double border that features two parallel lines surrounding an HTML element.

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Double Border</title>
    <style>
      .box {
        background-color: yellow;
        height: 200px;
        width: 300px;
        border-style: double;
        border-color: black;
        border-width: 10px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-3.png" alt="output-3" width="600px"/>

### **dashed :**

To create a dashed border that consists of a series of short, dashed lines.

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Dashed Border</title>
    <style>
      .box {
        background-color: yellow;
        height: 200px;
        width: 300px;
        border-style: dashed;
        border-color: black;
        border-width: 10px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-4.png" alt="output-4" width="600px"/>

### **dotted :**

To create a dotted border that consists of a series of dots.

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Dotted Border</title>
    <style>
      .box {
        background-color: yellow;
        height: 200px;
        width: 300px;
        border-style: dotted;
        border-color: black;
        border-width: 10px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-5.png" alt="output-5" width="600px"/>

:::tip
Instead of adding `border-style`, `border-width` and `border-color` separately, we can use a shorthand property `border` to provide all values at once. For example,
`border: solid black 3px;` will set border of solid style with black color having width of 3px.
:::

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Border</title>
    <style>
      .box {
        background-color: pink;
        height: 150px;
        width: 300px;
        border: solid black 3px;
      }
    </style>
  </head>
  <body>
    <div class="box">Aabra ka Dabra</div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-6.png" alt="output-6" width="600px"/>

## Border Radius

The border-radius CSS property rounds the corners of an element's outer border edge.
Border radius property used to provide radius to the elements of coners.
We can provide four value to the border radius property.

**Example :**

```css
border-radius: 0px 50px 0px 50px;
```

First value applies to `top-left` corner, second value applies to `top-right` cornar, third value applies to `bottom-right` corner, and fourth value applies to `bottom-left` corner.

**We can provide different values for different corner :**

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Border Radius</title>
    <style>
      .box {
        height: 200px;
        width: 300px;
        background-color: rgb(10, 230, 135);
        border-radius: 15px 50px 30px 5px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-10.png" alt="output-10" width="600px"/>

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Border Radius</title>
    <style>
      .box {
        height: 200px;
        width: 200px;
        border: solid 2px black;
        background-color: rgb(230, 10, 204);
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-11.png" alt="output-11" width="600px"/>

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Border Radius</title>
    <style>
      #btn-recording {
        background-color: #99c2ff;
      }
      #btn-presenting {
        background-color: #3385ff;
        color: white;
      }
      .google-btn {
        height: 30px;
        width: 120px;
        border: none;
        border-radius: 3px;
      }
    </style>
  </head>
  <body>
    <button id="btn-recording" class="google-btn">Start Recording</button>
    <br /><br />
    <button id="btn-presenting" class="google-btn">Start Presenting</button>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-8.png" alt="output-8" width="600px"/>
