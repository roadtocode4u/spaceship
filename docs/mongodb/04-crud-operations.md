# CRUD Operations in MongoDB

CRUD stands for **Create, Read, Update, Delete** - the four basic operations you can perform on any database. In MongoDB, these operations work with **documents** instead of rows.

## Understanding MongoDB CRUD

| Operation  | SQL Equivalent | MongoDB Method                | What it does              |
| ---------- | -------------- | ----------------------------- | ------------------------- |
| **Create** | INSERT         | `insertOne()`, `insertMany()` | Add new documents         |
| **Read**   | SELECT         | `find()`, `findOne()`         | Retrieve documents        |
| **Update** | UPDATE         | `updateOne()`, `updateMany()` | Modify existing documents |
| **Delete** | DELETE         | `deleteOne()`, `deleteMany()` | Remove documents          |

## Sample Data Setup

Before we start, let's ensure we have our college database with student data:

```javascript
// Database: college_db
// Collection: students
[
  {
    _id: ObjectId("..."),
    student_id: "CS2023001",
    name: "Rahul Sharma",
    age: 21,
    city: "Mumbai",
    course: "Computer Science",
    cgpa: 8.5,
    fees_paid: true,
  },
  {
    _id: ObjectId("..."),
    student_id: "IT2023002",
    name: "Priya Patel",
    age: 20,
    city: "Ahmedabad",
    course: "Information Technology",
    cgpa: 9.1,
    fees_paid: true,
  },
  {
    _id: ObjectId("..."),
    student_id: "CS2023003",
    name: "Amit Kumar",
    age: 22,
    city: "Delhi",
    course: "Computer Science",
    cgpa: 7.8,
    fees_paid: false,
  },
];
```

## CREATE Operations 📝

### 1. Insert Single Document - `insertOne()`

Add one new student to the collection:

#### MongoDB Compass:

1. Select `students` collection
2. Click **"Add Data"** → **"Insert Document"**
3. Add this JSON:

```javascript
{
  "student_id": "ME2023004",
  "name": "Sneha Reddy",
  "age": 21,
  "city": "Hyderabad",
  "course": "Mechanical Engineering",
  "cgpa": 8.2,
  "fees_paid": true,
  "subjects": [
    {
      "name": "Thermodynamics",
      "credits": 4,
      "grade": "A"
    },
    {
      "name": "Machine Design",
      "credits": 3,
      "grade": "B+"
    }
  ],
  "contact": {
    "email": "sneha.reddy@college.edu",
    "phone": "+91-9234567890"
  },
  "hobbies": ["sketching", "badminton"]
}
```

#### MongoDB Shell/Code:

```javascript
db.students.insertOne({
  "student_id": "ME2023004",
  "name": "Sneha Reddy",
  "age": 21,
  "city": "Hyderabad",
  "course": "Mechanical Engineering",
  "cgpa": 8.2,
  "fees_paid": true
});

// Result:
{
  "acknowledged": true,
  "insertedId": ObjectId("64a1b2c3d4e5f6789012345")
}
```

### 2. Insert Multiple Documents - `insertMany()`

Add multiple students at once:

```javascript
db.students.insertMany([
  {
    "student_id": "EC2023005",
    "name": "Rohan Gupta",
    "age": 20,
    "city": "Pune",
    "course": "Electronics",
    "cgpa": 8.7,
    "fees_paid": true
  },
  {
    "student_id": "CS2023006",
    "name": "Kavya Singh",
    "age": 19,
    "city": "Bangalore",
    "course": "Computer Science",
    "cgpa": 9.3,
    "fees_paid": true
  },
  {
    "student_id": "IT2023007",
    "name": "Arjun Nair",
    "age": 21,
    "city": "Chennai",
    "course": "Information Technology",
    "cgpa": 7.9,
    "fees_paid": false
  }
]);

// Result:
{
  "acknowledged": true,
  "insertedIds": [
    ObjectId("64a1b2c3d4e5f6789012346"),
    ObjectId("64a1b2c3d4e5f6789012347"),
    ObjectId("64a1b2c3d4e5f6789012348")
  ]
}
```

## READ Operations 🔍

### 1. Find All Documents - `find()`

Get all students:

```javascript
db.students.find();

// Returns all documents in the collection
```

#### In MongoDB Compass:

- Just click on the `students` collection
- All documents are displayed by default

### 2. Find with Conditions

#### Find students from Mumbai:

```javascript
db.students.find({ city: "Mumbai" });

// Returns:
[
  {
    _id: ObjectId("..."),
    student_id: "CS2023001",
    name: "Rahul Sharma",
    city: "Mumbai",
    course: "Computer Science",
  },
];
```

#### Find Computer Science students:

```javascript
db.students.find({ course: "Computer Science" });
```

