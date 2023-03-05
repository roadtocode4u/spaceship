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
