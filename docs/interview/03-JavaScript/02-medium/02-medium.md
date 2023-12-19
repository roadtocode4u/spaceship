### JavaScript Medium

<details>
<summary>What is Object destructuring in Javascript?</summary>

Object destructuring is the special feature in JavaScript. It is a convenient way to extract data from JavaScript objects and assign them to the variable in more readable way.

Object destructuring allows you to write less code and make it more readable, especially when working with objects with many properties.

Object destructuring provides shorthand syntax to extracting value from the objects and array.

**Syntax :**

```js
const {} = objectName;
```

**Example :**

```js showLineNumbers=true
const student = {
  name: "Yogita",
  age: "21",
  city: "Pune",
};

// Without destructuring

const name = student.name;
const age = student.age;
const city = student.city;

// With destructuring

const { name, age, city } = student;

console.log(name); // Output: Yogita
console.log(age); // Output: 21
console.log(city); // Output: Pune
```

In the above example, we created an object `student` with properties name, age, and city. Then, we used object destructuring to create variables `name`, `age`, and `city` and assigned them the corresponding values from the `student` object.

</details>

<details>
  <summary>What is Ternary Operator ?</summary>

- Ternary Operator is also called **Conditional Operator**.
- It is Used to Check the condition and execute a same part of the code based on the condition.
- Ternary Operator Includes `?` and `:`
- It has 3 parts 1st is Condition , 2nd is true part and 3rd is false part.
- In Ternary Operator ,if the condition is **true** then `2nd part will be  executed` and if the condition is **false** then `3rd part will be  executed`.

**Syntax**:

```js

condition ? value if true : value if false

```

```js showLineNumbers=true
<!DOCTYPE html>
<html>

<body>
 <script>
   let age = 60
    let result = (age > 59) ?"Senior Citizen" : "Not a Senior Citizen";
    console.log(result);
 </script>
</body>
</html>
```

**Output**:

> Senior Citizen

</details>

<details>
  <summary>Difference between Pre-Increment Operator and Post-Increment Operator?</summary>

**Pre-Increment Operator**: A Variable is **prefix(++variable)** with increment operator is called Pre-Increment Operator.

In Pre-Increment Operator it `increase the value of variable by 1 first` and then use it .

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Pre-Increment Operator</title>
    <script>
      let a = 25;
      let result = ++a;
      console.log(result);
      console.log(a);
    </script>
  </head>
</html>
```

**Output**:

> 26<br/>
> 26

**Post-Increment Operator**: A Variable is **suffix(variable++)** with increment operator is called Post-Increment Operator.

In Post-Increment Operator it `uses the current variable value` first and then it increase the value of variable by 1 first .

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Post-Increment Operator</title>
    <script>
      let a = 25;
      let result = a++;
      console.log(result);
      console.log(a);
    </script>
  </head>
</html>
```

**Output**:

> 25<br/>
> 26

<summary>Difference between let, const and var?</summary>

Firstly we will look about the difference between **let**, **const**. **let** & **const** both keywords are used to declare a variable.

**const**: So when we declare variable using const keyword let's say `const a;` so at that time of decleration and initialization is compulsary. `const a = 20;` later we can not change the value of const declare variable.

**let**: On the other hand when we declare variable using let keyword, we can declare it first, then later we can assign the value. We can do both things at the same time declaring and assigning & we can change the value of variable that are declare using let keyword.

**var**: So var is completly different as compare to this two keyword `let` & `const`, & it is not recommended to use var keyword the reason is we can redeclared it and reinitialized. So var is similar to let assigning multiple values is allowed but dangerous characteristic is we redeclare the variables which ar created using **var** keyword.

</details>

<details>
  <summary>How to handle Runtime Error in javaScript?</summary>

In javaScript, we Handle a Runtime Error by using `try-catch` block.
we put a possible error throwing code in try block and if error is occured then the catch block is caught a error and handle the error .
By using `try-catch ` we can execute a code without interrupted or stoppted the application .

```js
try {
  // Possible error throwing code
} catch (error) {
  // Handle the error here
}
```

**try ()**:
In **try** block we put possible error throwing or code block were error occure in runtime .For Example,API's call . So that we can execute this block safetly it the error occure then this error catch by **catch** block.

**catch(error)**:
**catch** block receive a error object .
In error object their are multiple parameters like `error message` , `error name` , `error stack` this things available in error object. By using error message we can safely show the message of the error to the user just like error message we can use error name and error stack also.

In this way our whole execution will not be interrupted or stopped but we will handle the error safely .

````js showLiniNumbers=true
try {
  const a = 10;
  console.log(a);
  console.log(c);
} catch (e) {
  console.log(e.message);
}
console.log("Hi");

  <summary>What is Template String?</summary>
Template string is just string in Javascript. We declare template string using `(backtik)`. Now inside this template string we can inject value of variable using placeholder. And we can create placeholder using $ doller curly bracket open close and inside this placeholder we write the name of variable. So whenver We use this string along with other strings it will consider value of variable.

**Example:**

```js showLineNumbers=true
let name = "RTC";
console.log(`Hello ${name}`);
````

**Output**

> 10 <br/>
> c is not defined <br/>
> Hi
> Hello RTC

</details>

<details>
  <summary>Explain common Math functions available in JS.</summary>
  TODO: add answer @SagarWandile
</details>
