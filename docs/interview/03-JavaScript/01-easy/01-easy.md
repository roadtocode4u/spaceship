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
  <summary>Difference between setTimeout() and setInterval()?</summary>
  <b>setTimeout() and setInterval()</b> are functions in JavaScript used for creating timers or intervals.<br/>They work by receiving two parameters: the first is a function, and the second is the time duration in milliseconds.These functions allow to execute a specific task or function after particular time has passed.<br/><hr/>
  
  <b> 1 : setTimeout() : </b> When you call <b>setTimeout()</b>, it sets a timer for a specific period, for example, 5 seconds. After this 5-second , the specified code is executed, and the function returns the result.<br/><br/>

```js
function time() {
  console.log("Good Morning..! .");
}
setTimeout(time, 5000);
```

<b>Output: </b>Good Morning..!<br/><br/>

In this example, time is a function that will be executed after a of 5 seconds (specified in milliseconds with setTimeout). The console.log statement inside time will be triggered after the particular time passed.<br/><hr/>

<b> 2 : setInterval : ()</b>The <b>setInterval()</b> is a javaScript function that repeatedly call a specific function or exicute a code after particular time has passed.
<br/><br/>

```js
function time() {
  console.log("Good Morning..!");
}
setInterval(time, 5000);
```

<b>Output : </b>Good Morning..!<br/>
Good Morning..!<br/>
Good Morning..!.........<br/>

<br/>
In this example, time is a function that will be executed every 3 seconds (specified in milliseconds with setInterval). The function will continue to be called repeatedly.

</details>