#### Find students with CGPA > 8.0:

```javascript
db.students.find({ cgpa: { $gt: 8.0 } });

// $gt means "greater than"
```

#### Find students aged 21 AND from Delhi:

```javascript
db.students.find({
  age: 21,
  city: "Delhi",
});
```

#### Find students from Mumbai OR Delhi:

```javascript
db.students.find({
  $or: [{ city: "Mumbai" }, { city: "Delhi" }],
});
```

### 3. Find One Document - `findOne()`

Get only the first matching document:

```javascript
db.students.findOne({ course: "Computer Science" });

// Returns only one document (not an array)
```

### 4. Query Operators

#### Comparison Operators:

```javascript
// Greater than ($gt)
db.students.find({ cgpa: { $gt: 8.5 } });

// Greater than or equal ($gte)
db.students.find({ age: { $gte: 21 } });

// Less than ($lt)
db.students.find({ cgpa: { $lt: 8.0 } });

// Less than or equal ($lte)
db.students.find({ age: { $lte: 20 } });

// Not equal ($ne)
db.students.find({ course: { $ne: "Computer Science" } });

// In array ($in)
db.students.find({
  city: { $in: ["Mumbai", "Delhi", "Pune"] },
});

// Not in array ($nin)
db.students.find({
  course: { $nin: ["Computer Science", "IT"] },
});
```

#### Logical Operators:

```javascript
// AND (implicit - comma separated)
db.students.find({
  course: "Computer Science",
  cgpa: { $gte: 8.0 },
});

// OR
db.students.find({
  $or: [{ city: "Mumbai" }, { cgpa: { $gte: 9.0 } }],
});

// NOT
db.students.find({
  fees_paid: { $not: { $eq: true } },
});
```

### 5. Projection (Select Specific Fields)

Get only name and city (like SELECT name, city in SQL):

```javascript
db.students.find(
  { course: "Computer Science" }, // filter
  { name: 1, city: 1, _id: 0 } // projection
);

// 1 = include field
// 0 = exclude field
// _id is included by default, so we exclude it with 0

// Result:
[
  { name: "Rahul Sharma", city: "Mumbai" },
  { name: "Amit Kumar", city: "Delhi" },
  { name: "Kavya Singh", city: "Bangalore" },
];
```

### 6. Sorting and Limiting

#### Sort by CGPA (highest first):

```javascript
db.students.find().sort({ cgpa: -1 });

// -1 = descending (highest to lowest)
// 1 = ascending (lowest to highest)
```

#### Get top 3 students by CGPA:

```javascript
db.students.find().sort({ cgpa: -1 }).limit(3);
```

#### Skip first 2 and get next 3 (pagination):

```javascript
db.students.find().sort({ cgpa: -1 }).skip(2).limit(3);
```

## UPDATE Operations ✏️

### 1. Update Single Document - `updateOne()`

Update Rahul's age:

```javascript
db.students.updateOne(
  { "name": "Rahul Sharma" },  // filter
  { $set: { "age": 22 } }      // update
);

// Result:
{
  "acknowledged": true,
  "matchedCount": 1,
  "modifiedCount": 1
}
```

### 2. Update Multiple Documents - `updateMany()`

Mark all CS students' fees as paid:

```javascript
db.students.updateMany(
  { course: "Computer Science" }, // filter
  { $set: { fees_paid: true } } // update
);
```

### 3. Update Operators

#### Set new values:

```javascript
db.students.updateOne(
  { student_id: "CS2023001" },
  {
    $set: {
      cgpa: 8.7,
      city: "New Mumbai",
    },
  }
);
```

#### Increment numeric values:

```javascript
// Increase Priya's age by 1
db.students.updateOne({ name: "Priya Patel" }, { $inc: { age: 1 } });

// Decrease CGPA by 0.1
db.students.updateOne({ name: "Amit Kumar" }, { $inc: { cgpa: -0.1 } });
```

#### Add to arrays:

```javascript
// Add new hobby to Rahul
db.students.updateOne(
  { name: "Rahul Sharma" },
  { $push: { hobbies: "swimming" } }
);

// Add multiple hobbies
db.students.updateOne(
  { name: "Priya Patel" },
  {
    $push: {
      hobbies: { $each: ["yoga", "cooking"] },
    },
  }
);
```

#### Remove from arrays:

```javascript
// Remove a hobby
db.students.updateOne(
  { name: "Rahul Sharma" },
  { $pull: { hobbies: "cricket" } }
);
```

#### Add field if doesn't exist:

```javascript
db.students.updateOne(
  { name: "Sneha Reddy" },
  { $setOnInsert: { created_at: new Date() } },
  { upsert: true }
);
```

### 4. Upsert (Insert if not found)

