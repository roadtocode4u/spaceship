---
title: Nested if Statement
description: "Nested if Statement"
hide_table_of_contents: true
---
## Nested if-Statement in Python

### Nested if
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

In the above example, we create two variables `jee` and `hsc`, storing values `110` and `50` in their variable. 
then we apply the if-else statement if the `hsc>60` condition is true that time we enter in the `if` condition and again we apply the `if-else statement` in their this condition also verified to regarding marks and print a valid statement. otherwise, go to the `else` part and print the `else` information. 

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
