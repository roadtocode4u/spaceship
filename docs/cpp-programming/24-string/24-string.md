---
title: Strings
description: "Strings"
hide_table_of_contents: true
---
# Strings

### Strings : 
It is a collection of characters .

```cpp
'A', 'B', '#' => characters

"Avishkar", " Amit", "Anand","Shweta" => string

char a[]="RTC";

                        null charecter
   0    1    2     3      |
a['R']['T']['C']['\0']<---|
```

```cpp
char(character) ---> 1 byte
char a = 'A';

int mark1 = 10;

int mark2 = 20;

int mark3 = 30;

int marks[3];             
                        
       0   1   2       
marks[10][20][30]
```

```cpp
char n1 = 's';

char n2 = 'u';

char n3 = 'r';

char n4 = 'a';

char n5 = 'j';

char name[5];

 0  1  2  3  4
[s][u][r][a][j]
```

**💻Example 1️:**

```cpp
    #include <iostream>
    using namespace std;
    int main() {

       char name[]="Road To Code";
       int i=0;
       while(true)
       {
        cout<<name[i];
        if(name[i]=='\0')
        {
           break;
        }
        i++;
       }
        return 0;
    }
```
**⚙️ Output :**
>Road To Code.

**💻Example 2:**

```cpp
    #include <iostream>
    using namespace std;
    int main() {

       char name[50];
       cout<<"Enter name: ";
       cin>>name;

       cout<<"Hello "<<name;

       return 0;
    }
```

**⚙️ Output :**
>Enter name: Road To Code<br  />
Hello Road

**💻Example 3:**
```cpp
    #include <iostream>
    using namespace std;
    int main() {

       char name[50];
       cout<<"Enter name: ";
       cin.get(name,50);

       cout<<"Hello "<<name;

       return 0;
    }
```
**⚙️ Output :**
>Enter name: Road To Code<br  />
Hello Road To Code

#### Features:
1. No fixed length
2. It will inc/dec as per requirement.

**💻Example 4:**
```cpp
 #include<iostream>
using namespace std;

int main()
{
    char str[50];
    cout<<"Enter Your name: ";
    cin>>str;
    
    int count = 0;
    
    while(str[count]!='\0')
    {
        count++;
    }
    cout<<"Length :"<<count;
    return 0;
}
```
**⚙️ Output :**
>Enter Your name: pinki <br/>
Length :5