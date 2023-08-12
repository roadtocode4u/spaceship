---
title: Datatypes and Variables
description: "Datatypes and Variables"
hide_table_of_contents: true
---

 ## Datatypes In Javascript

 ### Premitive Data types

 1. String :  A string is a data type used to represent textual data. A string is a sequence of characters enclosed within single ('') or double ("") quotation marks.
 > "Hello Im String"
 > 'Hello, How are you...'

 2. Int : Proper numbers without pointing 
 values. 
 > 123456

 3. Float : Pointing Values
 > 8793.90 

 4. Boolean : A boolean is a data type that represents one of two possible values: true or false
 > `true or false`

 ### What is Javascript Engine?
 > Whatever we code in Javascript, the browser converts it into output, but it does not do this job alone, it has a JavaScript Engine, all chromium based browsers have an engine named V8, it compiles the Javascript code, So the Javascript engine works like a compiler, which compiles Javascript and produces output. 

 ## Variables In Javascript
 variable is used to store data.

 ### How to create variables:
 There are three keywords to make variables:

 1. let 
 2. const
 3. var 

 **Synatx**

`keyword valriableName;`

**Example**

`let age;`

In The above example we can use `let` keyword and declare one variable name of that variable is `age`. This is declaration part of in the variable.

`age = 20;`

In The above example we assign `20` value for `age` variable. This `20` value are store in `age` variable. This is assignment part of in the variable.

**Example**

`let age = 20;`

In the above example we create declaration and assignment part at same time.

## let

Let keyword used to declare variables in JavaScript.
Variables defined using let cannot be re-declared.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <script>
      let age = 20;
      console.log(age);
    </script>
  </body>
</html>
```

**Output**

> 20

In the above example we can create one variable using `let` keyword name of that variable `age`. we store `20` value in `age` variable. In next line we print value of `console.log(age);`age variable.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
     <script>
      let age = 20;
      console.log(age)
      age = 50;
      console.log(age);
    </script>
  </body>
</html>
```

**Output**

> 20 <br/>
> 50

In the above example we can create one variable using `let` keyword name of that variable `age`. we store `20` value in `age` variable. In next line we store `50` value in same variable. In next line we print value of `console.log(age);` age variable. But the output of above eaxmple is `50` because **one variable store only one value at a time**.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
     <script>
      let age = 20;
      let name = "Suraj";
      console.log("Name:" ,name);
      console.log("Age:" ,age);
    </script>
  </body>
</html>
```

**Output**

> Name: Suraj<br/>
> Age: 20

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
     <script>
      let age;
      console.log(age);
    </script>
  </body>
</html>
```

**Output**

>undefined

### Template String 
 Template strings are enclosed by backticks (``) instead of single or double quotes.Useing template string we can add variables inside the placeholders.

 `placeholder: ${}`

 **Example**

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <script>
      let age = 23;
      let name = "Suraj";
      console.log(`Age: ${age}, Name: ${name}`);
    </script>
  </body>
</html>
```

**Output**

> Age : 23 <br/>
> Name : Suraj

## const
const means constant , we cannot change or assign the value of const variable.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
     <script>
      const age = 20;
      console.log(age);
    </script>
  </body>
</html>
```

**Output**

> 20

## var
The var keyword is used to declare variables. 

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
     <script>
      var age = 20;
      var age = 30;
      console.log(age);
    </script>
  </body>
</html>
```

**Output**

> 30

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

## Rules to declare variables:

1. a-z, A-Z, 0-9, and _
2. variable cannot start with numbers.
3. variable name cannot be a reserved keyword.







