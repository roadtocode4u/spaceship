---
title: "Connecting Backend APIs"
description: "Connecting Backend APIs and Frontend"
hide_table_of_contents: true
---

# Connecting Backend APIs and Frontend

Connecting backend APIs with the frontend is a vital part of building modern websites and applications. It lets the website interact with the server to get and send data, providing up-to-date information and interactive features for users.   

***Key Concepts :***
1. API (Application Programming Interface):  
An API defines the rules and protocols for accessing a web-based software application or web tool. It allows different software systems to communicate with each other.  

2. Backend:  
The backend refers to the server side of an application, which includes the server, database, and application logic. It handles data processing, storage, and retrieval.  

3. Frontend:  
The frontend is the client side of the application that interacts with users. It includes everything users experience on their screens—layouts, buttons, text, images, etc.  

## How Does This Work?
Create separate folder for backend and frontend :  

**Step 1: Set Up the Backend**  
1. Create a Backend Server:  
* We'll use Express (a Node.js framework) to create a simple server.  
* Install the necessary packages as discussed in lecture.  

```bash
npm init -y
npm install express cors
```

2. Create the Server File:  
Create a file named `server.js` and add the following code:  

```javascript
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Sample data
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
];

// API endpoint to get users
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```  

3. Run the Backend Server:

```bash
node server.js
```

**Step 2: Set Up the Frontend**  
1. Create a React Application:  
* Use Create React App to set up the frontend:
```bash
npx create-react-app frontend
```  

* Install axios as discussed in lecture :  
```bash
npm install axios
```   
2. Create a Component to Fetch and Display Data:
Inside the `src` folder, create a file named `UsersList.js` and add the following code:

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    axios.get('http://localhost:3000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
```  

3. Include the Component in the App:  
Modify the `App.js` file to include the` UsersList` component  

```javascript
import React from 'react';
import './App.css';
import UsersList from './UsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersList />
      </header>
    </div>
  );
}

export default App;
```

4. Run the Frontend:  
Start the React development server:  
```bash
npm start
```

**Step 3: Explanation of the Process**

1. Backend Setup:  
* We created a simple Express server that listens on port 3000.  
* CORS is enabled to allow the frontend to make requests to the backend.  
* We defined a single endpoint `/api/users` that returns a list of users.  

2. Frontend Setup:
* We created a React application and installed Axios for making HTTP requests.
* In the `UsersList` component, we use the `useEffect` hook to fetch the list of users from the backend when the component mounts.
* Axios makes a GET request to the backend endpoint `http://localhost:3000/api/users`.  
* The response data (list of users) is stored in the component state using `setUsers`.
* The users are then displayed in a list on the page.  

By following these steps, you set up a backend server that serves data through an API and a frontend application that fetches and displays this data using Axios. This is a fundamental approach in modern web development to create dynamic and interactive user experiences.

## Folder structure 

**Backend Directory:**
```
backend/
│
├── server.js
└── package.json
```

**Frontend Directory:**
```
frontend/
│
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── UsersList.js
├── package.json
└── README.md
```