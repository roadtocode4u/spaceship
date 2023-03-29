---
title: Introduction to C Programming
description: "Introduction to C Programming"
hide_table_of_contents: true
---

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1373341236327290"
     crossOrigin="anonymous"></script>

<ins className="adsbygoogle"
     data-ad-client="ca-pub-1373341236327290"
     data-ad-slot="9699001202"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

### 🤔What is Programming ?

Providing clear instruction to computer to perform specific operation.
Programming is the process of instructions that tell a computer how to perform a task.

### Different Programming Languages 💻

C,C++,Java,Python,Kotlin,Javascript,Ruby,Typescript,C#, ...

### What is C Programming?

C is a general-purpose programming language. C programming created by Dennis Ritchie at the Bell Laboratories in 1972.

<img src="/c/00/Dennis.jpg" width="100px"/>

### 🤔What is Compiler?

A compiler is a software program that convert source code written in a high-level language into low-level machine language.

💻 **Example 1** :

```c showLineNumbers="true"
#include <stdio.h>
int main()
{
    printf("Hello world");

    return 0;
}
```

**⚙️ Output :**
Hello world!

### Program Explanation:

**Line 1:** `#`defines path directory `include` means add `.h` defines header file. Header files means code. `<stdio.h>` stands for
**Standard Input Output.**
`#include <stdio.h>` support input output file like printf() and scanf(). **printf( )** function display output on screen **scanf()** function take input from user.

**Line 2:** `int` means Return type of your Function. `main()` it is the first function of every C program that is responsible for starting the execution and termination of the program.

**Line 3:** `{` is used to Start of the function.

**Line 4:** printf `("Hello world");` `printf()` is a function used to print output text to the screen. Our example output is "Hello World". `;` semicolon used to terminate any statement.

**Line 5:** `return 0;` return 0 means that the program will be executed successfully.

**Line 6:** `}` closing curly bracket is used to end the main function.

💻 **Example 2 :**

```c showLineNumbers="true"
 #include <stdio.h>
int main()
{

    printf("Hye");
    printf("How Are You ?");

    return 0;
}
```

**⚙️ Output :**
HyeHow Are You ?

**Example 3 :**

```c showLineNumbers="true"
#include <stdio.h>
int main() {
    printf("My name is Suraj.");
    printf("I love teaching.");
    printf("I write code.");
    return 0;
}
```

**⚙️ Output :**
My name is Suraj.I love teaching.I write code.

## New Line Character

`\n` is a Newline Character. `\n` is used for create a new line or break a current line.

**Example 4 :**

```c showLineNumbers="true"
#include <stdio.h>
int main() {
    printf("My name is Suraj.\n");
    printf("I love teaching.");
    printf("\nI write code.");
    return 0;
}
```

**⚙️ Output :**
My name is Suraj.
I love teaching.
I write code.
