---
title: Reverse array
description: "Reverse array"
hide_table_of_contents: true
---

# Reverse an Array

### How to Reverse an Array

**Example :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;
int main() {

    int arr[5];
    cout<<"Enter 5 Values: ";
    for(int i=0; i<5; i++)
    {
        cin>>arr[i];
    }

    cout<<"\n Values are: "<<arr[i];
    for(int i=4; i>=0; i--)
    {
        cout<<arr[i]<<", ";
    }

    return 0;
}
```

**Output :**

![output](output-2.png)

**Explanation :**

Initialized array that name has `arr`, size of is 5, datatype is `int`.<br/>
`Enter 5 Values:`using cout.<br/>
we use for loop `for(int i=0; i<5; i++)` and check condition and increase value by one.<br/>
`arr[i]` using `cin` object.<br/>
`Values are :` and `arr[i]` using cout object.<br/>
we use for loop for reverse array `for(int i=4; i>=0; i--)` check conditon and decrease by one.<br/>
Print value of `arr[i]` and `, `using `cout`.<br/>
