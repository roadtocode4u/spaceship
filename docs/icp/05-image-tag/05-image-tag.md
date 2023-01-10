---
title: Image Tag
description: "Image Tag"
hide_table_of_contents: true
---
# Image Tag

### Image Tag

The Image tag is used to add an image in an HTML page.

**Syntax:**

```html
<img />
```

**Attributes :**

Attributes are used to describe tag or to provide more info to tag.

1. **```src``` Attribute :**

```src``` Attribute are used to provide source or path of the image.


**Syntax:**

```html
<img src="url"/>
```

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Tags</title>
</head>
<body>
    <img src="https://media.istockphoto.com/id/1224064817/photo/laptop-computer-on-a-modern-wooden-business-desk-with-a-notepad-and-pen-in-unfocused.jpg?s=612x612&w=0&k=20&c=V9D-NQkP4t9uY9sGwn1qOVD4-_v63CBpw8YJuoNzQzM="/>
</body>
</html>
```

**Output :**

<img src="/icp/05/output-1.png" alt="output-1" width="600px"/>

2. **```height``` and ```width``` Attribute :**

The width attribute are used to give width of an image, in pixels.

The Height attribute are used to give Height of an image, in pixels.

**Syntax:**

```html
<img src="url" height="" width=""/>
```

**Example :**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Tags</title>
</head>
<body>
    <img src="https://media.istockphoto.com/id/1224064817/photo/laptop-computer-on-a-modern-wooden-business-desk-with-a-notepad-and-pen-in-unfocused.jpg?s=612x612&w=0&k=20&c=V9D-NQkP4t9uY9sGwn1qOVD4-_v63CBpw8YJuoNzQzM=" height="500px" width="250px" />
</body>
</html>
```
**Output :**

<img src="/icp/05/output-5.png" alt="output-5" width="600px"/>


When you give both height and width to the image then image might lose its aspect ratio. You can preserve the aspect ratio by specifying only width or only height.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Tags</title>
</head>
<body>
    <img src="https://media.istockphoto.com/id/1224064817/photo/laptop-computer-on-a-modern-wooden-business-desk-with-a-notepad-and-pen-in-unfocused.jpg?s=612x612&w=0&k=20&c=V9D-NQkP4t9uY9sGwn1qOVD4-_v63CBpw8YJuoNzQzM=" height="200px" />
</body>
</html>
```
**Output :**

<img src="/icp/05/output-2.png" alt="output-2" width="600px"/>



3. **```alt``` Attribute :**

```alt``` tag are used to provide alternative text of the image, if the image is cannot displayed for some reasons or we can provide wrong source of the image. 

**Example :**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Tags</title>
</head>
<body>
    <img src="https://media.istockphoto.com/id/1224064817/photo/laptop-computer-on-a-modern-wooden-business-desk-with-a-notepad-and-pen-in-unfocused.jpg?s=612x612&w=0&k=20&c=V9D-NQkP4t9uY9sGwn1qOVD4-_v63CBw8YJuoNzQzM=" height="200px" alt="Computer"/>
</body>
</html>
```
**Output :**

<img src="/icp/05/output-3.png" alt="output-3" width="600px"/>

**Local Image**

You can add a local image to your HTML page and then the first download or save the image in the same folder and then provide the source of the image. Ex: ```src= "imageName.png"```

**Example :**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Tags</title>
</head>
<body>
    <img src="html-logo.png" height="200px" alt="Computer"/>
</body>
</html>
```

**Output :**

<img src="/icp/05/output-4.png" alt="output-4" width="600px"/>