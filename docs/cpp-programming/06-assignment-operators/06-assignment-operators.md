---
title: Assignment Operator
description: "Assignment Operation"
hide_table_of_contents: true
---

# Assignment Operators

## Assignment Operator: (=, +=, -=,\*=, /=, %=...)

ex : int a = 10;

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

**Example 2 :**

```cpp
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

** Example 3 : Addition of two numbers**

```cpp
#include <iostream>
using namespace std;

int main() {

    int balance = 499

   // balance = balance + 999
   or

    balance += 999;  // plus assignment

    cout<<balance;

    return 0;
}
```

** Output :**

> 1498

** Example 4 : Subtraction of two numbers**

```cpp
#include <iostream>
using namespace std;

int main() {

    int balance = 400;
    // balance = balance - 100;
   or

    balance -= 100 //minus assignment

    cout<<num;

    return 0;
}
```

** Output :**

> 300

** Example 5 : Multiplication of two numbers**

```cpp
#include <iostream>
using namespace std;

int main() {
    int num=10;
   // num = num * 2;
   or
   num *=5;  // multiply assignment

    cout<<num;

    return 0;
}
```

** Output :**

> 20

** Example 6 : Division of two numbers**

```cpp
#include <iostream>
using namespace std;

int main() {

    int num=10;
   // num = num /2;
   or
   num /=2;  //division assignment

    cout<<num;

    return 0;
}
```

** Output :**

> 5

### % Modulus Operator :

** Example 7 :**

```cpp
#include <iostream>
using namespace std;

int main() {

     int num = 10;
   // num = num % 3;
   or
   num %=3;   //mod assignment

    cout<<num;

    return 0;
}
```

** Output :**

> 1

### Short hand :

```cpp
num = num [] value //[+, -, *, /, %]

=> num[]=value;

ex: num[+]=5;
```
