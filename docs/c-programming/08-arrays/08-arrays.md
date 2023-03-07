---
title: Arrays
description: "Arrays"
hide_table_of_contents: true
---

### What is array?

Array is a collection of similar datatypes .    
        
**Syntax :**

```c
datatype arrayname[size]
```

**Example :**

```c
int marks[6];
```

**Example :**

```c
#include <stdio.h>

int main() {

    int rolls[5];

    rolls[0] = 10;
    rolls[1] = 15;
    rolls[2] = 30;
    rolls[3] = 8;
    rolls[4] = 20;
     
    printf("\n%d", rolls[0]);
    printf("\n%d", rolls[1]);
    printf("\n%d", rolls[2]);
    printf("\n%d", rolls[3]);
    printf("\n%d", rolls[4]);
    
    return 0;
    
}
```

**Output :**

10  
15  
30  
8  
20


**Example :**

```c
#include <stdio.h>

int main() {

    int rolls[5] = {5, 10, 15, 20, 25}

    printf("\n%d", rolls[0]);
    printf("\n%d", rolls[1]);
    printf("\n%d", rolls[2]);
    printf("\n%d", rolls[3]);
    printf("\n%d", rolls[4]);
    
    return 0;
    
}
```

**Output :**

5  
10   
15    
20    
25


**Example :**

```c
#include <stdio.h>

int main() {
    int rolls[5] = {5, 10, 15, 20, 25};
    
    for(int i=0; i<5; i++)
    {
        printf("\n%d", rolls[i]);
    }
    return 0;
}
```

**Output :**

5  
10  
15  
20  
25