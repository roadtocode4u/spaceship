---
title: Function
description: "Function"
hide_table_of_contents: true
---

## Function
A function is a block of code which only runs when it is called.You can pass data, known as parameters, into a function.In Python a function is defined using the def keyword.

```
python
def function_name():
```

```python showLineNumbers="true" title="example1.py"
num = int(input("How many times do you want to print :"))
f = 0
s = 1
print(f)
print(s)
for i in range(num):
  num = f + s
  f = s
  s = num
  print(num)
```
**Output**
>How many times do you want to print :5<br/>
>0<br/>
>1<br/>
>1<br/>
>2<br/>
>3<br/>
>5<br/>
>8

 In the above example, we are taking create one variable that is `num` and taking input from the user. In the `f` variable  we are storing value of `0` and `s` variable we are storing value of `1` then print `f` & `s`.  The `for` statement initiates a loop that will repeat for a specified number of times, in this case, `num times`.

 then we are creating `num` variable and in this variable storing value of addtion of `f & s`. In this `f` variable we are storing value of `s`. and `s` variable storing value of `num` then print this `num` variable.

```python showLineNumbers="true" title="example2.py"
def greeting():
  print("Good Evening")
  print("Good Morning")
greeting()
greeting()
greeting()
```
**Output**
>Good Evening<br/>
>Good Morning<br/>
>Good Evening<br/>
>Good Morning<br/>
>Good Evening<br/>
>Good Morning

In the above example, we are create `greeting()`function. In tha last that function will be defined, then we get output is  `Good Evening` & `Good Morning`.

```python showLineNumbers="true" title="example3.py"
def fun(val1):
  print("input",val1)
fun(10)
fun(20)
fun(30)
```
**Output**
>input 10<br/>
>input 20<br/>
>input 30

In the above example, we are create `fun()`function. in this function we are pass one parameter `val1`. When we are defined function with the parameter.


```python showLineNumbers="true" title="example4.py"
def cal_square(num):
  square = num * num
  print("Square :",square)

cal_square(15)
```
**Output**
>Square : 225

In the above example, we are create `cal_square`function. in this function we are pass one parameter `num`. In this function we are create a one variable `square` that variable `num * num`. When we are defined function `cal_square` with the parameter `15`.

```python showLineNumbers="true" title="example5.py"
def cal_square(num):
  square = num * num
  return square

ans = cal_square(15)
print(ans)
```
**Output**
>225

In the above example, we are create `cal_square`function. in this function we are pass one parameter `num`. In this function we are create a one variable `square` that variable `num * num`. and return `square` variable. Again we are declare variable `ans` and storing value of `cal_square` function that's parameter pass tha value of `15`, print `ans` variable.

```python showLineNumbers="true" title="example6.py"
def cal_square():
  num = int(input("Enter Number :"))
  sq = num * num 
  return sq

ans = cal_square()
print(ans)
```
**Output**
>Enter Number :5<br/>
>25

In the above example, we are create `cal_square` function and taking input from the user. In this function we are create a one variable `sq` that variable `num * num`. and return `sq` variable. Again we are declare variable `ans` and storing value of `cal_square` function, print `ans` variable.

```python showLineNumbers="true" title="example7.py"
def add_two(num1, num2):
  sum = num1 + num2
  print(sum)
add_two(10,20)
```
**Output**
>30

In the above example, we are create `add_two`function. in this function we are pass two parameter `num1 & num2`. In this function we are create a one variable `sum` that variable `num1 + num2`. When we are defined function `add_two` with the parameter `10 & 20`.

```python showLineNumbers="true" title="example8.py"
def add_two(num1, num2):
  sum = num1 + num2
  sub = num1-num2
  return sum, sub
a, b = add_two(20, 10)
print(a)
print(b)
```
**Output**
>30<br/>
>10