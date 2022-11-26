# Nested-if

syntax : 

```html
if (condition)
{
    if
    {
        //-----
    }
    else
    {
        //----
    }
}
else
{
    //----
}
```

**💻 Example 1 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    int maths=30;
    int marathi=36;

    if(marks>=35 && marathi>=35>){
        cout<<"Pass";
    }
    else
    {
        cout<<"Fail";
    }  

    return 0;
}
```
**⚙️ Output :**
>Fail

**💻 Example 2 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    int maths=40;
    int marathi=16;

    if(marathi>=35>)
    {
        cout<<"Passed in Marathi";
        if(maths>=35)
        {
            cout<<Passed in Maths"<<endl;
        }
         else
        {
        cout<<"Failed in Maths";
        }  
    }
    else
    {
       cout<<"Failed in Marathi";
    }
    return 0;
}
```
**⚙️ Output :**
>Passed in Maths<br/>
Failed in Marathi

 ## Homeworks Examples :

**💻 Example 1️⃣ :  WAP to calculate largrst number among 3 using if-else-ladder ?**
```cpp
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
**⚙️ Output :**
>Enter 3 Numbers 5 80 7<br/>
B is largest

**💻 Example 2️⃣: WAP to calculate largest number among 3 using nested-if ?**
```cpp
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
**⚙️ Output :**
>Enter 3 Numbers 2 70 6<br/>
B is largest