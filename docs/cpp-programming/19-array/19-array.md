# Array

- An array is a variable that can store multiple values of the same type.
- Array is a collection of homogeneous data .
- homogeneous means similar type

```cpp
syntax :
  datatype arrayname[size]; //[] => subscript

  ex :
  int marks[5];

       0  1  2  3 4  // index
 marks[][10][][50][]

 marks[1]=10;
 marks[3]=50;
```

```cpp
int val1     int marks1;
int val2     int marks2;
int val3     int marks3;
int val4         .
                 .
                 .
             int marksn;
```

**💻Example 1️⃣:**

```cpp
    #include <iostream>
    using namespace std;
    int main() {
        int marks[5]=(10, 20, 30, 40, 50);

        cout<<marks[0]<<endl;
        cout<<marks[1]<<endl;
        cout<<marks[2]<<endl;
        cout<<marks[3]<<endl;
        cout<<marks[4]<<endl;
        return 0;
    }
```

**⚙️ Output :**

> 10<br/>
> 20<br/>
> 30<br/>
> 40<br/>
> 50<br/>

**💻Example 2️⃣:**

```cpp
    #include <iostream>
    using namespace std;
    int main() {
        int marks[5]=(10, 20, 30, 40);

        cout<<marks[0]<<endl;
        cout<<marks[1]<<endl;
        cout<<marks[2]<<endl;
        cout<<marks[3]<<endl;
        cout<<marks[4]<<endl;
        return 0;
    }
```

**⚙️ Output :**

> 10<br/>
> 20<br/>
> 30<br/>
> 40<br/>
> 0<br/>

**💻Example 3️⃣:**

```cpp
    #include <iostream>
    using namespace std;
    int main() {
        int marks[]=(10, 20, 30, 40, 50, 60);

        cout<<marks[0]<<endl;
        cout<<marks[1]<<endl;
        cout<<marks[2]<<endl;
        cout<<marks[3]<<endl;
        cout<<marks[4]<<endl;
        cout<<marks[5]<<endl;
        return 0;
    }
```

**⚙️ Output :**

> 10<br/>
> 20<br/>
> 30<br/>
> 40<br/>
> 50<br/>
> 60

**💻Example 4️⃣:**

```cpp
    #include <iostream>
    using namespace std;
    int main() {

        int marks[3];

        cout<<"Enter number 0: ";
        cin>>marks[0];

        cout<<"Enter number 1: ";
        cin>>marks[1];

        cout<<"Enter number 2: ";
        cin>>marks[2];

        cout<<"Number0 => "<<marks[0]<<endl;
        cout<<"Number1 => "<<marks[1]<<endl;
        cout<<"Number2 => "<<marks[2]<<endl;

        return 0;
    }
```

**⚙️ Output :**

> Enter number 0: 5<br/>
> Enter number 1: 10<br/>
> Enter number 2: 15<br/>
> Number0 => 5<br/>
> Number1 => 10<br/>
> Number2 => 15<br/>

**💻Example 5️⃣:**

```cpp
    #include <iostream>
    using namespace std;
    int main() {

        int marks[3];

        for(int i=0; i<3; i++)
        {
        cout<<"Enter number"<<i<<": ";
        cin>>marks[i];
        }


        for(int i=0; i<3; i++){
           cout<<"Number"<<i<<" =>"<<marks[i]<<endl;
        }

        return 0;
    }
```

**⚙️ Output :**

> Enter number 0: 5<br/>
> Enter number 1: 10<br/>
> Enter number 2: 15<br/>
> Number0 => 5<br/>
> Number1 => 10<br/>
> Number2 => 15<br/>

**💻Example 6️⃣:**

```cpp
    #include <iostream>
    using namespace std;
    int main() {

        int marks[5];

        for(int i=0; i<5; i++)
        {
        cout<<"Enter number"<<i<<": ";
        cin>>marks[i];
        }


        for(int i=0; i<5; i++){
           cout<<"Number"<<i<<" =>"<<marks[i]<<endl;
        }

        return 0;
    }
```

**⚙️ Output :**

> Enter number 0: 5<br/>
> Enter number 1: 10<br/>
> Enter number 2: 15<br/>
> Enter number 2: 20<br/>
> Enter number 2: 25<br/>
> Number0 => 5<br/>
> Number1 => 10<br/>
> Number2 => 15<br/>
> Number3 => 20<br/>
> Number4 => 25<br/>

## 🏠 HomeWork

## 🔗 Some Useful Links

## 📖 References
