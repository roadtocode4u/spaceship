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

