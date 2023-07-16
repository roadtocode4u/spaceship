---
title: React Interview Questions
description: "React Interview Questions"
hide_table_of_contents: true
---

<details>
  <summary> 1. What is React?</summary>

  <p>
  
 React is a JavaScript frontend library used for building user interfaces. It uses components to build web applications. React is a single page application.

  </p>

</details>

<details>
  <summary> 2. What is the used of React? </summary>

  <p>
  
React is used for building single page application and dynamic page application. React can be used to develop mobile applications.

  </p>

</details>

<details>
  <summary> 3. What are the features of React? </summary>

  <p>
 
1. React is a library that allows developers to build user interfaces using JavaScript.<br/>
2.  It is used for its ability to create reusable UI components which makes it easier to maintain applications. <br/>
3.  React uses DOM to update the UI efficiently which results in faster.<br/>

  </p>

</details>

<details>
  <summary>4. How to create a React App? </summary>

  <p>
  
  To create a react app you can used the command.

```js
npx create-react-app my-app
```

The `npx create-react-app my-app` command creates a new react application in a directory called `my-app`. `npm` is a node package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment `Node.js`. <br/>

`create-react-app`: create-react-app is a command-line interface tool that allows you to quickly set up a new React project. It generates a starter template with all the necessary files and dependencies for a react app.<br/>

`my-app`: This is the name of the directory where the new react app will be created. You can replace `my-app` with the name of your choice.

When you run the `npx create-react-app my-app` command, it will download the latest version of `create-react-app` and use it to generate a new React app in the `my-app` directory. The generated app will include a basic file structure with the necessary files to start building your React app.

  </p>

</details>

<details>
  <summary> 5. What is the fullform of npm and npx? </summary>

  <p>
  
npm stands for Node Package Manager. It is a package manager for the JavaScript programming language. It is used for managing dependencies in Node.js projects. npm allows developers to discover, share, and reuse packages of code which can include various dependencies and modules.

npx stands for node package executor. npx is used to execute Node.js packages without the need to install them globally on your system.

  </p>

</details>

<details>
  <summary> 6. How to start a React App? </summary>

  <p>

To start react app in your system you have to follow some steps:

