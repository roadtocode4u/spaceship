## Pointers

A pointer is used to store address of another variable.

> int \*p;

The ampersand symbol & (address of operator) is used to find a address of variables.

### WAP to find out address of variables

**💻Example 1️:**

```cpp
#include <iostream>
using namespace std;

int main() {

    int a = 10;

    cout<<&a;

    return 0;
}
```

**⚙️ Output :**

> 0x7ffe82b06e74

### WAP to store a variable address

**💻Example 2:**

```cpp
#include <iostream>
using namespace std;

int main() {

    int a = 10;

    int *add = &a;

    cout<<add;

    return 0;
}
```

**⚙️ Output :**

> 0x7ffe390d907c

### WAP to find the address of variable.

```cpp
int a = 10;              a
                        [10]
int *p = &a;              |
                         101

                         *p
                        [101]
                          |
                         202

```

```cpp
* -> Derefence / Asterisk / Value of

*(address) => To find a value from given address.
```

**💻Example 3:**

```cpp

#include <iostream>
using namespace std;

int main() {

    int a = 10;

    int *p = &a;

    cout<<p<<endl;
    cout<<&a<<endl;
    cout<<*p<<endl;

    return 0;
}
```

**⚙️ Output :**

> 0x7ffde4e1252c<br />
> 0x7ffde4e1252c<br />
> 10

**💻Example 4:**

```cpp
#include <iostream>
using namespace std;

void make_double(int a, int b)
{
    a = a * 2;
    b = b * 2;
    cout<<"Inside func call => a:"<<a<<" b:"<<b<<endl;
}
int main() {

    int a = 2, b = 3;
    cout<<"Before func call => a:"<<a<<" b:"<<b<<endl;
    make_double(a, b);
    cout<<"After func call => a:"<<a<<" b:"<<b<<endl;

    return 0;
}

```

**⚙️ Output :**

> Before func call => a:2 b:3<br/>
> Inside func call => a:4 b:6<br/>
> After func call => a:2 b:3

**💻Example 5:**

```cpp
#include <iostream>
using namespace std;

void make_double(int *a, int *b)
{
    *a = *a + 2;
    *b = *b + 2;
    cout<<"Inside func call => a:"<<*a<<" b:"<<*b<<endl;
}
int main() {

    int a = 2, b = 3;
    cout<<"Before func call => a:"<<a<<" b:"<<b<<endl;
    make_double(&a, &b);
    cout<<"After func call => a:"<<a<<" b:"<<b<<endl;

    return 0;
}
```

**⚙️ Output :**

> Before func call => a:2 b:3<br/>
> Inside func call => a:4 b:5<br/>
> After func call => a:4 b:5
