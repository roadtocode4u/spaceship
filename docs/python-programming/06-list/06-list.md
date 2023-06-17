---
title: List
description: "List"
hide_table_of_contents: true
---

Lists are used to store multiple items in a single variable. List name should be in a `plural` form.

**Example :**

```py
students = ['Aachal','Aarav','Avinash','Dolly','Deva']
print(students)
```

**Output :**

> ['Aachal', 'Aarav', 'Avinash', 'Dolly', 'Deva']

### Slicing on list

Slice object is used to specify how to slice a list.

**Syntax :**

```py
stringname[startindex:endindex]
```

**Example :**

```python
students = ['Aachal','Aarav','Avinash','Dolly','Deva']
print(students[0:4])
```

**Output :**

> ['Aarav', 'Avinash', 'Dolly']

**Example :**

```python
students = ['Aachal','Aarav','Avinash','Dolly','Deva']
print(students[4:])
```

**Output :**

> ['Deva']

**Example :**

```python
students = ['Aachal','Aarav','Avinash','Dolly','Deva']
print(students[-2])
```

**Output :**

> Dolly

## Properties Of List

### 1. Ordered

Lists are in ordered form, which means that the items have a defined order and that order will not change.

**Example :**

```python
students = ['Aachal','Aarav','Avinash','Dolly','Deva']
print(students)
```

**Output :**

> ['Aachal', 'Aarav', 'Avinash', 'Dolly', 'Deva']

### 2. Allow duplicates

Lists can have items with the same value. Lists can contain duplicate values.

**Example :**

```python
fruits =['apple','banana','cherry','apple','banana']
print(fruits)
```

**Output :**

> ['apple', 'banana', 'cherry', 'apple', 'banana']

### 3. List can contain different datatype

You can add differnent datatypes in single list.

**Example :**

```py
randomData = ["abc",10,True,50.50,"Hii"]
print(randomData)
```

**Output :**

> ['abc', 10, True, 50.5, 'Hii']

### 4. Changeable

The list is `changeable` and we can change add and remove items in a list after it has been created.

### Update

Update (change) a list element at the specified index.

**Syntax :**

```py
listName[index] = "updated-element"
```

**Example :**

```py
courses = ["c","c++","python","javascript","icp"]
print("Befor update: ",courses)
courses[1] = "c++ programming"
print("After update :",courses)
```

**Output :**

> Befor update: ['c', 'c++', 'python', 'javascript', 'icp']<br/>
> After update : ['c', 'c++ programming', 'python', 'javascript', 'icp']<br/>

### Insert

The insert() method insert an element at the specified position in the list.

**Syntax :**

`listName.insert(index-position, "new-element-to-insert")`

**Example :**

```py
courses = ["c","c++","python","java","icp"]
print("before insert:", courses)
courses.insert(4,"Android Dev")
print("After insert :",courses)
```

**Output :**

> Before insert: ['c', 'c++', 'python', 'java', 'icp']<br/>
> After insert : ['c', 'c++', 'python', 'java', 'Android Dev', 'icp']<br/>

### Append

The append() method adds an element to the end of the list.

**Syntax :**

`listName.append("element")`

**Example :**

```python
courses = ["c","c++","python","java","icp"]
print("Before append :",courses)
courses.append("Android Dev")
print("After append :",courses)
```

**Output :**

> Before append : ['c', 'c++', 'python', 'java', 'icp']<br/>
> After append : ['c', 'c++', 'python', 'java', 'icp', 'Android Dev']<br/>

### Remove

The remove() method removes the specified item in the lists.

**Syntax :**

`listName.remove("element")`

**Example :**

```py
fruits = ['appple','banana','orange','cherry']
print("Before remove",fruits)
fruits.remove('banana')
print("After remove",fruits)

```

**Output :**

> Before remove ['appple', 'banana', 'orange', 'cherry']<br/>
> After remove ['appple', 'orange', 'cherry'] <br/>

### Pop

The pop() method remove the element. It takes a single argument (index).

**Syntax :**

`listName.pop(index)`

**Example :**

```py
fruits = ['appple','banana','orange','cherry']
print("Before pop",fruits)
fruits.pop(2)
print("After pop",fruits)
```

**Output :**

> Before pop ['appple', 'banana', 'orange', 'cherry']<br/>
> After pop ['appple', 'banana', 'cherry']<br/>

### Delete

The delete() method delete elements from the specified index.

**Syntax :**

`del listname[index]`

**Example :**

```py
fruits = ["apple","banana","cherry","mango"]
print("Before delete : ",fruits)
del fruits[1]
print("After delete :",fruits)
```

**Output :**

> Before delete : ['apple', 'banana', 'cherry', 'mango']<br/>
> After delete : ['apple', 'cherry', 'mango']<br/>

### Clear

The clear() method removes all the elements from the list.

**Syntax :**

`listName.clear()`

**Example :**

```py
fruits = ["apple","banana","cherry","mango"]
print("Before clear :",fruits)
fruits.clear()
print("After clear : ",fruits)
```

**Output :**

> Before clear : ['apple', 'banana', 'cherry', 'mango']<br/>
> After clear : [] <br/>

### Sort

List objects have a sort() method that will sort the list alphanumerically, ascending, and descending.

### Ascending Order

Lists can sort elements ascending by `default`.

**Example :**

```py
alphabets = ['A','Z','C','V','P','R']
alphabets.sort()
print(alphabets)
```

**Output :**

> ['A', 'C', 'P', 'R', 'V', 'Z']

**Example explanation :**

In the above example, we assigned a list of alphabets `['A','Z','C','V','P','R']`. We have to sort the elements in ascending order so we used `alphabets.sort()`. That sort the list in ascending order.

### Descending Order

Lists can sort in descending order then you have to give the inside sort method `reverser=true`.

**Example :**

```py
alphabets = ['A','Z','C','V','P','R']
alphabets.sort(reverse=True)
print(alphabets)
```

**Output :**

> ['Z', 'V', 'R', 'P', 'C', 'A']

**Example explanation :**

In the above example, we have a list of alphabets `['A','Z','C','V','P','R']`. We have to sort the elements in descending order so we used `alphabets. sort(reverse=True)`. That sort the elements in descending order.
