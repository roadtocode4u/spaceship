---
title: Introduction To CSS  
description: "Introduction To CSS "
hide_table_of_contents: true
---
# Introduction To CSS 

## ```CSS``` means Cascading Style Sheets

CSS are Used to Design Your Webpage.
CSS are used to describes how HTML elements are to be displayed on Desktop, laptop, Tablet,screen or in other media.

You can Add CSS in Html elements then use this style tag. 👇

```html
 <style>

 </style>
```

**Code :**

```html
<!DOCTYPE html>
<html >
<head>
    <title> CSS  </title>
    <style>
        h2{
            color : tomato;
        }
    </style>
</head>
<body> 
    <h2> WOW. CSS is beautiful </h2>
</body>
</html>
```
**Explanation :**

```css
      h1{
         color : tomato;
      }
```

```h1```  = Selector <br/>
```{``` = Start <br/>
```color``` = Property <br/>
```:``` =  Seperator <br/>
```blue``` = Declaration <br/>
```;``` = End of value <br/>
```}``` = End <br/>

**Output :**

<img src="/icp/12/output-1.png" alt="output-1" width="600px"/>

### Background-color & font-size

```css
 background-color: tomato;
 font-size: 50px;
```

**Code :**

```html
<!DOCTYPE html>
<html >
<head>
    <title> CSS  </title>
    <style>
        h2{
            color : blue;
            background-color: tomato;
            font-size: 50px;
        }

        p{
            background-color: yellow;
        }
    </style>
</head>
<body> 
    <h2> WOW. CSS is beautiful </h2>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at dignissimos commodi sequi alias dolores. Dolorem recusandae alias blanditiis eaque eos maxime voluptatibus qui repellendus, ratione ut, repellat, maiores natus.</p>
</body>
</html>
```
**Output :**

<img src="/icp/12/output-2.png" alt="output-2" width="600px"/>

