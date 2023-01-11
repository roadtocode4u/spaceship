---
title: Selectors in CSS  
description: "Selectors in CSS"
hide_table_of_contents: true
---
# Selectors in CSS 

A CSS selector selects the HTML element you want to style.

Three Types of selectors

1. Tag name
2. Class
3. ID

### Tagname
 Tagname selector select attribute by tag for example ```<h1>```,```<h2>```,```<p>```...
    
  ```html
     <h1> Hii </h1>

     CSS of h1 tag 👉
     
     <style>
     h1{
         color : red
     }
     </style>
 ```

### Classname

The ```.class``` selector selects elements with a specific class attribute.
    
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

### ID

   Selects the element with id <br/>

  Example:  ```id="firstname"```

```html
     <h1 id="myheading"> Hii </h1>

     CSS of myheading id 👉
     
     <style>
     #myheading{
         color : red
     }
     </style>

```

**Code :**

```html
<!DOCTYPE html>
<html >
<head>
    <title> CSS  </title>
    <style>
      p{
        color: white;
        font-size: 30px;
        background-color: black;
      }
      
      #description{
        color: red;
        font-size: 30px;
        background-color: black;
      }
    </style>
</head>
<body> 
    <p id="description">We are learning CSS. </p>
    <p>We are very excited..</p>
</body>
</html>
```
**Output :**

<img src="/icp/13/output-3.png" alt="output-3" width="600px"/>

### Priority in CSS Selectors
When we can provide same effect (like id, class, tag) on particular element then the selector priority as given below. 
In the CSS selector priority of a selector is  High priority for ID, middle priority for class, & low priority for tag.

**Code :**

```html
<!DOCTYPE html>
<html >
<head>
    <title> CSS  </title>
    <style>
     h1{
      color: tomato;
     }

     #xyz{
      color: green;
     }

     .abc{
      color: blue;
     }

    </style>
</head>
<body> 
   <h1 class="abc" id="xyz">
    This is heading
   </h1>
</body>
</html>
```
**Output :**

<img src="/icp/13/output-4.png" alt="output-4" width="600px"/>

