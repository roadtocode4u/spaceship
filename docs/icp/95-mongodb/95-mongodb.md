---
title: MongoDB Interview Questions
description: "MongoDB Interview Questions"
hide_table_of_contents: true
---

<details>
<summary>1. What is MongoDB?</summary>
<p>

MongoDB is a popular `NoSQL` database system that provides high scalability, flexibility, and performance for managing large amounts of unstructured and semi-structured data.

</p>

</details>

<details>
<summary>2. What are the different databases available in MongoDB?</summary>
<p>

In MongoDB, there are three main databases: `admin`, `local`, and user-defined databases.

1. **admin**: The `admin` database is responsible for managing the MongoDB instance. It handles administrative tasks such as user management, authentication, and authorization.

2. **local**: The `local` database is used for internal purposes and stores data related to the MongoDB instance itself. It holds replica set metadata, keeps track of the local instance's configuration, and stores other temporary and transient data.

3. **User-defined databases**: MongoDB allows you to create user-defined databases based on your application's needs. These databases are created implicitly when the first document is inserted into a collection within that database.

For example, if you want to create a database called `mydb` to store data for a specific application, you can switch to it using the following command:

```
use mydb
```

This command creates the `mydb` database if it doesn't exist and switches to it. Once you have switched to a specific database, you can create collections within that database to organize and store your data.

</p>

</details>

<details>
<summary>3. What is the concept of a document in MongoDB?</summary>
<p>

A document in MongoDB is a set of `key-value` pairs. It is equivalent to a record or row in a relational database.

For Example,

```js
{
  {
    name: "Yogita",
    age: 21
  },
  {
    name: "Harshada",
    age: 22
  }
}
```

In this example, we have a documents with two embedded documents. Each document represent a person with their respective name and age field.

These examples showcase the basic structure of BSON documents and how key-value pairs are used to represent data in MongoDB. BSON's flexibility and efficient encoding make it suitable for storing and retrieving data in MongoDB, providing a powerful and scalable solution for managing unstructured and semi-structured data.

</p>

</details>

<details>
<summary>4. What is the meaning of a collection in MongoDB?</summary>
<p>

A collection is a group of related documents. It is the equivalent of a table in a relational database system. Collections in MongoDB are schema-less, meaning each document within a collection can have its own unique structure, unlike traditional tables where rows must adhere to a fixed schema.

Here is an example of creating a collection and inserting documents into it using the MongoDB shell:

1. Switch to the desired database:

   ```
   use mydb
   ```

2. Create a collection called "customers":

   ```
   db.createCollection("customers")
   ```

3. Insert documents into the "customers" collection:

   ```js
   db.customers.insertOne({ name: "John Doe", email: "john@example.com" });
   db.customers.insertOne({
     name: "Jane Smith",
     email: "jane@example.com",
     age: 30,
   });
   ```

In this example, we switch to the "mydb" database, create a collection called "customers" using the `createCollection()` method, and then insert two documents into the "customers" collection using the `insertOne()` method.

</p>

</details>

<details>
<summary>5. What is BSON in MongoDB?</summary>
<p>

BSON stands for Binary JSON. BSON is designed to be a more efficient and compact format for storing and transmitting data than plain text JSON.

For Example,

```js
{
  name: "Yogita",
  age: 21,
  city: "Ahemdnagar"
}
```

In the above Example,the document has three fields name, age, city. Each field has corresponding value.

</p>

</details>

<details>
<summary>6. What is the purpose of BSON in MongoDB, and how can BSON values be stored in the database?</summary>
<p>

The purpose of BSON in MongoDB is to provide a compact and efficient way to represent and store data. It extends the JSON format by adding additional data types and binary encoding, which enables efficient serialization and deserialization of data. BSON supports various data types such as strings, numbers, booleans, arrays, objects, dates, binary data, and more.

Example of storing BSON values in MongoDB using the MongoDB shell:

```JS
use mydb

db.myCollection.insertOne({
  name: "John Doe",
  age: 30,
  isActive: true,
  hobbies: ["reading", "gaming"],
  createdAt: new Date()
})
```

In this example, we switch to the `mydb` database, insert a document into the `myCollection` collection. The document contains various BSON values, such as a string `name`, a number `age`, a boolean `isActive`, an array of strings `hobbies`, and a date `createdAt`.