1. You have Node.js installed on your system. You can download and install Node.js from the official website (https://nodejs.org).

2. Open your command prompt or terminal.

3. Create a new directory for your react app. You can use the following command to create a new directory:

```js
cd my-react-app
```

4.  Inside the directory you can initialize a new react app using Create React App.

```js
 npx create-react-app .
```

The `npx` command executes create react app without the need to install it globally. The dot `.` at the end of the command specifies the current directory as the project directory.

5. You can start your react app by running the following command:

```js
npm start
```

This command will start the development server and open your app in a web browser. It runs on (http://localhost:3000).

  </p>

</details>

<details>
  <summary>7. How to open a React App in the browser? </summary>

  <p>
  
  To open a react app in the browser you need to follow the steps below:<br/><br/>
  1. Open your command prompt or terminal to the root directory of your React app.<br/>
  2. Run the command `npm start` in your terminal. This will start a development server and open your app in the default browser automatically.<br/>
  3. If the app doesn't open automatically you can manually open it by typing `(http://localhost:3000)` in your browser's address bar.<br/>

  </p>

</details>

<details>
  <summary> 8. Which is the port number of React App? </summary>

  <p>
  
  The default port number for a react app when using the development server is 3000.  When you start the development server using the npm start command it will run your react app on (http://localhost:3000).

  </p>

</details>

<details>
  <summary> 9. What is the purpose of the "src" folder in a React App? </summary>

  <p>
  
The src folder in a react app stands for source and it serves as the main location for your application's source code. It contains the files and directories that define the structure and functionality of your react components. The "src" folder includes JavaScript files that contain react components and other files like stylesheets, images, and configuration files.

  </p>

</details>

<details>
  <summary> 10. What is the role of the "index.js" file in a React component folder? </summary>

  <p>
  
The index.js file is used to provide the entry point of the application.

  </p>

</details>

<details>
  <summary> 11. In react project you can modify "index.html" file? </summary>

  <p>
  
In a react project the "index.html" file can be modified but it is not recommended to directly modify this file. The "index.html" file is generated by the react build process and serves as the entry point for your React application.

  </p>

</details>

<details>
  <summary>12. What is state in React and how is it different from props? </summary>

  <p>

`State` refers to the internal data of the component that can change over time. It represents the current state of the component. The state is managed within the component itself and can be modified using the `setState()` method. When the state is updated react re-renders the component to reflect the changes.

`Props` stands for properties passing to the function. Props are read-only and cannot be modified by the component that receives them. They are used to pass data from one component to another component.

  </p>

</details>

<details>
  <summary>13. What is React Router? How is it used for routing in a React application?</summary>

  <p>
  
React Router is a popular routing library for React applications. It provides a set of components and utilities that enable routing in a single-page application "SPA".

It provides a way to handle routing and navigation in a single-page application (SPA) by allowing you to define routes to specific components.

Firstly you need to install React Router using a package manager like `npm`. You can install by using the command

```js
npm install react-router-dom
```

To set up routes in your React application, you need to `import` the necessary components from the `React Router Dom` library:

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

**BrowserRouter :** This component is used to track changes in the URL and update the UI accordingly. You can wrap your application with this component to enable routing. This component provides the routing functionality for your application.

**Routes :** This component is used to register valid routes for your application. You can define all your routes inside this component.

**Route :** This component is used to define a single route. You can specify the path of the route and the component to render for that path.

**Syntax**

```js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

**Example :**

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

In the above example, we have defined three routes: the root path `/` renders the Home component, the `/about` path renders the About component, and the `/contact` path renders the Contact component.

  </p>

</details>

<details>
  <summary> 14. What is JSX in React? </summary>

  <p>
  
JSX is a syntax extension for JavaScript that allows developers to write HTML-like code in their JavaScript files.<br/>
JSX syntax allows developers to write HTML-like code in their JavaScript files, making it easier to create complex user interfaces.<br/>
JSX is a strict version of HTML, as it has its own set of rules and syntax.<br/>
In JSX, every element must be closed, including self-closing tags, and only one parent element is allowed.<br/>
JSX also allows developers to embed JavaScript expressions inside curly braces. {} <br/>

**For example :**

```js
function App() {
  return (
    <>
      <h1>Hello {5 + 5}</h1>
    </>
  );
}
```

In the above example, code is written in JSX syntax and defines a function component. The name of that component is `App`.

This component returns an element containing an h1 heading element with the text Hello 10. The expression {5+5} is evaluated as 10 and is used as the content of the heading.

  </p>

</details>

<details>
  <summary> 15. How can you write comments in React?</summary>

  <p>
  
You can write comments using curly braces and the `/* */` syntax.

**For example :**

```js
{
  /* This is a comment in React */
}
```

You can also write comments using double slashes `//` but these comments will only work if they are on a single line.

**For example :**

```js
// This is a comment in React
```

  </p>

</details>

<details>
  <summary> 16. How can you pass data from a parent component to a child component in React?</summary>

  <p>

You can pass data from a parent component to a child component using `props`.

**For example :**

```js
// Parent component
function ParentComponent() {
  const data = "Hello from the parent component";

  return <ChildComponent data={data} />;
}

// Child component
function ChildComponent(props) {
  return <div>{props.data}</div>;
}
```

In this example, we are passing the `data` variable from the `ParentComponent` to the `ChildComponent` using the `data` prop. The `ChildComponent` then displays the `data` prop inside a `div` element.

  </p>

</details>

<details>
  <summary> 17. What is state in React and how is it different from props? </summary>

  <p>
  
  The difference bewtween state and props is :

State represents the internal data of a component. It is managed and controlled within the component itself. Props are data passed from a parent component to its child components.

State is mutable and can be updated using the setState function. Props are read-only and cannot be modified by the child components. They are immutable.

Changes to state trigger a re-render of the component and its children to reflect the updated data. Changes to props in the parent component will cause the child component to re-render with the new data.

State is local to the component and cannot be accessed or modified directly from other components. Props are useful for configuring and customizing child components based on the parent's data or behavior.

  </p>

</details>

<details>
  <summary> 18. How can you update the state of a component in React? </summary>

  <p>

You can update the state of a component by using the setState function provided by React.

**For example :**

```js
import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  // ... rest of the component code
}
```

In this example, the `state` variable count is initialized to `0` using the `useState` hook. The `setCount` function is used to update the value of count.

To update the state you call the setState function and pass in the new value or a function that returns the new value based on the previous state.

**For example :**

```js
setCount(count + 1);
```

In this example, the state variable count is initialized to `0` using the `useState` hook. The setCount function is used to update the value of count.

  </p>

</details>

<details>
  <summary>19.What is useState() in React? </summary>

  <p>

`UseState` is a hook in ReactJS that allows you to have state variables in functional components. The state variable is used to store and manage the data that changes within a component. The useState hook returns an array with two values. The first value is the state variable, and the second value is a function to update the state variable.

To use useState, you need to declare a state variable and set an initial value. You can declare a state variable using the `const` keyword. The first element of the array is the state variable, and the second element is a function to update the state.

**Syntax**

```js
const [count, setCount] = useState(0);
```

**For example :**

```js
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

In the above example, the `App` function is a functional component that uses the useState hook to declare a count state variable with an initial value of `0`. The `return` statement of the function returns the `h1` element with the current value of the `count` variable and a button that updates the count variable using the `setCount` function when clicked.

  </p>

</details>
 
<details>
  <summary>20. What is the use of &lt;link&gt; tag in React?</summary>

  <p>

To navigate between different pages, you can use the Link component from the React Router Dom library.

**For example:**

```js
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default About;
```

In the above example, we use the `Link` component to create links to the home and contact pages. When the user clicks on these links the URL will be updated and the corresponding component will be rendered.

  </p>

</details>

<details>
  <summary> 21. How do you handle forms in React?</summary>

  <p>

You can handle forms using the `useState` vaiable and the `onChange` event. We'll create a simple form component that allows the user to enter their name and email address and then display that information on the screen.

Firstly create a new component called Form. In this component we'll create a form with two input fields for the user's name and email address. We'll also create a button to submit the form.

**For example :**

```js
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
```

In the above example, we are using the `useState` hook to create two state variables name and email and two setter functions `setName` and `setEmail`. We are also creating a handleSubmit function that will be called when the user submits the form.

In the return statement, we're rendering a form with two input fields, one for the user's name and one for their email address. We're setting the value of each input to its corresponding state variable, and using the onChange event to update the state variable when the user types into the input.

Finally we are rendering a submit button that will call the `handleSubmit` function when clicked.

  </p>

</details>

<details>
  <summary> 22.What is state and how it different from props? </summary>

  <p>
 
Props are used to pass data from a parent component to a child component. Props are passed as attributes from the parent component when rendering the child component. State represents the internal data of a component. State is local to a component and can only be accessed and modified within that component.

`Props` are read-only within the receiving component and cannot be modified by the component itself. State is managed within the component and can be updated over time.

Props help achieve component composition and reusability by allowing data and behavior to be passed down the component hierarchy. State is mutable and can be changed using the setState method provided by React.

Changes to `props` in the parent component trigger re-renders of the child component, reflecting the updated data. Changes to the `state` trigger a re-render of the component and its child components.

  </p>

</details>

<details>
  <summary>  23. What are React hooks and how do they work? </summary>

  <p>

React hooks are functions that let you use state and other React features in functional components.

There are two main types of hooks:

1. `State hooks`: The state hook is a `useState`. That add state to functional components.
2. `Effect hooks`: The effect hook is a `useEffect`. That used to perform side effects in functional components.

For example of using the useState hook to add state to a functional component:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In the above example, we are using the useState hook to add a count state variable to our component. We are initializing the count to `0` using the useState function and we are defining an increment function that updates the count state using the `setCount` function.

We are then rendering the count state variable and a button that calls the increment function when clicked.

  </p>

</details>

<details>
  <summary>24.What are props in React?   </summary>
  <p>

`props` is a shorthand for properties. props means Passing Parameters to component. It refers to a mechanism for passing data from one component to another in a unidirectional flow. A component can receive data as props from its parent component and use it to render its content. Props are read-only, meaning that a component cannot modify the props it receives from its parent. Props help to create reusable and modular components in React.

**For example :**

File name: App.js

```js
import "./App.css";

import Chocolate from "./Chocolate";

function App() {
  return (
    <>
      <h1 className="app-header">Chocolate App 💙</h1>

      <Chocolate title="Kharbuj" description="Khabuj is fruit" />
      <Chocolate title="Dairy Milk" description="dairy milk is sweet" />
      <Chocolate title="Perk" description="perk is chocolate" />
    </>
  );
}

export default App;
```

File Name : Chocolate.js

```js
import "./Chocolate.css";

function Chocolate({ title, description }) {
  return (
    <div className="chocolate-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Chocolate;
```

In the above example, we can create a `Chocolate` component in `App.js` file. We can pass the paramaters in the `Chocolate.js` file. `title` and `description` is paramters that passing to Chocolate component.

  </p>

</details>

<details>
  <summary>25. What is the purpose of React Router? </summary>

  <p>

The purpose of React Router is to enable client-side routing in React applications means that the routing happens within the browser without requiring a full page refresh. It allows you to define routes, manage navigation, and render different components based on the current URL.

  </p>

</details>

<details>
  <summary>26. What are the different ways to style a React component?</summary>

  <p>

There are different ways to style react component.

1. **`inline` :** You can use the style attribute to add inline styles to your components.

**For example :**

```js
function Card() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "#ccc",
          border: "solid black 2px",
          padding: "5px",
          borderRadius: "10px",
          width: "400px",
          textAlign: "center",
          marginLeft: "10px",
        }}
      >
        Awesome Card
      </h1>
      <h3
        style={{
          border: "solid black 2px",
          padding: "5px",
          width: "400px",
          borderRadius: "10px",
          backgroundColor: "purple",
          color: "white",
          textAlign: "center",
          marginLeft: "10px",
        }}
      >
        Card Description
      </h3>
    </div>
  );
}
export default Card;
```

2. **`external CSS file` :** You can create a separate CSS file and import it into your component using the import statement.

**For example :**

```js
import "./card.css";
function Card() {
  return (
    <div>
      <h1 className="card1">Awesome Card</h1>
      <h3 className="card2">Card Description</h3>
    </div>
  );
}
export default Card;
```

File name: card.css

```css
card {
  background-color: coral;
  border-radius: 15px;
  border: solid 2px;
  width: 300px;
  padding: 10px;
}
```

3. **`document level css`:** To apply document-level CSS in react you can include a regular CSS file in your project's `index.html` file. This CSS file will be applied globally to all components within your React application.

**For example :**

```js
const cardStyle = {
  backgroundColor: "pink",
  border: "1px solid gray",
  width: "200px",
  margin: "10px",
  padding: "10px",
  borderRadius: "20px",
};

function Card() {
  return (
    <div style={cardStyle}>
      <h1>Awesome Card</h1>
      <h3>Card Description</h3>
    </div>
  );
}
```

  </p>

</details>

<details>
  <summary> 27. How can you handle events in React? </summary>

  <p>

You handle events by attaching event handlers to JSX elements. First define a function that will handle the event. This function will be called when the event occurs. You can define this function within the component where you want to handle the event. In the event handler function you can access event-related information through the event object such as the target element, the value of an input field or the coordinates of a mouse click. You can perform any necessary actions within the event handler such as updating state, making API calls, or manipulating the DOM.

**For example :**

```js
import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

In the above example, the `handleClick` function is called when the button is clicked. It updates the `count` state by incrementing it using the `setCount` function provided by the useState hook. The updated count is then rendered in the component.

You can handle different types of events such as onClick, onChange, onSubmit, onKeyDown, onMouseOver. The specific event you need to handle depends on the element.

  </p>

</details>

<details>
  <summary> 28. What is the purpose of useEffect() in React?</summary>

  <p>

The purpose of the useEffect hook in React is to perform side effects in functional components. Side effects refer to tasks such as data fetching, subscriptions, manipulating the DOM or any action that needs to be performed outside the normal component rendering process.

**For example :**

```js
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  const fetchData = () => {
    setData(/* fetched data */);
  };

  return <div>{/* Render component */}</div>;
}
```

In the above example, the useEffect hook is used to fetch data from an API. The effect runs only once after the initial render because the dependency array is empty. If a variable is added to the dependency array (eg. [userId]), the effect will run whenever that variable changes.

  </p>

</details>

<details>
  <summary>29. What is an arrow function and how is it used in React? </summary>

  <p>

Arrow function is used in React for its simplicity and readability. Arrow functions can be used to define functional components in React. These components are stateless and do not have their own instance or lifecycle methods.

**For example :**

```js
const MyComponent = () => {
  return <div>Hello World</div>;
};
```

In the above example, the arrow function defines a functional component called `MyComponent`. The function body contains the JSX code that defines the component's UI.

Arrow functions are used for defining `event handlers` in react components. When an event occurs the arrow function is executed, allowing you to perform specific actions.

**For example :**

```js
function MyComponent() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

In the above example, the arrow function `handleClick` is used as an event handler for the button's onClick event. When the button is clicked the arrow function is executed and the message is display to the console.

  </p>

</details>

<details>
  <summary>30. What are react fragments?  </summary>

  <p>

Fragments provide a way to group multiple elements or components together without introducing an additional wrapping element. Fragments improve the readability of the code. Fragments solve this problem by allowing you to group elements without creating an extra DOM node. Fragments eliminate the need for that extra wrapper making the code cleaner.

**For example :**

```js
import React from "react";

function MyComponent() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>This is a paragraph.</p>
    </React.Fragment>
  );
}
```

In the above example, the `<React.Fragment>` is used to wrap the `<h1>` and `<p>` elements. It groups them together without introducing any extra DOM nodes. The code is more readable and doesn't create unnecessary elements in the rendered output.

  </p>

</details>

<details>
  <summary> 31. How can you create a component in React? </summary>

  <p>

You can create a component by defining a JavaScript function. Function components are simpler and more lightweight than class components. They are defined as regular JavaScript functions that return JSX code representing the component's UI.

**For example :**

```js
import React from "react";

