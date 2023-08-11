---
title: CSS variables
description: "CSS Variables"
hide_table_of_contents: true
---

CSS variables, also known as custom properties, act as containers in CSS that store values. Instead of repeating a value throughout your code, you can store it in a variable and use it wherever needed. If the value needs to be changed later, you only need to update it in one place, and it will automatically update everywhere it's used.

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

The `:root` selector in CSS is like the boss of all selectors. It lets you create global CSS variables that can hold various things like `colors`, `sizes`, and more. This is super handy because you can change the whole look of your website from one place!

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

By tapping into the power of the `:root` selector, you can manage the style of your whole website without getting lost in a jungle of styles.

Remember, CSS variables make your styles consistent and easy to manage. They're like magic shortcuts for your code. So, go ahead and give them a try in your projects
