---
title: Constructor and Destructor
description: "Constructor and Destructor"
hide_table_of_contents: true
---

## Constructor 
Constructor is special function which invokes automatically at the time of object creation.

**Syntax** 
```python showLineNumbers='true' title='constructor_syntax.py'
def __init__ (self):
```

**Example** 
```python showLineNumbers='true' title='constructor.py'
class ATM:

  def normal_function(self):
    print("Normal Function Called...")

  def __init__(self):
    print("Welcome to BOB !")

obj = ATM()
obj.normal_function()
```
**Output**
>Welcome to BOB !   
>Normal Function Called...

In the above example, we create class `ATM` in this class create function `normal_function()` with a `self` parameter then create a constructor with a `self` parameter & print massage, create the object for `ATM` that is `obj` and call function `normal_function()`.

```python showLineNumbers='true' title='constructor.py'
class sample:
  def showSample(self, param):
    print("This is sample",param)

  def __init__(self):
    print("Constructer Called..")

obj = sample()
obj.showSample("code")
```
**Output**
>Constructer Called..  
>This is sample code

## Destructor
Destructor invokes when object goes out of scope .

**Syntax**
```python showLineNumbers='true' title='destructor_syntax.py'
def __del__(self):
```

**Example**
```python showLineNumbers='true' title='destructor.py'
class ATM:

  def normal_function(self):
    print("Normal Function Called...")

  def __init__(self):
    print("Welcome to BOB !")

  def __del__(self):
    print("Destructor Called...")

obj = ATM()
obj.normal_function()
```
**Output**
>Welcome to BOB !  
>Normal Function Called...  
>Destructor Called...  

```python showLineNumbers='true' title='destructor.py'
class ATM:

  def normal_function(self):
    print("Normal Function Called...")

  def __init__(self):
    print("Welcome to BOB !")

  def __del__(self):
    print("Destructor Called ...")

obj = ATM()
obj.normal_function()
del obj
```
**Output**
>Welcome to BOB !  
>Normal Function Called...  
>Destructor Called ...  
>Destructor Called...    