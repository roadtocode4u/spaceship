---
title: User Input & Type Casting
description: "User Input & Type Casting"
hide_table_of_contents: true
---

### User Input

Python allows for user input. That means we can ask the user for input. `input()` To take input from the user.

**Example :**

```python showLineNumbers="true"
name = input("Enter the Student Name :")
print(name)
```

**Output :**

> Enter the Student Name : Yogita <br/>
> Yogita

**Example Explanation :**

In the above example, we are taking input from the user with the help of the `input` function and assign to the variable `name` and printing `name` using the `print()` function. That `name` value is **Yogita**.

**Showing Output in Formatting way :**

```python showLineNumbers="true"
name = input("Enter Your Name :")
print("My name is {}".format(name))
```

**Output :**

> Enter Your Name : Yogita <br/>
> My name is Yogita.

**Example Explanation :**

In the above example, we are taking input from the user with the help of the `input` function and assign to the variable `name` and print a message `My name is` `{}`, this `{}` means `format()` function. We assign the `name` variable in the `format()` function. So output is **My name is Yogita.**

### Type Casting

Type Casting is the method to convert the variable data type into a certain data type for the operation required to be performed by users.

**Example :**

```python showLineNumbers="true"
val1 = int(input("Enter the Value 1:"))
val2 = int(input("Enter the Value 2:"))
sum = val1 + val2
print(sum)
```

**Output :**

> Enter the Value 1 : 100 <br/>
> Enter the Value 2 : 10 <br/>
> 110

**Example Explanation :**

In the above example,<br/>In 1st line, we are taking input from the user with the help of the `input` function and type casting this input into the `int` data type and assign to the variable `val1`. <br/>In the 2nd line, we typecast the input into the `int` data type and assign it to the variable `val2`. <br/>In the 3rd line, we are adding both the variables `val1` and `val2` and assign them to the variable `sum`.<br/> In the 4th line, we print the variable `sum`.

**Another Example of another way to Type Casting :**

```python showLineNumbers="true"
val1 = int(input("Enter the Value 1:"))
val2 = int(input("Enter the Value 2:"))
sum = int(val1) + int(val2)
print(sum)
```

**Output :**

> Enter the Value 1 : 10 <br/>
> Enter the Value 2 : 10 <br/>
> 110

**Example Explanation :**

In the above example, we are taking two inputs from the user with the help of the `input` function and assigning them to the variable `val1` and `val2` respectively. After that, we are adding both the variables `val1` and `val2` by typecasting them into the `int` data type and assigning it to the variable `sum`.
Now we print the variable `sum`.

**Show output in Formatting Way :**

```python showLineNumbers="true"
val1 = input("Enter value 1 :")
val2 = input("Enter value 2 :")
sum = int(val1) + int(val2)
print("Sum of { } and { } is { }".format(val1,val2,sum))
```

**Output :**

> Enter value 1 : 25 <br/>
> Enter value 2 :15 <br/>
> Sum of 25 and 15 is 40 .

**Example Explanation :**

In the above example, we are taking two inputs from the user with the help of the `input` function and assigning them to the variable `val1` and `val2` respectively. After that, we are adding both the variables `val1` and `val2` by typecasting them into the `int` data type and assigning it to the variable `sum`. Now we print Sum of `{}` and `{}` is `{}`. That `{}` means `format()` function.
