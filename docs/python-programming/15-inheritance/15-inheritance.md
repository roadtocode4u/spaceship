---
title: Inheritance
description: "Inheritance"
hide_table_of_contents: true
---

## Inheritance 

Inheritance means deriving properties of one class into another class.

The class whose properties are being derived is called as Parent Class or Super Class or Base class . And class which derives the properties of base class is called as Child Class or Sub Class or Derived Class.

**Syntax :**
```python showLineNumbers="true"
class BaseClass:
    .....
    .....
class DerivedClass(BaseClass):
    .....
    .....
```

**Types of inheritance:** <br/> 
There are four types of inheritance in python programming:
1. Single inheritance.
2. Multiple inheritances.
3. Multilevel inheritance.
4. Hierarchical inheritance.

**1. Single inheritance.** <br/> 
Single inheritance means,when a derived class derives one base class.

**Example :**

```python showLineNumbers="true" title:"single inheritance" 
class A:
  def showA(self):
    print("I am ShowA")
  
class B(A):
  def showB(self):
    print("I am ShowB")

objB = B()
objB.showA()
objB.showB()
```
**Output**
>I am ShowA  
>I am ShowB


**2. Multilevel inheritance.** <br/> 
Multilevel Inheritance means When a derived class become base class of another class .

**Example :**

```python showLineNumbers="true" title:"single inheritance" 
class A:
  def showA(self):
    print("This is show A")

class B(A):
  def showB(self):
    print("This is show B")

class C(B):
  def showC(self):
    print("This is show C")

objC = C()
objC.showA()
objC.showB()
objC.showC()
```
**Output**
>This is show A  
>This is show B   
>This is show C 

**3. Multiple inheritance.** <br/> 
When a class can be derived from more than one base class this type of inheritance is called multiple inheritance.

**Example :**

```python showLineNumbers="true" title:"single inheritance" 
class Mother:
  def showMotherName(self):
    print("Mother Name is ABC")

class Father:
  def showFatherName(self):
    print("Father Name is PQR")

class child(Mother,Father):
  def showChildName(self):
    print("I am Child")

obj = child()
obj.showMotherName()
obj.showFatherName()
obj.showChildName()
```
**Output**
>Mother Name is ABC  
>Father Name is PQR   
>I am Child

**4. Multiple inheritance.** <br/> 
When more than one derived classes are created from a single base this type of inheritance is called hierarchical inheritance.

**Example :**

```python showLineNumbers="true" title:"single inheritance" 
class parent:
  def showParent(self):
    print("Mother Name : ABC")
    print("Father Name : PQR")

class A(parent):
  def showName(self):
    print("A")

class B(parent):
  def showName(self):
    print("B")

class C(parent):
  def showName(self):
    print("C")

objA = A()
objA.showName()
objA.showParent()

objB = B()
objB.showName()
objB.showParent()

objC = C()
objC.showName()
objC.showParent()
```
**Output**
>A   
>Mother Name : ABC  
>Father Name : PQR  
>B  
>Mother Name : ABC  
>Father Name : PQR  
>C  
>Mother Name : ABC  
>Father Name : PQR  

