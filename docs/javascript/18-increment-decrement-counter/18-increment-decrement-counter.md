---
title: Increment/Decrement Counter
description: "Increment/Decrement Counter"
hide_table_of_contents: true
---

**Example 1:**
```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <style>
        .card {
            border: 1px solid black;
            border-radius: 15px;
            padding: 10px;
        }
        .card-img {
            display: block;
            margin: 10px auto;
        }
        .card-heading {
            text-align: center;
        }
        .quantity-btn-container {
            display: flex;
            justify-content: space-around;
        }
    </style>
</head>

<body>
    <div class="card">
        <img src="pizza.png" alt="" height="70px" class="card-img">
        <h1 class="card-heading">Paneer Onion Pizza</h1>

        <div class="quantity-btn-container">
            <button type="button" onclick="decrement()">
                -
            </button>
            <span id="quantity">1</span>
            <button type="button" onclick="increment()">
                +
            </button>
        </div>
    </div>

    <script>
        function increment() {
            const quantityElement = document.getElementById("quantity");
            const quantity = parseInt(quantityElement.innerText);
            quantityElement.innerText = quantity + 1;
        }

        function decrement() {
            const quantityElement = document.getElementById("quantity");
            const quantity = parseInt(quantityElement.innerText);
            quantityElement.innerText = quantity - 1;
        }

    </script>
</body>
</html>
```
**Output :**

<img src="/javascript/18/screenshot1.png" alt="screenshot1" width="600px"/>

**Explanation :**


In the above example line 27,`<img src="pizza.png" alt="" height="70px" class="card-img">: `This includes an image of the pizza with the source file `"pizza.png"`.

Line 28,`<h1 class="card-heading">Paneer Onion Pizza</h1>: ` This displays the name of the pizza as a heading.

Line 31 -33,`<button type="button" onclick="decrement()">- </button>:` This button is for `decreasing` the quantity. When clicked, it triggers the `decrement` function.

Line 34,`<span id="quantity">1</span>:` This is a span element that initially displays the `quantity` as `'1'`.

Line 35 - 37,`<button type="button" onclick="increment()">+ </button>: `This button is for increasing the quantity. When clicked, it triggers the increment function.

Line 42 - 46,`increment function:`
It gets the current quantity from the `<span> element` with the `id "quantity" `and stores it in the `quantityElement` variable.Converts the quantity from a` string` to an integer using` parseInt`.
Increases the quantity by` 1` and updates the text displayed in the` <span> element` with the new quantity.

Line 48 - 52,`decrement function:`
Similar to the increment function, it gets the current quantity, converts it to an integer, and then` decreases it by 1` before updating the text in the` <span> element`.

If you click the `'+' button`, the quantity `increases by 1`, and if you click the` '-' button`, the quantity `decreases by 1`.

**Example 2:**
```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <style>
        .card {
            border: 1px solid black;
            border-radius: 15px;
            padding: 10px;
        }
        .card-img {
            display: block;
            margin: 10px auto;
        }
        .card-heading {
            text-align: center;
        }
        .quantity-btn-container {
            display: flex;
            justify-content: space-around;
        }
    </style>
</head>
<body>
    <div class="card">
        <img src="pizza.png" alt="" height="70px" class="card-img">
        <h1 class="card-heading">Paneer Onion Pizza</h1>

        <div class="quantity-btn-container">
            <button type="button" onclick="decrement()">
                -
            </button>
            <span id="quantity">1</span>
            <button type="button" onclick="increment()">
                +
            </button>
        </div>
    </div>

    <script>
        const quantityElement = document.getElementById("quantity");
        let quantity = parseInt(quantityElement.innerText);

        function increment() {
            quantityElement.innerText = ++quantity;
        }

        function decrement() {
            quantityElement.innerText = --quantity;
        }
    </script>
</body>
</html>
```
**Output :**

<img src="/javascript/18/screenshot1.png" alt="screenshot1" width="600px"/>

**Explanation :**

In the above example line 26,`<img src="pizza.png" alt="" height="70px" class="card-img">: `This includes an image of the pizza with the source file `"pizza.png"`.

Line 27,`<h1 class="card-heading">Paneer Onion Pizza</h1>: ` This displays the name of the pizza as a heading.

Line 30 -32,`<button type="button" onclick="decrement()">- </button>:` This button is for `decreasing` the quantity. When clicked, it triggers the `decrement` function.

Line 33,`<span id="quantity">1</span>:` This is a span element that initially displays the `quantity` as `'1'`.

