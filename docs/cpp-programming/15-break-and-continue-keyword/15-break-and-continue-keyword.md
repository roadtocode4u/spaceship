---
title: Break-and-continue-keyword
description: "Break-and-continue-keyword"
hide_table_of_contents: true
---

# Break and Continue keywords

break => loop terminates permantly

continue => It will skip loop only for the currect instance

## Break Keyword

```
if(n == 25)
{
    break;
}
```

**Example 1️⃣ :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int i;

    for(i=1; i<=100; i++)
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
> 4<br/>
> 5<br/>
> 6<br/>
> 7<br/>
> .<br/>
> .<br/>
> .<br/>
> 100<br/>

**Explanation :**

In a **Line no 6** declare variable which name has `i` and its datatype is `integer`.<br/>
In a **Line 8 :** `for(int i=1; i<=100; i++)` `for` is keyword, `i=1` initialized `i` variable, `i++` increase value by 1. <br/>
In a **Line 10 :** print `i` variable.using `cout` object <br/>

**Example 2️⃣ :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int i;

    for(i=1; i<=100; i++)
    {
        if(i==25)
        {
            break;
        }
        cout<<i<<"\n";
    }

}
```

**Output :**

> 1<br/>
> 2<br/>
> 3<br/>
> 4<br/>
> .<br/>
> .<br/>
> .<br/>
> 25<br/>

**Explanation :**

In a **Line no 6** we declare one variable which name has `i`, and datatype is `integer`.<br/>
In a **Line no 8** execute the `for(i=1; i<=100;i++)` `for` is keyword, `i=1` initialize varible and store value `1`, `i++` increased value by one. <br/>
In a **Line no 10** check `if` condition `(i==25)` enter into if condition.<br/> then condition true `break` statement.<br/>
In a **Line no 14** print `i` variable using `cout` <br/>

## Continue Keyword

```
if(n == 25)
{
    continue;
}
```

**Example 3️⃣ :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int i;

    for(i=1; i<=100; i++)
    {
        if(i==15)
        {
            continue;
        }
        cout<<i<<"\n";
    }

}
```

**Output :**

> 1<br/>
> 2<br/>
> 3<br/>
> 4<br/>
> 5<br/>
> 6<br/>
> .<br/>
> .<br/>
> 14<br/>
> 16<br/>
> 17<br/>
> .<br/>
> .<br/>
> .<br/>
> 100<br/>

**Explanation :**

In a **Line no 6** we declare one variable which name has `i`, and datatype is `integer`.<br/>
In a **Line no 8** execute the `for(i=1; i<=100;i++)` `for` is keyword, `i=1` initialize varible and store value `1`, `i++` increased value by one. <br/>
In a **Line no 10** check `if` condition `(i==15)` enter into if condition.<br/> then condition true `continue` statement.<br/>
In a **Line no 14** print `i` variable using `cout` <br/>

**Example 4️⃣ :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int i;

    for(i=1; i<=100; i++)
    {
        if(i==25)
        {
            continue;
        }
        cout<<i<<"\n";
    }

}
```

**Output :**

> 1<br/>
> 2<br/>
> 3<br/>
> 4<br/>
> 5<br/>
> 6<br/>
> .<br/>
> .<br/>
> 24<br/>
> 26<br/>
> 27<br/>
> .<br/>
> .<br/>
> .<br/>
> 100<br/>

**Explanation :**

In a **Line no 6** we declare one variable which name has `i`, and datatype is `integer`.<br/>
In a **Line no 8** execute the `for(i=1; i<=100;i++)` `for` is keyword, `i=1` initialize varible and store value `1`, `i++` increased value by one. <br/>
In a **Line no 10** check `if` condition `(i==15)` enter into if condition.<br/> then condition true `continue` statement.<br/>
In a **Line no 14** print `i` variable using `cout` <br/>

### How to Calculate Factorial Number.

```cpp
 Factorial :

5! => 5*4*3*2*1 = 120

3! => 3*2*1 = 6

10 => 10*9*8*7*6*.....1

----------------

fact = 1; // 1*100*0=>0

sum = 0; // 100+0=>100
```

**Example 1️⃣ : WAP to calculate factorial of n number**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int fact = 1;
    int n;

    cout<<"Enter number to calculate factorial: ";
    cin>>n;

    for(int i=1;i<=n; i++)
    {
        fact = fact * i;
    }

     cout<<"Factorial is: "<<fact;
     return 0;
}
```

