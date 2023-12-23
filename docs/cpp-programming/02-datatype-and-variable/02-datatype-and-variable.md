---
title: Datatype and Variable
description: "Datatype and Variable"
hide_table_of_contents: true
---

# Datatypes and Variables

## variables

- Variables: Variables are used to store data in a programming language.

## Data Types

Data types determine the kind of data that can be stored in a variable.

**Integer** : Used for whole numbers, e.g., 1, 2, 3, 4. In C/C++, it is represented as `int`.

**Floating-Point**: Used for numbers with a decimal point, e.g., 7.2, 8.4, 3.5, 4.3. In C/C++, it is represented as `float`.

**Character:** Used for single characters, e.g., 'a', 'z', 'v', 'b'. In C/C++, it is represented as `char`.

**Boolean:** Used for Storing logical values, e.g., true or false. In C/C++ it is represented as `bool`.

## How to define variable

To define a variable, you specify its data type followed by the variable name.

```c++
<datatype> <variable_name>;
int          age;
```

```c++
<char> <variable_name>;
char          gender;
```

```c++
<float> <variable_name>;
float          weight;
```

**Declaring and Assigning Values**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int age; // Declaration
    age = 22; // Assigning a value
    cout << age;
    return 0;
}
```

**Output :**

> 22

**Explanation :**

**Line 4 :** declare variable `age` <br/>
**Line 5 :** assign value `22` in `age` variable. <br/>
**Line 5 :** print vairble `age` using `cout` object. <br/>

**Addition of Two Number :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {
    int val1 = 10; // Declaration and assignment
    int val2 = 20; // Declaration and assignment
    int sum = val1 + val2;
    cout << sum;
    return 0;
}
```

**⚙️ Output :**

> 30

**Explanation :**

**Line 4 :** declare variable `val1` and assign value `10`. <br/>
**Line 5 :** declare variable `val2` and assign value `20`. <br/>
**Line 6 :** declare `sum` variable and assign the addition of `val1 + val2` .<br/>
**Line 7 :** print `sum` variable by using `cout` object.<br/>

## Rules to declared Variable

1. A variable name must start with a letter `a-z` or `A-Z` or the underscore `_` character.
2. A variable name cannot start with a number.
3. Variable names are case-sensitive, which means name and Name are considered different variables.
4. A variable name can not used reserved `keyword`
5. A variable name can include `a-z`,`A-z`, `0-9`, and `_`

**Example 1 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int age = 20;

    cout<<"Age =";

    cout<<age;

    return 0;
}
```

**Output :**

> Age = 20

**Explanation :**

**Line 5 :** declare `age` variable assign value to the `age ` variable is `20`. <br/>
**LIne 7 :** print the `"Age = "` string. <br/>
**Line 9 :** print `age ` variable using `cout` object. <br/>

**Example 2 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int age = 22;

    cout<<"My age is "<<age;

    return 0;
}
```

**Output :**

> my age is 22

**Line 5 :** declare `age` and assign value `22`. <br/>
**Line 7 :** print `My age is` string and `age` variable using `cout` object.<br/>

**Example 3 :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

    int age = 20;
    int weight = 50;

    cout<<"My age is"<<age<<"& Weight is"<<weight;

    return 0;
}
```

** Output :**

> My age is 20 & weight is 50

**Explanation :**

**Line 5 :** Declare `age ` variable and assign value `20`. <br/>
**Line 6 :** Declare `weight` variable and assign value `50`. <br/>
**Line 7 :** print `age ` and `weight` using `cout` object.
