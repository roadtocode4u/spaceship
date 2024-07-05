---
title: "Separating Controllers"
description: "Separating Controllers in ExpressJS"
hide_table_of_contents: true
---

## Why we separate Controllers?

Separating controllers in `Express.js` keeps the code `organized` and `easy to manage`. It helps with `updating` and `scaling the app`, `improves code reuse and testing`, and keeps different parts of the code separate. This also makes it `easier for multiple developers` to work on the app without `interfering` with each other.

## How to create healthy endpoint with `controller`?

1. First create a folder in `root directory` by the name of `controller`.

   <img src="/expressjs/04-controller/1.png"  width="600px"/>

2. next create a file by the name of `health.js` in controller .
   <img src="/expressjs/04-controller/2.png"  width="600px"/>
3. Create a arrow function by the name of `getHealth` in `health.js`, and export it by `named export `

```js
const getHealth = (req, res) => {
  res.json({
    success: true,
    massage: "server is healthy",
  });
};

export { getHealth };
```

4. Import that function in `index.js` file which you have exported , in `health.js` file by the name of `getHealth`.

```js
import { getHealth } from "./controller/health.js";
```

5. Open `index.js` file and create a `endpoint` by the name of `health` and call that `getHealth` function

```js
app.get("/health", getHealth);
```

6. Now start the server by the command `npm start` and see in terminal `your server is running on port 5000` .

7. Now check it browser or in postman.

### Postman output.

   <img src="/expressjs/04-controller/4.png"  width="600px"/>

### Browser output

   <img src="/expressjs/04-controller/5.png"  width="600px"/>

## Happy Coding 🤖
