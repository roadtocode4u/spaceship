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

## Installing MongoDB

To create a MongoDB Atlas account and set up your database, follow these steps:

1. Visit the MongoDB website at https://www.mongodb.com/.

<img src="/icp/46/step-1.jpeg" alt="step-1" width="600px"/>

2. Click on the `Sign In` button.

<img src="/icp/46/step-2.jpg" alt="step-2" width="600px"/>

3. Choose the option to sign in with Google.

<img src="/icp/46/step-3.jpg" alt="step-3" height="300px"/>

4. Select your Google email account to proceed.

5. Read and accept the Privacy Policy and Terms of Service by checking the checkbox.

6. Click on the `Submit` button.

   <img src="/icp/46/step-5.jpg" alt="step-5" width="600px"/>

7. You will be redirected to the MongoDB Atlas dashboard, where you will be greeted with a welcome message.

8. Answer the following questions:

- For the goal today, select `Learn MongoDB`.

  <img src="/icp/46/step-8-a.jpg" alt="step-8-a" width="600px"/>

- For the type of application you are building, choose `I'm just exploring`.

<img src="/icp/46/step-8-b.jpg" alt="step-8-b" width="600px"/>

- For the preferred language, select `JavaScript` from the dropdown.

<img src="/icp/46/step-8-c.jpg" alt="step-8-c" width="600px"/>

9. Click on the `Finish` button to proceed.

<img src="/icp/46/step-9.jpeg" alt="step-9" width="600px"/>

10. On the next page, you will be prompted to deploy your database. Choose the `Free` option.

<img src="/icp/46/step-10.jpg" alt="step-10" width="600px"/>

11. Select your preferred cloud provider (e.g., AWS).

<img src="/icp/46/step-11.jpeg" alt="step-11" width="600px"/>

12. Choose the region where you want to deploy your database (e.g., Mumbai).

<img src="/icp/46/step-12.jpg" alt="step-12" width="600px"/>

13. Enter a cluster name, such as `MongoDB`.

<img src="/icp/46/step-13.jpg" alt="step-13" width="600px"/>

14. Click on the `Create` button to create your MongoDB Atlas cluster.

<img src="/icp/46/step-14.jpg" alt="step-14" width="600px"/>

15. Set your desired `username` and `password` for accessing the database.

<img src="/icp/46/step-15.jpg" alt="step-15" width="600px"/>

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

## Exploring MongoDB Compass

There are two mongodb tools:

1. `MongoDB Atlas` : It is a website where we can create account and create database.

2. `MongoDB Compass` : We can access data locally can't visit anytime website.
   Mangodb compass mainly used for data access.

## Steps to install MongoDB Compass

To install MongoDB Compass, you can follow these steps:

1. Search for `MongoDB Compass` in your preferred search engine.
   <img src="/icp/46/step-16.png" alt="step16" width="600px"/>

2. Open the downloads page for MongoDB Compass.
   <img src="/icp/46/step-17.png" alt="step17" width="600px"/>

3. On the downloads page, you'll find options to download the MongoDB Compass installer. Choose the installer that is suitable for your operating system (e.g., .exe for Windows).
   <img src="/icp/46/step-18.png" alt="step18" width="600px"/>

4. Download the latest version of MongoDB Compass by clicking on the appropriate download link.
   <img src="/icp/46/step-19.png" alt="step19" width="600px"/>

5. Once the download is complete, locate the downloaded installer file and launch it.
   <img src="/icp/46/step-20.png" alt="step20" width="600px"/>

6. Follow the on-screen instructions to install MongoDB Compass on your system. The installation process may vary depending on your operating system.
7. After the installation is complete, you can launch MongoDB Compass from your applications or programs menu.

MongoDB Compass provides a GUI (Graphical User Interface) for accessing MongoDB databases. Once you have MongoDB Compass installed and running, you can connect to your databases and perform various operations like creating databases, inserting documents, deleting databases, and more.

- **Here are some common operations you can perform in mongodb compass.**

### Database

- **Mongosh**: Mongosh is a mangodb shell.(it is terminal of mongodb).
  we can run the mongodb commands.

- There are three database:

1. **Admin** : It manages mongodb database.
2. **Local** : Configuration, we can't modifies these database.
3. **mydb** : It is userdefined database. we can access these database.

### Create Database :

In MongoDB Compass, you can create a new database by right-clicking on the `Databases` tab and selecting `Create Collection`. Provide a name for the database, and it will be created.
<img src="/icp/46/step-21.png" alt="step21" width="600px"/>

### Insert Document :

To insert documents into a collection within a database, select the database, navigate to the desired collection, and click on the `Insert Document` button. Enter the document data and save it.
<img src="/icp/46/step-22.png" alt="step22" width="600px"/>

