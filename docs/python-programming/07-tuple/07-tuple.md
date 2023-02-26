---
title: Tuple
description: "Tuple"
hide_table_of_contents: true
---

## Tuple in Python

### Tuple

Tuple are used to store multiple values in a single variable.

### Properties Of Tuple

- Ordered : <br/>
  Tuples are an ordered sequences of items, just like lists.

- Unchangeable : <br/>
  Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.

- Allow Duplicates : <br/>
  tuples are indexed, they can have items with the same value.

### Manipulation of Tuple Example

```python showLineNumbers='true'
color = ("Red","Pink","Sky","orange","Black")
listColor = list(color)
listColor[1] = "Green"
color = tuple(listColor)
print(color)
```

**Output**

> ('Red', 'Green', 'Sky', 'orange', 'Black')

In above the example, we create the color `tuple` and in that `tuple` store multiple data. we convert the color `tuple` into `list` so, in the 2nd line create one variable `listColor` and store the list of color `tuple`. in the 3rd line listColour variable will be update list, and update 1 index element and change to `Green` color. we are again the listColour list convert into `tuple` and stored in color `tuple`. In the last line, we print this color `tuple`.

### Index Position

```python showLineNumbers='true'
myBasket = ("Apple","Banana","Orange","Grapes","Apple","Apple")
print(myBasket.index("Banana"))
```

**Output**

> 1

### Count()

The count() method returns the number of times the specified element appears in the list.

```python showLineNumbers='true'
myBasket = ("Apple","Banana","Orange","Grapes","Apple","Apple")
print(myBasket.count("Apple"))
```

**Output**

> 3

### Concatenation of String

To concatenate, or combine, two strings you can use the + operator.

```python showLineNumbers='true'
a = "Hello"
b = "World"
c = a + b
print(c)
```

**Output**

> HelloWorld
