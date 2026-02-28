---
title: Color Theory
description: Color Theory
hide_table_of_contents: true
---

## 🎨 Colors in CSS

Colors play an important role in web design. They improve appearance, readability, and user experience.

There are different ways to add CSS colors:

```html
1. Color name 2. Hexadecimal color 3. rgb 4. rgba 5. hsl
```

---

## 1️⃣ Color Name

CSS provides predefined color names that you can use directly.

### Example :

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

### Output :

<img src="/css/11/output1.png" alt="output-5" width="600px"/>

### Example Explanation :

In the above example:

- The button background color is set to **red**.
- The text color is set to **white**.

Color names are simple and easy to use.

---

## 2️⃣ Hexadecimal Colors

Hexadecimal colors start with a `#` symbol followed by six characters.

Each pair represents:

- Red (RR)
- Green (GG)
- Blue (BB)

Each value ranges from:

- `00` (minimum)
- `FF` (maximum)

### Example :

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

### Output :

<img src="/css/11/output1.png" alt="output-5" width="600px"/>

### Example Explanation :

- `#FF0000` represents red.
- `#FFFFFF` represents white.

Hex colors allow more precise color control.

---

## 3️⃣ RGB

RGB stands for:

Red, Green, Blue

Each value ranges from 0 to 255.

```js
rgb(red, green, blue);
```

```js
rgb(0, 0, 0) → Black
rgb(255, 0, 0) → Red
rgb(255, 255, 255) → White
```

### Example :

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

### Output :

<img src="/css/11/output1.png" alt="output-5" width="600px"/>

### Example Explanation :

- `rgb(255, 0, 0)` sets the background color to red.
- `rgb(255, 255, 255)` sets the text color to white.

RGB allows you to control color intensity using numbers.

---

## 4️⃣ RGBA

RGBA is similar to RGB but includes an extra value called **alpha**.

Alpha controls transparency.

```js
rgba(red, green, blue, alpha);
```

Alpha value range:

- `0` → Fully transparent
- `1` → Fully opaque

### Example :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: rgba(0, 0, 0, 0);
        color: black;
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

### Output :

<img src="/css/11/output2.png" alt="output-5" width="600px"/>

### Example Explanation :

- `rgba(0, 0, 0, 0)` means black color with 0 opacity.
- Since alpha is 0, the background becomes fully transparent (invisible).

RGBA is useful when you need transparency effects.

---

## 5️⃣ HSL

HSL stands for:

- Hue
- Saturation
- Lightness

```js
hsl(hue, saturation, lightness);
```

- Hue → 0 to 360 degrees (type of color)
- Saturation → 0% to 100% (color intensity)
- Lightness → 0% to 100% (brightness)

### Example :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: hsl(0, 100%, 50%);
        color: white;
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

### Output :

<img src="/css/11/output3.png" alt="output-5" width="600px"/>

### Example Explanation :

- Hue = 0 → Red
- Saturation = 100% → Full intensity
- Lightness = 50% → Normal brightness

This creates pure red color.

---

## 🎨 Color Picker Tools

You can use online tools to select colors easily.

- **Color Hunt**
  [https://colorhunt.co](https://colorhunt.co)

- **HTML Color Codes**
  [https://htmlcolorcodes.com/color-picker/](https://htmlcolorcodes.com/color-picker/)

These websites help you:

- Generate color palettes
- Pick matching colors
- Copy HEX, RGB, or HSL codes
- Design better UI interfaces
