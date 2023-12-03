---
title: Reference
description: "Reference"
hide_table_of_contents: true
---

# Reference

**Call by value**<br/>
**Call by address**<br/>
**Call by reference**<br/>

### Call by value

**Example 1:**

```cpp showLineNumbers = "true"
// call by value
#include <iostream>
using namespace std;

void fun(int num)
{
    num = num + 2;
    cout<<"Inside function "<<num<<endl;
}
int main() {

    int num = 10,
    cout<<"Before function :"<<num<<endl;

   fun(num);
    cout<<"After function :"<<num<<endl;

    return 0;
}

```

**Output :**

> Before function : 10<br/>
> Inside function : 12<br/>
> After function : 10

**Expalantion**

create function `fun` pass parameter `num`.<br/>
calculate `num = num + 2`.<br/>
print `Inside function` and `num`.<br/>
In main function initialize `num` variable and store `10` value.<br/>
print `Before function ` and `num`.<br/>
call `fun` funaction pass argument `num`.<br/>
print `After function` and `num`.<br/>

### Call by address

**Example 2:**

```cpp showLineNumbers = "true"

//call by address
#include <iostream>
using namespace std;


void fun(int *num)
{
    *num = *num + 2;

    cout<<"Inside function :"<<*num<<endl;
}
int main() {

    int num = 10
    cout<<"Before function :"<<num<<endl;
    fun(&num);
    cout<<"After function "<<num<<endl;

    return 0;
}
```

**Output :**

> Before function : 10<br/>
> Inside function : 12<br/>
> After function : 10

**Expalantion**

create function `fun` pass parameter `*num`.<br/>
calculate `*num = *num + 2`.<br/>
print `Inside function` and `*num`.<br/>
In main function initialize `num` variable and store `10` value.<br/>
print `Before function ` and `&num`.<br/>
call `fun` funaction pass argument `num`.<br/>
print `After function` and `num`.<br/>

### Call by reference

**Example 3:**

```cpp showLineNumbers = "true"

//call by reference
#include <iostream>
using namespace std;

int main() {

    int a = 10;
    int& b = a;
    cout<<a<<endl;
    cout<<b;

    return 0;
}
```

**Output :**

> 10<br/>
> 10<br/>

**Expalantion**

Initialise `a` variable and store `10` value. <br/>
Initialise `b` variable and store refrence of `a`.<br/>
print `a` `endl` for new line.<br/>
print `b`.
