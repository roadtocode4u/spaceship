---
title: Functions in C programming
description: "Functions in C programming"
hide_table_of_contents: true
---

**What is Functions?**    
A function is a block of code that performs a specific task and we can reuse it multiple times.

**Syntax**  
```c
 returntype functionname()
{
    //implementation of function

    return value;
}
```

**Example**
```c
#include <stdio.h>

void hello()
{
    printf("\n Hello Everyone");
}
int main() {
    
    hello();
    
    return 0;
}
```

**Output :**

Hello Everyone  

**Types of function**  

There are two types of function in C programming:

Standard library (inbuilt) functions  
User-defined functions

**User-defined functions**  
**Example 1 :**

```c
#include <stdio.h>

void hii()
{
    printf("\n Hii Students");
}
int main() {
    
    hello();
    
    return 0;
}
```
**Output :**  

Hii Students 


 