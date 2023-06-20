---
title: Conditional Statements
description: "Conditional Statements"
hide_table_of_contents: true
---

## Conditional Statements in C :

1. if statement
2. if-else statement
3. if-else-ladder statement

### if statement :

The `if` statement allows you to specify a block of code to be executed if a certain condition is `true`.

**Syntax :**

```c showLineNumbers="true"
if (condition)
{
  // block of code to be executed if the condition is true
}
```

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a=5;

    if(a==5)
    {
        printf("Both are Equal");
    }

    return 0;
}
```

**Output :**

> Both are Equal

**Example:**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a=5;

    if(a==5)
    {
        printf("Both are Equal");
    }

    printf("\n This is a normal Line");

    return 0;
}
```

**Output :**

> Both are Equal  
> This is a normal Line

**Example:**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a=10;

    if(a%2==0)
    {
        printf("Given number is Even ");
    }

    return 0;
}
```

**Output :**

> Given number is Even

### if-else statement

The `if-else` statement allows you to specify two blocks of code: one to be executed if a condition is `true`, and another to be executed if the condition is `false`.

**Syntax :**

```c showLineNumbers="true"
if (condition)
{
  //block of code to be executed the condition is true;
}

else
{

  //block of code to be executed the condition is false;

}
```

**Example:** WAP to find out your age is eligible for voting or not.

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int age;

    printf("Enter your age :");
    scanf("%d",&age);

    if(age>=18)
    {
        printf("Your are eligible for voting ");
    }

    else
    {
        printf("Your are not eligible for voting");
    }
    return 0;
}
```

**Output :**

> Enter your age :18  
> Your are eligible for voting

### if-else-ladder statement

The `if-else-ladder` checks conditions in a sequential manner. If the first condition gets `true` it will not check further conditions. If none of the condition gets `true` it will run the else block.

**syntax**

```c showLineNumbers="true"
   if (condition)
   {
    // Statement
   }
   else if (condition)
   {
    // Statement
   }
   else if (condition)
   {
    // Statement
   }
   else{

   }
```

**Example :**

```c
#include <stdio.h>

int main() {
    int number;

    printf("Enter a number: ");
    scanf("%d", &number);

    if (number > 0) {
        printf("The number is positive.\n");
    } else if (number < 0) {
        printf("The number is negative.\n");
    } else {
        printf("The number is zero.\n");
    }

    return 0;
}
```

**Output :**

> Enter a number: 12 <br/>
> The number is positive.
