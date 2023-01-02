---
title: Table Tag 
description: "Table Tag"
hide_table_of_contents: true
---
# Table Tag

The ```<table>``` tag is used to create & Represents HTML table.

Table tag allow us to arrange data into rows and columns.

 ### Table Row

```<tr>```	Represents a row in a table

### Table Cell

```<td>```  Represents a cell in a table

### Header Cell 

```<th>``` Defines a header cell in a table

**Syntax :**

```html
 <table>
    <tr>
        <td> </td>
        <td> </td>
        <td> </td>
    </tr>
</table>
```

**💻Example :**

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

![output](output-1.png)


**💻Example :**

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
**⚙️ Output :**

![Output](output-2.png) 

## Colspan 

Colspan attribute we use for represents the number of columns in cell span.

**💻Example :**

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
**⚙️ Output :**

![Output](output-3.png)

### Rowspan 

Rowspan attribute we use for represents the number of rows in cell span.

**💻Example :**

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
**⚙️ Output :**

![Output](output-4.png)