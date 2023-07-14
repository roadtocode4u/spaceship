---
title: Function
description: "Function"
hide_table_of_contents: true
---

A `function` is a block of code which only runs when it is called. You can pass data in a function called `parameter`. In Python a function is defined using the `def` keyword.

**Syntax:**

```py
def function_name():
```

**Example:**

```py
def greeting():
  print("Good Morning")
  print("Good Evening")
  print("Good Night")
greeting()
greeting()

```

**Output :**

> Good Morning<br/>
> Good Evening<br/>
> Good Night<br/>
> Good Morning<br/>
> Good Evening<br/>
> Good Night<br/>

**Example Explanation :**

In the above example, in 1st line we can create a function using `def` keyword. The name of that function is `greeting()`. In the 2nd, 3rd and 4th line we print message. In the 5th line we can called a function `greeting()`.

**Example :**

```py
def fun(val1):
  print("input :",val1)
fun(10)
fun(20)
fun(30)
```

**Output :**

> input : 10 <br/>
> input : 20 <br/>
> input : 30 <br/>

**Example Explanation :**

In the above example, in 1st line we can create a function. The name of that function is `fun` then we can pass a parameter `val1`. In 2nd line we can print output. In 3rd line we can called a function and pass the parameter `10`. In 4th line we can called a function and pass the parameter `20`. In 4th line we can called a function and pass the parameter `30`.

**Write a program to find square of number using function.**

```py
def cal_square(num):
  square = num * num
  print("Square :",square)
cal_square(10)
cal_square(25)
```

**Output :**

> Square : 100
> Square : 625

**Example Explanation :**

In the above example, in 1st line we can create a function. The name of that function is `cal_square` then we can pass a parameter `num`. In the 2nd line we create a variable. The name of that variable is `sq` in that sq function we can stored the multiplication of number. In 3rd line we can print the output. In the 4th and 5th line we can called a function and pass the parameter `10` and `25`.

### Return Values:

To return a value from a function by using the `return` statement.

**Example :**

```py
def cal_square(num):
  sq = num * num
  return sq

ans = cal_square(5)
print(ans)
```

**Output :**

> 25

**Example Explanation :**

In the above example, we can create a function. The name of that function is `cal_square`. In the 2nd line we create a variable. The name of that variable is `sq` in that sq function we can stored the multiplication of number. In the 3rd line we used `return` statment. That `return` statment return a square of number to the `cal-square` function. In the 4th line we create a variable the name of that variable is `ans`. In `ans` variable we can called a function and pass the parameter `5`. In the 5th line we can print ans.

**Take input from user**

**Example :**

```py
def cal_square():
  num = int (input("Enter num: "))
  sq = num * num
  return sq

ans = cal_square()
print(ans)
```

**Output :**

> Enter num: 20
> 400

**Example Explanation :**

In the above example, we can create a function. The name of that function is `cal_square`. In the 2nd line we can create a variable `num`. In that variable we take a input from user. In the 3rd line we create a variable. The name of that variable is `sq` in that sq function we can stored the multiplication of number. In the 4th line we used `return` statment. That `return` statment return a square of number to the `cal-square` function. In the 5th line we can create a variable the name of that variable is `ans`. In `ans` variable we can called a function and pass the parameter `5`. In the 6th line we can print ans.

**Example :**

```py
def add_two(num1, num2):
  sum = num1 + num2
  print(sum)
add_two(10,20)
```

**Output :**

> 30

In the above example, in 1st line we can create a function. The name of that function is `add_two`. In the 2nd line we can create variable `sum`. In that variable we stored a addition of two numbers. In the 3rd line print a sum. In the 4th line we can called a function and pass the parameter `10 and 20`.

## Simple Interest 

> Write a program to find simple interest using function all cases .

💡 HINT : Simple Interest = (P x T x R)/100
Where,
P is the principle amount
T is the time and
R is the rate

👉Answer Of this program based on following 4 ways:

**1. No Arguments And No Return:**

**Program :**

