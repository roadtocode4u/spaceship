---
title: Hover Text Align and Font Family
description: Hover Text Align and Font Family
hide_table_of_contents: true
---

# Hover

The hover selector selects an element when the cursor is over it. Note: The hover selector works on all aspects, not just links.

**Syntax :**

```css
selector {
  //Normal CSS
}

selector:hover {
  //New CSS
}
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Box Shadow</title>
    <style>
      .box {
        height: 200px;
        width: 200px;
        background-color: violet;
      }

      .box:hover {
        background-color: orange;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-1.png" alt="output-1" width="600px"/>

<img src="/icp/18/output-2.png" alt="output-2" width="600px"/>

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Box Shadow</title>
    <style>
      .box {
        height: 200px;
        width: 400px;
        background-color: violet;
        border-radius: 10px;
        box-shadow: 2px 2px 1px 2px #89895d;
      }

      .box:hover {
        background-color: orange;
        border-radius: 15px;
        box-shadow: 2px 2px 1px 2px black;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-3.png" alt="output-3" width="600px"/>

<img src="/icp/18/output-4.png" alt="output-4" width="600px"/>

## Text-align

The `text-align` CSS property are used to give alignment of text.

1. `text-align: start;`

2. `text-align: end;`

3. `text-align: center;`

4. `text-align: justify;`

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Box Shadow</title>
    <style>
      .box {
        background-color: violet;
        color: white;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="box">Hello World</div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-5.png" alt="output-5" width="600px"/>
