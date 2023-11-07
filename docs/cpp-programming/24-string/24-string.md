---
title: Strings
description: "Strings"
hide_table_of_contents: true
---

# Strings

## char

char type of variable can store only one character at a time.

**Example 1 :**

```cpp showLineNumbers = "true"
  #include <iostream>
  using namespace std;

  int main(){

    char name = 'A';
    cout<<name;

    return 0;

  }
```

**Output :**

> A<br/>

**Explanationn :**

In a `Line no 6` we declare `name` variable, datatype is `char` and store 'A' character.<br/>
In a `Line no 7` print `name` variable using `cout`. <br/>

**Example 2 :**

```cpp showLineNumbers = "true"
  #include <iostream>
  using namespace std;

  int main(){

    char name = 'RTC';
    cout<<name;

    return 0;

  }
```

**Output :**

> C<br/>

**Explanationn :**

In a `Line no 6` we declare `name` variable, datatype is `char` and store 'RTC' character.<br/>
In a `Line no 7` print `name` variable using `cout`. <br/>

### Strings :

It is a collection of characters .

'\0' = Null character (end of the string).

**Example 3 :**

```cpp showLineNumbers = "true"
 #include <iostream>
 using namespace std;

 int main() {
    char arr[4] = {'R', 'T', 'C', '\0'};
    cout<<arr;

    return 0;
 }
```

**Output :**

> RTC

**Explanation :**

In a `Line no 5` we declare array that name has `arr`, size of array is `4`, and stored multiple variable {'R', 'T', 'C', '\0'}.<br/>
Print array using `cout`.<br/>

**Example 4 :**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main() {

       char str[50];
       cout<<"Enter Your Name :";
       cin>>str;

       cout<<"Hello"<<str;

        return 0;
    }
```

**Output :**

> Enter Character : pinki <br/>
> Hello pinki

**Explanation :**

In a `Line no 5` we declare array that name has `str`, size of array is `50`.<br/>
Print `Enter Your Name :` using `cout`.<br/>
`str` variable using `cin`.<br/>
print `Hello` using cout and `str` varible.<br/>

**Example 5 :**

```cpp showLineNumbers = "true"
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

**Output :**

> Enter Your name: pinki <br/>
> Length :5

**Explanation :**

In a `Line no 5` we declare array that name has `str`, size of array is `50`.<br/>
Print `Enter Your Name :` using `cout`.<br/>
`str` variable using `cin`.<br/>
initialize `count` varible, store `0` value.<br/>
Start `while` loop check condition (str[count]!='\0') and increase the value of `count` by one.<br/>
Print `Length =` and `count` variable using `cout`.<br/>

**Example 6 :**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main() {

       char str[50];
       cout<<"Enter Your Name :";
       cin>>str;

       int count = 0;

       while(str[count] != '\0')
       {
          count++
       }

       cout<<"Lenght = " <<count;

       return 0;
    }
```

**Output :**

> Enter Your name: Road To Code<br  />
> Length = 10

**Explanation :**

In a `Line no 5` we declare array that name has `str`, size of array is `50`.<br/>
Print `Enter Your Name :` using `cout`.<br/>
`str` variable using `cin`.<br/>
initialize `count` varible, store `0` value.<br/>
Start `while` loop check condition (str[count]!='\0') and increase the value of `count` by one.<br/>
Print `Length =` and `count` variable using `cout`.<br/>

## ASCII

**A** = American<br/>
**S** = Standard<br/>
**C** = code<br/>
**I** = Information<br/>
**I** = Interchannge<br/>

```
A <- 65    a <- 97
B <- 66    b <- 98
C <- 67    c <- 99
  .          .
  .          .
  .          .
Z <- 90    z <- 122

```
