---
title: Conditional Statement
description: "Conditional Statement"
hide_table_of_contents: true
---

## Conditional Statements

A conditional statement is a programming construct that allows you to execute different blocks of code based on whether a certain condition is true or false.

**There are 5 type of conditional statement.**

1. **if Statement** : Executes a block of code if the specified condition is true.

2. **if-else Statement** : Executes one block of code if the condition is true and a different block if the condition is false.

3. **if-else-ladder Statement** : Executes a specific block of code from a series of options based on multiple conditions.

4. **nested-if Statement** : Uses an if statement inside another if statement to create a hierarchy of conditions.

5. **switch-case Statement** : Provides an efficient way to handle multiple possible conditions by associating them with specific code blocks.

## 1. if

**Syntax :**

```js
if (condition) {
  //Statement
}
```

**Code :**

```js
<!DOCTYPE html>
<html>
 <head>
   <title>Hello JS 💛</title>
   <script>
     const age = 20;

	  if(age>18)
	  {
		document.write("You are eligible for voting...")
	  }
   </script>
 </head>
 <body></body>
</html>
```

**Output**

> You are eligible for voting...

In the above code in JavaScript and is meant to be embedded within an HTML document using a `<script>` tag.

`const age = 20;` : This line declares a constant variable named `age` and assigns the value `20` to it. This represents the age of a person.

`if (age > 18) { ... }` : This is an if statement, which is a type of conditional statement. It checks whether the value of the age variable is greater than `18`. If this condition evaluates to `true`, the code block within the curly braces `{ ... }` will be executed.

`document.write("You are eligible for voting...");`: Inside the code block of the if statement, there is a single line that uses the `document.write()` method to display a message on the web page. The message `You are eligible for voting...` will be written to the document if the condition `age > 18` is `true`.

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      const a = 10;
      const b = 20;

      if (a > b) {
        console.log("True");
      }
      console.log("General Statement");
    </script>
  </body>
</html>
```

**Output :**

> General Statement

In the above code of two constant declarations and an `if` statement.

`const a = 10;` and `const b = 20;`: These two lines declare two constant variables, `a` and `b`, and assign the values `10` and `20` to them, respectively.

`if (a > b) { ... }`: This is an if statement that checks whether the value of a (which is 10) is greater than the value of b (which is 20). Since `10` is not greater than `20`, the condition evaluates to `false`, and the code block within the curly braces `{ ... }` will not be executed.

`console.log("True");`: This line is inside the code block of the if statement. However, since the condition is `false`, this line will not be executed, and the message `True` will not be logged to the browser's console.

`console.log("General Statement");`: This line is outside the if statement, so it will always be executed. It logs the message `General Statement` to the browser's console.

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      const a = 30;
      const b = 20;

      if (a > b) {
        console.log("True");
      }
      console.log("General Statement");
    </script>
  </body>
</html>
```

**Output :**

> True<br/>
> General Statement

`const a = 30;` and `const b = 20;`: These two lines declare two constant variables, `a` and `b`, and assign the values `30` and `20` to them, respectively.

`if (a > b) { ... }` : This is an `if` statement that checks whether the value of a (which is 30) is greater than the value of b (which is 20). Since `30` is indeed greater than `20`, the condition evaluates to `true`, and the code block within the curly braces`{ ... }`will be executed.

`console.log("True");`: This line is inside the code block of the if statement. Because the condition is `true`, this line will be executed, and the message `True` will be logged to the browser's console.

`console.log("General Statement");`: This line is outside the if statement, so it will always be executed. It logs the message `General Statement` to the browser's console.

## 2. if-else

**Syntax :**

```js
if (condition) {
  //True Statement
} else {
  //False Statement
}
```

**1. Write a Javascript program to find Positive or Negative number.**

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Positive Or Negative No</title>
  </head>
  <body>
    <script>
      const number = parseInt(prompt("Enter Number: "));

      if (number >= 0) {
        console.log("Positive Number");
      } else {
        console.log("Negative Number");
      }
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/07/screenshot-3.png" alt="screenshot-3" width="600px"/>

<img src="/javascript/07/screenshot-4.png" alt="screenshot-4" width="600px"/>

`const number = parseInt(prompt("Enter Number: "));`: This line prompts the user to enter a number and stores the entered value in the number variable. The `parseInt()` function is used to convert the input from a string to an integer.