Line 34 - 36,`<button type="button" onclick="increment()">+ </button>: `This button is for increasing the quantity. When clicked, it triggers the increment function.

Line 41 - 42,The `<span> element` with the `id "quantity"` and stores it in the `quantityElement` variable.
Initializes a variable quantity with the current value displayed in the `<span> element`, converting it from text to an integer.

Defines two functions, `increment and decrement`, which are called the buttons are clicked.

Line 44 - 46,`increment function:` `Increments` the quantity variable by `1` and updates the text displayed in the `<span> element` with the new quantity.

Line 48 - 50,`decrement function:` `Decrements` the quantity variable by `1` and updates the text displayed in the `<span> element` with the new quantity.

**Example 3:**
```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <style>
        .card {
            border: 1px solid black;
            border-radius: 15px;
            padding: 10px;
        }
        .card-img {
            display: block;
            margin: 10px auto;
        }
        .card-heading {
            text-align: center;
        }
        .quantity-btn-container {
            display: flex;
            justify-content: space-around;
        }
    </style>
</head>
<body>
    <div class="card">
        <img src="pizza.png" alt="" height="70px" class="card-img">
        <h1 class="card-heading">Paneer Onion Pizza</h1>

        <div class="quantity-btn-container">
            <button type="button" onclick="ChangeQuantity('dec')">
                -
            </button>
            <span id="quantity">1</span>
            <button type="button" onclick="ChangeQuantity('inc')">
                +
            </button>
        </div>
    </div>

    <script>
        const quantityElement = document.getElementById("quantity");
        let quantity = parseInt(quantityElement.innerText);

        function ChangeQuantity(op) {

            if (op === 'inc')
                ++quantity;

            if (op === 'dec')
                --quantity;

            quantityElement.innerText = quantity;
        }
    </script>
</body>
</html>
```
**Output :**

<img src="/javascript/18/screenshot1.png" alt="screenshot1" width="600px"/>

**Explanation :**


**Example 4:**
```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <style>
        .card {
            border: 1px solid black;
            border-radius: 15px;
            padding: 10px;
        }
        .card-img {
            display: block;
            margin: 10px auto;
        }
        .card-heading {
            text-align: center;
        }
        .quantity-btn-container {
            display: flex;
            justify-content: space-around;
        }
    </style>
</head>

<body>
    <div class="card">
        <img src="pizza.png" alt="" height="70px" class="card-img">
        <h1 class="card-heading">Paneer Onion Pizza</h1>

        <div class="quantity-btn-container">
            <button type="button" onclick="ChangeQuantity('dec')">
                -
            </button>
            <span id="quantity">1</span>
            <button type="button" onclick="ChangeQuantity('inc')">
                +
            </button>
        </div>
    </div>

    <script>

        const quantityElement = document.getElementById("quantity");
        let quantity = parseInt(quantityElement.innerText);

        function ChangeQuantity(op) {

            if (quantity == 1 && op == "dec")
            return

            if (quantity == 5 && op == "inc")
            return

            if (op === 'inc')
                ++quantity;

            if (op === 'dec')
                --quantity;
            quantityElement.innerText = quantity;
        }
    </script>
</body>
</html>
```
**Output :**

<img src="/javascript/18/screenshot1.png" alt="screenshot1" width="600px"/>

**Explanation :**

**Example 5:**
```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <style>
        .card {
            border: 1px solid black;
            border-radius: 15px;
            padding: 10px;
        }
        .card-img {
            display: block;
            margin: 10px auto;
        }
        .card-heading {
            text-align: center;
        }
        .quantity-btn-container {
            display: flex;
            justify-content: space-around;
        }
    </style>
</head>

<body>
    <div class="card">
        <img src="pizza.png" alt="" height="70px" class="card-img">
        <h1 class="card-heading">Paneer Onion Pizza</h1>

        <div class="quantity-btn-container">
            <button type="button" onclick="ChangeQuantity('dec')">
                -
            </button>
            <span id="quantity">1</span>
            <button type="button" onclick="ChangeQuantity('inc')">
                +
            </button>
        </div>
    </div>
    <script>
        const quantityElement = document.getElementById("quantity");
        let quantity = parseInt(quantityElement.innerText);

        function ChangeQuantity(op) {

            if (quantity == 1 && op == "dec")
                return

            if (quantity == 5 && op == "inc")
                return
                quantityElement.innerText = op === 'inc' ? ++ quantity : --quantity;          
        }
    </script>
</body>
</html>
```
**Output :**

