---
title: "Linked List"
description: "Linked List"
hide_table_of_contents: true
---

## Pointer 

A pointer is a variable that stores the memory address of another variable or object. Pointers are powerful tools that allow for dynamic memory allocation and manipulation of objects, among other things.

To declare a pointer, you use the asterisk `*` operator. For example, to declare a pointer to an integer variable:

```int* ptr;```

This declares a pointer variable named `ptr` that can point to an integer value. To initialize the pointer with the memory address of an integer variable, you use the address-of operator `&`.

```cpp
int x = 10;
int* ptr = &x;
```

This initializes `ptr` to point to the memory address of `x`. You can then access the value of `x` through the pointer by using the dereference operator `*`:

`int y = *ptr;`

This retrieves the value at the memory address pointed to by `ptr` and assigns it to `y`.

**Code :**

```cpp
#include<iostream>

using namespace std;

int main()
{
    int age = 23;
    int *add = &age;
    
    cout<<"age: "<<age<<endl;
    cout<<"&age: "<<&age<<endl;
    cout<<"add: "<<add<<endl;
    cout<<"&add: "<<&add<<endl;
    cout<<"*add: "<<*add<<endl;
    
    return 0;
}
```

**Output :**

age: 23 <br/>
&age: 0x7fff52b3e92c <br/>
add: 0x7fff52b3e92c <br/>
&add: 0x7fff52b3e930 <br/>
*add: 23

In the above Program, Firstly `an` integer variable `age` is declared and initialized with the value `23`. Then, a pointer variable add is declared, which is a memory address pointer of integer type. The address of `age` is assigned to add using the `&` operator, which is called the address-of operator. So, add now contains the memory address of `age`.

In the next few lines, the program uses cout statements to print the value of `age`, `the memory address of age`, `the value of add`, and `the memory address of add`. <br/>

```cout<<"age: "<<age<<endl;``` - This statement prints the value of `age`, which is `23`, to the console.<br/>

```cout<<"&age: "<<&age<<endl;``` - This statement prints the memory address of `age` to the console. The `&` operator before `age` returns the address of `age``. <br/>

```cout<<"add: "<<add<<endl;``` - This statement prints the value of add to the console, which is the memory address of age. <br/>

```cout<<"&add: "<<&add<<endl;``` - This statement prints the memory address of `add` to the console. The `&` operator before add returns the address of add.

```cout<<"*add: "<<*add<<endl;```  dereferences the add pointer by using the `*` operator, and prints the value stored at the memory address that add points to, which is `age`.

Finally, the `return 0`; statement ends the program execution.

## Class and Object

A class is a blueprint or a template that defines the characteristics and behavior of a set of objects. It defines the variables (also known as data members) and functions (also known as member functions or methods) that each object of that class will have.

An object, on the other hand, is an instance of a class. It is a variable that has been created using the blueprint or template defined by the class. Each object of a class has its own set of variables and functions, and can be manipulated independently of other objects of the same class.

**Code :**

```cpp showLineNumbers="true"

#include<iostream>

using namespace std;

   class Box
   {
       public:
       int length;
       int breadth;
       
       void takeValue()
       {
           cout<<"Enter length and breadth: ";
           cin>>length>>breadth;
       }
       
       void calArea()
       {
           int area = length * breadth;
           cout<<"Area : "<<area;
       }
   };

