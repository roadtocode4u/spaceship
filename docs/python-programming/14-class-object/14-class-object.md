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
