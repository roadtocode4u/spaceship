# Functions

**A function in C++ refers to a group of statements that takes input, processes it, and returns an output.**

## Features of function in C++

* Re-usability
* Structural flow

## Addition of two numbers without using function

**💻 Example 1 :**
```cpp
#include <iostream>
using namespace std;
int main() {
    
    int l1=5, b1=8;
    int p1 = 2 * (l1+b1);
    cout<<"Rectangle 1: "<<p1<<endl;
    
    int l2=5, b2=4;
    int p2 = 2 * (l2+b2);
    cout<<"Rectangle 2: "<<p2<<endl;
    
    return 0;
}
```
**⚙️ Output :**
>Rectangle 1: 26<br/>
Rectangle 2: 18

**Syntax :**

```cpp
returntype functionname(parameter)
{ <- body start 

} <- body end

```
## Write a program to find the perimeter of a rectangle 

**💻 Example 2 :**
```cpp
#include <iostream>
using namespace std;

void cal_perimeter(int l, int b)
{
    int perimeter = 2* (l+b);
    cout<<"Perimeter: "<<perimeter<<endl;
}

int main(){
    
    int l1=5, b1=8;
    cal_perimeter(l1, b1);
    
    int l2=5, b2=4;
    cal_perimeter(l2, b2);
    
    return 0;
}
```
**⚙️ Output :**
>Perimeter: 26<br/>
Perimeter: 18

## How to return value from function in C++

**💻 Example 3 :**
```cpp

#include <iostream>
using namespace std;

int cal_perimeter(int l, int b)
{
    int perimeter = 2* (l+b);
    return perimeter;
}

int main(){
    
    int l1=5, b1=8;
    int p1 = cal_perimeter(l1, b1);
    cout<<"Perimeter of first rectangle: "<<p1<<endl;
    
    int l2=5, b2=4;
    int p2 = cal_perimeter(l2, b2);
    cout<<"Boundry of second rectangle: "<<p2<<endl;
    
    return 0;
}

```
**⚙️ Output :**
>Perimeter of first rectangle: 26<br/>
Boundry of second rectangle: 18

## There are 4 types of functions:

* Functions with arguments and return values. 
* Functions with arguments and without return values.
* Functions without arguments and with return values. 
* Functions without arguments and without return values.

<br/>

**Functions with arguments and return values.**

**💻 Example 4 :**

```cpp
#include <iostream>
using namespace std;

int cal_square(int num)
{
    int sq = num * num;
    return sq;
}

int main(){
    
    int n;
    cout<<"Enter number: ";
    cin>>n;
    
    int ans = cal_square(n);
    
    cout<<"Ans: "<<ans;
    
    return 0;
}
```
**⚙️ Output :**
>Enter number: 8<br/>
Ans: 64

<br/>

**Functions with arguments and without return values.**

**💻 Example 5 :**

```cpp
#include <iostream>
using namespace std;

void cal_square(int num)
{
    int sq = num * num;
    cout<<"Ans: "<<sq;
}

int main(){
    
    int n;
    cout<<"Enter number: ";
    cin>>n;
    
    cal_square(n);
    
    return 0;
}
```
**⚙️ Output :**
>Enter number: 5<br/>
Ans: 25

<br/>

**Functions without arguments and with return values.**

**💻 Example 6 :**

```cpp
#include <iostream>
using namespace std;

int cal_square()
{
    int num;
    cout<<"Enter number: ";
    cin>>num;
    
    int sq = num * num;
    return sq;
}

int main(){
    
   int ans = cal_square();
   
   cout<<"Ans: "<<ans;
    
    return 0;
}
```
**⚙️ Output :**
>Enter number: 5
Ans: 25

<br/>

**Functions without arguments and without return values.**

**💻 Example 7 :**

```cpp
#include <iostream>
using namespace std;

int cal_square()
{
    int num;
    cout<<"Enter number: ";
    cin>>num;
    
    int sq = num * num;
    
    cout<<"Ans: "<<sq<<endl;
}

int main(){
    
   cal_square();
  
    return 0;
}
```
**⚙️ Output :**
>Enter number: 8<br/>
Ans: 64