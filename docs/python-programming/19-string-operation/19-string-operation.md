---
title: String Operation
description: "String Operation"
hide_table_of_contents: true
---

## Input for Multiple values And String Operations in Python

### IMP Point

By Default data type of input function is String.

### Spilt Function

The split() method splits a string into a list.

```python
sentence="My Name is vedika".split()
print(sentence)
```

**Output**

> ['My', 'Name', 'is', 'vedika']

In the above example we can create one variable and name that variable is `sentence`then we will stored the string of that variable is `My Name is vedika` and we can use split function then the split function are use to divide the small parts of sentence and the split function are create sentence in a list.

```python
a,b=input("Enter two values").split()
print("a= ",a)
print("b= ",b)
```

**Output**

> Enter two values 2 5<br/>
> 2 5<br/>
> a= 2<br/>
> b= 5

In the above example we can stored two variable a,b and one input box using split function.

```python
rate,quantity=input("Enter rate and quantity").split()
bill=int(rate)*int(quantity)
print("bill :",bill)
```

**Output**

> Enter rate and quantity 8 8<br/>
> 8 8 <br/>
> bill : 64

### Multiline String

You can print multiples lines then we enclosing that lines it in a triple quotes `""" """`.

```python
poem="""
Twinkle, twinkle, little star,
How I wonder what you are.
Up above the world so high,
Like a diamond in the sky.
Twinkle, twinkle, little star,
How I wonder what you are!"""
print(poem)
```

### Slicing

A slice object is used to specify how to slice a sequence. You can specify where to start the slicing, and where to end.

**Syntax:**

```python
stringname[startindex:endindex]
```

```python
mystring="Road to Code"
print(mystring[0:4])
```

**Output**

> Road

In the above example the name of variable is `mystring` in that we stored one string `Road to Code`& in a second line we print mystring using a `slicing`. in a slicing the startindex is 0 and endindex is 4 that's why the output is start from 0 to 4 position. and always remember endindex position is end -1.

```python
mystring="Road to Code"
print(mystring[1:])
```

**Output**

> oad to Code

```python
mystring="Road to Code"
print(mystring[:8])
```

**Output**

> Road to

### Length Function

len() is a built-in function in python. You can use the len() to get the length of the given string, array, list.

```python
studentname="vedika"
print(len(studentname))
```

**Output**

> 6

```python
studentname="anand"
length=len(studentname)
print(length)
```

**Output**

> 5

### in operator

The 'in' operator is used to check if a value exists in a sequence or not.

```python
mystring="Road to Code"
print("Road" in mystring)
```

**Output**

> True

```python
mystring="Dahi Puri"
print("Pani" in mystring)
```

**Output**

> False

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
