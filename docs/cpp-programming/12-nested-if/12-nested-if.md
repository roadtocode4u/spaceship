# Nested-if-else

nested if-else statement inside another if statement

syntax :

```
if (condition)
{
    //statement..

    if(condition)
    {
        //statement
    }
    else
    {

    }
}
else
{

}

```

** Example 1 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int maths=30;
    int science=36;

    if(maths>=35 && science>=35){
        cout<<"Pass";
    }
    else
    {
        cout<<"Fail";
    }

    return 0;
}
```

** Output :**

> Fail

**Explanation :**

**Line 5,6 :** declare `maths` and `science` variable and its value is `30` and `36`. <br/>
**Line 8 :** check condition ` if(maths>=35 && science>=35)` conditon true print if part otherwise jump to the else part <br/>

** Example 2 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int maths=30;
    int science=36;

    if(science>=35)
    {
        cout<<"Passed in science \n";
        if(maths>=35)
        {
            cout<<"Passed in Maths \n";
        }
         else
        {
        cout<<"Failed in Maths \n";
        }
    }
    else
    {
       cout<<"Failed in Science \n";
    }
    return 0;
}

```

** Output :**

> Passed in Science<br/>
> Failed in Maths

**Line 5 :** declare `maths` variable assign value `30`. <br/>
**Line 6 :** declare `science` variable assign value `36`. <br/>
**Line 8 :** check condition `if(science>=35)` condition is true go inside the if part and print the statement. <br/>
**Line 11 :** check this condition `if(maths>35)` condition is true go inside the if part and print the statement. otherwise
jump to the else part. <br/>

** Example 1️⃣ : WAP to calculate largrst number among 3 using if-else-ladder ?**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int a,b,c;
    cout<<"Enter 3 Numbers:";
    cin>>a>>b>>c;

    if(a>b && a>c)
    {
        cout<<"A is largest";
    }
    else if(b>a && b>c)
    {
        cout<<"B is largest";
    }
    else if(c>a && c>b)
    {
        cout<<"C is largest";
    }
    else
    {
        cout<<"All are equal";
    }
     return 0;
}
```

** Output :**

> Enter 3 Numbers 10 20 30<br/>
> C is largest

**Explanation :**

**Line 5 :** declare 3 variable `a`, `b`,`c`.<br/>
**Line 6 :** `enter 3 number ` from user.<br/>
**Line 9 :** `if(a>b && a>c)` check condition , condition is true print statement otherwise jump to next condition.<br/>
**Line 13 :** ` else if(b>a && b>c)` check condition , condition is true print statement otherwise jump to next condition.<br/>
**Line 17 :** ` else if(c>a && c>b)` check condition , condition is true print statement otherwise jump to else part.<br/>
All condition are false print the else part.

** Example 2️⃣: WAP to calculate largest number among 3 using nested-if ?**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int a,b,c;
    cout<<"Enter 3 Numbers:";
    cin>>a>>b>>c;

    if(a>b)
    {
         if(a>c)
         {
             cout<<"A is largest";
         }
         else
         {
             cout<<"C is largest";
         }
    }
    else
    {
        if(b>c)
        {
            cout<<"B is largest";
        }
        else
        {
            cout<<"C is largest";
        }
    }
     return 0;
}
```

** Output :**

> Enter 3 Numbers 20 40 30<br/>
> B is largest

**Line 5 :** declare 3 variable `a`, `b`,`c`.<br/>
**Line 6 :** `enter 3 number ` from user.<br/>
**Line 8 :** `if(a>b)` conditon true goto the if part otherwise else part.<br/>
**Line 10 :** `if(a>c)` condition true print the statement othewise else statement.<br/>
