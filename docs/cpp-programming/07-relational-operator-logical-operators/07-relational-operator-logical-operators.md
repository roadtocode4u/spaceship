---
title: Relatonal and Logical Operation
description: " Relatonal and Logical Operation "
hide_table_of_contents: true
---

# Relational Operator & Logical Operators

## Relational Operator : (>,<,>=,<=,==)

It is also known as `Comparision operator`

```
true = 1
false = 0
```

## 1. greater than (>)

```cpp
  ex. a = 10;
  b = 20;
  a > b
 10 > 20
the result will be false
```

** Example 1 :**

```cpp showLineNumbers="true
#include <iostream>
using namespace std;

int main() {

    int a = 10;

    int b = 20;

    int res = a>b;

    cout<<res;

    return 0;
}
```

** Output :**

> 0

**Explanation :**

**Line 6 :** Initialized the `10` value in variable `a`.<br/>
**Line 8 :** Initialized the `20` value in variable `b`.<br/>
**Line 10 :** To declare the `res` variable and check the condition `a>b`. <br/>
**Line 12 :** Print the `res` using `cout`. And result will be false.

## 2. less than (<)

```cpp
a = 50;
b = 20;
a < b;
50 < 20
the result will be true
```

** Example 2 :**

```cpp showLineNumbers="true
#include <iostream>
using namespace std;

int main() {

    int a = 50;

    int b = 20;

    int res = a<b;

    cout<<res;

    return 0;
}
```

** Output :**

> 1

**Explanation :**

**Line 6 :** Initialized the `50` value in variable `a`.<br/>
**Line 8 :** Initialized the `20` value in variable `b`.<br/>
**Line 10 :** To declare the `res` variable and check the condition `a<b`. <br/>
**Line 12 :** Print the `res` using `cout`. And result will be true.

## 3. greater than or equal to (>=)

```cpp
a = 10;
b = 5;
a >= b;
10 >=5;
```

```
 F F = F
 T F = T
 F T = T
```

** Example 3 :**

```cpp showLineNumbers="true
#include <iostream>
using namespace std;

int main() {

    int a = 10;

    int b = 5;

    int res = a>=b;

    cout<<res;

    return 0;
}
```

** Output :**

> 1

**Explanation :**

**Line 6 :** Initialized the `10` value in variable `a`.<br/>
**Line 8 :** Initialized the `5` value in variable `b`.<br/>
**Line 10 :** To declare the `res` variable and check the condition `a>=b`. <br/>
**Line 12 :** Print the `res` using `cout`. And result will be true.

## 4. less than or equal to (<=)

```cpp
a = 20;
b = 20;
a <= b;
20 <=20;
true
```

** Example 4 :**

```cpp showLineNumbers="true
#include <iostream>
using namespace std;

int main() {

    int a = 20;

    int b = 20;

    int res = a<=b;

    cout<<res;

    return 0;
}
```

** Output :**

> 1

**Explanation :**

**Line 6 :** Initialized the `20` value in variable `a`.<br/>
**Line 8 :** Initialized the `20` value in variable `b`.<br/>
**Line 10 :** To declare the `res` variable and check the condition `a<=b`. <br/>
**Line 12 :** Print the `res` using `cout`. And result will be true.

## 5. equal to (==)

```
Note :
= value to assign
== two value equal or not
```

** Example 5 :**

```cpp showLineNumbers="true
#include <iostream>
using namespace std;

int main() {

    int a = 20;

    int b= 20;

    int res = a==b;

    cout<<res;

    return 0;
}
```

** Output :**

> 1

**Explanation :**

**Line 6 :** Initialized the `20` value in variable `a`.<br/>
**Line 8 :** Initialized the `20` value in variable `b`.<br/>
**Line 10 :** To declare the `res` variable and check the condition `a==b`. <br/>
**Line 12 :** Print the `res` using `cout`. And result will be true.

# Logical Operator ( &&, ||, ! )

```cpp
 1. Logical AND  => &&
 2. Logical OR =>  ||
 3. Logical NOT(Negation) => !
```

## 1. Logical AND (&&)

Both the conditions have to be checked wether it is true or false then use logical AND operator.

```
Truth table
condition 1  &&  condition 2
    T    T  =  T
    T    F  =  F
    F    T  =  F
    F    F  =  F
```

** Example 6 :**

```cpp showLineNumbers="true

#include <iostream>
using namespace std;

int main() {

    int a = 10;

    int b= 20;

    int res = a==10 && b==30;

    cout<<res;

    return 0;
}
```

** Output :**

> 0

**Explanation :**

**Line 6 :** Initialized the `10` value in variable `a`.<br/>
**Line 8 :** Initialized the `20` value in variable `b`.<br/>
**Line 10 :** To declare the `res` variable and check the condition `a==10 && b==30`. <br/>
**Line 12 :** Print the `res` using `cout`. And result will be false.
