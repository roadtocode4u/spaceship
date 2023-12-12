### JavaScript Medium

<details>
<summary>What is Object destructuring in Javascript?</summary>

Object destructuring is the special feature in JavaScript. It is a convenient way to extract data from JavaScript objects and assign them to the variable in more readable way. 

Object destructuring allows you to write less code and make it more readable, especially when working with objects with many properties.

Object destructuring provides shorthand syntax to extracting value from the objects and array.

**Syntax :**

```js
const { } = objectName;
```

**Example :**

```js showLineNumbers=true 
const student = { 
   name : "Yogita",
   age : "21",
   city : "Pune"
    };

// Without destructuring

const name = student.name;
const age = student.age;
const city = student.city;

// With destructuring

const {name, age, city } = student;

console.log(name);  // Output: Yogita
console.log(age);   // Output: 21
console.log(city);  // Output: Pune

```
In the above example, we created an object `student` with properties name, age, and city. Then, we used object destructuring to create variables `name`, `age`, and `city` and assigned them the corresponding values from the `student` object.

</details>