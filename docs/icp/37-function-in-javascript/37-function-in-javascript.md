---
title: Function in Javascript
description: "Function in Javascript"
hide_table_of_contents: true
---

## Function in Javascript

A function in JavaScript is a block of code that performs a specific task and can be called or executed multiple times.

Function code block which can be reused to perform a specific task.

## Types of Function

### Inbuilt 

JavaScript have some Inbuilt functions that can be used to perform various tasks. Inbuilt function means that meaning is already define or knows to javascript.

**Example:**

1. `alert()` : Displays an alert box with a message and an OK button.
2. `console.log()`: Displays a message or value in the browser console for debugging purposes.
3. `parseInt()`: Converts a string to an integer.
4. `parseFloat()` : Converts a string to a floating-point number.
5. `prompt()`: Displays a dialog box that prompts the user to input a value.

### User Defined 

User define function means you can define your own functions using the `function` keyword.

**Syntax:**

```js
function <functionName> ()
{
    // block code 
}
```

**Code**

 ```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
    function sayHello()
    {
        document.write("<br/> Hello")
    }

    sayHello()
    sayHello()
    </script>
  </head>
  <body></body>
</html>
 ```

 **Output**

>Hello <br/>
>Hello

In the above example we create simple user-defined function in JavaScript. The `sayHello()` function is defined to write the message `Hello` to the document using the `document.write()` method.

In this example, the function is called twice using the function name `sayHello()`. When a function is called, the code inside the function is executed. So in this case, the message `Hello` will be written to the document twice, once for each call to `sayHello()`.

**Code**

 ```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
    function sayHello(studeName)
    {
        document.write("<br/> Hello "+studeName);
    }

    sayHello(Suraj)
    sayHello(Anand)
    sayHello(Vaishnavi)
    </script>
  </head>
  <body></body>
</html>
 ```

 **Output**

>Hello Suraj <br/>
>Hello Anand <br/>
>Hello Vaishnavi

In the above example, we define a function `sayHello()` that takes a **parameter** `studeName`, which is used to personalize the greeting message. The function writes a greeting message to the document using `document.write()` method.

Then, the `sayHello()` function is called three times with different **arguments** - `Suraj`, `Anand`, and `Vaishnavi`. These arguments are passed into the `studeName` parameter of the function, which is used to customize the greeting message for each student.

**Code**

 ```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
    function addTwoNumbers(num1, num2)
    {
       const sum = num1 + num2;
       document.write("<br /> Sum : "+sum);
    }

    addTwoNumbers(5, 7)
    addTwoNumbers(8, 1)
    </script>
  </head>
  <body></body>
</html>
 ```

 **Output**

>Sum : 12 <br/>
>Sum : 9

In the above example, we define a function called `addTwoNumbers()` that takes two **parameters** - `num1` and `num2`. The function calculates the `sum` of `num1` and `num2` using the `+ operator` and stores the result in a variable called `sum`. Then, the function writes a message to the document using `document.write()`, displaying the value of `sum`.

After defining the function, it is called twice with different **arguments** - `addTwoNumbers(5, 7)` and `addTwoNumbers(8, 1)`. These calls pass in different values for `num1` and `num2`, which are used by the function to calculate the `sum` and display it on the document.


**Code**

 ```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
    function addTwoNumbers(a, b)
    {
       const sum = a + b;
       document.write("<br /> Sum : "+sum);
    }

    const num1 = parseInt(prompt("Enter Num 1: ));
    const num2 = parseInt(prompt("Enter Num 2: ));

    addTwoNumbers(num1, num2)
    </script>
  </head>
  <body></body>
</html>
 ```
In the above code we create function that takes two numbers as input and adds them together. The function then outputs the sum using the `document.write()` method, which writes the sum to the web page.

The `parseInt()` method is used to convert the input values from strings to numbers so that they can be added together. The `prompt()` method is used to prompt the user to enter two numbers, which are then assigned to the variables `num1` and `num2`.

Two prompts will appear asking the user to `enter two numbers`. After the user enters the numbers, the function will be called with those values as arguments, and the sum will be displayed on the page using the `document.write()` method.

**Code**

 ```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
  function calAreaOfRectangle(l, b){
    const area = l * b;
    return area;
  }
  const ans = calAreaOfRectangle(5, 4)
  console.log(ans)
    </script>
  </head>
  <body></body>
</html>
 ```

In the above code defines a function `calAreaOfRectangle` which takes two parameters `l` (length) and `b` (breadth) and calculates the area of a rectangle using the formula `area = length * breadth`. The calculated area is then returned by the function.

The function is then called with arguments `5` and `4`, and the returned value is stored in a variable `ans`. Finally, the value of `ans` is printed to the console using `console.log()`.

The expected output of this code is `20`, which is the area of the rectangle with length `5` and breadth `4`.
