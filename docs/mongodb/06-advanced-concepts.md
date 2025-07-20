# Advanced MongoDB Concepts

Now that you're comfortable with basic CRUD operations and MongoDB Compass, let's explore advanced concepts that will make you a MongoDB expert!

## Aggregation Framework 🔄

**Aggregation** is MongoDB's powerful data processing pipeline. Think of it as advanced Excel functions for databases - grouping, calculating, transforming data.

### Why Aggregation?

Simple queries (`find()`) can't do:

- ✅ **Group** students by course and calculate average CGPA
- ✅ **Calculate** total fees collected per semester
- ✅ **Transform** data format (like converting names to uppercase)
- ✅ **Join** data from multiple collections
- ✅ **Complex analytics** and reporting

### Aggregation Pipeline Concept

Think of aggregation as a **factory assembly line** where data flows through multiple stages:

```
Raw Data → Stage 1 → Stage 2 → Stage 3 → Final Result
Students → Filter → Group → Sort → Top Performers
```

### Basic Aggregation Example

**Find average CGPA by course:**

```javascript
db.students.aggregate([
  // Stage 1: Group students by course
  {
    $group: {
      _id: "$course", // Group by course field
      average_cgpa: { $avg: "$cgpa" }, // Calculate average
      student_count: { $sum: 1 }, // Count students
      total_students: { $count: {} }, // Alternative count
    },
  },

  // Stage 2: Sort by average CGPA (highest first)
  {
    $sort: { average_cgpa: -1 },
  },

  // Stage 3: Format the output
  {
    $project: {
      course: "$_id",
      average_cgpa: { $round: ["$average_cgpa", 2] },
      student_count: 1,
      _id: 0,
    },
  },
]);

// Result:
[
  { course: "Computer Science", average_cgpa: 8.45, student_count: 23 },
  { course: "Information Technology", average_cgpa: 8.12, student_count: 18 },
  { course: "Electronics", average_cgpa: 7.98, student_count: 12 },
];
```

### Common Aggregation Stages

#### 1. **$match** - Filter Documents

```javascript
// Like find() but in aggregation pipeline
{
  $match: {
    course: "Computer Science",
    cgpa: { $gte: 8.0 }
  }
}
```

#### 2. **$group** - Group and Calculate

```javascript
{
  $group: {
    _id: "$city",                      // Group by city
    avg_cgpa: { $avg: "$cgpa" },       // Average CGPA
    max_cgpa: { $max: "$cgpa" },       // Highest CGPA
    min_cgpa: { $min: "$cgpa" },       // Lowest CGPA
    total_students: { $sum: 1 },       // Count
    students: { $push: "$name" }       // Collect names in array
  }
}
```

#### 3. **$project** - Select/Transform Fields

```javascript
{
  $project: {
    name: 1,                           // Include name
    course: 1,                         // Include course
    cgpa: 1,                           // Include CGPA
    grade: {                           // Create new field
      $cond: {
        if: { $gte: ["$cgpa", 9.0] },
        then: "Excellent",
        else: {
          $cond: {
            if: { $gte: ["$cgpa", 8.0] },
            then: "Good",
            else: "Average"
          }
        }
      }
    },
    _id: 0                             // Exclude _id
  }
}
```

#### 4. **$sort** - Sort Results

```javascript
{
  $sort: {
    cgpa: -1,        // Descending order (highest first)
    name: 1          // Then by name (ascending)
  }
}
```

#### 5. **$limit** and **$skip** - Pagination

```javascript
// Get top 10 students
{ $sort: { cgpa: -1 } },
{ $limit: 10 }

// Skip first 20, get next 10 (page 3)
{ $skip: 20 },
{ $limit: 10 }
```

### Real-World Aggregation Examples

#### Example 1: Student Performance Report

