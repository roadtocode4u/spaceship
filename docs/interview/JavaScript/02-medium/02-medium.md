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
      let a=25;
      let result = ++a;
      console.log(result)
      console.log(a)
    </script>
  </head>
</html>
```
**Output**:
>26<br/>
 26


 **Post-Increment Operator**: A Variable is **suffix(variable++)** with increment operator is called Post-Increment Operator.

   In Post-Increment Operator it `uses the current variable value` first and then it increase the value of variable by 1 first .

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Post-Increment Operator</title>
    <script>
      let a=25;
      let result = a++;
      console.log(result)
      console.log(a)
    </script>
  </head>
</html>
```
**Output**:
>25<br/>
26

</details>



<details>
  <summary>How to handle Runtime Error in javaScript?</summary>

   In javaScript, we Handle a Runtime Error  by using `try-catch` block.
   we put a possible error throwing code  in try block and if error is occured then the catch block is caught a error and handle the error .
   By using `try-catch ` we can execute a code without  interrupted or stoppted the application .  

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
 In error object their are multiple parameters like `error message` , `error name` , `error stack` this things available in error object. By using error message we can safely show the message of the error  to the user just like error message we can use error name and error stack also.

 In this way our whole execution will not be interrupted or stopped but we will handle the error safely .

 ```js showLiniNumbers=true
 try{
    const a =10;
    console.log(a)
    console.log(c)
}
catch(e){
    console.log(e.message)
}
console.log("Hi")

 ```

 **Output**

 > 10 <br/>
   c is not defined <br/>
   Hi

</details>