</p>

</details>

<details>
<summary>7. What are the key differences between MongoDB and traditional relational databases?</summary>
<p>

| Aspect                          | MongoDB                                                                            | Traditional Relational Databases                                           |
| ------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Data Model                      | Flexible and schema-less                                                           | Structured with fixed schemas                                              |
| Scalability                     | Horizontal scaling                                                                 | Vertical scaling                                                           |
| Query Language                  | MongoDB Query Language (MQL)                                                       | SQL (Structured Query Language)                                            |
| Schema Evolution                | Dynamic schema changes                                                             | Rigid schemas require planned downtime                                     |
| Data Integrity and Transactions | ACID transactions (within replica sets)                                            | ACID transactions across tables                                            |
| Use Cases                       | Unstructured/semi-structured data, real-time analytics, content management systems | Complex joins, strict data consistency, structured data, financial systems |

</p>

</details>

<details>
<summary>8. What is the process of inserting a document into a collection in MongoDB?</summary>
<p>

To insert a document into a collection in MongoDB, you can use the `insertOne()` or `insertMany()` methods.

- `insertOne()` method inserts a single document into a collection.

**Syntax :**

```js
db.collection.insertMany([
  {
    field1: value1,
    field2: value2,
    // ...
  },
  {
    field1: value3,
    field2: value4,
    // ...
  },
]);
```

**Example :**

```js
db.actors.insertMany([
  {
    name: "Shraddha Kapur",
    age: 30,
    movie: "Heropanti",
  },
  {
    name: "Sai Pallavi",
    age: 35,
    movie: "Feeda",
  },
  {
    name: "Rashmika",
    age: 36,
    movie: "Geeta Govind",
  },
]);
```

- `insertMany()` method inserts multiple documents into a collection.

**Syntax :**

```js
db.collection -
  name.insertOne({
    field1: value1,
    field2: value2,
    // ...
  });
```

**Example :**

```js
db.actors.insertOne({
  name: "Shraddha Kapur",
  age: 30,
  movie: "Heropanti",
});
```

</p>

</details>

<details>
<summary>9. How you can update documents in MongoDB?</summary>
<p>

To update documents in MongoDB, you can use the `updateOne()` or `updateMany()` methods.

**Syntax :**

```js
db.collection.updateOne({ field: value }, { $set: { newField: newValue } });
```

**Example :**

```js
db.actors.updateOne({ name: "Rashmika" }, { $set: { name: Karina } });
```

- `updateMany()` method updates multiple documents in a collection based on the given condition.

**Syntax :**

```js
db.collection.updateMany({ field: value }, { $set: { newField: newValue } });
```

**Example :**

```js
db.actors.updateMany({}, { $set: { name: "Varun Dhavan" } });
```

</p>

</details>

<details>
<summary>10. How to delete documents in MongoDB?</summary>
<p>

To delete documents from a collection, you can use the `deleteOne()` or `deleteMany()` methods.

- `deleteOne()` method deletes a single document from a collection based on the given condition.

**Syntax :**

```js
db.collection.deleteOne({ field: value });
```

**Example :**

```js
db.actors.deleteOne({ age: 30 });
```

- `deleteMany()` method deletes multiple documents from a collection based on the given condition.

**Syntax :**

```js
db.collection.deleteMany({ field: value });
```

**Example :**

```js
db.actors.deleteMany({});
```

</p>

</details>

<details>
<summary>11. What are the tools of MongoDB?</summary>
<p>

There are two mongodb tools:

**MongoDB Atlas:** MongoDB Atlas is a fully managed database service provided by MongoDB. It is a cloud-based platform accessible through a website where users can create an account and provision MongoDB databases. MongoDB Atlas eliminates the need for manual infrastructure setup and maintenance, as it takes care of tasks such as provisioning servers, handling backups, and scaling the databases. With MongoDB Atlas, you can easily deploy, manage, and scale MongoDB clusters in the cloud, offering a convenient and hassle-free experience for database hosting and administration.

**MongoDB Compass:** MongoDB Compass is a desktop application that provides a graphical user interface (GUI) for working with MongoDB databases. Unlike MongoDB Atlas, MongoDB Compass is a locally installed tool that allows you to access and interact with MongoDB databases on your own machine. It offers a visual interface to explore and analyze data, create and execute queries, manage indexes, and configure MongoDB instances. MongoDB Compass provides a user-friendly and intuitive experience for developers and administrators, enabling them to interact with MongoDB databases without relying on command-line interfaces.

