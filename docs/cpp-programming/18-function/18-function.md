---
title: function in cpp
description: "function in cpp"
hide_table_of_contents: true
---

## Functions

**A function in C++ refers to a group of statements that takes input, processes it, and returns an output.**

## Features of function in C++

- Re-usability
- write once use multiple times

**Syntax :**

```
<Returntype> functionName(Parameter)
{ //start fun body

    return <value of return type>

}//end fun body

void = nothing/empty
```

**There are Two type of Function**

1. Inbuild

2. User defined

**Example 1 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

// Function Defination
void sayHello()
{
    cout<<"Hello"<<endl;
}

int main(){

    // Function Call
    sayHello();
    return 0;
}
```

**Output :**

> Hello

**Explanation :**

In a `Line no 4` we pass comment `// Function Defination`.<br/>
In a `Line no 5` create user defined function that name has `sayHello()` .<br/>
print message `Hello` using cout.<br/>
In a `Line no 12` we pass comment `// Function Call`.<br/>
In main function we call `sayHello()` function.<br/>

**Example 2 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

// Function Defination
void sayHello()
{
    cout<<"Hello"<<endl;
}

int main(){

    // Function Call
    sayHello();
    sayHello();
    sayHello();
    return 0;
}
```

**Output :**

> Hello<br/>
> Hello<br/>
> Hello<br/>

**Explanation :**

In a `Line no 4` we pass comment `// Function Defination`.<br/>
In a `Line no 5` create user defined function that name has `sayHello()` .<br/>
print message `Hello` using cout.<br/>
In a `Line no 12` we pass comment `// Function Call`.<br/>
In main function we call 3 times `sayHello()` function.<br/>

**Wap to print Suare of number using user-defined function.**

**Example 3 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

// Function Defination
void calsquare(int num)
{
    int square = num * num;
    cout<<"Square :"<<square;
}

int main(){

     // Function Call
    calsquare(10);

    return 0;
}
```

**Output :**

> Square : 100

**Explanation :**

In a `Line no 4` we pass comment `// Function Defination`.<br/>
In a `Line no 5` create user defined function that name has `calsquare()` and pass one parameter `(int num)` .<br/>
Declare `int` variable that name has `square` and store `num * num`.<br/>
print `Square : ` and `square` variable.<br/>
In a `Line no 12` we pass comment `// Function Call`.<br/>
In main function we call `calsquare(10);` function and pass `10` value.<br/>

**Example 4 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

// Function Defination
void calsquare(int num)
{
    int square = num * num;
    cout<<"Square :"<<square;
}

int main(){

     // Function Call
    calsquare(10);
    calsquare(5);
    calsquare(8);

    return 0;
}
```

**Output :**

> Square : 100<br/>
> Square : 25<br/>
> Square : 64<br/>

**Explanation :**

In a `Line no 4` we pass comment `// Function Defination`.<br/>
In a `Line no 5` create user defined function that name has `calsquare()` and pass one parameter `(int num)` .<br/>
Declare `int` variable that name has `square` and store `num * num`.<br/>
print `Square : ` and `square` variable.<br/>
In a `Line no 12` we pass comment `// Function Call`.<br/>
In main function we call 3 times `calsquare()` function and pass 3 different value.<br/>

**Wap to print addition of two number using user-defined function.**

**Example 6 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

// Function Defination
void addTwoNum(int a, int b)
{
    int sum = a + b;
    cout<<"Sum : "<<sum<<endl;
}

int main(){

    // Function Call
   addTwoNum(10, 20);

    return 0;
}
```

**Output :**

> Sum : 30

**Explanation :**

In a `Line no 4` we pass comment `// Function Defination`.<br/>
In a `Line no 5` create user defined function that name has `addTwoNum()` and pass two parameter `(int a, int b)` .<br/>
Declare `int` variable that name has `sum` and store `a + b`.<br/>
print `Sum : ` and `sum` variable.<br/>
In a `Line no 12` we pass comment `// Function Call`.<br/>
In main function we call `addTwoNum(10, 20);` function and pass `10 and 20` value.<br/>

**Example 7 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

// Function Defination
void addTwoNum(int a, int b)
{
    int sum = a + b;
    cout<<"Sum : "<<sum<<endl;
}

int main(){

     // Function Call
   addTwoNum(10, 20);
   addTwoNum(100, 5);

    return 0;
}
```

**Output :**

> Sum : 30<br/>
> Sum : 105

**Explanation :**

In a `Line no 4` we pass comment `// Function Defination`.<br/>
In a `Line no 5` create user defined function that name has `addTwoNum()` and pass two parameter `(int a, int b)` .<br/>
Declare `int` variable that name has `sum` and store `a + b`.<br/>
print `Sum : ` and `sum` variable.<br/>
In a `Line no 12` we pass comment `// Function Call`.<br/>
In main function we call `addTwoNum(10, 20)` function and pass 2 different value(10, 20).<br/>
