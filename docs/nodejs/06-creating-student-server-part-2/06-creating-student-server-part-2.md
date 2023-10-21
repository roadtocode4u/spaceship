---
title: Creating Student Server Part-2
description: "Creating Student Server Part-2"
hide_table_of_contents: true
---

## Mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data, manage relationships between data, perform validation, and translate between objects in code and their representation in MongoDB.

## Why Use Mongoose?

**Mongoose offers several advantages for working with MongoDB and Node.js:**

1. **Schema Validation:** Mongoose allows you to define a schema for your data and perform validation on the incoming data before saving it to the database. This helps maintain data integrity and consistency.

2. **Relationship Management:** Mongoose provides features to define and manage relationships between different data models. You can establish references or embed documents within each other.

3. **Type Casting:** Mongoose handles type casting of data, allowing you to define the types for fields in your schema. It automatically converts data to the specified types, reducing the need for manual type conversion.

4. **Query Building:** Mongoose provides a powerful and intuitive API for building database queries. You can perform CRUD operations, apply filters, sorting, pagination, and more using the query builder methods.

5. **Business Logic Hooks:** Mongoose supports pre and post hooks for performing actions before or after specific database operations. This enables you to implement custom business logic and perform additional actions during the data lifecycle.

6. **Middleware Support:** Mongoose supports middleware functions that can intercept and modify the behavior of certain operations, such as saving or deleting documents. This allows you to add custom logic and extend Mongoose's functionality.

## Installation

To install Mongoose, you can use the npm package manager. Open your terminal and run the following command:

```bash
npm install mongoose
```

<img src="/icp/47/step-3.png" alt="step-3" height="300px"/>

This will download and install the Mongoose package into your project.

## Importing Mongoose

The method for importing Mongoose depends on the version of Node.js you are using and your project's configuration.

If you are using Node.js with support for ECMAScript modules (ESM), you can import Mongoose using the `import` statement:

```js
import mangoose from "mangoose";
```

Make sure your project's package.json file includes "type": "module".

If you are using an older version of Node.js or your project is not configured for ECMAScript modules, you can use the `require` statement to import Mongoose:

```js
const mongoose = require("mongoose");
```

## Connecting to MongoDB

To connect to MongoDB using Mongoose, you need to provide the connection URL and handle the connection status.

**Here's an example of connecting to MongoDB using Mongoose in an Express.js application:**

**Syntax :**

```js
import mongoose from "mongoose";

mongoose.connect("URL", "CALLBACK FUNCTION");
```

**Example :**

```js  title="school-server/index.js" showLineNumbers
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const PORT = 5000;

async function connectionMongoDB() {
  const conn = await mongoose.connect(
    "mongodb+srv://<username>:<password>@mangodb.4kkisqa.mongodb.net/<dbname>"
  );
  if (conn) {
    console.log("Mongo DB connected");
  } else {
    console.log("Error");
  }
  connectMongoDB();
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
```

In the example above, we import the `express` and `mongoose` packages. Then, we define an asynchronous function `connectToMongoDB()` that connects to the MongoDB server using `mongoose.connect()`. The connection URL `mongodb+srv://<username>:<password>@mangodb.4kkisqa.mongodb.net/<dbname>` specifies the `username` and `password` the name of the database `dbname`. Adjust the URL according to your MongoDB server configuration.

If the connection is successful, it logs a success message. If there's an error, it logs the error message.

## Designing Schemas

In Mongoose, a schema represents the structure of a document, defining the fields, their types, and additional properties. Schemas provide a way to enforce data consistency and define validation rules.


**Here's an example of defining a schema for a Student model:**

**File: models/Student.js**

```js title="school-server/src/models/students.js" showLineNumbers
import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  mobile: String,
});

const Student = model("Student", studentSchema);

export default Student;
```

In the example above, we import the `Schema` and `model` from Mongoose. We define a `studentSchema` using the `Schema` constructor, specifying the fields and their types. Each field can have additional properties such as `required` and `unique` to enforce constraints.

The `model` function is then used to create a model named `Student` based on the `studentSchema`. This model can be used to perform CRUD operations on the corresponding MongoDB collection.

## Using the Schema in an Express.js Application

Now let's integrate the Student model into an Express.js application for creating and fetching students.

**File Name : index.js**

```js title="school-server/index.js" showLineNumbers
import express from "express";
import mongoose from "mongoose";
import Student from "./src/models/Student.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = 5000;

async function connectMongoDB() {
  const conn = await mongoose.connect(process.env.MONGO_URL);
  if (conn) {
    console.log("Mongo DB Connected");
  } else {
    console.log("Error");
  }
}
connectMongoDB();

app.post("/student", async (req, res) => {

 const {name, email, mobile, age} = req.body;

 if (!name) {
    return res.json({
      success: false,
      message: "name is required",
    });
  }

  if (!age) {
    return res.json({
      success: false,
      message: "age is required",
    });
  }

  if (!mobile) {
    return res.json({
      success: false,
      message: "mobile is required",
    });
  }

  if (!email) {
    return res.json({
      success: false,
      message: "email is required",
    });
  }

  const newStud = new Student({
    name: name,
    age: age,
    email: email,
    mobile: mobile,
  });

  const savedStudent = await newStud.save();

  res.json({
    success: true,
    data: savedStudent,
    message: "Student Saved Successfully",
  });
});

app.get("/students", async (req, res) => {
  const students = await Student.find();

  res.json({
    success: true,
    message: "Students fetched Successfully",
    data: students,
  });
});

app.get('/student', async (req, res)=>{
    const {email} = req.query;

    const student = await Student.findOne({email: email})

    res.json({
        success: true,
        data: student,
        message: "Successfully fetched student"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
```

