---
title: Confirm and Prompt
description: "Confirm and Prompt"
hide_table_of_contents: true
---

# Prompt() and Confirm() Function

`prompt()` and `confirm()` both are inbuilt function of Javascript. `confirm()` are used to give confirmation (cancel/ok) to user. `prompt()` are used to give input from user.

## confirm()

`confirm()` are used to give confirmation (cancel/ok) from the user. when you give positive or negative feedback from the user then we can use the `confirm()` function. when the user clicks `ok` button its return true feedback and when user clicks `cancel` button then its returns false feedback.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      confirm("Do you want to cancel this order?");
    </script>
  </head>
  <body></body>
</html>
```

**Output**

<img src="/icp/27/output-1.png" alt="output-1" width="600px"/>

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const response = confirm("Do you want to cancel this order?");
      document.write(response);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

<img src="/icp/27/output-1.png" alt="output-1" width="600px"/>

<img src="/icp/27/output-2.png" alt="output-2" width="600px"/>

## prompt()

`prompt()` are used to take input from user. in prompt we pass one message that message show in prompt popup.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const age = prompt("Enter Your Age: ");
      document.write(age);
    </script>
  </head>
  <body></body>
</html>
```

**Output**

<img src="/icp/27/output-3.png" alt="output-3" width="600px"/>

<img src="/icp/27/output-4.png" alt="output-4" width="600px"/>

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const age = prompt("Enter Your Age: ");
      document.write("You are " + age + " years old.");
    </script>
  </head>
  <body></body>
</html>
```

**Output**

<img src="/icp/27/output-5.png" alt="output-5" width="600px"/>

In the above program we can create a `age` variable. In that variable we store prompt value. Next line we print that variable and give proper message and print formatted way.

### Default Value in Prompt

**Syntax :**

`prompt(text, defaultText)`

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const motherToungue = prompt("Enter your mother toungue", "marathi");
    </script>
  </head>
  <body></body>
</html>
```

**Output**

<img src="/icp/27/output-6.png" alt="output-6" width="600px"/>

In the above program in prompt we pass to argument first is message or text and second is default value so in the output we it will show the default
value.

**Code**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JS 💛</title>
    <script>
      const name = prompt("Enter Your Name : ");
      const email = prompt("Enter Your email : ");
      const mobile = prompt("Enter Your mobile : ");

      document.write("Name: " + name + "<br/>");
      document.write("Email: " + email + "<br/>");
      document.write("Mobile: " + mobile + "<br/>");
    </script>
  </head>
  <body></body>
</html>
```

**Output**

<img src="/icp/27/output-7.png" alt="output-7" width="600px"/>

<img src="/icp/27/output-8.png" alt="output-8" width="600px"/>

<img src="/icp/27/output-9.png" alt="output-9" width="600px"/>

<img src="/icp/27/output-10.png" alt="output-10" width="600px"/>
