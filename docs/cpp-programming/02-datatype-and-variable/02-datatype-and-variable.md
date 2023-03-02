# Datatypes and Variables

## variables & constants

- variables : it changes<br/> (in programing language data are stored in variable)<br/>

- constant : it does not change

## DataTypes : which type of data to be stored in variable

**Example 1 :** 1 , 2 , 3 , 4 ---> integer , int <br/>
**Example 2 :** 7.2 , 8.4 , 3.5 , 4.3 ---> floating , float <br/>
**Example 3 :** 'a' , 'z' , 'v' , 'b' ---> charecter , char <br/>

`char int and float` that is data types stored in variable

## How to define variable

```
<datatype> <variable_name>;
int          age;
```

```
<char> <variable_name>;
char          gender;
```

```
<float> <variable_name>;
float          weight;
```

**💻 Example 3 :**

```cpp

#include <iostream>
using namespace std;

int main() {

    int age; //declaration

    age = 22; //assign value

    cout<<age;

    return 0;
}
```

**⚙️ Output :**

> 22

**💻 Addition of Two Number :**

```cpp

#include <iostream>
using namespace std;

int main() {

    int val1 = 10; //declaration

    int val2 = 20; // declaration

    int sum = val1 + val2;

    cout<<sum;

    return 0;
}
```

**⚙️ Output :**

> 30

**💻 program to illustrate used of \n (new line):**

```c

#include <iostream>

int main() {

    std::cout << "Hello World";

    std::cout << "\n Hello ABC!";

    return 0;
}
```

**⚙️ Output :**

> Hello World<br/>
> Hello ABC!

## Rules to declared Variable

1. Variable name should be meaningful
2. Variable name may contain (a-z,A-Z,0-9,\_)
3. Variable name cannot start with number
4. It should not be reserved keyword
5. There should not be any special charecter

**Data Types :**

Which type of Data are stored in variable .

```cpp
 int age; //declaration

 age = 30; //assign value

 age = 40; //assign value

 example : int age = 20;
```

## How to declared value in C programming and C++

```c
C programmimg :

int age = 20;
printf("%d", age);

C++ :

int age = 20;
cout<<age;
```

**💻 Example 1 :**

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

**⚙️ Output :**

> Age = 20

**💻 Example 2 :**

```cpp
#include <iostream>
using namespace std;

int main() {

    int age = 22;

    cout<<"My age is "<<age;

    return 0;
}
```

**⚙️ Output :**

> my age is 22

**💻 Example 3 :**

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

## 🔗 Some Useful Links

## 📖 References
