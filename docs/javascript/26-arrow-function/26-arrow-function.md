---
title: Arrow Function
description: "Arrow Function"
hide_table_of_contents: true
---

Arrow functions are a shorter way to write functions in JavaScript. They are especially handy for small, simple functions.

Here's how you create and use them:

**Basic Syntax :**

```js
const variableName = (parameters) => {
  // function code
};
```

* `const` declares a constant (unchanging) variable.
* `variableName` is the name you give to your function.
* parameters are the values that your function can take as input.
* `=>` is the arrow that separates the function's parameters and its body.
* `{}` contains the actual code that the function will execute.

**Let's create a simple arrow function that adds two numbers:**

```js
const addNumbers = (a, b) => {
  return a + b;
};

const result = addNumbers(5, 3);
console.log(result); 
```

### Arrow Functions with No Parameters

If your function doesn't take any parameters, you still need parentheses, but they will be empty:

```js
const greet = () => {
  return "Hello, World!";
};

console.log(greet());
```