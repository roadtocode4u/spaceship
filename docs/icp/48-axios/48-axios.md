---
title: API calls from React Using axios
description: "API calls from React Using axios"
hide_table_of_contents: true
---

### Creating an API to Read Specific Student Data

The code you provided is an example of an API endpoint in a Node.js application that retrieves specific student data based on the email parameter.

**Let's break down the code and understand how it works:**

```js
app.get("/student", async (req, res) => {
  const email = req.query.email;

  const student = await Student.findOne({ email: email });

  if (student) {
    res.json({
      success: true,
      message: "Student fetched successfully",
      data: Student,
    });
  }

  res.json({
    success: false,
    message: "Student not found",
    data: null,
  });
});
```

* The `/student` route is defined using `app.get`, which handles GET requests to the `/student` endpoint.

* The email parameter is extracted from the query string using `req.query.email`. It assumes that the email parameter is passed in the query string of the URL.

* The `Student.findOne()` method is used to find a student record in the database based on the email.

* If a student record is found, a JSON response is sent back with the student data and a success message.

* If no student record is found, a JSON response is sent back with a failure message.

### Making a Request to the API Endpoint

To retrieve specific student data using the API, you need to make a GET request to the `/student` endpoint and provide the email as a query parameter.

**Here are the steps to make the request:**

1. Open a tool like Thunder Client or Postman to send HTTP requests.
2. Create a new request.
3. Set the request method to GET.
4. Set the URL to `http://localhost:5000/student?email=<email>`, replacing `<email>` with the email of the student you want to fetch.

**Example :**

```js
http://localhost:5000/student?email=harshda@gmail.com&regNo=1
```

5. Send the request.

The response will contain the student data if a matching record is found in the database. Otherwise, it will indicate that the student was not found.

**Example :**

**Input :**

<img src="/icp/48/step-1.png" alt="step-1" width="600px"/>

**Output :**

<img src="/icp/48/step-2.png" alt="step-2" width="600px"/>

### Using Axios to Call the API in a React App

To call the API from a React app, you can use the Axios library, which is a popular choice for making HTTP requests.

Here's how you can set up and use Axios in a React app:

1. Create a new React app by running the following command in your terminal:

```js
npx create-react-app frontend
```

2. Install the Axios library by running the following command in the terminal:

```js
npm install axios
```

3. Open the App.js file in the src directory of your React app.

4. Import the Axios library at the top of the file:

```js
import axios from "axios";
```

5. Create an async function, let's name it `loadData`, inside the `App` component:

```js
async function loadData() {
  const response = await axios.get("/student?email=harshda@gmail.com");
}
```


**To call API's in react app.**

Firstly you have create simple react app.

```js
npx create-react-app frontend
```

Then install axiox library for calling frontend API's in the react app.In the react app remove unwanted content from `App.js` file.Then create `async function` and set proxy in `package.json` file.

```js
 "proxy": "http:localhost:5000"
```

**file Name:** App.js

```js
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  async function loadData() {
    const response = await axios.get("/student?email=harshda@gmail.com");
    console.log(response.data.data.fullname);
  }
  loadData();

  return (
    <div>
      <h1>Making API call from fontend</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default App;
```
