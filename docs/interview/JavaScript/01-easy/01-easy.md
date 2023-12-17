### JavaScript Easy

<details>

  <summary>What is the difference between =, ==  & === ?</summary>

- **single equals to** (=)

`=` Single equal to is a Assignment Operator. If you want to assign the value of variable then use single equal to.

**Example :**

```js
let Num = 20;
console.log(Num);
```

**Output**

> 20

- **double equals to** (==)

`==` Double equal to is a Comparison Operator. And for comparing two value of variable using comparison operator and then output will show in boolean format (true or false).

**Example 2**

```js
let num1 = 10;
let num2 = 10;
document.write(num1 == num2);
```

**Output**

> true

- **tripple equals to** (===)

`===` Tripple equal to Also known as strict equality operator, it compares both the value and then output will show in boolean format (true or false).

**Example 3**

```js
let num1 = 10;
let num2 = 10;
document.write(num1 === num2);
```

**Output**

> true

</details>

<details>
  <summary>What is Template String in Javascript?</summary>

- Template String is a another way to create a String in javaScript to embedded a variables and expression in javaScript .
- It denoted as a backticks ` (``) ` character instead of double `" "` or single quotes `' '` and
  It allows placeholder `${ }` to embedded variables and expression directly .
- Template string is used to string formating .
- With the help of Template string we can add multiline String without using Escape character `\n`

```js showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <script>
    const num1 = 80;
    const num2 = 20;
    console.log(`The sum of ${num1} and ${num2} is `${num1+num2});
  </script>
</body>
</html>
```

**output:**

> The sum of 80 and 20 is 100.

In above example In Line no. 7 we create one variable num1 and store 80 ,In Line no. 8 create a variable num2 and store a value 20 and In Line no. 9 In console.log() we print a actual value of num1 and num2 and it sum with the help of ${}.

</details>

<details>

  <summary>What is LocalStorage in javascript ?</summary>
  LocalStorage  is feature of web browser where we can store data permanantly even user closes or refreshes the web page .<br/>
  Data can not be share between two browser .for example if user store data in chrome brower it only visible for chrome not MicrosoftEdge.
  In localstorage the value is store in key-value formatand values in Generic datatype like Number,boolean,string.
  
  <br/>

**To Work with LocalStorage we have 4 Method :**

**1.setItem(key,value) :** `setItem(key,value)` method is use for storing the data in LocalStorage.In this method their are two parameters : the `key` its represent the name of data and `value` it may be string,boolean,number or object .

**code:**

```js
localStorage.setItem("user", "Akash");
```

**2.getItem(key) :** `getItem(key)` method is use for retriving the data from LocalStorage. It takes the key as a parameter and returns the corresponding value..

**code:**

```js
localStorage.setItem("user");
```

**3.removeItem(key) :** `removeItem(key)` method is use to remove a specific item from LocalStorage. It takes the key of the item you want to remove from the localStorage.

```js
localStorage.removeItem("user");
```

**4.clear():**:`clearItem()` is used to remove all the data stored in LocalStorage.

```js
localStorage.clear();
```

To store complex object we need to use method of `JSON.Stringify()` and `JSON.parse()`

</details>

<details>
<summary>What is use of JSON.stringify() and JSON.parse() ?</summary>

**JSON.stringify():** JSON.stringify() convert javascript data which can be various datatype form like normal String ,Number, array ,it can be object.Data of this format will be converted into proper string using ` JSON.stringify().`

```js
localStorage.setItem("userdata", JSON.stringify("gayatri"));
```

**JSON.parse():** When we apply JSON.parse this method will convert Stringify data to in it's original form.

```js
JSON.parse(localStorage.getItem("userdata"));
```

</details>
