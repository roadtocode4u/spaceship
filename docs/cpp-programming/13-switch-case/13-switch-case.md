# Switch Case

## ðSwitch case  : 
```cpp
1 ----> "One"

2 ----> "Two"

3 ----> "Three"

syntax of switch case : 
switch(value)
{
    case 1 : 
    // case 1 operations
    break;

    case 2 : 
    // case 2 operations
    break;

    case 3 : 
    // case 3 operations
    break;
}
```
**ð» Example 1ï¸â£ :**
```cpp
#include <iostream>
using namespace std;

int main() {

    int value;
    cout<<"Enter Value:";
    cin>>value;

    switch(value)
    {
        case 1 : 
        cout<<"One";
        break;

        case 2 : 
        cout<<"Two";
        break;

        case 3 : 
        cout<<"Three";
        break;
    }
   
     return 0;
}
```
**âï¸ Output :**
>Enter Value: 1<br/>
One

**ð» Example 2ï¸â£ :**
```cpp
#include <iostream>
using namespace std;

int main() {

    int value;
    cout<<"Enter Value:";
    cin>>value;

    switch(value)
    {
        case 1 : 
        cout<<"One";
        break;

        case 2 : 
        cout<<"Two";
        break;

        case 3 : 
        cout<<"Three";
        break;
    }
   
     return 0;
}
```
**âï¸ Output :**
>Enter Value: 3<br/>
Three

**ð» Example 3ï¸â£ :**
```cpp
#include <iostream>
using namespace std;

int main() {

    int value;
    cout<<"Enter Value:";
    cin>>value;

    switch(value)
    {
        case 1 : 
        cout<<"One";
        break;

        case 2 : 
        cout<<"Two";
        break;

        case 3 : 
        cout<<"Three";
        break;

        default:
        cout<<"Not Matched";
    }
   
     return 0;
}
```
**âï¸ Output :**
>Enter Value: 5<br/>
Not Matched

**ð» Example 4ï¸â£ :**
```cpp
#include <iostream>
using namespace std;

int main() {

    int a,b;
    cout<<"Enter Two Values:";
    cin>>a>>b;

    char op;

    cout<<"Which operations do you want to perform:(+, -, /, *): ";
    cin>>op;

    switch(op)
    {
        case '-':
        cout<<"a-b = "<<(a-b);
        break;

        case '+':
        cout<<"a+b = "<<(a+b);
        break;

        case '*':
        cout<<"a*b = "<<(a*b);
        break;

        case '/':
        cout<<"a/b = "<<(a/b);
        break;

        default : 
        cout<<"Operation is not valid";
    }  
     return 0;
}
```
**âï¸ Output :**
>Enter Two Values: 6,5<br/>
Which operations do you want to perform :(+, -, /, *): - <br/>
a-b = 1


**ð» Example 5ï¸â£ :**
```cpp
#include <iostream>
using namespace std;

int main() {

    int a,b;
    cout<<"Enter Two Values:";
    cin>>a>>b;

    char op;

    cout<<"Which operations do you want to perform:(+, -, /, *): ";
    cin>>op;

    switch(op)
    {
        case "-";
        cout<<"a-b = "<<(a-b);
        break;

        case "+";
        cout<<"a+b = "<<(a+b);
        break;

        case "*";
        cout<<"a*b = "<<(a*b);
        break;

        case "/";
        cout<<"a/b = "<<(a/b);
        break;

        default : 
        cout<<"Operation is not valid";
    }  
     return 0;
}
```
**âï¸ Output :**
>Enter Two Values: 9 9<br/>
Which operations do you want to perform :(+, -, /, *): #  <br/>
Operation is not valid
