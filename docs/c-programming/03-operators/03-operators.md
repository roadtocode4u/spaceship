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

## Assignment Operators, Comparison Operators and Ternary Operator in C Programming


**Assignment operators**

Assignment operators applied to assign the result of an expression to a variable.

**Assign (=)**

**Example:**

```c
 #include <stdio.h>

int main() {
    
    int a = 10;
    
    printf("%d",a);
    
    return 0;
}
```
**Output :**
>10


**Add then assign (+=)**  

**Example:**

```c
#include <stdio.h>

int main() {
    
    int a =5;
    
    a += 3; //a = a + 3;
    
    printf("%d",a);
    
    return 0;
}
```


**Output :**

>8


**Substract then assign (-=)**

**Example:**

```c
#include <stdio.h>

int main() {
    
    int a =5;
    
    a -= 3; //a = a - 3;
    
    printf("%d",a);
    
    return 0;
}
```

**Output :**

>2

**Multiplies then assign (*=)**

**Example:**

```c
#include <stdio.h>

int main() {
    
    int a =5;
    
    a *= 3; //a = a * 3;
    
    printf("%d",a);
    
    return 0;
}
```
**Output :**

>15

**Divides then assign(/=)**

**Example:**

```c
#include <stdio.h>

int main() {
    
    int a =10;
    
    a /= 2; //a = a / 2;
    
    printf("%d",a);
    
    return 0;
}
```

**Output :**

>5

**Modulus then assign(%=)**

**Example:**

```c
#include <stdio.h>

int main() {
    
    int a =7;
    
    a %= 2; //a = a % 2;
    
    printf("%d",a);
    
    return 0;
}
```

**Output :**

>1

**Comparison Operators**

**Equal to (==)**
Equal to are used to compare to object.

**Example:**

// if value are not equal then print 0 means false.

```c
#include <stdio.h>

int main() {
    
    int a = 5;
    int b = 10;
    
    int ans = (a==b);
    
    printf("%d",ans);
    
    return 0;
}
```

**Output :**

>0

**Example:**

// if value are equal then print 1 means true.

```c
#include <stdio.h>

int main() {
    
    int a = 10;
    int b = 10;
    
    int ans = (a==b);
    
    printf("%d",ans);
    
    return 0;
}
```

**Output :**

>1

**Greater than (>)**

**Example:**

```c
#include <stdio.h>

int main() {
    
    int a = 5;
    int b = 10;
    
    int ans = (a>b);
    
    printf("%d",ans);
    
    return 0;
}
```

**Output :**

>0

**Example:**

//a is greater than b then true.

```c
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

>1

**Less than (<)**

**Example:**

```c
#include <stdio.h>

int main() {
    
    int a = 20;
    int b = 10;
    
    int ans = (a<b);
    
    printf("%d",ans);
    
    return 0;
}
```

**Output :**

>0

**Example:**

// a is less than b then true .

```c
#include <stdio.h>

int main() {
    
    int a = 10;
    int b = 20;
    
    int ans = (a,b);
    
    printf("%d",ans);
    
    return 0;
}
```

**Output :**

>1

**Less than or equal to (<=)**

**Example:**

// a is less than or equal to b then true otherwise false.

```c
#include <stdio.h>

int main() {
    
    int a = 100;
    int b = 10;
    
    int ans = (a<=b);
    
    printf("%d",ans);
    
    return 0;
}
```

**Output :**

>0

**Example:**

// a is less than or equal to b then true.

```c
#include <stdio.h>

int main() {
    
    int a = 10;
    int b = 10;
    
    int ans = (a<=b);
    
    printf("%d",ans);
    
    return 0;
}
```

**Output :**

>1

**greater than or equal to (>=)**

**Example:**

// a is greater  than or equal to b then true otherwise false.

```c
#include <stdio.h>

int main() {
    
    int a = 1;
    int b = 10;
    
    int ans = (a<=b);
    
    printf("%d",ans);
    
    return 0;
}
```

**Output :**

>0

**Example:**

// a is greater than or equal to b then true.

```c
#include <stdio.h>

