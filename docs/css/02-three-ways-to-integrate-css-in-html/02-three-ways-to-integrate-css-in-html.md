---
title: Three ways to integrate CSS in HTML
description: "Three ways to integrate CSS in HTML"
hide_table_of_contents: true
---

## Implementing CSS:

CSS can be implemented by three ways:

1. **Inline CSS :** Inline CSS is applied directly to HTML elements using the style attribute. It allows you to apply CSS styles to individual HTML tags.

**Code :**

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
  </head>
  <body>
    <h2 style="color:tomato; font-size:20px;">Wow. CSS is beautiful</h2>
  </body>
</html>
```

**Output :**

<img src="/css/01/output-1.png" alt="output-1" width="600px"/>

2. **Document CSS :** Document CSS is embedded within the HTML document using the `<style>` tag. It is placed in the `<head>` section of the HTML document.

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
    <style>
      h2 {
        color: tomato;
        background-color: grey;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <h2>document CSS</h2>
  </body>
</html>
```

**Output :**

<img src="/css/01/output-2.png" alt="output-2" width="600px"/>

3. **External CSS :** External CSS is stored in a separate CSS file and linked to the HTML document using the `<link>` element. The CSS file is saved with a .css extension

**Code :**

### **File Name : index.html**

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h2>WOW. CSS is beautiful</h2>
  </body>
</html>
```

### **File Name : style.css**

```css showLineNumbers=true
h2 {
  color: tomato;
  background-color: "aqumarine";
}
```

**Output :**

<img src="/css/01/output-3.png" alt="output-3" width="600px"/>

In the above example, the CSS styles are defined in the style.css file and linked to the HTML document using the `<link>` element.