```javascript
// Generate comprehensive performance report
db.students.aggregate([
  // Stage 1: Add performance grade
  {
    $addFields: {
      performance_grade: {
        $switch: {
          branches: [
            { case: { $gte: ["$cgpa", 9.0] }, then: "Distinction" },
            { case: { $gte: ["$cgpa", 8.0] }, then: "First Class" },
            { case: { $gte: ["$cgpa", 7.0] }, then: "Second Class" },
            { case: { $gte: ["$cgpa", 6.0] }, then: "Pass" },
          ],
          default: "Fail",
        },
      },
    },
  },

  // Stage 2: Group by course and performance
  {
    $group: {
      _id: {
        course: "$course",
        grade: "$performance_grade",
      },
      count: { $sum: 1 },
      students: { $push: "$name" },
      avg_cgpa: { $avg: "$cgpa" },
    },
  },

  // Stage 3: Sort results
  {
    $sort: {
      "_id.course": 1,
      "_id.grade": 1,
    },
  },
]);
```

#### Example 2: Monthly Fee Collection Report

```javascript
// Assuming we have a fees collection
db.fees.aggregate([
  // Stage 1: Match this year's payments
  {
    $match: {
      payment_date: {
        $gte: new Date("2024-01-01"),
        $lt: new Date("2025-01-01"),
      },
    },
  },

  // Stage 2: Group by month
  {
    $group: {
      _id: {
        year: { $year: "$payment_date" },
        month: { $month: "$payment_date" },
      },
      total_amount: { $sum: "$amount" },
      payment_count: { $sum: 1 },
      avg_payment: { $avg: "$amount" },
    },
  },

  // Stage 3: Add month names
  {
    $addFields: {
      month_name: {
        $let: {
          vars: {
            monthsInString: [
              "",
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          in: { $arrayElemAt: ["$$monthsInString", "$_id.month"] },
        },
      },
    },
  },

  // Stage 4: Format output
  {
    $project: {
      period: {
        $concat: ["$month_name", " ", { $toString: "$_id.year" }],
      },
      total_amount: 1,
      payment_count: 1,
      avg_payment: { $round: ["$avg_payment", 2] },
      _id: 0,
    },
  },
]);
```

## Indexing for Performance 🚀

**Indexes** are like book indexes - they help MongoDB find data quickly without scanning every document.

### Without Index vs With Index

#### Without Index (Slow):

```
Query: Find student with ID "CS2023001"
MongoDB scans: Doc1 → Doc2 → Doc3 → ... → Doc1000 → Found!
Time: 50ms for 1000 documents
```

#### With Index (Fast):

```
Query: Find student with ID "CS2023001"
MongoDB uses index: Direct jump to document
Time: 2ms for 1000 documents
```

### Types of Indexes

#### 1. **Single Field Index**

```javascript
// Create index on student_id field
db.students.createIndex({ student_id: 1 });

// 1 = ascending order, -1 = descending order
db.students.createIndex({ cgpa: -1 });
```

#### 2. **Compound Index** (Multiple Fields)

```javascript
// Index on course and CGPA together
db.students.createIndex({
  course: 1,
  cgpa: -1,
});

// This speeds up queries like:
db.students.find({ course: "Computer Science", cgpa: { $gte: 8.0 } });
```

#### 3. **Text Index** (Search in Text)

```javascript
// Create text index for searching names
db.students.createIndex({
  name: "text",
  course: "text",
});

// Now you can search:
db.students.find({ $text: { $search: "Rahul Computer" } });
```

#### 4. **Partial Index** (Conditional)

```javascript
// Index only students with fees unpaid
db.students.createIndex(
  { student_id: 1 },
  { partialFilterExpression: { fees_paid: false } }
);
```

### Index Management

#### View Existing Indexes:

```javascript
db.students.getIndexes();

// Result:
[
  { v: 2, key: { _id: 1 }, name: "_id_" },
  { v: 2, key: { student_id: 1 }, name: "student_id_1" },
  { v: 2, key: { course: 1, cgpa: -1 }, name: "course_1_cgpa_-1" },
];
```

#### Drop Index:

```javascript
db.students.dropIndex("student_id_1");
// or
db.students.dropIndex({ student_id: 1 });
```

#### Index Usage Statistics:

```javascript
db.students.aggregate([{ $indexStats: {} }]);
```

### Best Practices for Indexing

#### ✅ **Do Index:**

- Fields used in `find()` queries frequently
- Fields used in `sort()` operations
- Fields used in aggregation `$match` stages
- Unique identifiers (student_id, email)

#### ❌ **Avoid Indexing:**

- Fields that change frequently
- Large text fields
- Low-cardinality fields (gender: M/F only)
- Collections with heavy write operations

