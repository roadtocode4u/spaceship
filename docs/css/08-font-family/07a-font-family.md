---
title: Font Family
description: "Font Family"
hide_table_of_contents: true
---

## Font Family

The `font-family` property is used to specify the font family for the text content of an element. It allows you to define a prioritized list of font families to be used for rendering the text. If the first font is not available, the browser will try the next one in the list, and so on.

**Example :**

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Font Style</title>
    <style>
      .text {
        font-family: cursive;
      }
    </style>
  </head>

  <body>
    <h1>Normal Text</h1>
    <h1 class="text">Font-Family Example</h1>
  </body>
</html>
```

**Output :**

<img src="/css/05/output-11.png" alt="output-11" width="600px"/>

### Different Types of Font-Families

In CSS, there exist **five** fundamental font families, each with distinct characteristics:

**Serif Fonts**: These fonts exhibit small strokes at the edges of each letter, evoking a sense of formality and elegance.

**Sans-serif Fonts**: Characterized by clean lines without small strokes, these fonts convey a modern and minimalistic aesthetic.

**Monospace Fonts**: In this category, all letters share the same fixed width, creating a mechanical and structured appearance.

**Cursive Fonts**: Designed to imitate human handwriting, cursive fonts bring a personalized touch to text.

**Fantasy Fonts**: These decorative and playful fonts add a touch of whimsy and creativity to text.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Font Style</title>
    <style>
      .text {
        font-family: serif;
      }
      .text-1 {
        font-family: sans-serif;
      }
      .text-2 {
        font-family: monospace;
      }
      .text-3 {
        font-family: cursive;
      }
      .text-4 {
        font-family: fantasy;
      }
    </style>
  </head>

  <body>
    <h1>Normal Text</h1>
    <h1 class="text">Font-Family Example</h1>
    <h1 class="text-1">Font-Family Example</h1>
    <h1 class="text-2">Font-Family Example</h1>
    <h1 class="text-3">Font-Family Example</h1>
    <h1 class="text-4">Font-Family Example</h1>
  </body>
</html>
>
```

**Output :**

<img src="/css/05/output-12.png" alt="output-12" width="600px"/>