`if (number >= 0) { ... }`: This is an if statement that checks whether the value of the number variable is greater than or equal to `0`. If the condition evaluates to `true`, the code block within the curly braces `{ ... }` will be executed.

`console.log("Positive Number");`: This line is inside the code block of the if statement. If the entered number is greater than or equal to `0`, this line will be executed, and the message `Positive Number` will be logged to the browser's console.

`console.log("Negative Number");`: This line is inside the else block of the if statement. If the entered number is not greater than or equal to `0`, this line will be executed, and the message `Negative Number` will be logged to the browser's console.

**2. Write a Javascript program to find Even or Odd number.**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Even Odd no.</title>
  </head>
  <body>
    <script>
      const number = parseInt(prompt("Enter Number: "));

      if (number % 2 == 0) {
        console.log("Number is Even");
      } else {
        console.log("Number is Odd");
      }
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/07/screenshot-5.png" alt="screenshot-5" width="600px"/>

<img src="/javascript/07/screenshot-6.png" alt="screenshot-6" width="600px"/>

`const number = parseInt(prompt("Enter Number: "));`: This line prompts the user to enter a number and stores the entered value in the number variable. The `parseInt()` function is used to convert the input from a string to an integer.

`if (number % 2 == 0) { ... }:` This is an if statement that checks whether the remainder of dividing the value of the number variable by `2` is equal to `0`. If the remainder is `0`, the code block within the curly braces `{ ... }` will be executed.

`console.log("Number is Even");`: This line is inside the code block of the `if` statement. If the remainder of the division is `0`, meaning the entered number is evenly divisible by `2`, this line will be executed, and the message `Number is Even` will be logged to the browser's console.

`console.log("Number is Odd");`: This line is inside the else block of the if statement. If the remainder of the division is not `0`, meaning the entered number is not evenly divisible by `2`, this line will be executed, and the message `Number is Odd` will be logged to the browser's console.

**3. Write a Javascript program to find Greater number.**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      const num1 = parseInt(prompt("Enter Number 1 :"));

      const num2 = parseInt(prompt("Enter Number 2 :"));

      if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}.`);
      } else {
        console.log(`${num2} is greater than ${num1}.`);
      }
    </script>
  </body>
</html>
```

**Output :**

> Enter Number 1 : 89<br/>
> Enter Number 2 : 100 <br/>
> 100 is greater than 89

<img src="/javascript/07/screenshot-7.png" alt="screenshot-7" width="600px"/>

<img src="/javascript/07/screenshot-8.png" alt="screenshot-7" width="600px"/>

<img src="/javascript/07/screenshot-9.png" alt="screenshot-7" width="600px"/>

`const num1 = parseInt(prompt("Enter Number 1 :"));`: This line of code prompts the user to enter a number using the prompt function. The prompt function displays a dialog box with the message `Enter Number 1 :` and waits for the user to input a value. The value entered by the user is then stored in the constant variable `num1`. The `parseInt` function is used to convert the input string into an `integer`.

`const num2 = parseInt(prompt("Enter Number 2 :"));`: This line is similar to the previous line but prompts the user to enter another number, which is then stored in the constant variable `num2`.

`if (num1 > num2) { ... } else { ... }`: This is an if-else statement, a conditional statement that checks whether a condition is `true` or `false`. In this case, it checks if `num1` is greater than `num2`. If the condition is `true`, the code inside the curly braces following the if statement will be executed. If the condition is `false`, the code inside the curly braces following the else statement will be executed.

`console.log(${num1} is greater than ${num2}.);`: If `num1` is indeed greater than `num2`, this line will execute, and it will log a message to the browser's console using the console.log function. The message will state that `num1` is greater than `num2`.

`console.log(${num2} is greater than ${num1}.);`: If the condition in the if statement is `false`, meaning that `num1` is not greater than `num2`, this line will execute, and it will log a message stating that `num2` is greater than `num1`.

**4. Write a Javascript program to find Discount.**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <script>
      const rate = parseInt(prompt("Enter rate: "));
      const quantity = parseInt(prompt("Enter quantity: "));

      const bill = rate * quantity;
      if (bill > 100) {
        const discount = bill / 10;
        const paybleAmount = bill - discount;
        console.log(`Discount: ${discount} `);
        console.log(`Payble amount: ${paybleAmount}`);
      } else {
        console.log("No discount");
        console.log(`Payble amount: ${bill}`);
      }
    </script>
  </body>
