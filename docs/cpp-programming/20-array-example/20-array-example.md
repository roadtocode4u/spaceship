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

# Array Example

1. Write a program to calculate sum of elements present in array.

```cpp
#include <iostream>
using namespace std;

int main() {

    int arr[5] = {5,4,1,9,7};

    int sum = 0;

    for(int i=0; i<5; i++)
    {
        sum = sum + arr[i];
    }

    cout<<"Sum = "<<sum;

    return 0;
}
```

![output-1](output-1.png)

2. Write a program to print only even numbers from given array

```cpp
#include <iostream>
using namespace std;

int main() {

    int arr[8] = {5,4,1,9,7,6,12,3};

    for(int i=0; i<8; i++)
    {
        if(arr[i]%2==0)
        {
            cout<<arr[i]<<" , ";
        }
    }


    return 0;
}
```

![output-2](output-2.png)

3. Write a program to find largest element from array.

```cpp
#include <iostream>
using namespace std;

int main() {

    int arr[5] = {5,7,81,2,23};

    int largest = 0;

    for(int i=1; i<5; i++)

    {
        if(arr[i] > largest)
        {
            largest = arr[i];
        }
    }

    cout<<"Largest Element is = "<<largest;

    return 0;
}
```

![output-3](output-3.png)
