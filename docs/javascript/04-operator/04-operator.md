---
title: Operators
description: "Operators"
hide_table_of_contents: true
---

# Operators in Javascript

Operators are used to perform certain operations on one or more values or variables.

**Some common types of operators include:**

1. Arithmetic operators (+, -, \*, /)
2. Assignment operators (=, +=, -=, \*=, /=)
3. Increment & Decrement operator 

### Arithmetic Operators

Arithmetic operators perform basic mathematical computations on values.

**1. Addition Operator (+)**

The addition operator (`+`) is used to add two numbers together.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const a = 10;
      const b = 20;
      const result = a + b;
      document.write(result);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> 30

This code defines three variable : `a` is assigned the value `10`, `b` is assigned the value `20`, and `result` is assigned the value of the sum of `a` and `b`, which is `30`.

The document.write() method is then used to output the value of `result` to the document, which will display as the number `30` in the rendered HTML.

**2. Subtraction Operator (-)**

The subtraction operator (-) subtracts one number from another.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const a = 10;
      const b = 20;
      const result = a - b;
      document.write(result);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> -10

This code defines three variable : `a` is assigned the value `10`, `b` is assigned the value `20`, and `result` is assigned the value of the subtract of `a` and `b`, which is `-10`.

The document.write() method is then used to output the value of `result` to the document, which will display as the number `-10` in the rendered HTML.

**3. Multiplication Operator**

The multiplication operator (`*`) multiplies two numbers.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const a = 8;
      const b = 5;
      const result = a * b;
      document.write(result);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> 40

This code defines three variable : `a` is assigned the value `8`, `b` is assigned the value `5`, and `result` is assigned the value of the multiplication of `a` and `b`, which is `40`.

The document.write() method is then used to output the value of `result` to the document, which will display as the number `40` in the rendered HTML.

**4. Division Operator (/)**

The division operator (`/`) divides one number by another.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const a = 8;
      const b = 5;
      const result = a / b;
      document.write(result);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> 1.6

This code defines three variable : `a` is assigned the value `8`, `b` is assigned the value `5`, and `result` is assigned the value of the division of `a` and `b`, which is `1.6`.

The document.write() method is then used to output the value of `result` to the document, which will display as the number `1.6` in the rendered HTML.

**5. Modulus Operator (%)**

The modulus operator (`%`) returns the remainder of a division operation.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const a = 10;
      const b = 3;
      const result = a % b;
      document.write(result);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> 1

This code calculates the remainder of dividing the value of `a` by the value of `b` using the modulus operator `%`. In this case, `a` is assigned value of `10` and `b` is assigned value of `3`. The result of the operation is assigned to a variable named `result`. Finally, the value of result is outputted to the browser using the `document.write` function.

The output of this code snippet will be `1`. This is because `10` can be divided by `3` three times with a remainder of `1`. Therefore, the value of result will be `1`.

### Assignment Operators

Assignment operators are used to assign values to variables.

**1. equals to (=)**

The equals to operator (`=`) assigns a value to a variable.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const result = 50;
      document.write(result);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> 15

This code declare a variable named `result` using the `let` keyword and assigns it a value of `50`. The `document.write` method is then used to output the value of the `result` variable.

When this code is executed, it will output the value `50` to the web page.

It's important to note that the `let` keyword is used to declare a variable that can be reassigned later in the code. This means that the value of the `result` variable can be changed later in the code if needed.

**2. plus equals to (+=)**

The plus equals to operator (`+=`) adds a value to the current value of a variable.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let balance = 500;
      document.write("Current Balance :" + balance);

      balance += 20;

      document.write("<br/> New Balance:" + balance);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> Current Balance :500 <br/>
> New Balance:520

**3. minus equals to (-=)**

The minus equals to operator (`-=`) subtracts a value from the current value of a variable.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let balance = 500;
      document.write("Current Balance :" + balance);

      balance -= 150;

      document.write("<br/> New Balance:" + balance);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> Current Balance :500 <br/>
> New Balance:350

### Increment & Decrement Operators

Increment and decrement operators increase or decrease the value of a variable.

 ## Increment Operator

  There are two types of increment operators: The `pre-increment operator (++variable) ` and the `post-increment operator (variable++)`.

 1. **Post-Increment Operator (variable++):**

 > The post-increment operator (`variable++`) increases the value of a variable by `1`, returning the original value before the increment.

 **Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Post-Increment Operator</title>
    <script>
     let num = 21;
     let result = num++; 
     console.log(result); 
     console.log(num);   
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> 21 <br/>
> 22

 2. **Pre-Increment Operator (++variable):**

The pre-increment operator (`++variable`) increases the value of a variable by `1`, returning the value after the increment.

 **Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Post-Increment Operator</title>
    <script>
    let num = 21;
    let result = ++num; 
    console.log(result); 
    console.log(num);     
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> 21 <br/>
> 21

## Decrement Operator

There are two types of decrement operators: The `pre-decrement operator (--variable) ` and the `post-decrement operator (variable--)`.

1. **Post-Decrement Operator (variable--):**

The post-decrement operator (`variable--`) decreases the value of a variable by `1`, returning the original value before the decrement.


**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Post-Increment Operator</title>
    <script>
    let num = 21;
    let result = num--; 
    console.log(result); 
    console.log(num);     
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> 21 <br/>
> 20

2. **Pre-Decrement Operator (--variable):**

The pre-decrement operator (`--variable`) decreases the value of a variable by `1`, returning the value after the decrement.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Post-Increment Operator</title>
    <script>
    let num = 21;
    let result = --num; 
    console.log(result); 
    console.log(num);     
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> 20 <br/>
> 20








