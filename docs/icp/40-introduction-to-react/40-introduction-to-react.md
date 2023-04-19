---
title: Introduction to React
description: "Introduction to React"
hide_table_of_contents: true
---

## React 

React is a JavaScript frontend library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. 

## Folder Structure

The folder structure of a React project looks like this:

```bash
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.


## How to create a React App?

```js
npx create-react-app my-app
```

The `npx create-react-app my-app` command creates a new React application in a directory called `my-app`.

`npx` = `npm` - node package manager. `npm` is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.

  `create-react-app` = `create-react-app` is a command-line interface tool that allows you to quickly set up a new React project. It generates a starter template with all the necessary files and dependencies for a React app.

`my-app` = This is the name of the directory where the new React app will be created. You can replace `my-app` with the name of your choice.

When you run the `npx create-react-app my-app` command, it will download the latest version of create-react-app and use it to generate a new React app in the `my-app` directory. The generated app will include a basic file structure with the necessary files to start building your React app.


## How to start a React App?

1. Open your terminal or command prompt to the root directory of your React app.

2. Run the following command:

```js
npm start
```

## How to open a React App in the browser?

To open a React app in the browser, you need to follow the steps below:

Open your command prompt or terminal to the root directory of your React app.

Run the command `npm start` in your terminal. This will start a development server and open your app in the default browser automatically.

If the app doesn't open automatically, you can manually open it by typing `http://localhost:3000/` in your browser's address bar.

## SPA (Single Page Application)

A web application or web page interacts with the user by dynamically rewriting the current page instead of loading whole new pages from the server.

## React folder structures

#### node_modules

This folder contains all the dependencies of the project. It is not recommended to modify the contents of this folder.

#### package.json

`package.json` file contains the dependencies of the project. It is not recommended to modify the contents of this file.

#### package-lock.json

`package-lock.json` file contains the exact version of the dependencies of the project. It is not recommended to modify the contents of this file.

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

### .gitignore

.gitignore file is used to tell git which files or folders to ignore in a project.