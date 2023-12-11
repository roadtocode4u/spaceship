---
title: Inheritance and types
description: "Inheritance and types"
hide_table_of_contents: true
---

# Inheritance

Inheritance means deviring properties of one class into another class.

class A => Parent /Base / Super class

class B => Child /Derived /Sub-class

```cpp showLineNumbers = "true"

#include <iostream>
using namespace std;

class A
{
    public:
    void showA()
    {
        cout<<"I am showA()"<<endl;
    }
};
class B
{
    public:
    void showB()
    {
        cout<<"I am showB()"<<endl;
    }
};

int main() {
    A objA;
    objA.showA();

    B objB;
    objB.showAB();

    return 0;

}

```

**Output**

> I am showA()<br/>
> I am showB()<br/>

**Explaination**

create class `A` write access specifier public, create a showA() method.<br/>
print `I am showA()`<br/>
create another class `B` write access specifier public, create a showB() method.<br/>
print `I am showB()`<br/>
In main function create object of `A` class and using `objA` object call showA() method<br/>
In next line create object of `B` class and using `objB ` object call showA() method<br/>

```cpp showLineNumbers = "true"

#include <iostream>
using namespace std;

class A
{
    public:
    void showA()
    {
        cout<<"I am showA()"<<endl;
    }
};
class B : public A
{
    public:
    void showB()
    {
        cout<<"I am showB()"<<endl;
    }
};

int main() {
   B objB;
   objB.showB();
   objB.showA();

    return 0;

}

```

**Output**

> I am showA()<br/>
> I am showB()<br/>

**Explaination**

create class `A` write access specifier public, create a showA() method.<br/>
print `I am showA()`<br/>
create another class `B` and inherite the properties of `A` and useing `pulbic` access specifier, <br/>
In next line write access specifier public, create a showB() method.<br/>
print `I am showB()`<br/>
In main function create object of `B` class `objB`.<br/>
using `objB` call showB() and showA() method.<br/>

## Types of Inheritance

1. Single level inheritance

2. Multilevel inheritance

3. multiple inheritance

4. Hierarchical inheritance

### 1. Single level inheritance

The inheritance in which class B is inherited from a class A is known as Single level inheritance

```cpp showLineNumbers = "true"

#include <iostream>
using namespace std;

class A
{
    public:
    void showA()
    {
        cout<<"I am showA()"<<endl;
    }
};
class B : public A
{
    public:
    void showB()
    {
        cout<<"I am showB()"<<endl;
    }
};

int main() {
    c objC;
    objA.showA();

    B objB;
    objB.showAB();

    return 0;

}
```

**Output**

> I am showA()<br/>
> I am showB()<br/>

**Explaination**

create class `A` write access specifier public, create a showA() method.<br/>
print `I am showA()`<br/>
create another class `B` and inherite the properties of `A` and useing `pulbic` access specifier, <br/>
In next line write access specifier public, create a showB() method.<br/>
print `I am showB()`<br/>
In main function create object of `B` class `objB`.<br/>
using `objB` call showB() and showA() method.<br/>

### 2. Multilevel inheritance

The Multilevel inheritance means if a class A , class B and class C . class C is inherited from class B and <br/> class B is inherited from class A
is known as Multilevel inheritance.

```cpp showLineNumbers = "true"

#include <iostream>
using namespace std;

class A
{
    public:
    void showA()
    {
        cout<<"I am showA()"<<endl;
    }
};
class B : public A
{
    public:
    void showB()
    {
        cout<<"I am showB()"<<endl;
    }
};
class C : public B
{
    public:
    void showC()
    {
        cout<<"I am showC()"<<endl;
    }
};

int main() {
   C obj;
   obj.showC();
   obj.showB();
   obj.showA();

    return 0;

}

```

**Output**

> I am showC()<br/>
> I am showB()<br/>
> I am showA()<br/>

**Explaination**

create class `A` write access specifier public, create a showA() method.<br/>
print `I am showA()`<br/>
create another class `B` and inherite the properties of `A` and using `pulbic` access specifier, <br/>
In next line write access specifier public, create a showB() method.<br/>
print `I am showB()`<br/>
create another class `C` and inherite the properties of `B` and using `pulbic` access specifier, <br/>
In main function create object of `C` class `objC`.<br/>
using `objC` call showC() showB() and showA() method.<br/>

### 3. multiple inheritance

In multiple inheritance means that a subclass can inherit from two or more superclass.

```cpp showLineNumbers = "true"

#include <iostream>
using namespace std;

class Mother
{
    public:
    void showMother()
    {
        cout<<"Mother : ABC"<<endl;
    }
};
class Father
{
    public:
    void showFather()
    {
        cout<<"Father : PQR"<<endl;
    }
};
class Child : public Mother, public Father
{
    public:
    void showChild()
    {
        cout<<" I am Child"<<endl;
    }
};

int main() {
    Child obj;
    obj.showChild();
    obj.showMother();
    obj.showFather();

    return 0;

}
```

**Output**

> I am Child<br/>
> Mother : ABC<br/>
> Father : PQR<br/>

**Explaination**

create class `Mother` write access specifier public, create a showMother() method.<br/>
print `Mother : ABC`<br/>
create class `Father` write access specifier public, create a showFather() method.<br/>
print `Father : PQR`<br/>
create another class `Child` and inherite the properties of `Mother` and `Father` using `pulbic` access specifier, <br/>
In next line write access specifier public, create a showB() method.<br/>
print `I am Child`<br/>
In main function create object of `Child` class `obj`.<br/>
using `obj` call showMother() showFather() method.<br/>

### 4. Hierarchical inheritance

In Hierarchical inheritance class RBI is a parent class and class BOI, class SBI is a child class.

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

class RBI
{
    public:
    void showRBI()
    {
        cout<<"According to RBI guidlines RBI is 10% "<<endl;
    }
};
class BOI : public RBI
{
    public:
    void showBank()
    {
        cout<<"I am BOI"<<endl;
    }
};
class SBI : public RBI
{
    public:
    void showBank()
    {
        cout<<"I am SBI"<<endl;
    }
};

int main() {
    BOI obj1;
    obj1.showBank();
    obj1.showRBI();

    SBI obj2;
    obj2.showBank();
    obj2.showRBI();

    return 0;

}

```

**Output**

> I am BOI <br/>
> According to RBI guidlines RBI is 10% <br/>
> I am SBI <br/>
> According to RBI guidlines RBI is 10%<br/>

**Explaination**

create class `RBI` write access specifier public, create a showRBI() method.<br/>
print `According to RBI guidlines RBI is 10% `<br/>
create class `BOI` and inherite the properties of `RBI`, write access specifier public, create a showBOI() method.<br/>
print ` I am BOI`<br/>
create another class `SBI` and inherite the properties of `RBI`, write access specifier public. <br/>
In next line create a showSBI() method.<br/>
print `I am SBI`<br/>
In main function create object of `BOI` class `obj1`, and call showBank(), and showRBI() method<br/>
create object of `SBI` class `obj2`, and call showBank(), and showRBI() method<br/>
