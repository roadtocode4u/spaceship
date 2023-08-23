---
title: Bulb On Off 
description: "Bulb On Off"
hide_table_of_contents: true
---

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulb On Off</title>
</head>

<body>
    <img src="off.png" alt="off" id="bulb">
    <br> <br>
    <button type="button" onclick="bulbOn()">
        ON
    </button>
    <button type="button" onclick="bulbOff()">
        OFF
    </button>

    <script>
        const bulbElement = document.getElementById('bulb');
        function bulbOn() {
            bulbElement.src = "on.png";
        }
        function bulbOff() {
            bulbElement.src = "off.png";
        }
    </script>
</body>
</html>
```
**Output :**

<img src="/javascript/15/screenshot1.png" alt="screenshot1" width="600px"/>

**Explanation :**

In the above example, line 10, We have a image of a `light bulb` represented by the `<img> tag`. The image is shown as `"off"` because it has a source (src) attribute set to `"off.png`". This means the bulb is currently `off`, when you switch off a light.

Line 12 to 17,Below the image, there are two buttons labeled `"ON"` and `"OFF"`. These buttons are created using the `<button>`tags.

Line 12 to 17,When you click the `"ON"` buttons. It triggers a function called `bulbOn()`. 

 `const bulbElement = document.getElementById('bulb');`<br/>
Line 20, We created one variable name of that variable is `bulbElement`, the ID `'bulb'` assigns it to the constant variable `'bulbElement'` .

Line 21 to 23,When you press `"ON"`, the `bulbOn()` function runs and changes the 'image source to `"on.png"`. This makes the image of the bulb appear as if it's turned `on`,when you switch `on` a light.

Line 24 to 26,When you press the `"OFF"` button, it `triggers` another function called `bulbOff()`. This function changes the image source back to `"off.png"`,turning the bulb `off`.

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulb On Off</title>
</head>

<body>
    <img src="off.png" alt="off" id="bulb">
    <br> <br>
    <button type="button" onclick="toggleBulb()">
        Toggle
    </button>

    <script>
        const bulbElement = document.getElementById('bulb');
        let state = false;

        function toggleBulb() 
        {
            if(state==false)   
            {
                bulbElement.src = 'on.png';
                state = true;
            }  
            else
            {
                bulbElement.src = 'off.png';
                state = false;
            }
        }
    </script>
</body>
</html>
```
**Output :**

<img src="/javascript/15/screenshot2.png" alt="screenshot2" width="600px"/>

**Explanation :**

Line 10, We have a image of a `light bulb` represented by the `<img> tag`. The image is shown as `"off"` because it has a source (src) attribute set to `"off.png`". This means the bulb is currently `off`, when you switch off a light.

Line 12 to 14,Below the image, there are one button labeled `"Toggle"`. These buttons are created using the `<button>`tags.

 `const bulbElement = document.getElementById('bulb');`<br/>
Line 17, We created one variable name of that variable is `bulbElement`, the ID `'bulb'` assigns it to the constant variable `'bulbElement'` .

Line 18, we created one variable , name of that element `state` and sets its initial value to `false`. 

`if (state == false) { ... }:`

This condition checks whether the `state `variable is `false`, indicating that the bulb is currently `off`.

If the condition is` true (the bulb is off)`:
Sets the src attribute of the bulbElement to` 'on.png'`, which changes the image to an until bulb.

Sets the state variable to `true`, indicating that the bulb is now `on`.

`else { ... }:`

If the condition is `false (the bulb is on)`:
Sets the src attribute of the bulbElement to `'off.png'`, which changes the image to an unlit bulb.

Sets the state variable back to false, indicating that the bulb is now off again.
So, when you call the `toggleBulb()` function, it checks the current state of the bulb `(on or off)` and toggles it. If it's off, it turns it on, and if it's on, it turns it off.











