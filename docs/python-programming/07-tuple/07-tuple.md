---
title: Tuple
description: "Tuple"
hide_table_of_contents: true
---

### Tuples in Python

Tuples are used to store multiple values in a single variable. Tuples can be written in round brackets `()`.

**Example :**

```py showLineNumbers = "true"
myBasket = ('Apple','Banana','Grapes','Orange')
print(myBasket)
```

**Output :**

> ('Apple', 'Banana', 'Grapes', 'Orange')

**Example Explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `myBasket`. In this variable, we store the tuple of elements `('Apple','Banana','Grapes','Orange')` and In 2nd line we can print the value of that variable.

### Properties Of Tuple

1. **Ordered :**
   Tuples are an `ordered` sequences of items, just like lists.

2. **Unchangeable :**
   Tuples are `unchangeable`, meaning that we cannot change, add or remove items after the tuple has been created.

3. **Allow Duplicates :**
   Tuples are `indexed`, they can have items with the same value. It contains duplicates items.

:::tip
You can perform update, add and delete operations on `list`. But you can not perform update, add and delete operations on `tuples`.
:::

### Manipulation of Tuple

You can not change tuples but you can perform some extra operations on tuples you can also change it.

**Example :**

```py showLineNumbers = "true"
myBasket = ('Apple','Banana','Grapes','Apple')
listmyBasket = list(myBasket)
listmyBasket[0] = "Cherry"
myBasket = tuple(listmyBasket)
print(listmyBasket)
```

**Output**

> ['Cherry', 'Banana', 'Grapes', 'Apple']

**Example explanation :**

In the above example, In the 1st line we can create first variable and the name of that variable is `myBasket`. In this variable, we store the tuple of items `('Apple','Banana','Grapes','Apple')`. In the 2nd line we can create a second variable and the name of that variable is `listmyBasket` and store the list of `myBasket` tuple. In the 3rd line `listmyBasket` variable will be the update list, and update the `[0] index` element which is `Apple` to `Cherry` in the `myBasket` variable. We can again the `listmyBasket` list convert into a tuple and store it in the `myBasket` tuple. In 5th line we can print the value of that variable.

### Index Position

Index position returns the `index` of the items in the tuples.

**Syntax :**

```py
tuplename.index('element')
```

**Example explanation :**

```py showLineNumbers = "true"
pythonStudent = ("Saurabh","pooja","Tushar","Harshal")
print(pythonStudent.index('Saurabh'))
```

**Output**

> 0

**Example Explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `pythonStudent`. In this variable, we store the tuple of items `{'Saurabh','pooja','Tushar','Harshal'}`. In the 2nd line, we print the value of that variable and provide the `index` method for finding the index of that given element.

### Count()

The `count()` method returns the number of times the specified element appears in the list.

**Syntax :**

```py
tuplename.count("element")
```

**Example :**

```py showLineNumbers = "true"
pythonStudent = ('Saurabh','pooja','Tushar','Harshal')
print(pythonStudent.count('Tushar'))
```

**Output**

> 1

**Example Explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `pythonStudent`. In this variable, we store the tuple of items `{'Saurabh','pooja','Tushar','Harshal'}`. In the 2nd line, we print the value of that variable and provide the `count` method for counting the element appers in the tuple.

### Concatenation of String

To concatenate, or combine, two strings you can use the `+` operator.

```py showLineNumbers = "true"
a = "Hello"
b = "World"
c = a + b
print(c)
```

**Output**

> HelloWorld

**Example explanation :**

In the above example, In the 1st line we create a variable and name of that variable is `a`. In this variable we can stored a string `Hello`. In the 2nd line we can create second variable and name of that variable is `b`. In this variable we can stored a string `World`. In the 3rd line we can create third variable and name of that variable is `c`. In this line we can concatenate the two strings using `+` operator `a + b` and store that string in variable `c`. In the 4th line we can print that variable.
