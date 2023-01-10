---
title: Inline and Block Properties
description: Inline and Block Properties
hide_table_of_contents: true
---
# Inline and Block Properties

## Display

Display is used to To Control the Layout.

**Display 3 Properties**

1. Block
2. Inline
3. inline-block


## Inline Elements

Properties of inline elements

1. Does not Start from new line.
2. Occupies space required for content only.
3. We can not specify height and width. (only we can give height and width for image in inline element.)

```html
1. <span>
2.  <a>
3. <img>
```

**Example :**
```html
<!DOCTYPE html>
<html >
<head>
    <title> Inline </title>
    <style>
        .span-a{
            background-color: aqua;
        }
        .span-b{
            background-color: tomato;
        }
    </style>
</head>
<body> 
   <span class="span-a">First Span</span>

   <span class="span-b">Second Span</span>
</body>
</html>
```
**⚙️ Output :**

![Output](output-1.png)


**Example :**

```html
<!DOCTYPE html>
<html >
<head>
    <title> Inline </title>
    <style>
        .span-a{
            background-color: aqua;
            height: 100px;
            width: 200px;
        }
        .span-b{
            background-color: tomato;
            height: 100px;
            width: 200px;
        }
    </style>
</head>
<body> 
   <span class="span-a">First Span</span>

   <span class="span-b">Second Span</span>
</body>
</html>
```
**⚙️ Output :**

![Output](output-2.png)


# Block elements

Properties of block elements

1. Start From new line.
2. These elements try to occupy complete space horizontaly.
3. We can specify height and width.

```html
1. <div>
2. <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
3. <p>
4. <form>
```

**💻Example :**
```html
<!DOCTYPE html>
<html>

<head>
    <title> Inline </title>
    <style>
        .div-a {
            background-color: aqua;
        }

        .div-b {
            background-color: tomato;
        }
    </style>
</head>

<body>
    <div class="div-a">
        This is First Division
    </div>
    <div class="div-b">
        This is Second Division
    </div>
</body>

</html>
```
**⚙️ Output :**

![Output](output-3.png)

**💻Example :**
```html
<!DOCTYPE html>
<html>

<head>
    <title> Inline </title>
    <style>
        .div-a {
            background-color: aqua;
            height: 50px;
        }

        .div-b {
            background-color: tomato;
            width: 100px;
        }
    </style>
</head>

<body>
    <div class="div-a">
        This is First Division
    </div>
    <div class="div-b">
        This is Second Division
    </div>
</body>

</html>
```
**⚙️ Output :**

![Output](output-4.png)

```html
<!DOCTYPE html>
<html>

<head>
    <title> Inline </title>
    <style>
        .box {
            background-color: aqua;
            margin-top: 10px;
            height: 30px;
            width: 200px;
        }
    </style>
</head>

<body>
    <div class="box">
        This is Division
    </div>
    <div class="box">
        This is Division
    </div>
</body>

</html>
```

**⚙️ Output :**

![Output](output-5.png)

## Inline-Block Property

1. You can give Height + width.
2. Start with same line.
3. It will occupy required space.

**💻Example :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Inline </title>
    <style>
        .card {
            background-color: tomato;
            border: 1px solid black;
            margin: 10px;
            padding: 5px;
            display: inline-block;
            width: 200px;
            height: 250px;
            border-radius: 10px;
            box-shadow: 3px 3px 1px 2px gray;
        }

        .card:hover{
            box-shadow: 3px 3px 1px 2px black;
        }

        .card-heading{
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="card">
        <h1 class="card-heading">HTMl</h1>
    </div>
    <div class="card">
       <h1 class="card-heading">CSS</h1>
    </div>
</body>

</html>
```
**⚙️ Output :**

![Output](output-6.png)






