---
title: Conditional Statements
description: "Conditional Statements"
hide_table_of_contents: true
---

### Indentation
Indentation is a whitespace (space or tab) at the beginning of a line in a block of code to indicate scope of code

### if Statement
if statement allows for conditional execution of a statement based on the value of an expression.<br/>

**Syntax:**
 ```python
 if condition :
     statements-1
     statements-2
     .....
     .....
     statements-n
```

**Example:**
```python title="example 1"
a = 20
b = 10 
if a==b :
 print("A is equals to B")
```
 **Output:**
>A is Equals to B

In the above example, we are create a two variables `a`& `b`, in their stored values `20` & `10` respectively and check the `if statement` a==b if this condition is true the the output is `A is equals to B`.

### if--else Statements
if statement can have two outputs. the first output is if your comparison is `true`, the second if your comparison is `false` then output is only one.

**Syntax:**
```python
if condition :
     statements-1
     statements-2
     .....
     .....
     statements-n
else:
    statements-1
     statements-2
     .....
     .....
     statements-n
```

**Examples:**
```python title="example 1"
a = 20
b = 10 
if a==b :
  print("Equal")
else :
  print("Not Equal")
```
  **Output:**
 >Not Equal

In the above example, we are create a two variables `a`& `b`, in their stored values `20` & `10` respectively and check the `if-else statement` a==b if this condition is false so,the the output is `Not Equal`.


```python title="example 2"
a = 10
b = 30
if a>b :
  print("A is greater")
else :
  print("A is Not smaller")
```
**Output:**
>A is Not smaller

In the above example, we are create a two variables `a`& `b`, in their stored values `10` & `30` respectively and check the `if-else statement` a>b if this condition is false so,the the output is `A is Not smaller`.


```python title="example 3"
age = int(input("Enter Your age :"))
if age >= 18 :
  print("You are eligible for voting")
else:
  print("You are not eligible for voting")
```
**Output:**
>Enter Your age :15<br/>
>You are not eligible for voting

```python title="example 4"
num = int(input("Enter Number :"))
rem = num % 2
if rem == 0:
  print("Given number is Even")
else:
  print("Given number is Odd")
```
**Output:**
>Enter Number :9<br/>
>Given number is Odd

**Example: Write a program which asks user to enter rate and quantity of a product. Your program should calculate and display the the bill amount as rate * quantity. If bill amount is more than 500 discount of 20% on bill and less than 500 then discount of 5% on bill.**

```python title="example 5"
rate, quantity = input("Enter rate and quantity :").split()
bill = int(rate) * int(quantity)

if bill > 500:
  print("### 20% off ###")
  print("Actual Bill",bill)
  discount = (bill/100)*20
  print("Discount",discount)
  print("payble amount",bill-discount)

else:
  print("### 5% off ###")
  print("Actual Bill",bill)
  discount = (bill/100)*5
  print("Discount",discount)
  print("payble amount",bill-discount)
```
**Output:**
>Enter rate and quantity :20 50<br/>
>"### 20% off ###"<br/>
>Actual Bill 1000<br/>
>Discount 200.0<br/>
>payable amount 800.0

In the above program we create two variable `rate` and `quantity` and this variable we can give a input from user so we use `input()` function and this input function give message for user `Enter rate and quantity :` and in one `input()` we give multiple input so we use `spilt()` function. 

In next line we create one variable `bill` and this variable we store calculation of `int(rate) * int(quantity)` 

It first checks if the value of `bill` is greater than `500` using an `if statement`.
If the condition is `true`, then it prints `### 20% off ###` to indicate that a `20%` discount is being applied.
The program then prints the `actual bill` amount using the print function.
It calculates the `discount amount` by multiplying the `bill` amount with `20/100*(20%)`.
The program prints the discount amount and the payable amount after the discount by subtracting the discount amount from the actual bill amount.

