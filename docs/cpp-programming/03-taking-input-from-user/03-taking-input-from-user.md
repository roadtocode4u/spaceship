---
title: Taking Input From User
description: "Taking Input From User"
hide_table_of_contents: true
---

Taking input from users is important in programming because it allows your programs to interact with people and respond to their specific needs. Users can provide data or make choices that influence how your program works. In C++, you use the cin object to take input from the user.

**Importance**: Taking input from users allows your programs to be more versatile and user-friendly. It enables customization and interaction, making your software more useful and engaging.

**Object to Use**: In C++, you use the cin object to take input from the user. You can use it with the `>>` operator to read various types of data, such as numbers, text, and more, from the keyboard. For example, `cin >> variableName;` is used to store user input in a variable named variableName.

**Example :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int age;

    cout<<"Enter Age:";
    cin>>age;

    cout<<age;

    return 0;
}
```

**Output:**

> Enter Age: 8<br/>
> 8

## WAP to print sum of numbers by taking values from user

**Example:**

```cpp
#include <iostream>
using namespace std;

int main() {

    int num1;
    int num2;

    cout<<"Enter num1:";
    cin>>num1;

    cout<<"Enter num2:";
    cin>>num2;

    int sum = num1 + num2;

    cout<<"Sum ="<<sum;

    return 0;
}
```

**Output :**

> Enter num1: 5<br/>
> Enter num2: 7<br/>
> Sum = 12

## Area of Reactangle

**Example :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int l;
    int b;

    cout<<"Enter length:";
    cin>>l;

    cout<<"Enter breadth:";
    cin>>b;

    int area = l * b;

    cout<<"Area = "<<area;
    return 0;
}
```

**Output:**

> Enter length: 8<br/>
> Enter breadth: 4<br/>
> Area = 32