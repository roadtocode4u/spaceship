---
title: Variable and Datatypes
description: "Variable and Datatypes"
hide_table_of_contents: true
---

## What is Variable

Variables are used to store data, they take memory space based on the type of value we assigning to them.

For Example

```python
Name="sakshi"
print(Name)
```

Here,We are storing sakshi in the variable name.

## Rules to declare a variable in python

1. A variable name must start with a letter (a-z or A-Z) or the underscore (\_) character.
2. A variable name cannot start with a number.
3. variable are case-sensitive
4. A variable name can not used reserved keyword
5. A variable name can include (a-z,A-z, 0-9, and \_ )

### Let's learn by examples

```python title="variable.py" showLineNumbers="true
age=21
print(age)
```

**Output**

> 21

In the above example, In the First line we can create one variable and name of that variable is `age`. In this variable, we store the `21` value And In 2 line we can print the value of that variable.

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

In the above example, In the First line we are create 1st variable and name of that variable is `name`. In this
variable, we store the `sakshi` value , In the second line we are create 2nd variable and name of that variable is `age`. In this variable, we store the `21` value And In the third line we are create 3rd variable and name of that variable is `weight`. In this variable, we store the `45.65`. In the fifth line, we print the value of the `name` variable but in formatted way, In the sixth line, we print the value of the `age` variable but in formatted way And In the seventh line, we print the value of the `weight` variable but in formatted way .

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

In Python, One of the beautiful things that is we can create multiple declarations and we can assign multiple values. So, in the above example, we can create three variables `a`, `b`, and `c` means multiple declarations and we assign multiple values `10`, `20`, and `30` means multiple assignments. In 2nd line we print value of variable `a`, 3rd line print value of variable `b`, 4th line print value of variable `c`.

```python title="reassignment.py" showLineNumbers="true"
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
