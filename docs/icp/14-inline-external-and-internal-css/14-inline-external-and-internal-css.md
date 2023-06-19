---
title: Inline, Internal and External CSS
description: Inline, Internal and External CSS
hide_table_of_contents: true
---

# There are three ways to add CSS

1. `Inline CSS => single element`
2. `Document level / Internal CSS`
3. `External CSS`

### Inline CSS

Inline CSS are using the style attribute inside HTML elements. It is used to give CSS for individual HTML tags.

**Code :**

```css
 <button style=" background-color: black;color: white; border: none;
 border-radius: 5px;padding: 10px;"> Click Here to Learn HTML</button>
```

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Inline CSS</title>
  </head>
  <body>
    <button
      style=" background-color: black;color: white; border: none; 
    border-radius: 5px;padding: 10px;"
    >
      Click Here to Learn HTML
    </button>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-12.png" alt="output-12" width="600px"/>

### Document level

Document level CSS used `<style>` element in the `<head>` section.

**Code :**

```css
<head>
    <style>
      .btn {
            background-color: black;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px;
        }
    </style>
</head>
```

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document Level</title>
    <style>
      .btn {
        background-color: black;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here to Learn HTML</button>

    <button class="btn">Click Here to Learn CSS</button>
  </body>
</html>
```

**Output :**

<img src="/icp/14/output-13.png" alt="output-13" width="600px"/>

### External CSS

External CSS are using a `<link>` element to link to an external CSS file. We can provide external link to `<head>` section.

**External Link Example :**

```css
<link rel="stylesheet" href="style.css"/>
```

**Code :**

**File Name : game.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Games</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <button class="btn">Click Here to Play Basketball🏀</button>
    <button class="btn">Click Here to Play Cricket🏏</button>
  </body>
</html>
```

**File Name : study.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Study</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <button class="btn">Click Here to Learn HTML</button>
    <button class="btn">Click Here to Learn CSS</button>
  </body>
</html>
```

**File Name : style.css**

```css
.btn {
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
}
```

<b>game.html file output : </b> <br/>

<img src="/icp/14/output-14.png" alt="output-14" width="600px"/> <br/>

<b>study.html file output :</b> <br/>

<img src="/icp/14/output-15.png" alt="output-15" width="600px"/>
