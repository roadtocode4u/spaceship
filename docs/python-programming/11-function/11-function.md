---
title: Function
description: "Function"
hide_table_of_contents: true
---

## Function
>Write a program to find simple interest using function all cases .

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
>Enter Principle : 5000 <br/>
>Enter Rate : 3<br/>
>Enter time : 2<br/>
>300.0

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
>Enter Principle : 5000 <br/>
>Enter Rate : 3<br/>
>Enter time : 2<br/>
>300.0

In the above example, we are we are create `cal_si` function in that function pass three parameter `p`, `r` and `t` . we are crete three variable also name are `Amount`,`Rate` & `time` in that variable input taking from users, and storing their value in variable that's variable name is `si` . when we are call `cal_si` function in their function pass three parameter values. ie  `Amount`,`Rate` & `time` .

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
>Enter Principle : 5000 <br/>
>Enter Rate : 3<br/>
>Enter time : 2<br/>
>300.0

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
>Enter Principle : 5000 <br/>
>Enter Rate : 3<br/>
>Enter time : 2<br/>
>300.0

In the above example, we are create `cal_si` function in that function pass three parameter `p`, `r` and `t` . we are crete three variable also name are `Amount`,`Rate` & `time` in that variable input taking from users, and storing their value in variable that's variable name is `si` . then return `si` variable, this `si` value stored in `cal_si` function so, we are storing this value in `ans` variable in that fuction pass three parameter `Amount`, `Rate` & `Time` then in last print `ans` variable .
