---
title: Functions
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

#### 

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

In the above code, Line 1 we're defining a new function named `areaOfSquare`. This function takes a single parameter called `side`.

Line 2, Inside the function, we calculate the `area` of the square by multiplying the value of `side * side`. The result is stored in a variable called `area`.

Line 3, After calculating the `area`, we're giving it back to whoever asked for it using the `return` keyword. It's like handing over the `result` to someone who used our tool to calculate the `area`.

Line 5, Now, we're using our `areaOfSquare` tool. We call the function by providing a value of `10` as an `argument`. This means we want to find the area of a square with a side length of `10` units. The calculated `area` is then stored in a variable named `A`.

Line 6, Finally, we're displaying the `result` using the `console.log` function. It's like showing the answer on a screen. We're creating a message that says `Area of Square` followed by the value stored in variable `A`. This message is then printed to the console.

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

In the above example, we're defining a function called `areaOfSquare` that takes a single parameter named `side`. This function is designed to `calculate` and `display` the area of a `square`. Inside the function, we calculate the `area` of the square by multiplying the value of `side * side`. The result is stored in a variable called `area`. After calculating the area, we're using the `console.log` function to display a message. This message includes the calculated `area` value. So, if side is `10`, the calculated area `100` will be displayed as `Area of Square: 100`. This line prints the calculated area to the `console`. Finally, we're actually using the `areaOfSquare` function. We're providing the value `10` as an argument, which means we want to calculate the `area` of a square with a `side` length of `10` units.

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

In the abbove example, we're creating a variable named `side` and assigning it a value of `10`. This value represents the length of one `side` of the square for which we want to calculate the area. Then We're defining a function named `areaOfSquare` here. This function doesn't take any parameters, but it relies on the side value that we set earlier to calculate the area of a square. Inside the function, we calculate the `area of the square` by multiplying the `side*side`. The result is stored in the `area` variable, and then we use the `return` keyword to send this calculated area back when the function is called. Finallly We're calling the `areaOfSquare` function here. It doesn't need any arguments because it's already using the side value that we set earlier. The calculated area is returned from the function and stored in a variable named `A`. we're displaying the result using the `console.log` function. We're creating a message that includes the value of `A`, which is the calculated area. The message will look like `Area of Square: 100` if side is `10`, as the calculated area is `100`.

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

In the above example, we're creating a variable named `side` and setting its value to `10`. This value represents the length of one `side` of the square for which we want to calculate the `area`.

We're defining a function called `areaOfSquare`. This function doesn't take any parameters. Inside the function, we calculate the area of the square by multiplying the `side*side`. Then, we're using the `console.log` function to display a message that includes the calculated `area`. So, if side is `10`, the calculated area is `100`, and the message will be A`rea of Square: 100`. This line prints the calculated area to the `console`. Finally, we're calling the `areaOfSquare` function. This function doesn't require any arguments because it's already using the side value that we set earlier. When the function is called, it calculates the area and displays it using the `console.log` statement inside the function.


###  Default Argument

**Example :**

```js showLineNumbers="true"
function sayHello(studentName='user')
{
  console.log(`Hello${studentName}`);
}

sayHello ('');
```
**Output :-**

> Hello user

**Exaplanation :**
 
 In this above example function `sayHello(studentName='user')`, studentName is a parameter. The  `user`  is  a default value for the studentName parameter. This means that if no argument is passed when calling the function, studentName will default to `user`. When you call `sayHello('')`, you are passing an empty string as an argument , after calling  (even if it's an empty string), it overrides the default value and you set default value `studentName='user'` .  In `console.log` statement inside the function then prints `"Hello"` with parameter studentName, which is an empty string in this example. If you call `sayHello() without passing any arguments`, the default value `'user'` would be used, and the function will give output` "Hello user"`.
