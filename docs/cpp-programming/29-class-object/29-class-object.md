---
title: class-object
description: "class-object"
hide_table_of_contents: true
---

# Class and Objects

### Class

A class is a user-defined data type that we can use in our program, and it works as an object constructor, or a "blueprint" for creating objects.

```cpp

data members -> storage -> variable

member function -> to perform operation -> function

```

```cpp
int roll;   //data members
string name;

void display() // member functions
{
    information
}
```

### How to create class?

```cpp

class <className>
{
    public :   <-//access specifiers
    //data members
    int roll;
    // member functions
    void show(){ }
};

```

### Access Specifiers

- Public
- Private
- Protected

```cpp showLineNumbers = "true"
class Student  // create class
{
    public:
    int roll;

    void show () {
        cout<<"Your roll number is : "<<roll<<endl;

    }
}

```

### How to create object ?

```cpp
classname objectName;

```

```cpp showLineNumbers = "true"
class Student // create class
{
    public:
    int roll;

    void show () {
        cout<<"Your roll number is : "<<roll<<endl;

    }
}
int main(){
    Student s1, s2;  //create object

    s1.roll = 123;
    s2.roll = 567;

    s1.show();
    s2.show();
}

```

**Output :**

> Your roll number is : 123<br/>
> Your roll number is : 567

**Explanation :**

Create a class Student, write access specifier public, declare 1 datamember roll.<br/>
create a show() function member and print `Your roll number is : ` and roll variable.<br/>
In main function create object of Student class s1 and s2.<br/>
pass value in object s1.roll = 123<br/>
pass value in object s2.roll = 567<br/>
using object call show() function<br/>

_Example 1:_

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

class Student
{
    public:

    int age;
    string name;

    void getData()
    {
        cout<<"Enter Name :";
        cin>>name;
        cout<<"Enter Your age :";
        cout>>age;
    }
     void showData()
     {
        cout<<"Name  :"<<name<<"Age : "<<age;<<endl;
     }


};
int main() {

    Student s1;
    s1.getData();
    s2.getData();

    s1.showData();
    s2.showData();

    return 0;
}
```

_Output :_

> Enter Name : Ayesha <br/>
> Enter Your age :20<br/>
> Name : Ayesha Age : 20<br/>
> Enter Name : Harshal <br/>
> Enter Your age :20<br/>
> Name : Harshal Age : 20<br/>

**Explanation :**

Create a class Student, write access specifier public, declare 2 datamember age and name.<br/>
create a getdata() function and print `Enter name and age` <br/>
create a showData() function and print name and variable, age and variable
In main function create object of Student class s1 and s2.<br/>
using object call getData() and showData()

_Example 2:_

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

class Rectangle
{
    public:

    int length;
    int breadth;

    void getData()
    {
        cout<<"Enter Length and Breadth :";
        cin>>length>>breadth;
        cout<<endl;

    }
    void calculateArea()
    {
        int area = length * breadth;
        cout<<"Area : "<<area;
        cout<<endl;
    }

};
int main() {

    Rectangle r1, r2;

    r1.getData();
    r1.calculateArea();

    r2.getData();
    r2.calculateArea();



    return 0;
}
```

_Output :_

> Enter Length and Breadth : 20 10<br/>
> Area : 200<br/>
> Enter Length and Breadth :10 10 <br/>
> Area : 100

**Explanation :**

Create a class Rectangle, write access specifier public, declare 2 datamember length and breadth.<br/>
create member function `calculateArea` declare `area variable` and calulate `length * breadth` and print `area`.<br/>
In main function create object of Rectangle class r1 and r2.<br/>
using object call getData() and calculateArea()
