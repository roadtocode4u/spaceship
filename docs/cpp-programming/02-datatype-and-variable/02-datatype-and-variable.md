# Datatypes and Variables

## variables 

- Variables: Variables are used to store data in a programming language.

## Data Types 

Data types determine the kind of data that can be stored in a variable.

**Integer** : Used for whole numbers, e.g., 1, 2, 3, 4. In C/C++, it is represented as `int`.

**Floating-Point**: Used for numbers with a decimal point, e.g., 7.2, 8.4, 3.5, 4.3. In C/C++, it is represented as `float`.

**Character:** Used for single characters, e.g., 'a', 'z', 'v', 'b'. In C/C++, it is represented as `char`.

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

```cpp
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

**Addition of Two Number :**

```cpp
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

## Rules to declared Variable

1. A variable name must start with a letter `a-z` or `A-Z` or the underscore `_` character.
2. A variable name cannot start with a number.
3. Variable names are case-sensitive, which means name and Name are considered different variables.
4. A variable name can not used reserved `keyword`
5. A variable name can include `a-z`,`A-z`, `0-9`, and `_` 


**Example 1 :**

```cpp
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

**Example 2 :**

```cpp
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

**Example 3 :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int age = 20;
    int weight = 50;

    cout<<"My age is"<<age<<"& Weight is"<<weight;

    return 0;
}
```

**⚙️ Output :**

> My age is 20 & weight is 50