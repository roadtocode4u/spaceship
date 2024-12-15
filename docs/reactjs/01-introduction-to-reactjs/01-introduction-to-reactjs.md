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
3. Create a file with name of `package.json ` ( A "package" refers to a library, and it contains all the information about the library we're using.), It is the backbone of react project.

- `package.json` files contain name of your react project, version, entry-point, script, dependencies(package, library, dependency),browserslist

4. In package.json file we create an object "{}" as we know that in json file we feed the data in key-value pair we wright everything in double quote e.g. ("name":"first_flight")

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

7. On the third line, we add a `description` field to provide a brief summary of the project:

```js
"description":"this is my first ReactAPP"

```

8. Next, we add a `main` field, which specifies the `entry point` of the application. In the `root directory`, we create a folder named `src` to organize our source files. Inside the `src folder`, we create a file called `index.js`.

```js
"main":"index.js"
```

9. Next, we add a `scripts object`. Inside it, we define a `script` called `start` and assign it the command `react-scripts start` to run the application:

10. After that we write the **dependencies** it refer to external packages or libraries that your React
    project relies on to function properly. These packages are necessary for your React application to run as expected.

```js
"dependencies":{

}
```

11. Then, we create a `public folder`, and inside it, we add a file named `index.html`. This will be the `only HTML` file in our entire React project, which is why React is referred to as a `Single Page Application (SPA) framework`.

12. Next, we write the basic HTML structure. Inside the `<body>` tag, we add a `<div>` with the id `root`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>First Flight</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

13. Next we write the command in the terminal `npm i react` it will give all the `dependencies` of the react and you see another file with the name of `package-lock.json` and `node_modules`

<img src="/react/01/command.png" alt="output-1" width="600px"/>

14. Open the `package.json` file, and you will see a new key-value pair under the `dependencies object`. This pair includes `react` as the key and its version `^19.0.0` as the value on the right side.

15. In the `package-lock.json` file, you can see the flow of `dependencies`, showing which library `depends` on which other `libraries` .

16. Next we write another command **npm i react-dom** this is the dependencies which make virtual dom in react

<img src="/react/01/command2.png" alt="output-1" width="600px"/>

17. Next, open the terminal and `install react-scripts` by running the command:

```js
npm install react-scripts
```

This may take some time as `react-scripts` is larger than the other two dependencies.

<img src="/react/01/command3.png" alt="output-1" width="600px"/>

18. In index.js, we import ReactDOM from "react-dom/client" using the following line:

```js
import ReactDOM from "react-dom/client";
```

This is used to `create the root of our React application`.

19. Then we create a root element

<img src="/react/01/rootelement.png" alt="output-1" width="600px"/>

20. Next in terminal write `npm start` after that it will ask "Would you like to add the defaults to your package.json" say `y` after that it will redirect to you on the browser and you see the output, with that it install the some of configuration for browserslist, which is a tool used to specify which browsers your project should support. In simpler terms, it tells browserslist which browser versions your project needs to work with in both production and development environments.

#### package.json

```js
{
  "name": "first_flight",
  "version": "1.0.0",
  "description": " this is my first ReactJS project",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
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

<img src="/react/01/output.png" alt="output-1" width="600px"/>

## Happy coding 🤖
