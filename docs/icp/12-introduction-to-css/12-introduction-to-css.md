---
title: Introduction To CSS
description: "Introduction To CSS "
hide_table_of_contents: true
---

# Introduction To CSS

### CSS

CSS stands for Cascading Style Sheets.
CSS are used to design your webpage.
CSS are used to describes how HTML elements are to be displayed on Desktop, laptop, Tablet screen or in other media.

## **We can implement css by three ways:**

1. Inline CSS :
2. Document CSS
3. External CSS

`Selector`: A CSS selector selects the HTML element you want to style. When we gives effect to html tag then we have to select html element.

## **There are three types of selectors:**

1.  Tagname
2.  Id
3.  Class

**Syntax :**

```

selector{
  color:"red";
}
```

`selector`: selector selects the HTML element.

`color`: color is a property.CSS property always written in smallcase.

`red`: red is value.

**You can add CSS in Html elements then use this style tag**

```html
<style></style>
```

## Code :

## Inline CSS

Inline CSS are using the style attribute inside HTML elements.It is used to give CSS for individual HTML tags.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
</head>
<body>
  <h2 style="color:red;font-size:20px">This is inline css</h2>
  </body>
  </html
```

**Output :**

<img src="/icp/12/Output-1.png" alt="output-1" width="600px"/>

## External CSS

External CSS are using a `<link>` element to link to an external CSS file. We can Provide external link to `<head>` Section.

### **External Link Example :**

```css
<link rel="stylesheet" href="style.css"/>
```

### **File Name : index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h2>WOW. CSS is beautiful</h2>
  </body>
</html>
```

### **File Name : style.css**

```html
h2 { color: tomato; background-color: 'aqumarine'; }
```

**Explanation :**

`h2` = Selector <br/>
`{` = Start <br/>
`color` = Property <br/>
`:` = Seperator <br/>
`tomato` = Declaration <br/>
`;` = End of value <br/>
`}` = End <br/>

**Output :**

<img src="/icp/12/Output-3.png" alt="Output-3" width="600px"/>

### Document CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document CSS</title>
    <style>
      h2 {
        color: tomato;
        background-color: grey;
      }
    </style>
  </head>
  <body>
    <h2>Document CSS</h2>
  </body>
</html>
```

**Output :**

<img src="/icp/12/Output-2.png" alt="Output-2" width="600px"/>

## Selectors in CSS

### 1. Tagname

Tagname selector select attribute by tag for example `h1`,`h2`,`p`...

```html
<h1>Hii</h1>

CSS of h1 tag 👉

<style>
  h1 {
    color: red;
  }
</style>
```

### 2. Classname

The `.class` selector selects elements with a specific class attribute.

```html
  <p class="highlight"> Hii </p>
  <h1 class="highlight"> Hii  </p>

   CSS of class 👉

   <style>
      .highlight{
          background-color : yellow
      }
  </style>
```

### 3. ID

Selects the element with `id` <br/>

```html
<h1 id="myheading">Hii</h1>

CSS of myheading id 👉

<style>
  #myheading {
    color: red;
  }
</style>
```