</p>

</details>

<details>
<summary>12. What is the purpose of MongoDB campass?</summary>
<p>

MongoDB Compass is a graphical user interface (GUI) tool provided by MongoDB to interact with MongoDB databases. It is designed to make it easier for developers, database administrators, and other users to work with MongoDB without having to write complex command-line queries.

The main purpose of MongoDB Compass is to provide a visual representation of the data in your MongoDB databases and allow you to perform various operations, including:

1. **Querying and Filtering:** Compass allows you to construct and execute queries on your MongoDB data using a visual interface. You can specify query criteria, projection fields, sorting, and filtering options without writing the MongoDB query language syntax manually.

2. **Data Visualization:** Compass provides various graphical representations of your data, including tree and table views, which make it easier to understand the structure and relationships within your documents.

3. **Index Management:** You can create, modify, and delete indexes on your collections using Compass. It provides an intuitive interface to define index keys, options, and other configurations.

4. **Aggregation Pipeline Builder:** Compass includes a visual interface for constructing complex data aggregation pipelines. You can define stages, operators, and transformations using a drag-and-drop interface, which helps in building and debugging pipeline operations.

5. **Schema Analysis:** Compass can analyze the structure of your documents and provide insights into the distribution of fields, data types, and values. It helps you understand the schema of your collections and make informed decisions about indexing and data modeling.

</p>

</details>

<details>
<summary>13. What is the used of mongo shell?</summary>
<p>

Mongo Shell, also known as the MongoDB shell or simply the "mongo" shell, is a command-line interface (CLI) tool provided by MongoDB. It allows you to interact with MongoDB databases and perform various operations using the MongoDB Query Language (MQL), also known as the MongoDB shell commands.

The main purposes of the MongoDB shell are as follows:

1. **Querying and Manipulating Data:** The shell provides a powerful way to query, insert, update, and delete data in your MongoDB databases. You can execute MQL commands to perform CRUD (Create, Read, Update, Delete) operations on collections and documents.

2. **Scripting:** The shell supports scripting with JavaScript, allowing you to write and execute scripts that automate database tasks or perform complex operations. You can create scripts to batch process data, generate reports, or perform custom operations.

3. **Database Administration:** The shell provides administrative functions to manage databases, collections, users, indexes, and other MongoDB components. You can create users, assign roles, configure security settings, and manage database resources.

4. **Aggregation Framework:** The shell allows you to utilize the powerful Aggregation Framework provided by MongoDB. It enables you to perform advanced data processing and analysis, including grouping, filtering, transforming, and aggregating data across multiple documents and collections.

5. **Index Management:** You can create, modify, and delete indexes using the shell. Indexes help optimize query performance by allowing MongoDB to locate and retrieve data more efficiently.

The MongoDB shell is a versatile tool that provides direct access to MongoDB's functionality and allows for greater flexibility and control over your database operations. It is commonly used by developers, administrators, and power users who prefer the command-line interface for interacting with MongoDB.

</p>

</details>

<details>
<summary>14. Which command is used to drop the database from MongoDB?</summary>
<p>

In MongoDB, the `db.dropDatabase()` command is used to drop or delete a database. This command deletes the entire database, including all the collections and their associated data.

To drop a database using the MongoDB shell, follow these steps:

1. Open the MongoDB shell by running the `mongo` command in your terminal or command prompt.

2. Switch to the database you want to drop using the `use` command. For example, to switch to a database called "mydb", you would run:

   ```
   use mydb
   ```

3. Once you are in the desired database, run the `db.dropDatabase()` command to drop the database:

   ```
   db.dropDatabase()
   ```

   After executing this command, MongoDB will drop the current database, including all its collections and data. Please be cautious when running this command, as it cannot be undone and the data will be permanently deleted.

</p>

</details>

<details>
<summary>15. What is the purpose of the DB command?</summary>
<p>

In MongoDB, the `db` command is used to access and interact with a specific database in the MongoDB shell. It allows you to switch to a specific database and perform operations within that database.

The `db` command serves several purposes:

