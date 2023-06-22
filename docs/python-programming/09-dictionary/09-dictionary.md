---
title: Dictionary
description: "Dictionary"
hide_table_of_contents: true
---

## Dictionary in Python

Dictionaries are used to store data values in `key:value` pairs.

**Syntax :**

```python
 dictionary_name={
    key1:value1,
    key2:value2,
    key3:value3
}
```

**Example 1 :**

```python
phoneBook = {
    "Dolly" : "1234567890",
    "Anu" : "9876543210",
    "Avinash" : "21323422222",
    "Pooja" : "878975457"
}
print(phoneBook)
```

**Output :**

> {'Dolly': '1234567890', 'Anu': '9876543210', 'Avinash': '21323422222', 'Pooja': '878975457'}

**Example Exaplanation :**

The code defines a dictionary name `phoneBook` which contains key-value pairs where each key represents a name and each value represents a `phone number`. Output shows the entire phonebook dictionary with all the `key-value` pairs.

**Example 2 :**

```python
phoneBook = {
    "Dolly" : "1234567890",
    "Anu" : "9876543210",
    "Avinash" : "21323422222",
    "Pooja" : "878975457"
}
print(phoneBook["Pooja"])
```

**Output :**

> 878975457

**Example Explanation :**

The code defines a dictionary named `phoneBook` which contains key-value pairs where each key represents a name and each value represents a `phone number`. The code then prints the value associated with the key `"Pooja"` using dictionary.

**Example 3 :**

```python
phoneBook = {
    "Dolly" : "1234567890",
    "Anu" : "9876543210",
    "Avinash" : "21323422222",
    "Pooja" : "878975457"
}
print("Anu =",phoneBook["Anu"])
```

**Output :**

> Anu = 9876543210

**Example Explanation :**

The code defines a dictionary named `phoneBook` which contains key-value pairs where each key represents a name and each value represents a `phone number`. The code then prints in a formatting way the value associated with the key `"Anu"` using a dictionary.

- **Example by using `get()` method :**

**Example 4 :**

```python
phoneBook = {
    "Dolly" : "1234567890",
    "Anu" : "9876543210",
    "Avinash" : "21323422222",
    "Pooja" : "878975457"
}
print(phoneBook.get("Avinash"))
```

**Output :**

> 21323422222

**Example Explanation :**

The code defines a dictionary named `phoneBook` which contains key-value pairs where each key represents a name and each value represents a `phone number`. We can print a specific keys values then you will use also get function one key and that key and that function will give a that specific key value.

**Example 5 :**

```python
phoneBook = {
    "Dolly" : "1234567890",
    "Anu" : "9876543210",
    "Avinash" : "21323422222",
    "Pooja" : "878975457"
}
name = input("Enter name to find mob no :")
mobile = phoneBook.get(name)
print("Mobile Number :",mobile)
```

**Output :**

> Enter name to find mob no :Pooja <br/>
> Mobile Number : 878975457

**Example Explanation :**

The code defines a dictionary named `phoneBook` which contains key-value pairs where each key represents a name and each value represents a phone number. We can create one variable name and in that variable we can give a input from the user then in a next line we create a one variable is `mobile` and in a mobile we can pass that user input and in a next line we print that mobile number.

**Example 6 :**

```python
fruitsNameToImage = {
    'Apple' : '🍎',
    'Graphs' : '🍇',
    'Banana' : '🍌',
    'Orange' : '🍊',
    'Cherry' : '🍒'
}
fruitKey = input("Enter fruit Name : ")
image =fruitsNameToImage.get(fruitKey)
print("{} Looks Like {}".format(fruitKey,image))
```

**Output :**

> Enter fruit Name : Orange<br/>
> Orange Looks Like 🍊

**Example Explanation :**

The code defines a dictionary name `fruitsNameToImage` which contains key-value pairs where each key represents a fruitsname and each value represents a fruitsemoji.

**Example 7 :**

```python
courses ={
    "C" :"499",
    "C++" :"499",
    "Python" :"499",
    "DSA" :"999",
    "ICP" :"999",
    "ICGP" :"10,000"
}
print(courses.keys())
```

**Output :**

> dict_keys(['C', 'C++', 'Python', 'DSA', 'ICP', 'ICGP'])

**Example Explanation :**

The code defines a dictionary named `courses` which contains key-value pairs where each key represents the name of a course and each value represents its price. The code then uses the `keys()` method of the courses dictionary to retrieve a list of all the keys in the dictionary.

