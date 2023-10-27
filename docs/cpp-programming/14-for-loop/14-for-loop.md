---
title: For-loop
description: "For-loop"
hide_table_of_contents: true
---

# Loops

Loops in a programming is used to iterate the statements or part of the program several times.<br/>
Types of Loops:<br/>

1. For
2. while
3. do-while

# 1.For loop

For loops are used when you have a block of code which you want to repeat a fixed number of times.

syntax:

```cpp
1. for(initilization; condition; inc/dec)
{// loop body start

} // loop body ends
ex 1:
int i;
for(i=0; i<5; i++)
{
  cout<<"Hello"<<endl;
}

```

`initilization` - initializes variable and executed only once. <br/>
`condition` -if `true`, the body of `for` loop is exexuted if `false`, the for loop is terminated. <br/>
`inc/dec` - increases or decrease the value of initialized variables and again checks the condition.

**Example 1️⃣ :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int i;
    for(i=0;i<5; i++)
    {
      cout<<"Hello \n";
    }
     return 0;
}
```

**Output :**

> Hello<br/>
> Hello<br/>
> Hello<br/>
> Hello<br/>
> Hello<br/>

**Explanation :**

**Line 6 :** Declare `i` variable. <br/>
**Line 7 :** `for(i=0;i<5; i++)` `for` is keyword, `i=0` initialize `i`, `i<5` condition to check, `i++` increase value one by one.<br/>
**Line 8 :** loop body starts.<br/>
**Line 9 :** print `Hello` using cout.<br/>
**Line 10 :** loop body ends.<br/>

**Example 2️⃣ : Reverse**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int i;
    for(i=4;i>0; i--)
    {
      cout<<"Hello \n";
    }
     return 0;
}
```

**Output :**

> Hello<br/>
> Hello<br/>
> Hello<br/>
> Hello<br/>

**Explanation :**

**Line 6 :** Declare `i` variable. <br/>
**Line 7 :** `for(i=4;i>0; i--)` `for` is keyword, `i=4` initialize `i`, `i>0` condition to check, `i--` decrease value one by one.<br/>
**Line 8 :** loop body starts.<br/>
**Line 9 :** print `Hello` using cout.<br/>
**Line 10 :** loop body ends.<br/>

**Example 3️⃣ : Reverse**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int i;
    for(i=4;i>0; i--)
    {
      cout<<i<<"\n";
    }
     return 0;
}
```

**Output :**

> 4<br/>
> 3<br/>
> 2<br/>
> 1<br/>

**Explanation :**

**Line 6 :** Declare `i` variable. <br/>
**Line 7 :** `for(i=4;i>0; i--)` `for` is keyword, `i=4` initialize `i`, `i>0` condition to check, `i--` decrease value one by one.<br/>
**Line 8 :** loop body starts.<br/>
**Line 9 :** print `i` variable using cout.<br/>
**Line 10 :** loop body ends.<br/>

### Infinite Loop:

1. loops condition is always true .
2. it always runs because stoppping condition never occurs .

**Example 1️⃣ :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int i;
    for(i=1;i>0; i++)
    {
      cout<<i<<"\n";
    }
     return 0;
}
```

**Output :**

> 1<br/>
> 2<br/>
> 3<br/>
> .<br/>
> .<br/>
> .<br/>
> .<br/>
> .<br/>
> infinite

**Explanation :**

**Line 6 :** Declare `i` variable. <br/>
**Line 7 :** `for(i=1;i>0; i++)` `for` is keyword, `i=1` initialize `i`, `i>0` condition to check, `i++` increase value one by one.<br/>
**Line 8 :** loop body starts.<br/>
**Line 9 :** print `i` variable using cout.<br/>
**Line 10 :** loop body ends.<br/>

**Example 2️⃣ : WAP to print all even numbers upto n**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter value of n: ";
    cin>>n;
    for(i=2;i<=n; i+2)
    {
      cout<<i<<"\n";
    }
     return 0;
}
```

**Output :**

> Enter value of n: 20<br/>
> 2<br/>
> 4<br/>
> 6<br/>
> 8<br/>
> 10<br/>
> .<br/>
> .<br/>
> .<br/>
> 20

**Explanation :**

**Line 6 :** Declare `n` variable. <br/>
**Line 7 :** `enter value of n:` from user.<br/>
**Line 9 :** `for(i=2;i<=n; i+2)` `for` is keyword, `i=2` initialize `i`, `i<=n` condition to check, `i+2` increase value by two.<br/>
**Line 10 :** loop body starts.<br/>
**Line 11 :** print `i` variable using cout.<br/>
**Line 12 :** loop body ends.<br/>

**Example 3️⃣ : WAP to print all even numbers upto n**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter value of n: ";
    cin>>n;
    for(i=2;i<=n; i=i+2)
    {
        if(i%2 == 0)
        {
           cout<<i<<endl;
        }
    }
     return 0;
}
```

**Output :**

> Enter value of n: 10<br/>
> 2<br/>
> 4<br/>
> 6<br/>
> 8<br/>
> 10

**Example 4️⃣ :WAP to print sum of n numbers ?**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter value 0f n: ";
    cin>>n;

    int sum =0;
    for(i=1;i<=n; i++)
    {
        sum = sum + i;
    }
    cout<<"Sum : "<<sum;
     return 0;
}
```

**Output :**

> Enter value of n: 5<br/>
> Sum :15

**Explanation :**

**Line 6 :** Declare `n` variable. <br/>
**Line 7 :** `enter value of n:` from user.<br/>
**Line 10 :** initialize `sum` variable.<br/>
**Line 11 :** `for(i=1;i<=n; i++)` `for` is keyword, `i=1` initialize `i`, `i<=n` condition to check, `i++` increase value by one.<br/>
**Line 12 :** loop body starts.<br/>
**Line 13 :** `sum = sum + i` In `sum` variable assign value of `sum + i` ,<br/>
**Line 14 :** loop body ends.<br/>
**Line 15 :** print `sum` variable <br/>
