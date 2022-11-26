# endl, newline character, swapping of two variables

### WAP to calculate simple interest by taking values of P, R, and T from user

**💻 Example :**

```cpp
 #include <iostream>
using namespace std;
int main() {
    int p, r, t, si;

    cout<< "Enter Principle: ";
    cin>>p;

    cout<<"Enter Rate: ";
    cin>>r;

    cout<<"Enter Time: ";
    cin>>t;

    si= (p * r * t)/100;

    cout<<"Simple Interest: "<<si;

    return 0;
}
```

**⚙️ Output :**

> Enter Principle: 10000<br/>
> Enter Rate: 3<br/>
> Enter Time: 2<br/>
> Simple Interest: 600<br/>

### WAP to calculate area of triangle when base and height is given by user

**💻 Example 1 :**

```cpp
#include <iostream>
using namespace std;
int main() {
    int area, base, height;

    cout<< "Enter Base of Triangle: ";
    cin>>base;

    cout<<"Enter Height of Triangle: ";
    cin>>height;

    area = base * height * 0.5;

    cout<<"Area of Triangle is: "<<area;

    return 0;
}
```

**⚙️ Output :**

> Enter Base of Triangle: 5<br/>
> Enter Height of Triangle: 3<br/>
> Area of Triangle is: 7<br/>

**💻 Example 2 :**

```cpp
#include <iostream>
using namespace std;
int main() {
    int base, height;

    float area;

    cout<< "Enter Base of Triangle: ";
    cin>>base;

    cout<<"Enter Height of Triangle: ";
    cin>>height;

    area = base * height * 0.5;

    cout<<"Area of Triangle is: "<<area;

    return 0;
}
```

**⚙️ Output :**

> Enter Base of Triangle: 5<br/>
> Enter Height of Triangle: 3<br/>
> Area of Triangle is: 7.5<br/>

### WAP to calculate perimeter of circle when radius is given by user

**💻 Example :**

```cpp
#include <iostream>
using namespace std;
int main() {
    int radius;

    float perimeter;

    cout<<"Enter Radius: ";
    cin>>radius;

    perimeter = 2 * 3.14 * radius;

    cout<<"Perimeter "<<perimeter;

    return 0;
}
```

**⚙️ Output :**

> Enter Radius: 5<br/>
> Perimeter 31.4

## \n (newline character)

The newline character ( \n ) is called an escape sequence, and it is used for inserting a new line in C++

**💻 Example :**

```cpp
#include <iostream>
using namespace std;
int main() {
    cout<<"Hello";

    cout<<"\nWorld";
    return 0;
}
```

**⚙️ Output :**

> Hello<br/>
> World

**💻 Example :**

```cpp
#include <iostream>
using namespace std;
int main() {

    cout<<"Hello\nWorld";

    return 0;
}
```

**⚙️ Output :**

> Hello<br/>
> World

## endl (end of line)

The endl is a predefined object of ostream class. It is used to insert a new line character. Value of endl is "\n"

**💻 Example :**

```cpp
#include <iostream>
using namespace std;
int main() {

    cout<<"Hello"<<endl;
    cout<<"World";

    return 0;
}
```

**⚙️ Output :**

> Hello<br/>
> World

**💻 Example :**

```cpp
#include <iostream>
using namespace std;
int main() {

    cout<<"Hello"<<endl<<"World";

    return 0;
}
```

**⚙️ Output :**

> Hello<br/>
> World

## How to declare multiple variable

**💻 Example :**

```cpp
#include <iostream>
using namespace std;
int main() {
    int a, b;
    cout<<"Enter a and b";
    cin>>a;
    cin>>b;

    cout<<"a: "<<a<<"b: "<<b;

    return 0;
}
```

**⚙️ Output :**

> Enter a and b7
> 8<br/>
> a: 7b: 8

**💻 Example :**

```cpp
#include <iostream>
using namespace std;
int main() {
    int a, b;
    cout<<"Enter a and b: ";
    cin>>a>>b;

    cout<<"a: "<<a<<", b: "<<b;

    return 0;
}
```

**⚙️ Output :**

> Enter a and b: 5 8<br/>
> a: 5, b: 8

**💻 Example :**

```cpp
#include <iostream>
using namespace std;
int main() {
    int a, b, c;
    cout<<"Enter a, b, c: ";
    cin>>a>>b>>c;

    cout<<"a: "<<a<<"b: "<<b<<"c: "<<c;

    return 0;
}
```

**⚙️ Output :**

> Enter a, b, c: 1 2 3<br/>
> a: 1b: 2c: 3

## Swapping of two variables

Swapping of two numbers means exchanging the values of two variables.

**💻 Example :**

```cpp
#include <iostream>
using namespace std;
int main() {

    int a = 10;
    int b = 20;

    cout<<"a="<<a<<endl;
    cout<<"b="<<b<<endl;

    int temp = b;
    b = a;
    a = temp;

    cout<<"a="<<a<<endl;
    cout<<"b="<<b<<endl;

    return 0;
}
```

**⚙️ Output :**

> a=10<br/>
> b=20<br/>
> a=20<br/>
> b=10

## 🏠 HomeWork

## 🔗 Some Useful Links

## 📖 References
