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

`onclick()`
`onchange()`
`onkeypress()`
`onkeyDown()`
`onkeyUp()`
`onmouseover()`
`onDoubleClick()`
`onMouseMove()`
`onmouseout()`
`onload()`

</details>

<details>
  <summary>Difference between setTimeout() and setInterval()?</summary>

`setTimeout()` and `setInterval()` are both functions in JavaScript used for executing code after a specified delay. However, they differ in terms of how they handle the timing of code execution

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
