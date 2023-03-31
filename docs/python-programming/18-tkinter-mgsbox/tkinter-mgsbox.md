---
title: Tkinter-MgsBox
description: "Tkinter-MgsBox"
hide_table_of_contents: true
---

## Tkinter :

**💻Example :**

```python
from tkinter import *

def fun():
    print("button click")
    
top=Tk()
top.geometry("500x400")
top.title('Button Click Example')
btn1=Button(top,text="Click Me !",command=fun).place(x=100,y=200)
top.mainloop()
```
**⚙️ Output :**
<img  src="/python/18/output1.png" width="500px"/>

## Three Types alters

**💻Example :**

```python
from tkinter import *
from tkinter import messagebox

def fun():
    messagebox.showinfo('Title','Description')

top=Tk()
top.geometry("500x400")
top.title('Botton click example')

btn1=Button(top,text="click Me!",command=fun).place(x=100,y=100)
top.mainloop()
```
**⚙️ Output :**
<img  src="/python/18/output2.png" width="500px"/>

**💻Example :**

```python
from tkinter import *
from tkinter import messagebox

def fun():
    messagebox.showwarning('Title','Description')

top=Tk()
top.geometry("500x400")
top.title('Botton click example')

btn1=Button(top,text="click Me!",command=fun).place(x=100,y=100)
top.mainloop()
```
**⚙️ Output :**
<img  src="/python/18/output3.png" width="500px"/>

**💻Example :**

```python
from tkinter import *
from tkinter import messagebox

def fun():
    messagebox.showerror('Title','You are not eligible certification')

top=Tk()
top.geometry("500x400")
top.title('Botton click example')

btn1=Button(top,text="click Me!",command=fun).place(x=100,y=100)
top.mainloop()

```
**⚙️ Output :**
<img  src="/python/18/output4.png" width="500px"/>

**💻Example :**

```python
from tkinter import *

top=Tk()
top.geometry("500x400")
top.title('Foreground and Baground')

btn1=Button(top,text="click Me!",fg="red",bg="white").place(x=100,y=100)
top.mainloop()

```
**⚙️ Output :**
<img  src="/python/18/output5.png" width="500px"/>

**💻Example :**

```python
from tkinter import *

top=Tk()
top.geometry("500x400")


top.title('Foreground and Baground')

lbl1=Label(top,text="Enter Your Name :",font="Algerian 10 bold",fg="blue").place(x=100,y=50)


el=Entry(top,width=20)
el.config(font="Algerian 10 bold")
el.place(x=100,y=100)


btn1=Button(top,text="This is a Button",bg="red",fg="white",font="Algerian 10 bold").place(x=100,y=200)
top.mainloop()

```

**⚙️ Output :**
<img  src="/python/18/output6.png" width="500px"/>