1. **Switching Databases**: By running `use <databaseName>`, the `db` command allows you to switch to the specified database. For example, to switch to a database called "mydb", you would run:

   ```
   use mydb
   ```

   Once you switch to a specific database, all subsequent operations will be performed within that database.

2. **Accessing Collections**: After switching to a database, you can use the `db` command to access collections within that database. For example, if you are in the "mydb" database and want to access a collection called "users", you can use:

   ```
   db.users
   ```

   This allows you to perform various operations on the "users" collection, such as querying, inserting, updating, and deleting documents.

3. **Executing Database Commands**: The `db` command also enables you to execute various database-level commands specific to the current database. These commands are usually prefixed with `db.`. For example, you can use `db.stats()` to retrieve statistics about the current database, or `db.dropDatabase()` to delete the current database.

</p>

</details>

<details>
<summary>16. How do you query documents in MongoDB?</summary>
<p>

To `read` or `retrieve` data from a collection, you can use the find() and findOne() methods.

- `find()` method returns all documents in a collection.

**Syntax :**

```js
db.collection.find();
```

**Example :**

```js
db.actors.find();
```

- `findOne()` method returns the first document that matches the given condition.

**Syntax :**

```js
db.collection.findOne({ field: value });
```

**Example :**

```js
db.actors.findOne({ movie: "Geeta Govind" });
```

</p>

</details>

<details>
<summary>17. What is the difference between the find() and findOne() methods in MongoDB?</summary>
<p>

| find()                                                                        | findOne()                                                       |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Returns a cursor with multiple matching documents.                            | Returns a single document matching the query.                   |
| Retrieves multiple documents.                                                 | Retrieves only the first matching document and stops searching. |
| Allows specifying query criteria, projections, sorting, and limiting results. | Useful for simple queries or retrieving a single document.      |
| Returns a result set that can be iterated over.                               | Returns the document itself, not a cursor.                      |

</p>

</details>

<details>
<summary>18. What is the significance of BSON in MongoDB?</summary>
<p>

BSON, which stands for Binary JSON, is a binary-encoded serialization format used by MongoDB to store and transfer data. It is designed to be lightweight, efficient, and fast, making it well-suited for the needs of a high-performance NoSQL database like MongoDB.

Here are some key points regarding the significance of BSON in MongoDB:

1. **Data Representation:** BSON is a binary representation of JSON-like documents. It extends the JSON format by including additional data types such as dates, binary data, and specific types for representing MongoDB's rich data structures like arrays and embedded documents.

2. **Efficient Storage:** BSON is a compact binary format, which means it takes up less space compared to a pure text-based format like JSON. The binary encoding reduces the overhead of parsing and serializing data, resulting in efficient storage and retrieval of documents.

3. **High Performance:** BSON's binary format allows for efficient serialization and deserialization of data. MongoDB can quickly encode and decode BSON documents, which contributes to faster read and write operations.

4. **Data Manipulation:** BSON's data types and structure closely align with MongoDB's document model. It provides support for a wide range of data types, including numbers, strings, dates, binary data, arrays, and embedded documents.

5. **Interoperability:** BSON is designed to be language-agnostic, meaning it can be used across different programming languages. MongoDB drivers provide native support for BSON, allowing developers to seamlessly work with BSON-encoded data.

</p>

</details>

<details>
<summary>19. How do you handle transactions in MongoDB?</summary>
<p>

To handle transactions in MongoDB, you can make use of the multi-document transaction feature introduced in MongoDB version 4.0 and later. Transactions provide a way to ensure atomicity, consistency, isolation, and durability (ACID) properties when executing multiple operations as a single unit of work.

Here is an overview of how to handle transactions in MongoDB:

1. Start a Session: Transactions in MongoDB are associated with a session. To begin a transaction, you need to start a session by calling `startSession()` on a MongoDB client or cluster.

```javascript
const session = client.startSession();
```

2. Start a Transaction: Once you have a session, you can start a transaction by calling `startTransaction()` on the session object. This sets the session in a transaction state, and subsequent operations within the session will be part of the transaction.

```javascript
session.startTransaction();
```

3. Perform Operations: Within the transaction, you can perform various read and write operations on the database using the session. These operations can include inserting documents, updating fields, deleting documents, and querying data.

```javascript
const collection = client.db("mydatabase").collection("mycollection");
collection.insertOne({ name: "John" }, { session });
collection.updateOne({ name: "John" }, { $set: { age: 30 } }, { session });
```