int main()
{
 Box b1;
 b1.takeValue();
 b1.calArea();
 
    return 0;
}
```

**Output :**

Enter length and breadth:  <br/>
10 20 <br/>
Area : 200


In the above program Line no 6 to 23, This block of code defines a `Box` class. This class has two `public` member variables: `length` and `breadth`. It also has two public member functions: `takeValue()` and `calArea()`. `takeValue()` prompts the user to enter values for `length` and `breadth` using cout and reads in those values from the console using `cin`. `calArea()` calculates the area of the box using the `length` and `breadth` member variables, and then prints the result to the console using `cout`.

In line 25 to 31, This is the main function of the program. It creates an instance of the `Box` class called `b1`. It then calls `takeValue()` to prompt the user to enter values for `length` and `breadth` and stores those values in `b1`. Finally, it calls `calArea()` to calculate the area of the `box` and `print` the result to the console. The `return 0`; statement signals that the program has finished executing and `returns 0` to the operating system.


## Introduction to LinkedList


In data structures and algorithms, a linked list is a linear data structure where elements are stored in nodes, and each node contains a reference (link) to the next node in the sequence.

Each node consists of two parts: the data part and the pointer part. The data part stores the actual value or data that is being stored, while the pointer part stores the memory address of the next node in the linked list.

Linked lists can be classified into several types, such as singly linked list, doubly linked list, circular linked list, etc. Each type has its own unique characteristics and usage.

**Code :**

```cpp showLineNumbers="true"
#include<iostream>
using namespace std;

class Node
{
    public:
    int data;
    Node *next;
};
int main()
{
    Node *a = new Node();
    a->data = 5;
    
    Node *b = new Node();
    b->data = 10;
    
    Node *c = new Node();
    c->data = 15;
    
    Node *d = new Node();
    d->data = 20;
    
    a->next = b;
    b->next = c;
    c->next = d;
    d->next = NULL;
    
    Node *head = a;
    while(head != NULL)
    {
        cout<<head->data<<", ";
        head = head->next;
    }
    
    return 0;
}
```

**Output :**

5, 10, 15, 20, 


In the above program first we create a class called `Node`, which has two member variables: an `integer data`, and a pointer to another `Node` object, `next`. This pointer will be used to link together multiple Node objects to form the linked list.

Next, four Node objects, `a`, `b`, `c`, and `d`, are created using the `new` keyword. The data member of each object is assigned a different integer value.

The objects are then linked together by setting the next pointer of each object to point to the next object in the sequence. In this case, `a->next` points to `b`, `b->next` points to `c`, `c->next` points to `d`, and `d->next` is set to `NULL`, indicating the end of the linked list.

Finally, a pointer to the first object in the linked list `a` is assigned to a new pointer called `head`. A while loop is then used to traverse the linked list, printing out the data value of each Node object in sequence. The loop continues until the next pointer of the last Node object is `NULL`, indicating the end of the list.

## Length of LinkedList

A LinkedList is a data structure made up of individual nodes that are linked together. Each node contains some data and a reference to the next node in the list. The length of a LinkedList refers to the number of nodes that are present in the list.

**Code :**

```cpp showLineNumbers="true"
#include<iostream>
using namespace std;

class Node
{
    public:
    int data;
    Node *next;
};
int main()
{
    Node *a = new Node();
    a->data = 5;
    
    Node *b = new Node();
    b->data = 10;
    
    Node *c = new Node();
    c->data = 15;
    
    Node *d = new Node();
    d->data = 20;
    
    a->next = b;
    b->next = c;
    c->next = d;
    d->next = NULL;
    
    int count = 0 ;
    Node *ptr = a;
    while(ptr != NULL)
    {
        count++;
        ptr = ptr->next;
    }
    
    cout<<"Length of Linkedlist : "<<count<<endl;
    
    return 0;
}
```

**Output :**

Length of Linkedlist : 4

In the above program first we create a class called `Node`, which has two member variables: an `integer data`, and a pointer to another `Node` object, `next`. This pointer will be used to link together multiple Node objects to form the linked list.

Next, four Node objects, `a`, `b`, `c`, and `d`, are created using the `new` keyword. The data member of each object is assigned a different integer value.

The objects are then linked together by setting the next pointer of each object to point to the next object in the sequence. In this case, `a->next` points to `b`, `b->next` points to `c`, `c->next` points to `d`, and `d->next` is set to `NULL`, indicating the end of the linked list.

In line 29 to 30, The code then declares an integer variable `count` to keep track of the number of nodes in the LinkedList, and a pointer variable `ptr` to traverse the LinkedList starting from the first node.

Line 31 to 35, A while loop is used to traverse the LinkedList until the end is reached (`ptr` becomes NULL). Inside the loop, the `count` variable is incremented by one, and the `ptr` variable is updated to point to the next node in the LinkedList.

Finally, the length of the LinkedList is printed to the console using the `cout` statement.

## Middle element in LinkedList

```cpp showLineNumbers="true"
#include<iostream>
using namespace std;

