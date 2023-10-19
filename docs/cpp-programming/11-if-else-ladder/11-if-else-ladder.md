---
title: if-else-ladder
description: "if-else-ladder"
hide_table_of_contents: true
---

# 3. If-else Ladder

**if-else-if ladder** helps user decide from among multiple options. if condition 1 is true then print the statement 1, otherwise
check the condition 2 same as condtiton true print satement, otherwise go to next condition , all condition are false print the esle part.

```cpp

syntax :
if (condition 1)
{
    //-----
    //-----
}
else if(condition 2)
{
    //----
    //----
}
else if(condition 3)
{
    //----
    //----
}
else if(condition 4)
{
    //----
    //----
}
else
{
  //----
}
```

** Example 1 :**

```cpp
#include <iostream>
using namespace std;

int main() {
    int num;
    cout<<"Enter Number: ";
    cin>>num;

    if(num==1){
        cout<<"One";
    }
    else if(num==2){
        cout<<"Two";
    }
    else if(num==3){
        cout<<"Three";
    }
    else if(num==4){
        cout<<"Four";
    }
    else
    {
        cout<<"Not Matched :";
    }
     return 0;
}
```

** Output :**

> Enter Number : 3<br/>
> Three

** Example 2 :**

```cpp
#include <iostream>
using namespace std;

int main() {
    int num;
    cout<<"Enter Number: ";
    cin>>num;

    if(num==1){
        cout<<"One";
    }
    else if(num==2){
        cout<<"Two";
    }
    else if(num==3){
        cout<<"Three";
    }
    else if(num==4){
        cout<<"Four";
    }
    else
    {
        cout<<"Not Matched...";
    }
     return 0;
}
```

** Output :**

> Enter Number : 8<br/>
> Not Matched...

** Example 3 : Boundry Condition**

```cpp
#include <iostream>
using namespace std;

int main() {
    int marks;

    cout<<"Enter Marks:";
    cin>>marks;

    if(marks>=70 && marks<=80>){
        cout<<"Grade C";
    }
    else if(marks>=80 && marks<=90){
        cout<<"Grade B";
    }
    else if(marks>=90 && marks <=100){
        cout<<"Grade A";
    }
    else
    {
        cout<<"Invalid Number";
    }

    return 0;
}
```

** Output :**

> Enter Marks : 90<br/>
> A

** Example 4 : Boundry Condition**

```cpp
#include <iostream>
using namespace std;

int main() {
    int marks;

    cout<<"Enter Marks:";
    cin>>marks;

    if(marks>=70 && marks<=80>){
        cout<<"Grade C";
    }
    else if(marks>=80 && marks<=90){
        cout<<"Grade B";
    }
    else if(marks>=90 && marks <=100){
        cout<<"Grade A";
    }
    else
    {
        cout<<"Invalid Number";
    }

    return 0;
}
```

** Output :**

> Enter Marks : 180<br/>
> Invalid Number

** Example 5 : Boundry Condition**

```cpp
#include <iostream>
using namespace std;

int main() {
    int marks;

    cout<<"Enter Marks:";
    cin>>marks;

    if(marks>=50 && marks<=60>){
        cout<<"Grade E";
    }
    else if(marks>=60 && marks<=70){
        cout<<"Grade D";
    }
    else if(marks>=70 && marks<=80){
        cout<<"Grade c";
    }
    else if(marks>=80 && marks<=90){
        cout<<"Grade B";
    }
    else if(marks>=90 && marks <=100){
        cout<<"Grade A";
    }
    else
    {
        cout<<"Invalid Number";
    }

    return 0;
}
```

** Output :**

> Enter Marks : 55<br/>
> Grade E