**Example 8 :**

```python
courses ={
    "C" :"499",
    "C++" :"499",
    "Python" :"499",
    "DSA" :"999",
    "ICP" :"999",
    "ICGP" :"10,000"
}
print(courses.values())
```

**Output :**

> dict_values(['499', '499', '499', '999', '999', '10,000'])

**Example Explanation :**

The code defines a dictionary named `courses` which contains key-value pairs where each key represents the name of a course and each value represents its price. The code then uses the `values()` method of the courses dictionary to retrieve a list of all the values in the dictionary.

### Adding New Key :

**Syntax :**

```python
dictionary_name={
    key1:value1,
    key2:value2,
    key3:value3
}
dictionary_name["Key-name"]
```

**Example :**

```python
courses ={
    "C" :"499",
    "C++" :"499",
    "Python" :"499",
    "DSA" :"999",
    "ICP" :"999",
    "ICGP" :"10,000"
}
print(courses)
courses["Java"] = "499"
print(courses)
```

**Output :**

> {'C': '499', 'C++': '499', 'Python': '499', 'DSA': '999', 'ICP': '999', 'ICGP': '10,000'}<br/>
> {'C': '499', 'C++': '499', 'Python': '499', 'DSA': '999', 'ICP': '999', 'ICGP': '10,000', 'Java': '499'}

**Example Explanation :**

The code defines a dictionary named `courses` which contains key-value pairs where each key represents the name of a course and each value represents its price. In the above example, we can add a new course and the new course is `Java` and print a directory in next time.

### Update Key :

**Syntax :**

```python
dictionary_name={
    key1:value1,
    key2:value2,
    key3:value3
}
dictionary_name["Key-name"] = "value"
```

**Example :**

```python
courses ={
    "C" :"499",
    "C++" :"499",
    "Python" :"499",
    "DSA" :"999",
    "ICP" :"999",
    "ICGP" :"10,000"
}
print(courses)
courses["Python"] = "999"
print(courses)
```

**Output :**

> {'C': '499', 'C++': '499', 'Python': '499', 'DSA': '999', 'ICP': '999', 'ICGP': '10,000'}<br/>
> {'C': '499', 'C++': '499', 'Python': '999', 'DSA': '999', 'ICP': '999', 'ICGP': '10,000'}

**Example Explanation :**

The code defines a dictionary named `courses` which contains key-value pairs where each key represents the name of a course and each value represents its price. In the above example, we can update a `Python` value and print a directory in next line.

### Remove key :

**Syntax :**

```python
dictionary_name={
    key1:value1,
    key2:value2,
    key3:value3
}
dictionary_name.pop["Key-name"]
```

**Example :**

```python
courses ={
    "C" :"499",
    "C++" :"499",
    "Python" :"499",
    "DSA" :"999",
    "ICP" :"999",
    "ICGP" :"10,000",
    'Java': '499'
}
print(courses)
courses.pop("Java")
print(courses)
```

**Output :**

> {'C': '499', 'C++': '499', 'Python': '499', 'DSA': '999', 'ICP': '999', 'ICGP': '10,000', 'Java': '499'}<br/>
> {'C': '499', 'C++': '499', 'Python': '499', 'DSA': '999', 'ICP': '999', 'ICGP': '10,000'}

**Example Explanation :**

The code defines a dictionary named `courses` which contains key-value pairs where each key represents the name of a `course` and each value represents its `price`. In the above example, we can use the `pop()` method and in a pop method we can pass one element and that element will be deleted.

### Clear Dictionary :

**Syntax :**

```python
dictionary_name={
    key1:value1,
    key2:value2,
    key3:value3
}
dictionary_name.clear()
```

**Example :**

```python
courses ={
    "C" :"499",
    "C++" :"499",
    "Python" :"499",
    "DSA" :"999",
    "ICP" :"999",
    "ICGP" :"10,000",
    'Java': '499'
}
print(courses)
courses.clear()
print(courses)
```

**Output**

> {'C': '499', 'C++': '499', 'Python': '499', 'DSA': '999', 'ICP': '999', 'ICGP': '10,000', 'Java': '499'}<br/>
> {}

**Example Explanation :**

The code defines a dictionary named `courses` which contains key-value pairs where each key represents the name of a `course` and each value represents its `price`. In the above example, we can clear all dictionary then we will use `clear()` method. The `clear()` method is used to clear all the dictionary.
