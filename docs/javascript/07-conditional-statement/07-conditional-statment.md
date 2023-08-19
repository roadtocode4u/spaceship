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

In the above cod in JavaScript and is meant to be embedded within an HTML document using a `<script>` tag. 

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

`if (a > b) { ... }` : This is an `if` statement that checks whether the value of a (which is 30) is greater than the value of b (which is 20). Since `30` is indeed greater than `20`, the condition evaluates to `true`, and the code block within the curly braces` { ... } `will be executed.

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

<img src="/javascript/07/screenshot-7.png" alt="screenshot-7" width="600px"/>

<img src="/javascript/07/screenshot-8.png" alt="screenshot-7" width="600px"/>

<img src="/javascript/07/screenshot-9.png" alt="screenshot-7" width="600px"/>

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

<img src="/javascript/07/screenshot-10.png" alt="screenshot-10" width="600px"/>

<img src="/javascript/07/screenshot-11.png" alt="screenshot-11" width="600px"/>

<img src="/javascript/07/screenshot-12.png" alt="screenshot-12" width="600px"/>


#### 3. if-else-ladder

**Syntax :**

```js
if (condition) {
  //Statement
}
else if(condition){
  //Statement
}
else if(condition){
  //Statement
}
else{
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

>Three

**Code :**

```js
<!DOCTYPE html>
<html>
 <head>
   <title>Hello JS 💛</title>
 </head>
 <body>
  <script>
  const number = 8;

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

>Invalid

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

>Enter a number : 5 <br/>
>Five

**Code :**

```js
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

>Enter a number : 82 <br/>
>B

## Boundary Cases:

**Code :**

```js
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

>Enter a number : 38 <br/>
>Fail

#### 4. nested-if

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

>JEE MAIN Claer Hua... <br/>
>JEE ADV Claer Hua...

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

>JEE MAIN Claer NAHI Hua...<br/>









  

