---
title: Template String
description: "Template String"
hide_table_of_contents: true
---


### Template String 

Template strings is a way to create strings in JavaScript that allows for easy embedding of variables and expressions. They are enclosed by backticks (\`\`) and allow placeholders `${}` to insert variables or expressions directly into the string.

 **Basic Usage**

 Here's a basic example of using template strings:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <script>
      let age = 23;
      let name = "Suraj";
      console.log(`Age: ${age}, Name: ${name}`);
    </script>
  </body>
</html>
```

**Output**

> Age : 23 <br/>
> Name : Suraj

In the example above, the variables `age` and `name` are inserted into the string using `placeholders ${}`.

## Expressions

You can also include expressions inside placeholders:

```js
let a = 10;
let b = 5;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
```

**Output :**

The sum of 10 and 5 is 15.
