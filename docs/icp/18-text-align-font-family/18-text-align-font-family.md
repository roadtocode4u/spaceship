---
title: Text Align and Font Family
description: Text Align and Font Family
hide_table_of_contents: true
---

## Text-align

The `text-align` property is used to specify the horizontal alignment of the text within its containing element. It allows you to control the text is aligned to the `left`, `right`, `center`, or `justify`. for example : We can used this properties on `<p>`, `<div>`, `<heading>`, etc.

**There are four properties of text align :**

- **text-align: left;**

- **text-align: right;**

- **text-align: center;**

- **text-align: justify;**

1. **`text-align: left;` :** This value aligns the text to the left edge of the containing element.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Text Align</title>
    <style>
      .box {
        width: 600px;
        background-color: aquamarine;
        border: 2px solid black;
        text-align: left;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      makea type specimen book.
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-1.png" alt="output-1" width="600px"/>

2. **`text-align: right;`:** This value aligns the text to the right edge of the containing element.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Text Align</title>
    <style>
      .box {
        width: 600px;
        background-color: aquamarine;
        border: 2px solid black;
        text-align: right;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      makea type specimen book.
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-2.png" alt="output-2" width="600px"/>

3. `text-align: center;` : This value centers the text horizontally within the containing element.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Text Align</title>
    <style>
      .box {
        width: 600px;
        background-color: aquamarine;
        border: 2px solid black;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      makea type specimen book.
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-3.png" alt="output-3" width="600px"/>

4. `text-align: justify;`: This value justifies the text, meaning it spreads the text evenly between the left and right edges of the containing element.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Text Align</title>
    <style>
      .box {
        width: 600px;
        background-color: aquamarine;
        border: 2px solid black;
        text-align: justify;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      makea type specimen book.
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-4.png" alt="output-4" width="600px"/>

## Font Family

The `font-family` property is used to specify the font family for the text content of an element. It allows you to define a prioritized list of font families to be used for rendering the text.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Text Align</title>
    <style>
      .box {
        width: 600px;
        border: 2px solid black;
        text-align: justify;
      }
      .highlight {
        background-color: yellow;
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      <span class="highlight"
        >Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,</span
      >when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the
      leap into electronic typesetting, remaining essentially unchanged.
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-5.png" alt="output-5" width="600px"/>

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Text Align</title>
    <style>
      .box {
        width: 600px;
        border: 2px solid black;
        text-align: justify;
      }
      .highlights {
        background-color: aqua;
        font-family: cursive;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsumhas been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
      <span class="highlights"
        >It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.</span
      >
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-6.png" alt="output-6" width="600px"/>