In the example above, we import the necessary packages and models. We configure the Express.js application to parse JSON requests using `app.use(express.json())`. Then, we define three routes: one for creating a student `/student`, second for fetching all students `/students` and third for fetching a Single Student `/student`.

In the `/student` route, we retrieve the `name`, `email`, `mobile` and `age` from the request body. We create a new instance of the `Student` model and save it to the database using `newStudent.save()`. The saved student data is returned in the response.

In the `/students` route, we use `Student.find()` to retrieve all students from the database. The fetched students are returned in the response.

In the `/student` this route, we use `Student.findOne({email: email})` handler is designed to fetch a specific student's information from the database based on their **email address** and respond with a JSON object containing the success status, the retrieved student data, and a success message.

## Path Params

**Path Parameters in API**

Path parameters are dynamic values in a URL that allow you to customize API endpoints by inserting specific values into the URL path. They are denoted by a colon (e.g., `:parameter`) and are commonly used to pass data to the server.

**Example: Creating a User API with Path Parameter**

- **HTTP Method:** GET
- **Endpoint:** `/users/:userId`
  - `:userId` (Path Parameter): This dynamic part of the URL captures the user's unique identifier.

**API Request Example:**

To retrieve a user's information, make a GET request to the following URL, replacing `:userId` with the actual user's identifier:

```jsx
GET /users/123
```

**Response:**

The server retrieves user details based on the `userId` provided and responds with the user's information.

Path parameters provide a clean and dynamic way to handle various requests within your API, allowing you to fetch or manipulate specific data by inserting the appropriate values into the URL.


```jsx title="school-server/index.js"
app.delete('/student/:_id', async(req, res)=>{
    const { _id } = req.params;

    await Student.deleteOne({_id : _id})

    res.json({
        success: true,
        data: {},
        message: `Successfully deleted student with id ${_id}`,
    }) 
})
```

The `:_id` path parameter is extracted from the request URL using `req.params`.

The `Student.deleteOne()` method is used to delete the student record based on the provided `_id.`

## Difference between put and patch

The main difference between the HTTP PUT and PATCH methods lies in how they handle updates to a resource:

### 1. **HTTP PUT:**

   - **Replace:** The HTTP PUT method is used to completely replace or update a resource or entity at a specific URL.

   - **Full Update:** When you use PUT, you need to send a complete representation of the resource, including all fields. If any data is missing in the request, it's assumed to be intentionally set to null or the default value.

   - **Example:** If you have a user resource at `/users/123`, using PUT to update it would require sending the full user object, and it would replace the entire user resource with the new data.

   ```jsx title="school-server/index.js"
   app.put('/student/:_id', async(req, res)=>{
    const { _id } = req.params;
    const {name, age, mobile, email} = req.body;

    if (!name) {
    return res.json({
      success: false,
      message: "name is required",
    });
    }

    if (!age) {
    return res.json({
      success: false,
      message: "age is required",
    });
    }

    if (!mobile) {
    return res.json({
      success: false,
      message: "mobile is required",
    });
    }

    if (!email) {
    return res.json({
      success: false,
      message: "email is required",
    });
    }

    await Student.updateOne(
        {_id: _id},
        {$set: {
            name: name,
            age: age,
            mobile: mobile,
            email: email
        }})

        const updatedStudent = await Student.findOne({_id: _id});

        res.json({
             success: true,
             data: updatedStudent,
             message: "Successfully updated"
        })
    })
   ```

### 2. **HTTP PATCH:**

   - **Partial Update:** The HTTP PATCH method is used to apply a partial update to a resource. It allows you to send only the changes that need to be made, rather than sending the complete resource representation.

   - **Selective Update:** With PATCH, you can update specific fields or properties without affecting the rest of the resource. It's suitable for making minor updates without sending the complete resource representation.

   - **Example:** If you have a user resource at `/users/123`, using PATCH to update it would require sending only the fields that need to be changed, and the existing data not specified in the request would remain unchanged.

   ```jsx title="school-server/index.js"
    app.patch('/student/:_id', async(req, res)=>{
    const { _id } = req.params;
    const {name, age, mobile, email} = req.body;

    const student = await Student.findById(_id);

    if(name){
        student.name = name;
    }

    if(age){
        student.age = age;
    }

    if(mobile){
        student.mobile = mobile;
    }

    if(email){
        student.email = email;
    }

    const updatedStudent = await student.save();

    res.json({
        success: true,
        data: updatedStudent,
        message: "Successfully updated"
     })
   })
   ```

 PUT is used for full resource replacement and requires sending the complete representation of the resource, while PATCH is used for partial updates and allows for selective changes to specific fields within the resource.




## .env file

Make sure to create a `.env` file in the root directory of your project and add your MongoDB connection URL like this:

- Create a `models` folder and then create `js` file take first letter of js file always be capital.

**File Name : .env**

```js title="school-server/.env" 
MONGO_URL = mongodb+srv://<username>:<password>@mangodb.4kkisqa.mongodb.net/<dbname>
```
Adjust the URL according to your MongoDB server configuration.

:::tip

Put your username and password in the url for database connection.

:::

## .gitignore file

A **.gitignore file** is a configuration file used in version control systems, specifically Git, to specify which files and directories should be ignored and not tracked by the version control system. It is particularly useful for excluding files that are generated during the development process, temporary files, or sensitive information that should not be shared in a repository. Here's an explanation of the key aspects of a .gitignore file.

**File Name : .gitignore**

```js title="school-server/.gitignore" 
.env
/node_modules
```
