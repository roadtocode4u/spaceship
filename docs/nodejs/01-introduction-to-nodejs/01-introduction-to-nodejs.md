---
title: Introduction To NodeJs
description: "Introduction To NodeJs"
hide_table_of_contents: true
---

<img src="/nodejs/01/nodejs.png" alt="screenshot-1" width="200px"/>

## What is Node.js?

Node.js is a special environment that lets you run JavaScript code outside of web browsers. It's like a playground for JavaScript on your computer. Normally, JavaScript runs inside web browsers to make websites interactive, but with Node.js, you can also use it to do things on servers, which are powerful computers that handle requests from the internet.

---

## Frontend and Backend: Explained

When you use JavaScript in a web browser to create interactive websites, that's called the `frontend` It's like the face of a website that you see and interact with. On the other hand, when you want to do things behind the scenes, like **handling data**, **storing information**, or **responding to user requests**, that's called the `backend`. Node.js helps you with these backend tasks, making your websites more powerful.

---


## How JavaScript Runs Outside the Browser Using Node.js

### What is Node.js?
- Node.js is a **JavaScript runtime**.
- It allows JavaScript code to run outside a web browser.
- Node.js is built using the **V8 engine**, the same engine used by Google Chrome.
  
  1. **V8 Engine**:  
   - V8 is a powerful JavaScript engine developed by Google.  
   - It converts JavaScript code into machine code (language the computer understands).
  
  **Example:**
   - Imagine a car engine that makes a car go fast. In the same way, the V8 engine is what makes JavaScript run **quickly** and **smoothly**. Node.js uses this engine as its core, which means your JavaScript code can run really fast, even outside of a browser.
1. **No Browser Needed**:  
   - Browsers like Chrome or Firefox run JavaScript inside their own environment.  
   - Node.js uses the V8 engine directly, so it doesn’t need a browser to run JavaScript.
2. **System Interaction**:  
   - Node.js provides tools (called APIs) to work with files, servers, and databases.  
   - For example, you can write a file or create a server using JavaScript.

---

### Example: Running JavaScript Code in Node.js

1. Write your JavaScript code in a file:  
   ```javascript
   // app.js
   console.log("Hello, Node.js is running JavaScript outside the browser!");
   ```

2. Run it using Node.js:  
   - Open your terminal and type:  
     ```bash
     node app.js
     ```
   - Output:  
     ```
     Hello, Node.js is running JavaScript outside the browser!
     ```

---

### Popular Browsers and Their JavaScript Engines
- **Google Chrome**: Uses the **V8 engine**.
- **Mozilla Firefox**: Uses the **SpiderMonkey engine**.
- **Safari**: Uses the **JavaScriptCore engine** (also called Nitro).
- **Microsoft Edge**: Uses the **Chakra engine** (earlier versions) and now uses **V8** in Chromium-based Edge.

---

### Key Points About Node.js

1. **JavaScript Runtime**:  
   - Node.js is a runtime, meaning it provides an environment to execute JavaScript outside the browser.  

2. **Powered by V8**:  
   - Node.js is built on the V8 engine, making it fast and efficient.  

3. **Different from Browser JavaScript**:  
   - It doesn’t have browser-specific features like `window` or `document`.  
   - Instead, it has tools to interact with the system (like reading files, creating servers).  

---

## Behind the Scenes: C and C++

NodeJS is written in **C and C++** and provides a foundation for building fast and scalable network applications.

## Benefits of Node.js

**Versatility:** Node.js lets you use JavaScript both in **web browsers** and on **servers**, making it easy to build full-stack applications.

**Speed:** Thanks to the V8 engine, your code runs **quickly** and **efficiently**.

**Scalability:** Node.js is like a superhero for handling multiple tasks simultaneously, which is perfect for busy websites.

**Community:** A lot of developers use and contribute to Node.js, so there's a big community to learn from and get help.
