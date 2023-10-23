---
title: Taking Input From User
description: "Taking Input From User"
hide_table_of_contents: true
---

# Taking input from users

Taking input from users is important in programming because it allows your programs to interact with people and respond to their specific needs. Users can provide data or make choices that influence how your program works. In C++, you use the cin object to take input from the user.

**Importance**: Taking input from users allows your programs to be more versatile and user-friendly. It enables customization and interaction, making your software more useful and engaging.

**Object to Use**: In C++, you use the cin object to take input from the user. You can use it with the `>>` operator to read various types of data, such as numbers, text, and more, from the keyboard. For example, `cin >> variableName;` is used to store user input in a variable named variableName.

**Example :**

```cpp showLineNumbers = "true"
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

**Explanation :**

**Line 6 :** declare variable name `age` <br/>
**Line 8 :** `Enter Age ` from user using `cout` object. <br/>
**Line 9 :** store value of `age` using `cin` object.<br/>
**Line 11 :** print `age` variable.

## WAP to print sum of numbers by taking values from user

**Example:**

```cpp showLineNumbers = "true"
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

**Explanation :**

**Line 6 :** declare variable name `num1` <br/>
**Line 7 :** declare variable name `num2` <br/>
**Line 9 :** `Enter num1 ` from user using `cout` object. <br/>
**Line 10 :** store value of `num1` using `cin` object.<br/>
**Line 12 :** `Enter num2 ` from user using `cout` object. <br/>
**Line 13 :** store value of `num2` using `cin` object.<br/>
**Line 15 :** declare `sum` variable and assign value of `num1 + num2`<br/>
**Line 17 :** print `sum` variable .

## Area of Reactangle

**Example :**

```cpp showLineNumbers = "true"
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

**Explanation :**

**Line 6 :** declare variable name `l` <br/>
**Line 7 :** declare variable name `b` <br/>
**Line 9 :** `Enter length ` from user using `cout` object. <br/>
**Line 10 :** store value of `l` using `cin` object.<br/>
**Line 12 :** `Enter breadth` from user using `cout` object. <br/>
**Line 13 :** store value of `b` using `cin` object.<br/>
**Line 15 :** declare `area` variable and assign value of `l * b`<br/>
**Line 17 :** print `area` variable .
