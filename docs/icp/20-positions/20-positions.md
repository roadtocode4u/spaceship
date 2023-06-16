---
title: Positions
description: Positions
hide_table_of_contents: true
---

# Positions

CSS position properties are used to apply left, right, top, and bottom properties to set the position to the CSS element accordingly.

**There are five different types of positions in css :**

1. `static`
2. `relative`
3. `fixed`
4. `sticky`
5. `absolute`

## Static

The `static` position is by default position. It does not provide any effect. The static position is applied to all elements.

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
  <head>
    <title>Position</title>
    <style>
      .btn {
        top: 20px;
      }
    </style>
  </head>
  <body>
    <button class="btn">This is button</button>
  </body>
</html>
```

**⚙️ Output :**

<img src="/icp/20/output-1.png" alt="output-1" width="600px"/>

**Example Explanation :**

In the above example, we are providing `top: 20px` for the button but does not apply any effect on output because by default it is a static position & static position does not apply any effect.

## Relative

The relative position is the relative to original position or nearest element.

`position: relative;`

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
  <head>
    <title>Position</title>
    <style>
      .btn {
        position: relative;
        top: 50px;
      }
    </style>
  </head>

  <body>
    <button class="btn">Normal Button</button>
  </body>
</html>
```

**⚙️ Output :**

<img src="/icp/20/output-2.png" alt="output-2" width="600px"/>

**Example Explanation :**

In the above example, we are providing `position: relative` and `top: 50px` for the button. The button provide space on the top 50px to its original position.

## Sticky

A sticky element are relative and fixed, its depending on the scroll position. Element position are relative (like `position: relative`) utils visible area on the browser after scrolling webpage then element position are sticky.

`position: sticky;`

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
  <head>
    <title>Position</title>
    <style>
      .img-telephone {
        height: 50px;
        position: sticky;
        top: 30px;
      }
    </style>
  </head>

  <body>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi autem
      repudiandae illum numquam veritatis quod deleniti voluptates nulla quas
      expedita consectetur magni suscipit a aliquam tenetur sunt delectus,
      doloremque est!
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi autem
      repudiandae illum numquam veritatis quod deleniti voluptates nulla quas
      expedita consectetur magni suscipit a aliquam tenetur sunt delectus,
      doloremque est!
    </p>

    <img
      src="./tableTag/07-table-tag/img-telephone.png"
      class="img-telephone"
    />

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi autem
      repudiandae illum numquam veritatis quod deleniti voluptates nulla quas
      expedita consectetur magni suscipit a aliquam tenetur sunt delectus,
      doloremque est!
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi autem
      repudiandae illum numquam veritatis quod deleniti voluptates nulla quas
      expedita consectetur magni suscipit a aliquam tenetur sunt delectus,
      doloremque est!
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi autem
      repudiandae illum numquam veritatis quod deleniti voluptates nulla quas
      expedita consectetur magni suscipit a aliquam tenetur sunt delectus,
      doloremque est!
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi autem
      repudiandae illum numquam veritatis quod deleniti voluptates nulla quas
      expedita consectetur magni suscipit a aliquam tenetur sunt delectus,
      doloremque est!
    </p>
  </body>
</html>
```

**⚙️ Output :**

<img src="/icp/20/output-6.png" alt="output-6" width="600px" height="300px"/>

<img src="/icp/20/output-7.png" alt="output-7" width="600px" height="300px"/>

**Example Explanation :**

In The above 1st output contact image position are `realtive` and 2nd output webpage are scroll then contact image position are `sticky`.

## Fixed

Fixed is set with respect to viewport. Removed from normal flow.

Viewport => Visible area on the browser.

`position: fixed;`

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
  <head>
    <title>Position</title>
    <style>
      .btn {
        position: fixed;
        top: 20px;
        right: 20px;
      }
    </style>
  </head>

  <body>
    <button class="btn">Normal Button</button>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil, eos
      dolor ad commodi consequuntur ab dicta fuga quo cupiditate. Ab et cumque
      eaque libero dolorum maxime veritatis eligendi voluptatibus.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil, eos
      dolor ad commodi consequuntur ab dicta fuga quo cupiditate. Ab et cumque
      eaque libero dolorum maxime veritatis eligendi voluptatibus.
    </p>
  </body>
</html>
```

**⚙️ Output :**

<img src="/icp/20/output-4.png" alt="output-4" width="600px" height="300px"/>

**Example Explanation :**

In the above example, we are providing `position: fixed;`, `top: 20px` and ` right: 20px;` for the button. Then Button are fixed with this position it always stays in the same place even if the page is scrolled.

## Absolute

It is relative to parent element. This element is positioned relative to the first parent element and absolute to its child elements.

`position: absolute;`

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Position</title>
    <style>
      .card {
        height: 200px;
        width: 400px;
        background-color: rgb(239, 189, 181);
        margin-top: 70px;
        position: relative;
        border-radius: 10px;
      }

      .img {
        position: absolute;
        width: 50px;
        left: 140px;
        top: -50px;
        margin: 0 auto;
        padding: 30px;
        border-radius: 50%;
        background-color: rgb(232, 167, 155);
      }
    </style>
  </head>

  <body>
    <div class="card">
      <img src="call.png" alt="" class="img" />
    </div>
  </body>
</html>
```

**⚙️ Output :**

<img src="/icp/20/output-8.png" alt="output-8" height="600px"/>

**Example Explanation :**

In the above example, we are providing `position: relative` for the parent element and `position: absolute` for the child element. Child elements are provided space `top: -50px` and `left: 140px` to their parent elements.
