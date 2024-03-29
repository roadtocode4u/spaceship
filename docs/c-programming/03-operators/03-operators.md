---
title: Operators
description: "Operators"
hide_table_of_contents: true
---

**Operators :** Operators are used to perform operations on variables and values.

**Types of Operators :**

1. Arithmetic operators (+,-,\*,/,%)
2. Increment Decrement Operators(++,--)
3. Assignment operators (=,+=,-=,\*=,/=,%=)
4. Relational Operators (<,<=,>,>=,==,!=)
5. Logical operators (&&,||,!)
6. Bitwise operators (&,<<,>>,^,|,~)

**Arithmetic Operators :**

- **Addition (+) :** `+` is used to adding two numbers.

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main()
{
    int val1 = 20;
    int val2 = 30;
    int sum = val1 + val2;

    printf("Addition of val1 and val2 is %d",sum);

    return 0;
}
```

**⚙️ Output :**

> Addition of val1 and val2 is 50

- **Substraction (-) :** `-` is used to subtract one value from another value.

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main()
{
    int val1 = 30;
    int val2 = 20;
    int sum = val1 - val2;

    printf("Substraction of val1 and val2 is %d",sum);

    return 0;
}
```

**⚙️ Output :**

> Substraction of val1 and val2 is 10

- **Multiplication (\*) :** `*` is used to multiplies two values.

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int val1=20;
    int val2=30;
    int sum=val1*val2;

    printf("%d",sum);

    return 0;
}
```

**⚙️ Output :**

> 600

- **Division (/) :** Divides one value by another.

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int val1=30;
   int val2=20;
   int sum=val1/val2;

   printf("%d",sum);

   return 0;
}
```

**⚙️ Output :**

> 1

- **Modulus (%) :** Returns the division remainder.

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int result=11 % 4;

   printf("%d",result);

   return 0;
}
```

**⚙️ Output :**

> 3

## Increment, Decrement Operator

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

  int count=5;

  count=count + 1;

   printf("%d",count);

   return 0;
}
```

**⚙️ Output :**

> 6

**In this example value increase by 1**

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

  int count=5;
  //count => 5
  printf("\n%d",count);

  count=count + 1;
  //count => 6
  printf("\n%d",count);

   count=count + 1;
   //count => 7
   printf("\n%d",count);
   return 0;
}
```

**⚙️ Output :**

> 5  
> 6  
> 7

**In this example value decrease by 1**

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int count=5;
   //count => 5
   printf("\n%d",count);

   count=count - 1;
   //count => 4
   printf("\n%d",count);

    count=count - 1;
    //count => 3
    printf("\n%d",count);
    return 0;
}
```

**⚙️ Output :**

> 5  
> 4  
> 3

**Increment Operator (++) :** This Operator are used to increase the value of variable. By default, the value is incremented by 1.

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int count=5;
   //count => 5
   printf("\n%d",count);

   count++;
   //count => 6
   printf("\n%d",count);

    count++;
    //count => 7
    printf("\n%d",count);
    return 0;
}
```

**⚙️ Output :**

> 5

> 6

> 7

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int count=5;
   count =count+2;
    printf("\n%d",count);
    return 0;
}
```

**⚙️ Output :**

> 7

**Type of Increment Operator**

- Pre-Increment (++var)
- Post-Increment (var++)

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int val1 = 0;
   val1++; //Post Increment
   printf("\n%d",val1);


   int val2 = 0;
   ++val2; //Pre Increment
   printf("\n%d",val2);

    return 0;
}
```

**⚙️ Output :**

> 1

> 1

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int val1 = 0;

   int result = val1++;

   printf("\n%d",result);

   printf("\n%d",val1);
    return 0;
}
```

**⚙️ Output :**

> 0

> 1

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int val1 = 0;

   int result = ++val1;

   printf("\n%d",result);

   printf("\n%d",val1);
    return 0;
}
```

**⚙️ Output :**

> 1

> 1

**Decrement Operator (--) :**This Operator are used to decrease the value of variable. By default, the value is Decremented by 1.

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int count=5;
   //count => 5
   printf("\n%d",count);

   count--;
   //count => 4
   printf("\n%d",count);

    count--;
    //count => 3
    printf("\n%d",count);
    return 0;
}
```

**⚙️ Output :**

> 5

> 4

> 3

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int count=5;
   count--;
   count--;
   count--;
    printf("\n%d",count);
    return 0;
}
```

**⚙️ Output :**

> 2

**Type of Decrement Operator**

- Pre-Decrement (--var)
- Post-Decrement (var--)

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int val1 = 5;

   int result = val1--;

   printf("\n%d",result);

   printf("\n%d",val1);
    return 0;
}
```

**⚙️ Output :**

> 5

> 4

**Example**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int val1 = 5;

   int result = --val1;

   printf("\n%d",result);

   printf("\n%d",val1);
    return 0;
}
```

**⚙️ Output :**

> 4

> 4

## Assignment Operators, Comparison Operators and Ternary Operator in C Programming

**Assignment operators :** Assignment operators applied to assign the result of an expression to a variable.

**Assign (=)**

**Example :**

```c showLineNumbers="true"
 #include <stdio.h>

