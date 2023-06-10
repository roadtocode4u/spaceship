---
title: Inline,Block and Inline-Block Elements
description: Inline,Block and Inline-Block Elements
hide_table_of_contents: true
---

### Display Properties:


Display property is used to control the layout. There are three display properties. In this guide we will learn about the following display properties :

1. `Inline`
2. `Block`
3. `Inline-Block`

The `display` property in CSS is used to control the layout and behavior of elements. There are three commonly used display properties: `inline`, `block`, and `inline-block`. Let's explore each of these display properties in detail.


## Inline Elements

Inline elements have the following characteristics:

1. They do not start from a new line.
2. The `height` and `width` properties cannot be applied to inline elements.
3. Inline elements only occupy the space required for their content.

Some examples of inline elements include `<span>`, `<a>`, `<img>`, `<sub>`, `<sup>`, and `<label>`.

**`<button>`** button starts from same line it can not start from new line.
button takes only required space. but we can set `height` and `width` to button.
That's the reason button is **not inline-element**.

1. Inline elements does not start from new line.
2. We cannot set `height` and `width` property to inline elements.
3. Inline elements takes only space required for the content.

In the given example, the `<span>` elements with the class name `rtc` are inline elements. They are displayed on the same line and only take up the necessary space for their content. Since the `height` and `width` properties are applied to the .`rtc` class, the background color is visible, but it doesn't affect the layout.


**Example :**

**`<button>`** button starts from same line it can not start from new line.
button takes only required space. but we can set `height` and `width` to button.
That's the reason button is **not inline-element**.

**Example :**

**Code:**

```html
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

<img src="/icp/19/step-1.png" alt="step-1" width="500px"/>


**Explanation :**

In these above example
`RTC` , `ICP` & `Offline Classroom program`

1.  these elements can not start from new line.
2.  They contains only required space.
3.  Height and width property cannot applied.
    So That's the reason `span` is inline-element.

    **Example :**

=======

**Example :**


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Inline-block</title>
    <style>
      .girl {
        border-radius: 20px;
        border: 4px solid black;
        height: 100px;
        width: 100px;
      }
      .tiger {
        height: 100px;
        width: 100px;
        border: 4px solid rgb(102, 251, 97);
      }
    </style>
  </head>
  <body>
    <img src="girl.png" class="girl" />

    <img src="tiger.png" class="tiger" />
  </body>
</html>
```

**Output**

<img src="/icp/19/step-4.png" alt="step-4" width="600px"/>

## Block Elements

Block elements exhibit the following characteristics:


1. Block elements always start from new line.
2. These elements takes complete space in horizontal direction.
3. Height and width can be assign to block elements.
=======
1. They always start from a new line.
2. Block elements occupy the full available horizontal space.
3. The `height` and `width` properties can be assigned to block elements.


Here are some of the block elements:
`<div>`, `<p>`, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<ul>`, `<ol>`, `<li>`,

n the given example, the `<div>` elements with the classes `container` and `box` are block elements. They start from new lines, occupy the full width available within their parent container, and the `height` and `width` properties affect their layout.

**Example :**

```html
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

<img src="/icp/19/step-3.png" alt="step-2" width="600px"/>


**Explanation :**
In the above example

1. we can see that both division are starting from `new line`.
2. They are occupying complete space in `horizontal` direction.
3. And also `height` and `width` propety can be assigned.

These are the `block` element. because it follow the all property of block elements.

## Inline-Block Elements

Elements having display property `inline-block`. That follows the property of both `inline` and `block` elements. It follows the following properties:

1. Inline-block elements does not starts from new line.
2. We can provide height and width to the inline-block elements.
3. Inline-block elements take a space required by the content.

Some inline-block elements are `<button>`, `<input>`

Now we will make display property of division to `inline-block`` and lets create three simple cards that are displayed in the same line.

## Inline-Block Elements

Elements with the `display` property set to `inline-block` exhibit the combined behavior of inline and block elements. They possess the following characteristics:

1. Inline-block elements do not start from a new line.
2. The height and width properties can be assigned to inline-block elements.
3. Inline-block elements occupy the required space based on their content.

Some inline-block elements are `<button>`, `<input>`

In the given example, the `<div>` elements with the classes `a` and `b` have the display property set to `inline-block`. They are displayed on the same line, can have specific `height` and `width` values assigned, and only occupy the necessary space required by their content.


**Example :**

**Code**

```html
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

<img src="/icp/19/step-8.png" alt="step-8" width="600px"/>


**Explanation :**
In the above example we can see that

1. Elements can not start from new line , they are start from same line.
2. The elements takes only required space.
3. And height and width can be applied.

These are the `Inline-block` element.

## Change Display Property of Elements

We can change the display property of the elements using CSS. For example, we can change the display property of `<span>` element to `block` using CSS.

**`Syntax`**

```css
span {
  display: block;
}
```

**Example :**



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


```html
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
<img src="/icp/19/step-5.png" alt="step-5" width="600px"/>

In the same way we can change the display property of `<div>` element to `inline-block` using CSS.

Similarly, we can change the display property of a `<div>` element to `inline-block` using CSS:


```css
div {
  display: inline-block;
}
```

**Example :**

**Code**

```html
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
<img src="/icp/19/step-6.png" alt="step-6" width="600px"/>

In the same way we can change the display property of `<div>` element to `inline` using CSS.

**Code :**

```html
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
<img src="/icp/19/step-7.png" alt="step-7" width="600px"/>

:::tip
We can change the display property of any element to any other display property. As per the need you should change the display property of the elements.
:::

#### Difference between Inline,Block and Inline-block

| Inline                            | Block                            | Inline-Block                    |
| --------------------------------- | -------------------------------- | ------------------------------- |
| Does notStart from new line       | Start from new line              | Start from same line            |
| Take required space               | Take complete space horizontally | Take required space             |
| We can't provide height and width | We can provide height and width  | We can provide height and width |
