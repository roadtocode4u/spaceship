---
title: Taking Input from User
description: "Taking Input from User"
hide_table_of_contents: true
---

 ### End Variable In Python

 ``` python showLineNumbers="true"
 print("Good Evening" , end="/n")
 print("Hello Everyone")
```

 **Output**
 >Good Evening <br/>
 >Hello Everyone
 
 ``` python showLineNumbers="true"
 print("Good Evening" , end=" ")
 print("Hello Everyone")
```

 **Output**
 >Good Evening 
 >Hello Everyone

 ### What is the format () function in Python?

The Python format () function formats strings according to the position.

For Example :

```python showLineNumbers="true"
x="Sakshi"
y=21
dob= "07/10/2001"
print("Hello {} .Your Age is {} .Your DOB is {}". format(x,y,dob))
```
 **Output**
 >Hello Sakshi. Your Age is 21. Your DOB is 07/10/2001.

``` python showLineNumbers="true"
x="Sakshi"
y=21
dob= "07/10/2001"
print("Hello {place1} .Your Age is {place2} .Your DOB is {place3}". format(place3=dob,place2=y,place1=x))
```

**Output**
 >Hello Sakshi. Your Age is 21. Your DOB is 07/10/2001.

 ## User Input & Type Casting in Python

 ### User Input

 Python allows for user input. That means we are able to ask the user for input. input()=To take input from user.

 For Example :

```python showLineNumbers="true"
name=input("Enetr Yourname :")
print(name)
 ```

 **Output**
 >Enter Yourname : Sakshi <br/>
 >Sakshi

 Formatting Output

 ```python showLineNumbers="true"
name=input("Enetr Yourname :")
print("Good Evening {}".format(name))
 ```
 **Output**
 >Enter Yourname : Sakshi <br/>
 >Good Evening Sakshi .

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
