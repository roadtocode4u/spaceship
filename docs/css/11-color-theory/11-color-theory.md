---
title: Color Theory
description: Color Theory
hide_table_of_contents: true
---

## Colors in CSS

There are different ways to add css colors.

```
1. color name
2. hexadecimal code
3. rgb / rgba
```

### 1. Color  by name

CSS provides predefined color names that you can use directly.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: red;
        color: white;
      }
    </style>
  </head>
  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

**Output :**

<img src="/icp/22/output-5.png" alt="output-5" width="600px"/>

**Example explanation :**

In the above example, set the background color to "red" or the text color to "white".

### 2.Hexadecimal colors:

Hexadecimal colors start with a pound sign (#) followed by six characters representing red, green, and blue (RGB) values. Each pair of characters represents a value from 00 (minimum) to FF (maximum).

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: #ff0000;
        color: #ffffff;
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

**Output :**

<img src="/icp/22/output-6.png" alt="output-6" width="600px"/>

**Example explanation :**

In the above example, sets the background color to red (#FF0000) and the text color to white (#FFFFFF).

### 3.rgb

RGB colors allow you to specify the intensity of red, green, and blue using decimal values ranging from 0 to 255. You can use the `rgb()` function for this.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: rgb(255, 0, 0);
        color: rgb(255, 255, 255);
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

**Output :**

<img src="/icp/22/output-6.png" alt="output-6" width="600px"/>

**Example explanation :**

In the above example, sets the background color to red (255, 0, 0) and the text color to white (255, 255, 255).

### 4.rgba

RGBA colors are similar to RGB, but with an additional alpha channel representing capacity. The alpha value ranges from 0 (transparent) to 1 (opaque). Use the rgba() function to specify these colors.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: rgba(0, 0, 0, 0);
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

**Output :**

<img src="/icp/22/output-9.png" alt="output-9" width="600px"/>

**Example explanation :**

In the above example, the background color is black with full transparency (0), making it completely invisible.

### 5. hsl

HSL colors define hue, saturation, and lightness. Hue represents a color on the color wheel, saturation determines the intensity and lightness controls the brightness. Use the hsl() function to specify these colors.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: hsl(0, 100%, 50%);
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

**Output :**

<img src="/icp/22/output-10.png" alt="output-10" width="600px"/>

**Example explanation :**

In the above example, sets the background color to pure red (0 degrees), with 100% saturation and 50% lightness.

### You can refer to the following websites to choose colors:

1. [colorhunt](https://colorhunt.co)
   <br/>

2. [colorcoder](https://htmlcolorcodes.com/color-picker/)

## Folder Structure

The folder structure in HTML is how you arrange the files and folders in your project.

<img src="/icp/22/output-11.png" alt="output-11" width="600px"/>

### Folder Structure in VS-code

<img src="/icp/22/output-12.png" alt="output-12" width="600px"/>

### After Exapanding folders

<img src="/icp/22/output-13.png" alt="output-13" width="600px"/>

### How to pass the path for an image in HTML?

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Folder Structure</title>
    <style>
      .img {
        height: 300px;
      }
    </style>
  </head>
  <body>
    <img src="./images/taj.jpg" class="img" />
  </body>
</html>
```

:::tip
`./` indicates that the current folder.
:::

**Output :**

<img src="/icp/22/output-14.png" alt="output-14" width="600px"/>

### Simple Login form by using folder structure and external css file

**Code :**

**File Name :** login.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login Form</title>
    <link rel="stylesheet" href="./../css/style.css" />
  </head>

  <body>
    <div class="login-container">
      <img
        src="./../images/image-header/profile.png"
        alt="profile"
        class="profile-img d-block"
      />

      <input
        type="email"
        placeholder="Enter Your Email"
        class="input-box d-block"
      />

      <input
        type="password"
        placeholder="Enter Password"
        class="input-password d-block"
      />

      <button class="btn-login d-block">Login Now</button>
    </div>
  </body>
</html>
```

**File Name :** style.css

```css
body {
  background-color: black;
}

.login-container {
  background-color: white;
  height: 500px;
  width: 400px;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0px 0px 4px 4px steelblue;
  margin-top: 30px;
}

.profile-img {
  padding-top: 30px;
}

.input-box {
  height: 40px;
  width: 300px;
  margin-top: 20px;
  padding: 5px;
}

.btn-login {
  margin-top: 30px;
  width: 200px;
  font-size: 25px;
  padding: 7px;
  background-color: rgb(67, 67, 247);
  border: none;
  border-radius: 10px;
}

.d-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

**Output :**

<img src="/icp/22/output-15.png" alt="output-15" width="600px"/>
