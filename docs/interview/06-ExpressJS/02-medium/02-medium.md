### ExpressJS Medium

<details>
  <summary>How to create basic server in ExpressJS?</summary>

Creating a basic server in `Express.js` is an easy process. Express.js is a commonly used web application framework for Node.js that simplifies the task of building web applications and APIs. Here are the steps you can follow to create a basic server using Express.js:

1. **Install Node.js and npm :**
   Assuming you have already knowledge about the `Node.js`

2. **Initialize your project :**
   Create a new directory for your project Run the `npm init -y` command to initialize a new Node.js project and create a `package.json` file .

3. **Install Express :**
   Install Express.js as a dependency for your project using the `npm install express` command:

4. **Create your server file index.js :**
   Create a new file `index.js` using the JavaScript module system. Update the `package.json` file with `"type": "module"`, and open it in your preferred code editor, preferably Visual Studio Code."

5. **Write the server code :**

```js showLineNumbers=true
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000; // default PORT for development or  5000

// Define routes
app.post("/students", (req, res) => {
  // In real life scenario we process the data from the server and return the results to clients
  const student = {
    name: "Saurabh Jaykar",
    age: "22",
    email: "json@gmail.com",
  };
  res.json({
    success: true,
    data: student,
    message: "students add successfully",
  });
});
app.get("/students", (req, res) => {
  const students = [];
  res.json({
    success: true,
    data: students,
    message: "All students Fetch successfully",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening at port : ${PORT}`);
});
```

## Express.js Server for Students Data :

This code is a basic setup for a backend server using Express.js, a JavaScript framework.

There are two main things it does: one is **add a student** when you ask it to (`POST /students`), and the other is to give you a **list of all students** (`GET /students`).

When you add a student, it says it worked and gives you some student details in JSON format. When you ask for all students, it says it's successful but gives you an empty list (assuming the student's data).

The server runs on a default port of 5000 but can use a different one if you want. It's the behind-the-scenes part that takes care of managing student data.

</details>

<details>
  <summary>What are the HTTP status codes? Give example of frequently used status codes.</summary>
  TODO: add answer @RahulJadhav
</details>

<details>
  <summary>How to return HTTP status code in API response?</summary>
  TODO: add answer @RahulJadhav
</details>

<details>
  <summary>How to read data from the request query, params, body and headers?
  
  </summary>
  The web framework and programming language you are using define how to read data from the request query, parameters (params), body, and headers. I will provide examples of specific common languages and frameworks:
<br/><br/>

**1. Reading Data from Request Query:**

 <ul>
 <li> Theory 📝 :</li>
  <ul> 
  <li>Query parameters are key-value pairs connects to the end of a URL. </li>
  <li> They are typically used for GET requests.</li>
  </ul>
   <li> Example  🚀 : </li>

```js showLineNumbers=true
// Reading query parameters
const queryParam = req.query.paramName;
```

 </ul>

**2. Reading Data from URL Params (Route Params):**

 <ul>
 <li> Theory 📝 :</li>
  <ul> 
  <li>The URL path shows URL parameters, also known as route parameters. </li>
  <li> They are specified in the route an explanation and can represent dynamic values.</li>
  </ul>
   <li> Example  🚀 : </li>

```js showLineNumbers=true
// Reading URL parameters
const urlParam = req.params.id;
```

 </ul>

**3. Reading Data from Request Body:**

 <ul>
 <li> Theory 📝 :</li>
  <ul> 
  <li>The request body contains data sent by the client in the HTTP request. </li>
  <li> It's commonly used in POST requests to send data like JSON or form data.</li>
  </ul>
   <li> Example  🚀: </li>

```js showLineNumbers=true
// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Reading request body
const bodyData = req.body;
```

 </ul>

**4. Reading Data from Headers:**

 <ul>
 <li> Theory 📝:</li>
  <ul> 
  <li>HTTP headers provide additional information about the request or response. </li>
  <li> Headers are key-value pairs in the request or response.</li>
  </ul>
   <li> Example  🚀: </li>

```js showLineNumbers=true
// Reading headers
const headerValue = req.headers["header-name"];
```

 </ul>

**Summary 🎉:**

**Example:**

```js showLineNumbers=true
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.get("/endpoint/:id", (req, res) => {
  // 1. Reading query parameters
  const queryParam = req.query.paramName;

  // 2. Reading URL parameters
  const urlParam = req.params.id;

  // 3. Reading request body
  const bodyData = req.body;

  // 4. Reading headers
  const headerValue = req.headers["header-name"];

  // Your logic here using the extracted data

  res.send("Data read successfully!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

In this example, JSON contained in the request body is handled using middleware (body-parser). The methods req.query, req.params, req.body, and req.headers are used to access the several data sources (query, params, body, and headers), respectively. Based on the requirements and specific server configuration you have, modifies can be required.

</details>