Note the `{ session }` parameter passed to each operation to associate it with the transaction.

4. Commit or Abort the Transaction: After performing the necessary operations within the transaction, you can decide whether to commit or abort the transaction.

- To commit the transaction, call `commitTransaction()` on the session:

```javascript
session.commitTransaction();
```

- To abort the transaction, call `abortTransaction()` on the session:

```javascript
session.abortTransaction();
```

5. End the Session: After committing or aborting the transaction, you should end the session by calling `endSession()` on the session object. This releases the session and frees up any associated resources.

```javascript
session.endSession();
```

</p>

</details>

<details>
<summary>20. What is sharding in MongoDB and why is it used?</summary>
<p>

Sharding in MongoDB allows data to be distributed across multiple servers, enabling scalability and better performance as the database grows.

Sharding in MongoDB is a technique used to horizontally partition data across multiple servers or nodes called shards. It allows you to distribute data across multiple machines to improve scalability, performance, and storage capacity of your MongoDB deployment.

In a sharded MongoDB cluster, each shard contains a subset of the data, and the data is distributed based on a shard key. The shard key is a field or set of fields that determine the placement of a document in a shard. MongoDB's balancer component automatically migrates data between shards as needed to maintain an even distribution.

</p>

</details>

<details> 
<summary>21. How do you create a backup of a MongoDB database?</summary>
<p>

You can use the `mongodump` command-line tool to create a backup of a MongoDB database and `mongorestore` to restore the backup when necessary.

</p>

</details>

<details>
<summary>22. What is the purpose of the $lookup operator in MongoDB?</summary>
<p>

The purpose of the $lookup operator in MongoDB is to perform a left outer join between two collections in a MongoDB database. It allows you to combine documents from multiple collections based on a specified matching condition.

The `$lookup` operator in MongoDB is used to perform a left outer join between two collections and retrieve matching documents from the "joined" collection. It allows you to combine data from multiple collections based on a common field or condition.

Syntax of the `$lookup` operator:

```javascript
db.sourceCollection.aggregate([
  {
    $lookup: {
      from: "joinedCollection",
      localField: "fieldInSourceCollection",
      foreignField: "fieldInJoinedCollection",
      as: "outputArray",
    },
  },
]);
```

In this example, `sourceCollection` is the collection you want to query, and `joinedCollection` is the collection you want to join. The `localField` specifies the field in the source collection to match, while `foreignField` specifies the field in the joined collection to match. The `as` field specifies the name of the output array that will contain the joined documents.

</p>

</details>

<details>
<summary>23. How do you handle relationships between documents in MongoDB?</summary>
<p>

In MongoDB, you can handle document relationships by either embedding related data within a document or storing references to other documents using ObjectIds. Another option is to use the `$lookup` operator to perform joins between collections and retrieve related documents based on matching conditions.

</p>

</details>

<details>
<summary>24. How do you perform geospatial queries in MongoDB?</summary>
<p>

To perform geospatial queries in MongoDB, you can create a geospatial index, use the $geoNear operator, employ other geospatial operators, and perform complex queries.

</p>

</details>

<details>
<summary>25. What is the purpose of the $push operator in MongoDB?</summary>
<p>

The `$push` operator in MongoDB is used to add an element to an array field within a document. It appends the specified value to the array.

The primary purpose of the `$push` operator is to update an existing array field by adding new elements to it. It is commonly used when you want to add data to an array without replacing the entire array.

**Syntax :**

```javascript
db.collection.updateOne({ _id: documentId }, { $push: { arrayField: value } });
```

In this example, `collection` refers to the name of the collection, `documentId` represents the identifier of the document you want to update, `arrayField` is the name of the array field in the document, and `value` is the element you want to append to the array.

**Example :**

```javascript
db.users.updateOne(
  { _id: ObjectId("12345") },
  { $push: { hobbies: "reading" } }
);
```

In this example, the `$push` operator adds the value "reading" to the `hobbies` array field of the document with the `_id` equal to "12345" in the "users" collection. If the `hobbies` field doesn't exist, `$push` creates it as an array with the specified value.

</p>

</details>

<details>
<summary>26. What are the best practices for optimizing MongoDB performance?</summary>
<p>