class Node
{
    public:
    int data;
    Node *next;
};
int main()
{
    Node *a = new Node();
    a->data = 5;
    
    Node *b = new Node();
    b->data = 10;
    
    Node *c = new Node();
    c->data = 15;
    
    Node *d = new Node();
    d->data = 20;
    
    Node *e = new Node();
    e->data = 25;
    
    a->next = b;
    b->next = c;
    c->next = d;
    d->next = e;
    e->next = NULL;
    
    int count = 0 ;
    Node *ptr = a;
    while(ptr != NULL)
    {
        count++;
        ptr = ptr->next;
    }
    
    cout<<"Length of Linkedlist : "<<count<<endl;
    
    int mid = count / 2;
    Node *p = a;
    while(mid--)
    {
        p = p->next;
    }
    
    cout<<"Middle element :"<<p->data;
    
    return 0;
}
```

**Output :**

Length of Linkedlist : 5 <br/>
Middle element :15

In the above program first we create a class called `Node`, which has two member variables: an `integer data`, and a pointer to another `Node` object, `next`. This pointer will be used to link together multiple Node objects to form the linked list.

Next, four Node objects, `a`, `b`, `c`,`d` and `e` are created using the `new` keyword. The data member of each object is assigned a different integer value.

The objects are then linked together by setting the next pointer of each object to point to the next object in the sequence. In this case, `a->next` points to `b`, `b->next` points to `c`, `c->next` points to `d`,`d->next` points to `e`, and `e->next` is set to `NULL`, indicating the end of the linked list.

In line 33 to 34, The code then declares an integer variable `count` to keep track of the number of nodes in the LinkedList, and a pointer variable `ptr` to traverse the LinkedList starting from the first node.

Line 35 to 39, A while loop is used to traverse the LinkedList until the end is reached (`ptr` becomes NULL). Inside the loop, the `count` variable is incremented by one, and the `ptr` variable is updated to point to the next node in the LinkedList.

Then length of the LinkedList is printed to the console using the `cout` statement.

Line 43 to 48, The middle element of the linked list is calculated by dividing the length of the linked list by `2` to find the midpoint, and then traversing the linked list starting from the first node until the midpoint is reached. A pointer variable `p` is used to keep track of the current node being traversed.

Lint 50 , The value of the middle element is then printed to the console using the `cout` statement.

## Hare and Tortoise Algorithm

**Code :**

```cpp showLineNumbers="true"
#include<iostream>
using namespace std;

