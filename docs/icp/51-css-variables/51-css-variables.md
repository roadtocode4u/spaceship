---
title: CSS variables
description: "CSS Variables"
hide_table_of_contents: true
---

CSS variables, also called custom properties, function as containers in CSS that hold values. Instead of repeating a value throughout the code, it can be stored in a variable and used wherever necessary. If the value needs to be changed later, it only needs to be changed in one place and it will be updated everywhere.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS variables</title>
    <style>
      .btn {
        background-color: #ff3385;
        color: #5c5c8a;
      }

      .heading {
        color: #5c5c8a;
        background-color: #ffcce0;
      }

      .text {
        color: #5c5c8a;
        background-color: #ffcce0;
        border: 1px solid #ff3385;
      }
    </style>
  </head>
  <body>
    <button class="btn">Click Me!</button>
    <h1 class="heading">CSS Variables</h1>

    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
      repellendus neque animi, voluptatibus voluptatem optio voluptates eaque
      temporibus tempora vel accusantium ipsum culpa, facilis excepturi illum
      magni facere quisquam quibusdam!
    </p>
  </body>
</html>
```

**Output :**

<img src="/icp/51/screenshot-1.png" alt="screenshot-1" width="600px"/>

**`:root` variable in CSS**

In CSS, `:root` is similar to the `<html>` tag and allows for the creation of global CSS custom properties that can hold colors, sizes, and other attributes, making it easy to modify the styling of the entire website.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS variables</title>
    <style>
      :root {
        --primary-color: #0084ff;
        --light-bg: #cce6ff;
        --text-color: #666699;
        --text-size: 12px;
        --sm-br: 5px;
        --md-br: 10px;
        --lg-br: 15px;
      }

      .btn {
        background-color: var(--primary-color);
        color: var(--text-color);
        border-radius: var(--sm-br);
      }

      .heading {
        color: var(--text-color);
        background-color: var(--light-bg);
        border: 1px solid var(--primary-color);
      }

      .text {
        color: var(--text-color);
        background-color: var(--light-bg);
        border: 1px solid var(--primary-color);
      }
    </style>
  </head>
  <body>
    <button class="btn">Click Me!</button>
    <h1 class="heading">CSS Variables</h1>

    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
      repellendus neque animi, voluptatibus voluptatem optio voluptates eaque
      temporibus tempora vel accusantium ipsum culpa, facilis excepturi illum
      magni facere quisquam quibusdam!
    </p>
  </body>
</html>
```

<img src="/icp/51/screenshot-2.png" alt="screenshot-2" width="600px"/>
