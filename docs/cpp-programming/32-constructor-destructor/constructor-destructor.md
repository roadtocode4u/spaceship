---
title: constructor-destructor
description: "constructor-destructor"
hide_table_of_contents: true
---

# Constructor & Destructor

## Constructor

constructor - to create

**Rules for creating Constructor**

1. It is special function.

2. It invokes automatically when object is created.

3. It does not return value.

4. Constructor name & class name must be same.

**syntax:**

```cpp

class Emp
{
    public:
    Emp()  //Constructor created
    {

    }
};
```

```cpp

#include <iostream>
using namespace std;

class Student
{
   public:
   int roll;
   string name;

   void getData()
   {
    cout<<"Enter Name :";
    cin>>name;
    cout<<"Enter Roll No :";
    cin>>roll ;
   }

   void showStudent()
   {
    cout<<"Name : "<<name<<end;
    cout<<"Roll No : "<<roll <<endl;
   }

};
int main() {

    Student s1;
    s1.getData();
    s1.showStudent();

    return 0;
}
```

**Output :**

> Enter name : Achal<br/>
> Enter Roll No : 10<br/>
> Name : Achal<br/>
> Roll No : 10<br/>

**Explanation :**
create class `Student` declare `int` variable `roll` and `string` name.<br/>
create `void` function `getData` print `Enter Name` and `Enter Roll No`. using cout<br/>
create `void` function `showStudent` print `Name` and `Roll No`.<br/>
In main function create a object using class name `Student` `s1`.<br/>
using object `s1` call function `s1.getData();` and `s1.showStudent`.<br/>

```cpp

#include <iostream>
using namespace std;

class Student
{
   public:
   int roll;
   string name;

   Student()
   {
    cout<<"Constructor Called .."<<endl;
   }

   void getData()
   {
    cout<<"Enter name :";
    cin>>name;
    cout<<"Enter Roll No :";
    cin>>roll ;
   }

   void showStudent()
   {
    cout<<"Name : "<<name<<end;
    cout<<"Roll No : "<<roll <<endl;
   }

};
int main() {

    Student s1;
    s1.showStudent();

    return 0;
}
```

**Output :**

> Constructor Called ..<br/>
> Enter name : Achal<br/>
> Enter Roll No : 10<br/>
> Name : Achal<br/>
> Roll No : 10<br/>

**Explanation :**

create class `Student` declare `int` variable `roll` and `string` name.<br/>
create `Contsructor` class name and constructor name has same, and print `Constructor Called ..`<br/>
create `void` function `getData` print `Enter Name` and `Enter Roll No`. using cout<br/>
create `void` function `showStudent` print `Name` and `Roll No`.<br/>
In main function create a object using class name `Student` `s1`.<br/>
First of all automatically call constructor the call function using object<br/>
using object `s1` call function `s1.getData();` and `s1.showStudent`.<br/>

```cpp
#include <iostream>
using namespace std;

class Student
{
    public :
    Student(int marks)
    {
        cout<<"I Got "<<marks<<endl;
    }
};
int main() {
    Student s1(90);
    Student s2(89);

    return 0;
}
```

**Output :**

> I Got 90<br/>
> I Got 89<br/>

**Explanation :**

create class `Student <br/> create consturctor `Student`named, pass parameter`marks`and its datatype`int`.<br/>
print `I Got`and and marks variable. <br/>
In main function create a object`s1`pass value`90`.<br/>
create a object `s2`pass value`89`.<br/>

## Destructor

- It calls when object goes out of scope.

**syntax:**

```cpp

class Emp
{
    public:
    -Emp() // destructor created
    {

    }
};
```
