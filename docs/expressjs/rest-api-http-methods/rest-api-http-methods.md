# 1️⃣ What is a REST API?

**REST** stands for **Representational State Transfer**.  
It’s an **architectural style** for designing networked applications.

In REST:

- Everything is treated as a **resource** (e.g., a user, a product, a blog post).
- Each resource is accessed via a **unique URL**.
- Standard **HTTP methods** are used to retrieve or modify data.

---

# 2️⃣ REST API Workflow (Diagram)

![REST API Diagram](/static/expressjs/rest-api-http-methods/rest-api-architecture.jpg)  
_Figure: A simple REST API communication between Client, Server, and Database._

**How it works:**

1. The **Client** (browser, mobile app, etc.) sends an HTTP request to the **API server**.
2. The **Server** processes the request and, if needed, communicates with a **Database**.
3. The **Server** sends back a **JSON response** to the client.

---

## 3️⃣ Key Features of REST

1. **Stateless** – Each request is independent; the server does not store client data between requests.

2. **Client-Server Architecture** – Frontend (client) and backend (server) work independently.

3. **Cacheable** – Responses can be stored (cached) for faster access.

4. **Uniform Interface** – Consistent way to interact with resources.

5. **Layered System** – Multiple layers (like load balancers, cache servers) can exist between client and server.

---

## 4️⃣ HTTP Methods in REST API

| Method     | Purpose                      | Example Endpoint |
| ---------- | ---------------------------- | ---------------- |
| **GET**    | Retrieve data                | `/users`         |
| **POST**   | Create a new resource        | `/users`         |
| **PUT**    | Replace an existing resource | `/users/:id`     |
| **PATCH**  | Update part of a resource    | `/users/:id`     |
| **DELETE** | Remove a resource            | `/users/:id`     |

---

## 5️⃣ Setup: Creating a REST API in Node.js

### Step 1: Install Node.js and Express

```bash
npm init -y
npm install express
```

### Step 2: Basic Server Setup

```js
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

//sample array data
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];
```

---

## 6️⃣ API Endpoints

### 1. 🟢 GET – Retrieve All Users

```js
app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "All users fetched successfully",
    data: users,
  });
});
```

✅ **Use Case**: View all users.

---

### 2. 🟡 POST – Create New User

```js
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.json({
      success: false,
      message: "Name and email are required",
      data: null,
    });
  }

  const newUser = {
    id: Math.floor(Math.random() * 1000000),
    name,
    email,
  };

  users.push(newUser);

  res.json({
    success: true,
    message: "User created successfully",
    data: newUser,
  });
});
```

✅ **Use Case**: Register a new user.

---

### 3. 🔵 PUT – Replace User by ID

```js
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const index = users.findIndex((u) => u.id == id);

  if (index === -1) {
    return res.json({
      success: false,
      message: "User not found",
      data: null,
    });
  }

  const updatedUser = {
    id: parseInt(id),
    name,
    email,
  };

  users[index] = updatedUser;

  res.json({
    success: true,
    message: "User updated successfully",
    data: updatedUser,
  });
});
```

✅ **Use Case**: Replace all details of a user.

---

### 4. 🟣 PATCH – Update Part of a User

```js
app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const user = users.find((u) => u.id == id);

  if (!user) {
    return res.json({
      success: false,
      message: `User with id ${id} not found`,
      data: null,
    });
  }

  if (name) user.name = name;
  if (email) user.email = email;

  res.json({
    success: true,
    message: `User with id ${id} updated successfully`,
    data: user,
  });
});
```

✅ **Use Case**: Update only a user’s email or name.

---

### 5. 🔴 DELETE – Remove a User by ID

```js
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((u) => u.id == id);

  if (index === -1) {
    return res.json({
      success: false,
      message: `User with id ${id} not found`,
      data: null,
    });
  }

  users.splice(index, 1);

  res.json({
    success: true,
    message: `User with id ${id} deleted successfully`,
    data: users,
  });
});
```

✅ **Use Case**: Delete a user by ID.

---

## 7️⃣ Starting the Server

```js
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

## 📌 How the API Works

1. **Client** sends a request (GET, POST, PUT, PATCH, DELETE).
2. **Server** processes it and interacts with the **database** (or array in this example).
3. **Server** sends a JSON response back to the client.

---
