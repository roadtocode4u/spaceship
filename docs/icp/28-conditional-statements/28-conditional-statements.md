---
title: Conditional Statements
description: "Conditional Statements"
hide_table_of_contents: true
---

## Conditional Statements

 A conditional statement is a programming construct that allows you to execute different blocks of code based on whether a certain condition is true or false. 

### 1. if

 **Syntax**

 ```js
if(condition)
{
    //statement
}
 ```

 **Code**

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

 >You are eligible for voting...

 In the above program value `20` to the variable `age`, and then checks if `age` is greater than `18` using an if statement. If the condition is `true`, the code inside the block is executed, which in this case is a call to the `document.write()` function to display the message `"You are eligible for voting..."` on the web page.

 ### 2. if-else

 **Syntax**

 ```js
if(condition)
{
    //statement
}
else
{
    //statement
}
 ```

**Code**

 ```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const age = 16;

	  if(age>18)
	  {
		document.write("You are eligible for voting...")
	  }
	  else
	  {
		document.write("You are not eligible for voting...")
	  }
    </script>
  </head>
  <body></body>
</html>
 ```

 **Output**

>You are not eligible for voting...

In this program, the age is assigned to a constant variable `age` with the value of `16`. The if statement checks if the `age is greater than 18`. If the condition is `true`, it will execute the `document.write()` statement with the message `You are eligible for voting...`. If the condition is `false`, it will execute the else block with the message `You are not eligible for voting...`.

Since the `age` value in this case is `16`, which is less than `18`, the output of the program would be `You are not eligible for voting...`


**Program : Use if-else and write JS program to check if given number is positive or negative.**

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
     const num = parseInt(prompt("Enter any Number: "));

	 if(num<0)
	 {
		document.write("Negative Number");
	 }
	 else
	 {
		document.write("Positive Number")
	 }
    </script>
  </head>
  <body></body>
</html>
```

 ### 2. if-else-ladder

 **Syntax**

 ```js
if(condition A)
{
    //statement
}
else if (condition B)
{
    //statement
}
else if (condition C)
{
    //statement
}
else
{
  //statement
}
 ```

**Code**

 ```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const num = 1;

	  if(num==1)
	  {
		document.write("One")
	  }
	  else if(num==2)
	  {
		document.write("Two")
	  }
    else if(num==3)
    {
    document.write("Three")
    }
    else
    {
      document.write("Not Match")
    }
    </script>
  </head>
  <body></body>
</html>
 ```

 **Output**

>One

This code will output `One` because the value of the variable `num` is `1` and the first if statement checks if `num` is equal to `1`. Since this condition is `true`, the code inside the first if statement will execute, which is to write `One` to the document.

If the value of `num` were `2`, the second else if statement would execute and the code would write `Two` to the document. Similarly, if `num` were `3`, the third else if statement would execute and the code would write `Three` to the document. If the value of `num` were anything other than 1, 2, or 3, the else statement would execute and the code would write `Wrong input` to the document.

## nested-if 

A nested if statement is a conditional statement that is nested within another conditional statement. This is useful when you need to test multiple conditions in order to execute a block of code.

**Code**

 ```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
    const jeeMain = 130;
    const jeeAdv = 120;

    if(jeeMain>120 && jeeAdv>100)
    {
      document.write("JEE-Main Cleared");
      if(jeeAdv>80)
      {
        document.write("<br/> JEE-Adv Cleared");
      }
      else
      {
        document.write("<br/> JEE-Main Cleared and JEE-Adv Not Cleared");
      }
    }
    else
    {
        document.write("Admission Rejected");
    }
    </script>
  </head>
  <body></body>
</html>
 ```

 **Output**

>JEE-Main Cleared <br/>
>JEE-Adv Cleared


In the above code defines two constants, `jeeMain` and `jeeAdv`, that store the scores obtained by a student in JEE-Main and JEE-Advanced exams, respectively.
The code then uses an if statement to check whether the student has cleared the JEE-Main exam with a score of more than `120` and the JEE-Advanced exam with a score of more than `100`.
If the student has cleared both exams, the code writes `JEE-Main Cleared` to the document using `document.write()`.
The code then checks if the student has cleared the JEE-Advanced exam with a score of more than 80.
If the student has cleared JEE-Advanced, the code writes `JEE-Adv Cleared` to the document on a new line using `document.write()`.
If the student has not cleared JEE-Advanced, the code writes `JEE-Main Cleared and JEE-Adv Not Cleared` to the document on a new line using `document.write()`.
If the student has not cleared  JEE-Main or JEE-Advanced  , the code writes `Admission Rejected` to the document using `document.write()`.