<img src="/javascript/18/screenshot1.png" alt="screenshot1" width="600px"/>

**Explanation :**In the above example line 27,`<img src="pizza.png" alt="" height="70px" class="card-img">: `This includes an image of the pizza with the source file `"pizza.png"`.

Line 28,`<h1 class="card-heading">Paneer Onion Pizza</h1>: ` This displays the name of the pizza as a heading.

Line 31 -33,`<button type="button" onclick="decrement()">- </button>:` This button is for `decreasing` the quantity. When clicked, it triggers the `decrement` function.

Line 34,`<span id="quantity">1</span>:` This is a span element that initially displays the `quantity` as `'1'`.

Line 35 - 37,`<button type="button" onclick="increment()">+ </button>: `This button is for increasing the quantity. When clicked, it triggers the increment function.

Line 41 - 42,The `<span> element` with the `id "quantity"` and stores it in the `quantityElement` variable.
Initializes a variable quantity with the current value displayed in the `<span> element`, converting it from text to an integer.

`ChangeQuantity Function:` It takes one argument, op, which should be either "dec" (for decrease) or "inc" (for increase).

`Inside the function, there are conditional checks:`If the current `quantity is 1` and the user clicks the minus button `("-")`, it returns early, preventing the quantity from going `below 1`.

If the current `quantity is 5` and the user clicks the plus` button ("+")`, it also returns early, preventing the quantity from going `above 5`.

If neither of these conditions is match, it updates the text inside the `quantityElement` to either `increment or decrement` the current quantity based on the value of the`op` argument. updating the displayed quantity.

**Example 6:**
```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <style>
        .card {
            border: 1px solid black;
            border-radius: 15px;
            padding: 10px;
        }
        .card-img {
            display: block;
            margin: 10px auto;
        }
        .card-heading {
            text-align: center;
        }
        .quantity-btn-container {
            display: flex;
            justify-content: space-around;
        }
    </style>
</head>

<body>
    <div class="card">
        <img src="pizza.png" alt="" height="70px" class="card-img">
        <h1 class="card-heading">Paneer Onion Pizza</h1>

        <div class="quantity-btn-container">
            <button type="button" onclick="ChangeQuantity('dec')">
                -
            </button>
            <span id="quantity">1</span>
            <button type="button" onclick="ChangeQuantity('inc')">
                +
            </button>
        </div>
    </div>

    <script>
         const quantityElement = document.getElementById("quantity");
        let quantity = parseInt(quantityElement.innerText);

        function ChangeQuantity(op) {

            if (quantity == 1 && op == "dec")
                return

            if (quantity == 5 && op == "inc")
                return

                quantityElement.innerText = op ==='inc' ? ++ quantity : --quantity;
        }
    </script>
</body>
</html>
```
**Output :**

<img src="/javascript/18/screenshot1.png" alt="screenshot1" width="600px"/>

**Explanation :**

In the above example line 27,`<img src="pizza.png" alt="" height="70px" class="card-img">: `This includes an image of the pizza with the source file `"pizza.png"`.

Line 28,`<h1 class="card-heading">Paneer Onion Pizza</h1>: ` This displays the name of the pizza as a heading.

Line 31 -33,`<button type="button" onclick="decrement()">- </button>:` This button is for `decreasing` the quantity. When clicked, it triggers the `decrement` function.

Line 34,`<span id="quantity">1</span>:` This is a span element that initially displays the `quantity` as `'1'`.

Line 35 - 37,`<button type="button" onclick="increment()">+ </button>: `This button is for increasing the quantity. When clicked, it triggers the increment function.

Line 41 - 42,The `<span> element` with the `id "quantity"` and stores it in the `quantityElement` variable.
Initializes a variable quantity with the current value displayed in the `<span> element`, converting it from text to an integer.


Line 45,`ChangeQuantity Function:`This function is called when the user clicks either the` minus ("-")` or` plus ("+")` button.
It takes `one argument, op,` which should be either `"dec" (for decrease)` or `"inc" (for increase)`.

Line 47,`Inside the function, there are conditional checks to ensure that the quantity doesn't go below `1 or above 5`. This is done to limit the quantity within a `reasonable range`.

If the quantity is already at its` minimum (1) `and the user clicks the minus button `("-")`, or if the quantity is at its `maximum (5) `and the user clicks the plus button `("+")`, the function returns early without making any changes.

If neither of these conditions is match, it updates the text inside the `quantityElement` to either` increment or decrement` the current quantity based on the value of the` op` argument.








