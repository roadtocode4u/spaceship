# Reference

**💻Example 1️:**
```cpp
    #include <iostream>
    using namespace std;
    int main() {

      int b = 10;

      int& a = b;

      cout<<"a: "<<a<<endl;

      cout<<"b: "<<b<<endl; 

    
        return 0;
    }
```
**⚙️ Output :**
>a: 10<br/>
b: 10


**💻Example 2:**
```cpp
    #include <iostream>
    using namespace std;
    int main() {

      int b = 10;

      int& a = b;

      a=40;

      cout<<"a: "<<a<<endl;

      cout<<"b: "<<b<<endl; 

       return 0;
    }
```
**⚙️ Output :**
>a: 40<br/>
b: 40

**💻Example 3:**
```cpp
    #include <iostream>
    using namespace std;
    int main() {

      int a = 10;

      int b = a;

      cout<<"Before changes: ";
      cout<<<<a<<endl;
      cout<<<<b<<endl;

      b = 50;

      cout<<"After changes: ";
      cout<<<<a<<endl;
      cout<<"b: "<<b<<endl; 

        return 0;
    }
```
**⚙️ Output :**
>Before changes: 10<br/>
10
Before changes: 50<br/>
50

```cpp
int a;

fun(int b)
{
    b = 100;
}
```
**💻Example 4:**
```cpp
    #include <iostream>
    using namespace std;

    void square(int& num)
    {
        num = num * num;
    }
    int main() {

        int n;
        cout<<"Enter n ";
        cin>>n;

        square(n);

        cout<<"Square is: "<<n;
        return 0;
    }
```
**⚙️ Output :**
>Enter n: 5<br/>
Square is: 25