Some best practices for optimizing MongoDB performance include designing efficient data models, using appropriate indexing strategies, and carefully configuring hardware resources.

</p>

</details>

<details>
<summary>27. What are the datatypes in MongoDB?</summary>
<p>

In MongoDB, the datatypes include `String`, `Number`, `Boolean`, `Array`, `Object`, `Date`, `ObjectId`, `Null`, and `Binary Data`.

MongoDB supports a variety of data types to store and manipulate data within documents. Here are the commonly used data types in MongoDB:

1. **String:** Used to store textual data, such as names, descriptions, or sentences.

2. **Number:** Represents numeric values. It can be further classified into:

   - Double: Represents floating-point numbers.
   - Int32: Represents 32-bit signed integers.
   - Int64: Represents 64-bit signed integers.

3. **Boolean:** Represents either true or false.

4. **Object:** Represents a nested document within another document.

5. **Array:** Stores an ordered collection of values, including other data types. Arrays can contain multiple values of the same or different data types.

6. **ObjectId:** A unique identifier assigned to each document created in a MongoDB collection. ObjectId values are generated automatically by MongoDB.

7. **Date:** Represents a specific point in time, typically stored in UTC format. Dates can be used for timestamps or date-based operations.

8. **Binary Data:** Used to store binary data, such as images or files.

9. **Null:** Represents the absence of a value.

</p>

</details>

<details>
<summary>28. Which crud operations are available in MongoDB?</summary>
<p>

MongoDB supports the standard CRUD (Create, Read, Update, Delete) operations for manipulating data in a database. Here are the corresponding CRUD operations available in MongoDB:

1. Create (C):

   - `insertOne()`: Creates a new document and inserts it into a collection.
   - `insertMany()`: Creates multiple documents and inserts them into a collection.

2. Read (R):
   - `find()`: Retrieves documents from a collection based on specified criteria.
   - `findOne()`: Retrieves a single document from a collection based on specified criteria.
3. Update (U):
   - `updateOne()`: Updates a single document in a collection that matches specified criteria.
   - `updateMany()`: Updates multiple documents in a collection that match specified criteria.
4. Delete (D):
   - `deleteOne()`: Deletes a single document from a collection that matches specified criteria.
   - `deleteMany()`: Deletes multiple documents from a collection that match specified criteria.

</p>

</details>

<details>
<summary>29. What is API?</summary>
<p>

APIs, or **Application Programming Interfaces**, are sets of rules and protocols that allow different software applications to communicate and interact with each other. They define the methods, data formats, and protocols that applications can use to exchange information and perform various functions.

</p>

</details>

<details>
<summary>30. What is the purpose of APIs?</summary>
<p>

The primary purpose of APIs is to enable integration and interoperability between different software systems. APIs provide a standardized way for applications to request and exchange data, invoke functionality, and access services provided by other applications, platforms, or services. They act as intermediaries, allowing developers to interact with the functionality and data of other systems without needing to understand the internal implementation details.

</p>

</details>

<details>
<summary>31. Which http methods are available in MongoDB?</summary>
<p>

There are two http methods are available in MongoDB :

- get() method

The GET method is used to retrieve data from a specified resource on a server. It is a read-only method that does not modify or update any data on the server. In the provided example, an Express server is created using the `express` package. When a GET request is made to the `/students` endpoint, the server responds with a JSON array containing student names. The `res.json('students')` statement sends the response with the string students as the data.

```js
import express from "express";

const app = express();
app.get("/students", (req, res) => {
  res.json("students");
});
app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
```

- post() method

The POST method is used to send data to the server to create a new resource or perform an action. It submits data in the body of the request to be processed by the server. In the provided example, when a POST request is made to the `/student` endpoint, the server extracts the `name` and `roll` properties from the request body. Then, it sends a response with a JSON object containing a success status and a message indicating the successful creation of a student with the provided information.

```js
import express from "express";

const app = express();
app.get("/students", (req, res) => {
  const students = ["Saurabh", "Yogita", "Bandini", "Harshada", "Darshan"];
  res.json(students);
});

app.post("/student", (req, res) => {
  const name = req.body.name;
  const roll = req.body.roll;

  res.json({
    status: "success",
    message: `Student ${name} created with roll number ${roll}`,
  });
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
```

</p>

</details>

