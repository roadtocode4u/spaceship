---
title: Whitespace and &nbsp;
description: "Whitespace and &nbsp;"
hide_table_of_contents: true
---

### Whitespace

Whitespace refers to empty space around the content of a web page. By default, HTML considers multiple spaces as a single space, and the browser ignores excess whitespace.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Basic Tags</title>
  </head>
  <body>
    Hello Students👋, Good Evening
  </body>
</html>
```

**Output :**

<img src="/icp/03/output-1.png" alt="output-1" width="600px"/>

### Manually Add Spaces in HTML Code

If you can Manually add empty spaces in your HTML code then you can use one Special Character **`&nbsp;`** . **`&nbsp;`** means Non-breaking Space. If you write 5 spaces in your code, the browser will remove them. To add empty spaces manually to your code, you can use the **`&nbsp;`** special character.

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
