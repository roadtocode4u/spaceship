---
title: React Folder Structure
description: "React Folder Structure"
hide_table_of_contents: true
---

### How to create a React App?

```js
npx create-react-app <app-name>
```

The `npx create-react-app first-flight` command creates a new React application in a directory called `first-flight`.

* **npm:** node package manager. `npm` is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.

* **create-react-app:** `create-react-app` is a command-line interface tool that allows you to quickly set up a new React project. It generates a starter template with all the necessary files and dependencies for a React app.

* **first-flight:** This is the name of the directory where the new `React app` will be created. You can replace `first-flight` with the name of your choice.

When you run the `npx create-react-app first-flight` command, it will download the latest version of create-react-app and use it to generate a new React app in the `first-flight` directory. The generated app will include a basic file structure with the necessary files to start building your React app.


### How to start a React App?

1. Open your terminal or command prompt to the root directory of your React app.

2.  Run the Command
 
 * Simply type the following command and press Enter:

```js
npm start
```

* f you see this line in your `package.json` file:

```js
"scripts":{
    "start": "react-scripts start"
}
```

It means that when you run `npm start`, it's actually running the `react-scripts start` command.

3. **Custom Script :**

Sometimes, developers may customize the script name instead of using `npm start`. For instance, if your `package.json` looks like this:

```js
"scripts":{
    "fly": "react-scripts start"
}
```

Then, to start your app, you'd use the custom script name, which is `fly` in this example:

```js
npm run fly
```

That's it! Your React app should now be running, and you'll see a message in your terminal telling you where you can access it in your web browser ( usually at **http://localhost:3000** by default ). Just open a web browser, paste this address, and you'll be able to see your React app in action.

### How to open a React App in the browser?

To open a React app in the browser, you need to follow the steps below:

1. Open your command prompt or terminal to the root directory of your React app.

2. Run the command `npm start` in your terminal. This will start a development server and open your app in the default browser automatically.

3. If the app doesn't open automatically, you can manually open it by typing `http://localhost:3000/` in your browser's address bar.

### SPA (Single Page Application)

A Single Page Application (SPA) is like a website that can change its content smoothly without loading entirely new pages. It's like a magic book where the pages transform on their own, making the web experience faster and more interactive.

### Folder Structure

The folder structure of a React project looks like this:

```bash
>first-flight/
  >node_modules/
  >public/
    index.html
    favicon.ico
  >src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
  gitignore
  package-lock.json  
  package.json
  README.md
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.


### React folder structures

#### node_modules

This folder contains all the dependencies of the project. It is not recommended to modify the contents of this folder.

### public

This folder contains the `index.html` file which is the entry point of the application. It is not recommended to modify the contents of this folder.

**robots.txt** file is used to tell search engines which pages or files the crawler can or can't request from your site.

**manifest.json** file is used to provide metadata associated with the web application.

**logo192.png** file is used to provide the logo of the web application.

**logo512.png** file is used to provide the logo of the web application.

**favicon.ico** file is used to provide the favicon of the web application.

**index.html** file is used to provide the entry point of the web application.

**%PUBLIC_URL%** This url points to the public folder.

**meta** tag is used to provide the metadata of the web application.

Note: Public folder is accessible everywhere in the application.

### src

It is the source folder of the application. It contains all the files related to the application.

**index.js** file is used to provide the entry point of the application.

**index.css** file is used to provide the styles of the entry point of the application.

**App.js** file is used to provide the root component of the application.

**App.css** file is used to provide the styles of the root component of the application.

**App.test.js** file is used to provide the test cases of the root component of the application.

#### .gitignore

.gitignore file is used to tell git which files or folders to ignore in a project.

#### package-lock.json

`package-lock.json` file contains the exact version of the dependencies of the project. It is not recommended to modify the contents of this file.

#### package.json

`package.json` file contains the dependencies of the project. It is not recommended to modify the contents of this file.
