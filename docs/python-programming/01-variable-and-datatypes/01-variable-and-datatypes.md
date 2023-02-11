---
title: Variable and Datatypes
description: "Variable and Datatypes"
hide_table_of_contents: true
---

## What is Variable

Variables are used to store data, they take memory space based on the type of value we assigning to them.

 For Example 
``` python 
Name="Vedika"
print(Name)
```
Here,We are storing vedika in the variable name.

## Rules to declare a variable in python

1. A variable name must start with a letter (a-z or A-Z) or the underscore (_) character.
2. A variable name cannot start with a number.
3. variable are case-sensitive
4. A variable name can not used reserved keyword
5. A variable name can include (a-z,A-z, 0-9, and _ )

### Let's learn by examples

```python title="variable.py" showLineNumbers="true
age=21
print(age)
```

``` python title="datatype.py" showLineNumbers="true
name="Vedika"
age=20
weight=50.50

print("Name: ",name)
print("Age: ",age)
print("Weight: ",weight)
```

```python title="datatype.py" showLineNumbers="true
name="Vedika"
age=20
weight=50.50

print(type(name))
print(type(age))
print(type(weight))
```

```python title="multiple-assignment.py" showLineNumbers="true
a,b,c=10,20,30
print(a)
print(b)
print(c)
```

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

