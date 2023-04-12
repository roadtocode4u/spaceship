---
title: "Arrays"
description: "Arrays"
hide_table_of_contents: true
---

## What is an array?

Array is a special datatype that can store multiple values in a single variable in contineous memory. All the members of array will homogeneous in terms of data type.

### Let's create an array

To create an array you refer to the syntax below here `datatype*` is the type of elements that you want to add in array, `arra_name` is the name of array variable and `size` specifies the capacity of array. It means maximum elements storing capacity is decided by value of size. 

**Syntax :**

```cpp
datatype array_name[size];
```

Let's look at the example below, if we want to store `ages` of `4` people then we can create array as shown below.

**Code :**

`int ages[4];`

### How to add an element to an array

Once you have created an array, you can add elements to it by assigning values to individual array elements. You can access a specific element of an array using its index, which starts from `0` and goes up to `size - 1`.

```cpp
int marks[5]; 
  
  marks[0] = 5;
  marks[1] = 10;
  marks[2] = 15;
  marks[3] = 20;
  marks[4] = 25;
```

This code creates an array marks with `five` elements and initializes them to `5`, `10`, `15`, `20`, and `25`, respectively.

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

The above program first declares an `integer` array & the name of an array is `marks` that can store `5` elements. Then it initializes each element of the array with a different value ranging from `5 to 25`.

Each element of the `marks` array is accessed using its index number, which starts from `0` and goes up to `4`. The `cout` statement is used to output the value of each element, followed by an end-line character `endl` to move to the next line after printing each value.`

Finally, the program `returns 0`, indicating that the program ran successfully.

### How to access an array elements

You can use a loop to access and manipulate the elements of an array. The most commonly used loop for this purpose is the for loop.

```cpp
for(int i = 0; i < size; i++) {
    
}
```
Here, `i` is the index of the array element. The loop runs from `0` to `size - 1`, allowing you to access all the elements of the array.

**For example :**

```cpp
for(int i = 0; i < 5; i++) {
    cout << marks[i] << endl;
}
```
This code uses a for loop to print out all the elements of the marks array.

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