**Output :**

> Enter n calculate factorial: 5<br/>
> Factorial is: 120

**Explanation :**

In `Line no 6` we declare one variable that name has `fact` and store value `1` and datatype is `integer`.<br/>
In `Line no 7` we declare another varible that name has `n` and datatype is `integer`. <br/>
In `Line no 9` `Enter number to calculate factorial:` from user.<br/>
In `Line no 10` we stored value in `n` varible using `cin`.<br/>
In `Line no 12` `for(int i=1;i<=n; i++)` `for` is keyword, initialize `i` variable stored value `1`, `i<=n` condition
, `i++` increased value by one. <br/>
In `Line no 14` `fact` assign the value of `fact * i` and stored into `fact` variable.<br/>
In `Line no 17` Print `Factorial is: ` and `fact` variable using `cout` object. <br/>

### Prime and Composite Number

**Prime Number :** A number that can be divided exactly by 1 and itself. (1,2,3,5,7,11...)<br/>

**Composite Number :** A number that can be divided by multiple number. (8 = 1,2,4,8)<br/>

**Example 2️⃣ :WAP number is prime or composite**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter n: ";
    cin>>n;
    for(int i=2;i<n; i++)
    {
        if(n%i==0)
        {
            cout<<"Composite Number Because it is divisible by"<<i<<"\n";
        }
    }
     return 0;
}
```

**Output :**

> Enter n : 8<br/>
> Composite Number Because it is divisible by 2<br/>
> Composite Number Because it is divisible by 4<br/>

**Explanation :**

In `Line no 6` we declare one varible that name has `n` and datatype is `integer`. <br/>
In `Line no 7` `Enter n` from user .<br/>
In `Line no 8` we stored value in `n` varible using `cin`.<br/>
In `Line no 9` `for(int i=2;i<n; i++)` `for` is keyword, initialize `i` variable stored value `2`, `i<n` condition
, `i++` increased value by one. <br/>
In `Line no 11` check condition `if(n%i==0)` condition true then print statement otherwise terminate condition.<br/>

**Example 3️⃣ :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter n: ";
    cin>>n;
    int flag = -1;

    for(int i=2;i<n; i++)
    {
        if(n%i==0)
        {
           flag = i;
           break;
        }
    }
        if(flag == -1)
        {
            cout<<"Number is prime";
        }
        else
        {
             cout<<"Number is composite";
        }
     return 0;
 }
```

** Output :**

> Enter n : 2<br/>
> Number is prime

**Explanation :**

In a `Line no 6` we declare one varible that name has `n` and datatype is `integer`. <br/>
In a `Line no 7` `Enter n` from user .<br/>
In a `Line no 8` we stored value in `n` varible using `cin`.<br/>
In a `Line no 9` we declare `flag` varible and stored `-1` value and datatype is `integer`. <br/>
In `Line no 11` `for(int i=2;i<n; i++)` `for` is keyword, initialize `i` variable stored value `2`, `i<n` condition
, `i++` increased value by one. <br/>
In `Line no 13` check condition `if(n%i==0)` condition true then increase the value of flag and break statement.<br/>
In `Line no 15` check another condition `if(flag == -1)` condition true then print `Number is prime` otherwise jump to else part and print `Number is composite`

**Example 4️⃣ :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter n: ";
    cin>>n;

    int flag = -1;
    for(i=2;i<n; i++)
    {
        if(n%i==0)
        {
           flag = i;
           break;
        }
    }
     if(flag == -1)
        {
            cout<<"Number is Composite";
        }
        else
        {
            cout<<"Number is prime";
        }
     return 0;
}
```

**Output :**

> Enter n : 2<br/>
> Number is prime

**Explanation :**

In a `Line no 6` we declare one varible that name has `n` and datatype is `integer`. <br/>
In a `Line no 7` `Enter n` from user .<br/>
In a `Line no 8` we stored value in `n` varible using `cin`.<br/>
In a `Line no 9` we declare `flag` varible and stored `-1` value and datatype is `integer`. <br/>
In `Line no 11` `for(int i=2;i<n; i++)` `for` is keyword, initialize `i` variable stored value `2`, `i<n` condition
, `i++` increased value by one. <br/>
In `Line no 13` check condition `if(n%i==0)` condition true then increase the value of flag and break statement.<br/>
In `Line no 15` check another condition `if(flag == -1)` condition true then print `Number is prime` otherwise jump to else part and print `Number is composite`
