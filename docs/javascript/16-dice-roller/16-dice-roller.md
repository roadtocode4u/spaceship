---
title: Dice Roller
description: "Dice Roller"
hide_table_of_contents: true
---


**Example :**
```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>

<body>
    <img src="dice.png" alt="" id="dice" height="100px" />
    <br> <br>
    <button type="button" onclick="rollDice()">Roll The Dice</button>

    <script>
        const diceImg = document.getElementById("dice");
        function rollDice() {
            const min = 1;
            const max = 7;
            const randomNumber = Math.floor(Math.random() * (max - min)) + min;
            if (randomNumber == 1) {
                diceImg.src = "one.png";
            }
            else if (randomNumber == 2) {
                diceImg.src = "two.png";
            }
            else if (randomNumber == 3) {
                diceImg.src = "three.png";
            }
            else if (randomNumber == 4) {
                diceImg.src = "four.png";
            }
            else if (randomNumber == 5) {
                diceImg.src = "five.png";
            }
            else {
                diceImg.src = "six.png";
            }
        }
    </script>
</body>
</html>
```
**Output :**

<img src="/javascript/16/screenshot1.png" alt="screenshot1" width="600px"/>

**Explanation :**

In the above example `<img> Element:`  An image `(dice.png)` of a die (dice). It has an `id attribute` set to `"dice"`.

`<button> Element:` This  button is used for `rolling the dice`. When clicked, it triggers the `rollDice()` function.

`const diceImg = document.getElementById("dice");`: This line fetches the `<img>` element with the id` "dice"` and stores it in the diceImg constant.

`function rollDice() { ... }:` This function named `rollDice()` that gets executed when the button is clicked. Inside this function:

It defines `min and max` values for simulating a `dice roll between 1 and 6`.

It generates a `random number (randomNumber)` between `1 and 6` using `Math.random()`.

Depending on the value of `randomNumber`, it changes the `src attribute` of the `<img>` element to display an image to the rolled number` (e.g., "one.png" for 1, "two.png" for 2, and so on)`.

So, when you click the `"Roll The Dice"` button, it generates a random number `between 1 and 6` and displays the corresponding `dice` image.

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>

<body>
    <img src="dice.png" alt="" id="dice" height="100px" />
    <br> <br>
    <button type="button" onclick="rollDice()">Roll The Dice</button>

    <script>
        const diceImg = document.getElementById("dice");
        function rollDice() {
            const min = 1;
            const max = 7;

            const randomNumber = Math.floor(Math.random() * (max - min)) + min;
            switch (randomNumber) {
                case 1: diceImg.src = "one.png";
                    console.log(randomNumber);
                    break;
                case 2: diceImg.src = "two.png";
                    console.log(randomNumber);

                    break;
                case 3: diceImg.src = "three.png";
                    console.log(randomNumber);

                    break;
                case 4: diceImg.src = "four.png";
                    console.log(randomNumber);

                    break;
                case 5: diceImg.src = "five.png";
                    console.log(randomNumber);

                    break;
                case 6: diceImg.src = "six.png";
            }
        }
    </script>
</body>

</html>
```

**Output :**

<img src="/javascript/16/screenshot2.png" alt="screenshot2" width="600px"/>

**Explanation :**

In the above example `<img> Element:`  An image `(dice.png)` of a die (dice). It has an `id attribute` set to `"dice"`.

`<button> Element:` This  button is used for `rolling the dice`. When clicked, it triggers the `rollDice()` function.

`const diceImg = document.getElementById("dice");`: This line fetches the `<img>` element with the id` "dice"` and stores it in the diceImg constant.

`function rollDice() { ... }:` This function named `rollDice()` that gets executed when the button is clicked. Inside this function:

It defines `min and max` values for simulating a `dice roll between 1 and 6`.

It generates a `random number (randomNumber) ` between `1 and 6` using `Math.random()` and some math operations.

It uses a `switch statement` to set the `src attribute of the <img> element based on the value of randomNumber`, displaying an image corresponding to the `rolled number (e.g., "one.png" for 1, "two.png" for 2, and so on)`.

So, when you click the `"Roll The Dice"` button, it generates a random number b`etween 1 and 6` and displays the corresponding `dice` image using a `switch statement`.

