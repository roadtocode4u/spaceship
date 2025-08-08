## 🌐 What is REST API?

_REST_ stands for _Representational State Transfer_.  
It is an architectural style for designing networked applications. REST treats everything as a _resource_ and uses _standard HTTP methods_ to access and manipulate them.

---

## 🔍 Key Features of REST

- _Stateless_: Every HTTP request contains all necessary information.
- _Client-Server Architecture_: Frontend and backend are separate.
- _Cacheable_: Responses can be cached to improve performance.
- _Uniform Interface_: Consistent way to interact with resources.
- _Layered System_: APIs can be composed in layers.

---

# 🧱 REST Architecture Principles

1. Client-Server – Frontend and backend operate independently.

2. Stateless – Server does not store client context.

3. Cacheable – Improve performance with response caching.

4. Uniform Interface – Simplified and consistent access to resources.

5. Layered System – Intermediary layers handle load balancing, caching, etc.

---

## 📌 HTTP Methods Overview

| Method | Description               | Endpoint Example    |
| ------ | ------------------------- | ------------------- |
| GET    | Retrieve resource         | GET /api/users      |
| POST   | Create new resource       | POST /api/users     |
| PUT    | Update entire resource    | PUT /api/users/1    |
| PATCH  | Update part of a resource | PATCH /api/users/1  |
| DELETE | Delete a resource         | DELETE /api/users/1 |

---

## 🧪 Initial Data Setup

```js
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];
```

---

## 1. 🟢 GET – Retrieve All Users

The `GET` method is used to fetch data from the server.

```js
app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "All users fetched successfully",
    data: users,
  });
});
```

✅ **Use Case**: Get the full list of users.

---

## 2. 🟡 POST – Create New User

The `POST` method sends data to the server to create a new resource.

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

✅ **Use Case**: Add a new user.

---

## 3. 🔵 PUT – Replace User by ID

The `PUT` method replaces the entire user data by ID.

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

✅ **Use Case**: Replace full user object.

---

## 4. 🟣 PATCH – Update Part of User by ID

The `PATCH` method updates only selected fields of a user.

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

✅ **Use Case**: Update only `email` or `name`.

---

## 5. 🔴 DELETE – Remove User by ID

The `DELETE` method removes a user from the server by ID.

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

## 🧪 Start the Server

At the end of your file:

```js
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```
