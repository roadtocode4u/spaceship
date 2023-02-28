---
title: Dictionary
description: "Dictionary"
hide_table_of_contents: true
---
## Dictionary in Python

Dictionaries are used to store data values in key:value pairs.
```python
syntax = dictionary_name={
    key1:value1,
    key2:value2,
    key3:value3
}
```

```python
phonebook = {
    "Dhanashri" : "477637673267",
    "Ashwini" : "46764763887",
    "Snehal" : "8346764387",
    "Kavita" : "37546636734",
    "Harsha" : "48787586865"
}
print(phonebook)
```
**Output**
>{'Dhanashri': '477637673267', 'Ashwini': '46764763887', 'Snehal': '8346764387', 'Kavita': '37546636734', 'Harsha': '48787586865'}

The code defines a dictionary name `phonebook` which contains key-value pairs where each key represents a name and each value represents a phone number.
output shows the entire phonebook dictionary with all the `key-value` pairs.

```python
phonebook = {
    "Dhanashri" : "477637673267",
    "Ashwini" : "46764763887",
    "Snehal" : "8346764387",
    "Kavita" : "37546636734",
    "Harsha" : "48787586865"
}
print(phonebook["Harsha"])
```
**Output**
>48787586865

The code defines a dictionary named `phonebook` which contains key-value pairs where each key represents a name and each value represents a phone number.
The code then prints the value associated with the key `"Harsha"` using dictionary.

```python
phonebook = {
    "Dhanashri" : "477637673267",
    "Ashwini" : "46764763887",
    "Snehal" : "8346764387",
    "Kavita" : "37546636734",
    "Harsha" : "48787586865"
}
print(phonebook.get("Ashwini"))
```
**Output**
>46764763887

The code defines a dictionary named `phonebook` which contains key-value pairs where each key represents a name and each value represents a phone number.

we can print a specific  keys values then you will use also get function one key and that key and that function will give a that specific key value



```python
phonebook = {
    "Dhanashri" : "477637673267",
    "Ashwini" : "46764763887",
    "Snehal" : "8346764387",
    "Kavita" : "37546636734",
    "Harsha" : "48787586865"
}

name = input("Enter name to find mobile no : ")
mobile = phonebook.get(name)
print("Mobile Number : ",mobile)
```
**Output**
>Enter name to find mobile no : Kavita<br/>
>Mobile Number :  37546636734

The code defines a dictionary named `phonebook` which contains key-value pairs where each key represents a name and each value represents a phone number.

We can create one variable name and in that variable  we can give a input from the user then in a next line we create a one variable is `mobile` and in a mobile we can pass that user input and in a next line we print that mobile number.

```python
fruitsNameToImage = {
    "Apple" : "🍎",
    "Banana" : "🍌",
    "cherry" : "🍒",
    "Grapes" : "🍇",
    "Orange" : "🍊"
}

fruitsKey = input("Enter fruit Name :")
image = fruitsNameToImage.get(fruitsKey)
print("{} looks like {} ".format(fruitsKey,image))
```
**Output**
>Enter fruit Name :Orange<br/>
>Orange looks like 🍊 

The code defines a dictionary name `fruitsNameToImage` which contains key-value pairs where each key represents a fruitsname and each value represents a fruitsemoji.

```python
courses = {
    "c" : "499",
    "c++" : "499",
    "python" : "499",
    "ICP" : "999"
}
print(courses.keys())
```
**Output**
>dict_keys(['c', 'c++', 'python', 'ICP'])

The code defines a dictionary named `courses` which contains key-value pairs where each key represents the name of a course and each value represents its price.

The code then uses the keys() method of the courses dictionary to retrieve a list of all the keys in the dictionary.


```python
courses = {
    "c" : "499",
    "c++" : "499",
    "python" : "499",
    "ICP" : "999"
}
print(courses.values())
```
**Output**
>dict_values(['299', '299', '499', '999', '499'])

The code defines a dictionary named `courses` which contains key-value pairs where each key represents the name of a course and each value represents its price.

The code then uses the values() method of the courses dictionary to retrieve a list of all the values in the dictionary.

### Adding New Key :
```python
courses = {
    "c" : "499",
    "c++" : "499",
    "python" : "499",
    "ICP" : "999"
}
print(courses)
courses["Data S"] = "999"
print(courses)
```
**Output**
>{'c': '499', 'c++': '499', 'python': '499', 'ICP': '999'}<br/>
>{'c': '499', 'c++': '499', 'python': '499', 'ICP': '999', 'Data S': '999'}

The code defines a dictionary named `courses` which contains key-value pairs where each key represents the name of a course and each value represents its price.

In tha above example we can add a new course and the new course is `Data S` and print a next time.

### Update Key :
```python
courses = {
    "c" : "499",
    "c++" : "499",
    "python" : "499",
    "ICP" : "999"
}
print(courses)
courses["c++"] = "999"
print(courses)
```
**Output**
>{'c': '499', 'c++': '499', 'python': '499', 'ICP': '999'}<br/>
>{'c': '499', 'c++': '999', 'python': '499', 'ICP': '999'}

The code defines a dictionary named `courses` which contains key-value pairs where each key represents the name of a course and each value represents its price.

In tha above example we can update a `c++` value and print a next line.


### Remove key =
```python
courses = {
    "c" : "499",
    "c++" : "499",
    "python" : "499",
    "ICP" : "999",
    "Data s" : "999",
    "Java" : "499"
}
print(courses)
courses.pop("Java")
print(courses)
```
**Output**
>{'c': '499', 'c++': '499', 'python': '499', 'ICP': '999', 'Data s': '999', 'Java': '499'}<br/>
>{'c': '499', 'c++': '499', 'python': '499', 'ICP': '999', 'Data s': '999'}

The code defines a dictionary named `courses` which contains key-value pairs where each key represents the name of a `course` and each value represents its `price`.

In tha above example we can use pop method and in a pop method we can passed one element and that element will be deleted.

### Clear Dictionary =
```python
courses = {
    "c" : "499",
    "c++" : "499",
    "python" : "499",
    "ICP" : "999",
    "Data s" : "999",
    "Java" : "499"
}
print(courses)
courses.clear()
print(courses)
```
**Output**
>{'c': '499', 'c++': '499', 'python': '499', 'ICP': '999', 'Data s': '999', 'Java': '499'}<br/>
>{}

The code defines a dictionary named `courses` which contains key-value pairs where each key represents the name of a `course` and each value represents its `price`.

In tha above example we can clear all dictionary then we will use clear method() the clear method() is clear all the dictionary.
