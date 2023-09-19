---
title:  Immediately Invoked Function Expression (IIFE)
description: " Immediately Invoked Function Expression (IIFE)"
hide_table_of_contents: true
---

An IIFE, which stands for **Immediately Invoked Function Expression**, is a JavaScript function that's defined and executed right away, immediately after it's created. It's a concise way to create a temporary scope for your code. This means that any variables or functions declared inside an IIFE are not accessible from outside the function.

### How to Create an IIFE

Creating an IIFE is quite straightforward. Here's the basic structure:

```js
(function() {
  // Your code goes here
})();   
```

Let's break this down step by step:

1. Start with an opening parenthesis `(` - This is used to prevent any potential issues with JavaScript's automatic semicolon insertion.

2. Follow with a function definition: `function() { ... }` - Inside the parentheses, define your function without a name. This is an anonymous function.

3. Add curly braces `{ ... }` - Inside the function, you place the code you want to execute immediately.

4. Finally, add `()` - Immediately invoke the function by adding another set of parentheses at the end.

**Example: :**

Here's a simple example of an IIFE:

```js
(function() {
  const message = "Hello from inside the IIFE!";
  console.log(message);
})();
```

In this example, message is a variable that's only accessible inside the IIFE's scope. The message will be logged to the console immediately when the script runs.

```js
    const age = 18;
    console.log(age);

    (function() {
        const age = 19;
        console.log(age);
    })();
```

In the above example `const age = 18;` = This line declares a constant variable named `age` and assigns it the value `18`. This variable is in the `global` scope, meaning it can be accessed from anywhere in the code.

`console.log(age);` = This line logs the value of the `global age` variable, which is `18`, to the console.

`(function() { ... })();` = This is an immediately-invoked function expression `(IIFE)`. It's a function that is defined and executed immediately after its creation. It's often used to create a private scope for variables to prevent them from polluting the global scope.

`const age = 19;` = Inside the IIFE, another constant variable named age is declared and assigned the value `19`. This age variable is `local` to the scope of the IIFE, and it does not affect the global `age` variable declared earlier.

`console.log(age);` = This line logs the value of the `local age` variable within the IIFE, which is `19`, to the console.

### Passing Parameters to an IIFE

You can also pass parameters to an IIFE if needed. Here's how you can do that:

```js
(function(name) {
  console.log("Hello, " + name);
})("John");
```

In this example, we pass the name `John` as a parameter to the IIFE, which then logs a personalized message to the console.