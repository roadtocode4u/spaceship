---
title: Ternary Operator
description: "Ternary Operator"
hide_table_of_contents: true
---

### Ternary Operator
>The `ternary operator`, also known as the `conditional operator`, It's easy way to write simple `conditional expressions`. It provides a concise way to evaluate a condition and return one of two values based on whether the condition is `true` or `false`.

#### The syntax of the ternary operator:

**Syntax :**

```js
(condition) ? expressionIfTrue : expressionIfFalse
```

#### How it works:
1. The `condition` is evaluated.
2. If the `condition` is true, the value of `expressionIfTrue` is returned.
3. If the `condition` is false, the value of `expressionIfFalse` is returned.

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <script>
     let num = 10;
     num%2 == 0 ? console.log('Even'):console.log('Odd');
    </script>
  </body>
</html>
```

**Output**
> Even

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <script>
     let num = 7;
     num%2 == 0 ? console.log('Even'):console.log('Odd');
    </script>
  </body>
</html>
```
**Output**
> Odd


