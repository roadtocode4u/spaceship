---
title: Box Shadow and Hover
description: Box Shadow and Hover
hide_table_of_contents: true
---

## Hover

The :hover selector is used for selecting the elements when we move the mouse on them. We can use it on almost every HTML element.The hover can be used to highlight the web pages as per the preference of users in an effective web-designing program.

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hover</title>
    <style>
      .btn {
        background-color: tomato;
        color: white;
        border: 2px solid dashed;
        border-radius: 10px;
      }
      .btn:hover {
        background-color: aquamarine;
        color: black;
      }
    </style>
  </head>
  <body>
    <button class="btn">Awesome button</button>
  </body>
</html>
```

### We can give hover effect on image

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>shadow</title>
    <style>
      img-tiger {
        height: 100px;
        border-radius: 50%;
      }
      img-tiger:hover {
        border-radius: 20px;
        transition: 2s;
        margin-left: 30px;
      }
    </style>
  </head>
  <body>
    <img src="tiger.png" alt="img" />
  </body>
</html>
```

**Output :**
<img src="/icp/17/step-1.png" alt="step-1" width="500px"/>

## Box-Shadow :

The box-shadow property attaches one or more shadows to an element.

**`Syntax :`**

         h-shadow v-shadow  blur spread  color
             |       |      |      |       |

box-shadow: 5px 5px 5px 2px #808080;

**`Explanation :`**

**h-shadow :** The horizontal offset of the shadow. A positive value puts the shadow on the right side of the box, a negative value puts the shadow on the left side of the box

**v-shadow :** The vertical offset of the shadow. A positive value puts the shadow below the box, a negative value puts the shadow above the box.

**blur :** The blur radius. The higher the number, the more blurred the shadow will be.

**spread :** The spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow

**color :** The color of the shadow. The default value is the text color.

```css
box-shadow: 5px 5px 5px 2px #808080;
```

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>shadow</title>
    <style>
      .img-tiger {
        height: 300px;
        border-radius: 50px;
        margin: 30px;
        box-shadow: 2px 2px 5px 10px rgb(138, 136, 136);
      }

      .img-tiger:hover {
        border-radius: 20px;
        transition: 2s;
      }
    </style>
  </head>

  <body>
    <img src="tiger.png" class="img-tiger" alt="img" />
  </body>
</html>
```

**Output :**

<img src="/icp/17/step-2.png" alt="step-2" width="500px"/>
