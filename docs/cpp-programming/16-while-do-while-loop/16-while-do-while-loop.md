# while and do-while

 ### Loops :
  2. while
  3. do-while

```cpp
1. for     2. while   3. do-while

how many times it will run ?

[n times] ---> for

[pre-Tested] ---> while

[post-Tested] ---> do-while
```

❤️  **2 .While loop :**
1. entry controlled
2. pre-tested
3. executes atleast zero times whwn condition is false . 
 ```cpp
 syntax:
 2.``` while(condition)
 {// loop body start
    
 } // loop body ends
 ```

 **Example 1:**

 ```
  int i=1;
    while(i<=5)
    {
      cout<<i<<endl;
      i++;  
    }
     return 0;
 ```
```cpp
Explanation:

ex:
 int i=1;
    while(i<=5)
    {
      cout<<i<<endl;
      i++;  
    }
     return 0;

 i=1    1<=5   true
 i++
 i=2    2<=5   true
 i++
 i=3    3<=5   true
 i++
 i=4    4<=5   true
 i++
 i=5    5<=5   true
 i++
 i=6    6<=5   false
```
**💻 Example 1 :**
```cpp
#include <iostream>
using namespace std;

int main() {
 
    int i=1;
    while(i<=5)
    {
      cout<<i<<endl;
      i++;  
    }
     return 0;
}
```
**⚙️ Output :**
>1<br/>
2<br/>
3<br/>
4<br/>
5<br/>

**💻 Example 2 :**
```cpp
#include <iostream>
using namespace std;

int main() {
 
    int i=0;
    while(i<10)
    {
      cout<<i<<endl;
      i++;  
    }
     return 0;
}
```
**⚙️ Output :**
>0<br/>
2<br/>
3<br/>
.<br/>
.<br/>
.<br/>
9<br/>

**💻 Example 3 : WAP to print natural numbers upto n using while loop**
```cpp
#include <iostream>
using namespace std;

int main() {
 
    int n;
    cout<<"Enter value of n: ";
    cin>>n;

    int i=1;
    while(i<=n)
    {
      cout<<i<<endl;
      i++;  
    }
     return 0;
}
```
**⚙️ Output :**
>Enter value of n: 10<br/>
1<br/>
2<br/>
3<br/>
.<br/>
.<br/>
.<br/>
10<br/>

❤️ **3. do while loop :** 
1. exit controlled
2. post tested
3. it executes atleast once even if condition is false .
 ```cpp
 syntax:
 3. do
 {//  start
      
    [example]
     
 } //  ends
 while(condition);

 ex 1: 
  int i=10;
    do
    {
      cout<<i<<endl;
      i++;  
    }
    while(i<=5);
 ```
**💻 Example 4 :**
```cpp
#include <iostream>
using namespace std;

int main() {
 
    int i=10;
    do
    {
      cout<<i<<endl;
      i++;  
    }
    while(i<=5);

    return 0;
}
```
**⚙️ Output :**
>10

**💻 Example 5 : WAP to simulate video game menu**<br/>
1---> New Game<br/>
2---> Resume<br/>
3---> Settings<br/>
4---> Exit<br/>

```cpp
#include <iostream>
using namespace std;

int main() {

    int choice = -1;
    char ch= 'y';

    do
    {
      cout<<"####### Video Game #######"<< endl;
      cout<<"1 => New Game : "<<endl;
      cout<<"2 => Resume : "<<endl;
      cout<<"3 => Settings : "<<endl;  
      cin>>choice;

      if(choice == 1)
      {
        cout<<"New game is starting...";
      }
      else if(choice == 2)
      {
        cout<<"Continue from where you left...";
      }
      else if(choice == 3)
      {
        cout<<"Select Settings...";
      }
      cout<<"\n\n Do you want to continue ? (y/n)";
      cin>>ch;
    }
    while(ch == 'y');

    return 0;
}
```
**⚙️ Output :**
>####### Video Game #######<br/>
1 => New Game<br/>
2 => Resume<br/>
3 => Settings<br/>
1<br/>
New game is starting...<br/><br/>
 Do you want to continue ? (y/n)y<br/>
 ####### Video Game #######<br/>
1 => New Game<br/>
2 => Resume<br/>
3 => Settings<br/>
2<br/>
Continue from where you left..."<br/><br/>
Do you want to continue ? (y/n)y<br/>
 ####### Video Game #######<br/>
1 => New Game<br/>
2 => Resume<br/>
3 => Settings<br/>
3<br/>
Select Settings...<br/><br/>
Do you want to continue ? (y/n)n<br/>



