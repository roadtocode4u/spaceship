---
title: Inline,Block and Inline-Block Elements
description: Inline,Block and Inline-Block Elements
hide_table_of_contents: true
---

### Display Properties:

The `display` property in CSS is used to control the layout and behavior of elements. There are three commonly used display properties: `inline`, `block`, and `inline-block`. Let's explore each of these display properties in detail.

## Inline Elements

Inline elements have the following characteristics:

1. They do not start from a new line i.e. they starts from the same line.
2. The `height` and `width` properties cannot be applied to inline elements.
3. Inline elements only occupy the space required for their content.

Some examples of inline elements include `<span>`, `<a>`, `<b>`, `<i>`, `<sub>`, `<sup>`, and `<label>`.

**`<button>` & `<img>`** button and image starts from same line it can not start from new line.
They takes only required space, but we can set `height` and `width` to them.
That's the reason **button and image are not an inline-element**.

**Example :**

In the given example, the `<span>` elements with the class name `rtc` are inline elements. They are displayed on the same line and only take up the necessary space for their content. Since the `height` and `width` properties are applied to the .`rtc` class, the background color is visible, but it doesn't affect the layout.

**Code:**

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>inline-element</title>
    <style>
      .rtc {
        background-color: aquamarine;
        height: 100px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <span class="rtc">RTC</span>
    <span class="rtc">ICP</span>
    <span class="rtc">Offline Classroom program</span>
  </body>
</html>
```

**Output:**

<img src="/css/08/output-1.png" alt="output-1" width="500px"/>

**Example :**

In the given example, the `img` have the class names `google` and `instagram` but there is no attribute given to it. They are displayed on the same line and only take up the necessary space for their content as no height and width applied is to it.

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Inline-Block</title>
  </head>
  <body>
    <img src="google.svg.png" class="google" />
    <img src="instagram.png" class="instagram" />
  </body>
</html>
```

**Output**

<img src="/css/08/output-2.png" alt="output-2" width="500px"/>

Here, we applied the height and width attribute to both the images and it effects on the size of the images so the **image tag is not an inline-element**.

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Inline-Block</title>
    <style>
      .google {
        height: 100px;
        width: 200px;
      }
      .instagram {
        height: 200px;
        width: 100px;
      }
    </style>
  </head>
  <body>
    <img src="google.svg.png" class="google" />
    <img src="instagram.png" class="instagram" />
  </body>
</html>
```

**Output**

<img src="/css/08/output-2.1.png" alt="output-2" width="500px"/>

## Block Elements

Block elements exhibit the following characteristics:

1. They always start from a new line.
2. Block elements occupy the full available horizontal space.
3. The `height` and `width` properties can be assigned to block elements.

Here are some of the block elements:
`<div>`, `<p>`, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<ul>`, `<ol>` and `<li>`.

**Example :**

In the given example, the `<div>` elements with the classes `container` and `box` are block elements. They start from new lines, occupy the full width available within their parent container, and the `height` and `width` properties affect their layout.

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
<head>
    <title>block element</title>
    <style>
.container{
    background-color: yellow;
    width: 500px;
    height: 100px;
}
.box{
   background-color: red;
   width: 200px;
   height: 100px;
}
body{
    margin: 0;
}
    </style>
</head>
<body>
    <div class="container">
        Hi, I am learning css from road to code.
    </p>
    <div class="box">
      Hello, I am a web developer.
    </div>
</body>
</html>
```

**Output :**

<img src="/css/08/output-3.png" alt="output-3" width="500px"/>

## Inline-Block Elements

Elements with the `display` property set to `inline-block` exhibit the **combined behavior of inline and block** elements. They possess the following characteristics:

1. Inline-block elements do not start from a new line i.e. they starts from the same line.
2. The height and width properties can be assigned to inline-block elements.
3. Inline-block elements occupy the required space based on their content.

Some inline-block elements are `<button>`, `<input>` and `<img>`.

In the given example, the `<div>` elements with the classes `a` and `b` have the display property set to `inline-block`. They are displayed on the same line, can have specific `height` and `width` values assigned, and only occupy the necessary space required by their content.

**Example :**

**Code**

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <style>
    .a {
      background-color: red;
    }

    .b {
      background-color: aquamarine;
    }

    .c {
      background-color: brown;
      color: white;
    }

    .card {
      height: 80px;
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      display: inline-block;
      width: 150px;
    }
  </style>

  <body>
    <div class="a card">This is a card</div>
    <div class="b card">This is b card</div>
    <div class="c card">This is c card</div>
  </body>
</html>
```

**Output :**

<img src="/css/08/output-4.png" alt="output-4" width="500px"/>

## Change Display Property of Elements

We can change the display property of elements using CSS to alter their behavior. For instance, we can change the display property of a `<span>`element to `block` using CSS as shown in the following code:

**`Syntax`**

```css
span {
  display: block;
}
```

In the example below, the `<span>` elements with the class `info` have the display property set to block. As a result, they are displayed as `block` elements, starting from a new line, and the `height` property can be assigned to them.

**Example :**

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <style>
      .info {
        background-color: aquamarine;
        margin: 5px;
        display: block;
        height: 100px;
      }
    </style>
  </head>
  <body>
    <span class="info"> This is span tag. </span>

    <span class="info"> This is second span tag. </span>
  </body>
</html>
```

**Output :**

<img src="/css/08/output-5.png" alt="output-5" width="500px"/>

Similarly, we can change the display property of a `<div>` element to `inline-block` using CSS:

```css
div {
  display: inline-block;
}
```

**Example :**

**Code**

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>diplay</title>
    <style>
      .a {
        background-color: tomato;
        margin: 5px;
        height: 100px;
        width: 200px;
        display: inline-block;
        border: 3px solid black;
      }
      .b {
        background-color: aquamarine;
        margin: 5px;
        height: 100px;
        width: 200px;
        display: inline-block;
        border: 3px solid black;
      }
    </style>
  </head>

  <body>
    <div class="a">This is card A.</div>
    <div class="b">This is card B.</div>
  </body>
</html>
```

**Output :**

<img src="/css/08/output-6.png" alt="output-6" width="500px"/>

In the same way we can change the display property of `<div>` element to `inline` using CSS.

**Code :**

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>diplay</title>
    <style>
      .a {
        background-color: tomato;
        margin: 5px;
        height: 100px;
        width: 200px;
        display: inline;
        border: 3px solid black;
      }
      .b {
        background-color: aquamarine;
        margin: 5px;
        height: 100px;
        width: 200px;
        display: inline;
        border: 3px solid black;
      }
    </style>
  </head>

  <body>
    <div class="a">This is card A.</div>
    <div class="b">This is card B.</div>
  </body>
</html>
```

**\*Output :**

<img src="/css/08/output-7.png" alt="output-7" width="500px"/>

##

:::tip
We can change the display property of any element to any other display property. As per the need you should change the display property of the elements.
:::

#### Difference between Inline,Block and Inline-block

| Inline                            | Block                            | Inline-Block                    |
| --------------------------------- | -------------------------------- | ------------------------------- |
| Does not Start from new line      | Start from new line              | Start from same line            |
| Take required space               | Take complete space horizontally | Take required space             |
| We can't provide height and width | We can provide height and width  | We can provide height and width |
