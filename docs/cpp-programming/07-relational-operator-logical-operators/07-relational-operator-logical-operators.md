#  Relational Operator & Logical Operators

##  Relational Operator : (>,<,>=,<=,==)
* comparision
* true / false value
```cpp
  1. == is equals to
ex : a == b // == comparision

a = b // value assign

two values are equal then result is true

two values are differebt then result is false
```


**💻 Example 1 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int a = 5;

    int b = 5;

    int res = a==b;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>1 

**💻 Example 2 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int a = 15;

    int b = 5;

    int res = a==b;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>0

```
2. != Not equals to
ex : a !=b // result false
```
**💻 Example 3 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int a = 15;

    int b = 5;

    int res = a!=b;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>1

**💻 Example 4 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int a = 15;

    int b = 15;

    int res = a!=b;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>0

```
3. < less than
ex : a < b (a is less than b)
a<b => true
```
**💻 Example 5 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int a = 17;

    int b= 20;

    int res = a<b;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>1


**💻 Example 6 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int a = 17;

    int b= 20;

    int res = b<a;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>0

```
3. > greater than
ex : a > b (a is greater than b)
a>b => true
```

**💻 Example 7 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int res = 170>20;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>1

**💻 Example 8 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int res = 20>170;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>0

```
4. >= greater than or equal to
ex : a >= b (a is greater than or equals to b)
a>=b => true
```
**💻 Example 9 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int res = 5>=2;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>1

**💻 Example 10 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int res = 2>=2;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>1

**💻 Example 11 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int res = 1>=2;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>0

```
5. <= less than or equal to
ex : a <= b (a is less than or equals to b)
a<=b => true
```
**💻 Example 12 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int res = 5<=10;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>1

**💻 Example 13 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int res = 10<=10;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>1

**💻 Example 14 :**
```cpp
#include <iostream>
using namespace std;

int main() {
    
    int res = 15<=10;

    cout<<res;
 
    return 0;
}
```
**⚙️ Output :**
>0

## Logical Operator : (&&,||, !)
```cpp
 1. Logical AND  => &&
 2. Logical OR =>  ||
 3. Logical NOT(Negation) => !
```
```cpp
1. Logical AND (&&) 

**Truth Table**
(condition 1 && condition 2)
 T   T => T
 T   F => F
 F   T => F
 F   F => F
 ```

**💻 Example 1 :**
```cpp
#include <iostream>
using namespace std;

int main() {
   
   int a = 5;

   int b = 8;
   
   int res =  a==5 &&b==a;

   cout<<res;

   return 0;
}
```
**⚙️ Output :**
>1

**💻 Example 2 :**
```cpp
#include <iostream>
using namespace std;

int main() {
   
   int a = 5;
   
   int res =  a>5 &&a<20;

   cout<<res;

   return 0;
}
```
**⚙️ Output :**
>0

**💻 Example 3 :**
```cpp
#include <iostream>
using namespace std;

int main() {
   
   int a = 5;
   
   int res =  a==5 &&a<20;

   cout<<res;

   return 0;
}
```
**⚙️ Output :**
>0

**💻 Example 4 :**
```cpp
#include <iostream>
using namespace std;

int main() {
   
   int a = 5;
   
   int res =  a==8 &&a==10;

   cout<<res;

   return 0;
}
```
**⚙️ Output :**
>0

```cpp
2. Logical OR (||) 

**Truth Table**
(condition 1 || condition 2)
 T   T => T
 T   F => T
 F   T => T
 F   F => F
 ```

 **💻 Example 1 :**
```cpp
#include <iostream>
using namespace std;

int main() {
   
   int jee = 130;

   int cet = 20;

   int res = jee >= 120 || cet >= 200;

   cout<<res;

   return 0;
}
```
**⚙️ Output :**
>1

**💻 Example 2 :**
```cpp
#include <iostream>
using namespace std;

int main() {
   
   int jee = 0;

   int cet = 220;

   int res = jee >= 120 || cet >= 200;

   cout<<res;

   return 0;
}
```
**⚙️ Output :**
>1

**💻 Example 3 :**
```cpp
#include <iostream>
using namespace std;

int main() {
   
   int jee = 125;

   int cet = 220;

   int res = jee >= 120 || cet >= 200;

   cout<<res;

   return 0;
}
```
**⚙️ Output :**
>1


**💻 Example 4 :**
```cpp
#include <iostream>
using namespace std;

int main() {
   
   int jee = 0;

   int cet = 0;

   int res = jee >= 120 || cet >= 200;

   cout<<res;

   return 0;
}
```
**⚙️ Output :**
>0

```cpp
3. Logical NOT/ NEGATION  (!) 
 ```

**💻 Example 1 :**
```cpp
#include <iostream>
using namespace std;

int main() {
   
   int jee = 0;

   int res = jee >= 120;

   cout<<res;

   return 0;
}
```
**⚙️ Output :**
>0

**💻 Example 2 :**
```cpp
#include <iostream>
using namespace std;

int main() {
   
   int jee = 0;

   int res = !(jee >= 120);

   cout<<res;

   return 0;
}
```
**⚙️ Output :**
>1

**💻 Example 3 :**
```cpp
#include <iostream>
using namespace std;

int main() {
   
   int jee = 125;

   int res = (jee >= 120);

   cout<<!res;

   return 0;
}
```
**⚙️ Output :**
>0