#### Example - Student Management Indexes:

```javascript
// Essential indexes for student collection
db.students.createIndex({ student_id: 1 }); // Unique lookup
db.students.createIndex({ course: 1, cgpa: -1 }); // Course-wise ranking
db.students.createIndex({ city: 1 }); // Location-based queries
db.students.createIndex({ fees_paid: 1 }); // Fee status
db.students.createIndex({ name: "text" }); // Name search
```

## Database Design Patterns 🏗️

### 1. **Embedding vs Referencing**

#### Embedding (Nested Documents)

```javascript
// Student with embedded subjects
{
  "_id": ObjectId("..."),
  "name": "Rahul Sharma",
  "course": "Computer Science",
  "subjects": [                    // Embedded array
    {
      "name": "Data Structures",
      "credits": 4,
      "grade": "A",
      "professor": "Dr. Gupta"
    },
    {
      "name": "Web Development",
      "credits": 3,
      "grade": "A+",
      "professor": "Prof. Sharma"
    }
  ]
}
```

**Pros:**

- ✅ Single query to get all data
- ✅ Atomic operations
- ✅ Better performance for read-heavy apps

**Cons:**

- ❌ Document size limits (16MB)
- ❌ Data duplication
- ❌ Hard to update embedded data

#### Referencing (Separate Collections)

```javascript
// Students collection
{
  "_id": ObjectId("student123"),
  "name": "Rahul Sharma",
  "course": "Computer Science"
}

// Enrollments collection
{
  "_id": ObjectId("enroll456"),
  "student_id": ObjectId("student123"),    // Reference
  "subject_id": ObjectId("subject789"),
  "grade": "A"
}

// Subjects collection
{
  "_id": ObjectId("subject789"),
  "name": "Data Structures",
  "credits": 4,
  "professor": "Dr. Gupta"
}
```

**Pros:**

- ✅ No duplication
- ✅ Easy to update
- ✅ Flexible relationships

**Cons:**

- ❌ Multiple queries needed
- ❌ No foreign key constraints
- ❌ Complex joins

### 2. **When to Embed vs Reference**

#### Use Embedding When:

- **One-to-few** relationships (student → subjects)
- Data **doesn't change often**
- You **always need** related data together
- **Small** embedded documents

#### Use Referencing When:

- **One-to-many** or **many-to-many** relationships
- Data **changes frequently**
- Embedded docs would be **large**
- Need to **query** embedded data independently

### 3. **Common Patterns for Indian Education System**

#### Pattern 1: College Management

```javascript
// Colleges collection
{
  "_id": ObjectId("college123"),
  "name": "IIT Mumbai",
  "location": {
    "city": "Mumbai",
    "state": "Maharashtra",
    "pincode": "400076"
  },
  "departments": ["CS", "IT", "ECE", "ME"],
  "established": 1958
}

// Students collection (references college)
{
  "_id": ObjectId("student456"),
  "college_id": ObjectId("college123"),
  "student_id": "CS2023001",
  "name": "Arjun Mehta",
  "course": "Computer Science",
  "year": 3
}
```

#### Pattern 2: E-Learning Platform

```javascript
// Courses collection
{
  "_id": ObjectId("course123"),
  "title": "Full Stack Web Development",
  "instructor": "Hitesh Choudhary",
  "price": 4999,
  "modules": [                    // Embedded modules
    {
      "module_id": 1,
      "title": "HTML & CSS Basics",
      "duration": "4 hours",
      "videos": [
        {
          "title": "Introduction to HTML",
          "duration": "30 minutes",
          "video_url": "/videos/html-intro.mp4"
        }
      ]
    }
  ]
}

// Enrollments collection
{
  "_id": ObjectId("enroll789"),
  "student_id": ObjectId("student456"),
  "course_id": ObjectId("course123"),
  "enrolled_date": "2024-01-15",
  "progress": {
    "completed_modules": [1, 2],
    "current_module": 3,
    "completion_percentage": 65
  },
  "payment_status": "completed"
}
```

## Transactions (ACID Properties) 💳

For operations that need **all-or-nothing** behavior (like financial transactions).

### Example: Fee Payment System

