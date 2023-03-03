# Break and Continue keywords

```cpp
break => loop terminates permantly

continue => It will skip loop only for the currect instance
```

**💻 Example 1️⃣ :**

```cpp
#include <iostream>
using namespace std;

int main() {

    for(;;)
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
> ....

**💻 Example 2️⃣ :**

```cpp
#include <iostream>
using namespace std;

int main() {

    for(int i=1;i<=100; i++)
    {
      cout<<i<<"=> Xerox Done..."<<endl;
    }
     return 0;
}
```

**⚙️ Output :**

> 1=> Xerox Done...<br/>

       2=> Xerox Done...
        <br/>
       3=> Xerox Done...
       <br/>
        4=> Xerox Done...
        .<br/>
        .<br/>
       .<br/>
        .<br/>
       100=> Xerox Done...
       <br/>

**💻 Example 3️⃣ :**

```cpp
#include <iostream>
using namespace std;

int main() {

    for(int i=1;i<=100; i++)
    {
        if(i==25)
        {
            break;
        }
       cout<<i<<"=> Xerox Done..."<<endl;
    }
     return 0;
}
```

**⚙️ Output :**

> 1=> Xerox Done...
> <br/>
> 2=> Xerox Done...
> <br/>
> 3=> Xerox Done...
> <br/>
> 4=> Xerox Done...
> <br/>
> .<br/>
> .<br/>
> .<br/>
> .<br/>
> 24=> Xerox Done...

```cpp
❤️ Continue : It will skip loop only for the currect instance .
syntax:

for()
{
    //statement

    continue

    //statement
}
```

**💻 Example 4️⃣ :**

```cpp
#include <iostream>
using namespace std;

int main() {

    for(int i=1;i<=100; i++)
    {
        if(i==25)
        {
            continue;
        }
      cout<<"Xerox Done..."<<endl;
    }
     return 0;
}
```

**⚙️ Output :**

> 1=> Xerox Done...
> <br/>
> 2=> Xerox Done...
> <br/>
> 3=> Xerox Done...
> <br/>
> 4=> Xerox Done...
> <br/>
> .<br/>
> .<br/>
> .<br/>
> .<br/>
> 24=> Xerox Done...<br/>
> 26=> Xerox Done...<br/>
> 27=> Xerox Done...<br/>
> .<br/>
> .<br/>
> .<br/>
> .<br/>
> 100=> Xerox Done...

```cpp
 Factorial :

5! => 5*4*3*2*1 = 120

4! => 4*3*2*1 = 24

3! => 3*2*1 => 6

----------------

fact = 1; // 1*100*0=>0

sum = 0; // 100+0=>100
```

**💻 Example 5️⃣ : WAP to calculate factorial of n number**

```cpp
#include <iostream>
using namespace std;

int main() {

    int fact = 1;
    int n;

    cout<<"Enter n to calculate factorial: ";
    cin>>n;

    for(int i=1;i<=n; i++)
    {
        fact = fact * i;
    }

     cout<<"Factorial is: "<<fact;
     return 0;
}
```

**⚙️ Output :**

> Enter n calculate factorial: 3<br/>
> Factorial is: 6

```cpp
explanation :

for(i=1;i<=4; i++)
    {
        fact = fact * i;
    }

    i=1   1<=4   true
    i=2   2<=4   true
    i=3   3<=4   true
    i=4   4<=4   true
```

**💻 Example 6️⃣ :WAP number is prime or composite**

```cpp
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter n: ";
    cin>>n;
    for(int i=2;i<n; i++)
    {
        if(n%i==0)
        {
            cout<<"Composite Number Because it is divisible by"<<i<<endl;
        }
    }
     return 0;
}
```

**⚙️ Output :**

> Enter n : 8<br/>
> Composite Number Because it is divisible by 2<br/>
> Composite Number Because it is divisible by 4<br/>

**💻 Example 7️⃣ :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter n: ";
    cin>>n;
    int flag = -1;

    for(int i=2;i<n; i++)
    {
        if(n%i==0)
        {
           flag = i;
           break;
        }
    }
        if(flag == -1)
        {
            cout<<"Number is prime";
        }
        else
        {
             cout<<"Number is composite";
        }
     return 0;
 }
```

**⚙️ Output :**

> Enter n : 8<br/>
> Number is composite

**💻 Example 7️⃣ :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter n: ";
    cin>>n;

    int flag = -1;
    for(i=2;i<n; i++)
    {
        if(n%i==0)
        {
           flag = i;
           break;
        }
    }
     if(flag == -1)
        {
            cout<<"Number is Composite";
        }
        else
        {
            cout<<"Number is prime";
        }
     return 0;
}
```

**⚙️ Output :**

> Enter n : 11<br/>
> Number is prime

## 🏠 HomeWork

1️⃣

## 🔗 Some Useful Links

## 📖 References
