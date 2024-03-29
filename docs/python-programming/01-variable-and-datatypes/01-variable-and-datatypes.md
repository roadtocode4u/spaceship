---
title: Variable and Datatypes
description: "Variable and Datatypes"
hide_table_of_contents: true
---

## What is a Variable

In programming, a variable is a named container that is used to store data. It is a way to refer to a memory location that holds a value. Variables are fundamental in programming as they allow us to store and manipulate data during the execution of a program.

## Declaring Variables in Python

In Python, you can declare a variable by assigning a value to it using the assignment operator `=`. Here's the general syntax for declaring a variable:

```python
variable_name = value
```

**Example :**

```python
name = "Ankita"
```

In the above example, we declared a variable named `name` and assigned the value `Ankita` to it.

## Rules to declare a variable in python

1. A variable name must start with a letter `a-z or A-Z` or the underscore `_` character.
2. A variable name cannot start with a number.
3. Variable names are case-sensitive, which means `name` and `Name` are considered different variables.
4. A variable name can not used reserved keyword
5. A variable name can include `a-z,A-z, 0-9, and _ `
   **Here are some examples of valid and invalid variable names:**

### Valid variable names

```python
age = 21
student_name = "John"
_total = 100
my_variable_2 = True
```

### Invalid variable names

```python
2name = "Alice"  # Cannot start with a number
first-name = "Bob"  # Cannot use hyphens
class = "Math"  # Cannot use reserved keywords
```

### Let's learn by examples

```python title="variable.py" showLineNumbers="true
age=21
print(age)
```

**Output**

> 21

In the above example, In the First line we can create one variable and the name of that variable is `age`. In this variable, we store the `21` value And In 2 lines we can print the value of that variable..

```python title="datatype.py" showLineNumbers="true
name="sakshi"
age=21
weight=45.65

print("Name: ",name)
print("Age: ",age)
print("Weight: ",weight)
```

**Output**

> Name: sakshi <br/>
> Age: 21 <br/>
> Weight: 45.65

In the above example, In the First line we create 1st variable and the name of that variable is the `name`. In this variable, we store the `Sakshi` value, In the second line we create 2nd variable, and the name of that variable is `age`. In this variable, we store the `21` value In the third line we create the 3rd variable and the name of that variable is `weight`. In this variable, we store the `45.65`. In the fifth line, we print the value of the `name` variable but in a formatted way, In the sixth line, we print the value of the `age` variable but in a formatted way In the seventh line, we print the value of the `weight` variable but in a formatted way .

```python title="multiple-assignment.py" showLineNumbers="true
a,b,c=10,20,30
print(a)
print(b)
print(c)
```

**Output**

> 10 <br/>
> 20<br/>
> 30

In Python, One of the beautiful things that is we can create multiple declarations and we can assign multiple values. So, in the above example, we can create three variables a, b, and c means multiple declarations and we assign multiple values `10`, `20`, and `30` means multiple assignments. In the 2nd line, we print the value of variable `a`, the 3rd line print value of variable `b`, 4th line print the value of variable `c`.

```py title="reassignment.py" showLineNumbers="true"
val=10
print(val)
val=20
print(val)
val=30
val=40
val=50
print(val)
```

**Output**

> 10 <br/>
> 20<br/>
> 50

A variable can only store one value at a time so that's why In the above example the output is `10`, `20` and `50`.

### type() function in python

The `type()` function is used to check the type of datatype.

```py
type(variablename)
```

**Example :**

```py
name = "Ankita"
age = 25
weight = 50.50
print(type(name))
print(type(age))
print(type(weight))
```

**Output :**

```py
 <class 'str'><br/>
 <class 'int'><br/>
 <class 'float'><br/>
```

**Example explanation :**

In the above example, In the First line we create 1st variable and the name of that variable is the `name`. In this variable, we store the `Ankita` value, In the second line we create 2nd variable, and the name of that variable is `age`. In this variable, we store the `25` value. In the third line, we create 3rd variable and the name of that variable is weight. In this variable, we store the `50.50`. In the fifth line, we print the value of the name variable but we have to check the type of the name variable so we used to `print(type(name))`.In the sixth line, we have to check the type of age variable so we used `print(type(age))`.In the seventh line, we have to check the type of weight variable so e used `print(type(weight))`.

**Another Example :**

```py
name = "Harshda"
age = 22
weight = 41.70
print(type(name))
print(type(age))
print(type(weight))
```

**Output :**

```py
 <class 'str'><br/>
 <class 'int'><br/>
 <class 'float'><br/>
```
