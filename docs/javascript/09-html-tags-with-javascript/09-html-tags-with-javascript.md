---
title: HTML Tags With JavaScript
description: HTML Tags With JavaScript
hide_table_of_contents: true
---

### How to add HMTL tags in JavaScript

In web development, JavaScript is a powerful language that allows you to manipulate and enhance the content of your webpages dynamically.

**Basic HTML Tag Insertion**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Html in JS</title>
  </head>
  <body>
    <script>
      document.write("Hello");
      document.write("<b> Hello </b>");
      document.write("<h1> Hello </h1>");
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/07/screenshot-1.png" alt="screenshot-1" width="600px"/>

**Code Explanation :**

In the above examples, we utilize the `document.write()` method to dynamically generate HTML content within the webpage. The first example demonstrates adding plain text, bold text using the `<b>` tag, and a top-level heading using the `<h1>` tag.

#### We also apply CSS within the script tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Html in JS</title>
  </head>
  <body>
    <script>
      document.write("Hello");
      document.write("<b> Hello </b>");
      document.write(`<h1 style="color:red;"> Hello </h1>`);
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/07/screenshot-2.png" alt="screenshot-2" width="600px"/>

**Code Explanation :**

In the above examples, we utilize the `document.write()` method to dynamically generate HTML content within the webpage. The `<h1>` tag is given a red text color using the `style` attribute.