int main() {

    int a = 10;

    printf("%d",a);

    return 0;
}
```

**⚙️ Output :**

> 10

**Add then assign (+=)**

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a =5;

    a += 3; //a = a + 3;

    printf("%d",a);

    return 0;
}
```

**Output :**

> 8

**Substract then assign (-=)**

**Example:**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a =5;

    a -= 3; //a = a - 3;

    printf("%d",a);

    return 0;
}
```

**⚙️ Output :**

> 2

**Multiplies then assign (\*=)**

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a =5;

    a *= 3; //a = a * 3;

    printf("%d",a);

    return 0;
}
```

**⚙️ Output :**

> 15

**Divides then assign (/=)**

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a =10;

    a /= 2; //a = a / 2;

    printf("%d",a);

    return 0;
}
```

**⚙️ Output :**

> 5

**Modulus then assign (%=)**

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a =7;

    a %= 2; //a = a % 2;

    printf("%d",a);

    return 0;
}
```

**⚙️ Output :**

> 1

**Comparison Operators**

**Equal to (==) :** Equal to are used to compare to object.

**Example :**

// if value are not equal then print 0 means false.

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 5;
    int b = 10;

    int ans = (a==b);

    printf("%d",ans);

    return 0;
}
```

**⚙️ Output :**

> 0

**Example :**

// if value are equal then print 1 means true.

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 10;
    int b = 10;

    int ans = (a==b);

    printf("%d",ans);

    return 0;
}
```

**⚙️ Output :**

> 1

**Greater than (>)**

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 5;
    int b = 10;

    int ans = (a>b);

    printf("%d",ans);

    return 0;
}
```

**⚙️ Output :**

> 0

**Example :**

//a is greater than b then true.

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 5;
    int b = 2;

    int ans = (a>b);

    printf("%d",ans);

    return 0;
}
```

**Output :**

> 1

**Less than (<)**

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 20;
    int b = 10;

    int ans = (a<b);

    printf("%d",ans);

    return 0;
}
```

**⚙️ Output :**

> 0

**Example :**

// a is less than b then true .

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 10;
    int b = 20;

    int ans = (a,b);

    printf("%d",ans);

    return 0;
}
```

**⚙️ Output :**

> 1

**Less than or equal to (<=)**

**Example :**

// a is less than or equal to b then true otherwise false.

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 100;
    int b = 10;

    int ans = (a<=b);

    printf("%d",ans);

    return 0;
}
```

**⚙️ Output :**

> 0

**Example :**

// a is less than or equal to b then true.

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 10;
    int b = 10;

    int ans = (a<=b);

    printf("%d",ans);

    return 0;
}
```

**⚙️ Output :**

> 1

**greater than or equal to (>=)**

**Example :**

// a is greater than or equal to b then true otherwise false.

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 1;
    int b = 10;

    int ans = (a<=b);

    printf("%d",ans);

    return 0;
}
```

**⚙️ Output :**

> 0

**Example :**

// a is greater than or equal to b then true.

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 100;
    int b = 10;

    int ans = (a<=b);

    printf("%d",ans);

    return 0;
}
```

**⚙️ Output :**

> 1

**not equal to (!=)**

**Example :**

//a is not equal to b then true otherwise false.

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 10;
    int b = 10;

    int ans = (a!=b);

    printf("%d",ans);

    return 0;
}
```

**⚙️ Output :**

> 0

**Example :**

//a is not equal to b then true.

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 20;
    int b = 10;

    int ans = (a!=b);

    printf("%d",ans);

    return 0;
}
```

**⚙️ Output :**

> 1

**Ternary Operator**

**Syntax :**

**`(condition)?True:False`**

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int a = 100;
    int b = 10;

    int ans = (a>b?a:b);

    printf("Ans = %d",ans);

    return 0;
}
```

**⚙️ Output :**

> Ans = 100

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    int num;
    printf("Enter Number :");
    scanf("%d",&num);

    int ans = (num%2==0)?printf("Even"):printf("odd");

    return 0;
}
```

**⚙️ Output :**

> Even

## Logical Operator

**Logical operator are used to chaining condition.**

- Logical AND (&&)
- Logical OR (||)
- Logical Not (!)

**Logical AND (&&) :** If both conditions are true then it return result true, otherwise it returns false.

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int maths = 80;
   int english = 70;

   int res = (maths>80) && (english>80);

   printf("Result: %d", res);
   return 0;
}
```

**⚙️ Output :**

> Result : 1

**Logical OR (||) :** If both conditions are false it returns their result false, otherwisw its returns their result true.

**Example :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int maths = 80;
   int english = 70;

   int res = (maths>80) || (english>80);

   printf("Result : %d", res);
   return 0;
}
```

**⚙️ Output :**

> Result : 1

**Logical Not (!) :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int maths = 80;
   int english = 70;

   int res = !((maths>80) && (english>80));

   printf("Result : %d", res);
   return 0;
}
```

**⚙️ Output :**

> Result : 0