function MyComponent() {
  return <div>Hello World</div>;
}
```

In the above example, the MyComponent function is defined as a function component. It returns a JSX expression representing the component's UI in this case a `<div>` element with the text "Hello World".

  </p>

</details>

<details>
  <summary>32. What is form handling in React? </summary>

  <p>
  
Form handling in react is a process of managing user input in HTML forms using React components. In traditional HTML forms you would typically use JavaScript to handle form submissions and validation. However in react you can use state and props to manage form data and update the UI in response to user input.

**For example :**

```js
import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

In the above example, we are defining a functional component called `MyForm` that uses the `useState` hook to manage the form data. We're defining two state variables called `name` and `email` and two functions called `setName` and `setEmail` that allow us to update the state when the user types into the input fields.

We are also defining a `handleSubmit` function that logs the form data to the console when the user submits the form. We are passing this function to the `onSubmit` prop of the form element to handle the form submission.

Finally we are rendering the form with two input fields for name and email and submit button. We are using the `value` prop to bind the input fields to the state variables and the `onChange` prop to update the state when the user types into the input fields.

  </p>

</details>

<details>
  <summary>33. Why use LocalStorage?</summary>

  <p>

LocalStorage is useful when you want to store small amounts of data (typically up to 5MB) that should be available across different sessions or visits to your web application. It can be used to save user preferences, settings, or any other data that you want to persist locally.

