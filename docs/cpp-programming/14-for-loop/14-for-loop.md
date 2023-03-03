# For Loop

````cpp

 ### Loops :
  Loops in a programming is used to iterate the statements or part of the program several times.<br/>
  Types of Loops:<br/>
  1. For
  2. while
  3. do-while

syntax:

 ```cpp
 1. for(init; condition; inc/dec)
 {// loop body start

 } // loop body ends
 ex 1:
 int i;
 for(i=0; i<5; i++)
 {
   cout<<"Hello"<<endl;
 }

````

```cpp
Explanation:

ex:
int i;
 for(i=0; i<5; i++)
 {
   cout<<"Hello"<<endl;
 }

 i=0    0<5   true
 i++
 i=1    1<5   true
 i++
 i=2    2<5   true
 i++
 i=3    3<5   true
 i++
 i=4    4<5   true
 i++
 i=5    5<5   false

```

**💻 Example 1️⃣ :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int i;
    for(i=0;i<5; i++)
    {
      cout<<"Hello"<<endl;
    }
     return 0;
}
```

**⚙️ Output :**

> Hello<br/>
> Hello<br/>
> Hello<br/>
> Hello<br/>
> Hello<br/>

```cpp
Explanation:

ex 2:
int i;
 for(i=4;i>0; i--)
    {
      cout<<"Hello"<<endl;
    }

 i=4    4>0   true
 i--
 i=3    3>0   true
 i--
 i=2    2>0   true
 i--
 i=1    1>0   true
 i--
 i=0    0>0   false
```

**💻 Example 2️⃣ : Reverse**

```cpp
#include <iostream>
using namespace std;

int main() {

    int i;
    for(i=4;i>0; i--)
    {
      cout<<"Hello"<<endl;
    }
     return 0;
}
```

**⚙️ Output :**

> Hello<br/>
> Hello<br/>
> Hello<br/>
> Hello<br/>

**💻 Example 3️⃣ : Reverse**

```cpp
#include <iostream>
using namespace std;

int main() {

    int i;
    for(i=4;i>0; i--)
    {
      cout<<i<<endl;
    }
     return 0;
}
```

**⚙️ Output :**

> 4<br/>
> 3<br/>
> 2<br/>
> 1<br/>

### Infinite Loop:

1. loops condition is always true .
2. it always runs because stoppping condition never occurs .

**💻 Example 1️⃣ :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int i;
    for(i=1;i>0; i++)
    {
      cout<<i<<endl;
    }
     return 0;
}
```

**⚙️ Output :**

> 1<br/>
> 2<br/>
> 3<br/>
> .<br/>
> .<br/>
> .<br/>
> .<br/>
> .<br/>
> infinite

**💻 Example 2️⃣ :**

```cpp
#include <iostream>
using namespace std;

int main() {

    for(i=0;i<=10; i++)
    {
      cout<<i<<"=> Hello"<<endl;
    }
     return 0;
}
```

**⚙️ Output :**

> 0=> Hello<br/>
> 1=> Hello<br/>
> 2=> Hello<br/>
> 3=> Hello<br/>
> 4=> Hello<br/>
> 5=> Hello<br/>
> 6=> Hello<br/>
> 7=> Hello<br/>
> 8=> Hello<br/>
> 9=> Hello<br/>
> 10=> Hello<br/>

**💻 Example 3️⃣ :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter value pf n: ";
    cin>>n;
    for(i=0;i<=10; i++)
    {
      cout<<i<<"=> Hello"<<endl;
    }
     return 0;
}
```

**⚙️ Output :**

> Enter value of n: 12<br/>
> 1=> Hello<br/>
> 2=> Hello<br/>
> .<br/>
> .<br/>
> .<br/>
> .<br/>
> .<br/>
> 12=> Hello

**💻 Example 4️⃣ : WAP to print all even numbers upto n**

```cpp
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter value pf n: ";
    cin>>n;
    for(i=2;i<=n; i=i+2)
    {
      cout<<i<<<<endl;
    }
     return 0;
}
```

**⚙️ Output :**

> Enter value of n: 20<br/>
> 2<br/>
> 4<br/>
> 6<br/>
> 8<br/>
> 10<br/>
> .<br/>
> .<br/>
> .<br/>
> 20=> Hello

**💻 Example 5️⃣ : WAP to print all even numbers upto n**

```cpp
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter value pf n: ";
    cin>>n;
    for(i=2;i<=n; i=i+2)
    {
        if(i%2 == 0)
        {
           cout<<i<<<<endl;
        }
    }
     return 0;
}
```

**⚙️ Output :**

> Enter value of n: 20<br/>
> 2<br/>
> 4<br/>
> 6<br/>
> 8<br/>
> 10<br/>
> .<br/>
> .<br/>
> .<br/>
> 20=> Hello

```cpp
Explanation:

ex of WAP to print sum of n numbers ?:
int sum =0;
for(i=1;i<=5; i++)
    {
        sum = sum + 1;
    }
    cout<<"Sum : "<<sum;

 i=1   1<5   true
 sum = 0+1
 i=2   2<5   true
 sum = 1+2
 i=3   3<5   true
 sum = 3+3
```

**💻 Example 6️⃣ :WAP to print sum of n numbers ?**

```cpp
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter value pf n: ";
    cin>>n;

    int sum =0;
    for(i=1;i<=n; i++)
    {
        sum = sum + 1;
    }
    cout<<"Sum : "<<sum;
     return 0;
}
```

**⚙️ Output :**

> Enter value of n: 5<br/>
> Sum :15
