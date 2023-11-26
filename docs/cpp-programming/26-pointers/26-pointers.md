---
title: Pointers
description: "Pointers"
hide_table_of_contents: true
---

## Pointers

A pointer are a special variable, which can stores the address of another variable.

```
& ampersand (address of operator)

&a => address of a

To find a address of given variable
```

### WAP to find out address of variables

**Example 1️:**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int a = 10;
    int b = 20;
    int c = 30;

    cout<<"Address of a : "<<&a<<"value"<<a<<endl;

    cout<<"Address of b : "<<&b<<"value"<<b<<endl;

    cout<<"Address of c : "<<&c<<"value"<<c<<endl;

    return 0;
}
```

**Output :**

> Address of a : 0x7ffeaea3b0ec value of 10<br/>
> Address of b : 0x7ffeaea3b0e8 value of 20<br/>
> Address of c : 0x7ffeaea3b0e4 value of 30

**Expalantion**

In a `Line no 6` we initialize `a` variable and store `10` value<br/>
In a `Line no 7` we initialize `b` variable and store `20` value<br/>
In a `Line no 8` we initialize `c` variable and store `30` value<br/>
In a `Line no 10` print `Address of a` and `&a`, `a` variable. <br/>
Same as `Line no 12 and 14`.<br/>

**Syntax**

```
<datatype>* <variable>

int* age
```

### WAP to store a variable address

**Example 2:**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int age = 22;

    cout<<"address of age : "<<&age<<endl;

     int* address = &age;
     cout<<"address from pointer :"<<address;


    return 0;
}
```

**Output :**

> address of age : 0x7ffe390d907c<br/>
> address from pointer : 0x7ffe390d907c

**Expalantion**

In a `Line no 6` we initialize `age` variable and store `22` value<br/>
In a `Line no 8` print `Address of age` and `&age` <br/>
In a `Line no 10` create `pointer` variable and store `address of age`.<br/>
In a `Line no 11` print `address from ponter :` and address variable.<br/>

## Dereference operator

If there is \* symbol before the variable then it is called dereference operator.

**Example 3:**

```cpp showLineNumbers = "true"

#include <iostream>
using namespace std;

int main() {

    int age = 22;
    cout<<"address of age : "<<&age<<endl;

     int* address = &age;
     cout<<"address from pointer :"<<*address;


    return 0;
}
```

**Output :**

> address of age : 0x7ffe390d907c<br/>
> address from pointer : 22

**Expalantion**

In a `Line no 6` we initialize `age` variable and store `22` value<br/>
In a `Line no 8` print `Address of age` and `&age` <br/>
In a `Line no 10` create `pointer` variable `address` and store `address of age`.<br/>
In a `Line no 11` print `address from ponter :`and
dereference `*address` varible.<br/>

**Example : 4**

```cpp showLineNumbers = "true"

#include <iostream>
using namespace std;

int main() {

    int age = 22;
    int* p = &age;

    cout<<"1) "<<&age<<endl;
    cout<<"2) "<<age<<endl;
    cout<<"3) "<<&p<<endl;
    cout<<"4) "<<p<<endl;
    cout<<"5) "<<*p<<endl;


    return 0;
}
```

**Output :**

> 1. 0x7ffe390d904c<br/>
> 2. 22<br/>
> 3. 0x7ffe390d904O<br/>
> 4. 0x7ffe390d904c<br/>
> 5. 22<br/>

**Expalantion**

In a `Line no 7` we initialize `age` variable and store `22` value<br/>
In a `Line no 8` create `pointer` variable `p` and store `address of age`.<br/>
In a `Line no 10` print `&age`.<br/>
In a `Line no 11` print `age`.<br/>
In a `Line no 12` print `&p`.<br/>
In a `Line no 13` print `p`.<br/>
In a `Line no 14` print `*p`.<br/>

**Call by value**<br/>
**Call by address**<br/>
**Call by reference**<br/>

### Call by value

**Example 5:**

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

**Example 6:**

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

**Example 7:**

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