```javascript
// If student exists, update. If not, insert new:
db.students.updateOne(
  { student_id: "CS2023008" },
  {
    $set: {
      name: "Neha Joshi",
      age: 20,
      city: "Jaipur",
      course: "Computer Science",
    },
  },
  { upsert: true } // Insert if not found
);
```

## DELETE Operations 🗑️

### 1. Delete Single Document - `deleteOne()`

Remove Amit Kumar:

```javascript
db.students.deleteOne({ "name": "Amit Kumar" });

// Result:
{
  "acknowledged": true,
  "deletedCount": 1
}
```

### 2. Delete Multiple Documents - `deleteMany()`

Remove all students with fees unpaid:

```javascript
db.students.deleteMany({ "fees_paid": false });

// Result:
{
  "acknowledged": true,
  "deletedCount": 2
}
```

Remove all students from a specific city:

```javascript
db.students.deleteMany({ city: "Delhi" });
```

### 3. Delete All Documents

```javascript
// Remove all documents but keep collection
db.students.deleteMany({});

// Or use remove (deprecated but still works)
db.students.remove({});
```

## Complex Query Examples

### 1. Students with CGPA between 8.0 and 9.0:

```javascript
db.students.find({
  cgpa: {
    $gte: 8.0,
    $lte: 9.0,
  },
});
```

### 2. CS students from Mumbai with fees paid:

```javascript
db.students.find({
  course: "Computer Science",
  city: "Mumbai",
  fees_paid: true,
});
```

### 3. Students whose name starts with 'R':

```javascript
db.students.find({
  name: { $regex: "^R", $options: "i" },
});
// ^R = starts with R
// i = case insensitive
```

### 4. Count documents:

```javascript
// Count all students
db.students.countDocuments();

// Count CS students
db.students.countDocuments({ course: "Computer Science" });
```

### 5. Find students with specific subjects:

```javascript
// Students who have "Web Development" subject
db.students.find({
  "subjects.name": "Web Development",
});

// Students with grade A+ in any subject
db.students.find({
  "subjects.grade": "A+",
});
```

## Practice Exercises

Try these queries on your college database:

### Exercise 1: Basic Queries

1. Find all students from Pune
2. Find students with CGPA greater than 8.5
3. Count total number of students
4. Get only names of all students (projection)

### Exercise 2: Updates

1. Update Priya's city to "Surat"
2. Add "photography" hobby to Sneha
3. Increase all students' age by 1
4. Mark all students' fees as paid

### Exercise 3: Advanced Queries

1. Find CS students with CGPA > 8.0 from Mumbai or Delhi
2. Get top 5 students by CGPA
3. Find students whose name contains "ya"
4. Remove all students with CGPA < 7.5

## MongoDB Compass GUI Operations

### Create:

1. Click **"Insert Document"**
2. Choose **JSON** or **Field-by-field** view
3. Add data and click **"Insert"**

### Read:

1. Use **Filter** bar: `{ "city": "Mumbai" }`
2. Use **Project** bar: `{ "name": 1, "cgpa": 1 }`
3. Use **Sort** bar: `{ "cgpa": -1 }`

### Update:

1. Click **pencil icon** on document
2. Edit fields directly
3. Click **"Update"**

### Delete:

1. Click **trash icon** on document
2. Confirm deletion

## Best Practices

### 1. **Always use filters in updates/deletes**

```javascript
// ❌ Dangerous - updates ALL documents
db.students.updateMany({}, { $set: { city: "Mumbai" } });

// ✅ Safe - updates specific documents
db.students.updateMany(
  { course: "Computer Science" },
  { $set: { fees_paid: true } }
);
```

### 2. **Use meaningful field names**

```javascript
// ❌ Bad
{ "n": "Rahul", "a": 21 }

// ✅ Good
{ "name": "Rahul", "age": 21 }
```

### 3. **Validate before operations**

```javascript
// Check what will be affected first
db.students.find({ cgpa: { $lt: 5.0 } });

// Then delete if sure
db.students.deleteMany({ cgpa: { $lt: 5.0 } });
```

## What's Next?

Great! Now you know all basic CRUD operations. Next, let's explore MongoDB Compass in detail - the powerful GUI tool that makes database management much easier.

Next: [MongoDB Compass Deep Dive](./05-mongodb-compass) 🚀

## Quick Recap

- ✅ **CREATE**: `insertOne()`, `insertMany()`
- ✅ **READ**: `find()`, `findOne()` with filters, projection, sorting
- ✅ **UPDATE**: `updateOne()`, `updateMany()` with operators
- ✅ **DELETE**: `deleteOne()`, `deleteMany()`
- ✅ **Operators**: `$gt`, `$lt`, `$in`, `$or`, `$set`, `$inc`, `$push`
- ✅ **Best practices**: Always use filters, meaningful names, validate first

CRUD mastery unlocked! 🎯