LocalStorage allows you to store data on the user's device, providing persistence even when the browser is closed or the device is restarted. This makes it suitable for retaining user preferences, session information, or cached data.

  </p>

</details>

<details>
  <summary>34. What is component in react?</summary>

  <p>

Component is a reusable piece of code that defines the structure and behavior of a part of a user interface. A component is typically written as a JavaScript function or class that returns a JSX element or a tree of elements. Each component has its own responsibilities, making the code easier to understand, maintain, and test.Components are the building blocks of a React application. They allow you to break down the user interface into smaller, reusable pieces of code.

**For example:**

```js
import React from 'react';

function Button({
 return <button>This is button</button>;
});
```

In the above example, the Button component is defined as a function component that receives label. It renders a `<button>` element.

  </p>

</details>

<details>
  <summary>35. What is the use of render() in React?</summary>

<p>
  
The render() method is a required method in class components. It is responsible for rendering the component's UI and determining what should be displayed on the screen.

Explanation Of the purpose :

The primary purpose of the `render()` method is to define the structure and content of the component's UI. Within the `render()` method, you return JSX (JavaScript XML) code that describes how the component should be rendered.

JSX is a syntax extension of JavaScript that allows you to write HTML-like code within JavaScript. In the `render()` method, you use JSX to define the component's UI structure, including elements, components, and their attributes

