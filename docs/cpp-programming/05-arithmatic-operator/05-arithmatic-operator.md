# Arithmetic Operators

**Operators :**

```cpp
Doctor ---> Operator

patients ---> Operand

ex : a+b
 + ---> operator
 a,b ---> operand
```

## Types of Operator

1. Arithmetic Operator : (-, +, /, \*, %)
2. Assignment Operator : (=, +=, -=,...)
3. Relational Operator : (>,<,>=,<=,==)
4. Logical Operator: (&&,||, !)
5. Bitwise Operator

## 1.Arithmetic Operator:

```
+ ---> Addition
- ---> Subtraction
* ---> Multiplication
/ ---> Division
% ---> Modules
```

**💻 Example 1 : Addition of two numbers**

```cpp
#include <iostream>
using namespace std;

int main() {

    int a=5;
    int b=10;

    int result = a + b;
    cout<<result;

    return 0;
}
```

**⚙️ Output :**

> 15

**💻 Example 2 : Subtraction of two numbers**

```cpp
#include <iostream>
using namespace std;

int main() {

    int a=20;
    int b=10;

    int result = a - b;
    cout<<result;

    return 0;
}
```

**⚙️ Output :**

> 10

**💻 Example 3 : Multiplication of two numbers**

```cpp
#include <iostream>
using namespace std;

int main() {

    int a=55;
    int b=2;

    int result = a * b;
    cout<<result;

    return 0;
}
```

**⚙️ Output :**

> 110

**💻 Example 4: Division of two numbers**

```cpp
#include <iostream>
using namespace std;

int main() {

    int a=55;
    int b=2;

    int result = a / b;
    cout<<result;

    return 0;
}
```

**⚙️ Output :**

> 27

## % Modulus Operator :

- It calculates reminder after the integer division

**💻 Example 5 :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int result = 22 % 5;
    cout<<result;

    return 0;
}
```

**⚙️ Output :**

> 2

```cpp
odd number : 3,7,9
odd % 2 = 1
ex:
3 % 2 = 1
7 % 2 = 1
9 % 2 = 1

even number:4,8,10
even % 2 = 0
ex :
4 % 2 = 0
8 % 2 = 0
10 % 2 = 0
```
