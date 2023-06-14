---
title: Split And Length Function Multiline String
description: " Split And Length function Multiline String"
hide_table_of_contents: true
---

### Spilt Function

The `split()` function splits a string into a list.

**Example :**

```py
sentence="My Name is Harshda".split()
print(sentence)
```

**Output**

> ['My', 'Name', 'is', 'Harshda']

**Example Explanation :**

In the above example we can create one variable and name that variable is `sentence`then we will stored the string of that variable is `My Name is Harshda` and we can use split function then the split function are use to divide the small parts of sentence and the split function are create sentence in a list.

**Another example :**

```py
a, b = input("Enter two values").split()
print("a = ",a)
print("b = ",b)
```

**Output**

> Enter two values 2 5<br/>
> 2 5<br/>
> a = 2<br/>
> b = 5

**Example Explanation :**

In the above example we can stored two variable a,b and one input box using split function.

**Another example:**

```py
rate,quantity=input("Enter rate and quantity of pen").split()
bill=int(rate)*int(quantity)
print("bill :",bill)
```

**Output**

> Enter rate and quantity of pen 5 3<br/>
> 5 3 <br/>
> bill : 15

**Example Explanation :**

In the above example, we have declared two variables 1st is rate and 2nd is quantity. We are taking two inputs at a time from users then we use the `split()` function.

### Multiline String

You can print multiples lines then we enclosing that lines it in a triple quotes `""" """`.

**Example :**

```py
print("""
Twinkle, twinkle, little star,
How I wonder what you are.
Up above the world so high,
Like a diamond in the sky.
Twinkle, twinkle, little star,
How I wonder what you are!""")
```

**Output :**

> Twinkle, twinkle, little star,<br/>
> How I wonder what you are.<br/>
> Up above the world so high,<br/>
> Like a diamond in the sky.<br/>
> Twinkle, twinkle, little star,<br/>
> How I wonder what you are!<br/>

### String Operation

### Length Function

`len()` is a built-in function in python. You can use the `len()` functioon to get the length of the given string, array, list.

**Example :**

```py
student_name="Aarohi"
print(len(student_name))
```

**Output**

> 6

**Example explanation :**

In the above example, we create a variable student_name. We stored the `Aarohi` in the variable.`len()` function is used to calculate the length of the variable.

**Another Example :**

```py
sentence="My name is Harshda"
length=len(sentence)
print(length)
```

**Output**

> 18

### Slicing

A slice object is used to specify how to slice a sequence. You can specify where to start the slicing, and where to end.Index Starts from `0`.

**Syntax:**

```py
stringname[startindex:endindex]
```

```py
mystring="Road to Code"
print(mystring[0:4])
```

**Output**

> Road

**Example Explanation :**

In the above example the name of variable is `mystring` in that we stored one string `Road to Code`& in a second line we print mystring using a `slicing`. in a slicing the startindex is 0 and endindex is 4 that's why the output is start from 0 to 4 position. and always remember endindex position is end -1.

**Another Example :**

```py
mystring="Road to Code"
print(mystring[1:])
```

**Output**

> oad to Code

**Another Example :**

```py
mystring="Road to Code"
print(mystring[:8])
```

**Output**

> Road to

### in operator

The 'in' operator is used to check if a value exists in a sequence or not.

**Example "**

```py
mystring="Road to Code"
print("Road" in mystring)
```

**Output**

> True

```python
mystring="Dahi Puri"
print("Pani" in mystring)
```

**Output**

> False