### Delete Database :

If you want to delete a database, right-click on the database name in the left-hand sidebar and select `Drop Database`. Confirm the deletion when prompted.
<img src="/icp/46/step-23.png" alt="step23" width="600px"/>

### Show Database :

Show Databases: To view all the databases on the connected MongoDB server, you can click on the `Databases` tab in the left-hand sidebar. It will display a list of available databases.
<img src="/icp/46/step-24.png" alt="step24" width="600px"/>

```js
show dbs
```

### Use Database :

In MongoDB Compass, you don't need to explicitly run the `use` command to switch to a database. By selecting a database from the sidebar, you are already using that database. MongoDB Compass provides a graphical interface to interact with the selected database and its collections.
<img src="/icp/46/step-25.png" alt="step25" width="600px"/>

```js
usemydb;
```

## MongoDB CRUD Operation

CRUD stands for `Create`, `Read`, `Update`, and `Delete`. These are the basic operations used to manipulate data in a database.

### Show Database

To display all databases in MongoDB, you can use the `show dbs` command. This command will return a list of all databases present.

```js
   show dbs
```

```js
   mydb    72.00 KiB
   admin   336.00 KiB
   local   8.27 GiB
```

In the above example, there are three databases: `mydb`, `admin`, and `local`.

## Use database

To switch to a specific database, you can use the use command followed by the database name. This command sets the current database context to the specified database.

```js
   use mydb
```

```js
   switched to db mydb
```

In the above example, we switched to the mydb database.

### Create / Insert

To `create` or `insert` a new document into a collection, you can use the `insertOne()` or `insertMany()` methods.

- **`insertOne()`** method inserts a single document into a collection.

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

This will return the following output:

<img src="/icp/46/step-28.png" alt="step-28" width="600px"/>

- **`insertMany()`** method inserts multiple documents into a collection.

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

This will return the following output:

<img src="/icp/46/step-29.png" alt="step-29" width="600px"/>

### Read

To `read` or `retrieve` data from a collection, you can use the `find()` and `findOne()` methods.

- **`find()`** method returns all documents in a collection.

**Syntax :**

```js
db.collection.find();
```

**Example :**

```js
db.actors.find();
```

This will return the following output:

<img src="/icp/46/step-30.png" alt="step-30" width="600px"/>

- **`findOne()`** method returns the first document that matches the given condition.

**Syntax :**

```js
db.collection.findOne({ field: value });
```

**Example :**

```js
db.actors.findOne({ movie: "Geeta Govind" });
```

This will return the following output:

<img src="/icp/46/step-31.png" alt="step-31" width="600px"/>

**Example :**

```js
db.actors.findOne({ age: 36 });
```

This will return the following output:

<img src="/icp/46/step-32.png" alt="step-32" width="600px"/>

### Update

- **`updateOne()`** To update existing documents in a collection, you can use the updateOne() or updateMany() methods.

  **Syntax :**

```js
db.collection.updateOne({ field: value }, { $set: { newField: newValue } });
```

**Example :**

```js
db.actors.updateOne({ name: "Rashmika" }, { $set: { name: Karina } });
```

This will return the following output:

<img src="/icp/46/step-33.png" alt="step-33" width="600px"/>

- **`updateMany()`** method updates multiple documents in a collection based on the given condition.

  **Syntax :**

```js
db.collection.updateMany({ field: value }, { $set: { newField: newValue } });
```

**Example :**

```js
db.actors.updateMany({}, { $set: { name: "Varun Dhavan" } });
```

This will return the following output:

<img src="/icp/46/step-34.png" alt="step-34" width="600px"/>

### Delete

To delete documents from a collection, you can use the `deleteOne()` or `deleteMany()` methods.

- **`deleteOne()`** method deletes a single document from a collection based on the given condition.

**Syntax :**

```js
db.collection.deleteOne({ field: value });
```

**Example :**

```js
db.actors.deleteOne({ age: 30 });
```

This will return the following output:

<img src="/icp/46/step-35.png" alt="step-35" width="600px"/>

- **`deleteMany()`** method deletes multiple documents from a collection based on the given condition.

**Syntax :**

```js
db.collection.deleteMany({ field: value });
```

**Example :**

```js
db.actors.deleteMany({});
```

This will return the following output:

<img src="/icp/46/step-36.png" alt="step-36" width="600px"/>

:::danger
Common mistakes
:::

### setup your `atlas network access`

**Edit IP Access List Entry**

**Access List Entry:** `0.0.0.0`
to access from anywhere from any network

**comment**: anywhere

<img src="/mongodb/pitfall.png" width="600" />
