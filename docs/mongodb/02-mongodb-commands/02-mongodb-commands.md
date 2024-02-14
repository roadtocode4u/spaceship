---
title: MongoDB Commands
description: "MongoDB Commands"
hide_table_of_contents: true
---

## MongoDB CRUD Operations

```mongodb
1. show dbs
2. use <db name>
3. insertOne()
4. insertmany()
5. find()
6. findOne()
7. deleteOne()
8. deleteMany()
9. updateOne()
10.updateMany()
```

```js
1. `show dbs`: Displays a list of all available databases in the MongoDB instance.

2. `use <db name>`: Switches to the specified database, making it the active database for subsequent operations.

3. `insertOne()`: Inserts a single document into a MongoDB collection.

4. `insertMany()`: Inserts multiple documents into a MongoDB collection in a single operation.

5. `find()`: Queries a collection to retrieve documents based on specified criteria. It can be used to search for multiple documents.

6. `findOne()`: Retrieves the first document that matches the specified criteria in a MongoDB collection.

7. `deleteOne()`: Removes a single document from a collection that matches a specified filter.

8. `deleteMany()`: Deletes multiple documents from a collection that match a specified filter.

9. `updateOne()`: Modifies the first document that matches a specified filter in a collection, making the specified updates.

10. `updateMany()`: Updates multiple documents in a collection that match a specified filter with the specified changes.
```

These commands are essential for performing various Create, Read, Update, and Delete (CRUD) operations in a MongoDB database.

### insertOne()

```jsx
db.courses.insertOne({
  title: "IGCP-1.0",
  description: "Full stack web development",
  fees: 15000,
  duration: "6 Months",
});
```

**Output:**

> { <br/>
> acknowledged: true,<br/>
> insertedId: ObjectId("652f7387434758e91eb89af4")<br/>
> }

```jsx
db.courses.insertOne({
  title: "Python Programming",
  description: "Python Programming for Beginners",
  fees: 499,
  duration: "2 Months",
});
```

**Output:**

> {<br/>
> acknowledged: true,<br/>
> insertedId: ObjectId("652f76ef434758e91eb89af5")<br/>
> }

### insertMany()

```jsx
db.courses.insertMany([
  {
    title: "C++",
    description: "C++ Programming with OOPs",
    fees: 499,
    duration: "3 Months",
  },
  {
    title: "Data structures",
    description: "Data Structures and Algorithms",
    fees: 999,
    duration: "6 Months",
  },
]);
```

**Output:**

