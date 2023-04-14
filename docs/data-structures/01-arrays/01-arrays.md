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

```cpp showLineNumbers="true"
int marks[5]; 
  
  marks[0] = 5;
  marks[1] = 10;
  marks[2] = 15;
  marks[3] = 20;
  marks[4] = 25;
```

This code creates an array marks with `five` elements and initializes them to `5`, `10`, `15`, `20`, and `25`, respectively.

**Code :**

```cpp showLineNumbers="true"
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

```cpp showLineNumbers="true"
for(int i = 0; i < size; i++) {
    
}
```
Here, `i` is the index of the array element. The loop runs from `0` to `size - 1`, allowing you to access all the elements of the array.

**For example :**

```cpp showLineNumbers="true"
for(int i = 0; i < 5; i++) {
    cout << marks[i] << endl;
}
```
This code uses a for loop to print out all the elements of the marks array.

### Using loop for array operations

**Code :**

```cpp showLineNumbers="true"
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

**For loops are used to optimize the code by reducing the amount of code required and making it more efficient.Let's look at the example below.**

**Code :**

```cpp showLineNumbers="true"
#include <iostream>
using namespace std;

int main() {
        int marks[4];
    
    for(int i=0; i<4; i++)
    {
        cout<<"Enter Value for index "<<i<<": ";
        cin>>marks[i];
    }
    
    for(int i=0; i<4; i++)
    {
        cout<<marks[i]<<endl;
    }
    return 0;
}
```

**Output :**

Enter Value for index 0: 5 <br/>
Enter Value for index 1: 10 <br/>
Enter Value for index 2: 15 <br/>
Enter Value for index 3: 20 <br/>
5 <br/>
10 <br/>
15 <br/>
20

In the Above example, The first `for loop` is used to iterate through each index of the `marks` array and take input for each index. Instead of taking input separately for each variable, the for loop is used to iterate through the array and take input for each index in a single iteration. This not only saves time but also makes the code more efficient and readable

The second for loop is used to print the values of the `marks` array. Instead of printing each variable separately, the for loop is used to iterate through the array and print each index in a single iteration. This makes the code more efficient and saves time and effort.

In summary, for loops are used to optimize code reducing the amount of code required and making it more efficient. By iterating through arrays, for loops allow us to perform operations on all elements of the array in a single iteration, rather than repeating the same code for each individual element. This can save time and effort, making our code more efficient and easier to read and understand.

### Sum of array elements

To calculate the sum of array elements, we can use a loop to iterate through each element of the array and add them together. Here's an example code to find the sum of elements in an array

**code :**

```cpp showLineNumbers="true"
#include <iostream>
using namespace std;

int main() {
   int runs[5] = {4, 2, 8,46,1};
   
   int sum = 0;
   
   for(int i=0; i<5; i++) 
   {
       sum = sum + runs[i];
   }
   
   cout<<"Total Runs: "<<sum;
   
    return 0;
}
```

**Output :**

Total Runs: 61

In the above code, we declare an integer array `runs` of size `5` and initialize it with the values `{4, 2, 8, 46, 1}` on line `5`. It should be noted that the first element in an array has an index of `0`, so `runs[0]` is `4`, `runs[1]` is `2`, and so on.

On line 7, we declare an integer variable `sum` and initialize it to `0`. This variable will be used to store the sum of the elements in the `runs` array.

Lines 9 to 12 start a for loop that iterates over the elements of the runs array. The loop variable `i` starts at `0` and goes up to `4`. Inside the loop, each element in the array is added to the `sum` variable.

Finally, line 14 gives the output of the total `sum` of the elements in the runs array, along with the message `"Total Runs: "`.

### Largest element in an array

**Code :**

```cpp showLineNumbers="true"
#include <iostream>
using namespace std;

int main() {
    int arr[] = {40,9,8,7,16,20,4,99,75};
    
    int largest = arr[0];
    
    for(int  i=1; i<9; i++)
    {
        if(arr[i]>largest)
        {
            largest = arr[i];
        }
    }
    
    cout<<"Largest Element is :"<<largest;

    return 0;
}
```

**Output :**

Largest Element is :99

In the above Example, We` finds the largest element in an array of integers.

The program first declares an integer array of size `9`, named `arr`, and initializes it with `9` integers. It then declares an integer variable named `largest` and initializes it with the first element of the array `arr[0]`.

Next, the program uses a `for loop` to iterate over the elements of the array, starting from the second element `i=1` and ending at the last element `i<9`. Inside the loop, the program checks if the current element is greater than the current largest element `arr[i]>largest`. If it is, the current element is assigned to largest. This way, the loop will find the largest element in the array.

Finally, the program prints the largest element using the `cout` statement.

### Reverse an array

Reversing an array means to change the order of elements in the array such that the last element becomes the first, the second-last element becomes the second, and so on, until the first element becomes the last.

For example, if we have an array [5, 4, 7, 9, 6], reversing the array would result in [6, 9, 7, 4, 5].

**Code :**

```cpp 
#include <iostream>

int main() {
    using namespace std;
    
    int arr[5] = {5, 4, 7, 9, 6};
    
    for(int i=0; i<=4; i++)
    {
        cout<<arr[i]<<",";
    }
    
    cout<<endl<<endl;
    
    int start = 0;
    int end = 4;
    while(start<end)
    {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        start++;
        end--;
    }
    
     for(int i=0; i<=4; i++)
    {
        cout<<arr[i]<<",";
    }
    
    return 0;
}
```

**Output :**

5,4,7,9,6, <br/>

6,9,7,4,5,

In the above code we can create an array named `arr` of size `5` and assigns some initial values to it.

Then, the program uses a for loop to print the values of the array element using the `cout` statement.

After that, the program prints two new lines using the `endl` statement to separate the two sets of array values.

Next, The code starts by initializing two integer variables, `start` and `end`, with the values `0` and `4` respectively. These variables are used to keep track of the indices of the elements in the array that need to be swapped.

The while loop runs as long as start is less than end, which means that the loop will continue until the midpoint of the array is reached. Inside the loop, the values of `arr[start]` and `arr[end]` are swapped by using a temporary variable `temp` to hold the value of `arr[start]`, then assigning the value of `arr[end]` to `arr[start]` and finally assigning the value of `temp` to `arr[end]`.

After the swap, `start` is `incremented by 1` and `end` is `decremented by 1`, so that the next two elements in the array can be swapped in the next iteration of the loop.

Once the loop has finished running, the array arr will have been reversed, with the first element now being the last element, the second element being the second to last element, and so on. 

### Remove an element from an array

will be added soon

### Linear search

will be added soon

### Binary search

will be added soon

### Bubble sort

will be added soon

### Kadane's algorithm

will be added soon
