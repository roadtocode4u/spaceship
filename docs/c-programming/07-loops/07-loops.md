---
title: Loops
description: "Loops"
hide_table_of_contents: true
---

### Types of Loops :

**There are three types of loops.**

1. For-Loop
2. While Loop
3. Do-While Loop

#### 1. For Loop :

For loops are used when you have a block of code which you want to repeat a fixed number of times.

### Loop controling concept

#### Syntax of For-Loop

```

for (initialization; condition; increment/decrement)

 {

 // you can perform your code here in a loop

 }

```

#### initialization:

Typically initializes a loop control variable. It's executed once at the beginning of the loop.

#### condition:

It's a boolean expression that determines whether the loop should continue or not. If it evaluates to true, the loop continues; otherwise, the loop terminates.

#### increment/decrement:

Modifies the loop control variable to bring the loop closer to the termination condition. It's executed after each iteration of the loop.

#### Check the examples below 👇

💻**Example :**

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

**Example :**

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

**Example :**

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

**Example :**

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

#### 2. While Loop

While loop is **entry controlled** loop. It is **Pre-Tested** loop. If condition will false it will run zero times.

### While-Loop controling concept

**Syntax :**

```c
while(condition)
{
 //your code here
}
```

#### while:

This keyword is used to indicate the beginning of a `while` loop.

#### condition:

This is an expression that is evaluated before each iteration of the loop. If the condition evaluates to `True`, the loop body is executed. If it evaluates to `False`, the loop terminates, and program control moves to the next statement after the loop.

#### {}: Curly braces

These are used to enclose the block of code that will be executed repeatedly as long as the condition specified in the while statement is `true`. All statements within this block must be enclosed within these braces.

#### Check the examples below 👇

**Example :**

```c
#include <stdio.h>

int main() {

    int i=0;

    while(i<5)
    {
        printf("\n%d",i);

        i++;
    }
    return 0;
}
```

**Output :**
0  
1  
2  
3  
4

#### 3. Do-While Loop

do-while loop is **exit-controlled** loop. It is **Post-Tested** loop. If condition will false it will run ones.

**Syntax :**

```c
do
{

}
while(condition);
```

**Example :**

```c
#include <stdio.h>

int main() {

    int i=0;

    do
    {
        printf("\n%d",i);

        i++;
    }

    while(i<5);

    return 0;
}
```

**Output :**

0  
1  
2  
3  
4
