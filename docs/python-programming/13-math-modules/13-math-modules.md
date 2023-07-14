---
title: Math Modules
description: "Math Modules"
hide_table_of_contents: true
---

The math modules function is used to perform mathematical operations. There are various math modules functions in python.

## math.ceil() Method

The `math.ceil()` method is used to round the number up to its nearest in the `upward direction`.

**Example :**

```py
import math
num = 16.1
newNumber = math.ceil(num)
print(newNumber)
```

**Output**

> 17

**Example explanation :**

In the above example, we can import the `math` module in the 1st line. In the 2nd line we can create one variable that is `num` and in that variable stored the value is `16.1` again we can create one variable that is `newNumber`. In that variable, we can add the `math.ceil()` method. And pass in that method the `num` variable. The `ceil` is rounding a number upward to its nearest integer and in the next line print `newNumber` variable.

## math.floor() Method

The `math.floor` method is used to round the number to its nearest in the `downward direction`.

**Example :**

```py
import math
num = 16.1
newNumber = math.floor(num)
print(newNumber)
```

**Output**

> 16

**Example explanation :**

In the above example, we can import the `math` module in the 1st line. In the 2nd line we can create one variable that is `num` and in that variable stored the value is `16.1` again we can create one variable that is `newNumber`. In that variable, we can add the `math.floor()` method. And pass in that method the `num` variable. The `floor` is rounding a number downward to its nearest integer and in the next line print `newNumber` variable.

## math.sqrt() Method

The `math.sqrt()` method returns the square root of the number.

**Example :**

```py
import math
num = int(input("Enter Number...."))
ans = math.sqrt(num)
print(ans)
```

**Output**

> Enter Number... 100<br/>
> 10

**Example explanation :**

In the above example, we can import the `math` module in 1st line. In the 2nd line we can create one variable that is `num` in their variable taking input from the user. And again we can create one new variable that is `ans` here we can added a `math.sqrt()` pass in their num variable. The `sqrt` finds the square root of different numbers. And in the next line print `ans` variable.

## math.pi Constant

The `math.pi` method is constant in the math module function.

**Example :**

```py
import math
print(math.pi)
```

**Output**

> 3.141592653589793

In the above example, we import `math` module and print the `math.pi` value.

## date time

The `datetime` module is use when you want to find current date and time.

**Example :**

```py
import datetime
currentDate = datetime.datetime.now()
print(currentDate)
```

**Output :**

> 2023-07-14 05:04:49.217909

**Example explanation :**

In the above example, we can import `datetime` module in the 1st line. In the 2nd line we can create one variable that is `currentDate`. In that variable we can use the `datetime.now()` module. That module returns the current date and time. In the 3rd line print`currentDate`.

**Another Example :**

```py
import datetime
currentDate = datetime.datetime.now()
print(currentDate)
print("Year :",currentDate.year )
print("month :",currentDate.month)
print("Day :", currentDate.day)
```

**Output :**

> 2023-07-14 05:12:23.635147 <br/>
> Year : 2023 <br/>
> month : 7 <br/>
> Day : 14 <br/>

**Example Explanation:**

In the above example, we can import `datetime` module in the 1st line. In the 2nd line we can create one variable that is `currentDate`. In that variable we can use the `datetime.now()` module. That module returns the current date and time. In the 3rd line print `currentDate`. In the 4th line we can print the `currentDate.year` that returns the current year. In the 5th line we can print the `currentDate.month` that returns the current month. In the 6th line we can print the `currentDate.day` that returns the current day.

## strf

The `strf` method is used to print a day.

**Example :**

```py
import datetime
print("Dayname :",currentDate.strftime("%a"))
```

**Output :**

> Fri

**Example explanation :**

In the above example, we can import the `datetime`. In the 2nd line we can print the `currentDate.strftime` method. That method returns current day. In that `strf` function we can used `%a` that returns the day in `short` name.

**Another Example :**

```py
import datetime
print("Dayname :",currentDate.strftime("%A"))
```

**Output :**

> Friday

**Example explanation :**

In the above example, we can import the `datetime`. In the 2nd line we can print the `currentDate.strftime` method. That method returns current day. In that `strf` function we can used `%A` that returns the day in `full` name.
