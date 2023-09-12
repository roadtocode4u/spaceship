---
title: Padding
description: "Padding"
hide_table_of_contents: true
---

## Box-Model

The CSS Box Model is a fundamental concept that describes how elements on a webpage are rendered and how their dimensions are calculated. It consists of four layers: `content`, `padding`, `margin`, and `border`. In this guide, we'll explore the concepts of `padding` and `margin`, and provide examples to illustrate their usage.

### Padding

Padding refers to the space between an element's content and its border. It creates space within the element, inside any defined borders. The CSS properties used to control padding are:

* **`padding-top`**: Specifies the padding on the top side of the element.

* **`padding-right`**: Specifies the padding on the right side of the element.

* **`padding-bottom`**: Specifies the padding on the bottom side of the element.

* **`padding-left`**: Specifies the padding on the left side of the element.

Here's an example of how padding can be applied to an element:

**Example :**

```html
<!DOCTYPE html>
<html>
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
<img src="/css/04/output-1.png" alt="output-1" width="600px"/>

### Shorthand Padding

Instead of specifying `padding` for each side individually, you can use the shorthand padding property to define padding for all four sides simultaneously. The values are specified in the following order: `top`, `right`, `bottom`, `left`.


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
<img src="/css/04/output-2.png" alt="output-2" width="600px"/>

### We can apply padding on buttons:

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
<img src="/css/04/output-3.png" alt="output-3" width="600px"/>