> { <br/>
> acknowledged: true,<br/>
> insertedIds: { <br/>

    '0': ObjectId("652f7c19434758e91eb89af6"),<br/>
    '1': ObjectId("652f7c19434758e91eb89af7"),<br/>

}

```jsx
db.students.insertMany([
  {
    name: "Anand",
    age: 23,
    city: "Nagpur",
  },
  {
    name: "Vaishnavi",
    age: 22,
    city: "Ahemadnagar",
  },
  {
    name: "Pinki",
    age: 20,
    city: "Pune",
  },
  {
    name: "Suraj",
    age: 23,
    city: "Bhandara",
  },
]);
```

**Output:**

> {<br/>
> acknowledged: true,<br/>
> insertedIds: {<br/>

    '0': ObjectId("652f7c19434758e91eb89af6"),<br/>
    '1': ObjectId("652f7c19434758e91eb89af7"),<br/>
    '2': ObjectId("652f7c19434758e91eb89af8"),<br/>
    '3': ObjectId("652f7c19434758e91eb89af9")<br/>

}<br/>
}

### find()

```jsx
1. db.students.find()
```

**Output:**

> { <br/>
> \_id: ObjectId("652f7c19434758e91eb89af6"),<br/>
> name: 'Anand',<br/>
> age: 23,<br/>
> city: 'Nagpur'<br/>
> }<br/>
> {<br/>
> \_id: ObjectId("652f7c19434758e91eb89af7"),<br/>
> name: 'Vaishnavi',<br/>
> age: 22,<br/>
> city: 'Ahemadnagar'<br/>
> }<br/>
> {<br/>
> \_id: ObjectId("652f7c19434758e91eb89af8"),<br/>
> name: 'Pinki',<br/>
> age: 20,<br/>
> city: 'Pune'<br/>
> }<br/>
> {<br/>
> \_id: ObjectId("652f7c19434758e91eb89af9"),<br/>
> name: 'Suraj',<br/>
> age: 23,<br/>
> city: 'Bhandara'<br/>
> }

```jsx
2. db.students.find({age: 23})
```

**Output:**

> { <br/>
> \_id: ObjectId("652f7c19434758e91eb89af6"),<br/>
> name: 'Anand',<br/>
> age: 23,<br/>
> city: 'Nagpur'<br/>
> }<br/>
> {<br/>
> \_id: ObjectId("652f7c19434758e91eb89af9"),<br/>
> name: 'Suraj',<br/>
> age: 23,<br/>
> city: 'Bhandara'<br/>
> }

### findOne()

```jsx
1. db.students.findOne({age: 23})
```

**Output:**

> { <br/>
> \_id: ObjectId("652f7c19434758e91eb89af6"),<br/>
> name: 'Anand',<br/>
> age: 23,<br/>
> city: 'Nagpur'<br/>
> }

```jsx
2. db.courses.findOne({duration: '6 Months'})
```

**Output:**

> { <br/>
> \_id: ObjectId("652f7387434758e91eb89af4"),<br/>
> title: 'IGCP-1.0',<br/>
> description: 'Full stack web development',<br/>
> fees: 15000,<br/>
> duration: '6 Months'<br/>
> }

### deleteOne()

```jsx
1. db.courses.find()
```

**Output:**

> { <br/>
> \_id: ObjectId("652f7387434758e91eb89af4"),<br/>
> title: 'IGCP-1.0',<br/>
> description: 'Full stack web development',<br/>
> fees: 15000,<br/>
> duration: '6 Months'<br/>
> }<br/>
> {<br/>
> \_id: ObjectId("652f76ef434758e91eb89af5"),<br/>
> title: 'Python Programming',<br/>
> description: 'Python Programming for Beginners',<br/>
> fees: 499,<br/>
> duration: '2 Months'<br/>
> }

```jsx
2. db.courses.deleteOne({_id: ObjectId("652f7387434758e91eb89af4")})
```

**Output:**

> {<br/>
> acknowledged: true,<br/>
> deletedCount: 1<br/>
> }

```jsx
3. db.courses.find()
```

**Output:**

> {<br/>
> \_id: ObjectId("652f76ef434758e91eb89af5"),<br/>
> title: 'Python Programming',<br/>
> description: 'Python Programming for Beginners',<br/>
> fees: 499,<br/>
> duration: '2 Months'<br/>
> }

Let's describe the example of using `deleteOne()` in MongoDB:

1. **First Step**: You have a list of courses in your database, like `"IGCP-1.0"` and `"Python Programming,"` with details like fees and duration.

2. **Second Step**: You want to remove one specific course from this list, **for example, "IGCP-1.0."**

3. **Third Step**: You use the `db.courses.find()` command to see the list of courses, and you identify the course you want to delete. In this case, you found** "IGCP-1.0."**

4. **Fourth Step**: You use the `db.courses.deleteOne({_id: ObjectId("652f7387434758e91eb89af4")})` command. This command tells MongoDB to delete the course with the ID `"652f7387434758e91eb89af4,"` which is `"IGCP-1.0."`

5. **Fifth Step**: MongoDB acknowledges your request and tells you that it has deleted one record.

6. **Sixth Step**: You use `db.courses.find()` again to check the list of courses, and you see that `"IGCP-1.0"` is no longer there. It has been successfully **deleted**.

### deleteMany()

```jsx
1. db.students.find()
```

**Output:**

> { <br/>
> \_id: ObjectId("652f7c19434758e91eb89af6"),<br/>
> name: 'Anand',<br/>
> age: 23,<br/>
> city: 'Nagpur'<br/>
> }<br/>
> {<br/>
> \_id: ObjectId("652f7c19434758e91eb89af7"),<br/>
> name: 'Vaishnavi',<br/>
> age: 22,<br/>
> city: 'Ahemadnagar'<br/>
> }<br/>
> {<br/>
> \_id: ObjectId("652f7c19434758e91eb89af8"),<br/>
> name: 'Pinki',<br/>
> age: 20,<br/>
> city: 'Pune'<br/>
> }<br/>
> {<br/>
> \_id: ObjectId("652f7c19434758e91eb89af9"),<br/>
> name: 'Suraj',<br/>
> age: 23,<br/>
> city: 'Bhandara'<br/>
> }

```jsx
2. db.students.deleteMany({age: 23})
```

**Output:**

> {<br/>
> acknowledged: true, <br/>
> deletedCount: 2 <br/>
> }

```jsx
3. db.students.find()
```

**Output:**

> {<br/>
> \_id: ObjectId("652f7c19434758e91eb89af7"),<br/>
> name: 'Vaishnavi',<br/>
> age: 22,<br/>
> city: 'Ahemadnagar'<br/>
> }<br/>
> {<br/>
> \_id: ObjectId("652f7c19434758e91eb89af8"),<br/>
> name: 'Pinki',<br/>
> age: 20,<br/>
> city: 'Pune'<br/>
> }

Let's describe the example of using `deleteMany()` in MongoDB.

**Step 1**: You have a list of students in your database with details like their **names**, **ages**, and **cities**.

**Step 2**: You want to remove multiple students from this list who are of a certain age, in this case, students who are `23 years old`.

**Step 3**: You use the `db.students.find()` command to see the list of students. You find that two students, `Anand` and `Suraj`, are 23 years old.

**Step 4**: You use the `db.students.deleteMany({age: 23})` command. This command tells MongoDB to delete all the students in the list who are 23 years old.

**Step 5**: MongoDB acknowledges your request and tells you that it has deleted 2 records **(Anand and Suraj)** who were 23 years old.

**Step 6**: You use `db.students.find()` again to check the list of students, and you see that only students who were not 23 years old, like Vaishnavi and Pinki, remain in the list. The students of age 23 have been successfully removed.

### updateOne()

```jsx
1. db.teachers.insertMany([
    {
        name: 'Anand',
        age: 20,
        subject: ['ICP', 'Python', 'IGCP']
    },
    {
        name: 'Vaishnavi',
        age: 24,
        subject: ['ICP', 'Python', 'IGCP', 'C++']
    },
    {
        name: 'Pinki',
        age: 24,
        subject: ['ICP', 'Python', 'IGCP', 'C++', 'Data Structure']
    }
])
```

**Output:**

> {<br/>
> acknowledged: true,<br/>
> insertedIds: {<br/>

    '0': ObjectId("652f89e7434758e91eb89afa"),<br/>
    '1': ObjectId("652f89e7434758e91eb89afb"),<br/>
    '2': ObjectId("652f89e7434758e91eb89afc")<br/>

}<br/>
}

```jsx
2. db.teachers.find()
```

**Output:**

> { <br/>
> \_id: ObjectId("652f89e7434758e91eb89afa"),<br/>
> name: 'Anand',<br/>
> age: 20,<br/>
> subject: [<br/>

    'ICP',<br/>
    'Python',<br/>
    'IGCP'<br/>

]<br/>
}<br/>
{<br/>
\_id: ObjectId("652f89e7434758e91eb89afb"),<br/>
name: 'Vaishnavi',<br/>
age: 24,<br/>
subject: [<br/>
'ICP',<br/>
'Python',<br/>
'IGCP',<br/>
'C++'<br/>
]<br/>
}<br/>
{<br/>
\_id: ObjectId("652f89e7434758e91eb89afc"),<br/>
name: 'Pinki',<br/>
age: 24,<br/>
subject: [<br/>
'ICP',<br/>
'Python',<br/>
'IGCP',<br/>
'C++',<br/>
'Data Structure'<br/>
]<br/>
}

```jsx
3. db.teachers.updateOne({_id:ObjectId("652f89e7434758e91eb89afc")}, {$set: {name: "Vaibhavi"}})
```

**Output:**

> {<br/>
> acknowledged: true,<br/>
> insertedId: null,<br/>
> matchedCount: 1,<br/>
> modifiedCount: 1,<br/>
> upsertedCount: 0 <br/>
> }

```jsx
4. db.teachers.find()
```

**Output:**

> { <br/>
> \_id: ObjectId("652f89e7434758e91eb89afa"),<br/>
> name: 'Anand',<br/>
> age: 20,<br/>
> subject: [<br/>

    'ICP',<br/>
    'Python',<br/>
    'IGCP'<br/>

]<br/>
}<br/>
{<br/>
\_id: ObjectId("652f89e7434758e91eb89afb"),<br/>
name: 'Vaishnavi',<br/>
age: 24,<br/>
subject: [<br/>
'ICP',<br/>
'Python',<br/>
'IGCP',<br/>
'C++'<br/>
]<br/>
}<br/>
{<br/>
\_id: ObjectId("652f89e7434758e91eb89afc"),<br/>
name: 'Vaibhavi',<br/>
age: 24,<br/>
subject: [<br/>
'ICP',<br/>
'Python',<br/>
'IGCP',<br/>
'C++',<br/>
'Data Structure'<br/>
]<br/>
}

Let's describe the example of using `updateOne()` in MongoDB.

**Step 1**: You have a list of **teachers** in your database with their `names`, `ages`, and the `subjects` they teach.

**Step 2**: You want to update the information of one teacher. In this case, you want to change the name of a teacher from `"Pinki" `to `"Vaibhavi."`

**Step 3**: You use the `db.teachers.find()` command to view the list of teachers and find the teacher with the name` "Pinki."`

**Step 4**: You use the `db.teachers.updateOne({_id: ObjectId("652f89e7434758e91eb89afc")}, {$set: {name: "Vaibhavi"}})` command. This command tells MongoDB to update the information of the teacher with the ID` "652f89e7434758e91eb89afc."` You specify that you want to change the name to **"Vaibhavi."**

**Step 5**: MongoDB acknowledges your request and informs you that it has matched one record `(the teacher with the ID "652f89e7434758e91eb89afc")` and modified it.

**Step 6**: You use `db.teachers.find()` again to check the list of teachers, and you see that the teacher's name has been successfully updated to **"Vaibhavi."**

### updateMany()

```jsx
1. db.teachers.updateMany({},{$set: {org: 'RTC'}})
```

**Output:**

> { <br/>
> acknowledged: true,<br/>
> insertedId: null,<br/>
> matchedCount: 3,<br/>
> modifiedCount: 3,<br/>
> upsertedCount: 0<br/>
> }

```jsx
2. db.teachers.find()
```

**Output:**

> { <br/>
> \_id: ObjectId("652f89e7434758e91eb89afa"),<br/>
> name: 'Anand',<br/>
> age: 20,<br/>
> subject: [<br/>

    'ICP',<br/>
    'Python',<br/>
    'IGCP'<br/>

],<br/>
org: 'RTC'<br/>
}<br/>
{<br/>
\_id: ObjectId("652f89e7434758e91eb89afb"),<br/>
name: 'Vaishnavi',<br/>
age: 24,<br/>
subject: [<br/>
'ICP',<br/>
'Python',<br/>
'IGCP',<br/>
'C++'<br/>
],<br/>
org: 'RTC'<br/>
}<br/>
{<br/>
\_id: ObjectId("652f89e7434758e91eb89afc"),<br/>
name: 'Vaibhavi',<br/>
age: 24,<br/>
subject: [<br/>
'ICP',<br/>
'Python',<br/>
'IGCP',<br/>
'C++',<br/>
'Data Structure'<br/>
],<br/>
org: 'RTC'<br/>
}

```jsx
3. db.teachers.updateMany({org: 'RTC'},{$set: {org: 'Road To Code'}})
```

**Output:**

> {<br/>
> acknowledged: true,<br/>
> insertedId: null,<br/>
> matchedCount: 3,<br/>
> modifiedCount: 3,<br/>
> upsertedCount: 0<br/>
> }

```jsx
4. db.teachers.find()
```

**Output:**

> { <br/>
> \_id: ObjectId("652f89e7434758e91eb89afa"),<br/>
> name: 'Anand',<br/>
> age: 20,<br/>
> subject: [<br/>

    'ICP',<br/>
    'Python',<br/>
    'IGCP'<br/>

],<br/>
org: 'Road To Code'<br/>
}<br/>
{<br/>
\_id: ObjectId("652f89e7434758e91eb89afb"),<br/>
name: 'Vaishnavi',<br/>
age: 24,<br/>
subject: [<br/>
'ICP',<br/>
'Python',<br/>
'IGCP',<br/>
'C++'<br/>
],<br/>
org: 'Road To Code'<br/>
}<br/>
{<br/>
\_id: ObjectId("652f89e7434758e91eb89afc"),<br/>
name: 'Vaibhavi',<br/>
age: 24,<br/>
subject: [<br/>
'ICP',<br/>
'Python',<br/>
'IGCP',<br/>
'C++',<br/>
'Data Structure'<br/>
],<br/>
org: 'Road To Code'<br/>
}

Let's describe the example of using `updateMany()` in MongoDB.

**Step 1**: You have a list of **teachers** in your database, and you want to update information for multiple teachers at once.

**Step 2**: You use the `db.teachers.updateMany({}, {$set: {org: 'RTC'}})` command. This command tells MongoDB to add a new field **"org"** with the value **'RTC'** to all the teachers in the list.

**Step 3**: MongoDB acknowledges your request and tells you that it has matched and modified three records. All the teachers in the list now have `"RTC"` as their organization.

**Step 4**: You use `db.teachers.find()` to check the list of teachers, and you see that the` "org"` field has been added to all the teachers with the value `'RTC.'`

**Step 5**: Later, you decide to update the organization name to **'Road To Code'** for all the teachers.

**Step 6**: You use the `db.teachers.updateMany({org: 'RTC'}, {$set: {org: 'Road To Code'}})` command. This time, you're telling MongoDB to find all the teachers with `'RTC'` as their organization and change it to `'Road To Code.'`

**Step 7**: MongoDB acknowledges your request and tells you that it has matched and modified three records again. The organization for all the teachers is now **'Road To Code.'**

**Step 8**: You use `db.teachers.find()` once more to verify the changes, and you see that the organization name for all the teachers has been updated to **'Road To Code.'**
