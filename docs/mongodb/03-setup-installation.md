# Setting up MongoDB

## Installation Options

There are several ways to get started with MongoDB. We'll cover the easiest and most practical methods for beginners.

## Option 1: MongoDB Atlas (Cloud - Recommended for Beginners) 🌟

**MongoDB Atlas** is the cloud version of MongoDB. It's **FREE** for learning and perfect for beginners!

### Why Atlas is Perfect for You:

- ✅ **No installation needed** - works in browser
- ✅ **Free forever** - 512MB storage (enough for learning)
- ✅ **Automatic backups** - your data is safe
- ✅ **Accessible anywhere** - from college, home, or café
- ✅ **Same interface** used by professionals

### Step-by-Step Atlas Setup:

#### Step 1: Create Account

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Click **"Try Free"**
3. Sign up with:
   - Email: `your-email@gmail.com`
   - Password: Create a strong password
   - First Name: `Your Name`
   - Last Name: `Your Surname`

#### Step 2: Create Free Cluster

1. Choose **"M0 Sandbox"** (FREE forever)
2. Cloud Provider: **AWS**
3. Region: **Mumbai (ap-south-1)** or **Singapore** (closest to India)
4. Cluster Name: `LearningCluster` or keep default
5. Click **"Create Cluster"**

#### Step 3: Create Database User

1. In **Security → Database Access**
2. Click **"Add New Database User"**
3. Username: `student` (easy to remember)
4. Password: Create strong password or use **"Autogenerate"**
5. Database User Privileges: **"Read and write to any database"**
6. Click **"Add User"**

#### Step 4: Set Network Access

1. Go to **Security → Network Access**
2. Click **"Add IP Address"**
3. Choose **"Allow access from anywhere"** (for learning)
4. Click **"Confirm"**

#### Step 5: Connect to Database

1. Go to **Deployment → Database**
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the **connection string** - save it in notepad!

```
mongodb+srv://student:<password>@learningcluster.xyz.mongodb.net/?retryWrites=true&w=majority
```

## Option 2: MongoDB Compass (Desktop App) 🖥️

**MongoDB Compass** is the official desktop application for MongoDB.

### Download & Install:

