# HTTP methods and Status Codes

## HTTP Methods

1. GET <br/>
2. POST<br/>
3. PUT<BR/>
4. PATCH<BR/>
5. DELETE<BR/>
6. HEAD

- #### GET

  - Purpose : Retrieve data from the server
  - Example : Get user profile

- #### POST

  - Purpose : Send data to the server to create
  - Example : Submit a form to register a user

- #### PUT

  - Purpose : Update entire resource
  - Example : Update all details of a product

- #### PATCH

  - Purpose : Update part of a resource
  - Example : Update only the email of a user

- #### DELETE

  - Purpose :Delete a resource
  - Example : Remove a blog post

- #### HEAD
  - Purpose : Like GET, but returns headers only
  - Example : Check if a resource exists

## Status Codes

#### 🔵 1xx: Informational

- <b>Code</b> <br/>
  100 - Continue <br/>
  100 - Switching Protocols

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

### <b>Real-Time Example</b>

#### Creating a user:

Method: POST
Request: /api/users
Status Code:

- 201 Created if user added successfully <br/>
- 400 Bad Request if data is missing <br/>
- 409 Conflict if user already exists
