---
title: Table Tag
description: "Table Tag"
hide_table_of_contents: true
---

# Table Tag

The `<table>` tag is used to create & Represents HTML table.

**Table tag allow us to arrange data into rows and columns.**

### Table Row

The `<tr>` tag represents a **row** in a table. It should be placed within the `<table>` element.

### Table Cell

The` <td>` tag represents a **cell** in a table. It is used to define individual data cells within a row. Each `<td>` element should be placed within a `<tr>` element.

### Header Cell

The `<th>` tag is used to define **header cells** in a table. It represents the header row or column of the table. Typically, `<th>` elements are used within the `<thead>` section of the table.

**Syntax :**

Here's an example of the basic syntax for creating a table:

```html
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
```

**Code :**

Here's an example of HTML code that creates a simple table with two rows and three columns:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Table</title>
  </head>
  <body>
    <table border="1">
      <thead>
        <tr>
          <th>Sr. No</th>
          <th>Name</th>
          <th>Roll No</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Vinayk</td>
          <td>123</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Suyash</td>
          <td>124</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

**Output :**

<img src="/html/13/output-1.png" alt="output-1" width="600px"/>

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Table</title>
  </head>
  <body>
    <table border="1">
      <thead>
        <tr>
          <th>Sr. No</th>
          <th>Fist Name</th>
          <th>Last Name</th>
          <th>Roll No</th>
          <th>Mobile</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Vinayk</td>
          <td>Shelake</td>
          <td>123</td>
          <td>9898984</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Suyash</td>
          <td>Sagalgile</td>
          <td>124</td>
          <td>83742873</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

**Output :**

<img src="/html/13/output-2.png" alt="output-2" width="600px"/>

## Colspan

The `colspan` attribute is used to specify the number of columns a cell should span. It allows you to merge adjacent cells horizontally.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Table</title>
  </head>
  <body>
    <table border="1">
      <thead>
        <tr>
          <th>Sr. No</th>
          <th colspan="2">Fist Name</th>
          <th>Roll No</th>
          <th>Mobile</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Vinayk</td>
          <td>Shelake</td>
          <td>123</td>
          <td>9898984</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Suyash</td>
          <td>Sagalgile</td>
          <td>124</td>
          <td>83742873</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

**Output :**

<img src="/html/13/output-3.png" alt="output-3" width="600px"/>

### Rowspan

The `rowspan` attribute is used to specify the number of rows a cell should span. It allows you to merge adjacent cells vertically.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Table</title>
  </head>
  <body>
    <table border="1">
      <thead>
        <tr>
          <th>Sr. No</th>
          <th colspan="2">Fist Name</th>
          <th>Roll No</th>
          <th>Mobile</th>
          <th>Passing Year</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Vinayk</td>
          <td>Shelake</td>
          <td>123</td>
          <td>9898984</td>
          <td rowspan="3">2023</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Suyash</td>
          <td>Sagalgile</td>
          <td>124</td>
          <td>83742873</td>
        </tr>

        <tr>
          <td>3</td>
          <td>Sauabh</td>
          <td>Jaykar</td>
          <td>125</td>
          <td>88474873</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

**Output :**

<img src="/html/13/output-4.png" alt="output-4" width="600px"/>
