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

**Example :**

```cpp
#include <iostream>
using namespace std;

int main() {
    char alpha = 'A';
    
    int val = alpha;
    cout<<"Char: "<<alpha<<endl;
    cout<<"ASCII: "<<val;   

    return 0;
}
```
**Output :**
>Char: A<br  />
ASCII: 65

**Example :**

```cpp
   #include <iostream>
using namespace std;

int main() {
    
int ascii = 65;

char alpha = ascii;

cout<<"ASCII: "<<ascii<<endl;
cout<<"Char: "<<alpha;

    return 0;
}
```

**Output :**
>ASCII: 65<br  />
Char: A

**Example :**
```cpp
  #include <iostream>
using namespace std;

int main() {
    
int ascii = 90;

cout<<char(ascii);

    return 0;
}
```
**Output :**
>Z

**💻Example 4:**
```cpp
 #include <iostream>
using namespace std;

int main() {
    char alpha = 'B';
    
    cout<<int(alpha);
    
    return 0;
}
```
**Output :**
>66


**How to find out length of a string**

```cpp
string name = "RTC";

     0  1  2    3
     |  |  |    |
    [R][T][C]['\0']
```

**Example :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
   string name = "RTC";
   
   cout<<name.length();
   
    return 0;
}
```
**Output :**
>3

**💻Example :**
```cpp
#include <iostream>
using namespace std;

int main() 
{
    
   string name = "RTC";
   
   int count = 0;
   while(true)
   {
       cout<<name[count];
       count++;
       
       if(name[count]=='\0'){
           break;
       }
   }
   
    return 0;
}
```
**Output :**
>RTC


**How to convert capital letter into small.**

```cpp
capital -> small
A -> a
cap ascii + 32 => small
65 + 32 => 97
```

**WAP to convert small letter into capital.**

```cpp
small -> capital
a -> A
small-ascii - 32 => cap ascii
100 - 32 => 97
```

**Example :**

```cpp
int main() {
    
    string name;
    cout<<"Enter small name: ";
    cin>>name;
    
    int i=0;
    
    while(name[i]!='\0')
    {
        int curr_char = name[i];
        curr_char = curr_char - 32;
        name[i] = curr_char;
        
        i++;
    }
    
    cout<<"Capital Letter is: "<<name;
    return 0;
}
```
**⚙️ Output :**
>Enter small name: hello<br  />
Capital Letter is: HELLO

**Example :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    string name;
    cout<<"Enter small name: ";
    cin>>name;
    
    int i=0;
    
    while(name[i]!='\0')
    {
        int curr_char = name[i];
        
        if(curr_char>=97 && curr_char<=122)
        {
        curr_char = curr_char - 32;
        }
        name[i] = curr_char;
        
        i++;
    }
    
    cout<<"Capital Letter is: "<<name;
    return 0;
}
```
**Output :**
>Enter small name: abcd<br  />
Capital Letter is: ABCD

