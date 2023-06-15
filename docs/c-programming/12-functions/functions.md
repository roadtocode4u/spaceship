---
title: Functions in C programming
description: "Functions in C programming"
hide_table_of_contents: true
---

### What is Functions?

A function is a reusable code block that performs a specific task. We can call it repeatedly.

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

> Hello Everyone

### Types of function

There are `two` types of function:

1. `Standard library` (inbuilt) functions
2. `User-defined` functions

**User-defined functions**

Functions that are defined by user known as `user-defined function`.User can create and defined one or many functions.

**Example 1 :**

```c
#include <stdio.h>

void hello()
{
    printf("\n Hii Students");
}
int main() {

    hello();

    return 0;
}
```

**Output :**

> Hii Students

**Syntax :**

```c

#include <stdio.h>
//declaration
void hello();

int main() {
    //calling
    hello();

    return 0;
}
//defination
void hello()
{
    printf("\n Hello Everyone");
}
```

**Output :**

> Hello Everyone

**Syntax :**

```c
#include <stdio.h>
//declaration with defination
void hello()
{
    printf("\n Hello Everyone");
}
int main() {
    //calling
    hello();

    return 0;
}
```

**Output :**

> Hello Everyone<br/>

**WAP to calculate square of a number using function**

**Example 2 :**

```c
#include <stdio.h>

void cal_square(int n)
{
    int sq = n * n ;
    printf("\nSquare is %d",sq);
}
int main() {
    cal_square(2);
    return 0;
}
```

**Output :**

> Square is 4

**Example 3 :**

```c

#include <stdio.h>

void cal_square(int n)
{
    int sq = n * n ;
    printf("\nSquare is %d",sq);
}
int main() {
    cal_square(8);

    cal_square(7);
    return 0;
}
```

**Output :**

> Square is 64
> Square is 49

**WAP to calculate area of rectangle using function.**

**Example 4 :**

```c
#include <stdio.h>

void cal_area(int l, int b)
{
    int area = l * b;
    printf("\nArea of Rectangle is: %d",area);
}
int main() {

    cal_area(5, 2);

    return 0;
}
```

**Output :**

> Area of Rectangle is: 10

**Example 5 :**

```c
#include <stdio.h>

void cal_area(int l, int b)
{
    int area = l * b;
    printf("\nArea of Rectangle is: %d",area);
}
int main() {

    cal_area(5, 2);

    cal_area(10, 3);

    return 0;
}
```

**Output :**

> Area of Rectangle is: 10 <br/>
> Area of Rectangle is: 30

**Example 6 :**

```c
#include <stdio.h>

int cal_area(int l, int b)
{
    int area = l * b;

    return area;
}
int main() {

    int res = cal_area(5, 2);

    printf("Result = %d", res);

    return 0;
}
```

**Output :**

> Result = 10

**Inbuilt Math and String Functions**

### Inbuilt Functions

`Inbuilt functions` are those functions are already defined in `c` language.

**Inbuilt Math and String Functions**

`<math.h>` Predefined function of math.h header file.

- ceil()
- floor()
- sqrt()
- pow()
- abs()

**`ceil( )`** function returns nearest integer value which is greater than or equal to the value of floating point.

**Example :**

```c
#include <math.h>
#include <stdio.h>

int main() {
    float num = 50.6;

    float ans = ceil(num);

    printf("%f",ans);
    return 0;
}
```

**Output :**

> 51.000000

**`floor()`** function used to return the closest integer value which is less than or equal to a given number.

**Example :**

```c
#include <math.h>
#include <stdio.h>

int main() {
    float num = 50.6;

    float ans = floor(num);

    printf("%f",ans);
    return 0;
}
```

**Output :**

> 50.000000

**`sqrt()`** function used to calculate the square root of a given number.

**Example :**

```c
#include <math.h>
#include <stdio.h>

int main() {
    int num;
    printf("Enter Number: ");
    scanf("%d", &num);

    int ans = sqrt(num);

    printf("Square Root: %d", ans);
    return 0;
}
```

**Output :**

> Enter Number: 81<br/>
> Square Root: 9 <br/>

**`pow()`** function is used to calculate the power of any given number.

**Example 4 :**

```c
#include <math.h>
#include <stdio.h>

int main() {

    int ans = pow(3, 3);

    printf("%d", ans);
    return 0;
}
```

**Output :**

> 27

**`abs( )`** function returns the absolute value of an integer.The absolute value of a number is always `positive`.

**Example 5 :**

```c
#include <math.h>
#include <stdio.h>

int main() {

   int ans = abs(-20);

    printf("%d", ans);

    return 0;
}
```

**Output :**

> 20

**Example 6 :**

```c
#include <math.h>
#include <stdio.h>

int main() {

   int ans = abs(20);

    printf("%d", ans);

    return 0;
}
```

**Output :**

> 20
