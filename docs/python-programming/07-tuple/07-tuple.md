---
title: Tuple
description: "Tuple"
hide_table_of_contents: true
---

Tuples are used to store multiple values in a single variable. Tuples can be written in round brackets `()`.

**Example :**

```py
mybasket = ('Apple','Banana','Grapes','Orange')
print(mybasket)
```

**Output :**

> ('Apple', 'Banana', 'Grapes', 'Orange')

### Properties Of Tuple

1. **Ordered :**
   Tuples are an `ordered` sequences of items, just like lists.

2. **Unchangeable :**
   Tuples are `unchangeable`, meaning that we cannot change, add or remove items after the tuple has been created.

3. **Allow Duplicates :**
   Tuples are `indexed`, they can have items with the same value. It contains duplicates items.

:::tip
You can performs update, add and deleter operations on `list`. But you can not perform update, add and delete operation on `tuples`.
:::

### Manipulation of Tuple

You can not change tuples but you can performs some extra operation on tuples you can change it.

**Example :**

```py
myBasket = ('Apple','Banana','Grapes','Apple')
listmyBasket = list(myBasket)
listmyBasket[0] = "Cherry"
myBasket = tuple(listmyBasket)
print(listmyBasket)
```

**Output**

> ['Cherry', 'Banana', 'Grapes', 'Apple']

**Example explanation :**

In above the example, we create the myBasket `tuple` and in that `tuple` store multiple data. We convert the myBasket `tuple` into `list` so, in the 2nd line create one variable `listmyBasket` and store the list of myBasket `tuple`. In the 3rd line listmyBasket variable will be the update list, and update the 0 index element and change to `Cherry` mybasket. We are again the listmyBasket list convert into a `tuple` and stored in the myBasket `tuple`. In the last line, we print this myBasketlist `tuple`.

### Index Position

Index position returns the index of the items in the tuples.

**Syntax :**

```py
tuplename.index('element')
```

**Example explanation :**

```py
pythonStudent = ("Saurabh","pooja","Tushar","Harshal")
print(pythonStudent.index('Saurabh'))
```

**Output**

> 0

**Example explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `pythonStudent`. In this variable, we store the tuple of items {'Saurabh','pooja','Tushar','Harshal'}. In the 2nd line, we print the value of that variable and provide the `index` method for finding the index of that given element.

### Count()

The `count()` method returns the number of times the specified element appears in the list.

**Syntax :**

```py
tuplename.count("element")
```

**Example :**

```py
pythonStudent = ('Saurabh','pooja','Tushar','Harshal')
print(pythonStudent.count('Tushar'))
```

**Output**

> 1

**Example explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `pythonStudent`. In this variable, we store the tuple of items {'Saurabh','pooja','Tushar','Harshal'}. In the 2nd line, we print the value of that variable and provide the `count` method for counting the element appers in the tuple.

### Concatenation of String

To concatenate, or combine, two strings you can use the + operator.

```py
a = "Hello"
b = "World"
c = a + b
print(c)
```

**Output**

> HelloWorld

**Example explanation :**

In the above example, In the 1st line we create a variable that variable name is `a`. In these variable we stored a string "Hello". In the 2nd line we create another variable and name of that variable is `b` and in these variable we stored the "world". In the 3rd line we create third variable and name of that variable is `c`. In the `c` concatenate the two strings using `+` operator `a+b`. That combine the two strings.
