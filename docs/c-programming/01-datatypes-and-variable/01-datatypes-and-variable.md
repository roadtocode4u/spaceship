---
title: Datatype and Variable
description: "Datatype and Variable"
hide_table_of_contents: true
---

### What is Datatypes?

Datatype is a type of information which can stored in variable. There are `three` primitive datatypes in c language. Let's discuss,

1. `Integer (int)`

Integer means stores whole numbers without decimal point. The size of the `int` datatype is `4 byte`.

💻**Example :** 1, 2, 2253, 899, 44, 55...

2. `Character (char)`

Character is stored in a single letter. The size of the `char` datatype is `1 byte`.

💻**Example :** 'r','v','s'....

3. `Float (float)`

Float means stores numbers with decimal points. The size of the `float` datatype is `4 bytes`.

💻**Example :** 15.7,89.0,46.84 ....

### Format Specifiers

There are different format specifiers for each datatype.

`%d = int`

`%f = float`

`%c = char`

**Code :**

```c
#include <stdio.h>
int main()
 {
   int age=10;
   printf("%d",age);
   return 0;
}
```

**Output :**

> 10

**Example explanation :**

In the above example, we import a standard library file `#include <stdio.h>`. The `main()` function is an entry point of the program that starts the execution of the program. We have declared a variable `age` that initialize with value `10` and used `int` datatype. Using the `printf` function, we display the output with format specifier `%d`.

**Code :**

```c
#include <stdio.h>

int main()
{

   int age;
   age = 30;

   printf("%d",age);

    return 0;
}
```

**Output :**

> 30

**Example explanation :**

In the above example, we import a standard library file `#include <stdio.h>`. The `main()` function is an entry point of the program that starts the execution of the program. We have declared a variable `age` that initialize with value `30` and used `int` datatype. Using the `printf` function, we display the output with format specifier `%d`.

**Code :**

```c
 #include <stdio.h>

int main()
{

   int age;
   age = 30;
   age = 50;

   printf("%d",age);

    return 0;
}
```

**Output :**

> 50

**Example explanation :**

In the above example, we import a standard library file `#include <stdio.h>`. The `main()` function is an entry point of the program that starts the execution of the program. We have declared a variable `age` that initialize with value `30` and used `int` datatype and again we have declared a variable `age` that initialize with value `50` and used `int` datatype. Using the `printf` function, we display the output with format specifier `%d`. In this case print sencond value of age because 2nd time we initialize `50` value.

**Code :**

```c
#include <stdio.h>

int main()
{

   int age;
   age = 30;
   printf("%d",age);

   age = 50;
   printf("\n %d",age);

    return 0;
}
```

**Output :**

> 30 <br/> 50

**Example explanation :**

In the above example, we import a standard library file `#include <stdio.h>`. The `main()` function is an entry point of the program that starts the execution of the program. We have declared `age` variable and datatype of that variable is `int`. We have declared a variable `age` that initialize with value `30`. Using the `printf` function, we display the output with format specifier `%d`. Again we have declared a variable `age` that initialize with value `50`. Using the `printf` function, we display the output with format specifier `%d`.

**Code :**

```c
#include <stdio.h>

int main()
{
    float weight=80.5;

    printf("%f",weight);

    return 0;
}
```

**Output :**

> 80.500000

**Example explanaion :**

In the above example, we import a standard library file `#include <stdio.h>`. The `main()` function is an entry point of the program that starts the execution of the program. We have declared a variable `weight` that initialize with value `80.5` and used `float` datatype. Using the `printf` function, we display the output with format specifier `%f`.

**Code :**

```c
#include <stdio.h>

int main()
{
    char alpha='c';

    printf("%c",alpha);

    return 0;
}
```

**Output :**

> c

**Example explanation :**

In the above example, we import a standard library file `#include <stdio.h>`. The `main()` function is an entry point of the program that starts the execution of the program. we have declared a variable `alpha` that initialize with value `c` and used `char` datatype. Using the `printf` function, we display the output with format specifier `%c`.

### Variable

`Variable` is a container that is used to store data.

### Rules of Declare Variables

1. A Variable name can contain alphabates `(A to Z)(a to z)`, digits `(0-9)`, underscore`( _ )`.

2. Variable name cannot start with digit.

3. Variable name cannot use reserved keyword or special character.

4. Length of variable name should be less than 31 character.

### How to declare variable?

In a c language, we can declare variables using `datatype`. The syntax of variable declaration is
`datatype variablename;`

**Example :**

`int age;`

`char gender;`

`float weight;`

:::tip
char, int and float these datatypes are used to declare the variable.
:::

### Case Sensitivity

Text that is sensitive to capitalization of letters.

**For example:** `NAME` ,`name`,`NaMe` are three different.

**Example : Write a program to sum of 2 variable.**

**Code :**

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

**Output :**

> 30

**Code :**

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

**Output :**

> 50

**Code :**

```c
#include <stdio.h>

int main() {
    int val1=30, val2=20, sum;

    sum=val1 + val2;

    printf("%d",sum);

    return 0;
}
```

**Output :**

> 50

### Formatting Output

**Code :**

```c
#include <stdio.h>

int main()
{
    int val1 = 30, val2 = 20, sum;

    sum = val1 + val2;

    printf("Sum = %d",sum);

    return 0;
}
```

**Output :**

> Sum = 50

**Code :**

```c
#include <stdio.h>

int main()
 {
    float num = 20.5;

    printf("Number is %f", num);

    return 0;
}
```

**Output :**

> Number is 20.500000

**Code :**

```c
#include <stdio.h>

int main()
{
    float weight = 80.5;

    printf("Weight is %f",weight);

    return 0;
}
```

**Output :**

> Weight is 80.500000

**Code :**

```c
#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;
    int c = a + b;

    printf("a = %d b = %d",a,b);

    return 0;
}
```

**Output :**

> a = 10 b = 20

**Code :**

```c showLineNumbers="true"
#include <stdio.h>
int main()
{
    int val1 = 10;
    int val2 = 20;

    int sum = val1 + val2;

    printf("Sum of %d and %d is %d",val1,val2,sum);
    return 0;
}
```

**Output :**

> Sum of 10 and 20 is 30

**Example Explanation :**

In the above example, In the 3rd line we create one variable and name of that variable is `val1`. In this variable, we store the value `10`, which datatype is `int`. In the 4th line we create a second variable and name of that variable is `val2`. In this variable, we store the value `20`, which datatype is also `int`. In the 5th line we create a third and name of that variable is `sum`. In this line we take a addition of `val1` and `val2`. In the 6th line we used `printf()` function for print the sum on screen.
