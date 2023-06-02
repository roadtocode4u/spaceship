---
title: Height, Width, Border,  Border Radius in CSS
description: "Height, Width, Border, Border Radius in CSS"
hide_table_of_contents: true
---

## Height, Width, Border, Border Radius in CSS

### Height, Width For Button

CSS provides various methods to specify the height and width of an image. To set image dimensions using pixel (px) values, you can use CSS, which allows for precise control over the size of the image.

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Height And Width</title>
    <style>
      #btn-recording {
        background-color: #99c2ff;
      }
      #btn-presenting {
        background-color: #3385ff;
        color: white;
      }
      .google-btn {
        height: 40px;
        width: 120px;
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

<img src="/icp/14/output-1.png" alt="output-1" width="600px"/>

## Border

CSS Border have different properties like `border style`, `border color`, `border width`, `border radius`.

There are four types of border

1. `solid` : ******\_\_\_******
2. `double` : =====
3. `dashed` : --------
4. `dotted` : ...............

### **solid :**

To add a solid border to HTML elements, such as divs, images, buttons, and more.

**Syntax :**

```css
selector {
  border-style: solid;
  border-color: aqua;
  border-width: 5px;
}
```

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

**We can also provide border properties by short hand technique like this `border: solid black 3px;`**

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

Border radius property used to provide radius to the elements of coners.

We can provide four value to the border radius property.

**Example :**

`border-radius: 0px 50px 0px 50px ;`

First value applies to `top-left` corner, second value applies to `top-right` cornar, third value applies to `bottom-right` corner, and fourth value applies to `bottom-left` corner.

<img src="/icp/14/output-7.png" alt="output-7" width="600px"/>

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
