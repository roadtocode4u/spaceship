---
title: Introduction To Nodemon
description: "Introduction To Nodemon "
hide_table_of_contents: true
---

# Nodemon

Nodemon is a tool that helps you develop `Node.js` applications. It watches the files you are working on, and whenever you make changes and save those files, Nodemon automatically restarts your application. This means you don't have to manually stop and start your server every time you make a change.


## Why Restarting the Server is Needed:

1. **See Your Changes:**   
 When you change your code, such as fixing a `bug `or adding a new feature, you need to restart the server to see those changes in action.

2. **Update Settings:**  
 If you change settings or configurations, the server needs to restart to apply these updates.

3. **Refresh Everything:**  
 Sometimes, restarting the server helps clear out any leftover data or errors, giving your application a fresh start.

## How Nodemon Helps:

* Automatic Restarts:   
 Normally, after changing your code, you would have to stop the server and start it again. Nodemon does this automatically for you.

**Example:**
* Without Nodemon
```bash
node app.js  # Start the server
# Make changes to your code
```
This command runs the `app.js` file using` Node.js.` `app.js `typically contains the code to start your server, set up routes, connect to a database, and handle requests.  
After that, Make changes in code . 

```bash
# Stop the server (Ctrl+C)
node app.js  # Start the server again to see changes
```
Pressing `Ctrl+C` in the terminal where the server is running stops the server. This is necessary because `Node.js` doesn't automatically detect changes in your code and restart the server.   
Again, This command restarts your server. Now, the server runs with the updated code you have written. 

* With Nodemon
```bash
nodemon app.js  # Start the server with Nodemon
# Make changes to your code
# Nodemon automatically restarts the server for you
```

In simple terms, Nodemon is like a helpful assistant that restarts your server automatically whenever you make changes to your code. This way, you can see your changes instantly without doing extra work.

## Dev Dependencies.
Dev dependencies are tools and libraries that are only needed while you are developing your application. They help you write, test, and debug your code but are not required when your application is running live (in production).

### Nodemon as a Dev Dependency:

Nodemon is a perfect example of a dev dependency. It helps you during development by automatically restarting your Node.js server whenever you make changes to your files.

### Why Use Nodemon as a Dev Dependency?

* Nodemon saves you time and effort by automatically restarting your server whenever you save changes to your code.

* In a production environment, you don't usually edit files and restart the server frequently, so Nodemon isn't necessary.

### How to Add Nodemon as a Dev Dependency:

You can add Nodemon to your project as a dev dependency using npm or yarn. This way, it will be listed under devDependencies in your package.json file.

* Using npm:
```bash
npm install --save-dev nodemon
```

* Using yarn:
```bash
yarn add -D nodemon
```

## Simple Steps to Use Nodemon:

1. **Install Nodemon Globally or Locally:**

 You can install Nodemon globally so it can be used across all your projects:
```html
npm install -g nodemon
```

* Alternatively, you can install Nodemon locally within your project:
```html
npm install --save-dev nodemon

```

<img src="/nodejs/nodemon/output-1.png" alt="screenshot-1" width="600px"/>

2. **Add a Start Script to `package.json`:**
* Update your `package.json` to add a script that uses Nodemon. If Nodemon is installed locally, you can refer to it directly within the script.

- Using in package.json:
```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    // your dependencies
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}

```
<img src="/nodejs/nodemon/output-3.png" alt="screenshot-3" width="600px"/>

Here, `"dev"`: `"nodemon index.js"` is the script that will run Nodemon. Replace `index.js` with the entry point of your application.

3. **Run Your Application with Nodemon:**

Use the script you defined in package.json to start your application with Nodemon.

```bash
nodemon index.js
```
Congratulations! Nodemon ran successfully.

<img src="/nodejs/nodemon/output-2.png" alt="screenshot-2" width="600px"/>

