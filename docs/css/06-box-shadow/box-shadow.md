---
title: Box Shadow
description: Box Shadow
hide_table_of_contents: true
---

# 🌑 Box Shadow

## Box-Shadow

The `box-shadow` property adds shadow effects around an element.  
It helps create depth and improves the visual look of elements on a webpage.

---

## Syntax:

```

box-shadow: h-shadow v-shadow blur spread color;

```

### Example:

```

box-shadow: 5px 5px 5px 2px #808080;

```

---

## Meaning of Each Value

### h-shadow

- Horizontal shadow position.
- Positive value → Shadow moves right.
- Negative value → Shadow moves left.

---

### v-shadow

- Vertical shadow position.
- Positive value → Shadow moves down.
- Negative value → Shadow moves up.

---

### blur

- Controls how blurry the shadow is.
- Higher value = more blur.
- `0` means sharp shadow.

---

### spread

- Controls the size of the shadow.
- Positive value → Shadow becomes bigger.
- Negative value → Shadow becomes smaller.

---

### color

- Defines the color of the shadow.
- You can use color name, HEX, or RGB values.

---

# 🖼️ Image Shadow Example

## Code :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>img shadow</title>
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

---

## Output :

<img src="/css/07/screenshot4.png" alt="screenshot4" width="600px"/>

---

## Explanation

- The image height is set to `300px`.
- `border-radius: 50px;` gives rounded corners.
- `margin: 30px;` creates space outside the image.
- `box-shadow: 2px 2px 5px 10px rgb(138,136,136);` adds a shadow:

  - `2px` → moves shadow right
  - `2px` → moves shadow down
  - `5px` → blur radius
  - `10px` → spread size
  - `rgb(138,136,136)` → gray color

When you move the mouse over the image:

- The border radius changes from `50px` to `20px`.
- `transition: 2s;` makes the change smooth in 2 seconds.

---

# 🔘 Button Shadow Example

## Code :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Button shadow</title>
    <style>
      .btn {
        background-color: aquamarine;
        border-radius: 20px;
      }

      .btn:hover {
        box-shadow: 1px 1px 2px 2px gray;
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

---

## Output :

<img src="/css/07/screenshot2.png" alt="screenshot2" width="600px"/>

---

## Explanation

- The button background color is `aquamarine`.
- `border-radius: 20px;` makes the button corners rounded.

When you hover over the button:

- A gray shadow appears.
- `1px 1px` moves shadow slightly right and down.
- `2px` blur makes it slightly soft.
- `2px` spread increases shadow size slightly.

This creates a simple shadow effect when the user moves the mouse over the button.
