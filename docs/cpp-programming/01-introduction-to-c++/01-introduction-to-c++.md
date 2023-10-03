---
title: Introduction to C++
description: "Introduction to C++"
hide_table_of_contents: true
---

# Introduction to C++

![C++](cpplogo.png)


![bjarne stroustrup](bjarne%20stroustrup.jpg)

### What is Programming ?

Programming is the process of instructions that tell a computer how to perform a task.

### Why Learn C++?

Learning C++ is valuable for several reasons:

* C++ is used to create games, computer applications, operating systems, web browsers, and much more.
* C++ programs run very quickly and efficiently.
* It offers a rich set of libraries that make programming easier.
* With C++, you can break down complex problems into smaller, manageable parts using objects.

### What is C++ Programming?

C++ was created by **`Bjarne Stroustrup`** in **`1979`** at Bell Labs in Murray Hill, New Jersey. It is a versatile, case-sensitive, and object-oriented programming language. C++ is considered a middle-level language because it combines features of both high-level and low-level languages. Additionally, C++ is an extension of the C language, which means any C program is a valid C++ program.


### Object-Oriented Programming

C++ supports Object-Oriented Programming, which includes four fundamental principles:

- Encapsulation
- Data hiding
- Inheritance
- Polymorphism

**💻 Example 1 :**

```cpp
#include <iostream>

int main() {

    std::cout << "Hello world!";

    return 0;
}
```

**⚙️ Output :**

> Hello world!

## Program Explanation

**Line 1:** `#` is a path provider.<br/> `include` is a directory/folder.<br/> `<iostream>` is a class. <br/>`<iostream>` stands for **Input Output Flow**.<br/>

**Line 2:** `int`(number) means Return type of your Function. <br/>`main()` it is a special function which is inbuilt.<br/> It is triggers automatically when program starts, it is the first function of every C++ program that is responsible for starting the execution and termination of the program.

**Line 2:** `{` is used to Start of the function.

**Line 3:** `std::cout<<"Hello world!";`<br/> `std` stands for standard namespace. `::` is a scope operator.<br/> `cout` stands for console out.<br/> `<<` is a function used to output print text to the screen or to flash out it is also called Insertion operator or left shift.<br/> The line `cout << "Hello world!";` causes the message "Hello World!" to be displayed on the screen.<br/>**`;`** semicolon used to terminate any statement.

**Line 4:** `return 0;` return 0 means that the program will execute successfully.

**Line 5:** `}` closing curly bracket is used to end the main function.