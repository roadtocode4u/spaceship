---
title: Comments and String Operations
description: "Comments and String Operations"
hide_table_of_contents: true
---

### Comments in python

A comments is a piece of code that ignored by the compiler and it is useful for human readers to understand the code better.Comments are useful for providing explanations, documenting code or temporarily.

**1. Single Line Comment (#)**

A single-line comment begins with a hash **(#)** symbol. The single-line comment is used to comment only one line of the code.

**Example :**

```python
print("Hello World")
# This is Hello World program.
```

**Output :**

Hello World

**Example Explanation :**

In above example, you can created a single line comment by using the `#` character. You can also add comments at the end of a line of code like this `# This is Hello World program`.

**2. Multiline Comment (""" """)**

In Python Triple double quote (""") and single quote (''') are used for Multi-line commenting.
Multi-line comment is useful when we need to comment on many lines.

**Example :**

```python showLineNumbers="true"
print("Hello World!")
"""This is a Hello World program.
This is sample code.
We used multiple line commet"""
```

**Example Explanation :**

In above example, you can created a multi line comment starting with `"""` and ending with `"""`.

### String Manipulation

**1. Upper()**

Upper() function is used to converts a string into upper case.

**Example :**

```python showLineNumbers="true"
myString = "road to code 4u"
print("Original String :",myString)
newString = myString.upper()
print("New String :",newString)
```

**Output :**

> Original String : road to code 4u <br/>
> New String : ROAD TO CODE 4U

**Example Explanation :**

In above example, we created 1st variable `mystring` for storing the string `road to code 4u`,then print the original string. `upper()` function is used to convert string into uppercase letter. We can created 2nd variable `newString` for store converted uppercase string. Output is ROAD TO CODE 4U.

**2. Lower()**

Lower() function is used to converts a string into lower case.

**Example :**

```python showLineNumbers="true"
myString = "ROAD TO CODE 4U"
print("Original String :",myString)
newString = myString.lower()
print("New String :",newString)
```

**Output :**

> Original String : ROAD TO CODE 4U <br/>
> New String : road to code 4u

**Example Explanation :**

In above example, we created 1st variable `mystring` for storing the string `ROAD TO CODE 4U`,then print the original string. `lower()` function is used to convert string into lowercase letter. We can created 2nd variable `newString` for store converted lowercase string. Output is road to code 4u.

**3. Strip()**

Strip() function is used to removes white space (unnecessary spaces) from the end of string.

**Example :**

```python showLineNumbers="true"
str1 = "rtc4u"
str2 = "rtc4u             "
print(str1)
print(str2.strip())
```

**Output :**

> rtc4u <br/>
> rtc4u

**4. Replace()**

Replace() function is used to replace the string.

**Example :**

```python showLineNumbers="true"
myString = "roadtocode"
newString = myString.replace("o","#")
print(newString)
```

**Output :**

> r#adt#c#de

**Example Explanation :**

In the above example, we provide two parameters for replacing the characters, 1st parameter `o` is given in the string and 2nd is `#` you replace in that place.

**5. split()**

Splits the string at the specified separator, and returns a list.

**Example 1:**

```python showLineNumbers="true"
myString = "My name is Yogita".split()
print(myString)
```

**Output :**

> ['My', 'name', 'is', 'Yogita']

**Example Explanation :**

In the above example, we used `split()` function for seperate or break the string.

**Example 2:**

```python showLineNumbers="true"
students = "Yogita,Harshada,Anushka,Sakshi"
print(students.split(","))
```

**Output :**

['Yogita', 'Harshada', 'Anushka', 'Sakshi']

**Example Explanation :**

In the above example, you can provide split the string `Yogita,Harshada,Anushka,Sakshi` into a list of individual names using the comma (",") as the separator.

**Example 3:**

```python showLineNumbers="true"
students = "Yogita#Harshada#Anushka#Sakshi"
print(students.split("#"))
```

**Output :**

['Yogita', 'Harshada', 'Anushka', 'Sakshi']

**Example Explanation :**

In the above example, you can provide split the string `Yogita#Harshada#Anushka#Sakshi` into a list of individual names using the comma ("#") as the separator.

### Array

Array is collection of similar data types. Array index is always start with `0` index.

**Example :**

```python
myString="India"
print(myString[2])
```

**Output :**

> d

:::info
In Python language, an array concept is not available. Array is available in other languages like c, c++, etc.
:::

### Escape Charaters

An escape character is a special character it is used to represent certain sequences of characters that cannot be directly represented in a string.

**Example 1:**

```python
sentence = "I'm Yogita."
print(sentence)
```

**Output :**

> I'm Yogita.

**Example Explanation :**

In the above example, we assinged variable `sentence` and provide string `"I'm Yogita."`
It is enclosed in double quotes because the sentence itself contains a single quote.The `print()` function is used to output the value of the sentence variable.

**Example 2:**

```python
sentence = 'I\'m Good. She said, How are you?'
print(sentence)
```

**Output :**

I'm Good. She said, How are you??

**Example Explanation :**

In the above example, we assinged variable `sentence` and provide string `'I\'m Good. She said, How are you??'`.It is enclosed in single quotes because the sentence itself contains a single quote. The single quote within the string is preceded by a backslash `(\)` using `\'` as an escape sequence.This single quote should be treated as a literal character and not as the end of the string.The `print()` function is used to output the value of the sentence variable.
