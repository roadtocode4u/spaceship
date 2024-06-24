# Nodemon

Nodemon is a tool that helps you develop Node.js applications. It watches the files you are working on, and whenever you make changes and save those files, Nodemon automatically restarts your application. This means you don't have to manually stop and start your server every time you make a change.


## Why Restarting the Server is Needed:

1. See Your Changes:
- When you change your code, like fixing a bug or adding a new feature, you need to restart the server to see those changes in action.

2. Update Settings:
- If you change settings or configurations, the server needs to restart to apply these updates.

3. Refresh Everything:
- Sometimes, restarting the server helps clear out any leftover data or errors, giving your application a fresh start.

## How Nodemon Helps:

- Automatic Restarts:   
 Normally, after changing your code, you would have to stop the server and start it again. Nodemon does this automatically for you.

**Example:**
- Without Nodemon
```bash
node app.js  # Start the server
# Make changes to your code
# Stop the server (Ctrl+C)
node app.js  # Start the server again to see changes
```

- With Nodemon
```bash
nodemon app.js  # Start the server with Nodemon
# Make changes to your code
# Nodemon automatically restarts the server for you
```

In simple terms, Nodemon is like a helpful assistant that restarts your server automatically whenever you make changes to your code. This way, you can see your changes instantly without doing extra work.

## Dev Dependencies.
Dev dependencies are tools and libraries that are only needed while you are developing your application. They help you write, test, and debug your code but are not required when your application is running live (in production).

**Nodemon as a Dev Dependency:**

Nodemon is a perfect example of a dev dependency. It helps you during development by automatically restarting your Node.js server whenever you make changes to your files.

**Why Use Nodemon as a Dev Dependency?**

- Nodemon saves you time and effort by automatically restarting your server whenever you save changes to your code.

- In a production environment, you don't usually edit files and restart the server frequently, so Nodemon isn't necessary.

### How to Add Nodemon as a Dev Dependency:

You can add Nodemon to your project as a dev dependency using npm or yarn. This way, it will be listed under devDependencies in your package.json file.

- Using npm:
```bash
npm install --save-dev nodemon
```

- Using yarn:
```bash
yarn add -D nodemon
```

## Simple Steps to Use Nodemon:

1. Install Nodemon:
- Open your terminal and type: 
```html
npm install -g nodemon
```

- This installs Nodemon globally so you can use it anywhere on your computer.

2. Start Your Application with Nodemon:
- Instead of using node to start your app, use `nodemon`. for example `nodemon app.js`
- Using in package.json:
```json
{
  "scripts": {
    "start": "nodemon app.js"
  }
}
```

3. What Happens Next:
- Nodemon runs your application and keeps an eye on your files.
- If you change something in your code and save it, Nodemon will automatically restart your app so you can see the changes right away.