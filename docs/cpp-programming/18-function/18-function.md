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

## User defined function

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

**Example 1 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

void cal_perimerter(int l, int b)
    {
        int perimeter = 2 * (l + b);
        cout<<"Perimeter :"<<perimeter<<endl;
    }
int main() {

    cal_perimerter(5, 8);

    return 0;
}
```

**Output**

> Perimeter : 26

**Explanation :**

In the above example, we can create a function. The name of that function is cal_perimeter.In the 2nd line we can create a variable perimeter.
and store formula of perimeter `2 * (l * b)` In next line we print `perimeter` and value `endl` for new line.<br/>
In `int main()` we call function `cal_perimeter` and pass two value `(5, 8)`.<br/>

**Example 2 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

void cal_perimerter(int l, int b)
    {
        int perimeter = 2 * (l + b);
        cout<<"Perimeter :"<<perimeter<<endl;
    }
int main() {
   int l1 =5 , b1 = 8;

   cal_perimerter(l1, b1);

    return 0;
}
```

**Output**

> Perimeter : 26

**Explanation :**

In the above example, we can create a function. The name of that function is cal_perimeter.In the 2nd line we can create a variable perimeter.
and store formula of perimeter `2 * (l * b)` In next line we print `perimeter` and value `endl` for new line.<br/>
create `l1` and `b1` variable `l1` store `5` value `b1` store `8` value, and datatype is `int`.<br/>
In `int main()` we call function `cal_perimeter` and pass two value `(5, 8)`.<br/>

**Example 3 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

void cal_perimerter(int l, int b)
    {
        int perimeter = 2 * (l + b);
        cout<<"Perimeter :"<<perimeter<<endl;
    }
int main() {
   int l1 =5 , b1 = 8;
   cal_perimerter(l1, b1);

    int l2 =7 , b2 = 3;
   cal_perimerter(l2, b2);

    return 0;
}
```

.

**Explanation :**

In the above example, we can create a function. The name of that function is cal_perimeter.In the 2nd line we can create a variable perimeter.
and store formula of perimeter `2 * (l * b)` In next line we print `perimeter` and value `endl` for new line.<br/>
create `l1` and `b1` variable `l1` store `5` value `b1` store `8` value, and datatype is `int`.<br/>
In `int main()` we call function `cal_perimeter` and pass two value `(5, 8)`.<br/>
create `l2` and `b2` variable `l2` store `7` value `b2` store `3` value, and datatype is `int`.<br/>
In `int main()` we call function `cal_perimeter` and pass two value `(7, 3)`.<br/>

**Output**

> Perimeter : 26
> perimeter : 20

**4 Types of function**

- **Function with argument and with return value**
- **Function with argument and without return value**
- **Function without argument and with return value**
- **Function without argument and without return value**

  **1 Function with argument and with return value**

```cpp showLineNumbers = "true"
//  Function with argument and with return value
#include<iostream>
using namespace std;

int cal_square(int num)
    {
        int sq = num * num;
        return sq;
    }
int main() {

    int ans = cal_square(10);
    cout<<"Ans :"<<ans;

    return 0;
}
```

**output**

> 100

**Explanation :**

In the above example, we can create a function. The name of that function is cal_square. pass argument `int num`.<br/>
initialize `sq` variable `num * num` and `return` `sq` variable.<br/>
initialize `ans` variable and call `cal_square(10)` and pass parameter `10`<br/>
print `Ans` and variable.<br/>

**2 Function with argument and without return value**

```cpp showLineNumbers = "true"

//   Function with argument and without return value

#include<iostream>
using namespace std;

int cal_square(int num)
    {
        int sq = num * num;
        cout<<sq;
    }
int main() {

    cal_square(5);

    return 0;
}
```

**output**

> 25

**Explanation :**

In the above example, we can create a function. The name of that function is cal_square. pass argument `int num`.<br/>
initialize `sq` variable `num * num` and print `sq` variable.<br/>
call `cal_square(5)` and pass parameter `5`<br/>

**3 Function without argument and with return value**

```cpp showLineNumbers = "true"

//Function without argument and with return value

#include<iostream>
using namespace std;

int cal_square()
   {
       int num = 20;
       int sq = num * num;
       return sq;
   }
int main() {
   int ans = cal_square();
   cout<<"Ans : "<<ans;

   return 0;
}
```

**output**

> 400

**Explanation :**

In the above example, we can create a function. The name of that function is cal_square.<br/>
initialize `num` variable and store `20` value.<br/>
initialize `sq` variable `num * num` and `return` `sq` variable.<br/>
initialize `ans` variable and call `cal_square(10)` and pass parameter `10`<br/>
print `Ans` and variable.<br/>

**4 Function without argument and without return value**

```cpp showLineNumbers = "true"
// Function without argument and without return value
#include<iostream>
using namespace std;

void cal_square()
    {
        int num = 10;
        int sq = num * num;
        cout<<sq;
    }
