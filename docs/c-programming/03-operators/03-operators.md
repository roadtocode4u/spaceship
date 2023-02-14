---
title: Operators
description: "Operators"
hide_table_of_contents: true
---

## Operators and Comments in C Programming

**Operators**    
Operators are used to perform operations on variables and values.

**Types of Operators** 

1)  Arithmetic operators (+,-,*,/,%)  
2)  Increment Decrement Operators(++,--)  
3)  Assignment operators (=,+=,-=,*=,/=,%=)  
4)  Relational Operators (<,<=,>,>=,==,!=)  
5)  Logical operators (&&,||,!)  
6)  Bitwise operators (&,<<,>>,^,|,~)

**Arithmetic Operators**

Addition (+)

Adds together two values.

**Example**

```c
#include <stdio.h>

int main() {
    
    int val1=20;
    int val2=30;
    int sum=val1+val2;
    
    printf("%d",sum);
    
    return 0;
}
```

**Output**
>50


Substraction (-)

Subtracts one value from another.

**Example**

```c
#include <stdio.h>

int main() {
    
    int val1=30;
    int val2=20;
    int sum=val1-val2;
    
    printf("%d",sum);
    
    return 0;
}
```
**Output**

>10

Multiplication (*)

Multiplies two values.

**Example**

```c
#include <stdio.h>

int main() {
    
    int val1=20;
    int val2=30;
    int sum=val1*val2;
    
    printf("%d",sum);
    
    return 0;
}
```

**Output**
>600

Division (/)

Divides one value by another.

**Example**

 ```c
 #include <stdio.h>

int main() {
    
    int val1=30;
    int val2=20;
    int sum=val1/val2;
    
    printf("%d",sum);
    
    return 0;
}
 ```

 **Output**
 > 1

 Modulus (%)

 Returns the division remainder

 **Example**

 ```c
 #include <stdio.h>

int main() {
    
    int result=11 % 4;
    
    printf("%d",result);
    
    return 0;
}
 ```
 **Output**

 >3

 ## Increment, Decrement Operator

 **Example**

 ```c
 #include <stdio.h>

int main() {
   
   int count=5;
   
   count=count + 1;
   
    printf("%d",count);
    
    return 0;
}
 ```
 **Output**

 >6

 value Increase

 **Example**

 ```c
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
 **Output**

>5  
>6  
>7

value Decrease

**Example**

```c

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

**Output**

>5  
>4  
>3

**Increment Operator (++)**

Increment Operator (++)
This Operator are used to increase the value of variable.

By Default, the value is incremented by 1.

**Example**

```c
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

**Output**

>5
>6
>7

**Example**

```c
#include <stdio.h>

int main() {
   
   int count=5;
   count =count+2;
    printf("\n%d",count);
    return 0;
}
```

**Output**

>7

Type of Increment Operator
Pre-Increment (++var)
Post-Increment (var++)
**Example**

```c
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

**Output**

>1
>1

**Example**

```c
#include <stdio.h>

int main() {
   
   int val1 = 0;
   
   int result = val1++;
   
   printf("\n%d",result);

   printf("\n%d",val1);
    return 0;
}
```

**Output**

>0
>1


**Example**

```c
#include <stdio.h>

int main() {
   
   int val1 = 0;
   
   int result = ++val1;
   
   printf("\n%d",result);
   
   printf("\n%d",val1);
    return 0;
}
```

**Output**

>1
>1

**Decrement Operator (--)**
This Operator are used to decrease the value of variable.

By Default, the value is Decremented by 1.

**Example**

```c
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

**Output**

>5
>4
>3


**Example**

```c
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

**Output**

>2

Type of Decrement Operator
Pre-Decrement (--var)
Post-Decrement (var--)
**Example**

```c
#include <stdio.h>

int main() {
   
   int val1 = 5;
   
   int result = val1--;
   
   printf("\n%d",result);
   
   printf("\n%d",val1);
    return 0;
}
```

**Output**

>5
>4

**Example**

```c
#include <stdio.h>

int main() {
   
   int val1 = 5;
   
   int result = --val1;
   
   printf("\n%d",result);
   
   printf("\n%d",val1);
    return 0;
}
```

**Output**

>4
>4






