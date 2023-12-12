### JavaScript Medium

<details>

<summary>Difference between let, const and var?</summary>

 Firstly we will look about the difference between **let**, **const**. **let** & **const** both keywords are used to declare a variable.

 **const**: So when we declare variable using const keyword let's say `const a;` so at that time of decleration and initialization is compulsary. `const a = 20;` later we can not change the value of const declare variable.

 **let**: On the other hand when we declare variable using let keyword, we can declare it first, then later we can assign the value. We can do both things at the same time declaring and assigning & we can change the value of variable that are declare using let keyword. 

 **var**: So var is completly different as compare to this two keyword `let` & `const`, & it is not recommended to use var keyword the reason is we can redeclared it and reinitialized. So var is similar to let assigning multiple values is allowed but dangerous characteristic is we redeclare the variables which ar created using **var** keyword.
</details>

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

