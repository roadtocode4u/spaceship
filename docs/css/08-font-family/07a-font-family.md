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

<img src="/css/05/1.png" alt="output-15" width="600px"/>

**Step 2:**
Select the font and click on"Get Font".
<img src="/css/05/2.png" alt="output-15" width="600px"/>

**Step 3:**
Then click on"Get embed code".
<img src="/css/05/3.png" alt="output-15" width="600px"/>

**Step 4:**
You can use Google Fonts in two ways: with a `<link>` tag <b>OR</b> using `@import`.<b>Both Give Same Output📌</b> <br/>

** 🔴By Using link **<br/>
copy the link and CSS class for variable style.

<img src="/css/05/4.png" alt="output-16" width="600px"/>

Paste the link into the head and use the CSS class for variable style in any division or tag you want to apply the Font to.<br/>

**Example**

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@400..700&display=swap"
      rel="stylesheet"
    />
  </head>

  <style>
    .text {
      font-family: "Edu NSW ACT Cursive", cursive;
      font-optical-sizing: auto;
      font-weight: weight;
      font-style: normal;
    }
  </style>

  <body>
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi
      ipsa iure deserunt ex voluptates. Ratione voluptatum consequuntur nulla
      fuga corporis atque tenetur dolorem at autem, officiis, magni totam ab.
    </p>
  </body>
</html>
```

### OR

** 🔴By Using @import.**<br/>
another common way to use Google Fonts is by importing them directly in CSS instead of adding a `<link>` in HTML..
copy the url and CSS class for a variable style

<img src="/css/05/5.png" alt="output-16" width="600px"/>

Paste the @import URL inside the `<style>` tag ( or for external CSS, you can directly add the `@import link` in the external CSS file ), use the CSS class for variable style in any division or tag you want to apply the Font to.<br/>

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <style>
    @import url("https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@400..700&display=swap");
    .text {
      font-family: "Edu NSW ACT Cursive", cursive;
      font-optical-sizing: auto;
      font-weight: weight;
      font-style: normal;
    }
  </style>
  <body>
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi
      ipsa iure deserunt ex voluptates. Ratione voluptatum consequuntur nulla
      fuga corporis atque tenetur dolorem at autem, officiis, magni totam ab.
    </p>
  </body>
</html>
```

**Output**
<img src="/css/05/6.png" alt="output-17" width="600px"/>