1. Go to [mongodb.com/products/compass](https://www.mongodb.com/products/compass)
2. Download for **macOS/Windows/Linux**
3. Install normally (Next → Next → Install)
4. Open MongoDB Compass

### Connect to Atlas:

1. Open Compass
2. Paste your **Atlas connection string**
3. Replace `<password>` with your actual password
4. Click **"Connect"**

## Option 3: Local Installation (Advanced)

For those who want MongoDB on their computer:

### macOS (using Homebrew):

```bash
# Install Homebrew first (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install MongoDB
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb/brew/mongodb-community
```

### Windows:

1. Download from [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Choose **Windows** and **msi** package
3. Run installer (check "Install MongoDB as a Service")
4. MongoDB runs automatically

### Ubuntu/Linux:

```bash
# Import public key
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Update packages and install
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
```

## First Steps with Your Database

### Create Your First Database

Using **MongoDB Compass**:

1. Connect to your cluster
2. Click **"Create Database"**
3. Database Name: `college_db`
4. Collection Name: `students`
5. Click **"Create Database"**

Using **Atlas Web Interface**:

1. Go to **Deployment → Database**
2. Click **"Browse Collections"**
3. Click **"Add My Own Data"**
4. Database: `college_db`
5. Collection: `students`

## Understanding the Interface

### MongoDB Compass Sections:

#### 1. **Databases** (Left Panel)

- List of all your databases
- Click to expand and see collections

#### 2. **Collections** (Main View)

- Shows documents in selected collection
- Like "tables" in SQL

#### 3. **Documents** (Document View)

- Individual records in JSON format
- Each document = one student/user/product

#### 4. **Query Bar** (Top)

- Where you write queries to find data
- Like "WHERE" clause in SQL

### Sample Database Structure:

```
college_db/                    ← Database
├── students/                  ← Collection
│   ├── document1 (Rahul)     ← Individual documents
│   ├── document2 (Priya)
│   └── document3 (Amit)
├── courses/                   ← Another collection
│   ├── document1 (CS)
│   └── document2 (IT)
└── teachers/                  ← Another collection
    ├── document1 (Dr. Sharma)
    └── document2 (Prof. Patel)
```

## Create Sample Data

Let's add some sample Indian student data to practice with:

### Add Students Collection:

#### Student 1:

```javascript
{
  "student_id": "CS2023001",
  "name": "Rahul Sharma",
  "age": 21,
  "city": "Mumbai",
  "course": "Computer Science",
  "year": 3,
  "cgpa": 8.5,
  "subjects": [
    {
      "name": "Data Structures",
      "credits": 4,
      "grade": "A"
    },
    {
      "name": "Web Development",
      "credits": 3,
      "grade": "A+"
    }
  ],
  "contact": {
    "email": "rahul.sharma@college.edu",
    "phone": "+91-9876543210"
  },
  "fees_paid": true,
  "scholarship": false,
  "hobbies": ["coding", "cricket", "movies"]
}
```

#### Student 2:

```javascript
{
  "student_id": "IT2023002",
  "name": "Priya Patel",
  "age": 20,
  "city": "Ahmedabad",
  "course": "Information Technology",
  "year": 2,
  "cgpa": 9.1,
  "subjects": [
    {
      "name": "Database Management",
      "credits": 4,
      "grade": "A+"
    },
    {
      "name": "Software Engineering",
      "credits": 3,
      "grade": "A"
    }
  ],
  "contact": {
    "email": "priya.patel@college.edu",
    "phone": "+91-9123456789"
  },
  "fees_paid": true,
  "scholarship": true,
  "internship": {
    "company": "TCS",
    "duration": "3 months",
    "stipend": 15000
  },
  "hobbies": ["dancing", "reading", "traveling"]
}
```

#### Student 3:

```javascript
{
  "student_id": "CS2023003",
  "name": "Amit Kumar",
  "age": 22,
  "city": "Delhi",
  "course": "Computer Science",
  "year": 4,
  "cgpa": 7.8,
  "subjects": [
    {
      "name": "Machine Learning",
      "credits": 4,
      "grade": "B+"
    },
    {
      "name": "Mobile App Development",
      "credits": 3,
      "grade": "A"
    }
  ],
  "contact": {
    "email": "amit.kumar@college.edu",
    "phone": "+91-9988776655"
  },
  "fees_paid": false,
  "scholarship": false,
  "project": {
    "title": "E-commerce Website",
    "technology": ["React", "Node.js", "MongoDB"],
    "status": "completed"
  },
  "hobbies": ["gaming", "photography"]
}
```

### How to Add Documents:

#### In MongoDB Compass:

1. Select `college_db` database
2. Select `students` collection
3. Click **"Add Data"** → **"Insert Document"**
4. Copy-paste the JSON above
5. Click **"Insert"**

#### In Atlas Web:

1. Go to **Collections** tab
2. Select `students` collection
3. Click **"Insert Document"**
4. Switch to **JSON view**
5. Paste the student data
6. Click **"Insert"**

## Verification

After adding data, you should see:

- ✅ Database: `college_db`
- ✅ Collection: `students` (3 documents)
- ✅ Each document has an `_id` field (auto-generated)

## Common Setup Issues

### 1. **Atlas Connection Failed**

- ✅ Check internet connection
- ✅ Verify username/password
- ✅ Ensure IP address is whitelisted

### 2. **Compass Won't Connect**

- ✅ Check connection string format
- ✅ Replace `<password>` with actual password
- ✅ Remove extra spaces from connection string

### 3. **Can't Create Database**

- ✅ Check user permissions (read/write access)
- ✅ Verify you're connected to correct cluster

## Development Environment Setup

For coding with MongoDB, you'll need:

### 1. **Node.js** (for backend development)

```bash
# Check if installed
node --version
npm --version

# If not installed, download from nodejs.org
```

### 2. **MongoDB Driver** (for connecting from code)

```bash
# Install MongoDB driver for Node.js
npm install mongodb

# Or install Mongoose (easier to use)
npm install mongoose
```

### 3. **Code Editor Extensions**

- **VS Code**: Install "MongoDB for VS Code" extension
- **Provides**: Syntax highlighting, IntelliSense for MongoDB

## Connection String Explained

```
mongodb+srv://username:password@cluster.xyz.mongodb.net/database_name?options
```

- `mongodb+srv://` - Protocol for Atlas connection
- `username:password` - Your database credentials
- `cluster.xyz.mongodb.net` - Your cluster address
- `database_name` - Optional: specific database
- `?options` - Connection options (retryWrites, etc.)

## Best Practices for Setup

### 1. **Security**

- ✅ Use strong passwords
- ✅ Limit IP access in production
- ✅ Create separate users for different apps
- ✅ Never commit connection strings to GitHub

### 2. **Organization**

- ✅ Use meaningful database names (`ecommerce_db`, `blog_db`)
- ✅ Use clear collection names (`users`, `products`, `orders`)
- ✅ Group related data logically

### 3. **Development**

- ✅ Use Atlas for learning (free & easy)
- ✅ Use local MongoDB for production apps
- ✅ Keep connection strings in environment variables

## What's Next?

Great! Now you have MongoDB set up and sample data ready. Let's start learning how to perform CRUD operations (Create, Read, Update, Delete) with this data.

## Quick Recap

- ✅ **MongoDB Atlas** - Best for beginners (cloud, free, easy)
- ✅ **MongoDB Compass** - Desktop app for database management
- ✅ **Sample data** - Created college database with student records
- ✅ **Ready to code** - Environment set up for learning
- ✅ **Connection secured** - Database accessible from anywhere

Your MongoDB journey starts now! 🎯
