---
title: Increment-decrement operator
description: "Increment-decrement operator"
hide_table_of_contents: true
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

    cout<<"initial value of a : "<<a<<"\n";

    a++;

    cout<<"value of a : "<<a<<"\n";

    return 0;
}
```

** Output :**

> initial value of a : 10

> value of a : 11

**Explanation :**

**Line 6 :** Declare `a` variable and its value is `10`.<br/>
**Line 8 :** Print `initial value of a : ` and `a` using `cout`. <br/>
**Line 10 :** `a++` `Post Increment` operator .<br/>
**Line 12 :** Print `value of a :` and `a` using `cout`.

** Example 2 :**

```cpp showLineNumbers="true"

#include <iostream>
using namespace std;

int main() {


    int a=10;

    cout<<"initial value of a : "<<a<<"\n";

    ++a;

    cout<<"value of a : "<<a<<"\n";

    return 0;
}
```

** Output :**

> initial value of a : 10

> value of a : 11

**Explanation :**

**Line 6 :** Declare `a` variable and its value is `10`.<br/>
**Line 8 :** Print `initial value of a : ` and `a` using `cout`. <br/>
**Line 10 :** `--a` `Pre Increment` operator .<br/>
**Line 12 :** Print `value of a :` and `a` using `cout`.

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

**Explanation :**

**Line 6 :** Declare `a` variable and its value is `10`.<br/>
**Line 7 :** Print `initial value of a : ` and `a` using `cout`. <br/>
**Line 9 :** Initialized count value and assign `a++` .<br/>
**Line 10 :** Print `value of count : ` and `count` variable.<br/>
**Line 11 :** Print `initial value of a : ` and `a` variable.<br/>

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

**Explanation :**

**Line 6 :** Declare `a` variable and its value is `10`.<br/>
**Line 7 :** Print `initial value of a : ` and `a` using `cout`. <br/>
**Line 9 :** Initialized count value and assign `++a` .<br/>
**Line 10 :** Print `value of count : ` and `count` variable.<br/>
**Line 11 :** Print `initial value of a : ` and `a` variable.<br/>

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

**Explanation :**

**Line 6 :** Declare `a` variable and its value is `10`.<br/>
**Line 7 :** Print `initial value of a : ` and `a` using `cout`. <br/>
**Line 9 :** Initialized count value and assign `--a` .<br/>
**Line 10 :** Print `value of count : ` and `count` variable.<br/>
**Line 11 :** Print `initial value of a : ` and `a` variable.<br/>

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

**Explanation :**

**Line 6 :** Declare `a` variable and its value is `10`.<br/>
**Line 7 :** Print `initial value of a : ` and `a` using `cout`. <br/>
**Line 9 :** Initialized count value and assign `a--` .<br/>
**Line 10 :** Print `value of count : ` and `count` variable.<br/>
**Line 11 :** Print `initial value of a : ` and `a` variable.<br/>

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

**Explanation : **

**Line 6 :** Declare `num` variable and assign value `15` . <br/>
**Line 7 :** print `Number :` `num`. <br/>
**Line 9 :** declare `count ` variable assign `num++` . <br/>
**Line 10 :** print `Count :` `count` . <br/>
**Line 12 :** assign `--num` into `count` variable . <br/>
**Line 13 :** print `Count :` `count` .<br/>
**Line 15 :** `num++` <br/>
**Line 16 :** print `Number :` `num`. <br/>