```javascript
// Start a session for transaction
const session = db.getMongo().startSession();

try {
  session.startTransaction();

  // Step 1: Deduct from student wallet
  db.student_wallets.updateOne(
    { student_id: "CS2023001" },
    { $inc: { balance: -50000 } }, // Deduct ₹50,000
    { session: session }
  );

  // Step 2: Add payment record
  db.fee_payments.insertOne(
    {
      student_id: "CS2023001",
      amount: 50000,
      semester: "2024-Spring",
      payment_date: new Date(),
      status: "completed",
    },
    { session: session }
  );

  // Step 3: Update student fee status
  db.students.updateOne(
    { student_id: "CS2023001" },
    { $set: { fees_paid: true } },
    { session: session }
  );

  // If all operations succeed, commit
  session.commitTransaction();
  print("Fee payment successful!");
} catch (error) {
  // If any operation fails, rollback everything
  session.abortTransaction();
  print("Fee payment failed: " + error);
} finally {
  session.endSession();
}
```

## Data Validation & Schema Design 📋

### JSON Schema Validation

```javascript
// Set validation rules for students collection
db.runCommand({
  collMod: "students",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["student_id", "name", "course", "age"],
      properties: {
        student_id: {
          bsonType: "string",
          pattern: "^[A-Z]{2,3}[0-9]{7}$",
          description: "Must match format like CS2023001",
        },
        name: {
          bsonType: "string",
          minLength: 2,
          maxLength: 100,
        },
        age: {
          bsonType: "int",
          minimum: 17,
          maximum: 35,
        },
        cgpa: {
          bsonType: "double",
          minimum: 0.0,
          maximum: 10.0,
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        },
        course: {
          enum: [
            "Computer Science",
            "Information Technology",
            "Electronics & Communication",
            "Mechanical Engineering",
            "Civil Engineering",
          ],
        },
      },
    },
  },
  validationLevel: "strict", // Reject invalid documents
  validationAction: "error", // Throw error on validation failure
});
```

## Backup and Security 🔒

### Data Backup

```bash
# Export entire database
mongodump --db college_db --out /backup/

# Export specific collection
mongoexport --db college_db --collection students --out students.json

# Import data
mongoimport --db college_db --collection students --file students.json
```

### Security Best Practices

#### 1. **User Authentication**

```javascript
// Create database user
db.createUser({
  user: "college_admin",
  pwd: "secure_password_123",
  roles: [
    {
      role: "readWrite",
      db: "college_db",
    },
  ],
});
```

#### 2. **Role-Based Access**

```javascript
// Create read-only user for reports
db.createUser({
  user: "report_viewer",
  pwd: "viewer_password",
  roles: [
    {
      role: "read",
      db: "college_db",
    },
  ],
});
```

## Performance Optimization Tips 🏃‍♂️

### 1. **Query Optimization**

```javascript
// ❌ Slow - No index
db.students.find({ cgpa: { $gt: 8.0 } });

// ✅ Fast - With index
db.students.createIndex({ cgpa: -1 });
db.students.find({ cgpa: { $gt: 8.0 } });
```

### 2. **Projection Usage**

```javascript
// ❌ Fetches entire document
db.students.find({ course: "Computer Science" });

// ✅ Fetches only needed fields
db.students.find({ course: "Computer Science" }, { name: 1, cgpa: 1, _id: 0 });
```

### 3. **Aggregation Optimization**

```javascript
// ✅ Put $match as early as possible
db.students.aggregate([
  { $match: { course: "Computer Science" } }, // Filter first
  { $sort: { cgpa: -1 } }, // Then sort
  { $limit: 10 }, // Then limit
]);
```

## What's Next?

Congratulations! You now have solid knowledge of MongoDB fundamentals and advanced concepts. You're ready to build real-world applications using MongoDB with Node.js, Express, and React.

## Quick Recap

- ✅ **Aggregation Framework** - Complex data processing and analytics
- ✅ **Indexing** - Performance optimization for fast queries
- ✅ **Database Design** - Embedding vs referencing patterns
- ✅ **Transactions** - ACID properties for critical operations
- ✅ **Validation** - Data integrity and schema enforcement
- ✅ **Security** - Authentication, authorization, and best practices
- ✅ **Performance** - Query optimization and monitoring

You're now a MongoDB expert! 🎯 Ready to build amazing applications! 🚀
