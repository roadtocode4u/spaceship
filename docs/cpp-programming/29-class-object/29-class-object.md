# Class and Objects

### Class

A class is a user-defined data type that we can use in our program, and it works as an object constructor, or a "blueprint" for creating objects. 

```cpp

Variables => To store data

Access Specifiers => access specifiers

Functions => processing on variables

```

### Access Specifiers

* Public
* Private 
* Protected


### How to declare class?

```cpp

class className
{
    //access specifiers
    //variable
    //functions
};

```

```cpp
class student
{
    public:
    int roll;
    string studName;

    void show () {
        --------
        --------
    }
}

```
### How to declare object ?

```cpp
student stud;
```
### Dot operator :
Dot operator is used to access class, structure, or union members. 

*💻Example 1:*
```cpp
#include <iostream>
using namespace std;

class Student
{
    public:
    
    int roll;
    string studName;
    
    
};
int main() {
    
    Student s1;
    s1.roll = 123;
    s1.studName = "Suraj";
    
    cout<<s1.roll<<endl;
    cout<<s1.studName;
    
    return 0;
}
```

*⚙️ Output :*
>123<br>
Suraj

*💻Example 2:*
```cpp
#include <iostream>
using namespace std;

class Student
{
    public:
    
    int roll;
    string studName;
    
};
int main() {
    
    Student s1, s2;
    
    s1.roll = 123;
    s1.studName = "Suraj";
    
    s2.roll = 456;
    s2.studName = "Vaibhavi";
    
    cout<<s1.roll<<endl;
    cout<<s1.studName<<endl;
    
    cout<<s2.roll<<endl;
    cout<<s2.studName<<endl;
    
    return 0;
}
```

*⚙️ Output :*

>123<br>
Suraj<br>
456<br>
Vaibhavi<br>

**This**

It is a special keyword which stores address of instance current class.

*💻Example 3:*
```cpp
#include <iostream>
using namespace std;

class Student
{
    public:
    
    int roll;
    string studName;
    
    void showDetail()
    {
        cout<<"\nStudent detail is: "<<endl;
        cout<<"Name: "<<this->studName<<endl;
        cout<<"Roll: "<<this->roll<<endl;
    }
};
int main() {
    
    Student s1, s2;
    
    s1.roll = 123;
    s1.studName = "Suraj";
    
    s2.roll = 456;
    s2.studName = "Vaibhavi";
    
    s1.showDetail();
    
    s2.showDetail();
    return 0;
}
```

*⚙️ Output :*
>Student detail is: <br>
Name: Suraj <br>
Roll: 123 <br> <br>
Student detail is:  <br>
Name: Vaibhavi <br>
Roll: 456 <br>


*💻Example 4:*
```cpp
#include <iostream>
using namespace std;

class Student
{
    public:
    
    int roll;
    string studName;
    
    void getDetail()
    {
        cout<<"Please Enter Name & Roll no: ";
        cin>>this->studName>>this->roll;
    }
    
    void showDetail()
    {
        cout<<"\nStudent detail is: "<<endl;
        cout<<"Name: "<<this->studName<<endl;
        cout<<"Roll: "<<this->roll<<endl;
    }
};
int main() {
    
    Student s1;
    
    s1.getDetail();
    s1.showDetail();
    return 0;
}
```

*⚙️ Output :*

>Please Enter Name & Roll no: Vaibhavi 123<br>
Student detail is: <br>
Name: Vaibhavi<br>
Roll: 123<br>


*💻Example 5:*
```cpp
#include <iostream>
using namespace std;

class Student
{
    public:
    
    int roll;
    string studName;
    
    void getDetail()
    {
        cout<<"Please Enter Name & Roll no: ";
        cin>>this->studName>>this->roll;
    }
    
    void showDetail()
    {
        cout<<"\nStudent detail is: "<<endl;
        cout<<"Name: "<<this->studName<<endl;
        cout<<"Roll: "<<this->roll<<endl;
    }
};
int main() {
    
    Student s1, s2;
    
    s1.getDetail();
    s2.getDetail();
    
    s1.showDetail();
    s2.showDetail();
    return 0;
}
```

*⚙️ Output :*

>Please Enter Name & Roll no: A 1<br>
Please Enter Name & Roll no: B 2<br>
Student detail is: <br>
Name: A<br>
Roll: 1<br>
<br>
Student detail is: <br>
Name: B<br>
Roll: 2<br>
