---
title: "Arrays"
description: "Arrays"
hide_table_of_contents: true
---

## What is an array?

Array is a special datatype that can store multiple values in a single variable in contineous memory. All the members of array will homogeneous in terms of data type.

### Let's create an array

**Syntax :**

```cpp
datatype array_name[size];
```

**Code :**

`int ages[4];`

### How to add an element to an array

**Code :**

```cpp
#include <iostream>
using namespace std;

int main() {
  int marks[5]; 
  
  marks[0] = 5;
  marks[1] = 10;
  marks[2] = 15;
  marks[3] = 20;
  marks[4] = 25;
  
  cout<<marks[0]<<endl;
  cout<<marks[1]<<endl;
  cout<<marks[2]<<endl;
  cout<<marks[3]<<endl;
  cout<<marks[4]<<endl;
  
  return 0;
}
```

**Output :**

5 <br/>
10 <br/>
15 <br/>
20 <br/>
25 

In the above program first declares an `integer` array & name of array is `marks` that can store `5` elements. Then it initializes each element of the array with a different value ranging from `5 to 25`.

Each element of the `marks` array is accessed using its index number, which starts from `0` and goes up to `4`. The `cout` statement is used to output the value of each element, followed by an end-line character `endl` to move to the next line after printing each value.`

Finally, the program `returns 0`, indicating that the program ran successfully.

### Using loop for array operations

**Code :**

```cpp
#include <iostream>
using namespace std;

int main() {
  int marks[5]; 
  
  marks[0] = 5;
  marks[1] = 10;
  marks[2] = 15;
  marks[3] = 20;
  marks[4] = 25;
  
   for(int i=0; i<5; i++) {
    cout << marks[i] <<endl;
  }
  
  return 0;
}
```
**Output :**

5 <br/>
10 <br/>
15 <br/>
20 <br/>
25

In the above example, we created an `integer` array named `marks` with a size of `5`. We then initialized the array elements with the values of `10`, `20`, `30`, `40`, and `50`. Finally, we printed out the elements of the array using a `for loop`.

### How to access an array elements

will be added soon

### Largest element in an array

will be added soon

### Sum of array elements

will be added soon

### Remove an element from an array

will be added soon

### Reverse an array

will be added soon

### Linear search

will be added soon

### Binary search

will be added soon

### Bubble sort

will be added soon

### Kadane's algorithm

will be added soon
