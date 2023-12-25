---
title: Polymorphisum Abstraction Encapsulation
description: "polymorphisum abstraction encapsulation"
hide_table_of_contents: true
---

# Encapsulation

- Encapsulation is a bindind similar data and its functionality.

**Example**

```cpp showLineNumbers = "true"

#include <iostream>
using namespace std ;

class bank
{
    public:

    void loan()
    {
        cout<<"Loan :"<<endl;
    }

};

class helper
{
    public:
     int p,r,t,si;
     int l,b,area;

    void Cal_si()
    {
        cout<<"Enter p:"<<endl;
        cout<<p;
        cout<<"Enter r :"<<endl;
        cout<<r;
        cout<<"Enter t :"<<endl;
        cout<<t;

        si = (p*r*t) /100;
        cout<<"Simple Intrest : "<<si<<endl;
    }

    void Cal_area()
    {
        cout<<"Enter Length :"<<endl;
        cout<<l;
        cout<<"Enter Breadth :"<<endl;
        cout<<b;
        area = l*b;
        cout<<"Area :"<<area<<endl;
    }
};

int main() {
    bank obj1;
    obj1.loan();

    helper obj2;
    obj2.cal_si();
    obj2.cal_area();

    return();
}
```

**Output**

> Loan
> Enter p : 5000<br/>
> Enter r : 30 <br/>
> Enter t : 2<br/>
> Simple Intrest : 3000<br/>
> Length : 10<br/>
> Breadth : 20<br/>
> Area : 200<br/>
> **Explanation**

create a class `bank` write access specifier `public` create method `loan` return type void, print `Loan`. <br/>
create a class `helper` write access specifier `public` declare 4 variable `p,r,t,si`, in next line declare 3 variable `l,b,area`.<br/>
create Cal_si() method print `Ente p :` `endl` for next line.<br/> `si = (p*r*t) /100` use this formula for calculate Simple Intrest.<br/> create Cal_area() method print `Enter Length`
`area = l*b` use this formula for calculate Area.<br/>
In main method create a object of class `bank` `obj1` and call loan() method <br/> create a object of class `helper` `obj2` and call cal_si() method and call cal_area() method.<br/>

# Abstraction

- Show neccessary thing and hinding unneccessary information from use.

```cpp showLineNumbers = "true"

#include <iostream>
using namespace std ;

class info
{
    public:
    string name;

    void getname()
    {
        cout<<"Enter Name:"<<endl;
        cin>>name;
    }
     void showname()
    {
        cout<<"My Name is : "<<name<<endl;

    }

};

int main() {

    info obj;
    obj.getname();
    obj.showname();

}

```

**Output**

> Enter Name : Achal<br/>
> My Name is : Achal
> **Explanation**

Create a class `info` write a access specifier `public`, declare variable `name`, datatype is `string` void `getname` method and print `Enter name ` from user.<br/>
create another method `showname` and print `My Name is :` and variable `name `.<br/>
In main function create a object `obj`, and call obj.getname() obj.showname() method using object<br/>

# Polymorphisum

- Polymorphism as the ability of a message to be displayed in more than one form.

- poly = many
- morphism = form

```cpp showLineNumbers = "true"

#include <iostream>
using namespace std ;

class cat
{
    public:
    void speak()
    {
        cout<<"Meoow567890435:"<<endl;
    }

};
class dog
{
    public:

    void speak()
    {
        cout<<"bhooo0oo0oooo:"<<endl;
    }

};
int main() {

    cat obj1;
    obj1.speak();

    dog obj2
    obj2.speak();

}

```

**Output**

> Meoow567890435<br/>
> bhooo0oo0oooo<br/>
> **Explanation**

Create a class `cat` write a access specifier `public`, void `speak` method and print `Meoow567890435`.<br/>
Create an another class `dog` write a access specifier `public`, void `speak` method and print `bhooo0oo0oooo`.<br/>
In main function create a object `obj1`, and speak method using object<br/>
In next line create a object `obj2`, and speak method using object<br/>
