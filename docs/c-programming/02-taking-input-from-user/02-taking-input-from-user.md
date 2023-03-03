---
title: Taking Input from User
description: "Taking Input from User"
hide_table_of_contents: true
---

**scanf() function**

> scanf() is one of the commonly used function to take input from the user, to read the input data from the console.

**Example : write a c program to take input from user and print it.**

**code**

```c
 #include <stdio.h>

 int main() {

    int val;

    printf("Enter value of val:");
    scanf("%d",&val);

    printf("output is %d",val);

    return 0;
}
```

**Output :**

> Enter value of val:10  
> output is 10

**Write a C program to calculate Sum of two numbers.**

**code**

```c
 #include <stdio.h>

 int main() {

     int num1;
     int num2;
     int sum;

     printf("Enter Value of num1 :");
     scanf("%d",&num1);

     printf("Enter Value of num2 :");
     scanf("%d",&num2);

     sum = num1 + num2;

     printf("sum:%d",sum);

    return 0;
}
```

**Output :**

> Enter Value of num1 :20  
> Enter Value of num2 :30  
> sum:50

## Taking input from user

**Write a C program to calculate the sum of two numbers.**

**code**

```c
 #include <stdio.h>

 int main() {
    int num1, num2;

    printf("Enter value of num1 :");
    scanf("%d",&num1);

    printf("Enter value of num1 :");
    scanf("%d",&num2);

    int sum = num1 + num2;
    printf("sum of num1 and num2 =%d",sum);

    return 0;
}
```

**Output :**

> Enter value of num1 :30  
> Enter value of num1 :10  
> sum of num1 and num2 =40

**Write a C program to print input marks of 3 subjects**

**code**

```c
#include <stdio.h>

int main() {
   int marathi,hindi,english;

   printf("Enter marks of Marathi :");
   scanf("%d", &marathi);

    printf("Enter marks of Hindi :");
   scanf("%d", &hindi);

    printf("Enter marks of English :");
   scanf("%d", &english);

   printf("M=%d H=%d E=%d",marathi,hindi,english);

    return 0;
```

**Output :**

> Enter marks of Marathi :75  
> Enter marks of Hindi :85  
> Enter marks of English :70  
> M=75 H=85 E=70

**write a c program to print input marks of 3 subjects**

**code**

```c
#include <stdio.h>

int main() {
   int marathi,hindi,english;

   printf("Enter marks of Marathi ,Hindi,and English :");
   scanf("%d%d%d", &marathi,&hindi,&english);


   printf("M=%d H=%d E=%d",marathi,hindi,english);

    return 0;
}
```

**Output :**

> Enter marks of Marathi ,Hindi,and English :75 85 70
> M=75 H=85 E=70

**Write a C program to take input from user and print sum and percentage**

**code**

```c

#include <stdio.h>

int main() {
   int marathi,hindi,english;

   printf("Enter marks of Marathi ,Hindi,and English :");
   scanf("%d%d%d", &marathi,&hindi,&english);

   int sum = (marathi + hindi + english );

   int per =sum/3;
   char p ='%';

   printf("Sum=%d,Percentage=%d %c",sum,per,p);

    return 0;
}
```

**Output :**

> Enter marks of Marathi ,Hindi,and English :75 85 70  
> Sum=230,Percentage=76 %

**Write a C program to calculate Simple Interest**

**code**

```c
#include <stdio.h>

int main() {

    float p,r,t,si;

    printf("Enter Principle,Rate and Time:");
    scanf("%f%f%f", &p,&r,&t);

    si=(p*r*t)/100;

    printf("Simple Interest :%f",si);
    printf("\nPayable Amount:%f",p+si);

    return 0;
}
```

**Output :**

> Enter Principle,Rate and Time:5000 300 2
> Simple Interest :30000.000000
> Payable Amount:35000.000000

**Write a C Program to convert temperature from celsius to fahrenheit**

**code**

```c
#include <stdio.h>

int main() {

   float f,c;

   printf("Enter Temperature in Celsius :");
   scanf("%f",&c);

   f=1.8*c+32;

   printf(" Temperature in Fahrenheit =%f",f);

    return 0;
}
```

**Output :**

> Enter Temperature in Celsius :36
> Temperature in Fahrenheit =96.800003
