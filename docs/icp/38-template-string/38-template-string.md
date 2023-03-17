---
title: Template String
description: "Template String"
hide_table_of_contents: true
---

String can be represented using pair of single quotes `' '` or double quotes `" "`.

**Code :**

```js
const a = 10;
const b = 20;
const c = 30;

document.write("a="+a", b="+b", c="+c);
```

**Output :**

>a=10, b=20, c=30

In the above code we create three constants `a`, `b`, and `c` with the values `10`, `20`, and `30` respectively. The `document.write()` method is used to output a string that concatenates the values of these constants.

The `+` operator is used to `concatenate` the string literals `"a="`, `"b="`, and `"c="` with the values of `a`, `b`, and `c`. To concatenate multiple values in a string, they must be separated by `+` operators within the string.

## Template Strings

Single String where we can inject variable.

Template strings are enclosed in backticks `(` `)` instead of `single` or `double` quotes. They allow for variables and expressions to be embedded directly into the string using the `${}` syntax.

**Code :**

```js
const a = 10;
const b = 20;
const c = 30;

document.write(`a=${a}, b=${b}, c=${c}`);
```

In the above code we create three constants `a`, `b`, and `c` with the values `10`, `20`, and `30` respectively.

Then, it uses a template literal syntax to print out the values of these constants using the `document.write()` method. The output will be a string that says `a=10, b=20, c=30` and it will be written to the web page where this code is executed.
