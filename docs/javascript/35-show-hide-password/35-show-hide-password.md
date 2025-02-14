---
title: Show & Hide Password
description: "Show & Hide Password funcnality using javascript"
hide_table_of_contents: true
---

# Show and Hide Password Functionality in JavaScript

## Introduction

When entering a password on a website, the characters are hidden for security. However, users may want to see what they have typed to ensure it is correct. We can create a show and hide password feature using JavaScript, HTML, and CSS.

## How It Works

- A password input field is used where the text is hidden.
- An eye icon is placed next to the input field.
- When the user clicks on the eye icon, the password is shown.
- Clicking again hides the password.
- JavaScript is used to toggle between "password" and "text" input types.

## Steps to Implement

1. Create an HTML input field for the password.
2. Add an image (eye icon) that users can click.
3. Write JavaScript to detect clicks and change the input type.
4. Update the eye icon image when toggling the password visibility.
5. Style the input field and container using CSS for a good design.

## Key JavaScript Functionality

- Get the password input element using `document.getElementById()`.
- Get the eye icon element.
- Use an `if` condition to check if the input type is "password" or "text".
- Change the input type accordingly.
- Change the eye icon to match the state (show or hide).

## Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Show & Hide Password</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        background: linear-gradient(to right, #74ebd5, #9face6);
        font-family: Arial, sans-serif;
      }

      .main-container {
        background: rgba(255, 255, 255, 0.2);
        padding: 30px;
        border-radius: 15px;
        border: 2px solid rgba(255, 255, 255, 0.3);
      }

      .input-container {
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.3);
        padding: 10px 15px;
        border-radius: 10px;
        margin: 10px 0;
      }

      .user-input {
        border: none;
        background: none;
        font-size: 16px;
        padding: 8px;
        width: 250px;
        color: #333;
      }

      .user-input:focus {
        outline: none;
      }

      .view-icon {
        height: 20px;
        width: 20px;
        cursor: pointer;
        margin-left: 10px;
      }
    </style>
  </head>
  <body>
    <div class="main-container">
      <div class="input-container">
        <input
          type="password"
          id="user-input"
          placeholder="Enter Password"
          class="user-input"
        />
        <img
          src="hide.png"
          id="view"
          alt="view"
          class="view-icon"
          onclick="handleEyeClick()"
        />
      </div>
    </div>

    <script>
      function handleEyeClick() {
        const inputElement = document.getElementById("user-input");
        const viewElement = document.getElementById("view");

        if (inputElement.type === "password") {
          inputElement.type = "text";
          viewElement.src = "view.png";
        } else {
          inputElement.type = "password";
          viewElement.src = "hide.png";
        }
      }
    </script>
  </body>
</html>
```

## Output

#### output- 1 (By default)

<img src="/javascript/27/output-1.png" alt="screenshot1" width="600px"/>

#### output- 2 (When we click on eye icon)

<img src="/javascript/27/output-2.png" alt="screenshot1" width="600px"/>

## Conclusion

This feature improves user experience by allowing them to see the password if needed. It is commonly used in login and signup forms. JavaScript makes it easy to implement with a few lines of code.
