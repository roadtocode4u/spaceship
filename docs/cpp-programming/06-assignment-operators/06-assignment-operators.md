# Assignment Operators

## Assignment Operator: (=, +=, -=,...)

ex : int a = 10;

**💻 Example 1 :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int a=5; // assignment operator

    cout<<a;

    return 0;
}
```

**⚙️ Output :**

> 5

**💻 Example 2 : Addition of two numbers**

```cpp
#include <iostream>
using namespace std;

int main() {

    int a=10;
    // num = num + 5;
   or
    a += 5;

    cout<<a;

    return 0;
}
```

**⚙️ Output :**

> 15

**💻 Example 3 : Subtraction of two numbers**

```cpp
#include <iostream>
using namespace std;

int main() {
    int num=20;
   // num = num -5;
   or
   num -=5;

    cout<<num;

    return 0;
}
```

**⚙️ Output :**

> 15

**💻 Example 4 : Multiplication of two numbers**

```cpp
#include <iostream>
using namespace std;

int main() {
    int num=10;
   // num = num * 2;
   or
   num *=5;

    cout<<num;

    return 0;
}
```

**⚙️ Output :**

> 20

**💻 Example 5: Division of two numbers**

```cpp
#include <iostream>
using namespace std;

int main() {

    int num=10;
   // num = num /2;
   or
   num /=2;

    cout<<num;

    return 0;
}
```

**⚙️ Output :**

> 5

### % Modulus Operator :

**💻 Example 6 :**

```cpp
#include <iostream>
using namespace std;

int main() {

     int num = 10;
   // num = num % 3;
   or
   num %=3;

    cout<<num;

    return 0;
}
```

**⚙️ Output :**

> 1

### Short hand :

```cpp
num = num [] value //[+, -, *, /, %]

=> num[]=value;

ex: num[+]=5;
```

```cpp
* Boolean Value:

True  represent 1

False represent 0
```
