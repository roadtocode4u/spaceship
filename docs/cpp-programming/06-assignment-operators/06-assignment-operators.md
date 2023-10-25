---
title: Assignment Operator
description: "Assignment Operation"
hide_table_of_contents: true
---

# Assignment Operators

## Assignment Operator: (=, +=, -=, \*=, /=, %=...)

## 1. equal to (=)

It is used to assign a value to a variable.

** Example 1 :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int balance = 500; // assignment operator

    cout<<balance;

    return 0;
}
```

** Output :**

> 500

**Explanation : **

**Line 6 :** we declare a variable named `balanced` and assign it a value of `500`.<br/>
**Line 8 :** Using `cout<<` we can print the balance variable.<br/>

**Example 2 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int balance = 0;
    cout<<"Balance = "<<balance<<"\n";

     balance = balance + 499;

    cout<<"Balance = "<<balance;

    return 0;
}
```

**Output**

> Balance = 0

> Balance = 499

**Explanation :**

**Line 6 :** we declare a variable named `balanced` and assign it a value of `0`.<br/>
**Line 7 :** Using `cout<<` we can print the balance variable.<br/>
**Line 9 :** In this line in `balance` variable add the value of `499` and then store into `balance` variable. <br/>
**Line 11 :** Using `cout<<` we can print the balance variable.<br/>

## 2. plus equal to (+=)

The plus equal to operator `(+=)` adds a value to the current value of a variable.

** Example 3 : Addition of two numbers**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int balance = 499

    balance += 999;  // plus assignment

    cout<<balance;

    return 0;
}
```

** Output :**

> 1498

**Explanation :**

**Line 6 :** we declare a variable named `balanced` and assign it a value of `499`.<br/>
**Line 8 :** In this line first we add the value `499` then assign value to the `balance` variable.<br/>
**Line 10 :** Using `cout<<` we can print the balance variable.<br/>

## 3. minus equals to (-=)

The minus equals to operator `(-=)` subtracts a value from the current value of a variable.

** Example 4 : Subtraction of two numbers**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int balance = 400;

    balance -= 100 //minus assignment

    cout<<num;

    return 0;
}
```

** Output :**

> 300

**Explanation :**

**Line 6 :** we declare a variable named `balanced` and assign it a value of `400`.<br/>
**Line 8 :** In this line first we minus the value `100` then assign value to the `balance` variable.<br/>
**Line 10 :** Using `cout<<` we can print the balance variable.<br/>

## 4. multiplication equals to (\*=)

The multiplication equals to operator `(*=)` multiplication a value from the current value of a variable.

** Example 5 : Multiplication of two numbers**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int num=10;

   num *=5;  // multiply assignment

    cout<<num;

    return 0;
}
```

** Output :**

> 50

**Explanation :**

**Line 5 :** we declare a variable named `num` and assign it a value of `10`.<br/>
**Line 7 :** In this line first we multiply the value `5` then assign value to the `num` variable.<br/>
**Line 9 :** Using `cout<<` we can print the `num` variable.<br/>

## 5. division equals to (/=)

The division equals to operator `(/=)` division a value from the current value of a variable.

** Example 6 : Division of two numbers**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int num=10;

   num /=2;  //division assignment

    cout<<num;

    return 0;
}
```

** Output :**

> 5

**Explanation :**

**Line 6 :** we declare a variable named `num` and assign it a value of `10`.<br/>
**Line 8 :** In this line first we divide the value `2` then assign value to the `num` variable.<br/>
**Line 10 :** Using `cout<<` we can print the `num` variable.<br/>

## 6. modulus equals to (%=)

The modulus equals to operator `(%=)` modulus a value from the current value of a variable.

** Example 7 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

     int num = 10;

   num %=3;   //mod assignment

    cout<<num;

    return 0;
}
```

** Output :**

> 1

**Explanation :**

**Line 6 :** we declare a variable named `num` and assign it a value of `10`.<br/>
**Line 8 :** In this line first we mod the value `3` then assign value to the `num` variable.<br/>
**Line 10 :** Using `cout<<` we can print the `num` variable.<br/>
