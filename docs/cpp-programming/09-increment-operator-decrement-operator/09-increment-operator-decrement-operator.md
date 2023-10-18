---
title: Increment-decrement operator
description: "Increment-decrement operator"
hide_table_of_contents: false
---

# Increment Operator & Decrement Operator (++, --)

## Increment Operrator (++)

```
count + 1 = 1
count + 1 = 2
count + 1 = 3

Increase number by 1
```

```
a = 5
a - 1 = 4
a - 2 = 3

Decrease count by 1
```

## Increment Operator

```cpp
* Inc Operator :
1. Pre-Increment
ex : ++number;
(first increase then use)

2. Post-Increment
ex : number++;
(first use then increase)
```

** Example 1 :**

```cpp showLineNumbers="true"

#include <iostream>
using namespace std;

int main() {

    int a=10;

    ccout<<"initial value of a : "<<a<<"\n";

    a++;

    cout<<"value of a : "<<a<<"\n";

    return 0;
}
```

** Output :**

> initial value of a : 10

> value of a : 11

** Example 2 :**

```cpp showLineNumbers="true"

#include <iostream>
using namespace std;

int main() {


    int a=10;

    ccout<<"initial value of a : "<<a<<"\n";

    ++a;

    cout<<"value of a : "<<a<<"\n";

    return 0;
}
```

** Output :**

> initial value of a : 10

> value of a : 11

** Example 3 :**

```cpp showLineNumbers="true"
#include <iostream>
using namespace std;

int main() {

    int a = 10;
    cout<<"initial value of a :"<<a<<"\n";

    int count = a++;
    cout<<"value of count : "<<count<<"\n";

    cout<<"initial value of a : "<<a<<"\n";

    return 0;
}
```

** Output :**

> initial value of a : 10

> value of count : 10

> initial value of a : 11

**Example 4 :**

```cpp showLineNumbers="true"
#include <iostream>
using namespace std;

int main() {

    int a = 10;
    cout<<"initial value of a :"<<a<<"\n";

    int count = ++a;
    cout<<"value of count : "<<count<<"\n";

    cout<<"initial value of a : "<<a<<"\n";

    return 0;
}
```

** Output :**

> initial value of a : 10

> value of count : 11

> initial value of a : 11

## Decrement Operator

```
* Dec Operator :

1. Pre-Decrement
ex : --number;
(first decrease then use)

2. Post-Decrement
ex : number--;
(first use then decrease)
```

** Example 5 :**

```cpp showLineNumbers="true"
#include <iostream>
using namespace std;

int main() {

    int a = 10;

    cout<<"initial value of a : "<<a<<"\n";

    int count = --a;

    cout<<"value of count : "<<a<<"\n";

    cout<<"value of a : "<<a"\n";

    return 0;
}
```

** Output :**

> initial value of a : 10

> value of count : 9

> value pf a : 9

** Example 6 :**

```cpp showLineNumbers="true"
#include <iostream>
using namespace std;

int main() {

    int a = 10;

    cout<<"initial value of a : "<<a<<"\n";

    int count = a--;

    cout<<"value of count : "<<a<<"\n";

    cout<<"value of a : "<<a"\n";

    return 0;
}
```

** Output :**

> initial value of a : 10

> value of count : 10

> value pf a : 9

** Example 7 :**

```cpp showLineNumbers="true"
#include <iostream>
using namespace std;

int main() {

    int num = 15;
    cout<<"Number : "<<num<<"\n";

    int count = num++;
    cout<<"Count : "<<count<<"\n";

    count = --num;
    cout<<"Count : "<<count<<"\n";

    num++;

    cout<<"Number : "<<num<<"\n";

    return 0;
}
```

** Output :**

> Number : 15

> Count : 15

> Count : 15

> Number : 16
