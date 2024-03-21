---
title: Linear Search and Binary Search
description: "Linear Search and Binary Search"
hide_table_of_contents: true
---

---

## Linear Search

**Defination :-**
Linear search is a search that finds an element in the list by searching the element sequentially until the element is found in the list.

**Example 1 :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int arr[10]={5, 6, 8, 78, 38, 33, 89, 98, 43, 24};

    int key = 89;

    for(int i=0; i<10; i++)
    {
        if(arr[i]==key)
        {
            printf("Element found at %d", i);
            break;
        }
    }
    return 0;
}
```

**Output :**

Element found at 6

**Example 2 :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int arr[10]={2, 4, 6, 78, 34, 12, 23, 98, 43, 22};

    int key;
    printf("Enter key: ");
    scanf("%d", &key);

    for(int i=0; i<10; i++)
    {
        if(arr[i]==key)
        {
            printf("%d found at %d index",key, i);
            break;
        }
    }
    return 0;
}
```

**Output :**

Enter key: 78  
78 found at 3 index

**Example 3 :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int arr[100];

    int n;
    printf("How many elements do you want to add: ");
    scanf("%d", &n);

    for(int i=0; i<n; i++)
    {
        printf("Enter value for index %d: ",i);
        scanf("%d", &arr[i]);
    }
    int key;
    printf("Enter key: ");
    scanf("%d", &key);

    for(int i=0; i<n; i++)
    {
        if(arr[i]==key)
        {
            printf("%d found at %d index",key, i);
            break;
        }
    }
    return 0;
}
```

**Output :**

How many elements do you want to add: 5  
Enter value for index 0: 2  
Enter value for index 1: 56  
Enter value for index 2: 98  
Enter value for index 3: 22  
Enter value for index 4: 45  
Enter key: 98  
98 found at 2 index

---

## Binary Search

**Defination :-**
Binary Search is a search algorithm that is used to find the position of an element in a Sorted array.

**_Important points to remmber about Binary Search 👇_**

**1. Binary Search must be sorted ✔️**

**2 .Formula to find mid number 👇**

`mid = ( startindex + endindex ) / 2`

**3. If target(key) is `Greater` than the mid value , then we have to change the `start index` {formula below}👇**

`startindex = midindex + 1 `

**If target(key) is `Smaller` than the mid value , then we have to change the `end index` {formula below}👇**

`endindex = midindex - 1 `

**example below👇**

```c showLineNumbers="true"
#include <stdio.h>

int main() {
    int arr[] = {2, 4, 6, 8, 10};
    int key = 6;
    int start = 0;
    int end = 4;
    while (start <= end) {
        int mid = (start + end) / 2;
        if (arr[mid] == key){
            printf("Found the key value at Index %d :", mid);
            break; }
        else if (key >arr[mid]){
            start = mid + 1 ; }
         else {
            end = mid - 1;
            }
    }
   }

```

**Output :**

```c
Found the key value at Index 2

```

**Explaination of code :**

`line 4 `In this line we are declaring an integer array named `arr` containing the numbers 2, 4, 6, 8, and 10.

`line 5`: In this line we are declaring an integer variable named `key` with value 6 ( This is the number we want to find in the array)

`line 6`: In this line we're initializing a variable 'start' with value 0 (This will keep considered as the starting index value of array)

`line 7`: In this line we're initializing a variable 'end' with value 4. (This will be our ending index value of array.)

`line 8`: In this line we start a `while` loop that continues as long as the condition `start <= end` is true. and inside the loop we give our conditions

`line 9`: now we are assigning the mid new value which is` mid = (start + end) / 2;`.

`line 10`: now we are `if` we are giving a condition that is `arr[mid] == key` If it is true, it moves forward in the if condition . it means we have found the key

`line 11` as the condition is true so it prints the index where the key was found using `printf()`.

`line 12`: we are using here `break` which stops the code , as we already got our key so we are using break here .

`line 13`: in this line we use `else if` condition that check is key value greater than new arr[mid] value `key >arr[mid]`

`line 14`: we assign new value to start here `start = mid + 1 ;`

`line 15`: in this line there is `else` and in this we are assigning new walue for end index , which is `end = mid - 1;`

This process continues until either the key is found or the subarray being searched becomes empty (`start > end`).

**another example below👇**

```c
#include <stdio.h>

int main() {
    int arr[] = {2, 4, 6, 8, 10};
    int key = 10;
    int start = 0;
    int end = 4;
     while (start <= end) {
        int mid = (start + end) / 2;
        if (arr[mid] == key) {
            printf("Found the key at Index %d\n", mid);
            return 0;
        } else if (key > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    printf("Key not found\n");
    return 0;
}

```

**Output :**

```c
Found the key at Index 4


=== Code Execution Successful ===

```

**Example :**

```c
#include <stdio.h>

int main() {
   int arr[] = {1, 5, 4, 7, 45, 23, 56};

   int key = 56;

   for(int i=0; i<7; i++)
   {
       if(arr[i]==key)
       {
           printf("Element found at %d",i);
           break;
       }
   }

    return 0;
}
```

**Output :**  
Element found at 6
