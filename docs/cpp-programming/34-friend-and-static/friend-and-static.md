---
title: friend and static function
description: "friend-and-static-function"
hide_table_of_contents: true
---

## Friend Function

A friend function is accesses private data member.

**Syntax**

```class className
{
   friend returntype functionName(arg)
}
```

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

class sample
{
    private:
    int a = 5;

    friend void display(sample); //declare
};

void display(sample s)
{
    cout<<"a :"<<s.a<<endl; //access private data member
} //defination

int main() {
    sample.s;
    display(s);

}

```

**Output**

> a = 5

**Explanation**

Created a normal class, made a private data member inside it.
Integer type data member created 5 value store<br/>
create a friend function return type is void function name is display pass argument `sample`.<br/>
create friend function return type is void and display function whole class as a argument and object `sample s`<br/>
sample name class is its object created
Called the function of display name and passed the object and accessed the variable of name A from the object. The friend function also accesses the private data member.

## Static class member

Static class member only one copy of the static member shared by all objects of a class in a program.<br/>

static = keyword

:: scope resolution operator

- Whenever we have to access a static member, we use the scope resolution operator.

```cpp
class myclass
public:
static int count;
```

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

class Item
{
    public:
    static int count;

    Item()
    {
        count++;
    }
    void getCount()
    {
        cout<<"count: "<<count<<endl;
    }

};
int Item::count = 0;

int main() {

    Item a,b,c;

    a.getCount();
    b.getCount();
    c.getCount();

    Item::count++;

    a.getCount();
    b.getCount();
    c.getCount();

    return 0;

}

```

**Output**

> count : 3<br/>
> count : 3<br/>
> count : 3<br/>
> count : 4<br/>
> count : 4<br/>
> count : 4<br/>

**Explanation**

Create a class `Item` declare a variable `static` that name has `count` datatype is `integer`.<br/>
Create a constructor and increase `count` value by one<br/>
create a `getCount` method , using `cout` print Count and `count` variable.<br/>
In next line `int Item::count = 0;` it means initialize the satic value using class name.<br/>
Create a object `a,b, and c ` using class name. using object call a constructor.<br/>
`Item::count++;` increase the static variable value by one. <br/>
