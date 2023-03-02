---
title: Variable in Javascript
description: "Variable in Javascript"
hide_table_of_contents: true
---

## How to declare variable in javascript?

variable is used to store data.

**Synatx**

`keyword valriableName;`

**Example**

`let age;`

In The above example we can use `let` keyword and declare one variable name of that variable is `age`. This is declaration part of in the variable.

`age = 23;`

In The above example we assign `23` value for `age` variable. This `23` value are store in `age` variable. This is assignment part of in the variable.

**Example**

`let age = 23;`

In the above example we create declaration and assignment part at same time.

There are four Ways to declare variable in javascript:

**Keyword**

1. var
2. let
3. const

## let

Let keyword used to declare variables in JavaScript.
Variables defined using let cannot be re-declared.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      let age = 20;
      document.write(age);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> 20

In the above example we can create one variable using `let` keyword name of that variable `age`. we store `20` value in `age` variable. In next line we print value of `document.write(age);` age variable.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      let age = 20;
      age = 50;
      document.write(age);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> 50

In the above example we can create one variable using `let` keyword name of that variable `age`. we store `20` value in `age` variable. In next line we store `50` value in same variable. In next line we print value of `document.write(age);` age variable. But the output of above eaxmple is `50` because **one variable store only one value at a time**.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      let age = 20;
      document.write("Age: " + age);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> Age: 20

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      let age;
      document.write("Age: " + age);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> Age: undefined

## const

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      const age = 22;
      document.write("Age: " + age);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> Age: 22

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      let val1 = 10;
      let val2 = 20;
      let sum = val1 + val2;
      document.write(sum);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

> 30

In the above example we can create one variable using `let` keyword name of that variable `val1` and we store `10` value in that variable. Next line we create second variable using `let` keyword name of that variable `val2` and we store `20` value in that variable. Third line we create `sum` variable and in that variable we store addition of `val1 + val2` variable. In next line we print value of `document.write(sum);` sum variable.

## Difference between var, let and const

### var

- The scope of the var variable is the functional scope.

- It can be updated and re-declared in scope.

- It can be declared without initialization.

- It can be accessed without initialization because its default value is undefined.

### let

- Let allow us to declare a variable that is limited to the scope of a block.

- In let first we declare variable and second time we used so there is no need to write second time.

- It can be declared without initialization.

- It cannot accessed without initialization, or a "reference error" will be raised.

### const

- The scope of the const variable is block scope.

- It cannot be updated or re-declared in scope.

- It cannot be accessed without initialization because it cannot be declared without initialization.
