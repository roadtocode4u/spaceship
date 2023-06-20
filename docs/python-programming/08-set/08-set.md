---
title: Set
description: "Set"
hide_table_of_contents: true
---

# Sets in Python

## Sets :

A set in Python is an unordered collection of unique items. It is a data type that acts like a mathematical set. It is defined by enclosing the items within curly braces `{}` and each item seperated by `(,)`.

## Properties of Sets

### Unorderd :

Unordered means that the items in a set are not stored in any particular order.

**Example :**

```python showLineNumbers = "true" title="unorderd.py"
mycolors = {'sky','pink','yellow','green'}
print(mycolors)
```

**Output :**

> {'yellow', 'pink', 'sky', 'green'}

**Example Explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `mycolors`. In this variable, we store the set of items `{'sky','pink','yellow','green'}` and In 2nd line we can print the value of that variable.

### Unindexed :

Unindexed means that the items in a set you can not access that items by position or index.

**Example :**

```python showLineNumbers = "true" title="unindexed.py"
mycolor = {'sky','pink','yellow','green','green'}
print(mycolor)
```

**Output :**

> {'yellow', 'pink', 'sky', 'green'}

**Example Explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `mycolors`. In this variable, we store the set of items `{'sky','pink','yellow','green','green'}` and In 2nd line we can print the value of that variable.

### Unique values :

Unique values means that the items in a set cannot contain duplicate items. If you try to add a duplicate items to a set, it will be ignored.

**Example :**

```python showLineNumbers = "true" title="unique values.py"
mycolor = {'orange','sky','pink','sky','green','sky','sky'}
print(mycolor)
```

**Output :**

> {'pink', 'orange', 'sky', 'green'}

**Example Explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `mycolors`. In this variable, we store the set of items `{'orange','sky','pink','sky','green','sky','sky'}` and In 2nd line we can print the value of that variable.

## Adding values to Sets

- **add() method :** The add() method is used to adds an element to the set. But position is not decide because set are unorderd.

**Example :**

```python showLineNumbers = "true" title="add.py"
mycolors = {'orange','sky','pink','sky','green'}
print("Before adding Value : ",mycolors)
mycolors.add('white')
print("After adding Value : ",mycolors)
```

**Output :**

> Before adding Value : {'pink', 'orange', 'sky', 'green'}<br/>
> After adding Value : {'orange', 'sky', 'green', 'white', 'pink'}

**Example Explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `mycolors`. In this variable, we store the set of items `{'orange','sky','pink','sky','green'}`. In 2nd line we can print the value of that variable with adding proper sentence. In 3rd line we use `add()` method for adding new color in your set which is `white`. In 4th line we can print the value of that variable with adding proper sentence.

## Remove Elements to Sets

**Hard Removal =>** In this case we used `remove()` method and it is used to remove element from the set.

**Example :**

```python showLineNumbers = "true" title="remove.py"
mycolors = {'orange','sky','pink','sky','green'}
print("Brfore remove : ",mycolors)
mycolors.remove('blue')
print("After remove :",mycolors)
```

**Output :**

:::danger
KeyError: 'blue'
:::

**Example Explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `mycolors`. In this variable, we store the set of items `{'orange','sky','pink','sky','green'}`. In 2nd line we can print the value of that original set. In 3rd line we use `remove()` method for removing color from your set which is `blue`. In 4th line we can print the value of the value of variable after removing the item in the set. In this case, in the output, we show an error because the `blue` color is not present in the set.

:::tip
When using the `remove()` method in Python, you need to provide the item you want to remove from the set, and if the item is not present in the set, it will shows an error message.
:::

**Soft Removal =>** In this case we used `discard()` method.

**Example :**

```python showLineNumbers = "true" title="discard.py"
mycolors = {'orange','sky','pink','sky','green'}
print("Brfore discard : ",mycolors)
mycolors.discard('blue')
print("After discard :",mycolors)
```

**Output**

> Brfore discard : {'green', 'sky', 'pink', 'orange'}<br/>
> After discard : {'green', 'sky', 'pink', 'orange'}

**Example Explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `mycolors`. In this variable, we store the set of items `{'orange','sky','pink','sky','green'}`. In 2nd line we can print the value of that original set. In 3rd line we use `discard()` method for removing color from your set which is `blue`. In 4th line we can print the value of the value of variable after removing the item in the set. In this case, in the output, we show an original set because the `blue` color is not present in the set and this case the `discard()` method simply ignored it.

:::tip
When using the `discard()` method in Python, you need to provide the item you want to remove from the set, and if the item is not present in the set, it will simply ignored it and print your original set.
:::

## Union of Sets

The `union()` method returns a set that contains all items from the original set, and all items from the specified set.

**Example :**

```python showLineNumbers="true" title="union.py"
colorList1 = {'sky','blue','white','black'}
colorList2 = {'yellow','green','red','sky'}
allElements = colorList1.union(colorList2)
print(allElements)
```

**Output :**

> {'black', 'sky', 'red', 'blue', 'yellow', 'green', 'white'}

**Example Explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `colorList1`.
In this variable, we store the set of items `{'sky','blue','white','black'}`. In the 2nd line we can create second variable and the name of that variable is `colorList2`. In this variable, we store the set of items ` {'yellow','green','red','sky'}`. In th 3rd line we can create 3rd variable and the name of that variable is `allElements`. In this variable, we use the `union()` method for combining two sets in a single set. In 4th line we can print the value of that variable and the name of that variable is `allElements`.

## Intersection of Sets

The `intersection()` method returns a set that contains the similarity between two or more sets.

**Example :**

```python showLineNumbers="true" title="intersection.py"
colorList1 = {'sky','blue','white','black'}
colorList2 = {'yellow','green','red','sky','black'}
sameElements = colorList1.intersection(colorList2)
print(sameElements)
```

**Output**

> {'sky', 'black'}

**Example Explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `colorList1`.
In this variable, we store the set of items `{'sky','blue','white','black'}`. In the 2nd line we can create second variable and the name of that variable is `colorList2`. In this variable, we store the set of items ` {'yellow','green','red','sky','black'}`. In th 3rd line we can create third variable and the name of that variable is `sameElements`. In this variable, we use the `intersection()` method and it is used to find same items and store that items in single set. In 4th line we can print the value of that variable and the name of that variable is `sameElements`.

## Symmetric Differnce

The `symmetric_difference()` method returns a set that ignore the similarity between two or more sets.

**Example :**

```python showLineNumbers="true" title="symmetric_difference.py"
colorList1 = {'sky','blue','white','black'}
colorList2 = {'yellow','green','red','sky','black'}
diffElements = colorList1.symmetric_difference(colorList2)
print(diffElements)
```

**Output**

> {'blue', 'yellow', 'green', 'white', 'red'}

**Example Explanation :**

In the above example, In the 1st line we can create one variable and the name of that variable is `colorList1`.
In this variable, we store the set of items `{'sky','blue','white','black'}`. In the 2nd line we can create second variable and the name of that variable is `colorList2`. In this variable, we store the set of items ` {'yellow','green','red','sky','black'}`. In th 3rd line we can create third variable and the name of that variable is `diffElements`. In this variable, we use the `symmetric_difference()` method and it is used to find different items and store that items in single set. In 4th line we can print the value of that variable and the name of that variable is `diffElements`.