When the component's state or props change, React calls the `render()` method to update the UI and ensure that it reflects the updated data.

**For example:**

```js
import React from "react";

class MyComponent {
  render() {
    return <div>Hello React</div>;
  }
}
```

In the above example, the `render()` method returns a JSX expression that represents the component's UI. It returns a `<div>` element containing the text "Hello React". This is the rendered output that will be displayed on the screen when the component is rendered.

  </p>

</details>

<details>
  <summary> 36. How can you access form data in React? </summary>

  <p>

You can access form data by using controlled components. Controlled components are form elements whose values are controlled by React's state. You store the form data in state variables and update them when the user interacts with the form elements.

**For example:**

```js
import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
}
```

In the above example, name and email are state variables initialized with empty strings.

To access the form data, you can directly use the state variables `name` and `email` wherever you need them such as in form submission handling or API requests.

**For example:**

```js
const handleSubmit = (event) => {
  console.log("Name:", name);
  console.log("Email:", email);
};
```

In the above example, the `handleSubmit` function returns the values of name and email to the console. You can perform further operations with the form data such as validation or sending it to an API.

  </p>

</details>

<details>
  <summary> 37. What is LocalStorage? </summary>

  <p>
  
LocalStorage is a feature provided by web browsers that allows web applications to store data locally on a user's device. It provides a way to save information that persists even when the user closes or refreshes the web page.

