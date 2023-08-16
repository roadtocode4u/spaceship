---
title: units in css and z-index
description: "units in css and z-index"
hide_table_of_contents: true
---

`px (pixels)` : Fixed-size units, known as **pixels**, do not adjust to screen size.

`em` : Relative to the font size of its parent. **For example**, if the parent's font size is `16px`, `1em` is equal to `16px`.

`rem` : `rem` means Relative to its root element.

`vh (viewport height)` : A percentage of the viewport's height.

`vw (viewport width)` : A percentage of the viewport's width.

`% (percentage)` : Represents a portion of a whole, often relative to a parent element's size.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Units</title>
    <style>
      body {
        font-size: 16px;
      }

      .btn {
        width: 2rem;
      }
    </style>
  </head>
  <body>
    <button class="btn">Click Me!</button>
  </body>
</html>
```

**Output :**

<img src="/icp/52/screenshot-1.png" alt="screenshot-1" width="600px"/>

**Example Explanation :**

In the above example, the body's `font-size` is `16px`. The width of a button element with class `.btn` is twice the size of its parent element.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Units</title>
    <style>
      body {
        font-size: 16px;
      }

      .btn {
        width: 2rem;
      }

      .btn-1 {
        width: 32px;
      }
    </style>
  </head>
  <body>
    <button class="btn">Click Me!</button>
    <br /><br /><br />
    <button class="btn-1">Click Me!</button>
  </body>
</html>
```

**Output :**

<img src="/icp/52/screenshot-2.png" alt="screenshot-2" width="600px"/>

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Units</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      .container {
        background-color: tomato;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <div class="container">This is container.</div>
  </body>
</html>
```

**Output :**

<img src="/icp/52/screenshot-3.png" alt="screenshot-3" width="600px"/>

**Example Explanation :**

In the above example, there is a `div` tag with a `.container` class that has css properties for `background color` and `100vh` `height`, which fills the entire viewport.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Units</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      .container {
        background-color: tomato;
        height: 50vh;
        width: 50vw;
      }
    </style>
  </head>
  <body>
    <div class="container">This is container.</div>
  </body>
</html>
```

**Output :**

<img src="/icp/52/screenshot-4.png" alt="screenshot-4" width="600px"/>

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Units</title>
    <style>
      .container {
        background-color: tomato;
        height: 100%;
        width: 50%;
      }

      .btn {
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>I am container.</h1>
      <button class="btn">Hello</button>
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/52/screenshot-5.png" alt="screenshot-5" width="600px"/>

## z-index

In CSS, the **z-index** property controls the stacking order of elements on a webpage. Higher values position elements on top of lower ones, creating a layered effect, similar to stacking cards.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Z-index</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .container {
        background-color: tomato;
        height: 500px;
        width: 500px;
      }

      .btn-1 {
        position: absolute;
        left: 10px;
        top: 10px;
        background-color: aqua;
        width: 100px;
        height: 50px;
        z-index: 2;
      }

      .btn-2 {
        position: absolute;
        left: 30px;
        top: 30px;
        background-color: bisque;
        width: 100px;
        height: 50px;
        z-index: 3;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <button class="btn-1">Button-1</button>
      <button class="btn-2">Button-2</button>
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/52/screenshot-6.png" alt="screenshot-6" width="600px"/>

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Z-index</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .container {
        background-color: tomato;
        height: 500px;
        width: 500px;
      }

      .btn-1 {
        position: absolute;
        left: 10px;
        top: 10px;
        background-color: aqua;
        width: 100px;
        height: 50px;
        z-index: 1;
      }

      .btn-2 {
        position: absolute;
        left: 30px;
        top: 30px;
        background-color: bisque;
        width: 100px;
        height: 50px;
        z-index: 2;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <button class="btn-1">Button-1</button>
      <button class="btn-2">Button-2</button>
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/52/screenshot-7.png" alt="screenshot-7" width="600px"/>
