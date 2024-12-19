---
title: "Middleware"
description: "middleware in backend"
hide_table_of_contents: true
---

## 1. What is middleware?

Middleware in Express.js are functions that run between receiving a request and sending a response. They can access the `request (req)`, `response (res)`, and a `next()` function to move to the next middleware.

# middleware says - आगे जाने से पहले मुझसे मिलके जाना |

## 2. How middleware work ?

### 1. Request comes in:

- A client `(like a browser)` sends a request to the server.

### 2. Middleware runs:

**Middleware functions process the request**

- Modify the request or response objects.
- Log information.
- Perform tasks like `authentication or data validation`.
- End the `request-response` cycle by sending a response.
- Pass control to the next middleware using` next()`.

### 3. Next middleware:

- If `next()` is called, the next `middleware` in the stack is executed. If no middleware is left, the final route handler sends the `response`.

### 4. Response goes out:

- After all middleware and the route handler have run, the response is sent back to the client.

<img src="/expressjs/12/01.png"  width="700px" />

## Example

```js
import express from "express";

const app = express();
const middleware = (req, res, next) => {
  console.log("Your middleware working fine ");

  next();
};

const postOrder = (req, res) => {
  res.json({
    success: true,
    message: "Order placed successfully ",
  });
};

app.post("/order", middleware, postOrder);

app.listen(5005, () => {
  console.log(`Server is running on port 5005`);
});
```

- A client sends a `POST request` to `/order`.
- The `middleware` function executes:
- Logs `"Your middleware working fine"` to the console.
- Calls `next()`, allowing the next handler to run.
- The` postOrder` function executes
  **Sends a JSON response with the success message.**

## Happy coding 🤖
