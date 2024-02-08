### MongoDB Medium

<details>

  <summary>
  How to perform CURD operations from mongo shell?
  </summary>

  <summary>How to perform CRUD operations from mongo shell?</summary>


MongoDB supports the standard CRUD (Create, Read, Update, Delete) operations for manipulating data in a database. Here are the corresponding CRUD operations available in MongoDB:

**Create:**

`insertOne()` : Creates a new document and inserts it into a collection. <br/>

```js
db.students.insertOne({
  name: "nitish",
  age: 20,
  email: "nitish@gamil.com",
});
```

`insertMany()` : Creates multiple documents and inserts them into a collection.

```js
db.students.insertMany({
  name: "saurabh",
  age: 22,
  email: "saurabh@gamil.com",
});
```

**Read:**

`findOne()` : Retrieves a single document from a collection based on specified criteria.

```js
db.students.find({ name: "nitish" });
```

`find()` : Retrieves documents from a collection based on specified criteria.<br/>

```js
db.students.find();
```

**Update:**

`updateOne()` : Updates a single document in a collection that matches specified criteria.<br/>

```js
db.students.updateOne(
  { name: "saurabh" },
  { $set: { age: 25, email: "saurabhjaykar@gmail.com" } }
);
```

`updateMany()` : Updates multiple documents in a collection that match specified criteria.

```js
db.students.updateMany({}, { $set: { age: 25 } });
```

**Delete:**

`deleteOne()` : Deletes a single document from a collection that matches specified criteria.<br/>

```js
db.students.deleteOne({ name: "nitish" });
```

`deleteMany()` : Deletes multiple documents from a collection that match specified criteria.

```js
db.students.deleteMany();
```

</details>
