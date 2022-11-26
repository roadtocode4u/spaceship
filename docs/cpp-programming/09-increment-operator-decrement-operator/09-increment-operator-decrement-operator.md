# Increment Operator & Decrement Operator

 ```cpp
* Inc Operator : 
1. Pre-Increment
ex : ++num; 
(first increase then use)
2. Post-Increment
ex : num++;
(first use then increase)

* Dec Operator : 
1. Pre-Decrement
ex : --num;
(first decrease then use)
2. Post-Decrement
ex : num--;
(first use then decrease)
 ```

**💻 Example 6 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int count=0;

    count = count + 1;
    cout<<count;
 
    return 0;
}
```
**⚙️ Output :**
>1

**💻 Example 7 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int count=0;

    count = count + 1;

    count = count + 1;
    cout<<count;
 
    return 0;
}
```
**⚙️ Output :**
>2

**💻 Example 8 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int count=5;

    count++;
    count++;

    cout<<count;
 
    return 0;
}
```
**⚙️ Output :**
>7

**💻 Example 9 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int count=5;

    int res = ++count;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>6

**💻 Example 10 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int count=5;

    int res = count++;

    cout<<res<<endl;
    cout<<"Count: "<<count;
 
    return 0;
}
```
**⚙️ Output :**
>5 <br/>
Count : 6
 