# Binary Search

Binary Search is a searching algorithm that is used to find the position of an element in a sorted array.

### _Binary means (divide and conquer)_

- Bi => Two
- n => n
- ary => array

<br/>

**RULE**

- Data should be sorted

**FORMULA**

- start=mid+1
- mid = (start+end)/2
- end=mid-1

**💻Example 3:**

```cpp

#include <iostream>
using namespace std;
int main() {

    int arr[10];
    cout<<"Enter 10 Values: ";
    for(int i=0; i<10; i++)
    {
        cin>>arr[i];
    }

    int key;
    cout<<"Which number do you want to search: ";
    cin>>key;

    int start=0;
    int end=9;

    while(start<=end)
    {
       int mid = (start + end) / 2;

       if(key==arr[mid])
       {
           cout<<"Element found at: "<<mid;
           break;
       }
       else if(key>arr[mid])
       {
           start = mid + 1;
       }
       else
       {
           end = mid - 1;
       }
    }
    return 0;
}
```

**⚙️ Output :**

> Enter 10 Values: 2 4 7 9 13 19 22 45 67 98 <br/>
> Which number do you want to search: 67<br/>
> Element found at: 8