If the value of bill is `less than or equal to 500`, the program prints `### 5% off ###` to indicate that a `5%` discount is being applied.
The program then follows the same steps as above to calculate and print the discount amount and the payable amount after the discount.

```python title="example 6"
rate, quantity = input("Enter rate and quantity :").split()
bill = int(rate) * int(quantity)
disc_per = 0

if bill > 500:
  disc_per = 20
else:
  disc_per = 5

discount = (bill/100)*disc_per
print("### {}% ###".format(disc_per))
print("Actual Bill :",bill)
print("Discount :",discount)
print("Payble amount", bill-discount)
```
**Output:**
>Enter rate and quantity :5 10<br/>
>"### 5% ###"<br/>
>Actual Bill : 50<br/>
>Discount : 2.5<br/>
>Payable amount 47.5<br/>

## If else Ladder 

Python elif is used to execute a continuous chain of conditional logic ladder. In elif, there are multiple conditions and the corresponding statements as a ladder.

**Syntax**

```py
if condition-1:
  statements-1
  statements-2
elif condition-2:
  statements-1
  statements-2
elif condition-3:
  statements-1
  statements-2
elif condition-4:
  statements-1
  statements-
else:
  statements-1
  statements-2
```

**Code:**

```py title="if-else.py" showLineNumbers="true"
num = int(input("Enter number from 1 to 5 :"))
if num==1:
  print("You selected option 1")
elif num==2:
  print("You selected option 2")
elif num==3:
  print("You selected option 3")
elif num==4:
  print("You selected option 4")
elif num==5:
  print("You selected option 5")
else :
  print("You selected wrong input")
```

**Output:**

>Enter number from 1 to 5 :5 <br/>
>You selected option 5

In the above example we create one `num` variable and in that variable we give input number from the user and checks whether the number is between `1 to 5`. If the input is within the range, it displays the corresponding message, and if the input is out of range, it displays `You selected wrong input`.

**Code:**

```py title="if-else.py" showLineNumbers="true"
name = input("Enter fruits or vegetable name :")
if name=="onion":
  print("🧅")
elif name=="apple":
  print("🍎")
elif name=="banana":
  print("🍌")
elif name=="pineabpple":
  print("🍍")
else:
  print("Not avilable")
```

**Output:**

>Enter fruits or vegetable name :orange <br/>
>Not available

**Example: Write a program to take input for marks of 5 subject and display the grade.** <br/>

💡 HINT : Per=(total/500)*100 <br/>

If the percentage greater than 90 “Grade: A” is printed. <br/>
If the percentage greater than 80 “Grade: B” is printed. <br/>
If the percentage greater than 70 “Grade: C” is printed. <br/>
If the percentage greater than 60 “Grade: D” is printed. <br/>
otherwise , Fail is Printed.

**Code:**

```py title="if-else.py" showLineNumbers="true"
marathi,hindi,english,math,science = input("Enter marks of 5 subject :").split()
sum = int(marathi) + int(hindi) + int(english) + int(math) + int(science)
per = (sum/500)*100
print("Percentage :",per)

if per>=90:
  print("Grade A")
elif per>=80:
  print("Grade B")
elif per>=70:
  print("Grade C")
elif per>=60:
  print("Grade D")
else:
  print("FAIL")
```

**Output:**

>Enter marks of 5 subject :40 30 45 35 38 <br/>
>Percentage : 37.6 <br/>
>FAIL


In the above example, we takes input from the user in the form of marks obtained in five subjects `Marathi, Hindi, English, Math, and Science`. It then calculates the  sum  marks obtained and the   `percentage` obtained by the student. Finally, based on the percentage obtained, it prints the grade of the student.

But This case If the condition sequence will change , then output will also change.👇👇 Because we have not set any boundary conditions.

