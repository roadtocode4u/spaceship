---
title: Box Shadow
description: Box Shadow
hide_table_of_contents: true
---

## Hexadecimal 

**Example :**

```html
<!DOCTYPE html>
<html >
<head>
    <title> Box Shadow  </title>
    <style>
        h1{
            color: #00ff00;
        }
    </style>
</head>
<body> 
   <h1>Hello World!</h1>
</body>
</html>
```
**Output :**

![Output](output-1.png) 

# Box-shadow and Card design

## Box Shadow 

The box-shadow adds shadow effects around an element's frame.

**Syntax:**

```css
box-shadow: 5px 5px 5px 2px #808080;


Explanation:

         h-shadow v-shadow  blur spread  color
             |       |      |      |       |
box-shadow: 5px    5px     5px    2px   #808080;
```

**Example :**

```html
<!DOCTYPE html>
<html >
<head>
    <title> Box Shadow  </title>
    <style>
        .box {
            height: 200px;
            width: 200px;
            background-color: tomato;
            box-shadow: 2px 5px 5px 2px #808080;
        }
    </style>
</head>
<body> 
   <div class="box">

   </div>
</body>
</html>
```
**⚙️ Output :**

![Output](output-2.png) 

**Example :**

```html
<!DOCTYPE html>
<html >
<head>
    <title> Box Shadow  </title>
    <style>
        .box {
            height: 200px;
            width: 200px;
            background-color: tomato;
            box-shadow: 0px 0px 10px 5px black;
        }
    </style>
</head>
<body> 
   <div class="box">

   </div>
</body>
</html>
```
**⚙️ Output :**

![Output](output-3.png) 

**Example :**

```html
<!DOCTYPE html>
<html >
<head>
    <title> Box Shadow  </title>
    <style>
        .box {
            height: 200px;
            width: 400px;
            background-color: tomato;
            border: 1px solid black;
            border-radius: 10px;
            box-shadow: 2px 2px 1px 1px black;
        }
    </style>
</head>
<body> 
   <div class="box">

   </div>
</body>
</html>
```
**⚙️ Output :**

![Output](output-4.png)

