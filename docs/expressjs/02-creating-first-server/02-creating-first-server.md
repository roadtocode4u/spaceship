---
title: "Creating Basic Server"
description: "Creating basic server from the scrach"
hide_table_of_contents: true
---

## What is server?

  <img src="/expressjs/02/restaurant_image.jpeg"  width="600px"/>

- Server : Like the restaurant’s kitchen staff and waiters. They take your request (order), prepare the response (food), and send it back. A powerful computer that stores and gives information to other computers.
- Backend : Like the kitchen and storage room. It refers to the part of a software application that handles data storage, processing, and business logic, typically running on the server.
- Frontend : Like the dining area and menu. The frontend is the user-facing part of an application, designed to interact with the user.
- API : Like the waiter who takes your order from the menu to the kitchen and brings back your food. They’re the messenger between the customer (frontend) and kitchen (backend).

## Which libraries needs to install?

- Library : Libraries are ready-made code tools that help developers build the server-side (backend) of applications faster, without writing everything from scratch.

  We can install following libraries like express,nodemon , dotenv, mongoose , cors, etc. for creating server.

## How to install libraries?

You can install libraries one by one as you need. For installing single library.

1. Open your project folder in VScode.
2. Open terminal and enter command

```js
npm install library_name;
```

eg.

```js
  npm install express;
```

You can install more libraries at at a time by command :

```js
  npm install express nodemon dotenv mongoose cors;
```

   <img src="/expressjs/02/6.png"  width="600px"/>

### How to create basic server ?

1. First create a folder on your desktop.
2. Open that folder in VS Code Editior.
3. Then type a command in terminal `npm init -y`, This command initialize your project with default settings, and sets up a basic configuration for your `Node.js` project without asking for manual input.
   <img src="/expressjs/02/1.png"  width="600px"/>

4. it will create `package.json` file .
5. Replace the `   "test": "echo \"Error: no test specified\" && exit 1"` script with `"start": "node index.js".` This sets the command to run when you execute `npm start` in your terminal. It runs the `index.js` file using `Node.js.`

   <img src="/expressjs/02/5.png"  width="600px"/>

6. "module" after the "main" field to specify that your project uses ES modules, `"type": "module"` This indicates that your project uses ES modules for JavaScript files.

   <img src="/expressjs/02/2.png"  width="600px"/>

7. Create a file with the name of `index.js`
8. Now install Express, just type `npm install express` in your terminal and hit enter. This command downloads and installs Express for your project.

 <img src="/expressjs/02/3.png"  width="600px"/>

9. Now ` import express form 'express"` in `index.js` file.
10. Using this express initialize a server or app. `const app = express();`

11. Create a variable by the name of PORT `const PORT =  5000`

```js
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
```

12. This code start express server app listening on the specified `PORT 5000`

 <img src="/expressjs/02/4.png"  width="600px"/>

13. Create our first API by get method `app.get()`. The GET method is used to request data from a server without changing anything on the server.

```js
app.get("/welcome", (req, res) => {
  res.send("Welcome to the server..!🎉");
});
```

Here we give to the path and controller to our API method.
Where
`'/welcome'` is path and
`(req,res) => {res.send("Welcome to the server..!🎉")}` is controller function.

```js
import express from "express";

const app = express();

const PORT = 5000;

app.get('/welcome', (req,res) => {
  res.send("Welcome to the server..!🎉)
});

app.listen(PORT, () => {
  console.log(`your server is running on port ${PORT}`);
});
```

14. Now open the terminal and start server by command :

```js
 npm start;
```

15. Check your welcome API by entering URL in the browser address zone. Your browser sends a GET request to fetch the page’s content.
    The url is :

```js
"http://localhost:5000/welcome";
```

   <img src="/expressjs/02/output.png"  width="600px"/>

:::danger
Common Mistakes

:::

1. ### Always use git bash for starting the server or any of the task related to npm command.

 <img src="/expressjs/02/common-pitfall2.png"  width="600px"/>

2. ### if you get error `Address already in use` :

 <img src="/expressjs/02/common-pitfall.png"  width="600px"/>

** change your port number or check is it running on another terminal .**
