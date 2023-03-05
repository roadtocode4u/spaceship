---
title: Switch Case
description: "Switch Case"
hide_table_of_contents: true
---

## Switch Case

The switch statement provides a convenient way to execute different blocks of code depending on the value of a variable or expression.

**Syntax:**

```js
switch (expression) {
  case value1:
    // Code to be executed if expression matches value1
    break;
  case value2:
    // Code to be executed if expression matches value2
    break;
  case value3:
    // Code to be executed if expression matches value3
    break;
  default:
    // Code to be executed if expression doesn't match any of the values
    break;
}
```

**Code:**

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
     const num = 3

    switch (num) {
  case 1:
    document.write("one");
    break;

  case 2:
    document.write("two");
    break;

  case 3:
    document.write("three");
    break;

    case 4:
    document.write("four");
    break;

    case 5:
    document.write("five");
    break;

  default:
    document.write("wrong input");
    break;
}
    </script>
  </head>
  <body></body>
</html>
```

In the above code we uses a switch statement to evaluate the value of the variable `num`. The switch statement checks if `num` is equal to different cases and executes the code block associated with the first matching case.

In this case, since `num` is assigned the value of `3`, the code block associated with the case `3` label is executed, which will write the string `three` to the document.

If `num` had a different value, the default case would be executed, which would write the string `wrong input` to the document.

Overall, this code is a simple example of using a switch statement in JavaScript to evaluate the value of a variable and execute different code blocks based on the value.