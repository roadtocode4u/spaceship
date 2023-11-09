# Binary Search

Binary Search is a searching algorithm that is used to find the position of an element in a sorted array.

Sorted means array stored in increasing order or decreasing order.

### _Binary means (divide and conquer)_

- Bi => Two
- n => n
- ary => array

<br/>

**FORMULA**

- start=mid+1
- mid = (start+end)/2
- end=mid-1

**Example 3:**

```cpp showLineNumbers = "true"

#include <iostream>
using namespace std;
int main() {

    int number[10] = {10,20,30,40,50,60,70,80,90,100};

    int key;
    cout<<"Enter Number do you want to search: ";
    cin>>key;

    int start=0;
    int end=9;

    while(start<=end)
    {
       int mid = (start + end) / 2;

       if(key==number[mid])
       {
           cout<<"Element found at: "<<mid;
           break;
       }
       else if(key>number[mid])
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

**Output :**

> Which number do you want to search: 100<br/>
> Element found at: 9

**Explanation :**

Declare array that name has number and size of array is `10` stored value is `{10,20,30,40,50,60,70,80,90,100}` datatype of array is `int`.<br/>
Declare `key` variable, datatype is `int`.<br/>
Print message `Enter Number do you want to search` using `cout`.<br/>
store value in `key` variable using `cin` object.<br/>
initialize `start` varible store value is `0`.<br/>
initialize another `end` variable store value is `9`.<br/>
start `while` and check condition `(start<=end)`.<br/>
check this formula `mid = (start + end) / 2;`.<br/>
check `if(key==number[mid])` and print `Element found at:` using cout and print `mid` variable.and break statements.<br/>
check next condition `else if(key>number[mid])` start = mid + 1. this condition is false then execute else condition. end = mid - 1.<br/>
