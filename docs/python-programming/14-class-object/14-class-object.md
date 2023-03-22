---
title: Class and Object
description: "Class and Object"
hide_table_of_contents: true
---

## Class and Object 
Python is an object oriented programming language.
Almost everything in Python is an object, with its properties and methods.

A Class is like an object constructor, or a "blueprint" for creating objects.

**Example :**

```python showLineNumbers='true' title='example.py'
class students:
  full_name = ''
  roll_no = ''

  def ShowStudent(self):
    print(self.full_name)
    print(self.roll_no)

chaitali = students()
chaitali.full_name = "Chaitali"
chaitali.roll_no = 123
chaitali.ShowStudent()

sahil = students()
sahil.full_name = "Sahil"
sahil.roll_no = 124
sahil.ShowStudent()
```

**Output**

>Chaitali <br/>
>123 <br/>
>Sahil <br/>
>124 

In the above example, we are creating the `Students` class in this class we are declare two variables that's name is `full_name` & `roll_no`. And to create the `showStudent()` function with the pass `self` parameter.

So, we are create object for class `Students` that is `chaitali` with the help of `chaitali` object we are calling `full_name` & `roll_no` again create one object for `Students` that name is `sahil`, Similarly we are calling `full_name` & `roll_no` with the   `sahil` object.

## Getter and Setter in Python 

**Getter :**

Getter Method is use to provide a data.

**Setter :**

Setter Method is use to set or manipulate data.

```python showLineNumbers='true' title='set & get.py'
class student:
  name = ''
  roll_no = ''

  def setStudent(self,name,roll_no):
    self.name = name
    self.roll_no = roll_no
  
  def getStudents(self):
    print("Name : ",self.name)
    print("Roll No : ",self.roll_no)

kavita = student()
kavita.setStudent("Kavita","123")
kavita.getStudents()
```

**Output**

>Name :  Kavita <br/>
>Roll No :  123

In the above example, we are creating the `Student` class in this class we are declare two variables that's name is `Name` & `roll_no`. And to create the two functions that's name is  `setStudent()` & `getStudents` with the pass `self` parameter.

So, we are create object for class `Student` that is `kavita` with the help of `kavita` object we are calling `setStudent()` & `getStudents` in the `setStudent` we are pass two parameter for `Name` & `roll_no`