</html>
```

**Output :**

> Enter rate: 1000 <br/>
> Enter quantity: 5 <br/>
> Discount: 500 <br/>
> Payble amount: 4500

<img src="/javascript/07/screenshot-10.png" alt="screenshot-10" width="600px"/>

<img src="/javascript/07/screenshot-11.png" alt="screenshot-11" width="600px"/>

<img src="/javascript/07/screenshot-12.png" alt="screenshot-12" width="600px"/>

`const rate = parseInt(prompt("Enter rate: "));`: This line prompts the user to enter a `rate` (price per unit) using the prompt function and stores the entered value as an integer in the constant variable `rate`.

`const quantity = parseInt(prompt("Enter quantity: "));`: Similar to the previous line, this line prompts the user to enter a quantity and stores the entered value as an integer in the constant variable `quantity`.

`const bill = rate * quantity;`: This line calculates the bill amount by multiplying the `rate` and `quantity`. The result is stored in the constant variable `bill`.

`if (bill > 100) { ... } else { ... }`: This if-else statement checks whether the bill amount is greater than `$100`. If the condition is `true`, the code inside the curly braces following the if statement will be executed. If the condition is `false`, the code inside the curly braces following the else statement will be executed.

`const discount = bill / 10;`: If the bill amount is greater than `$100`, this line calculates a discount of `10%` of the bill amount and stores it in the constant variable discount.

`const paybleAmount = bill - discount;`: This line calculates the payable amount after subtracting the discount from the original bill amount. The result is stored in the constant variable `paybleAmount`.

`console.log(Discount: ${discount} );`: This line logs the calculated discount amount to the console.

`console.log(Payble amount: ${paybleAmount});`: This line logs the payable amount after applying the discount (if applicable) to the console.

`console.log("No discount");`: If the bill amount is `$100` or `less`, this line logs `No discount` to the console.

`console.log(Payble amount: ${bill});`: This line logs the original bill amount (without any discount) to the console.

## 3. if-else-ladder

**Syntax :**

```js
if (condition) {
  //Statement
} else if (condition) {
  //Statement
} else if (condition) {
  //Statement
} else {
  //Statement
}
```

**Code :**

```js
<!DOCTYPE html>
<html>
 <head>
   <title>Hello JS 💛</title>
 </head>
 <body>
  <script>
  const number = 3;

  if(number == 1)
  {
    document.write('One');
  }
  else if(number == 2)
  {
    document.write('Two');
  }
  else if(number == 3)
  {
    document.write('Three');
  }
  else if(number == 4)
  {
    document.write('Four');
  }
  else if(number == 5)
  {
    document.write('Five');
  }
  else{
     document.write('Invalid');
  }
   </script>
 </body>
</html>
```

**Output**

> Three

`const number = 3;`: This line declares a constant variable named `number` and assigns it a value of `3`.

`if (number == 1) { ... }`: This is an if statement. It checks if the value of `number` is equal to `1`. If it is, the code within the curly braces immediately following this line will be executed. In this case, it would display `One`.

`else if (number == 2) { ... }`: If the first condition is `false`, this line checks if the value of `number` is equal to `2`. If it is, the code within these curly braces will be executed. In this case, it would display `Two`.

The next several lines follow a similar pattern, each checking for a different value of `number` and displaying a corresponding message.

`else { ... }`: If none of the previous conditions are met (i.e., `number` is not `1`, `2`, `3`, `4`, or `5`), this block will be executed. It will display `Invalid`.

## Taking Input From User

**Code :**

```js
<!DOCTYPE html>
<html>
 <head>
   <title>Hello JS 💛</title>
 </head>
 <body>
  <script>
  const number = parseInt(prompt('Enter a number'));

  if(number == 1)
  {
    document.write('One');
  }
  else if(number == 2)
  {
    document.write('Two');
  }
  else if(number == 3)
  {
    document.write('Three');
  }
  else if(number == 4)
  {
    document.write('Four');
  }
  else if(number == 5)
  {
    document.write('Five');
  }
  else{
     document.write('Invalid');
  }
   </script>
 </body>
