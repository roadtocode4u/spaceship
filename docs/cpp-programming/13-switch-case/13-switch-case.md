---
title: Switch case
description: "Switch case"
hide_table_of_contents: true
---

# Switch Case

We use `switch case` when we have to check multiple conditions. It is similar to `if else` but it is more efficient than `if else`. It provided direct jump to the case statement

```cpp

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

** Example 1️⃣ :**

```cpp showLineNumbers = "true"
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

** Output :**

> Enter Value: 1<br/>
> One

**Explanation :**

**Line 5 :** Declare variable which name has `value`. <br/>
**Line 6 :** `Enter value ` from user. <br/>
**Line 7 :** store value using `cin` object.<br/>
**Line 9 :** Use `switch` keyword to check multiple condition. <br/>
**Line 10 :** `{` open the body of `switch case`.<br/>
**Line 11 :** `case 1 :` and write the statement of case 1 and break the case 1 using `break;` keyword.<br/>
**Line 15 :** `case 2 :` and write the statement of case 2 and break the case 2 using `break;` keyword.<br/>
**Line 19 :** `case 3 :` and write the statement of case 3 and break the case 3 using `break;` keyword.<br/>
**Line 22 :** `}` close the body of `switch case`.<br/>

# Switch case without using break statement

** Example 2️⃣ :**

```cpp showLineNumbers = "true"
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

        case 2 :
        cout<<"Two";

        case 3 :
        cout<<"Three";
    }

     return 0;
}
```

** Output :**

> Enter Value: 2<br/>
> TwoThree

**Explanation :**

If there is no `break` statement then the cases after the matched case, all case are exexuted other than default case.

** Example 3️⃣ :**

```cpp showLineNumbers = "true"
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

** Output :**

> Enter Value: 5<br/>
> Not Matched

**explanation :**

The condition inside the `switch(value)` is exexuted.<br/>
Then , it is matched with one of the case values, we execute that particular set of statements with it has matched.<br/>
After that case, we break out of switch.<br/>
If it does not match, we execute the default condition and come out of switch.

** Example 4️⃣ :**

```cpp showLineNumbers = "true"
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

** Output :**

> Enter Two Values: 6,5<br/>
> Which operations do you want to perform :(+, -, /, \*): - <br/>
> a-b = 1

\*\*Explanation :

**Line : 5** declare 2 variable which has `a`and `b`.<br/>
**Line : 6** `enter two values ` from user.<br/>
**Line : 8** declare `op` variable.<br/>
**Line : 10** `Which operations do you want to perform:(+, -, /, *):` from user. <br/>
The condition inside the `switch(op)` is exexuted.<br/>
Then , it is matched with one of the case values, we execute that particular set of statements with it has matched.<br/>
After that case, we break out of switch.<br/>
If it does not match, we execute the default condition and come out of switch.

** Example 5️⃣ :**

```cpp showLineNumbers = "true"
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

** Output :**

> Enter Two Values: 9 9<br/>
> Which operations do you want to perform :(+, -, /, \*): # <br/>
> Operation is not valid

\*\*Explanation :

**Line : 5** declare 2 variable which has `a`and `b`.<br/>
**Line : 6** `enter two values ` from user.<br/>
**Line : 8** declare `op` variable.<br/>
**Line : 10** `Which operations do you want to perform:(+, -, /, *):` from user. <br/>
The condition inside the `switch(op)` is exexuted.<br/>
Then , it is matched with one of the case values, we execute that particular set of statements with it has matched.<br/>
After that case, we break out of switch.<br/>
If it does not match, we execute the default condition and come out of switch.