```python showLineNumbers="true" title="No Arguments And No Return.py"
def cal_si():
  p = int(input("Enter Principle : "))
  r = int(input("Enter Rate : "))
  t = int(input("Enter time : "))
  si = p*r*t/100
  print(si)
cal_si()
```

**Output**

> Enter Principle : 5000 <br/>
> Enter Rate : 3<br/>
> Enter time : 2<br/>
> 300.0

In the above example, we create one function that's name is `cal_si` in that function we are create three variables and taking input from user for `p` for amount, `r` for rate, `t` for time & i`si` in last storing value of this variables in the `si` variable and print variable.

**2. Arguments but No Return:**

**Program :**

```python showLineNumbers="true" title="Arguments but No Return.py"
def cal_si(p,r,t):
  si = p*r*t/100
  print(si)

Amount = int(input("Enter Amount : "))
Rate = int(input("Enter Rate : "))
Time = int(input("Enter Time : "))
cal_si(Amount, Rate, Time)
```

**Output**

> Enter Principle : 5000 <br/>
> Enter Rate : 3<br/>
> Enter time : 2<br/>
> 300.0

In the above example, we are we are create `cal_si` function in that function pass three parameter `p`, `r` and `t` . we are crete three variable also name are `Amount`,`Rate` & `time` in that variable input taking from users, and storing their value in variable that's variable name is `si` . when we are call `cal_si` function in their function pass three parameter values. ie `Amount`,`Rate` & `time` .

**3. No Arguments but Return:**

**Program :**

```python showLineNumbers="true" title="No Arguments but Return.py"
def cal_si():
  p = int(input("Enter Principle : "))
  r = int(input("Enter Rate : "))
  t = int(input("Enter time : "))
  si = p*r*t/100
  return si

ans = cal_si()
print(ans)
```

**Output**

> Enter Principle : 5000 <br/>
> Enter Rate : 3<br/>
> Enter time : 2<br/>
> 300.0

In the above example, we create one function that's name is `cal_si` in that function we are create three variables and taking input from user for `p` for amount, `r` for rate, `t` for time & `si` in last storing value of this variables in the `si` variable and return `si`. this `si` value stored in `cal_si` function so, we are storing this value in `ans` variable then in last print `ans` variable.

**4. Arguments And Return:**

**Program :**

```python showLineNumbers="true" title="Arguments And Return.py"
def cal_si(p, r, t):
  si = p*r*t/100
  return si

Amount = int(input("Enter Amount : "))
Rate = int(input("Enter Rate : "))
Time = int(input("Enter Time : "))
ans = cal_si(Amount,Rate, Time)
print(ans)
```

**Output**

> Enter Principle : 5000 <br/>
> Enter Rate : 3<br/>
> Enter time : 2<br/>
> 300.0

In the above example, we are create `cal_si` function in that function pass three parameter `p`, `r` and `t` . we are crete three variable also name are `Amount`,`Rate` & `time` in that variable input taking from users, and storing their value in variable that's variable name is `si` . then return `si` variable, this `si` value stored in `cal_si` function so, we are storing this value in `ans` variable in that fuction pass three parameter `Amount`, `Rate` & `Time` then in last print `ans` variable .

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

> How many times do you want to print :5<br/>
> 0<br/>
> 1<br/>
> 1<br/>
> 2<br/>
> 3<br/>
> 5<br/>
> 8

In the above example, we are taking create one variable that is `num` and taking input from the user. In the `f` variable we are storing value of `0` and `s` variable we are storing value of `1` then print `f` & `s`. The `for` statement initiates a loop that will repeat for a specified number of times, in this case, `num times`.

then we are creating `num` variable and in this variable storing value of addtion of `f & s`. In this `f` variable we are storing value of `s`. and `s` variable storing value of `num` then print this `num` variable.

```python showLineNumbers="true" title="example7.py"
def add_two(num1, num2):
  sum = num1 + num2
  print(sum)
add_two(10,20)
```

**Output**

> 30

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

> 30<br/>
> 10
