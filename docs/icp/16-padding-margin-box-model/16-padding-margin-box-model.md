---
title: Padding, Margin and Box Model
description: Padding, Margin and Box Model
hide_table_of_contents: true
---

### Padding

The CSS `padding` properties are used to create space around an element's content, `inside` of any defined borders. padding can apply on every element.
padding can be specify padding for each side of element.

- `padding-left`

- ``padding-right`

- `padding-top`

- `padding-bottom`

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>padding in css</title>
    <style>
      .box {
        border: 3px solid black;
        padding-left: 20px;
        padding-top: 40px;
        padding-right: 60px;
        padding-bottom: 80px;
        width: 400px;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam impedit,
      quia alias repudiandae, velit delectus doloremque omnis unde perferendis
      dicta quo enim, quisquam reprehenderit fugit consectetur commodi corporis
      rem pariatur.
    </div>
  </body>
</html>
```

**Output :**
<img src="/icp/16/step-1.png" alt="step-1" width="600px"/>

### You can apply padding on same side:

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Padding</title>
    <style>
      .box {
        background-color: tomato;
        border: 2px solid black;
        padding: 30px;
        width: 400px;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
      reiciendis modi numquam et error nesciunt nam vero. Deserunt officiis
      doloremque cumque quas soluta reiciendis consequuntur a unde, inventore,
      suscipit eos?
    </div>
  </body>
</html>
```

**Output**
<img src="/icp/16/step-2.png" alt="step-2" width="600px"/>

### You can apply padding on shorthand technique:

To shorten the code, it is possible to specify all the padding properties in one property.

- `padding-top`
- `paading-right`
- `padding-bottom`
- `padding-left`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>padding</title>
    <style>
      .box {
        background-color: tomato;
        border: 3px solid black;
        width: 400px;
        padding: 20px 40px 80px 100px;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, aliquam
      autem. Unde tenetur blanditiis quis magni eaque deserunt. Reprehenderit
      cumque facilis suscipit dolorum tenetur inventore repellendus praesentium
      deleniti iste odio.
    </div>
  </body>
</html>
```

**Output**
<img src="/icp/16/step-3.png" alt="step-3" width="600px"/>

### We can aply padding on buttons:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Padding</title>
    <style>
      .btn {
        background-color: pink;
        border: 3px solid black;
        border-radius: 30px 0 30px 0;
        padding: 20px 40px;
      }
    </style>
  </head>

  <body>
    <button class="btn">click me</button>
  </body>
</html>
```

**Output**
<img src="/icp/16/step-4.png" alt="step-4" width="300px"/>

## Margin:

Margins are used to create space around elements, `outside` of any defined borders.
margin can be specify marging for each side of element.

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Margin</title>
    <style>
      .btn1 {
        background-color: red;
        color: white;
        border: none;
        margin-top: 50px;
        margin-left: 40px;
        margin-right: 30px;
        margin-bottom: 100px;
        padding: 5px 15px 5px 15px;
      }
      .box {
        background-color: aqua;
        border: 2px solid black;
        width: 400px;
      }
    </style>
  </head>

  <body>
    <body>
      <div class="box">
        <button class="btn1">Button One</button>
      </div>
    </body>
  </body>
</html>
```

**Output**
<img src="/icp/16/step-6.png" alt="step-6" width="600px"/>

### You can apply margin on shorthand technique:

To shorten the code, it is possible to specify all the margin properties in one property.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Margin</title>
    <style>
      .btn1 {
        background-color: pink;
        color: white;
        border: 2px solid black;
        margin: 10px 30px 50px 80px;
        padding: 5px 15px 5px 15px;
      }
      .box {
        background-color: yellow;
        border: 2px solid black;
        width: 300px;
      }
    </style>
  </head>

  <body>
    <body>
      <div class="box">
        <button class="btn1">Button One</button>
      </div>
    </body>
  </body>
</html>
```

**Output**
<img src="/icp/16/step-8.png" alt="step-8" width="600px"/>

### You can apply padding on same side :

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Margin</title>
    <style>
      .btn1 {
        background-color: rgb(255, 0, 128);
        color: white;
        border: none;
        margin: 40px;
        padding: 5px 15px 5px 15px;
      }
      .box {
        background-color: aqua;
        border: 2px solid black;
        width: 300px;
      }
    </style>
  </head>

  <body>
    <body>
      <div class="box">
        <button class="btn1">Button One</button>
      </div>
    </body>
  </body>
</html>
```

**Output**
<img src="/icp/16/step-7.png" alt="step-7" width="600px"/>

## Box-Model:

The box model is a fundamental concept in CSS (Cascading Style Sheets) that describes how elements on a webpage are rendered and how their dimensions are calculated.
In the box model, every element on a webpage is represented as a rectangular box. Each box consists of four layers:

1. Content
2. Padding
3. Margin
4. Border