```py title="if-else.py" showLineNumbers="true"
marathi,hindi,english,math,science= input("Enter Marks of 5 Subject : ").split()
sum=int(marathi)+int(hindi)+int(english)+int(math)+int(science)
per=(sum/500)*100
print("Percentage :",per,"%")
if per>=60:
  print("Grade D")  
elif per>=70:
  print("Grade C")
elif per>=80:
  print("Grade B")
elif per>=90:
  print("Grade A")
else:
  print("FAIl")
```

So, Give Boundary conditions of the above Program. After give a boundary condition then sequence does not matter and our output also not change.

**Code:**

```py title="if-else.py" showLineNumbers="true"
marathi,hindi,english,math,science= input("Enter Marks of 5 Subject : ").split()
sum=int(marathi)+int(hindi)+int(english)+int(math)+int(science)
per=(sum/500)*100
print("Percentage :",per,"%")
if per>=60 and per<70:
  print("Grade D")
elif per>=70 and per<80:
  print("Grade C")
elif per>=80 and per<90:
  print("Grade B")
elif per>=90: and per<=100:
  print("Grade A")
else:
  print("FAIl")
```

**Output:**

>Enter Marks of 5 Subject : 91 93 93 98 85 <br/>
> Percentage : 92.0 %  <br/>
>Grade A 


## Nested if 

A nested if is a flow control statement that’s the target of another if-statement. By nested-if statements, we mean to use an if-statement inside another if-statement.

**Syntax:**

```python title="Syntax.py" showLineNumbers="true"
if condition-1:
if condition-2:
  if condition-n:
    statement-1
    statement-2

    statement-n
```

**Example:**

```python title="Nested if-else statement.py" showLineNumbers="true"
jee = 110
hsc = 50

if hsc>60:
  print("Congrats you clear HSC")
  if jee>120:
    print("Admmision Granted ")
  else: 
    print("Sorry you did not cleared JEE")
else:
  print("Sorry You need to imporoved your HSC Score")
```
**Output**
>Sorry You need to imporoved your HSC Score

The code checks if a student has cleared their HSC with a score greater than `60`. If they have, it checks if their JEE score is greater than `120`. If it is, the program prints "Admission Granted". If the HSC score is less than or equal to `60`, the program prints "Sorry You need to imporoved your HSC Score". If the JEE score is less than or equal to `120`, the program prints "Sorry you did not cleared JEE".

**Example:**
>Write a program to Find the Largest Number Among Three Numbers by using if,elif statement.

```python title="if,elif statement.py" showLineNumbers="true"
a = int(input("Enter a: "))
b = int(input("Enter b :"))
c = int(input("Enter c :"))

if a>b and a>c:
  print("a is largest")
elif b>a and b>c:
  print("b is largest")
else:
  print("c is largest")
```

**Output**
>Enter a: 300 <br/>
>Enter b :500 <br/>
>Enter c :100 <br/>
>b is largest <br/>

In the above example, we take input from the user in the form of numbers obtained in three numbers `a`, `b` & `c`. we are applying here the If else Ladder statement if `a>b` and `a>c` true so, print a is largest, `b>a` and `b>c` true so, b is largest otherwise print `else` statement c is largest.

**Example:**
>Write a program to Find the Largest Number Among Three Numbers by using Nested-if statement.

```python title="Nested-if statement.py" showLineNumbers="true"
a = int(input("Enter a: "))
b = int(input("Enter b :"))
c = int(input("Enter c :"))

if a>b:
  if a>c:
    print("a is largest")
  else:
    print("c is largest")
else:
  if b>c:
    print("b is largest")
  else:
    print("c is largest")
```

**Output**
>Enter a: 10 <br/>
>Enter b :100 <br/>
>Enter c :100 <br/>
>c is largest <br/>

Now supply inputs say 10 as first number, then enter 20 as second number, and finally enter 30 as third number, we are apply here nested-if-else statement firstly, check if condition if `a>b` is true then  enter in , thier is again `if-else` condition . if this condition will be true then print if statement otherwise else statement .  if condition if `a>b` is false that time print else condition its have also `if-else` condition . 
