---
title: Sum of Two Numbers
description: "Sum of Two Numbers"
hide_table_of_contents: true
---

```html showLineNumbers="true"
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>

  <body>
    Enter Number 1 : <br />
    <input type="text" id="num1" /><br /><br />

    Enter Number 2 : <br />
    <input type="text" id="num2" /><br />
    <br />

    <p id="answer">Answer:</p>

    <button type="button" onclick="calculateSum()">Calculate Sum</button>
    <button type="button" onclick="resetSum()">Reset Sum</button>

    <script>
      const inputBox1 = document.getElementById("num1");
      const inputBox2 = document.getElementById("num2");
      const answertText = document.getElementById("answer");

      function calculateSum() {
        const val1 = parseInt(inputBox1.value);
        const val2 = parseInt(inputBox2.value);
        const sum = val1 + val2;
        answertText.innerText = `Answer : ${sum}`;
      }

      function resetSum() {
        inputBox1.value = " ";
        inputBox2.value = " ";
        answertText.innerText = `Answer :`;
      }
    </script>
  </body>
</html>
```

**Output :**

In the above example, we pass one message `Enter Number 1 :` then we take a one input box and pass one `ID` name of that `ID` is `num1`.

In line number 11, we pass second message `Enter Number 2 : ` and take 2nd input box and pass `ID` name of that `ID` is `num2`. In the line number 14 we take a `<p>` tag to print your result.

In line number 16 and 17, we take two buttons, 1st one is `Calculate Sum`, on this button we triggered `onclick()` function name of that function is `calculateSum()`, it is used to find sum of two numbers.

We take a 2nd button is `Reset Sum`, it is used to reset the displayed values and sum, on the reset function we triggered `onclick()` function name of that function is `resetSum()`.

In the `<script>` tag line number 20, we create a variable `inputBox1`, in this variable we find `ID` which is `num1` by using `document.getElementById("num1")` and store `ID` `num1` in `inputBox1` variable.

In line number 21, we create a variable `inputBox2`, in this variable we find `ID` which is `num2` by using `document.getElementById("num2")` and store `ID` `num2` in the `inputBox2` variable.

In line number 22, we create a variable `answertText`, in this variable we find `ID` which is `answer` by using `document.getElementById("answer")` and store `ID` `answer` in the `answer` variable.

In line number 24, we create a `calculateSum()` function.

In line number 25 and 26, we create two variables which are `val1` and `val2` in this variable we take `parseInt()` function to convert string value into `integer` value of this variable`(inputBox1.value)`.

In line number 27, we create variable `sum` and store sum of `val1` and `val2`.

In line number 28, `answertText.innerText = `Answer : ${sum}`;` print the result of the sum.

In line number 31, we create a `resetSum()` function.

In line number 32 and 33, `inputBox1.value = " ";` , `inputBox2.value = " ";` and `` answertText.innerText = `Answer :`; `` these lines are used to reset all values, which are shows in 2nd output.

<img src="/javascript/14/screenshot-1.png" alt="screenshot-1" width="600px"/>

**After resetSum() function is triggered and you see this output.**

<img src="/javascript/14/screenshot-2.png" alt="screenshot-2" width="600px"/>
