## Linear Search

```cpp
yash ---> 7


 0  1  2  3  4    //index
[4][8][2][7][9]   //position
---------------->

<---------------

key / query <--- user

for --- i=0 to 4

arr[i] == key
```

**💻Example 1:**

```cpp
    #include <iostream>
    using namespace std;
    int main() {

       int arr[5];

       cout<<"Enter 5 Elements in Array: ";

       for(int i=0; i<5; i++)
       {
        cin>>arr[i];
       }

       int key;
       cout<<"Enter key to search: ";
       cin>>key;

       for(int i=0; i<5; i++)
       {
        if(key==arr[i])
        {
            cout<<"key found at: "<<i<<endl;
        }
       }
        return 0;
    }

```

**⚙️ Output :**

> Enter 5 Elements in Array: 2 4 6 7 8<br/>
> Enter key to search: 6<br/>
> key found at: 2

**💻Example 2:**

```cpp
    #include <iostream>
    using namespace std;
    int main() {

       int arr[5];

       cout<<"Enter 5 Elements in Array: ";

       for(int i=0; i<5; i++)
       {
        cin>>arr[i];
       }

       int key;
       cout<<"Enter key to search: ";
       cin>>key;

       int flag = -1;

       for(int i=0; i<5; i++)
       {
        if(key==arr[i])
        {
            flag = i;
            cout<<"Key found at: "<<i<<endl;
            break;
        }
       }
       if(flag== -1)
       {
        cout<<"Element Not found";
       }

        return 0;
    }

```

**⚙️ Output :**

> Enter 5 Elements in Array: 2 4 6 7 8<br/>
> Enter key to search: 10<br/>
> Element Not found
