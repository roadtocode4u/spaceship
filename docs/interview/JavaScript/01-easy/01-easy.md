### JavaScript Easy

<details>
  <summary>What is the full form of JSON?</summary>

JavaScript Object Notation

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
