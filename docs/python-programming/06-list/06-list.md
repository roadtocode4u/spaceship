---
title: List
description: "List"
hide_table_of_contents: true
---

## List

Lists are used to store multiple items in a single variable.

**Code**

```python
students = ["sahil","Rahul","Ashwini"]
print(students)
```

**Output**

> ['sahil', 'Rahul', 'Ashwini']

### Slicing on list

**Code**

```python
students = ["sahil","Rahul","Ashwini","Tanaya"]
print(students[0:3])
```

**Output**

> ['sahil', 'Rahul', 'Ashwini']

**Code**

```python
students = ["sahil","Rahul","Ashwini","Tanaya"]
print(students[2:4])
```

**Output**

> ['Ashwini', 'Tanaya']

**Code**

```python
students = ["sahil","Rahul","Ashwini","Tanaya"]
print(students[-2])
```

**Output**

> Ashwini

**Code**

```python
students = ["sahil","Rahul","Ashwini","Tanaya"]
print(students[1])
```

**Output**

> Rahul

**Code**

```python
students = ["sahil","Rahul","Ashwini","Tanaya"]
print(students[1:])
```

**Output**

> ['Rahul', 'Ashwini', 'Tanaya']

## Properties Of List

#### Ordered

Lists are ordered, it means that the items have a defined order, and that order will not change.

**Code**

```python
students = ["sahil","Rahul","Ashwini","Tanaya"]
print(students)
```

**Output**

> ['sahil', 'Rahul', 'Ashwini', 'Tanaya']

#### Allow Duplicates

Lists can have items with the same value

**Code**

```python
students = ["sahil","Rahul","Ashwini","Tanaya","Ashwini","Ashwini"]
print(students)
```

**Output**

> ['sahil', 'Rahul', 'Ashwini', 'Tanaya', 'Ashwini', 'Ashwini']

#### List can contain Different Data Type

**Code**

```python
randomData = ["abc",10,True,50.50,"Hii"]
print(randomData)
```

**Output**

> ['abc', 10, True, 50.5, 'Hii']

#### Changeable

The list is changeable, that we can change, add, and remove items in a list after it has been created.

### Update

**Syntax**

`listName[index] = "updated-element"`

**Code**

```python
courses = ["c","c++","python","java","icp"]
print("Befor update: ",courses)
courses[3] = "java programming"
print("After update :",courses)
```

**Output**

> Befor update: ['c', 'c++', 'python', 'java', 'icp']
> After update : ['c', 'c++', 'python', 'java programming', 'icp']

### Insert

**Syntax**

`listName.insert(index-position, "new-element-to-insert")`

**Code**

```python
courses = ["c","c++","python","java","icp"]
print("before insert:", courses)
courses.insert(4,"Android Dev")
print("After insert :",courses)
```

**Output**

> Before insert: ['c', 'c++', 'python', 'java', 'icp']
> After insert : ['c', 'c++', 'python', 'java', 'Android Dev', 'icp']

### Append

The append() method appends an element to the end of the list.

**Syntax**

`listName.append("element")`

**Code**

```python
courses = ["c","c++","python","java","icp"]
print("Before append :",courses)
courses.append("Android Dev")
print("After append :",courses)
```

**Output**

> Before append : ['c', 'c++', 'python', 'java', 'icp']
> After append : ['c', 'c++', 'python', 'java', 'icp', 'Android Dev']

### Remove

The remove() method removes the specified item.

**Syntax**

`listName.remove("element")`

**Code**

```python
courses = ["c","c++","python","java","icp"]
print("Before remove :",courses)
courses.remove("java")
print("After remove :",courses)
```

**Output**

> Before remove : ['c', 'c++', 'python', 'java', 'icp']
> After remove : ['c', 'c++', 'python', 'icp']

### Pop

The pop() method takes a single argument (index).

**Syntax**

`listName.pop(index)`

**Code**

```python
courses = ["c","c++","python","java","icp"]
print("Before pop :",courses)
courses.pop(2)
print("After pop :",courses)
```

**Output**

> Before pop : ['c', 'c++', 'python', 'java', 'icp']
> After pop : ['c', 'c++', 'java', 'icp']

### Delete

**Syntax**

`del listname[index]`

**Code**

```python
friuts = ["apple","banana","cherry","mango"]
print("Before delete : ",friuts)
del friuts[1]
print("After delete :",friuts)
```

**Output**

> Before delete : ['apple', 'banana', 'cherry', 'mango']
> After delete : ['apple', 'cherry', 'mango']

### Clear

The clear() method removes all the elements from a list.

**Syntax**

`listName.clear()`

**Code**

```python
friuts = ["apple","banana","cherry","mango"]
print("Before clear :",friuts)
friuts.clear()
print("After clear : ",friuts)
```

**Output**

> Before clear : ['apple', 'banana', 'cherry', 'mango']
> After clear : []

- Sort =

List objects have a sort() method that will sort the list alphanumerically, ascending,descending.

### Ascending Order

**Code**

```python
alphabets = ['A','Z','C','V','P','R']
alphabets.sort()
print(alphabets)
```

**Output**

> ['A', 'C', 'P', 'R', 'V', 'Z']

### Descending Order

**Code**

```python
alphabets = ['A','Z','C','V','P','R']
alphabets.sort(reverse=True)
print(alphabets)
```

**Output**

> ['Z', 'V', 'R', 'P', 'C', 'A']