class Node
{
    public:
    int data;
    Node *next;
};
int main()
{
    Node *a = new Node();
    a->data = 5;
    
    Node *b = new Node();
    b->data = 10;
    
    Node *c = new Node();
    c->data = 15;
    
    Node *d = new Node();
    d->data = 20;
    
    Node *e = new Node();
    e->data = 25;
    
    a->next = b;
    b->next = c;
    c->next = d;
    d->next = e;
    e->next = NULL;
    
    //[5, b] -> [10, c] -> [15, d] -> [20, e] -> [25, NULL]
    
    Node *slow = a;
    Node *fast = b;
    
    while(fast!=NULL && fast->next !=NULL)
    {
        fast = fast->next;
        fast = fast->next;
        
        slow = slow->next;
    }
    
    cout<<"Middle Element is: "<<slow->data<<endl;
    
    return 0;
}
```

**Output :**

Middle Element is: 15

In the above program first we create a class called `Node`, which has two member variables: an `integer data`, and a pointer to another `Node` object, `next`. This pointer will be used to link together multiple Node objects to form the linked list.

Next, four Node objects, `a`, `b`, `c`,`d`,`e` are created using the `new` keyword. The data member of each object is assigned a different integer value.

The objects are then linked together by setting the next pointer of each object to point to the next object in the sequence. In this case, `a->next` points to `b`, `b->next` points to `c`, `c->next` points to `d`,`d->next` is set to `e` and  `e->next` is set to `NULL`, indicating the end of the linked list.

The `slow` pointer and the `fast` pointer are initialized to the `first` and `second` nodes of the list, respectively.

Then, the Hare and Tortoise algorithm is applied in the while loop to find the middle element. In each iteration of the loop, the `fast` pointer moves `two nodes` ahead of the `slow` pointer. If the `fast` pointer reaches the end of the list, the loop stops. Otherwise, the `slow pointer` moves `one node` ahead.

When the loop terminates, the `slow` pointer points to the middle element of the linked list.

Finally, the data member of the middle element is printed using the `cout` statement.

## Constructor

A constructor is a special member function of a class that is used to initialize objects of that class. It is called automatically when an object is created and helps set up the initial state of the object.

**Code :**

```cpp
#include<iostream>
using namespace std;

class Student
{
    public:
    void sayHello()
    {
        cout<<"Hello"<<endl;
    }
};

int main()
{
    Student obj;
    obj.sayHello();
    
    return 0;
}
```

**Output :**

Hello

In the above Program `Student` class is defined using the `class` keyword. Inside the class, we have a `public` member function called `sayHello()`.

The `sayHello()` function is defined within the `Student` class and prints `Hello` to the console using `cout`.

In the `main()` function, an object of the `Student` class is created with the name `obj`.

The `obj.sayHello()` statement calls the `sayHello()` function on the `obj` object, which then prints `Hello` to the console.


**Code :**

```cpp
#include<iostream>
using namespace std;

class Student
{
    public:
    void sayHello()
    {
        cout<<"Hello"<<endl;
    }
    
    Student()
    {
        cout<<"Constructor Called .."<<endl;
    }
};

int main()
{
    Student obj;
    obj.sayHello();
    
    return 0;
}
```

**Output :**

Constructor Called .. <br/>
Hello

The `Student` class is defined using the `class` keyword. Inside the class, we have two member functions: `sayHello()` and a `constructor`.

The `sayHello()` function is defined within the `Student` class and prints `Hello` to the console using `cout`.

The constructor is a special member function with the same name as the class (`Student()` in this case). It is automatically called when an object of the class is created. In this code, the constructor has a print statement `cout<<"Constructor Called .."<<endl;` which prints `Constructor Called ..` to the console.

In the `main()` function, an object of the `Student` class is created with the name `obj    `. When this object is created, the constructor is automatically called and the message `Constructor Called ..` is printed.

The `obj.sayHello()` statement calls the `sayHello()` function on the `obj` object, which then prints `Hello` to the console.

In summary, this code demonstrates the concept of constructors in C++. It defines a Student class with a constructor that is automatically called when an object of the class is created. The constructor prints a message indicating that it has been called. The program then creates an object of the Student class, which triggers the constructor, and subsequently calls the `sayHello()` function on that object. As a result, the program prints `Constructor Called ..` and `Hello` to the console when it is run.

**Code :**

```js 
#include<iostream>
using namespace std;

class Student
{
    public:
    int age;
    
    void showAge()
    {
        cout<<"Age :"<<age<<endl;
    }
    
    Student(int age)
    {
        this->age = age;
    }
};

int main()
{
    Student obj;
    obj.sayHello(20);
    
    return 0;
}
```