</html>
```

**Output**

> Enter a number : 5 <br/>
> Five

The line `const number = parseInt(prompt('Enter a number'));` is asking the user to enter a number. The prompt function displays a dialog box where the user can type in a value. The entered value is then stored in the number variable after converting it to an integer using the `parseInt` function.

The code uses a series of `if`, `else if`, and `else` statements to determine what to display based on the value of the number variable.

The first `if` statement checks if the value of number is equal to `1`. If it is, the code inside the block `{ ... }` following the if statement is executed. In this case, it displays the word `One` using the `document.write` function.

If the value of number is not `1`, the code moves on to the `else if` statements. Each `else if` statement checks whether the value of number matches a specific number `2`, `3`, `4`, or `5`. If a match is found, the corresponding word `Two`, `Three`, `Four`, or `Five` is displayed using `document.write`.

If none of the `if` or `else if` conditions are met, the code reaches the else statement. This means that the value of number is neither `1`, `2`, `3`, `4`, nor `5`. In this case, the code displays `Invalid` using `document.write`.

**Code :**

```js showLineNumbers="true"
<!DOCTYPE html>
<html>
 <head>
   <title>Hello JS 💛</title>
 </head>
 <body>
  <script>
  const per = parseInt(prompt('Enter a number'));

  if(per >= 90){
    console.log('A')
  }
  else if(per >= 80){
    console.log('B')
  }
  else if(per >= 70){
    console.log('C')
  }
  else if(per >= 60){
    console.log('D')
  }
  else if(per >= 50){
    console.log('E ')
  }
  else{
    console.log('Fail')
  }
  </script>
 </body>
</html>
```

**Output**

> Enter a number : 82 <br/>
> B

In the above code, Line 8 declares a `constant` variable called `per`. The `const` keyword is used to define a variable that won't change its value once it's assigned. The value assigned to `per` comes from the result of the prompt function. This function displays a prompt box to the user with the message `Enter a number` and waits for the user to input something. The input provided by the user is then converted to an integer using `parseInt` and stored in the `per` variable.

Line 10 to 12, This `if` statement checks if the value of `per` is `greater than or equal to 90`. If this condition is true, the code inside the block (between the curly braces) is executed. In this case, it prints `A` to the browser's console using the `console.log` function.

Line 13 to 15, This `else if` statement checks `if` the value of `per` is not `greater than or equal to 90`, but it is `greater than or equal to 80`. If this condition is `true`, the code inside this block is executed. It prints `B` to the console.

Line 16 to 18, This `else if` statement checks if the value of `per` is `not greater than or equal to 90 or 80`, but it is . If this condition is true, it prints `C` to the console.

Line 19 to 21, This `else if` statement checks if the value of `per` is `not greater than or equal to 90, 80, or 70`, but it is `greater than or equal to 60`. If this condition is true, it prints `D` to the console.

Line 22 to 24, This `else if` statement checks if the value of `per` is `not greater than or equal to 90, 80, 70, or 60`, but it is `greater than or equal to 50`. If this condition is true, it prints `E` to the console.

Line 25 to 27, If none of the previous conditions are met (`meaning per is less than 50`), the code inside this `else` block is executed. It prints `Fail` to the console, indicating that the grade is failing.

## Boundary Cases:

**Code :**

```js showLineNumbers="true"
<!DOCTYPE html>
<html>
 <head>
   <title>Hello JS 💛</title>
 </head>
 <body>
  <script>
 const per = parseInt(prompt('Enter Percentage:'));

  if(per >= 50 && per<60){
    console.log('E')
  }
  else if(per >= 60 && per<70){
    console.log('D')
  }
  else if(per >= 70 && per<80){
    console.log('C')
  }
  else if(per >= 80 && per<90){
    console.log('B')
  }
  else if(per >= 90 && per<=100){
    console.log('A')
  }
  else{
    console.log('Fail')
  }
  </script>
 </body>
