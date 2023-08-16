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
4. Comparison operators (<, >, <=, >=, ==, !=)
5. Logical operators (&& (logical AND), || (logical OR), ! (logical NOT))

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

**4. multiplication equals to (*=)**

The multiplication equals to operator (`*=`) multiplication a value from the current value of a variable.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let balance = 500;
      document.write("Current Balance :" + balance);

      balance *= 150;

      document.write("<br/> New Balance:" + balance);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> Current Balance :500 <br/>
> New Balance:75000

**5. division equals to (*=)**

The division equals to operator (`/=`) division a value from the current value of a variable.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let balance = 500;
      document.write("Current Balance :" + balance);

      balance /= 150;

      document.write("<br/> New Balance:" + balance);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> Current Balance :500 <br/>
> New Balance:3.3333

**6. modulus equals to (*=)**

The modulus equals to operator (`%=`) modulus a value from the current value of a variable.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let balance = 500;
      document.write("Current Balance :" + balance);

      balance %= 150;

      document.write("<br/> New Balance:" + balance);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> Current Balance :500 <br/>
> New Balance:50

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
    <title>Pre-Increment Operator</title>
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

> 22 <br/>
> 22

## Decrement Operator

There are two types of decrement operators: The `pre-decrement operator (--variable) ` and the `post-decrement operator (variable--)`.

1. **Post-Decrement Operator (variable--):**

The post-decrement operator (`variable--`) decreases the value of a variable by `1`, returning the original value before the decrement.


**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Post-Decrement Operator</title>
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
    <title>Pre-Decrement Operator</title>
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

## Comparison Operator

The comparison operator is used to compare two variable value and return a Boolean value of true or false. The comparison operator can be used to compare two values of the same data type.

**1. equal to (==)**

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let a = 10;
      let b = 10;
      document.write(a==b)
    </script>
  </head>
  <body></body>
</html>
```

**Output**

>true

In above code will gives output `true` to the web page because the two variables `a` and `b` have the same value, which is `10`. The `==` operator is a comparison operator that checks if two values are equal to each other. 

**2. not equals to (!=)**

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let a = 10;
      let b = 20;
      document.write(a!=b)
    </script>
  </head>
  <body></body>
</html>
```

**Output**

>true

In the above code will gives output `true` to the web page because the two variables `a` and `b` are not equal to each other. The `!=` operator is the `not equal` operator in JavaScript, and it checks if two values are not equal to each other.

**3. less than (<)**

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let a = 5;
      let b = 10;

      let res = a<b;

      document.write(res)
    </script>
  </head>
  <body></body>
</html>
```

**Output**

>true

In the above code will gives output `true` to the web page because the variable res is assigned the value of the expression `a<b` , which is true because `a` is less than `b`.

The `<` operator is the `less than` operator in JavaScript, and it checks if the value on the left is less than the value on the right. In this case, `a` has  value of `5` and `b` has value of `10`, so the expression `a<b` evaluates to true. The result of this expression is then assigned to the variable res.

**4. greater than (>)**

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let a = 50;
      let b = 10;

      let res = a>b;

      document.write(res)
    </script>
  </head>
  <body></body>
</html>
```

**Output**

>true

In the above code will gives output `true` to the web page because the variable res is assigned the value of the expression `a>b` , which is true because `a` is greater than `b`.

The `>` operator is the `greater than` operator in JavaScript, and it checks if the value on the left is greater than the value on the right. In this case, `a` has  value of `50` and `b` has value of `10`, so the expression `a>b` evaluates to true. The result of this expression is then assigned to the variable res.

**5. less than or equals to (<=)**

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let a = 5;
      let b = 10;

      let res = a<=b;

      document.write(res)
    </script>
  </head>
  <body></body>
</html>
```

**Output**

>true

In the above code will gives output `true` because the variable res is assigned the value of the expression `a<=b`, which is true because `a` is less than or equal to `b`.

In this code, the `<=` operator is the `less than or equal to` operator in JavaScript, and it checks if the value on the left is less than or equal to the value on the right. In this case, `a` has  value of `5` and `b` has value of `10`, so the expression `a<=b` evaluates to true because `5` is less than or equal to `10`.

**6. greater than or equals to (>=)**

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let a = 50;
      let b = 10;

      let res = a>=b;

      document.write(res)
    </script>
  </head>
  <body></body>
</html>
```

**Output**

>true

In the above code will gives output `true` because the variable res is assigned the value of the expression `a>=b`, which is true because `a` is greater than or equal to `b`.

In this code, the `>=` operator is the `greater than or equal to` operator in JavaScript, and it checks if the value on the left is greater than or equal to the value on the right. In this case, `a` has  value of `50` and `b` has value of `10`, so the expression `a>=b` evaluates to true because `50` is greater than or equal to `10`.

## Logical Operator

In JavaScript, logical operators are used to evaluate logical expressions and return a Boolean value of `true` or `false`. 

**1. AND operator(&&)** 

This operator returns true if both operands are true, otherwise it returns false.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let res = 5>3 && 4>2

      document.write(res)
    </script>
  </head>
  <body></body>
</html>
```

**Output**

>true


In the above code will gives output `true` This is because the `&&` (AND) operator evaluates both of its operands and returns true if both operands are true. In this case, the first operand `5 > 3` is `true`, and the second operand `4 > 2` is also `true`. Therefore, the expression `5 > 3 && 4 > 2` evaluates to `true` and is store to the variable `res`.

**2. OR operator(||)**

 This operator returns true if at least one of the condition is true, otherwise it returns false.

 **Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      let res = 5==5 || 4==2

      document.write(res)
    </script>
  </head>
  <body></body>
</html>
```

**Output**

>true

In the above code will gives output `true` this is because the `||` (OR) operator evaluates both of its condition and returns `true` if at least one of the operands is `true`. In this case, the first operand `5 == 5` is `true`, and the second operand `4 == 2` is `false`. Therefore, the expression `5 == 5 || 4 == 2` evaluates to `true` and is store to the variable `res`.
 
**3. NOT operator (!)**

If the operand is true, it returns false, and if the operand is false, it returns true.

 **Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      document.write((!8==5))
    </script>
  </head>
  <body></body>
</html>
```

**Output**

>true

In the above code will gives output `true` this is because the `!` (NOT) operator negates the boolean value of its operand. In this case, the operand is `8 == 5`, which evaluates to `false`. Therefore, the `!` operator negates this value to `true`.









