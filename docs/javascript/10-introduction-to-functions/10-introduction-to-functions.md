---
title: Introduction to Functions
description: "Introduction to Functions"
hide_table_of_contents: true
---

A JavaScript function is a reusable block of code that performs a specific task and it can be executed multiple times.

## Types of Functions

#### Inbuilt

In JavaScript, inbuilt functions already have predefined meanings for various tasks. This means that the meaning is already defined and known to JavaScript.

**Example :**

1. `alert()` : An alert box will be displayed that contains a message along with an `OK` button.
2. `prompt()` :A prompt box displays an additional input field for the user to provide a value for output.
3. `console.log()` : You can use the browser console to display messages or values.
4. `parseInt()` : Converts a string into an Integer.
5. `parseFloat()` : Converts a string into a Floating-point number.

#### User Defined

By using the `function` keyword, to create and define your own functions known as user-defined functions.

**Syntax :**

```js showLineNumbers = "true"
function <function-name> ()
{
    // Block of Code
}
```

**Example :**

```js showLineNumbers = "true"
function sayHello() {
  console.log("Hello");
}
sayHello();
sayHello();
```

**Output :**

> Hello <br/>
> Hello

**Exaplanation :**

In the above example, we create simple user-defined function. The `sayHello()` function is defined to write the message `Hello` to the console using the `console.log()` method.

In this example, the function is called two time using the function name `sayHello()`. When a function is called, the code inside the function is executed. So, in this case, the message `Hello` will be written to the document two times.

**Example :**

```js showLineNumbers = "true"
function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello();
sayHello();
```

**Output :**

> Hello undefined<br/>
> Hello undefined

**Exaplanation :**

In the above example, we create a simple user-defined function. The `sayHello()` function is defined in this function we pass the `name` parameter `Hello ${name}` to write the message to the console using the `console.log()` method.

In this example, the function is called two times using the function name `sayHello()`. When a function is called, the code inside the function is executed. In this case, we can not pass any value for the parameter, that's why our output prints `Hello undefined` two times.

**Example :**

```js showLineNumbers = "true"
function sayHello(name) {
  console.log("Hello ${name}");
}
sayHello("Yogita");
sayHello("Pinki");
```

**Output :**

> Hello Yogita<br/>
> Hello Pinki

**Exaplanation :**

In the above example, we create simple user-defined function. The `sayHello(name)` function in this function we pass one parameter name of that parameter is `name` defined to write the message `Hello Yogita` and `Hello Pinki` to the console using the `console.log()` method.

In this example, the function is called two time using the function name and also pass two parameters that are `sayHello("Yogita")` and `sayHello("Pinki")`. When a function is called, the code inside the function is executed. In this case, the function print `Hello Yogita`, `Hello Pinki`.

**Example :**

```js showLineNumbers = "true"
function calSquareArea(side) {
  const area = side * side;
  console.log(`Area : ${area}`);
}
calSquareArea(10);
```

**Output :**

> Area : 100

**Explanation :**

In the above example, we created a function called `calSquareArea()` where we pass the argument `side`. We then called the function and passed the parameter `10`.

**Example using default argument :**

```js showLineNumbers = "true"
function greet(name = "User", day = "next class") {
  console.log(`Hello ${name}. Your interview is scheduled on ${day}.`);
}
greet();
```

**Output :**

> Hello User. Your interview is scheduled on next class.

**Explanation :**

In the above example, we created a function. The name of that function is `greet()` and in this function, we pass **arguments - name, day** and also passed **parameters - User, next class**. In this function, we pass default parameters which are `User` and `next class`. In the console, we print output in a formatted way using a template string.

**Example :**

```js showLineNumbers = "true"
function greet(name = "User", day = "next class") {
  console.log(`Hello ${name}. Your interview is scheduled on ${day}.`);
}
greet("Suraj");
```

**Output :**

> Hello Suraj. Your interview is scheduled on next class.

**Explanation :**

In the example above, we define a function called `greet()` which takes two parameters - `name` and `day`. The function assigns default values to the parameters, with `User` and `next class` as the defaults. In the 5th line, we call the function and pass in the parameters. Finally, in the 3rd line, we use template strings to print our string.

:::tip
When you use a JavaScript function and give it two things to work with, if you give values for both things, those values will be used. But if you only give a value for the first thing and let the second thing use its default value, the second thing will use that default value.
:::