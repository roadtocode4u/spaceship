---
title: "Creating Basic Server"
description: "Creating basic server from the scrach"
hide_table_of_contents: true
---

### What is Server ?

A server is a computer or software that shares information or services with other computers over a network. It responds to requests and provides resources like websites, databases, or files to users or other programs.

### What is Port ?

A `port` is a `number` that helps the `server` identify different services. It's like a` door` or `window `that allows data to `enter and exit`, enabling the server to `isten for requests.`

### What is ExpressJS ?

`Express.js` `Fast, simple Node.js framework` for building `web apps` and `APIs` by providing essential features like `routing, middleware support   `, and `template engines.`

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

```js
import express from "express";

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`your server is running on port ${PORT}`);
});
```

:::danger
Common Mistakes

:::

1. ### Always use git bash for starting the server or any of the task related to npm command.

 <img src="/expressjs/02/common-pitfall2.png"  width="600px"/>

2. ### if you get error `Address already in use` :

 <img src="/expressjs/02/common-pitfall.png"  width="600px"/>

** change your port number or check is it running on another terminal .**
