---
title: "Strings"
description: "Strings"
hide_table_of_contents: true
---

## What is a String?

A string is a collection of characters, such as letters, numbers, and symbols, that are used to represent text. Strings are typically enclosed in quotation marks `("" or '')` to indicate that they are not to be interpreted as program code, but rather as a sequence of characters.

Here are some examples of strings:

`"Hello, world!"` is a string that represents a greeting. <br/>
`"12345"` is a string that represents a sequence of digits. <br/>
`"I love programming"` is a string that represents a statement of affection for coding.

## Reversing a String

Reversing a string means changing the order of the characters in a string so that the last character becomes the first, the second last character becomes the second, and so on. For example, if we have a string `hello`, reversing it would result in the string `olleh`.

**Code :**

```cpp
#include <iostream>
using namespace std;

int main() {
    string name = "Road To Code";
    
    cout<<"Before Reverse : "<<name<<endl;
    
    int start = 0; 
    int end = 11;
    
    while(start<end)
    {
        int temp = name[start];
        name[start] = name[end];
        name[end] = temp;
        
        start++;
        end--;
    }
    
    cout<<"After Reverse : "<<name<<endl;
  
    return 0;
}
```

**Output :**

Before Reverse : Road To Code <br/>
After Reverse : edoC oT daoR

In the above program, A string variable named `name` is defined and initialized to `"Road To Code"`. The program then prints the original string to the console using the `cout` statement.

Next, two integer variables `start` and `end` are defined and initialized to `0` and `11` respectively. These variables are used to keep track of the start and end positions of the string while reversing it.

After that, a while loop is used to iterate over the string until the `start position is less than the end position`. Inside the loop, the characters at the start and end positions are swapped using a temporary variable `temp`. Then, the start and end positions are `incremented` and `decremented` respectively to move towards the center of the string.

Finally, the program prints the reversed string to the console using the `cout` statement.

Program Output which shows the original string `"Road To Code"` and its reversed form `"edoC oT daoR"`.

**But In the above program we directly revered main string so If you do not want to reverse the main string directly, you can create a new strig and store the characters of name string to it. Here is an example program:**

**Code :**

```cpp
#include <iostream>
using namespace std;

int main() {
    string name = "Road To Code";
    
    cout<<"Before Reverse : "<<name<<endl;
    
    string originalString = "Road To Code";
    
    int start = 0; 
    int end = 11;
    
    while(start<end)
    {
        int temp = name[start];
        name[start] = name[end];
        name[end] = temp;
        
        start++;
        end--;
    }

    cout<<"After Reverse : "<<name<<endl;
    
    cout<<"original String : "<<originalString<<endl;
  
    return 0;
}
```

**Output :**

Before Reverse : Road To Code <br/>
After Reverse : edoC oT daoR <br/>
original String : Road To Code

Now in the above program we declares another string variable named `originalString` and initializes it with the same value as `name`. This is just to demonstrate that the original string is not modified. Means our original string are safely store in `originalString` variable.