<details>
<summary>32. Which method you can used for retrieve data from server in MongoDB?</summary>
<p>

In the MongoDB, we can used get() method for retrieve data from the server.

</p>

</details>

<details>
<summary>33. Which method you can used for send data to the server in MongoDB?</summary>
<p>

In the MongoDB, we can used post() method for send data to the server.

</p>

</details>

<details>
<summary>37. What is Mongoose in MongoDB?</summary>
<p>

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data, manage relationships between data, perform validation, and translate between objects in code and their representation in MongoDB.

</p>

</details>

<details>
<summary>34. What are the advantages of Mongoose?</summary>
<p>

The advantages of Mongoose such as :

- Schema validation
- Relationship management
- Type casting
- Query building
- Business logic hooks
- Middleware support

</p>

</details>

<details>
<summary>35. How to install Mongoose, which is their command?</summary>
<p>

To install the Mongoose package in your Node.js project, you can use either npm (Node Package Manager) or yarn, which are popular package managers for Node.js. Here are the commands to install Mongoose using npm and yarn:

Using npm:

```
npm install mongoose
```

This commands will install the Mongoose package and its dependencies in your project. Make sure you run the command in the root directory of your project, where your `package.json` file is located.

```
node --version
npm --version
```

If the commands output the respective versions, you have Node.js and npm installed and can proceed with the Mongoose installation.

</p>

</details>

<details>
<summary>36. How you can import Mongoose in js file?</summary>
<p>

To import Mongoose into a JavaScript file, you can use the `require` statement if you are working with Node.js CommonJS modules or use the `import` statement if you are using ECMAScript modules (ES modules). The method you use depends on the module system you are working with.

Here's how you can import Mongoose using both approaches:

1. Using CommonJS (Node.js):

```javascript
const mongoose = require("mongoose");
```

In this case, you use the `require` function to import the 'mongoose' module and assign it to the `mongoose` variable.

2. Using ECMAScript modules (ES modules):

```javascript
import mongoose from "mongoose";
```

If you are working with ECMAScript modules, you can use the `import` statement to import the 'mongoose' module and assign it to the `mongoose` variable.

</p>

</details>

<details>
<summary>37. What is the role of the $set operator in MongoDB? </summary>
<p>

In MongoDB, the `$set` operator is used to update or add fields within a document. It is one of the most commonly used update operators and allows you to modify specific fields without affecting the entire document.

Here are the key roles and functionalities of the `$set` operator in MongoDB:

1. **Field Update:** The primary purpose of the `$set` operator is to update the value of a field within a document. It can be used in combination with the update methods, such as `updateOne()` or `updateMany()`, to modify existing fields or add new fields to a document.

2. **Field Addition:** If the specified field does not exist in the document, the `$set` operator will add the field with the specified value. This is useful for adding new fields to documents without affecting the existing fields.

3. **Field Replacement:** When using `$set`, if the specified field already exists in the document, its value will be replaced with the new value provided. This allows you to update the value of an existing field while leaving other fields untouched.

4. **Multiple Field Updates:** The `$set` operator supports updating multiple fields within a single update operation. You can specify multiple field-value pairs in the `$set` operator to modify multiple fields simultaneously.

5. **Nested Field Updates:** The `$set` operator can be used to update fields within nested documents or arrays. By using dot notation, you can specify the path to the nested field and update its value accordingly. This provides flexibility in modifying complex data structures.

**Example :**

```javascript
db.collection.updateOne({ _id: 123 }, { $set: { name: "John", age: 30 } });
```

In this example, the `$set` operator is used to update the `name` and `age` fields of a document with the `_id` value of 123. If the fields exist, their values will be updated. If the fields don't exist, they will be added to the document with the specified values.

</p>

</details>

<details>
<summary>38. What is the difference between a SQL database and a NoSQL database like MongoDB?</summary>
<p>

| Aspect         | SQL Databases                         | NoSQL Databases (MongoDB)                             |
| -------------- | ------------------------------------- | ----------------------------------------------------- |
| Data Model     | Rigid, tabular, structured data model | Flexible, schema-less data model                      |
| Query Language | Uses Structured Query Language (SQL)  | Query languages specific to data models, like MongoDB |

</p>

</details>

<details>
<summary>39. What is the maximum document size in MongoDB?</summary>
<p>

