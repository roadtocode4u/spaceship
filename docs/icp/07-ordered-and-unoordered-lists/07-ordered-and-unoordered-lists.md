---
title: Unordered List & Ordered List
description: "Unordered List & Ordered List"
hide_table_of_contents: true
---

# Unordered List & Ordered List

### Unordered List

An unordered list is used to create a list of related items that have no specific order or sequence. It is represented by the `<ul>` tag in HTML.

**Syntax :**

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Unorder List</title>
  </head>
  <body>
    <h1>Features of RTC</h1>

    <ul>
      <li>Live + Recorded Classes</li>
      <li>Teaching Assistance for Doubt Solving</li>
      <li>Notes for Quick Revision</li>
      <li>Low Fees</li>
    </ul>
  </body>
</html>
```

**Output :**

<img src="/icp/07/output-1.png" alt="output-1" width="600px"/>

### Types of Unordered Lists

There are three types of unordered lists that you can use by specifying the type attribute within the `<ul>` tag.

* `type="disc"` (default): The list items are marked with small black circles.
* `type="circle"`: The list items are marked with circles.
* `type="square"`: The list items are marked with squares.

**Syntax :**

```html
<ul type="circle">
  <li>list1</li>
  <li>list2</li>
  <li>list3</li>
</ul>
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Unorder List</title>
  </head>
  <body>
    <h1>Features of RTC</h1>

    <ul type="circle">
      <li>Live + Recorded Classes</li>
      <li>Teaching Assistance for Doubt Solving</li>
      <li>Notes for Quick Revision</li>
      <li>Low Fees</li>
    </ul>
  </body>
</html>
```

**Output :**

<img src="/icp/07/output-2.png" alt="output-2" width="600px"/>

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Unorder List</title>
  </head>
  <body>
    <h1>Features of RTC</h1>

    <ul type="square">
      <li>Live + Recorded Classes</li>
      <li>Teaching Assistance for Doubt Solving</li>
      <li>Notes for Quick Revision</li>
      <li>Low Fees</li>
    </ul>
  </body>
</html>
```

**Output :**

<img src="/icp/07/output-3.png" alt="output-3" width="600px"/>

### Ordered List

An ordered list is used to create a list of related items that have a specific order or sequence. It is represented by the `<ol>` tag in HTML.

Example :

1. 1, 2, 3, 4,....,
2. a, b, c, d,....,
3. A, B, C, D,....,
4. I, II, III, IV,....,
5. i, ii, iii, iv,.....

**Syntax :**

```html
<ol>
  <li>list Item 1</li>
  <li>list Item 2</li>
  <li>list Item 3</li>
</ol>
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ordered List</title>
  </head>
  <body>
    <h1>Syllabus of RTC</h1>

    <ol>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Git & Github</li>
    </ol>
  </body>
</html>
```

**Output :**

<img src="/icp/07/output-4.png" alt="output-4" width="600px"/>

### Types of Ordered Lists

There are different types of ordered lists that you can specify using the type attribute within the `<ol>` tag.

* `type="1"` (default): The list items are numbered with Arabic numerals (1, 2, 3, etc.).

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ordered List</title>
  </head>
  <body>
    <h1>Syllabus of RTC</h1>

    <ol type="1">
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Git & Github</li>
    </ol>
  </body>
</html>
```

**Output :**

<img src="/icp/07/output-4.png" alt="output-4" width="600px"/>

* `type="A"`: The list items are numbered with uppercase letters (A, B, C, etc.).

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ordered List</title>
  </head>
  <body>
    <h1>Syllabus of RTC</h1>

    <ol type="A">
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Git & Github</li>
    </ol>
  </body>
</html>
```

**Output :**

<img src="/icp/07/output-5.png" alt="output-5" width="600px"/>

* `type="a"`: The list items are numbered with lowercase letters (a, b, c, etc.).

* `type="I"`: The list items are numbered with uppercase Roman numerals (I, II, III, etc.).

* `type="i"`: The list items are numbered with lowercase Roman numerals (i, ii, iii, etc.).

## Starting the List at a Specific Point

You can start the ordered list at a specific point using the `start` attribute within the `<ol>` tag. This attribute specifies the value at which the list should start.

**Syntax :**

```html
<ol start="3">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ordered List</title>
  </head>
  <body>
    <h1>Pending Syllabus</h1>

    <ol type="A" start="2">
      <li>CSS3</li>
      <li>Git & Github</li>
      <li>Bootstrap</li>
    </ol>
  </body>
</html>
```

**Output :**

<img src="/icp/07/output-6.png" alt="output-6" width="600px"/>
