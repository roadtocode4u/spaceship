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
