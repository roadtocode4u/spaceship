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
  HTTP status codes are three-digit numbers returned by a web server in response to a client's request made to the server. They indicate the success or failure of the request. <br/> <br/>

#### Here the some example of HTTP status code ⬇

**1. 1XX (Informational)📝**

- `100 Continue:` The client should continue with its request.

**2. 2XX (Success)😀**

- `200 OK:` The request was successful.
- `201 Created:` The request was successful, and a new resource was created.
- `204 No Content:` The server successfully processed the request but there is no content to send in the response.

**3. 3XX (Redirection)🎯**

- `301 Moved Permanently`: The requested resource has been permanently moved to a new location.
- `302 Found`: The requested resource has been temporarily moved to a different location.
- `304 Not Modified`: Indicates that the resource has not been modified since the version specified by the request
  headers.

**4. 4XX (Client Error)❌**

- `400 Bad Request`: The server cannot process the request due to a client error.
- `401 Unauthorized`: The request requires authentication.
- `403 Forbidden`: The server understood the request, but it refuses to authorize it.
- `404 Not Found`: The requested resource could not be found on the server.

**5. 5XX (Server Error)😱**

- `500 Internal Server Error`: A generic error message returned when an unexpected condition was encountered by the server.
- `502 Bad Gateway`: The server, while acting as a gateway or proxy, received an invalid response from an upstream server.
- `503 Service Unavailable`: The server is not ready to handle the request. Common causes are a server that is down for maintenance or is overloaded.

</details>

<details>
  <summary>How to return HTTP status code in API response?</summary>
  Returning HTTP status codes in API responses is outcome of a request to the client.

```js
app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "All Good",
  });
});
```

</details>
