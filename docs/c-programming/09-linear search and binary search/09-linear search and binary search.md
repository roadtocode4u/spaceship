---
title: Linear Search and Binary Search
description: "Linear Search and Binary Search"
hide_table_of_contents: true
---

**Linear Search**  
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

**Binary Search**  
Binary Search is a search algorithm that is used to find the position of an element in a sorted array.

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