int main() {
    
    int a = 100;
    int b = 10;
    
    int ans = (a<=b);
    
    printf("%d",ans);
    
    return 0;
}
```

**Output :**

>1

**not equal to (!=)**

**Example:**

//a is not equal to b then true otherwise false.

```c
#include <stdio.h>

int main() {
    
    int a = 10;
    int b = 10;
    
    int ans = (a!=b);
    
    printf("%d",ans);
    
    return 0;
}
```

**Output :**

>0

**Example:**

//a is not equal to b then true.

```c
#include <stdio.h>

int main() {
    
    int a = 20;
    int b = 10;
    
    int ans = (a!=b);
    
    printf("%d",ans);
    
    return 0;
}
```

**Output :**

>1

**Ternary Operator**

**Syntax :**

(condition)?True:False

**Example:**

```c
#include <stdio.h>

int main() {
    
    int a = 100;
    int b = 10;
    
    int ans = (a>b?a:b);
    
    printf("%d",ans);
    
    return 0;
}
```

**Output :**

>100

**Example:**

```c
#include <stdio.h>

int main() {
    
    int num;
    printf("Enter Number :");
    scanf("%d",&num);
    
    int ans = (num%2==0)?printf("Even"):printf("odd");
    
    return 0;
}
```

**Output :**

>Even


## Logical Operators C Programming

**Logical Operators**

Logical operator are used to chaining condition.

Logical AND (&&)
Logical OR (||)
Logical Not (!)

**Logical AND (&&)**

Result True, if both operand condition are true otherwise false.

**Example:** WAP to find eligibility for admission using if else statement

```c
#include <stdio.h>

int main() {
 int physics=95;
 int maths=98;
 
   if (physics>=80 && maths>=80)
 {
     printf("Admission Granted ...");
 }
 else
 {
     printf("Admission Rejected ...");
 }
    
    return 0;
}
```

**Output :**

>Admission Granted ..


**Example:** WAP to find eligibility for admission using if else statement

```c
#include <stdio.h>

int main() {
 int physics=50;
 int maths=98;
 
   if (physics>=80 && maths>=80)
 {
     printf("Admission Granted ...");
 }
 else
 {
     printf("Admission Rejected ...");
 }
    
    return 0;
}
```

**Output :**

>Admission Rejected ...

**Example:** WAP to find eligibility for admission using if else statement

```c
#include <stdio.h>

int main() {
 int physics=95;
 int maths=45;
 
   if (physics>=80 && maths>=80)
 {
     printf("Admission Granted ...");
 }
 else
 {
     printf("Admission Rejected ...");
 }
    
    return 0;
}
```

**Output :**

>Admission Rejected ...


**Logical OR (||)**

Result True if both operand condition are true and one of the condition is true otherwise result False.

**Example:**

```c
#include <stdio.h>

int main()
{
 int physics=90;
 int maths=98;
 
   if (physics>=80 || maths>=80)
 {
     printf("Admission Granted ...");
 }
 else
 {
     printf("Admission Rejected ...");
 }
    
    return 0;
}
```

**Output :**

>Admission Granted ...


**Example:** WAP to find eligibility for admission using if else statement

```c
#include <stdio.h>

int main()
{
 int physics=0;
 int maths=98;
 
   if (physics>=80 || maths>=80)
 {
     printf("Admission Granted ...");
 }
 else
 {
     printf("Admission Rejected ...");
 }
    
    return 0;
}
```

**Output :**

>Admission Granted ...


**Example:** WAP to find eligibility for admission using if else statement

```c
#include <stdio.h>

int main()
{
 int physics=90;
 int maths=0;
 
   if (physics>=80 || maths>=80)
 {
     printf("Admission Granted ...");
 }
 else
 {
     printf("Admission Rejected ...");
 }
    
    return 0;
}
```

**Output :**

>Admission Granted ...

**Example:** WAP to find eligibility for admission using if else statement

```c
#include <stdio.h>

int main()
{
 int physics=0;
 int maths=0;
 
   if (physics>=80 || maths>=80)
 {
     printf("Admission Granted ...");
 }
 else
 {
     printf("Admission Rejected ...");
 }
    
    return 0;
}
```

**Output :**

>Admission Rejected ...


**Logical Not (!)**

**Example:** WAP to find result of given subject

```c
#include <stdio.h>

