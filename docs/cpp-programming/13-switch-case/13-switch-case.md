# Switch Case

## 💕Switch case :

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

**💻 Example 1️⃣ :**

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

**⚙️ Output :**

> Enter Value: 1<br/>
> One

**💻 Example 2️⃣ :**

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

**⚙️ Output :**

> Enter Value: 3<br/>
> Three

**💻 Example 3️⃣ :**

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

**⚙️ Output :**

> Enter Value: 5<br/>
> Not Matched

**💻 Example 4️⃣ :**

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

**⚙️ Output :**

> Enter Two Values: 6,5<br/>
> Which operations do you want to perform :(+, -, /, \*): - <br/>
> a-b = 1

**💻 Example 5️⃣ :**

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

**⚙️ Output :**

> Enter Two Values: 9 9<br/>
> Which operations do you want to perform :(+, -, /, \*): # <br/>
> Operation is not valid
