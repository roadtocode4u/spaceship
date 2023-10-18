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
