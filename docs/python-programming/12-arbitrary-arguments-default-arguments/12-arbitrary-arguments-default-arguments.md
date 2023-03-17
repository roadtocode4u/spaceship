---
title: Arbitrary Arguments, Default Arguments
description: "Arbitrary Arguments, Default Arguments"
hide_table_of_contents: true
---

## Arbitrary Arguments :

Especially useful when we are not sure in the advance that how many arguments, the function would require.

We define the arbitrary arguments while defining a function using the asterisk (*) sign.

**Program :**
```python showLineNumbers="true" title="Arbitrary arguments.py"
def greeting(* students):
  print(students[0])
  print(students[1])
  print(students[2])
greeting("Ankita","Mahesh","Dhanashri")
```
**Output**
>Ankita <br/>
>Mahesh <br/>
>Dhanashri <br/>

In the above example, we are create function `greeting` with the use of arbitrary argument its defining a function using the asterisk (*) sign.
print `students` variable , while define `greeting` function that time we are pass `studests` in parameter.

**Program :**
```python showLineNumbers="true" title="Arbitrary arguments.py"
def greeting(* students):
  for i in students:
    print("Hello", i)
greeting("Ankita","Mahesh","Dhanashri","Harshada")
```
**Output**
>Hello Ankita <br/>
>Hello Mahesh <br/>
>Hello Dhanashri <br/>

In the above example, we are create function `greeting` with the use of arbitrary argument its defining a function using the asterisk (*) sign.
there is used of `for` loop, print `Hello` & each students , while define `greeting` function that time we are pass `studests` in parameter.

## Default Arguments :

In Python, both values are passed during the function call. Hence, these values are used instead of the default values.

**Program :**
```python showLineNumbers="true" title="Default arguments.py"
def greeting(name="Vedika"):
  print("Hello",name)
greeting()
```
**Output**
>Hello Vedika

In the above example, we are create function `greeting` with passing parameter in that define `default argument` ie `name="Vedika"`. then print print that name variable, in last line define `greeting` function.

**Program :**
```python showLineNumbers="true" title="Default arguments.py" 
def fruits(fruit1, fruit2="Banana",fruit3="Mango"):
  print(fruit1)
  print(fruit2)
  print(fruit3)
fruits("Apple","Orange")
```
**Output**
>Apple<br/>
>Orange<br/>
>Mango<br/>

In the above example, we are create function `fruits` with passing parameter in that define `default argument` ie `fruit1, fruit2="Banana", fruit3="Mango"`. then print print fruit1, fruit2 & fruit3 . while define 
`fruits` function we are pass in their "Apple" & "Orange" parameter so,Organge will be replace with the "Banana" . 