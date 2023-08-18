---
title: Conditional Operator
description: "Conditional Operator"
hide_table_of_contents: true
---

## Conditional Statements

A conditional statement is a programming construct that allows you to execute different blocks of code based on whether a certain condition is true or false.

**There are 5 type of conditional statement.**

1. if
2. if-else
3. if-else-ladder
4. nested-if
5. switch case

#### 1. if

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

#### 2. if-else

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

### How to add HMTL tags in JavaScript

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Html in JS</title>
  </head>
  <body>
    <script>
      document.write("Hello");
      document.write("<b> Hello </b>");
      document.write("<h1> Hello </h1>");
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/07/screenshot-1.png" alt="screenshot-1" width="600px"/>

**Code Explanation :**

In the above example, HTML tags were used within a script tag. The script tag contained the code `document.write('<b> Hello </b>');` where the `<b>` tag was used to make the word `Hello` appear in bold.

#### We also apply CSS within the script tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Html in JS</title>
  </head>
  <body>
    <script>
      document.write("Hello");
      document.write("<b> Hello </b>");
      document.write(`<h1 style="color:red;"> Hello </h1>`);
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/07/screenshot-2.png" alt="screenshot-2" width="600px"/>

**Code Explanation :**

In the above example, HTML tags were used within a `<script>` tag. The script tag of 3rd line where in the `<h1>` tag is used to change text color of the text.

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









  

