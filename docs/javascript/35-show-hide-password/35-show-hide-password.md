---
title: Show & Hide Password
description: "Show & Hide Password Functionality Using Javascript"
hide_table_of_contents: true
---

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
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
      }

      .main-container {
        background-color: #6b8cce;
        width: 300px;
        padding: 20px;
        margin: 100px auto;
        border-radius: 5px;
        border: 2px solid #8aa7db;
      }

      .input-container {
        background-color: whitesmoke;
        padding: 10px;
        border-radius: 5px;
        display: flex;
      }

      .user-input {
        border: none;
        width: 250px;
        font-size: 14px;
        background-color: #eef2f7;
        color: #2d4063;
      }

      .user-input:focus {
        outline: none;
      }

      .view-icon {
        width: 20px;
        height: 20px;
        cursor: pointer;
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

output- 1 (By default)

<img src="/javascript/27/output-1.png" alt="screenshot1" width="600px"/>

output- 2 (When we click on eye icon)

<img src="/javascript/27/output-2.png" alt="screenshot1" width="600px"/>

## Conclusion

This feature improves user experience by allowing them to see the password if needed. It is commonly used in login and signup forms. JavaScript makes it easy to implement with a few lines of code.
