---
title: Filter Method
description: "Filter Method"
hide_table_of_contents: true
---

### Filter

**_Description_**

The `filter()` method creates a new array filled with elements that pass a test provided by a function.

The `filter()` method does not change the original array.

**_Syntax_**

```js
array.filter(function(currentValue, index, arr), thisValue)
```

**_Example_**

```js
const numbers = [-1, 5, -2, 10, 7, -6, 8];

const positiveNumber = numbers.filter((num, i) => {
  if (num > 0) {
    return true;
  }
});

console.log(positiveNumber);
```

**_Output_**

```js
[5, 10, 7, 8];
```
