---
title: Height, Width, Border, Radius in CSS
description: "Height, Width, Border, Radius in CSS"
hide_table_of_contents: true
---

# Height, Width, Border, Radius in CSS

### Height, Width For Image

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
    <style>
      .rtc-logo {
        height: 100px;
        width: 100px;
      }
    </style>
  </head>
  <body>
    <img src="https://github.com/roadtocode4u.png" class="rtc-logo" />
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-1.png" alt="output-1" width="600px"/>

### How to provide height and width to div tag ?

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
    <style>
      .rtc-logo {
        height: 100px;
        width: 100px;
      }

      .my-div {
        background-color: yellow;
        width: 600px;
        height: 300px;
      }
    </style>
  </head>
  <body>
    <img src="https://github.com/roadtocode4u.png" class="rtc-logo" />

    <div class="my-div">
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolores
        ipsam perferendis corporis eveniet suscipit fuga sint?
      </p>
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-2.png" alt="output-2" width="600px"/>

## Border

CSS Border have different Properties like border style, border color, border width, border radius.

There are four types of border

1. `solid` : ******\_\_\_\_******
2. `dotted` : .................
3. `dashed` : ----------
4. `double` : =======

**Syntax :**

```css
selector {
  border-style: solid;
  border-color: black;
  border-width: 5px;
}
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
    <style>
      .box {
        background-color: yellow;
        height: 200px;
        width: 300px;
        border-style: solid;
        border-color: tomato;
        border-width: 5px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-3.png" alt="output-3" width="600px"/>

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
    <style>
      .box {
        background-color: yellow;
        height: 200px;
        width: 300px;
        border-style: double;
        border-color: black;
        border-width: 10px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-4.png" alt="output-4" width="600px"/>

We Can also Provide Border properties like this `border: solid black 2px;`

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <style>
      .container {
        background-color: tomato;
        width: 400px;
        height: 100px;
        border: solid black 2px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>This is a container</h2>
      <br />
      This is a container description
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-5.png" alt="output-5" width="600px"/>

## Border Radius

Border Radius Property are used to provide radius of element coners.

We can Provide four value to this property.

Example:

`border-radius: 0px 50px 0px 50px ;`

First value applies to top-left corner, second value applies to top-right cornar, third value applies to bottom-right corner, and fourth value applies to bottom-left corner.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <style>
      .btn {
        width: 350px;
        height: 80px;
        background-color: tomato;
        color: white;
        font-size: 40px;
        border-radius: 50px;
      }
    </style>
  </head>
  <body>
    <button class="btn">Submit</button>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-6.png" alt="output-6" width="600px"/>

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <style>
      .btn {
        width: 300px;
        height: 80px;
        background-color: tomato;
        color: white;
        font-size: 40px;
        border-radius: 0px 50px 0px 50px;
      }
    </style>
  </head>
  <body>
    <button class="btn">Submit</button>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-7.png" alt="output-7" width="600px"/>

### Padding

Padding is used to create distance inside the elements.

**All side Padding**

```html
padding: 20px
```

**Padding at specific Location**

```html
padding: 20px 40px 60px 80px; | | | | top right bottom left
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <style>
      .box {
        background-color: yellow;
        width: 400px;
        border: 5px solid black;
        padding: 20px 40px 60px 80px;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur corrupti
      odio fugiat sunt quisquam, accusantium aspernatur deserunt laboriosam
      pariatur ex repudiandae minus accusamus, repellendus est itaque nostrum!
      Voluptatibus, illum soluta.
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-8.png" alt="output-8" width="600px"/>

### Margin

Margin is used to create Distance outside of the elements.

**All side Margin**

```html
margin: 20px
```

**Margin at specific Location**

```html
margin-left: 50px; margin-top: 50px; margin-right: 100px; margin-bottom: 100px'
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <style>
      .box {
        background-color: yellow;
        width: 400px;
        border: 5px solid black;
        padding: 20px 40px 60px 80px;
        margin-left: auto;
        margin-right: auto;
      }

      .new-box {
        width: 300px;
        background-color: tomato;
        border: 5px solid black;
        margin-top: 20px;
        margin-left: 20px;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </div>
    <div class="new-box">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-9.png" alt="output-9" width="600px"/>
