---
title: String
description: "String"
hide_table_of_contents: true
---

**String :** String is a collection of characters.

**Example 1 :**

```c showLineNumbers="true"
#include <stdio.h>

int main()
{
    char arr[10];

    printf("Enter name: ");
    scanf("%s",arr);

    printf("Hello %s",arr);

    return 0;
}
```

**Output :**

> Enter name: Surbhi  
> Hello Surbhi

**Assignment operator ( = ) :** Assignment operators are used to assigning value to a variable.

**Without mentioning size**

**Example 2 :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {
    char arr[] = {'R', 'T', 'C', '\0'};

    printf("Hello %s", arr);

    return 0;
}
```

**Output :**

> Hello RTC

**Example 3 :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    char str[100];
    printf("Enter Name: ");
    scanf("%s", str);

    printf("Hello %s", str);

    return 0;
}
```

**Output :**

> Enter Name: Vaishnavi  
> Hello Vaishnavi

**Example 4 :** WAP to find length of a string.

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    char str[100];
    printf("Enter Name: ");
    scanf("%s", str);

    for(int i=0; i<100; i++)
    {
        if(str[i]=='\0')
        {
            printf("%d", i);
            break;
        }
    }

    return 0;
}
```

**Output :**

> Enter Name: Suraj  
> 5

**Example 5 :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    char str[100];
    printf("Enter Name: ");
    scanf("%s", str);

    int count = 0;

    for(int i=0; i<100; i++)
    {
        if(str[i]=='\0')
        {
            break;
        }
        else
        {
            count++;
        }
    }
    printf("Length of string is: %d", count);

    return 0;
}
```

**Output :**

> Enter Name: Vaishnavi  
> Length of string is: 8

**Using while loop**

**Example 6 :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    char str[100];
    printf("Enter Name: ");
    scanf("%s", str);

    int count = 0;

    while(str[count]!='\0')
    {
        count++;
    }
    printf("Length of string is: %d", count);

    return 0;
}
```

**Output :**

> Enter Name: Rutuja  
> Length of string is: 6
