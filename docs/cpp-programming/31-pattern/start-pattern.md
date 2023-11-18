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

> `* * * * *`<br/> > `* * * * *`<br/> > `* * * * *`<br/> > `* * * * *`<br/> > `* * * * *`<br/>

**Explanation :**

In a **Line no 6** start for loop ` for(int j =1; j<=5; j++)` initialise `j` variable and store value `1`, check condition `j<=5` and increse value by one.<br/>
In a **Line no 8** start for loop ` for(int i=1; i<=5; i++)` initialise `i` variable and store value `1`, check condition `i<=5` and increse value by one.<br/>
Print `*` using cout and `space`.<br/>
use `endl` for new line<br/>
