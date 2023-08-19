---
title: Switch Case
description: "Switch Case"
hide_table_of_contents: true
---

## Switch Case

The switch statement in JavaScript provides a way to perform different actions based on different conditions. It evaluates an expression or variable and then matches its value to various cases. When a case matches, the corresponding code block is executed. This is especially useful when you have multiple conditions to check against a single value.

**Syntax :**

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

**Basic Switch Case :**

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
  </head>
  <body>
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
  </body>
</html>
```

**Output :**

> three

**Explanation:** 

In this example, the `num` variable is set to `3`. The switch statement checks if `num` matches any of the cases. Since `num` equals `3`, the code block under case `3` is executed, which prints `three` to the console.

**Fall-Through Behavior :**

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
  </head>
  <body>
  <script>
     const option = 1;

     switch(option){
        case 1:
            console.log("Option 1");

        case 2:
            console.log("Option 2");
        break;

        case 3:
            console.log("Option 3");
        break;
     }
  </script>
  </body>
</html>
```

**Output :**

> Option 1 <br/>
> Option 2 

**Explanation:** 

`const option = 1;` : Here, you're declaring a constant variable named `option` and assigning it a value of `1`.

`switch (option) { ... }`: The switch statement begins, and it evaluates the value of the option variable.

`case 1:` : The switch statement checks if the value of option matches the value provided in this case, which is `1`. Since option is indeed `1`, the code block associated with case `1` is entered.

`console.log("Option 1");` : Inside the `case 1` code block, the `console.log` function is called with the string `"Option 1"`. Therefore, `"Option 1"` is printed to the console.

`Fall-Through Behavior` : Notice that there is no break statement after the `console.log("Option 1");` line. This lack of a break statement causes the code execution to continue to the next case block without interruption, regardless of whether the case condition matches.

`case 2:` : The code execution flows into this `case 2` block because there is no break statement after the previous `case 1` block. The switch statement checks if the value of option matches `2`, which it doesn't.

`console.log("Option 2");` : Despite the value of option not matching `2`, the code block under` case 2` is executed. Therefore, `"Option 2"` is printed to the console.

`break;` : Here, the break statement is encountered. It serves two purposes: it terminates the execution of the current case block, and it prevents the code from `falling through` to subsequent case blocks.

`case 3:` : The switch statement checks if the value of option matches `3`, which it doesn't.

`console.log("Option 3");` : The code block under `case 3` is not executed because the value of option doesn't match `3`.

**Using a Default Case**

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
  </head>
  <body>
  <script>
     const option = 5;

     switch(option){
        case 1:
            console.log("Option 1");
        break;

        case 2:
            console.log("Option 2");
        break;

        case 3:
            console.log("Option 3");
        break;

        default:
            console.log("BAD Option"); 
     }
  </script>
  </body>
</html>
```
**Output :**

> BAD Option

**Explanation:**  Here, option is set to `5`. Since none of the cases match, the code block under the default label is executed, printing `Bad Option` to the console.


**Taking User Input**

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
  </head>
  <body>
  <script>
     const option = prompt('Enter food option: ');

     switch(option)
     {
        case 'pizza':
            document.write('🍕')
        break;

        case 'burger':
            document.write('🍔')
        break;

        case 'fries':
            document.write('🍟')
        break;
        
        default:
            document.write('🌻')
     }
  </script>
  </body>
</html>
```
**Output :**

>Enter food option: burger<br/>
>🍔


**Explanation:** In this example, the user is prompted to input a food option. Depending on the input, the matching case code block is executed. If the user inputs `burger` the code block under case `burger` runs, printing a `burger emoji`.
