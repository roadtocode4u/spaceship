---
title: Pointer Variable in C programming
description: "Pointer Variable in C programming"
hide_table_of_contents: true
---

### What is Pointer?

A Pointer is a special type of variables which can store address of other variable .

### Difference between Normal Variable and Pointer Variable

A Normal Variable cannot store address of other variable whereas a Pointer variable can store address of other variable .

**Syntax**

```c
 ` datatype *pointerName;`
```

**Example**

```c showLineNumbers="true"
#include <stdio.h>

int main() {

   int number = 10 ;
   int *pointer = &number ;

    printf("Value of number: %p\n", number);
    printf("Value of pointer: %p\n", *pointer);

    printf("Value of pointer: %d\n", *pointer);

    return 0;
}
```

**Output :**

Value of number: 0xa  
Value of pointer: 0xa  
Value of pointer: 10

### Explaination of code

`Line 3` We start out program from here

`Line 5` We create a variable called `"number"` and put the value `10` inside it.

`Line 6` We create a pointer variable called `"pointer"` by using dereference operator to it (`*`) , which stores the address of `"number"` variable.

`Line 8` Here, we print the address stored in the `"number"` variable.

`Line 9` Here, we print the address stored in the `"pointer"` variable.

`Line 11` Now here as we used `Dereference operator` and it stores the address of assigned variable , this finds the address and print the value which is stored at that specific address .

`Line 13` Code ends now
