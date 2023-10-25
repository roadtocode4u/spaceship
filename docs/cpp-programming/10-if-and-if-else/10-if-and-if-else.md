---
title: Conditional Statement
description: "if,if-else"
hide_table_of_contents: true
---

# Conditional Statements

There are Four Types :

1. if
2. if-else
3. if-else-ladder
4. nested-if

# 1. if

```cpp
1. if
syntax :

if (condition)
{
    //statements
}
```

** Example 1 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int num;

    cout<<"Enter Number : ";
    cin>>num;

    if(num>0){
        cout<<"Positive Number";
    }

    return 0
}
```

** Output :**

> Enter Number : 10<br/>
> Positive Number

**Explanation :**

**Line 6 :** declare `num` variable. <br/>
**Line 8 :** `Enter number` from user. <br/>
**Line 11 :** `if(num>0)` check condition , condition is true then print the statement otherwise end of if body.

** Example 2 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int num;

    cout<<"Enter Number : ";
    cin>>num;

    if(num>0){
        cout<<"Positive Number";
    }

    return 0
}
```

** Output :**

> Enter Number : -5<br/>

**Line 6 :** declare `num` variable. <br/>
**Line 8 :** `Enter number` from user. <br/>
**Line 11 :** `if(num>0)` check condition , condition is true then print the statement otherwise end of if body.

# 2. if-else

```cpp
2. if-else
syntax :
 if (condition)
{
    // True
}
else
{
    //----
    //----
}
```

** Example 3 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int num;

    cout<<"Enter Number : ";
    cin>>num;

    if(num>0){
        cout<<" Positive Number";
    }
    else{
        cout<<" Negative Number";
    }

    return 0
}
```

** Output :**

> Enter Number : 10 <br/>
> Positive Number

**Explanation :**

**Line 6 :** declare `num` variable. <br/>
**Line 8 :** `Enter number` from user. <br/>
**Line 11 :** `if(num>0)` condition is true print statement otherwise jump to else part . <br/>

** Example 4 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int num;

    cout<<"Enter Number : ";
    cin>>num;

    if(num%2==0){
        cout<<"Number is Even";
    }
    else{
        cout<<"Number is Odd";
    }

    return 0
}
```

** Output :**

> Enter Number : 10 <br/>
> Number is Even

**Explanation :**

**Line 6 :** declare `num` variable. <br/>
**Line 8 :** `Enter number` from user. <br/>
**Line 11 :** `if(num%2==0)` condition is true print statement otherwise jump to else part . <br/>

** Example 5 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int num;

    cout<<"Enter Number : ";
    cin>>num;

    if(num%2==0){
        cout<<"Number is Even";
    }
    else{
        cout<<"Number is Odd";
    }

    return 0
}
```

** Output :**

> Enter Number : 9 <br/>
> Number is Odd

**Explanation :**

**Line 6 :** declare `num` variable. <br/>
**Line 8 :** `Enter number` from user. <br/>
**Line 11 :** `if(num>0)` condition is true print statement otherwise jump to else part . <br/>

** Example 6 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int num;

    cout<<"Enter Number : ";
    cin>>num;

    if(num%3==0 && num%5==0){
        cout<<"Number is divisible by 5 & 3";
    }
    else{
        cout<<"Number is NOT divisible by 5 & 3";
    }

    return 0
}
```

** Output :**

> Enter Number : 15<br/>
> Number is divisible by 5 & 3

**Explanation :**

**Line 6 :** declare `num` variable. <br/>
**Line 8 :** `Enter number` from user. <br/>
**Line 11 :** `if(num%3==0 && num%5==0)` condition is true print statement otherwise jump to else part . <br/>

** Example 7 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int num;

    cout<<"Enter Number : ";
    cin>>num;

    if(num%3==0 && num%5==0){
        cout<<"Number is divisible by 5 & 3";
    }
    else{
        cout<<"Number is NOT divisible by 5 & 3";
    }

    return 0
}
```

** Output :**

> Enter Number : 10<br/>
> Number is NOT divisible by 5 & 3

** Example 8 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int num;

    cout<<"Enter Number : ";
    cin>>num;

    if(num%3==0 || num%5==0){
        cout<<"Number is divisible by 5 or 3";
    }
    else{
        cout<<"Number is NOT divisible by 5 or 3";
    }

    return 0
}
```

** Output :**

> Enter Number : 10<br/>
> Number is divisible by 5 or 3

**Explanation :**

**Line 6 :** declare `num` variable. <br/>
**Line 8 :** `Enter number` from user. <br/>
**Line 11 :** `if(num%3==0 || num%5==0)` condition is true print statement otherwise jump to else part . <br/>

** Example 9 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int rate,quantity;

    cout<<"Enter rate & Quantity : ";
    cin>>rate>>quantity;

    int bill = rate * quantity

     cout<<"Bill: "<<bill;

    return 0
}
```

** Output :**

> Enter Rate & Quantity : 5 10<br/>
> Bill 50

**Explanation :**

**Line 5 :** declare 2 vaeiable `rate` and `quantity`.<br/>
**Line 7 :** `Enter rate and quantity` from user. <br/>
**Line 10 :** declare `bill` variable and assign `rate * quantity`. <br/>
**Line 12 :** print `Bill` and `bill` variable using `cout`.<br/>
