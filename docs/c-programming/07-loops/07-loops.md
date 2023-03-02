---
title: Loops
description: "Loops"
hide_table_of_contents: true
---

**Types of Loops**  
For-Loop  
While Loop  
Do-While Loop 

**For Loop**
For loops are used when you have a block of code which you want to repeat a fixed number of times.

💻Example:

```c
#include <stdio.h>

int main() {
    
    for(int i=0;i<=5; i++)
    {
        printf("\nHello ");
    }
    return 0;
}
```

**Output :**

Hello
Hello
Hello
Hello
Hello
Hello

**Example:**

```c
#include <stdio.h>

int main() {
    
    int n;
    printf("Enter Number :");
    scanf("%d",&n);
    
    for(int i=1;i<=n; i++)
    {
        printf("\nHey ");
    }
    return 0;
}
```

**Output :**

Enter Number :5  
Hey   
Hey   
Hey    
Hey  
Hey 

**Example:**

```c
#include <stdio.h>

int main() {
    
    int n;
    printf("Enter Number :");
    scanf("%d",&n);
    
    for(int i=1;i<=n; i++)
    {
        printf("\nXerox... %d",i);
    }
    return 0;
}
```

**Output :**

Enter Number :3
Xerox... 1
Xerox... 2
Xerox... 3

**Example:**

```c
#include <stdio.h>

int main() {
 
    for(int i=5;i>=0; i--)
    {
        printf("\n%d",i);
    }
    return 0;
}
```

**Output :**

5
4
3
2
1
0
