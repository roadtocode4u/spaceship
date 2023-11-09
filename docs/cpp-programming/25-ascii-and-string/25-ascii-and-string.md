---
title: Ascii-and-string
description: "Ascii-and-string"
hide_table_of_contents: true
---

## ASCII and String Operations

ASCII (American Standard Code for Information Interchange)

> ASCII Value of a Character

```cpp
A -> 65
B -> 66
C -> 67
   .
   .
   .
Z -> 90


a -> 97
b -> 98
c -> 99
   .
   .
   .
z -> 122
```

**Example : 1**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    char alpha = 'A';

    cout<<"Char : "<<alpha;

    return 0;
}
```

**Output :**

> Char: A <br/>

**Explanation :**

In a `line no 5` we declare one variable that name has `alpha` and store `A` character, datatype is `char`.<br/>
print `Char : ` and `alpha` variable using `cout`.<br/>

**Example : 2**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    char alpha = 'A';
    int val = alpha;

    cout<<"Char: "<<alpha<<endl;
    cout<<"ASCII :"<<val;

    return 0;
}

```

**Output :**

> Char: A <br/>
> ASCII :65

**Explanation :**

In a `line no 5` we declare one variable that name has `alpha` and store `A` character, datatype is `char`.<br/>
In a `Line no 6` we declare `int` variable that name has `val`, store value of `alpha` variable.<br/>
print `Char : ` and `alpha` variable using `cout`, `endl` for new line.<br/>
print `ASCII : ` and `val` variable using `cout`.

**Example : 3**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    char alpha = 'b';
    int val = alpha;

    cout<<"Char: "<<alpha<<endl;
    cout<<"ASCII :"<<val;

    return 0;
}

```

**Output :**

> Char: b <br/>
> ASCII :98

**Explanation :**

In a `line no 5` we declare one variable that name has `alpha` and store `b` character, datatype is `char`.<br/>
In a `Line no 6` we declare `int` variable that name has `val`, store value of `alpha` variable.<br/>
print `Char : ` and `alpha` variable using `cout`, `endl` for new line.<br/>
print `ASCII : ` and `val` variable using `cout`.

**Example : 4**

```cpp showLineNumbers = "true"
   #include <iostream>
using namespace std;

int main() {

int ascii = 99;

char alpha = ascii;

cout<<"ASCII: "<<ascii<<endl;
cout<<"Char: "<<alpha;

    return 0;
}
```

**Output :**

> ASCII: 99<br  />
> Char: c

**Explanation :**

In a `line no 5` we declare one variable that name has `ascii` and store `99` character, datatype is `int`.<br/>
In a `line no 7` we declare `char` variable and store value of `ascii` variable.<br/>
print `ASCII : ` and `ascii` variable using `cout`, `endl` for new line.<br/>
print `Char : ` and `alpha` variable using `cout`.

**How to convert capital letter into small.**

```cpp
capital -> small
A -> a
cap ascii + 32 => small
65 + 32 => 97
97 <= a
```

**Example : 5**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    char capital;
    cout<<"Enter Capital: ";
    cin>>capital;

    char small = capital + 32;
    cout<<small;

    return 0;
}
```

**Output :**

> Enter Capital : B<br/>
> b

**Explanation :**

In a `Line no 5` we declare one variable that name has `capital`, datatype is `char`.<br/>
Print `Enter Capital: ` from user using `cout`.<br/>
store value of capatial using `cin`<br/>
We declare `small` variable and store `capatial + 32` <br/>
print `small` variable using `cout`<br/>

**Example : 6**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
     string name;
     cout<<"Enter Capital Name: "<<endl;
     cin>>name;

     int i = 0;

     while(name[i]!='\0')
     {
        name[i] = name[i]+32;
        i++;
     }

     cout<<"Small Letter is :"<<name;

}
```

**Output :**

> Enter Capital Name : ACHAL<br/>
> Small Letter is : achal

**Explanation :**

In a `Line no 5` we declare one variable that name has `name`, datatype is `string`.<br/>
print "Enter Capital Name: "from user using `cout`.<br/>
initialised `i` variablle store value `0`, datatype is `int`.<br/>
Start `while` loop and check condition (name[i]!='\0').<br/>
we declare array `name[i]` and store value of `name[i]+32 `.<br/>
Print `Small Letter is :` and `name` variable using `cout`.<br/>

**Example : 7**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
     string name;
     cout"<<Enter Capital Name: "<<endl;

     int i = 0;

     while(name[i]!='\0')
     {
        name[i] = name[i]+32;
        i++;
     }

     cout<<"Small Letter is :"<<name;

}
```

**Output :**

> Enter Capital Name : HELLO<br/>
> Small Letter is : hello

**Explanation :**

In a `Line no 5` we declare one variable that name has `name`, datatype is `string`.<br/>
print "Enter Capital Name: "from user using `cout`.<br/>
initialised `i` variablle store value `0`, datatype is `int`.<br/>
Start `while` loop and check condition (name[i]!='\0').<br/>
we declare array `name[i]` and store value of `name[i]+32 `.<br/>
Print `Small Letter is :` and `name` variable using `cout`.<br/>

**WAP to convert small letter into capital.**

```cpp
small -> capital
a -> A
small-ascii - 32 => cap ascii
100 - 32 => 97
```

**Example : 8**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    char small;
    cout<<"Enter Small: ";
    cin>>small;

    char capital = small - 32;
    cout<<capital;

    return 0;
}
```

**Output :**

> Enter Capital : a<br/>
> A

**Explanation :**

In a `Line no 5` we declare one variable that name has `small`, datatype is `char`.<br/>
Print `Enter small: ` from user using `cout`.<br/>
store value of small using `cin`<br/>
We declare `capatial` variable and store `small - 32` <br/>
print `capital` variable using `cout`<br/>

**Example : 9**

```cpp showLineNumbers = "true"
int main() {

    string name;
    cout<<"Enter Small Name: ";
    cin>>name;

    int i=0;

    while(name[i]!='\0')
    {
        name[i] = name[i]-32;
        i++;
    }

    cout<<"Capital Letter is: "<<name;
    return 0;
}
```

**Output :**

> Enter small name: hello<br  />
> Capital Letter is: HELLO

**Explanation :**

In a `Line no 5` we declare one variable that name has `name`, datatype is `string`.<br/>
print "Enter Small Name: "from user using `cout`.<br/>
initialised `i` variablle store value `0`, datatype is `int`.<br/>
Start `while` loop and check condition (name[i]!='\0').<br/>
we declare array `name[i]` and store value of `name[i]-32 `.<br/>
Print `Small Letter is :` and `name` variable using `cout`.<br/>
