---
title: pattern
description: "pattern"
hide_table_of_contents: true
---

**Example : 1**

```cpp showLineNumbers = "true"
#include<iostream>
using namespace std;

int main()
{
    for(int j =1; j<=5; j++)
    {
        cout<<"*"<<' ';
    }

    return 0;
}
```

**Output :**<br/>

> `* * * * *`

**Explanation :**

In a **Line no 6** start for loop ` for(int j =1; j<=5; j++)` initialise `j` variable and store value `1`, check condition `j<=5` and increse value by one.<br/>
Print `*` using cout and `space`.<br/>

**Example : 2**

```cpp showLineNumbers = "true"
#include<iostream>
using namespace std;

int main()
{
    for(int j=1; j<=5; j++)
    {
        cout<<"*"<<' ';
    }

    cout<<endl;

    for(int j=1; j<=5; j++)
    {
        cout<<"*"<<' ';
    }

    cout<<endl;

    for(int j=1; j<=5; j++)
    {
        cout<<"*"<<' ';
    }

    cout<<endl;

    for(int j=1; j<=5; j++)
    {
        cout<<"*"<<' ';
    }

    cout<<endl;

    for(int j=1; j<=5; j++)
    {
        cout<<"*"<<' ';
    }

    cout<<endl;

    return 0;
}
```

**Output :**<br/>

> `* * * * *`<br/> > `* * * * *`<br/> > `* * * * *`<br/> > `* * * * *`<br/> > `* * * * *`<br/>

**Explanation :**

In a **Line no 6** start for loop ` for(int j =1; j<=5; j++)` initialise `j` variable and store value `1`, check condition `j<=5` and increse value by one.<br/>
Print `*` using cout and `space`.<br/>
In a **Line no 13, 20, 27, 34** same as line no 6.<br/>

**Example : 3**

```cpp showLineNumbers = "true"
#include<iostream>
using namespace std;

int main()
{
    for(int j =1; j<=5; j++)
    {
        for(int i=1; i<=5; i++)
        {
            cout<<"*"<<' ';
        }

            cout<<endl;
    }

    return 0;
}
```

**Output :**<br/>

> `* * * * *`<br/>
> `* * * * *`<br/>
> `* * * * *`<br/>
> `* * * * *`<br/>
> `* * * * *`<br/>

**Explanation :**

In a **Line no 6** start for loop ` for(int j =1; j<=5; j++)` initialise `j` variable and store value `1`, check condition `j<=5` and increse value by one.<br/>
In a **Line no 8** start for loop ` for(int i=1; i<=5; i++)` initialise `i` variable and store value `1`, check condition `i<=5` and increse value by one.<br/>
Print `*` using cout and `space`.<br/>
use `endl` for new line<br/>

**Example : 4**

```cpp showLineNumbers = "true"
#include<iostream>
using namespace std;

int main()
{
    for(int row=0; row<=5; row++)
    {
        for(int col=1; col<=row; col++)
        {
            cout<<"*"<<' ';
        }

            cout<<endl;
    }

    return 0;
}
```

**Output :**<br/>

> `* `<br/>
> `* * `<br/>
> `* * * `<br/>
> `* * * * `<br/>
> `* * * * *`<br/>

**Explanation :**

In a **Line no 6** start for loop ` for(int row =1; row<=5; row++)` initialise `row` variable and store value `1`, check condition `row<=5` and increse value by one.<br/>
In a **Line no 8** start for loop ` for(int col=1; col<=row; col++)` initialise `col` variable and store value `1`, check condition `col<=row` and increse value by one.<br/>
Print `*` using cout and `space`.<br/>
use `endl` for new line<br/>

**WAP to calculate sum of 5 subjects and their percentage and print grade.
Hint 💡:**

If percentage >=90 then Grade is A<br/>
If percentage >=80 then Grade is B<br/>
If percentage >=70 then Grade is C<br/>
If percentage >60 then Grade is D<br/>
If percentage <60 then Grade is fail.<br/>

```cpp showLineNumbers = "true"
#include<iostream>
using namespace std;

int main()
{
   int mar, math, hindi, sci, eng, sum;
   float percent;

   cout<<"Enter Marathi Marks : ";
   cin>>mar;

   cout<<"Enter Math Marks : ";
   cin>>math;

   cout<<"Enter Hindi Marks : ";
   cin>>hindi;

   cout<<"Enter Science Marks : ";
   cin>>sci;

   cout<<"Enter English Marks : ";
   cin>>eng;

   sum =  mar + math + hindi + sci + eng;
   cout<<"Sum of marks : "<<sum<<endl;

   percent = sum / 5;
   cout<<"Percentage : "<<percent<<"%"<<endl;

   if(percent >= 90)
   {
       cout<<"Grade is A";
   }
   else if(percent >= 80)
   {
       cout<<"Grade is B";
   }
   else if(percent >= 70)
   {
       cout<<"Grade is C";
   }
    else if(percent >= 60)
   {
       cout<<"Grade is D";
   }
    else
   {
       cout<<" Fail ";
   }

    return 0;
}

```

**Output :**

> Enter Marathi Marks : 87<br/>
> Enter Math Marks : 98<br/>
> Enter Hindi Marks : 87<br/>
> Enter Science Marks : 81<br/>
> Enter English Marks : 67<br/>
> Sum of marks : 420<br/>
> Percentage : 84%<br/>
> Grade is B<br/>
