---
title: Comments
description: "Comments"
hide_table_of_contents: true
---

## Comments in C

Comments can be used to explain code, and to make it more readable.

**Single-line Comments**

Single-line comment are use to comment in single line. Single-line comments start with two forward slashes (//).

**Example :**

```c
#include <stdio.h>

int main() {
    
    // This is a comment
      printf("Hello!");
    
    return 0;
}
```

**Output :**

>Hello!

**Multi-line Comments**

Multi-line comment are used comment in multiple Line. Multi-line comments start with /* and ends with */.

**Example :**

```c
#include <stdio.h>

int main() {
    
    /* This is a Multi-line comment
    and multi-line comment are use to comment on multiple line.*/

      printf("Hello!");
    
    return 0;
}
```

**Output :**

>Hello!