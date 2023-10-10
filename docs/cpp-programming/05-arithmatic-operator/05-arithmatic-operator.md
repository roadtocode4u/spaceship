# Arithmetic Operators

**Operators :**

```cpp
Doctor ---> Operator

patients ---> Operand

ex : a+b
 + ---> operator
 a,b ---> operand
```

**Operators** are the symbol use to perform any operation.

**Operand** is the variable or number that use in operation.

## Types of Operator

1. Arithmetic Operator : (-, +, /, \*, %)
2. Assignment Operator : (=, +=, -=,...)
3. Relational Operator : (>,<,>=,<=,==)
4. Logical Operator: (&&,||, !)
5. Bitwise Operator : (&, |, ^, ~, <<, >>)

## 1.Arithmetic Operator:

```
+ ---> Addition
- ---> Subtraction
* ---> Multiplication
/ ---> Division
% ---> Modules
```

## + Addition operator :

- Addition operator is used to add the two number.

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

## - Subtraction operator :

- Subtraction operator is used to find the difference between two number.

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

## \* Multiplication operator :

- This operator is used to find the product.

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

## / division operator :

- It Calculate the questient.

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
