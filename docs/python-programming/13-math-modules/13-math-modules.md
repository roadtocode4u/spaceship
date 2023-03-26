---
title: Math Modules
description: "Math Modules"
hide_table_of_contents: true
---

## math.ceil() Method

**Program :**
```python showLineNumbers="true" title="math module.py"
import math
num = 19.1
newNumber = math.ceil(num)
print(newNumber)
```
**Output**
>20

In the above example we are import `math` module create one variable that is num and in that variable stored the value is `19.1` again we are create one variable that is `newNumber` here we added `math.ceil()` pass in their `num` variable. The `ceil` is round a number upward to its nearest integer and in next line print `newNumber` vaiable.

## math.floor() Method

**Program :**
```python showLineNumbers="true" title="math module.py"
import math
num = 9.6
newNumber  = math.floor(num)
print(newNumber)
```
**Output**
>9

In the above example we are import `math` module create one variable that is num and in that variable stored the value is `9.6` again we are create one variabe that is `newNumber` here we added `math.floor()` pass in their `num` variable. The `floor` is round a number down to its nearest integer and in next line print `newNumber` vaiable.

## math.sqrt() Method

**Program :**
```python showLineNumbers="true" title="math module.py"
import math
num = int(input("Enter Number : "))
ans = math.sqrt(num)
print(ans)
```
**Output**
>Enter Number : 64<br/>
>8.0

In the above example we are import `math` module create one variable that is num in their variable taking input from user and again we are create one new variable that is `ans` here we added `math.sqrt()` pass in their num variable. The `sqrt` is find the square root of different numbers. and in next line print `ans` vaiable.

## math.pi Constant

**Program :**
```python showLineNumbers="true" title="math module.py"
import math
print(math.pi)
```
**Output**
>3.141592653589793

In the above example we are import `math` module and print the `math.pi` value.