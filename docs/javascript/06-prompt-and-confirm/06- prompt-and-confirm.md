---
title:  prompt and confirm
description: " prompt and confirm"
hide_table_of_contents: true
---

# Prompt() and Confirm() Function

`prompt()` and `confirm()` both are browser api and inbuilt function of Javascript. `confirm()` are used to give confirmation (cancel/ok) to user. `prompt()` are used to give input from user.

## confirm()

`confirm()` are used to give confirmation (cancel/ok) from the user. when you give positive or negative feedback from the user then we can use the `confirm()` function. When the user clicks `ok` button its return true feedback and when user clicks `cancel` button then its returns false feedback.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      confirm("Do you want to cancel this order?");
    </script>
  </head>
  <body></body>
</html>
```

**Output :**

<img src="/javascript/06/screenshot-8.png" alt="screenshot-8" width="600px"/>

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const response = confirm("Do you want to cancel this order?");
      document.write(response);
    </script>
  </head>
  <body></body>
</html>
```

**Output :**

<img src="/javascript/06/screenshot-8.png" alt="screenshot-8" width="600px"/>

<img src="/javascript/06/screenshot-9.png" alt="screenshot-9" width="600px"/>

## prompt()

`prompt()` are used to take input from user. in prompt we pass one message that message show in prompt popup.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const age = prompt("Enter Your Age: ");
      document.write(age);
    </script>
  </head>
  <body></body>
</html>
```

**Output :**

<img src="/javascript/06/screenshot-7.png" alt="screenshot-7" width="600px"/>


**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const age = prompt("Enter Your Age: ");
      document.write("You are " + age + " years old.");
    </script>
  </head>
  <body></body>
</html>
```

**Output :**

<img src="/javascript/06/screenshot-6.png" alt="screenshot-6" width="600px"/>

In the above program we can create a `age` variable. In that variable we store prompt value. Next line we print that variable and give proper message and print formatted way.

### Default Value in Prompt

**Syntax :**

`prompt(text, defaultText)`

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const motherToungue = prompt("Enter your mother toungue", "marathi");
    </script>
  </head>
  <body></body>
</html>
```

**Output :**

<img src="/javascript/06/screenshot-5.png" alt="screenshot-5" width="600px"/>

In the above program in prompt we pass to argument first is message or text and second is default value so in the output we it will show the default
value.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const name = prompt("Enter Your Name : ");
      const email = prompt("Enter Your email : ");
      const mobile = prompt("Enter Your mobile : ");

      document.write("Name: " + name + "<br/>");
      document.write("Email: " + email + "<br/>");
      document.write("Mobile: " + mobile + "<br/>");
    </script>
  </head>
  <body></body>
</html>
```

**Output :**

<img src="/javascript/06/screenshot-1.png" alt="screenshot-1" width="600px"/>

<img src="/javascript/06/screenshot-2.png" alt="screenshot-2" width="600px"/>

<img src="/javascript/06/screenshot-3.png" alt="screenshot-3" width="600px"/>

<img src="/javascript/06/screenshot-4.png" alt="screenshot-4" width="600px"/>

## parseInt()

`parseInt()` is a built-in function in JavaScript that is used to parse a string and convert it into an integer (whole number). 

**Syntax :**

```js
parseInt('55') = 55
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
  </head>
  <body>
     <script>
     const number1 = parseInt(prompt('Enter Number 1'));
     const number2 = parseInt(prompt('Enter Number 2'));

     const sum = number1 + number2;

     document.write(`Sum of ${number1} and ${number2} is ${sum}`);
    </script>
  </body>
</html>
```

**Output :**

>Enter Number 1: 4 <br/>
>Enter Number 2: 5 <br/>
>Sum of `4` and `5` is `9`

## parseFloat()

`parseFloat()` is a built-in function in JavaScript that is used to parse a string and convert it into a `floating-point` number (a number with a decimal point). It is commonly used for extracting numeric values from strings that represent floating-point numbers.

**Syntax :**

```js
parseFloat("34.89") = 34.89
```

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
  </head>
  <body>
     <script>
     const base = parseFloat(prompt('Enter Base'));
     const height = parseFloat(prompt('Enter Height'));

     const areaOfTriangle = 0.5 * base * height;

     document.write(`Area of Triangle: ${areaOfTriangle}`);
    </script>
  </body>
</html>
```

**Output**
>Enter Base: 20.7<br/>
>Enter Height:34.8 <br/>
>Area of Triangle: 360.1799995