int main() {

    cal_square();

    return 0;
}
```

**Output**

> 100

**Explanation :**

In the above example, we can create a function. The name of that function is cal_square. <br/>
initialize `num` variable and store `10` value.<br/>
initialize `sq` variable `num * num` and `return` `sq` variable.<br/>
call `cal_square(10)`<br/>

## In-build function

1. min();
2. min();
3. sqrt();
4. pow();
5. floor();
6. ceil();
7. abs();

**1. min();**

```cpp showLineNumbers = "true"
//   min function
#include<iostream>
using namespace std;

int main()
{
    int ans = min(5, 10);
    cout<<"Result :"<<ans;

    return 0;
}
```

**Output**

> 5

**Explanation :**

In this example initialize `ans` variable and call `min()` function and pass 2 parameter `(5, 10)`<br/>
`min();` function is a in-build function and give minimum value.<br/>
print `Result :` and `ans` variable.<br/>

**2. max();**

```cpp showLineNumbers = "true"
//   max function
#include<iostream>
using namespace std;

int main()
{
    int ans = min(50, 20);
    cout<<"Result :"<<ans;

    return 0;
}
```

**Output**

> 20

**Explanation :**

In this example initialize `ans` variable and call `max()` function and pass 2 parameter `(50, 20)`<br/>
`max();` function is a in-build function and give maximum value.<br/>
print `Result :` and `ans` variable.<br/>

```cpp showLineNumbers = "true"
//  max function
#include<iostream>
using namespace std;

int main()
{
    int ans = max(10, 30);
    cout<<"Result :"<<ans;

    return 0;
}
```

**Output**

> 50

**Explanation :**

In this example initialize `ans` variable and call `max()` function and pass 2 parameter `(10, 30)`<br/>
`max();` function is a in-build function and give maximum value.<br/>
print `Result :` and `ans` variable.<br/>

**3. sqrt();**

```cpp showLineNumbers = "true"
//  sqrt function
#include<iostream>
#include<cmath>
using namespace std;

int main()
{
    int result = sqrt(25);
    cout<<"Result :"<<result;

    return 0;
}
```

**output**

> 5

**Explanation :**

- `#include<cmath>` used this library in this function.

In this example initialize `result` variable and call `sqrt()` function and pass one parameter `(25)`<br/>
`sqrt();` function is a in-build function and give square.<br/>
print `Result :` and `result` variable.<br/>

```cpp showLineNumbers = "true"
//  sqrt function
#include<iostream>
#include<cmath>
using namespace std;

int main()
{
    int result = sqrt(78);
    cout<<"Result :"<<result;

    return 0;
}
```

**output**

> 8.63176

**Explanation :**

In this example initialize `result` variable and call `sqrt()` function and pass one parameter `(78)`<br/>
`sqrt();` function is a in-build function and give square.<br/>
print `Result :` and `result` variable.<br/>

**4. pow();**

```cpp showLineNumbers = "true"
//  pow function
#include<iostream>
#include<cmath>
using namespace std;

int main()
{
    int result = pow(2, 3);
    cout<<"Result :"<<result;

    return 0;
}
```

**output**

> 8

**Explanation :**

In this example initialize `result` variable and call `pow()` function and pass 2 parameter `(2, 3)`<br/>
`pow();` function is a in-build function and give power.<br/>
print `Result :` and `result` variable.<br/>

**5. floor();**

```cpp showLineNumbers = "true"
//  floor function
#include<iostream>
#include<cmath>
using namespace std;

int main()
{
    int result = floor(3.4);
    cout<<"Result :"<<result;

    return 0;
}
```

**output**

> 3

**Explanation :**

In this example initialize `result` variable and call `floor()` function and pass 1 parameter `(3.4)`<br/>
`sqrt();` function is a in-build function and give lower value .<br/>
print `Result :` and `result` variable.<br/>

**6. ceil();**

```cpp showLineNumbers = "true"
//  ceil function
#include<iostream>
#include<cmath>
using namespace std;

int main()
{
    int result = ceil(3.4);
    cout<<"Result :"<<result;

    return 0;
}
```

**output**

> 4

**Explanation :**

In this example initialize `result` variable and call `ceil()` function and pass 1 parameter `(3.4)`<br/>
`sqrt();` function is a in-build function and give upper value .<br/>
print `Result :` and `result` variable.<br/>

**7. abs();**

```cpp showLineNumbers = "true"
//  floor function
#include<iostream>
#include<cmath>
using namespace std;

int main()
{
    int result = abs(30);
    cout<<"Result :"<<result;

    return 0;
}
```

**output **

> 30

**Explanation :**

In this example initialize `result` variable and call `abs()` function and pass 1 parameter `(30)`<br/>
`sqrt();` function is a in-build function and give negative value to positive value .<br/>
print `Result :` and `result` variable.<br/>

```cpp showLineNumbers = "true"
//  floor function
#include<iostream>
#include<cmath>
using namespace std;

int main()
{
    int result = abs(-30);
    cout<<"Result :"<<result;

    return 0;
}
```

**output**

> 30

**Explanation :**

In this example initialize `result` variable and call `abs()` function and pass 1 parameter `(-30)`<br/>
`sqrt();` function is a in-build function and give negative value to positive value .<br/>
print `Result :` and `result` variable.<br/>
