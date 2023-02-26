---
title: Set
description: "Set"
hide_table_of_contents: true
---

# Sets in Python

**Sets** <br/>
It Data type which Act like Mathmatical sets. { }= Define sets.

## Properties of Sets

- **Unorderd** : <br/>
  Unordered means that the items in a set do not have a defined order.

```python showLineNumbers = "true" title="unorderd.py"
myColors = {"sky","red","pink","yellow","black"}
print(myColors)
```

**Output**

> {'pink', 'black', 'red', 'sky', 'yellow'}

- **Unindexed** : <br/>
  we cannot access the elements index no.

```python showLineNumbers = "true" title="unindexed.py"
myColors = {"sky","red","pink","yellow","black"}
print(myColors)
```

**Output**

> {'pink', 'black', 'red', 'sky', 'yellow'}

- **Unique values** : <br/>
  Unique values means that the items in a set do not give duplicate value its provide only unique values

  ```python showLineNumbers = "true" title="unique values.py"
    myColors = {"sky","red","pink","yellow","black","sky","sky"}
    print(myColors)
  ```

  **Output**

  > {'pink', 'black', 'red', 'sky', 'yellow'}

  ## Adding values to Sets

  add()=The add() method adds an element to the set.But position is not decide because set are unorderd.

  ```python showLineNumbers = "true" title="add.py"
  myColors = {"sky","pink","black","white","yellow"}
  print("Before adding element :",myColors)
  myColors.add("green")
  print("After adding element :",myColors)
  ```

  **Output**

  > Before adding element : {'pink', 'black', 'white', 'sky', 'yellow'} <br/>
  > After adding element : {'pink', 'black', 'white', 'sky', 'yellow', 'green'}

  ## Remove Elements to Sets

  **remove() = Hard Removal**

  ```python showLineNumbers = "true" title="remove.py"
  myColors = {"sky","pink","black","white","yellow"}
  print("Before remove :",myColors)
  myColors.remove("black")
  print("After remove :",myColors)
  ```

  **Output**

> Before remove : {'pink', 'black', 'white', 'sky', 'yellow'} <br/>
> After remove : {'pink', 'white', 'sky', 'yellow'}

**discard() = Soft Removal**

```python showLineNumbers = "true" title="discard.py"
myColors = {"sky","pink","black","white","yellow"}
print("Before discard :",myColors)
myColors.discard("green")
print("After discard :",myColors)
```

**Output**

> Before discard : {'pink', 'black', 'white', 'sky', 'yellow'} <br/>
> After discard : {'pink', 'black', 'white', 'sky', 'yellow'}

## Union of Sets

The union() method returns a set that contains all items from the original set, and all items from the specified set.

```python showLineNumbers="true" title="union.py"
colorSets1 = {"sky","pink","black","yellow","tomato"}
colorSets2 = {"green","pink","white","orange"}
allColors = colorSets1.union(colorSets2)
print(allColors)
```
**Output**
>{'orange', 'pink', 'tomato', 'black', 'white', 'sky', 'yellow', 'green'}

## Intersection of Sets

The intersection() method returns a set that contains the similarity between two or more sets.

```python showLineNumbers="true" title="intersection.py"
colorSets1 = {"sky","pink","black","yellow","tomato"}
colorSets2 = {"green","pink","white","orange","sky"}
colors = colorSets1.intersection(colorSets2)
print(colors)
```
**Output**
>{'pink', 'sky'}


## Symmetric Differnce

```python showLineNumbers="true" title="symmetric_difference.py"
colorSets1 = {"sky","pink","black","yellow","tomato"}
colorSets2 = {"green","pink","white","orange","sky"}
allcolors = colorSets1.symmetric_difference(colorSets2)
print(allcolors)
```
**Output**
>{'white', 'orange', 'tomato', 'yellow', 'green', 'black'}

The symmetric_difference() method in Python for two elements StudentsList1 and StudentsList2 is used to return the set of elements contained in both StudentsList1 and StudentsList2 but not common in both of them.