It is a way to store data on the client-side that persists even after the user closes their browser or navigates away from your website.

LocalStorage API provides a simple set of methods to interact with the stored data. You can use methods like setItem(), getItem(), removeItem(), and clear() to store, retrieve, remove, or clear data in LocalStorage.

**For example:**

```js
// Storing data in LocalStorage
localStorage.setItem("username", "Harshda");

// Retrieving data from LocalStorage
const username = localStorage.getItem("username");
console.log(username); // Output: "Harshda"
```

In the above example, the `setItem()` method is used to store the value "Harshda" with the key "username" in LocalStorage. The `getItem()` method is used to retrieve the value associated with the "username" key.

  </p>

</details>

<details>
  <summary>38. How to Use LocalStorage?  </summary>

  <p>

1. **Storing Data :**

To store data in LocalStorage, you can use the localStorage.setItem(key, value) method. It takes two parameters: the key, which is a string that represents the name of the data, and the value, which can be a string, number, or even an object (as long as it is converted to a string).

**For example:**

```js
localStorage.setItem("username", "Harshda");
```

2. **Retrieving Data :**

To retrieve data from LocalStorage, you can use the localStorage.getItem(key) method. It takes the key as a parameter and returns the corresponding value.

**For example:**

```js
const username = localStorage.getItem("username");
console.log(username);
```

3. **Removing Data:**

To remove a specific item from LocalStorage, you can use the localStorage.removeItem(key) method. It takes the key of the item you want to remove as a parameter.

**For example :**

```js
localStorage.removeItem("username");
const removedUsername = localStorage.getItem("username");
console.log(removedUsername);
```

4. **Clearing All Data :**

If you want to remove all the data stored in LocalStorage, you can use the localStorage.clear() method. Be cautious when using this, as it will remove all items and cannot be undone.

**For example :**

```js
localStorage.clear();
```

  </p>

</details>

<details>
  <summary> 39. How do you make an API request in React? </summary>

  <p>

You can make API requests using various methods such as the Fetch API, Axios, or other HTTP client libraries.

**For example :**

```js
import React, { useEffect, useState } from "react";

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) {
          throw new Error("Request failed");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
```

