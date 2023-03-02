# Ternary operator

```cpp
example :
condition ? true part : false part
```

**💻 Example 1 :**

```cpp
#include <iostream>
using namespace std;

int main() {

   int num = 10;

   num==10 ? cout<<"Equal" : cout<<"Not Equal";

   return 0;
}
```

**⚙️ Output :**

> Equal

**💻 Example 2 :**

```cpp
#include <iostream>
using namespace std;

int main() {

   int num = 15;

   num==10 ? cout<<"Equal" : cout<<"Not Equal";

   return 0;
}
```

**⚙️ Output :**

> Not Equal

**💻 Example 3 :**

```cpp
#include <iostream>
using namespace std;

int main() {

   int a = 5;
   int b = 8;

   int big =a>b ? a : b

   cout<<big;

   return 0;
}
```

**⚙️ Output :**

> 8

**💻 Example 4 :**

```cpp
#include <iostream>
using namespace std;

int main() {

   int a = 50;
   int b = 8;

   int big =a>b ? a : b

   cout<<big;

   return 0;
}
```

**⚙️ Output :**

> 50
