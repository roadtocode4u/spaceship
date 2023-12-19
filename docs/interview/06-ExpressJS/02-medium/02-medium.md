### ExpressJS Medium

<details>
  <summary>How to create basic server in ExpressJS?</summary>

Creating a basic server in `Express.js` is an easy process. Express.js is a commonly used web application framework for Node.js that simplifies the task of building web applications and APIs. Here are the steps you can follow to create a basic server using Express.js:

1. **Install Node.js and npm :**
   Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from the official website : **[Node.js](https://nodejs.org/en)** .

2. **Initialize your project :**
   Create a new directory for your project and navigate to it in the terminal. Run the `npm init -y` command to initialize a new Node.js project and create a `package.json` file .

3. **Install Express :**
   Install Express.js as a dependency for your project using the `npm install express` command:

4. **Create your server file index.js :**
   Create a new file `index.js` using the JavaScript module system. Update the `package.json` file with `"type": "module"`, and open it in your preferred code editor, preferably Visual Studio Code."

5. **Write the server code :**

```js showLineNumbers=true
import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000; // You can choose any available port

// Define routes
app.post("/students", (req, res) => {
  res.json({
    success: true,
    data: {},
    message: "students add successfully",
  });
});
app.get("/students", (req, res) => {
  res.json({
    success: true,
    data: [],
    message: "All students Fetch successfully",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
```

## Express.js Server for Students Data :

This Express.js code sets up a basic server for handling student data. It begins by importing the Express framework and initializing an `app` variable. The middleware `express.json()` is utilized to facilitate the parsing of incoming JSON data within the request body. The server is configured to `listen on port 3000`. Two routes are defined: one for handling **HTTP POST requests to "/students" and another for handling HTTP GET requests to the same endpoint**.

In the POST route, a JSON response is returned, indicating the success of adding students. The response includes an empty data object and a corresponding success message. Similarly, the GET route responds with a JSON object signifying success, an empty array as data (assuming no students are present), and a success message.

To run the server, ensure you have Node.js and npm installed. Start the server with the command `npm start`. The server will be accessible at `http://localhost:3000`. The console will log a message confirming the successful initiation of the server.

This code provides a foundational structure for an Express.js application, demonstrating route handling for adding and fetching student data with appropriate JSON responses.

</details>
