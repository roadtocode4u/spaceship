---
title: "JWT"
description: "JSON web token"
hide_table_of_contents: true
---

## What is JWT (JSON Web Token) ?

JWT `(JSON Web Token)` is a compact, `secure` way to transmit data as a JSON object, commonly used for `authentication and authorization`.

While anyone can `decode a JWT`, only the server with the `secret key` can verify its validity, ensuring `secure and efficient` communication.

### Example...

Think of a locker key at a gym. Anyone can see the locker number, but only the correct key can unlock and verify access to that locker.

## How JWT Works ?

### 1. User Login:

- User provides valid credentials (e.g., email and password).
- Server validates the credentials and generates a JWT containing user information.

### 2. Token Sent to Client:

- The server sends the JWT to the client (usually stored in localStorage, cookies, or memory).

### 3. Client Sends JWT:

- The client includes the JWT in the Authorization header of API requests.

### 4. Server Verifies Token:

- The server verifies the token's signature using a secret key.
- If valid, the user is granted access; otherwise, access is denied.

<img src="/expressjs/11/01.png"  width="700px" />

## A JWT (JSON Web Token) is essentially a string composed of three parts, separated by dots `(.)`

1. **Header**: Contains metadata, like the type of token (JWT) and the signing algorithm (e.g., HS256).
2. **Payload**: Contains the data (claims) being transmitted, such as user information or token expiration.
3. **Signature**: A cryptographic hash generated using the header, payload, and a secret key to verify the token's integrity.

<img src="/expressjs/11/02.png"  width="700px" />

## Use Cases of JWT

### 1. User Authentication.

### 2. Authorization.

### 3. Stateless Authentication:

- JWT is stateless. The server does not need to store session data; all the necessary information is inside the token.

### 4. Secure API Communication:

- Used in REST APIs to validate requests from users.

## Implementation of JWT

### 1. install `jsonwebtoken`

```js
npm install jsonwebtoken

```

### 2. Generate a JWT (Sign a Token)
