---
title: Routing in React using react-router-dom
description: "Routing in React using react-router-dom"
hide_table_of_contents: true
---

## react-router-dom

`react-router-dom` library in a React project. The `react-router-dom` library provides a way to handle client-side routing in a React application. It allows us to navigate between different pages in our application without reloading the entire page.

## Installation

To install React Router Dom, you can use `npm`, which is a package manager for Node.js. Run the following command in your terminal:

`npm install react-router-dom`

## Setting up Routes

To set up routes in your React application, you need to import the necessary components from the React Router Dom library:

`import { BrowserRouter, Routes, Route } from "react-router-dom";`

`BrowserRouter` : This component is used to track changes in the URL and update the UI accordingly. You can wrap your application with this component to enable routing.

`Routes` : This component is used to register valid routes for your application. You can define all your routes inside this component.

`Route`: This component is used to define a single route. You can specify the path of the route and the component to render for that path.

Here is an example of how you can set up routes:

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

In this example, we have three routes: `/`, `/about`, and `/contact`. For each route, we specify the path and the component to render using the element prop.

## Link

To navigate between different pages, you can use the Link component from the React Router Dom library. Here is an example of how to use it:

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

In this example, we use the `Link` component to create links to the `home` and `contact` pages. When the user clicks on these links, the URL will be updated, and the corresponding component will be rendered.

## Conclusion

React Router Dom is a powerful library that provides a routing solution for React applications. In this guide, we covered the basic steps to install and use React Router Dom. By following these steps, you can enable routing in your React application and create a smooth user experience.