---
title: Logical and Ternary Operator
description: "Logical and Ternary Operator"
hide_table_of_contents: true
---

## 2. Logical OR (||)

```
condition-1  ||  condition-2
   T   ||   F   =  T
   T   ||   T   =  T
   T   ||   T   =  T
   F   ||   F   =  F

```

**Example 1 :**

```cpp
#include <iostream>
using namespace std;

int main() {

   int jee = 130;
   int cet = 20;

   int res = jee > 120 || cet > 200;

   cout<<res;

   return 0;
}
```

**Output :**

1

**Explanation :**

**Line 6 :** Initialized the `130` value in variable `jee`.<br/>
**Line 8 :** Initialized the `20` value in variable `cet`.<br/>
**Line 10 :** To declare the `res` variable and check the condition `jee > 130 || cet > 20`. <br/>
**Line 12 :** Print the `res` using `cout` And result will be True.

**Example 2 :**

```cpp
#include <iostream>
using namespace std;

int main() {

  int jee = 125;

  int cet = 220;

  int res = jee >= 120 || cet >= 200;

  cout<<res;

  return 0;
}
```

**Output :**

1

## Logical NOt (!)

```
reverse the boolean value.

!true = false
!false = true

```

**Example 3 :**

```cpp
#include <iostream>
using namespace std;

int main() {

  int jee = 0;

  int res = !( jee >= 120 );

  cout<<res;

  return 0;
}
```

**Output :**

1

# Ternary operator

```cpp
example :
condition ? true part : false part
```

** Example 5 :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int num;
   cout<<"enter a Number :";
   cin>>num;

   num==100 ? cout<<"Equal" : cout<<"Not Equal";

   return 0;
}
```

** Output :**

> Enter a Number : 20

> Not Equal

**Explanation :**

**Line 8 :** `Enter a num` from user .<br/>
**Line 9 :** allocate memory for `num` variable. <br/>
**Line 11 :** `num == 100` check this condition and then print the Eqaul part or Not Equal depend on condition.

** Example 6 :**

```cpp
#include <iostream>
using namespace std;

int main() {

   int number;

   cout<<"Enter a number :";
   cin>>number;

   number % 2 == 0 ? cout<<"Even" : cout<<"Odd";

   return 0;
}
```

** Output :**

> Enter a number : 10

> Even

**Explanation :**

**Line 8 :** `Enter a number` from user .<br/>
**Line 9 :** allocate memory for `number` variable. <br/>
**Line 11 :** `number % 2 == 0` check this condition and then print the Even part or odd depend on condition.
