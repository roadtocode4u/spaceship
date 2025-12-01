---
title: "HTTP methods and Status Codes"
description: "HTTP methods and Status Codes"
hide_table_of_contents: true
---

# HTTP methods and Status Codes

## HTTP Methods

### 🤔What is HTTP Methods ?

HTTP Methods are **different ways to tell a server what action you want to perform** on a resource (data).

### 🧐How It Work?

<img src="/expressjs/13/2.jpg"  width="700px" />

### 📋 List of HTTP Methods

1. GET <br/>
2. POST<br/>
3. PUT<BR/>
4. PATCH<BR/>
5. DELETE<BR/>
6. HEAD

<img src="/expressjs/13/1.png"  width="700px" />

1. **GET**

   - **Purpose:** Retrieve data from the server (**read-only, no changes**)
   - **Example:** Get a user profile

2. **POST**

   - **Purpose:** Send data to create a new resource (**create**)
   - **Example:** Submit a form to register a user

3. **PUT**

   - **Purpose:** Replace the entire resource (**update completely**)
   - **Example:** Update all details of a product

4. **PATCH**

   - **Purpose:** Modify part of a resource (**update partially**)
   - **Example:** Change only the email of a user

5. **DELETE**

   - **Purpose:** Remove a resource
   - **Example:** Delete a blog post

6. **HEAD**
   - **Purpose:** Same as GET, but only returns headers
   - **Example:** Check if a file exists without downloading it

## Status Codes

### 🤔 What are Status Codes? ?

HTTP Status Codes are **3-digit numbers sent by the server** to indicate the result of your request.  
Think of them like traffic signals — they tell you if the request was successful, redirected, failed, or something else.

#### 🔵 1xx: Informational

- <b>Code</b> <br/>
  100 - Continue <br/>
  101 - Switching Protocols

#### 🟢2xx: Success

- <b>Code</b> <br/>
  200 - OK <br/>
  201 - Created (for POST/PUT) <br/>
  204 - No Content (successful, no body)

#### 🟡3xx: Redirection

- <b>Code</b> <br/>
  301 - Moved Permanently <br/>
  302 - Found (Temporary Redirect) <br/>
  304 - Not Modified

#### 🔴4xx: Client Errors

- <b>Code</b> <br/>
  400 - Bad Request <br/>
  401 - Unauthorized (login required) <br/>
  403 - Forbidden (access denied) <br/>
  404 - Not Found <br/>
  409 - Conflict

#### 🔴5xx: Server Errors

- <b>Code</b> <br/>
  500 - Internal Server Error <br/>
  502 - Bad Gateway <br/>
  503 - Service Unavailable

## 📌 Real-Time Example

#### Creating a user:

**Scenario:** Creating a user

**Method:** `POST`  
**Request:** `/api/users`

Possible Responses:

- `201 Created` → User added successfully
- `400 Bad Request` → Data is missing
- `409 Conflict` → User already exists
