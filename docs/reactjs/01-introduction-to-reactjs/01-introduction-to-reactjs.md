---
title: Introduction To react JS
description: "Introduction To react JS"
hide_table_of_contents: true
---

## React

React is a JavaScript frontend library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. You can use React to make single-page websites or mobile apps, which can be pretty cool!

### What React Does

**It's a JavaScript Library** : React is not a framework; it's a library. Think of it as a collection of useful code that you can use to build your UI.

**Developed by Facebook (Meta)**: Yep, smart folks at Facebook created React and continue to improve it.

**Component-Based Development**: React is all about building reusable building blocks called components. You make a component once, and then you can use it in many different places on your website or app. This saves you time and keeps your code neat and organized.

**Micro Frontend**: React can be used to build small parts of a website. So, if you have a big site, you can use React for just one part, like a cool interactive widget, without changing the whole site.

### Awesome Features of React

1. Component based development
2. Fast
3. Virtual DOM
4. HMR (Hot Module Reloading)
5. JSX

**Component based development**: Component-based development in React means building applications using reusable and standalone components, each representing a UI part with its own logic and styling.

**Fast**: React is speedy. It helps your web pages load quickly and run smoothly.

**Hot Module Reloading (HMR)**: This is like magic for developers. It lets you see your code changes right away without refreshing your whole page. It's like having an instant preview of your work.

**Real DOM:** When you build a web application, the browser creates a Document Object Model (DOM) to represent the structure and content of your webpage. This DOM is a hierarchical tree-like structure consisting of HTML elements, their properties, and their relationships with each other. Manipulating the DOM directly is slow and can be resource-intensive.

**Virtual DOM:** The Virtual DOM is a lightweight, in-memory representation of the actual DOM. It's essentially a copy of the real DOM, but it's not directly tied to the browser's rendering engine. Developers use frameworks like React to work with the Virtual DOM.

**JSX :** JSX stands for JavaScript XML. It's a syntax extension for JavaScript used in React to describe the structure and layout of user interfaces. JSX allows developers to write `HTML-like syntax which allows to write Js & Html at one place`. making it easier to define and render UI components in React applications.

### Some Handy Terms

**`npm` (Node Package Manager)**: `npm` is like a super cool store for JavaScript code. You can find and install all sorts of helpful code packages there.

**`npx` (Node Package Executer)**: `npx` is like a magical button that runs code packages from `npm` without installing them permanently. It's handy for running one-time commands.

## Create React app

1. Create a folder and named it (whatever name do you want to keep) First_Flight
2. Open it in VS Code editor.
3. Create a file with name of `package.json ` ( A "package" refers to a library, and it contains all the information about the library we're using.)
4. In package.json file we create an object "{}" as we know that in json file we feed the data in key-value pair we right everything in double quote e.g. ("name":"first_flight")

5. first right the name of that project ` first_flight`

```js
{
       "name":"first_flight",
}
```

6. In the second line we write the version of that project `1.0.0 `

```js
"version":"1.0.0",
```

7. After that we write the **dependecies** it refer to external packages or libraries that your React
   project relies on to function properly. These packages are necessary for your React application to run as expected.

```js
"dependencies":{

}
```

8. Next we write the command **npm i react** it will give all the dependecies of the react and you see another file with the name of package-lock.json and node_modules

<img src="/react/01/command.png" alt="output-1" width="600px"/>

9. Next we write another command **npm i react-dom** this is the dependencies which make virtual dom in react

<img src="/react/01/command2.png" alt="output-1" width="600px"/>

10. Next step is to create a folder name public and in that folder we creacte a index.html file
11. Next, we write the basic HTML structure. Inside the `<body>` tag, we add a `<div>` with the id "root". In React, because we usually have just one HTML file, we call it a "SPA" (Single Page Application).
12. Next we create a folder name `src` (source) in that folder we create a file with `main.js`
13. In `main.js ` we import ReactDom from "react-dom/client" `import ReactDOM from "react-dom/client"`
14. Then we create a root element

<img src="/react/01/rootelement.png" alt="output-1" width="600px"/>

15. Next open terminal and install react scripts ` npm i react-scripts`

16. Next write another script between the version and dependencies `"script":{       "start":"react-script start"}` This command installs react-scripts, which is essential for building and running React applications.

17. Next in terminal write `npm start` after that it will ask "Would you like to add the defaults to your package.json" say `y` after that it will redirect to you on the browser and you see the output, with that it install the some of configuration for browserslist, which is a tool used to specify which browsers your project should support. In simpler terms, it tells browserslist which browser versions your project needs to work with in both production and development environments.

#### package.json

```js
{
  "name": "first_flight",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "^5.0.1"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```
