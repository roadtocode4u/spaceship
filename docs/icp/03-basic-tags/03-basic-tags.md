---
title: Basic Tags
description: "Basic Tags"
hide_table_of_contents: true
---

# Basic Tags

### Whitespace

Whitespace means empty space around the content of a page. You can Give Multiple spaces in your HTML code but By default, HTML is Considered only one single space. The browser ignores whitespace.

**Code :**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Basic Tags</title>
    </head>
    <body>
        Hello Students👋, Good          Evening
    </body>
</html>
```

**Output :**

<img src="/icp/03/output-1.png" alt="output-1" width="600px"/>


### Manually Add Spaces in HTML Code

If you can Manually add empty spaces in your HTML code then you can use one Special Character **```&nbsp;```** . **```&nbsp;```** means Non-breaking Space. If you write 5 spaces in your code, the browser will remove them. To add empty spaces manually to your code, you can use the **```&nbsp;```** special character. 
 
**Code :**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Basic Tags</title>
    </head>
    <body>
        Hello Students👋, Good &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Evening
    </body>
</html>
```
**Output :**

<img src="/icp/03/output-2.png" alt="output-2" width="600px"/>

### HTML **```<br>```** Tag

**```<br>```** : Break Row

This tag is used for break row. We don't need to close **```<br>```** because it is an empty tag. we can close **```<br/>```** like this.


 ### Based On Opening & Closing Tag There are 2 Type

1. **Empty Tag** 

Some HTML tags have no content like **```<br>```** tag these type of tags are called empty Tag.  Empty Tag do not need to close tag. 


2. **Container Tag** 

 A container tag is an HTML tag with both an opening and closing tag. For Example, **```<b></b>```** , **```<body></body>```**

### Bold Tag

In HTML **```<b>```** tag defines bold text.

**syntax :**

```html
<b>Bold Text</b>
```
**Code :**

```html
<!Doctype html>
<html>
    <head>
        <title>Basic Tags</title>
    </head>
    <body>
        Normal Text <br/>
        <b>Bold Text</b>
    </body>

</html>
```
**Output :**

<img src="/icp/03/output-4.png" alt="output-4" width="600px"/>


## Italic Tag

In HTML **```<i>```** tag defines Italic text.

**Syntax :**

```html
<i>Text</i>
```
**Code :**

```html
<!Doctype html>
<html>
    <head>
        <title>Basic Tags</title>
    </head>
    <body>
      Normal Text <br/>
      <i>Italic Text</i>
  </body>
</html>
```

**Output :**

<img src="/icp/03/output-5.png" alt="output-5" width="600px"/>

### Nested Tags

```html
<i><b>Sample Text</b></i>
OR
<b><i>Sample Text</i></b>
```

**Code :**

```html
<!Doctype html>
<html>
    <head>
        <title>Basic Tags</title>
    </head>
    <body>
      <i><b>Sample Text</b></i><br/>
      <b><i>Sample Text</i></b>
  </body>
</html>
```

**output :**

<img src="/icp/03/output-6.png" alt="output-6" width="600px"/>

## Underline Tag

In HTML **```<u>```** tag are used to underline a text.

**Syntax :**

```html
<u>Underline Text</u>
```
**Code :**

```html
<!Doctype html>
<html>
    <head>
        <title>Basic Tags</title>
    </head>
    <body>
      Normal Text <br/>
      <u>This is underline Text</u>
  </body>
</html>
```

**Output :**

<img src="/icp/03/output-7.png" alt="output-7" width="600px"/>


### Delete Tag

It is used to mark a portion of text which has been deleted from the document.

```html
<del>Delete Text</del>
```
**Code :**

```html
<!Doctype html>
<html>
    <head>
        <title>Basic Tags</title>
    </head>
    <body>
      <del>20,000</del> 900
  </body>
</html>
```
**Output :**

<img src="/icp/03/output-8.png" alt="output-8" width="600px"/>


### Superscript

Superscript is a number or letter that written above the normal text.

**Code :**

```html
10<sup>th</sup>
```
**💻Example :**
```html
<!Doctype html>
<html>
    <head>
        <title>Basic Tags</title>
    </head>
    <body>
      10th<br/>
      10<sup>th</sup><br/>
  </body>
</html>
```

**Output :**

<img src="/icp/03/output-9.png" alt="output-9" width="600px"/>
### Subscript

Subscript is a number or letter that written below the normal text.

```html
H<sub>2</sub>O
```

**Code :**

```html
<!Doctype html>
<html>
    <head>
        <title>Basic Tags</title>
    </head>
    <body>
      H20<br/>
      H<sub>2</sub>0
  </body>
</html>
```

**Output :**

<img src="/icp/03/output-10.png" alt="output-10" width="600px"/>


### ```<hr />``` Tag

```<hr />``` Tag is Horizontal Rule that is used to sepreate content.


**Code :**

```html
<!DOCTYPE html>
<html>
<head>
   <title>Tag</title>
</head>
<body>
   <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa, eveniet cum est quis atque possimus rerum officia perferendis quidem mollitia ab, nulla animi, praesentium excepturi dolore illo iusto suscipit.
   </p>

      <hr/>

   <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa, eveniet cum est quis atque possimus rerum officia perferendis quidem mollitia ab, nulla animi, praesentium excepturi dolore illo iusto suscipit.
   </p>
</body>
</html>
```
**Output :**

<img src="/icp/03/output-11.png" alt="output-11" width="600px"/>

### Span Tag 

```html
<span>

</span>
```

Span Tag is a text inline selector it is used to select a particular Text. Span tag does not have any own effect.


**Code :**

```html
<!DOCTYPE html>
<html>
<head>
   <title>Tag</title>
</head>
<body>
   <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa, eveniet cum est quis atque possimus rerum officia perferendis quidem mollitia ab, nulla animi, praesentium excepturi dolore illo iusto suscipit.
   </p>

   <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa, eveniet cum est quis atque possimus rerum officia perferendis quidem mollitia ab, nulla animi, <span>praesentium excepturi dolore illo iusto suscipit.</span>
   </p>
</body>
</html>
```

**Output :**

<img src="/icp/03/output-12.png" alt="output-12" width="600px"/>