In the above example, the `useEffect()` hook is used to make an API request when the component mounts. Inside the effect the fetchData function is defined as an `asynchronous` function. It uses the Fetch API to send a GET request to the specified API endpoint.

Once the response is received, it is checked for any errors. If the response is successful (HTTP status code 200-299), the JSON data is extracted using `response.json()` and stored in the component's state using the setData function.

If there's an error during the API request or JSON parsing, the error is caught and logged to the console.

In the component's return statement, the fetched data is rendered conditionally. If the data is available, it is mapped over to create a list of items. Otherwise, a loading message is displayed.

  </p>

</details>

<details>
  <summary>40. Can web browsers read JSX directly?</summary>

  <p>
  
No, web browsers cannot read JSX directly. JSX is a syntax extension of JavaScript that allows you to write HTML-like code within JavaScript. It is not a valid JavaScript syntax understood by web browsers.

To make JSX code readable by web browsers it needs to be transpiled or transformed into regular JavaScript.

During the build process of a React application the JSX code is transformed into JavaScript code using Babel. The resulting JavaScript code contains regular function calls and object creations that web browsers can understand and render on the screen.

**For example :**

JSX is a syntactic sugar that makes it easier to write and understand React components. It is not directly readable by web browsers. Instead it needs to be transfer into regular JavaScript code before being executed in a browser. Tools like Babel perform this transformation, allowing web browsers to understand and render React components properly.

  </p>

</details>

<details>
  <summary> 41. How do you create an event in React?</summary>

  <p>

You can create and handle events using the same syntax as in regular HTML. You attach event handlers to elements using JSX syntax, and these event handlers are defined as functions within your React components.

**For example :**

```js
import React from "react";

function MyComponent() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

In the above example, an onClick event is created for a `<button>` element. The handleClick function is defined as the event handler. When the button is clicked, the handleClick function is executed, and it logs "Button clicked!" to the console.

  </p>

</details>

<details>
  <summary>42. What is an event in React? </summary>

  <p>

An `event` is an action or occurrence that happens within a component or its child components, such as a user clicking a button, submitting a form, or hovering over an element. Events in React are similar to events in HTML but they are typically handled using JavaScript functions defined within React components.

React components can define and handle events allowing them to respond to user interactions or other occurrences within the application.

React supports different types of events, including common events like onClick, onChange, onSubmit, onMouseOver.

To handle events, React components define event handler functions. These functions are executed when the corresponding event occurs. Event handlers are typically defined within the component's code and attached to elements using JSX syntax.

  </p>

</details>

<details>
  <summary>43.  How can you embed two or more components into one? </summary>

  <p>
  
To embed two or more components into one in React, you can simply include them within the JSX code of a parent component. This allows you to compose the desired UI by combining multiple components together.

When you include a component as a child element within another component's JSX, it establishes a parent-child relationship between the components. The parent component can pass props to the child component and control its behavior.

**For example :**

```js
import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function ParentComponent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <ComponentA />
      <ComponentB />
    </div>
  );
}
```

In the above example, the `ParentComponent` is composed of two child components: `ComponentA`and `ComponentB`. When ParentComponent is rendered it includes the JSX code of both child components within its own JSX code.

  </p>

</details>

<details>
  <summary> 44. What are the Router components of React Router?</summary>

  <p>
  
The main router component is called "BrowserRouter". It is used to handle the routing logic and allows you to define different routes in your application.

**BrowserRouter :** This component uses HTML5 history API to handle routing. It provides a way to render different components based on the current URL. It is typically used for applications with a server-side backend or for deployments that support HTML5 history.

  </p>

</details>

<details>
  <summary> 45. Can you pass an initial value to useState dynamically? </summary>

  <p>

No, in react the initial value for the `useState` hook cannot be passed dynamically. The useState hook is typically used to declare a state variable and its initial value and this initial value is set only once when the component is rendered for the first time.

The `useState` hook follows the rules of Hooks in react which state that hooks should be called at the top level of a functional component and not within any conditional statements or loops. This means that the initial value passed to useState must be a constant or a fixed value and it cannot be determined dynamically based on runtime conditions.

**For example :**

```js
import React, { useState, useEffect } from "react";