int main() 
{
    
    int physics=70;
   
    
    int result=!(physics>=80);
    printf("Result=%d",result);
    
    return 0;
}
```

**Output :**

>Result=1

## If-Else Ladder in C Programming

**If-Else Ladder**

**Syntax :**

```c
if(condition1)
{
   //block of statement
}
else if(condition 2)
{
  //block of statement
}
else if(condition 3)
{
  //block of statement
}
else
{
  //block of statement  
}
```

**Example:** WAP to find out grade of given percentage using if else ladder

```c
#include <stdio.h>

int main() {
  
   int marks = 95;
   
   if (marks>95)
   {
       printf("Grade A ");
   }
   else if(marks>80)
   {
       printf("Grade B");
   }
   else if(marks>70)
   {
       printf("Grade c");
   }
   else
   {
       printf("FAIl");
   }

    return 0;
}
```

**Output :**

>Grade B


**Example:** WAP to find out grade of given percentage using if else ladder

```c
#include <stdio.h>

int main() {
  
   int marks = 61;
   
   if (marks>60)
   {
       printf("Grade D");
   }
   else if(marks>70)
   {
       printf("Grade C");
   }
   else if(marks>80)
   {
       printf("Grade B");
   }
   else if(marks>90)
   {
       printf("Grade A");
   }
   else
   {
       printf("FAIl");
   }

    return 0;
}
```

**Output :**

>Grade D


**Example:** WAP to find out grade of given percentage using if else ladder

```c
#include <stdio.h>

int main() {
  
   int marks = 95;
   
   if (marks>90 && marks<=100)
   {
       printf("Grade A ");
   }
   else if(marks>80 && marks<=90)
   {
       printf("Grade B");
   }
   else if(marks>70 && marks<=80)
   {
       printf("Grade B");
   }
   else if (marks>60 && marks<=70)
   {
       printf(" Grade D")
   }
   else
   {
       printf("FAIl");
   }

    return 0;
}
```

**Output :**

>Grade A

## Nested-If in C Programming

**Nested-If**

Nested If in C Programming is placing If Statement inside another IF Statement. Nested If in C is helpful if you want to check the condition inside a condition.

**Syntax :**

```c
if(condition 1)
{
   if(condition 2) {
      //Statement block Executes when the boolean test expression two is true.
   }
}
else
{
    //else statement block
}
```
**💻Example:** WAP to give 

```c
#include <stdio.h>

int main() {
    int hsc=80;
    int jee=130;
    
    if(hsc>=60)
    {
        printf("You cleared HSC");
        
        if(jee>=120)
        {
            printf("\nYou cleared JEE");
        }
        else
        {
            printf("\n You did not cleared JEE");
        }
    }
    else
    {
        printf("You did not cleared HSC");
    }
    
    return 0;
}
```

 **Output :**

>You cleared HSC  
>You cleared JEE


**Example:**

```c
#include <stdio.h>

int main() {
    int a,b,c;
    printf("Enter the values of a,b,c");
    scanf("%d%d%d",&a,&b,&c);
    
    if(a>b)
    {
        if(a>c)
        {
            printf("%d is greatest",a);
        }
        else
        {
            printf("%d is greatest",c);
        }
    }
    else
    {
       if(b>c)
        {
            printf("%d is greatest",b);
        }
        else
        {
            printf("%d is greatest",c);
        }
    }
    
    return 0;
}
```

**Output :**

>Enter the values of a,b,c 300 200 100  
>300 200 100  
>300 is greatest


**Example:**

```c
#include <stdio.h>

int main() {
    int a,b,c;
    printf("Enter the values of a,b,c");
    scanf("%d%d%d",&a,&b,&c);
    
    if(a>b && a>c)
    {
        printf("%d is greatest",a);
    }
    else if(b>a && b>c )
        {
            printf("%d is greatest",b);
        }
    
    else
        {
            printf("%d is greatest",c);
        }
    return 0;
}
```

**Output :**

>Enter the values of a,b,c 20 10 30  
>20 10 30  
>30 is greatest