In MongoDB, the maximum document size is `16 megabytes (MB)`.

</p>

</details>
<details>
<summary>44. What is Frontend in APIs?</summary>
<p>

The frontend, also known as the `client`, refers to the user interface of a web application that users interact with. It is responsible for sending requests to the backend and displaying the data received from the server.

</p>

</details>

<details>
<summary>40. What is Backend in APIs?</summary>
<p>

The backend, also known as the `server`, handles the processing of requests received from the frontend. It performs various operations such as retrieving data from a database, executing business logic, and generating a response to be sent back to the client.

</p>

</details>

<details>
<summary>41. What is a Replica Set in MongoDB?</summary>
<p>

A Replica Set in MongoDB is a cluster configuration that provides high availability and data redundancy. It consists of multiple MongoDB instances (nodes) that replicate data across each other to ensure fault tolerance and automatic failover.

In a Replica Set, one node acts as the primary node that accepts write operations and performs data modifications. The remaining nodes function as secondary nodes and replicate data from the primary node to provide read scalability and data redundancy.

</p>

</details>

<details>
<summary>42. What are the difference between NoSQL and SQL database?</summary>
<p>

| SQL (Relational) Database                                                                | NoSQL Database                                                                                                      |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| A predefined schema with structured tables, columns, and relationships                   | Offers a flexible, schema-less data model                                                                           |
| Data is stored in rows and columns, and relationships are established using foreign keys | Accommodates dynamic and unstructured data with documents, key-value pairs, wide-column stores, or graph structures |
| Typically scales vertically by adding more powerful hardware                             | Designed for horizontal scalability, distributing data across multiple machines or clusters                         |
| Uses structured query language (SQL) for defining and manipulating data                  | Varies in query languages or interfaces specific to their data models                                               |
| **Examples:** financial systems, e-commerce platforms                                    | **Examples:** real-time analytics, content management systems, social networks.                                     |

</p>

</details>

<details>
<summary>43. How to create an API to read specific student data? </summary>
<p>

The code you provided is an example of an API endpoint in a Node.js application that retrieves specific student data based on the email parameter.

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

The `/student` route is defined using app.get, which handles GET requests to the `/student` endpoint. The email parameter is extracted from the query string using `req.query.email`. It assumes that the email parameter is passed in the query string of the URL. The `Student.findOne()` method is used to find a student record in the database based on the email. If a student record is found, a JSON response is sent back with the student data and a success message. If no student record is found, a JSON response is sent back with a failure message.

</p>

</details>

<details>
<summary>44. In the React App how to call the APIs using Axios?</summary>
<p>

To call the API from a React app, you can use the Axios library, which is a popular choice for making HTTP requests.

Here's how you can set up and use Axios in a React app:

Create a new React app by running the following command in your terminal:

```js
npx create-react-app frontend
```

Install the Axios library by running the following command in the terminal:

```js
npm install axios
```

Open the App.js file in the src directory of your React app.

Import the Axios library at the top of the file:

```js
import axios from "axios";
```

Create an async function, let's name it loadData, inside the App component:

```js
async function loadData() {
  const response = await axios.get("/student?email=<email-id>");
}
```

</p>

</details>

<details>
<summary>45. What is Express JS ?</summary>
<p>

Express.js is a popular JavaScript framework for building web applications and APIs. It simplifies the process of setting up a server and handling HTTP requests and responses.

</p>

</details>

<details>
<summary>46.How to install Express and how to create server in MongoDB ? </summary>
<p>

To install express, you can use the following commands:

```
npm install express
```

To create a server using Express, you need to write some code in your index.js file. Here's an Example :

```js
import express from "express";

const app = express();

app.listen(5000, () => {
  console.log("listening on port 5000");
});
```

In the above example, we can import the `express` module and create an instance of the express application. The `app.listen()` method starts the server and makes it listen on port 5000. When the server starts listening, the callback function is executed, and it logs a message to the console. Once the server is running, it can handle incoming HTTP requests from the frontend and send appropriate responses back.

</p>

</details>

<details>
<summary>47. </summary>
<p>

</p>

</details>

<details>
<summary>48. </summary>
<p>

</p>

</details>

<details>
<summary>49. </summary>
<p>

</p>

</details>

<details>
<summary>50. </summary>
<p>

</p>

</details>
