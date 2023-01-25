---
title: Flexboxes
description: Flexboxes
hide_table_of_contents: true
---

# What is Flexbox?

Flexbox stands for flexible box. To align cards flexibly inside to container. Flexbox make it simple to align items vertically and horizontally using rows and columns. Flexbox makes it easier to design a flexible responsive layout of a webpage.
 
We can add multiple-child items in one parent container.

<img src="/icp/21/img-1.png" alt="img-1" width="400px"/>

We can use the flexbox property then your first step is to create one parent division and in the parent division we create multiple child divisions.

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
    </style>
</head>

<body>

    <div>

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-1.png" alt="output-1" width="600px"/>

Now, we implement flexbox. If you implement the flexbox property then give the effect of the parent division, not a child.

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
        .conatiner{
            display: flex;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-2.png" alt="output-2" width="600px"/>

In the above example we only give one class to parents division and add the effect on parent division ```display: flex``` then your parent division are made a flexbox.

This ```display: flex``` property defines a flex container. It enables a flex context for all it's children .


## flex-direction

Flex direction are used to define the direction of child item are placed in the flex container. 

There are four flex direction are available.

1. ```flex-direction: row;``` 

 By default direction is row. child items are are Left to Right direction.

 <img src="/icp/21/img-2.png" alt="img-2" width="400px"/>

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
        .conatiner{
            display: flex;
            flex-direction: row;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-2.png" alt="output-2" width="600px"/>

2. ```flex-direction: row-reverse;```

child item are Right to Left direction.

<img src="/icp/21/img-3.png" alt="img-3" width="400px"/>

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
        .conatiner{
            display: flex;
            flex-direction: row-reverse;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-3.png" alt="output-3" width="600px"/>

3. ```flex-direction: column;```

child items are Top to Bottom direction.

<img src="/icp/21/img-4.png" alt="img-4" height="200px" width="400px" />

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
        .conatiner{
            display: flex;
            flex-direction: column;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-4.png" alt="output-4" width="600px"/>

4. ```flex-direction: column-reverse;```

child items are Bottom  to Top direction.

<img src="/icp/21/img-5.png" alt="img-5" width="400px"/>

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
        .conatiner{
            display: flex;
            flex-direction: column-reverse;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-5.png" alt="output-5" width="600px"/>


## justify-content

Justify-content property defines the alignment of child item. 

If direction is row the justify content property apply horizontally & if direction are column then it's applying vertically

1. ```justify-content: start;```

It is a default value. child items are packed start of the flex-direction.

<img src="/icp/21/img-6.png" alt="img-6" width="400px" />

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
        .conatiner{
            background-color: aqua;
            display: flex;
            flex-direction: row;
            justify-content: start;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-6.png" alt="output-6" width="600px"/>

2. ```justify-content: end;```

child items are packed end of flex-direction.

<img src="/icp/21/img-7.png" alt="img-7" width="400px" />


**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
        .conatiner{
            background-color: aqua;
            display: flex;
            flex-direction: row;
            justify-content: end;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-7.png" alt="output-7" width="600px"/>

3. ```justify-content: center;```

Child items are center along the line.

<img src="/icp/21/img-8.png" alt="img-8" width="400px" />

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
         .conatiner{
            background-color: aqua;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-7.png" alt="output-7" width="600px"/>

4. ```justify-content: space-evenly;```

Child items are distributed so that the spacing between any two items is equal.

<img src="/icp/21/img-11.png" alt="img-11" width="400px" />

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
        .conatiner{
            background-color: aqua;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-9.png" alt="output-9" width="600px"/>

5. ```justify-content: space-around;```

Child items are evenly distributed within the alignment container.In the space-around, only the inner items will have equal spacing in between each other. The first and last item will only be allocated half the spacing.

<img src="/icp/21/img-10.png" alt="img-10" width="400px" />

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
         .conatiner{
            background-color: aqua;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-10.png" alt="output-10" width="600px"/>

6. ```justify-content: space-between;```

Child items are evenly distributed in the line.It does not provide space in side but it provide equal space between all items. 

<img src="/icp/21/img-9.png" alt="img-9" width="400px" />

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
        .conatiner{
            background-color: aqua;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-11.png" alt="output-11" width="600px"/>


## align-items

> When the **flex-direction** is a **row** then **justify-content** control **horizontally**. This means the X axis but you can control the opposite axis Which means the Y axis then you use the property align-items. Align items are used to control items on the opposite axis.

1. ```align-items: flex-start```;

Items are placed at the start of the Opposite ( Y axis ) axis.

<img src="/icp/21/img-12.png" alt="img-12" width="400px" />

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
        .conatiner{
            background-color: aqua;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 500px;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-14.png" alt="output-14" width="600px"/>

2. ```align-item: flex-end```;

Items are placed at the end of the Opposite ( Y axis ) axis.

<img src="/icp/21/img-14.png" alt="img-14" width="400px" />

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
        .conatiner{
            background-color: aqua;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 500px;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-13.png" alt="output-13" width="600px"/>

3. ```align-item: center```;

Items are centered in the Opposite axis.

<img src="/icp/21/img-13.png" alt="img-13" width="400px" />

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Flex Box </title>
    <style>
        .item {
            background-color: tomato;
            height: 100px;
            width: 100px;
            margin: 10px;
            font-size: 50px;
            padding: 10px;
        }
        .conatiner{
            background-color: aqua;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 500px;
        }
    </style>
</head>

<body>

    <div class="conatiner">

        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>

    </div>

</body>
</html>
```

**Output :**

<img src="/icp/21/output-12.png" alt="output-12" width="600px"/>



> When the **flex-direction** is a **column** then **justify-content** control **vertically**. This means the Y axis but you can control the item's opposite axis Which means the X axis then you use the property align-item.

<img src="/icp/21/img-15.png" alt="img-15" width="400px" />

<img src="/icp/21/img-16.png" alt="img-16" width="400px" />

<img src="/icp/21/img-17.png" alt="img-17" width="400px" />