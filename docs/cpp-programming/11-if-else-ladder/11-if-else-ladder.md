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

```cpp showLineNumbers = "true"
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

**Explanation :**

**Line 5 :** declare variable `num`<br/>
**Line 6 :** `Enter a number` from user. <br/>
**Line 7 :** allocate memory for `num` variable.<br/>
**Line 9 :** `if(num==1)` check the condition condition true print statement otherwise goto next condition.<br/>
**Line 12 :** `else if(num==2)` check the condition condition true print statement otherwise goto next condition.<br/>
**Line 15 :** `else if(num==3)` check the condition condition true print statement otherwise goto next condition.<br/>
All condition are false then goto the esle part and print the else part .

** Example 2 :**

```cpp showLineNumbers = "true"
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

**Explanation :**

**Line 5 :** declare variable `num`<br/>
**Line 6 :** `Enter a number` from user. <br/>
**Line 7 :** allocate memory for `num` variable.<br/>
**Line 9 :** `if(num==1)` check the condition, condition true print statement otherwise goto next condition.<br/>
**Line 12 :** `else if(num==2)` check the condition, condition true print statement otherwise goto next condition.<br/>
**Line 15 :** `else if(num==3)` check the condition, condition true print statement otherwise goto next condition.<br/>
All condition are false then goto the esle part and print the else part .

** Example 3 : Boundry Condition**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int marks;

    cout<<"Enter Marks:";
    cin>>marks;

    if(marks>=70 && marks<=80){
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

**Explanation :**

**Line 5 :** declare variable `marks`<br/>
**Line 6 :** `Enter marks` from user. <br/>
**Line 7 :** allocate memory for `marks` variable.<br/>
**Line 9 :** `if(marks>=70 && marks<=80)` check condition, condition true print the `Grade C` otherwise got to next condition.<br/>
**Line 12 :** `if(marks>=80 && marks<=90)` check condition, condition true print the `Grade B` otherwise got to next condition.<br/>
**Line 15 :** `if(marks>=90 && marks<=100)` check condition, condition true print the `Grade A` otherwise got to else part.<br/>
All condition are false print the else part `Invalid number`.<br/>

** Example 4 : Boundry Condition**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int marks;

    cout<<"Enter Marks:";
    cin>>marks;

    if(marks>=70 && marks<=80){
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

**Explanation :**

**Line 5 :** declare variable `marks`<br/>
**Line 6 :** `Enter marks` from user. <br/>
**Line 7 :** allocate memory for `marks` variable.<br/>
**Line 9 :** `if(marks>=70 && marks<=80)` check condition, condition true print the `Grade C` otherwise got to next condition.<br/>
**Line 12 :** `if(marks>=80 && marks<=90)` check condition, condition true print the `Grade B` otherwise got to next condition.<br/>
**Line 15 :** `if(marks>=90 && marks<=100)` check condition, condition true print the `Grade A` otherwise got to else part.<br/>
All condition are false print the else part `Invalid number`.<br/>

** Example 5 : Boundry Condition**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int marks;

    cout<<"Enter Marks:";
    cin>>marks;

    if(marks>=50 && marks<=60){
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

**Explanation :**

**Line 5 :** declare variable `marks`<br/>
**Line 6 :** `Enter marks` from user. <br/>
**Line 7 :** allocate memory for `marks` variable.<br/>
**Line 9 :** `if(marks>=50 && marks<=60)` check condition, condition true print the `Grade E` otherwise got to next condition.<br/>
**Line 9 :** `if(marks>=60 && marks<=70)` check condition, condition true print the `Grade D` otherwise got to next condition.<br/>
**Line 9 :** `if(marks>=70 && marks<=80)` check condition, condition true print the `Grade C` otherwise got to next condition.<br/>
**Line 12 :** `if(marks>=80 && marks<=90)` check condition, condition true print the `Grade B` otherwise got to next condition.<br/>
**Line 15 :** `if(marks>=90 && marks<=100)` check condition, condition true print the `Grade A` otherwise got to else part.<br/>
All condition are false print the else part `Invalid number`.<br/>
