---
title: Text Align
description: "Text Align "
hide_table_of_contents: true
---

## Text-align

The `text-align` property is used to specify the horizontal alignment of the text within its containing element. It allows you to control how the text is aligned, whether it's aligned to the `left`, `right`, `center`, or `justified`.

**There are four values for the `text-align` property:**

1. **`text-align: left;` :** This value aligns the text to the left edge of the containing element. The text will be flush with the left side, and any remaining space will be on the right side.

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

<img src="/css/05/output-1.png" alt="output-1" width="600px"/>

2. **`text-align: right;`:** This value aligns the text to the right edge of the containing element. The text will be flush with the right side, and any remaining space will be on the left side.

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

<img src="/css/05/output-2.png" alt="output-2" width="600px"/>

3. `text-align: center;` : This value centers the text horizontally within the containing element. The text will be evenly spaced between the left and right edges.

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

<img src="/css/05/output-3.png" alt="output-3" width="600px"/>

4. `text-align: justify;`: This value justifies the text, meaning it spreads the text evenly between the left and right edges of the containing element. It adjusts the spacing between words and characters to create a clean, straight edge on both sides.

**Example :**

```html showNumber=true
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

<img src="/css/05/output-4.png" alt="output-4" width="600px"/>
