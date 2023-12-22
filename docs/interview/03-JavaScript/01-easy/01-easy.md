### JavaScript Easy

<details>

  <summary>What is the difference between =, ==  & === ?</summary>

- **single equals to** (=)

`=` Single equal to is a Assignment Operator. If you want to assign the value of variable then use single equal to.

**Example :**

```js
let Num = 20;
console.log(Num);
```

**Output**

> 20

- **double equals to** (==)

`==` Double equal to is a Comparison Operator. And for comparing two value of variable using comparison operator and then output will show in boolean format (true or false).

**Example 2**

```js
let num1 = 10;
let num2 = 10;
document.write(num1 == num2);
```

**Output**

> true

- **tripple equals to** (===)

`===` Tripple equal to Also known as strict equality operator, it compares both the value and then output will show in boolean format (true or false).

**Example 3**

```js
let num1 = 10;
let num2 = 10;
document.write(num1 === num2);
```

**Output**

> true

</details>

<details>
  <summary>What is Template String in Javascript?</summary>

- Template String is a another way to create a String in javaScript to embedded a variables and expression in javaScript .
- It denoted as a backticks ` (``) ` character instead of double `" "` or single quotes `' '` and
  It allows placeholder `${ }` to embedded variables and expression directly .
- Template string is used to string formating .
- With the help of Template string we can add multiline String without using Escape character `\n`

```js showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <script>
    const num1 = 80;
    const num2 = 20;
    console.log(`The sum of ${num1} and ${num2} is `${num1+num2});
  </script>
</body>
</html>
```

**output:**

> The sum of 80 and 20 is 100.

In above example In Line no. 7 we create one variable num1 and store 80 ,In Line no. 8 create a variable num2 and store a value 20 and In Line no. 9 In console.log() we print a actual value of num1 and num2 and it sum with the help of ${}.

</details>

<details>
  <summary>What are the events in JavaScript?</summary>

An event is an action that occurs as per the user's instruction as input and gives the output in response. We can consider different types of inputs, such as `clicking a button` , `moving the mouse` , `pressing a key` , and when users press tab and text box change

**JavaScript has several built-in event objects.**

`onclick()`:The onclick event in Javascript occurs when the user clicks on an element.

**For Example**

```html
<button onClick="alert('Call onClick Event')">Click Me</button>
```

`ondblclick()`:This event occurs when the user double-clicks on an element.

`onchange()`: This event occurs when the value of an input field, select option, or textarea is changed.

`onkeypress()`:This event occurs when the user presses a key down over an element.

`onkeyDown()`:This event occurs when the user presses a key down over an element.

`onkeyUp()`:This event occurs when the user releases a key which was pressed over an element.

`onmouseover()`:This event occurs when the mouse pointer enters the active area of an element.

`onMouseMove()`:This event occurs when the user moves the mouse over an element.

`onmouseout()`:This event occurs when the mouse pointer exits the active area of an element.

`onload()`:This event occurs when HTML document has finished loading.

</details>

<details>
  <summary>Difference between setTimeout() and setInterval()?</summary>

Both `setTimeout()` and `setInterval()` are JavaScript functions used to delay the execution of code. They both allow you to specify a delay, which is the time you want to wait before the code is executed.

In `setTimeout()`, you provide a function that will be executed after a specified delay, but only once. After the function finishes executing

Syntax: `setTimeout(function, delay)`

```js
setTimeout(function () {
  console.log("This code runs after a delay");
}, 1000); // Executes after 1000 milliseconds (1 second)
```

In `setInterval()` is used to repeatedly execute a specified function or code snippet at defined intervals.

Syntax: `setInterval(function, delay)`

```js
setInterval(function () {
  console.log("This code runs repeatedly at a specified interval");
}, 2000); // Executes every 2000 milliseconds (2 seconds)
```

</details>
