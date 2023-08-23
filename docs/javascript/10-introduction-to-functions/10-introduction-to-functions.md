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

**There are four categories of the Function.**

  <img src="/javascript/10/screenshot-1.png" alt="screenshot-1" width="600px"/>

### 1. Argument and Return

**Example :**

```js showLineNumbers="true"
function areaOfSquare(side) {
  const area = side * side;
  return area;
}
const A = areaOfSquare(10);
console.log(`Area of Square :${A} `);
```

**Output :**

> Area of Square :100

**Exaplanation :**

In the above example, we a function named `areaOfSquare()`, we pass parameter `side`.
In the function, the area of a square is calculated using the formula `side * side`.
The calculated area is then returned using the return statement.
We call the `areaOfSquare()` function with an argument of `10`, and the `result (100)` is stored in the variable `A`.
We use `console.log()` to display the calculated area of the `square (100)` by referencing the value stored in the variable `A`. The output is `"Area of Square: 100"`.

### 2. Argument but no Return

**Example :**

```js showLineNumbers="true"
function areaOfSquare(side) {
  const area = side * side;
  console.log(`Area of Square :${area} `);
}
areaOfSquare(10);
```

**Output :**

> Area of Square :100

**Exaplanation :**

In the above example, we create a function `areaOfSquare()` that takes a parameter name is `side`.
In the function, the area of a square is calculated using the formula `side * side`.
The calculated area is then displayed using the `console.log() `.
We call the `areaOfSquare()` function and pass the parameter `10`. This calculates the `area (100)` of a square with a side length of `10` and the ouput will be `"Area of Square: 100"`.

### 3. No Argument but Return

**Example :**

```js showLineNumbers="true"
const side = 10;
function areaOfSquare() {
  const area = side * side;
  return area;
}
const A = areaOfSquare();
console.log(`Area of Square :${A}`);
```

**Output :**

> Area of Square :100

**Exaplanation :**

In the abbove example, we create a variable `side` is assigned a value of `10`. The function `areaOfSquare()` is defined. In the the function, the area of a square is calculated using the formula `side * side`.
The calculated area is then returned by the function using the return statement.
The variable `A` is assigned the result of calling the `areaOfSquare()` function. This calculates the `area (100)`.
The `console.log()` statement uses a template string to display the calculated area, using the value stored in the `A` variable. The output will be `"Area of Square: 100"`.

### 4. No Argument but No Return

**Example :**

```js showLineNumbers="true"
const side = 10;
function areaOfSquare() {
  const area = side * side;
  console.log(`Area of Square :${area} `);
}
areaOfSquare();
```

**Output :**

> Area of Square :100

**Exaplanation :**

In the above example, we firstly create `side` variable to 10. Then, we define a function called `areaOfSquare()`. In the function we calculate the area of a square using the formula `side * side`.
We use the `console.log()` function to display the calculated area.
Finally, we call the `areaOfSquare()` function, which calculates the `area (100)` based on the given side length of `10` and displays it as `Area of Square: 100`.

There is no return statement in this example, so the function does not return any value, it only displays the result using `console.log()`.
