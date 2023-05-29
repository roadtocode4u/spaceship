---
title: Introduction To MongoDB
description: "Introduction To MongoDB"
hide_table_of_contents: true
---

## Introduction To MongoDB

MongoDB is a popular NoSQL database system that provides high scalability, flexibility, and performance for managing large amounts of unstructured and semi-structured data.

There are two types of database:

1.  NoSQL
2.  SQL

MongoDB belongs to the NoSQL category, which means that it utilizes a non-relational data model for storing and managing data, So we Will use MongoDB database.

## MongoDB Data Structure

MongoDB organizes data in a flexible and scalable manner. Here are the key components:

1. `Key-Value`: MongoDB stores data in documents, which are JSON-like objects consisting of key-value pairs. Each value can be of different types, such as strings, numbers, arrays, or even nested documents.
2. `Document`: A document in MongoDB is a set of key-value pairs. It is equivalent to a record or row in a relational database.
3. `Collection`: A collection is a group of related documents. It is analogous to a table in a relational database. Collections do not enforce a strict schema, allowing for flexibility in the structure of the stored documents.

## Installing MangoDB

To create a MongoDB Atlas account and set up your database, follow these steps:

1. Visit the MongoDB website at https://www.mongodb.com/.

<img src="/icp/46/step-1.jpeg" alt="step-1" width="600px"/>

2. Click on the `Sign In` button.

<img src="/icp/46/step-2.jpeg" alt="step-2" width="600px"/>

3. Choose the option to sign in with Google.

4. Select your Google email account to proceed.

<img src="/icp/46/step-3.jpeg" alt="step-3" height="300px"/>

5. Read and accept the Privacy Policy and Terms of Service by checking the checkbox.

6. Click on the `Submit` button.

   <img src="/icp/46/step-4.jpg" alt="step-4" width="600px"/>

7. You will be redirected to the MongoDB Atlas dashboard, where you will be greeted with a welcome message.

8. Answer the following questions:

  <img src="/icp/46/step-8.jpeg" alt="step-8" width="600px"/>

- For the goal today, select `Learn MongoDB`.
- For the type of application you are building, choose `I'm just exploring`.
- For the preferred language, select `JavaScript` from the dropdown.

9. Click on the `Finish` button to proceed.

<img src="/icp/46/step-9.jpeg" alt="step-9" width="600px"/>

10. On the next page, you will be prompted to deploy your database. Choose the `Free` option.

<img src="/icp/46/step-10.jpg" alt="step-10" width="600px"/>

11. Select your preferred cloud provider (e.g., AWS).
12. Choose the region where you want to deploy your database (e.g., Mumbai).
13. Enter a cluster name, such as `MongoDB`.
14. Click on the `Create` button to create your MongoDB Atlas cluster.

<img src="/icp/46/step-11.jpg" alt="step-11" width="600px"/>

15. Set your desired `username` and `password` for accessing the database.

<img src="/icp/46/step-12.jpg" alt="step-12" width="600px"/>

16. Complete the remaining steps as instructed by the MongoDB Atlas setup wizard.
17. Once the setup is complete, you will have successfully installed MongoDB Atlas and created your database.

## BSON (Binary JSON)

BSON stands for Binary JSON, and it is a binary representation of JSON-like documents. BSON is designed to be a more efficient and compact format for storing and transmitting data compared to plain text JSON. It extends the JSON model by adding additional data types and features.

BSON is used as the storage format for data in MongoDB. When data is inserted into a MongoDB database, it is converted into BSON format before being stored. Similarly, when data is retrieved from MongoDB, it is converted back from BSON to JSON.

### Key-value pair

```js
{
  name: "Yogita",
  age: 21,
  city: "Ahemdnagar"
}
```

In the above Example,the document has three fields `name`, `age`, `city`. Each field has corresponding value.

### Documents

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
