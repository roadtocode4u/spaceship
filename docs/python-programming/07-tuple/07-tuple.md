---
title: Tuple
description: "Tuple"
hide_table_of_contents: true
---

## Tuple in Python

### Tuple 

Tuple are used to store multiple values in a single variable.

### Properties Of Tuple 

* Ordered : <br/>
Tuples are an ordered sequences of items, just like lists.

* Unchangeable : <br/>
Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.

* Allow Duplicates : <br/>
tuples are indexed, they can have items with the same value.

### Manipulation of Tuple Example

```python showLineNumbers='true'
MyBasket=('Apple', 'Banana', 'Grapes', 'Oranges')
ListMyBasket=list(MyBasket)
ListMyBasket[0]='Cherry'
MyBasket=tuple(ListMyBasket)
print(MyBasket)
```
**Output**
>('Cherry', 'Apple', 'Banana', 'Grapes', 'Oranges')


### Index Position

```python showLineNumbers='true'
PythonStudent=('Neha','Gauri','Vaibhavi','Meghana')
print(PythonStudent.index("Neha"))
```
**Output**
>0


### Count()
The count() method returns the number of times the specified element appears in the list.

```python showLineNumbers='true'
PythonStudent=('Neha','Gauri','Vaibhavi','Gauri','Meghana','Gauri')
print(PythonStudent.count("Gauri"))
```
**Output**
>3

### Concatenation of String
To concatenate, or combine, two strings you can use the + operator.

```python showLineNumbers='true'
a = "Hello"
b = "World"
c = a + b
print(c)
```
**Output**
>Hello World
