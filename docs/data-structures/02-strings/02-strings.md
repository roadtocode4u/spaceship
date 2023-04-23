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

## String Length

String length is to the number of characters in a string. It's the count of individual characters present in a string, including spaces, numbers, symbols, and letters. For instance, if we have a string `"Hello World!"`, its length would be `12` since there are `12` characters in the string, including space between `"Hello"` and `"World"`.

**Code :**

```cpp
#include <iostream>

using namespace std;

int main()
{
    string text = "Pinki";
    int i = 0;
    
    while(text[i]!='\0')
    {
        i++;
    }
    cout<<"Length :"<<i;
    
    return 0;
}
```

**Output :**

Length : 5

In the above program, a string variable named `text` is declared and initialized with the value `"Pinki"`. Then, an integer variable `i` is initialized to `0`.

The while loop checks each character in the string by accessing it with the help of index variable `i` and continues until it reaches the null character `\0`, which is used to indicate the end of the string. Inside the while loop, the index variable `i` is incremented by `1` for each character.

Finally, after the while loop, the value of the index variable `i` represents the length of the string `text`. This value is printed on the console using the `cout` statement and the message `Length :` is added before it.

The output of this program will be `Length :5` as the length of the string `Pinki` is `5`.


**Code :**

```cpp
#include <iostream>

using namespace std;

int main()
{
  string text = "Pinki Hole";
  
  cout<<"Length: "<<text.length();
  
    return 0;
}
```

**Output :**

Length: 10
In the above Program, A string variable named `text` is declared and initialized with the value `"Pinki Hole"`.

The `length()` method of the string class is used to find the length of the string `text`. This method returns the number of characters in the string, excluding the null character `\0`.

Finally, the length of the string `text` is printed on the console using the `cout` statement and the message `Length: ` is added before it.

The output of this program will be `Length: 10` as the length of the string `Pinki Hole` is `10`,which includes the space character.

**Code : **

```cpp
#include <iostream>

using namespace std;

int main()
{
 
 string text = "Pinki Hole";
 int i;
 
 for(i=0; i>-1; i++)
 {
     if(text[i]=='\0')
     {
         break;
     }
 }
 
 cout<<"Length : "<<i;
    return 0;
}
````

**Output :**

Length : 10

## String Palindrom 

A string palindrome refers to a sequence of characters that reads the same way from both ends. In simple words, a string is said to be a palindrome if it remains the same even if its characters are read from left to right or right to left. For example, the strings `racecar` and `level` are palindromes because they read the same way from both directions.

**Code :** 

```cpp
#include <iostream>

using namespace std;

int main()
{
 string text;
 cout<<"Enter String: ";
 cin>>text;
 
 int length = text.length();
 
 int start = 0;
 int end = length-1;
 
 int flag = -1;
 
 while(start<end)
 {
     if(text[start]!=text[end])
     {
         flag = 0;
         cout<<"NOT Palindrome";
         break;
     }
     start++;
     end--;
 }
 if(flag==-1)
 {
     cout<<"Palindrome";
     
 }
    return 0;
}
```

**Output :**

Enter String: <br/> 
madam <br/>
Palindrome

The above program checks whether a given string is a palindrome or not. The program prompts the user to input a string, then finds its length using the `length()` method of the string class.

Two integer variables `start` and `end` are initialized, where `start` represents the index of the first character of the string, and `end` represents the index of the last character of the string.

A flag variable `flag` is initialized to `-1`, which will be used to indicate whether the string is a `palindrome or not`. If the flag remains `-1` after the execution of the program, it means that the string is a palindrome.

A while loop is used to check the characters of the string from both ends. The loop condition is `while(start<end)`, which means that the loop continues until the `start` index is less than the `end` index.

Inside the while loop, an if statement checks whether the characters at the `start` and `end` indices of the string are `equal or not`. If they are not equal, it means that the string is not a palindrome. In this case, the `flag` is set to `0` and the message `NOT Palindrome` is printed on the console using the `cout` statement. The loop is then terminated using the `break` statement.

If the `flag` remains `-1` after the while loop, it means that the string is a `palindrome`. In this case, the message `Palindrome` is printed on the console using the `cout` statement.

The output of this program will be `Palindrome` if the input string is a palindrome, and `NOT Palindrome` if it is not a palindrome.



