---
title: Comments and String Operations
description: "Comments and String Operations"
hide_table_of_contents: true
---

### Comments in python

Comments in Python are the lines in the code that are ignored by the compiler during the execution of the program.

1. Single Line Comment (#)

A single-line comment begins with a hash (#) symbol. The single-line comment is used to comment only one line of the code.

```python
#This is sample program
print("roadtocode4u")
```

2. Multiline Comment (""" """)

In Python Triple double quote (""") and single quote (''') are used for Multi-line commenting.Multi-line comment is useful when we need to comment on many lines.

```python
"""
This is a comment
written in
more than just one line
"""
print("roadtocode4u")
```

### String Methods

1.  Upper()

Converts a string into upper case.

```python
myString = "roadtocode4u"
print("Original String :",myString)
newString = myString.upper()
print("New String :",newString)
```

**Output**

> Original String : roadtocode4u <br/>
> New String : ROADTOCODE4U
2. Lower()

Converts a string into lower case.

```python
myString = "ROADTOCODE4U"
print("Original String :",myString)
newString = myString.lower()
print("New String :",newString)
```

**Output**

> Original String : ROADTOCODE4U <br/>
> New String : roadtocode4u
3. Strip()

Removes white space from the end of String

```python
str1 = "rtc4u"
str2 = "rtc4u             "
print(str1)
print(str2.strip())
```

**Output**

> rtc4u <br/>
> rtc4u
4. Replace()

Replace in string

```python
myString = "roadtocode"
newString = myString.replace("d","#")
print(newString)
```

**Output**

> roa#toco#e
5. split()

Splits the string at the specified separator, and returns a list.

```python
myString = "road to code".split()
print(myString)
```

**Output**

> ['road', 'to', 'code']
### Array

Collection of similar data type

```python
myString="India"
print(myString[2])
```

**Output**

> d