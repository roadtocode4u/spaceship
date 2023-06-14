---
title: Taking Input from User
description: "Taking Input from User"
hide_table_of_contents: true
---

**scanf() function :** `scanf()` is one of the commonly used function to take input from the user, to read the input data from the console.

**Example :**

**1. Write a C program to take input from user and print it.**

**Code :**

```c showLineNumbers="true"
 #include <stdio.h>

 int main() {

    int val;

    printf("Enter value of val:");
    scanf("%d",&val);

    printf("Output is %d",val);

    return 0;
}
```

**⚙️ Output :**

> Enter value of val:10  
> Output is 10

In the above example, `val` is a variable we can store values in variable. `printf()` function is the print the given string message to the console. In this case, it asks the user to enter the value of `val`.
The `scanf()` function is used to read input from the user. `%d` is the format specifier used to read an integer value and `&val` is the address of the variable `val` where the entered value will be stored.
`printf()` is used to display the output to the console. It prints the value of `val` using the format specifier `%d`.

**2. Write a C program to calculate Sum of two numbers.**

**Code :**

```c showLineNumbers="true"
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

     printf("Sum:%d",sum);

    return 0;
}
```

**⚙️ Output :**

> Enter Value of num1 :20  
> Enter Value of num2 :30  
> Sum:50

In the above example, `num1`, `num2` and `sum` is a variable we can store values in a variable.`printf()` function is print the given string message to the console. It asks the user to enter the value of `num1` and `num2`.The `scanf()` function is used to read input from the user. `%d` is the format specifier used to read an integer value `&num1` and `num2` is the address of the variable `num1` and `num2` where the entered value will be stored.`printf()` is used to display the output to the console. It prints the value of `sum` using the format specifier `%d`. Output is Sum : 50.

**3. Write a C program to calculate the sum of two numbers.**

**Code :**

```c showLineNumbers="true"
 #include <stdio.h>

 int main() {
    int num1, num2;

    printf("Enter value of num1 :");
    scanf("%d",&num1);

    printf("Enter value of num1 :");
    scanf("%d",&num2);

    int sum = num1 + num2;
    printf("Sum of num1 and num2 :%d",sum);

    return 0;
}
```

**⚙️ Output :**

> Enter value of num1 : 30  
> Enter value of num1 : 10  
> Sum of num1 and num2 : 40

**4. Write a C program to print input marks of 3 subjects.**

**Code :**

```c showLineNumbers="true"
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
}
```

**⚙️ Output :**

> Enter marks of Marathi :75  
> Enter marks of Hindi :85  
> Enter marks of English :70  
> M=75 H=85 E=70

**5. Write a c program to print input marks of 3 subjects.**

**Code :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {
   int marathi,hindi,english;

   printf("Enter marks of Marathi ,Hindi,and English :");
   scanf("%d%d%d", &marathi,&hindi,&english);


   printf("M=%d H=%d E=%d",marathi,hindi,english);

    return 0;
}
```

**⚙️ Output :**

> Enter marks of Marathi ,Hindi and English :75 85 70
> M=75 H=85 E=70

**6. Write a C program to take input from user and print sum and percentage.**

**Code :**

```c showLineNumbers="true"

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

**⚙️ Output :**

> Enter marks of Marathi ,Hindi,and English :75 85 70  
> Sum=230,Percentage=76 %

**7. Write a C program to calculate Simple Interest.**

**Code :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

    float p,r,t,si;

    printf("Enter Principle,Rate and Time : ");
    scanf("%f%f%f", &p,&r,&t);

    si=(p*r*t)/100;

    printf("Simple Interest :%f",si);
    printf("\nPayable Amount:%f",p+si);

    return 0;
}
```

**⚙️ Output :**

> Enter Principle,Rate and Time : 5000 300 2
> Simple Interest :30000.000000
> Payable Amount :35000.000000

**8. Write a C Program to convert temperature from celsius to fahrenheit**

**Code :**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   float f,c;

   printf("Enter Temperature in Celsius :");
   scanf("%f",&c);

   f=1.8*c+32;

   printf("Temperature in Fahrenheit =%f",f);

    return 0;
}
```

**⚙️ Output :**

> Enter Temperature in Celsius :36
> Temperature in Fahrenheit =96.800003
