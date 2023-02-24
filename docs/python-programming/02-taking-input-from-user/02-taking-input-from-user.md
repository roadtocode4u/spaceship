---
title: Taking Input from User
description: "Taking Input from User"
hide_table_of_contents: true
---

 ### End Variable In Python
 

 ``` python showLineNumbers="true"
 print("Good Evening" , end="\n")
 print("Hello Everyone")
```

 **Output**
 >Good Evening <br/>
 >Hello Everyone
 
 In the above example, In the First line, we print `Good Evening` and apply the end variable `\n`. which is provide  the new line character. In the second line, we  print `Hello Everyone`.

 ``` python showLineNumbers="true"
 print("Good Evening" , end=" ")
 print("Hello Everyone")
```

 **Output**
 >Good Evening 
 >Hello Everyone

 In the above example, In the First line, we print `Good Evening` and apply the end variable `" "`. which is provide  the space between words. In the second line, we  print `Hello Everyone`.

 ### What is the format () function in Python?

The Python `format()` function formats strings according to the position. `format()` function are used to inject the variable and you can inject the variables then we use `{}`.

For Example :

```python showLineNumbers="true"
x="Sakshi"
y=21
dob= "07/10/2001"
print("Hello {} .Your Age is {} .Your DOB is {}". format(x,y,dob))
```
 **Output**
 >Hello Sakshi. Your Age is 21. Your DOB is 07/10/2001.

In the above example, In the 1st line we can create 1st variable  `x`, In this variable, store the `Sakshi` value . In 2nd line create 2nd variable `y`, In this variable, store the `21` value and In 3rd line create 3rd variable `dob`, In this variable, store the `07/10/2001` value . <br/><br/>
In 4th line we print one message using a `format()` function in the message we can give `{}` for inject or fit our variables and in the `format()` function we can pass particular variable name. 1st `{}` will inject the variable `x` , 2nd `{}` will inject the variable `y` and 3rd `{}` will inject the variable `dob`.

If position mismatched :

 ```python showLineNumbers="true"
x="Sakshi"
y=21
dob= "07/10/2001"
print("Hello {} .Your Age is {} .Your DOB is {}". format(y,dob,x))
```
 **Output**
 >Hello 21. Your Age is 07/10/2001. Your DOB is Sakshi .

In the above example, it is clear that the Position of varibles `x`, `y` and `dob` are mismatched inside the `format()` function. So, output also gets mismatched. <br/>
The solution for this problem is given below,

``` python showLineNumbers="true"
x="Sakshi"
y=21
dob= "07/10/2001"
print("Hello {place1} .Your Age is {place2} .Your DOB is {place3}". format(place3=dob,place2=y,place1=x))
```

**Output**
 >Hello Sakshi. Your Age is 21. Your DOB is 07/10/2001.

 In the above Program, we assign place for each variable . Then each place goes to that particular position and due to this output will not mismatched.

 ## User Input & Type Casting in Python

 ### User Input

 Python allows for user input. That means we are able to ask the user for input. input()= To take input from user.

 For Example :

```python showLineNumbers="true"
name=input("Enetr Yourname :")
print(name)
 ```

 **Output**
 >Enter Yourname : Sakshi <br/>
 >Sakshi

 In above example, we are taking input from user with the help of `input` keyword and assign to the variable `name` and print `name` using `print()` function. That `name` value is Sakshi.

 Formatting Output

 ```python showLineNumbers="true"
name=input("Enetr Yourname :")
print("Good Evening {}".format(name))
 ```
 **Output**
 >Enter Yourname : Sakshi <br/>
 >Good Evening Sakshi .

 In the above example, we are taking input from the user with the help of the `input` keyword and assign to the variable `name` and print a message `Good Evening` `{}`, this `{}` means `format()` function. We are assign `name` variable in `format()` function. So output is Good Evening Sakshi.

 ### Type Casting

Type Casting is the method to convert the variable data type into a certain data type in order to the operation required to be performed by users.

 For Example :
```python showLineNumbers="true"
val1=int(input("Enter val1:"))
val2=int(input("Enter val2:"))
sum=val1+val2
print(sum)
```
 **Output**
 >Enter val1: 14 <br/>
 >Enter val2: 10 <br/>
 >24

 In the above example, In 1st line, we are taking input from the user with the help of the `input` keyword and type casting this input into the `int` data type and assign to the variable `val1`. In the 2nd line, we typecast the input into the `int` data type and assign it to the variable `val2`. <br/>
In the 3rd line, we are adding both the variables `val1` and `val2` and assign them to the variable `sum`. In the 4th line we print the variable `sum`. 

```python showLineNumbers="true"
val1=(input("Enter val1:"))
val2=(input("Enter val2:"))
sum=int(val1) + int(val2)
print(sum)
```
**Output**
 >Enter val1: 12 <br/>
 >Enter val2: 5 <br/>
 >17

  In the above example, we are taking two inputs from the user with the help of the `input` keyword and assigning them to the variable `val1` and `val2` respectively. After that, we are adding both the variables `val1` and `val2` by typecasting them into the `int` data type and assigning it to the variable `sum`. 
  Now we print the variable `sum`.

 Formatting Output
```python showLineNumbers="true"
val1=(input("Enter val1:"))
val2=(input("Enter val2:"))
sum=int(val1) + int(val2)
print("sum of {} and {} is {}".format(val1,val2,sum))
```
**Output**
>Enter val1: 5 <br/>
>Enter val2: 15 <br/>
>sum of 5 and 15 is 20 .

 In the above example, we are taking two inputs from the user with the help of the `input` keyword and assigning them to the variable `val1` and `val2` respectively. After that, we are adding both the variables `val1` and `val2` by typecasting them into the `int` data type and assigning it to the variable `sum`. 
Now we print sum of `{}` and `{}` is `{}` . That `{}` means `format()` function.