const MyComponent = ({ dynamicData }) => {
  const [myState, setMyState] = useState(null);

  useEffect(() => {
    // Set the initial value based on dynamic data
    setMyState(dynamicData);
  }, [dynamicData]);

  // Rest of the component code

  return <div>{/* Render your component with the updated state */}</div>;
};
```

In the above example, the `myState` variable is initially set to null. when the dynamicData `prop` changes the effect hook is triggered and updates the state with the new dynamic value.

  </p>

</details>

<details>
  <summary>46. What are the advantages react?</summary>

  <p>

1. React is used for code reusability, maintainability, and makes it easier to manage complex UI structures.
2. React calculates the minimum required updates and performs them in an optimized manner, resulting in improved performance and responsiveness.
3. React follows a unidirectional data flow, also known as one-way data binding. This means that data in a React application flows in a single direction, from parent components to child components.
4. React uses a declarative syntax, allowing developers to describe how the UI should look based on the current application state. This makes the code more predictable, easier to read, and less prone to bugs compared to manually manipulating the DOM.
5. React provides developers with a wealth of resources, ready-made components, and solutions to common problems, enabling faster development and reducing the learning curve.

  </p>

</details>

<details>
  <summary>47. How do you programmatically navigate using React router? </summary>

<p>

You can programmatically navigate to a different route using the history object provided by the `react-router-dom` package.

**For example :**

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

In the above example, we have three routes: `/`, `/about` and `/contact`. For each route we specify the path and the component to render using the element prop.

  </p>

</details>

<details>
  <summary>  48. What is difference between react and react-router-dom?</summary>

  <p>

`React` is a JavaScript library for building user interfaces. A `react-router-dom` routing library specifically designed for react applications.

`React-router-dom` allows developers to create reusable UI components and manage component state efficiently.`React` provides components and utilities for handling routing and navigation in React applications.<br/>

`React` allows developers to create reusable UI components and manage component state efficiently. `React` doesn't directly handle routing or navigation. The `react-router-dom` supports features like nested routing, parameterized routes, query parameters, and programmatic navigation.

`React-router-dom` the core library responsible for creating and managing components, state, and rendering in React applications. `React-router-dom` works alongside react integrating smoothly and enhancing the functionality of React applications.
`React` is the core library responsible for creating and managing components, state, and rendering in React applications.

  </p>

</details>

<details>
  <summary> 49. What are the common folder structures for React? </summary>

  <p>

`node_modules` This folder contains all the dependencies of the project. It is not recommended to modify the contents of this folder.

`package.json` package.json file contains the dependencies of the project. It is not recommended to modify the contents of this file.

`package-lock.json` package-lock.json file contains the exact version of the dependencies of the project. It is not recommended to modify the contents of this file.

`Public` This folder contains the index.html file which is the entry point of the application. It is not recommended to modify the contents of this folder.

`robots.txt` file is used to tell search engines which pages or files the crawler can or can't request from your site.

`manifest.json` file is used to provide metadata associated with the web application.

`logo192.png` file is used to provide the logo of the web application.

`logo512.png` file is used to provide the logo of the web application.

`favicon.ico` file is used to provide the favicon of the web application.

`index.html` file is used to provide the entry point of the web application.

``.gitignore` file is used to tell git which files or folders to ignore in a project.

`src` is the source folder of the application. It contains all the files related to the application.

`index.js` file is used to provide the entry point of the application.

`index.css` file is used to provide the styles of the entry point of the application.

`App.js` file is used to provide the root component of the application.

`App.css` file is used to provide the styles of the root component of the application.

`App.test.js` file is used to provide the test cases of the root component of the application.

  </p>

</details>

<details>
  <summary>50. What is the use of "gitignore" file? </summary>

  <p>


`.gitignore` file is used to tell git which files or folders to ignore in a project.
The `gitignore` file is used to specify which files and directories should be ignored by Git version control system. When working on a project, there are certain files that you may not want to track or include in your Git repository. The `gitignore` file allows you to explicitly declare these files and directories, preventing them from being committed or staged.

  </p>

</details>
