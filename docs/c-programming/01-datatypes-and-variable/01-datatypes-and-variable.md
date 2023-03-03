---
title: Datatype and Variable
description: "Datatype and Variable"
hide_table_of_contents: true
---

### String

> Strings is represented as Collection of characters.

### Variable

> Variable is used to store data.

### Datatype

1. **Integers (int)**

> Integers means Stores whole numbers without decimals point.

Example = 1,2,2253,899,44,55...

2. **Character (char)**

> Stores a single character,letter.

💻Example='r','v','s'....

3. **Float (float)**

> float means Stores numbers with decimals point.

💻Example= 15.7,89.0,46.84 ....

### Format Specifiers

There are different format specifiers for each data type.

`%d = int`

`%f = float`

`%c = char`

**Code**

```c
#include <stdio.h>

int main()
 {

   int age=10;

   printf("%d",age);

    return 0;
}
```

**Output**

> 10

**Code**

```c
#include <stdio.h>

int main()
{

   int age;
   age=30;

   printf("%d",age);

    return 0;
}
```

**Output**

> 30

**Code**

```c
 #include <stdio.h>

int main()
{

   int age;
   age=30;
   age=50;

   printf("%d",age);

    return 0;
}
```

**Output**

> 50

**Code**

```c
#include <stdio.h>

int main()
{

   int age;
   age=30;
   printf("%d",age);

   age=50;
   printf("%d",age);

    return 0;
}
```

**Output**

> 3050

**Code**

```c
#include <stdio.h>

int main()
{
    float weight=80.5;

    printf("%f",weight);

    return 0;
}
```

**Output**

> 80.500000

**Code**

```c
#include <stdio.h>

int main()
{
    char alpha='c';

    printf("%c",alpha);

    return 0;
}
```

**Output**

> c

## Rules to Declare Variables and Formatting Output

### Rules of Declare Variables

1. A Variable Name Can contain alphabates (A to Z)(a to z) , digits (0-9),underscore( \_ ).

2. Cannot Start with digit.

3. Cannot use reserved keyword or special character.

4. Length of variable name should be less than 31 character.

### Case Sensitivity

> Text that is sensitive to capitalization of letters. For example, `NAME` ,`name`,`NaMe` are three different.

**Example : Write a program to sum of 2 variable**

**Code**

```c
#include <stdio.h>

int main() {
    int a=10;
    int b=20;
    int c;

    c=a+b;

    printf("%d",c);

    return 0;
}
```

**Output**

> 30

**Code**

```c
#include <stdio.h>

int main() {
    int val1=30;
    int val2=20;
    int sum;

    sum=val1 + val2;

    printf("%d",sum);

    return 0;
}
```

**Output**

> 50

**Code**

```c
#include <stdio.h>

int main() {
    int val1=30, val2=20, sum;

    sum=val1 + val2;

    printf("%d",sum);

    return 0;
}
```

**Output**

> 50

### Formatting Output

**Code**

```c
#include <stdio.h>

int main() {
    int val1=30, val2=20, sum;

    sum=val1 + val2;

    printf(" sum = %d",sum);

    return 0;
}
```

**Output**

> sum = 50

**Code**

```c
#include <stdio.h>

int main() {
    float num = 20.5;

    printf("Number is %f", num);

    return 0;
}
```

**Output**

> Number is 20.500000

**Code**

```c
#include <stdio.h>

int main()
{
    float weight=80.5;

    printf("%f",weight);

    return 0;
}
```

**Output**

> 80.500000

**Code**

```c
#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;
    int c = a + b;

    printf("a=%d b=%d",a,b);

    return 0;
}
```

**Output**

> a=10 b=20

**Code**

```c
#include <stdio.h>

int main() {
    int val1 = 10;
    int val2 = 20;
    int sum = val1 + val2;

    printf("sum of %d and %d is %d",val1,val2,sum);

    return 0;
}
```

**Output**

> sum of 10 and 20 is 30
