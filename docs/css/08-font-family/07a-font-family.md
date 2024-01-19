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

```html showLineNumbers=true
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

### Importing Fonts using the Google Fonts

**Step 1:**
Go to https://fonts.google.com/ else search `Google Fonts` on web.
<img src="/css/05/output-13.png" alt="output-13" width="600px"/>

Visit the Google Fonts website to explore and select the fonts you want to use.

<img src="/css/05/output-15.png" alt="output-15" width="600px"/>

**Step 2:**
Select the font and click on the import and copy the link and CSS rules.
<img src="/css/05/output-16.png" alt="output-16" width="600px"/>

**Step 3:**
Paste the link into the CSS and use the CSS rule in any division or tag you want to apply the Font to.

**Step 4:**

**Example**

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Font Style</title>
  </head>

  <style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

    .text {
      font-family: "Roboto", sans-serif;
    }
  </style>

  <body>
    <h1>Normal Text</h1>
    <h1 class="text">Font-Family Example</h1>
  </body>
</html>
```

**Output**
<img src="/css/05/output-17.png" alt="output-17" width="600px"/>