</html>
```

**Output**

> Enter a number : 38 <br/>
> Fail

In the above code, Line 8 declares a `constant` variable called `per`. The `const` keyword is used to define a variable that won't change its value once it's assigned. The value assigned to `per` comes from the result of the prompt function. This function displays a prompt box to the user with the message `Enter a number` and waits for the user to input something. The input provided by the user is then converted to an integer using `parseInt` and stored in the `per` variable.

Line 10 to 12, This `if` statement checks if the value of `per` is `greater than or equal to 50 and less than 60`. If this condition is `true`, it means the percentage falls within the range of `50` to `59` (inclusive), so the code inside the block is executed. In this case, it prints `E` to the console.

Line 13 to 15, This `else if` statement checks if the value of `per` is not within the previous range but is `greater than or equal to 60 and less than 70`. If this condition is `true`, it means the percentage falls within the range of `60` to `69` (inclusive), so it prints `D` to the console.

Line 16 to 18, This `else if` statement checks if the value of per is not within the previous ranges but is `greater than or equal to 70 and less than 80`. If this condition is `true`, it means the percentage falls within the range of `70` to `79` (inclusive), so it prints `C` to the console.

Line 19 to 21, This `else if` statement checks if the value of `per` is not within the previous ranges but is `greater than or equal to 80 and less than 90`. If this condition is `true`, it means the percentage falls within the range of `80` to `89` (inclusive), so it prints `B` to the console.

Line 22 to 24, This `else if` statement checks if the value of `per` is not within the previous ranges but is `greater than or equal to 90 and less than or equal to 100`. If this condition is `true`, it means the percentage falls within the range of `90` to `100` (inclusive), so it prints `A` to the console.

Line 25 to 27, If none of the previous conditions are met (meaning the percentage is less than `50` or greater than `100`), the code inside this else block is executed. It prints `Fail`` to the console, indicating that the grade is failing.

## 4. nested-if

**Syntax:**

```js
if (condition A){
   //statement
    if (condition B){
       //statement
    }
    else{
      //statement
    }
  }
  else{
      //statement
  }
```

**Code :**

```js
<!DOCTYPE html>
<html>
 <head>
   <title>Hello JS 💛</title>
 </head>
 <body>
  <script>
  const jeeMain = 130;
  const jeeAdv = 150;

  if(jeeMain>=120)
  {
    console.log("JEE MAIN Claer Hua...");
    if(jeeAdv>=120)
    {
       console.log("JEE ADV Claer Hua...");
    }
    else
    {
       console.log("JEE ADV Claer NAHI Hua...");
    }
  }
  else
  {
    console.log("JEE MAIN Claer NAHI Hua...")
  }
  </script>
 </body>
</html>
```

**Output**

> JEE MAIN Claer Hua... <br/>
> JEE ADV Claer Hua...

In the above example `two variables`, `jeeMain and jeeAdv`, are declared and assign `values 130 and 150`.

The `if statement{ ... }` checks whether `jeeMain is greater than or equal to 120`. This condition is true because` jeeMain is 130`.

Inside this block, it logs `"JEE MAIN Clear Hua..."` to the console using `console.log()`.

Then, there's another `if statement nested`conditon. It checks whether `jeeAdv is greater than or equal to 120`. This condition is also true because `jeeAdv is 150`.

So, the final output of this code will be:

```js
JEE MAIN Clear Hua...
JEE ADV Clear Hua...
```

both conditions in the `nested if statements are true`, so both `"JEE MAIN Clear Hua..." `and `"JEE ADV Clear Hua..."` are printed to the `output`.

**Code :**

```js
<!DOCTYPE html>
<html>
 <head>
   <title>Hello JS 💛</title>
 </head>
 <body>
  <script>
  const jeeMain = 100;
  const jeeAdv = 150;

  if(jeeMain>=120)
  {
    console.log("JEE MAIN Claer Hua...");
    if(jeeAdv>=120)
    {
       console.log("JEE ADV Claer Hua...");
    }
    else
    {
       console.log("JEE ADV Claer NAHI Hua...");
    }
  }
  else
  {
    console.log("JEE MAIN Claer NAHI Hua...")
  }
  </script>
 </body>
</html>
```

**Output**

> JEE MAIN Claer NAHI Hua...

In the above example `two variables`, `jeeMain and jeeAdv`, are declared and assign `values 100 and 150`.

The `if statement{ ... }` that checks the value of `jeeMain` against of 120.,Since `jeeMain (100) is less than 120`, the code proceeds to the `else block`.

Inside the `else block`, the `"JEE MAIN Clear NAHI Hua..."`to the console. This indicates that the `JEE MAIN exam was not cleared` because the `jeeMain` score did not matched the required minimum score of `120`.

The condition does not continue to check the `jeeAdv` score because it is `nested` within the `jeeMain` condition.

So, the final output of this code will be:

```js
JEE MAIN Clear NAHI Hua...
```

### Happy Coding 🤖
