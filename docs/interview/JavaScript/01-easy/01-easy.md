### JavaScript Easy

<details>
  <summary>What is the full form of JSON?</summary>

JavaScript Object Notation

</details>


<details>
  <summary>What is Template String in Javascript?</summary>

  * Template String  is a another way to create a String in javaScript to embedded a variables and expression in javaScript .
  * It denoted as a backticks `(``)` character instead of double `" "` or single quotes ` ' ' ` and 
  It allows placeholder `${ }` to embedded variables and expression directly .
  * Template string is used to string formating .
  * With the help of Template string we can add multiline String without using Escape character `\n`


  

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

In above example  In Line no. 7  we create one variable num1 and store  80 ,In Line no. 8  create a variable num2 and store a value 20  and In Line no. 9 In console.log() we print a actual value of num1 and num2 and it sum with the help of ${}.


</details>

<details>
  <summary>What is Ternary Operator ?</summary>

  * Ternary Operator is also called **Conditional Operator**.
  * It is Used to Check the condition and execute a same part of the code based on the condition.
  * Ternary Operator Includes `?` and `:`
  * It has 3 parts  1st is  Condition , 2nd is true part and 3rd is false part.
  * In Ternary Operator ,if the condition is **true** then `2nd part will be  executed` and if the condition is **false** then `3rd part will be  executed`.

  **Syntax**:
  ```js

  condition ? value if true : value if false

  ```


   ```js showLineNumbers=true
 <!DOCTYPE html>
<html>
 
  <body>
    <script>
      let age = 60
       let result = (age > 59) ?"Senior Citizen" : "Not a Senior Citizen";
       console.log(result);
    </script>
  </body>
</html>
```

***Output**:
>Senior Citizen


</details>

















<details>                                                                                                                 
  <summary>Difference between Pre-Increment Operator and Post-Increment Operator?</summary>

   **Pre-Increment Operator**: A Variable is **prefix(++variable)** with increment operator is called Pre-Increment Operator.

   In Pre-Increment Operator it `increase the value of variable by 1 first` and then use it .

   ```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Pre-Increment Operator</title>
    <script>
      let a=25;
      let result = ++a;
      console.log(result)
      console.log(a)
    </script>
  </head>
</html>
```
**Output**:
>26<br/>
 26


 **Post-Increment Operator**: A Variable is **suffix(variable++)** with increment operator is called Post-Increment Operator.

   In Post-Increment Operator it `uses the current variable value` first and then it increase the value of variable by 1 first .

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Post-Increment Operator</title>
    <script>
      let a=25;
      let result = a++;
      console.log(result)
      console.log(a)
    </script>
  </head>
</html>
```
**Output**:
>25<br/>
26

</details>
