---
title: forEach and map
description: "forEach and map"
hide_table_of_contents: true
---

# `forEach` and `map`

In JavaScript, `forEach` and `map` are two essential methods that allow you to work with arrays and perform operations on each element within an array.

## forEach

### Syntax

The `forEach` method is used to iterate over the elements of an array and apply a provided function to each element.

```javascript
array.forEach(callback(element, index) {
  // Your code here
});
```

### Usage

- `array`: The array to iterate over.
- `callback`: A function that will be called once for each element in the array.
  - `element`: The current element being processed.
  - `index`: The index of the current element within the array.

### Example

Let's say you have an array of numbers, and you want to print each number to the console:

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(`Element at index ${index} is ${number}`);
});
```

Output:

```
Element at index 0 is 1
Element at index 1 is 2
Element at index 2 is 3
Element at index 3 is 4
Element at index 4 is 5
```

### Use Cases (forEach)

- **Printing Elements**: You can use `forEach` to loop through an array and print its elements to the console or display them on a webpage.

- **Modifying Elements in Place**: If you need to modify the elements of an array in-place, `forEach` can be used to apply changes to each element individually.

---

## map

### Syntax

The `map` method is used to create a new array by applying a provided function to each element of an existing array.

```javascript
const newArray = array.map(callback(element, index) {
  // Your code here
});
```

### Usage

- `array`: The array to iterate over.
- `callback`: A function that will be called once for each element in the array.
  - `element`: The current element being processed.
  - `index`: The index of the current element within the array.

### Example

Suppose you have an array of numbers, and you want to create a new array where each number is squared:

```javascript
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number, index) => {
  return number ** 2;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

### Use Cases (map)

- **Transforming Data**: `map` is often used when you need to transform the data within an array to create a new array with modified values, such as converting units, formatting strings, or performing mathematical operations.

- **Immutability**: When you want to keep the original array unchanged and create a new array with modified data, `map` is a suitable choice.

---

## Key Differences

- **forEach**:

  - Does not return a new array.
  - Typically used for side effects (e.g., printing or modifying elements in place).
  - Cannot be used to create a new array with modified data directly.

- **map**:
  - Returns a new array with the results of applying the provided function to each element.
  - Preferred when you need to transform or modify the data in an array and create a new array with the modified values.
