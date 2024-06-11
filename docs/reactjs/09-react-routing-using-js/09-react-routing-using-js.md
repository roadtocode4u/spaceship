---
title: React Routing Using JS
description: "React Routing Using JS"
hide_table_of_contents: true
---

## What is Routing?

In React, routing is used to switch between different components or views.

## Implementing Basic Routing

### There are two ways to implement Routing using core JavaScript.

1. Using if else .
2. Using switch case statement .

#### 1 Using if else

## The `window.location.pathname` Property

The `window.location.pathname` is a property of the `window` object that contains the current URL path. This path is everything in the URL after the domain name (e.g., `/about`, `/contact`, or `/`). Here's how you can use it:

```javascript
const path = window.location.pathname;
```

Now, the `path` variable will hold the current URL path as a string.

The code example you provided demonstrates how to implement basic routing in React using `window.location.pathname`. Let's break it down step by step:

### Using if else conditionals.

```jsx title="src/index.js" showLineNumbers
import ReactDOM from "react-dom/client";

import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";

function App() {
  const path = window.location.pathname;

  if (path == "/") {
    root.render(<Home />);
  } else if (path == "/contact") {
    root.render(<Contact />);
  } else if (path == "/about") {
    root.render(<About />);
  } else {
    root.render(<h1>404 Not Found </h1>);
  }
}
```

### Using switch case statement.

```jsx title="src/index.js" showLineNumbers
import ReactDOM from "react-dom/client";

import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";

function App() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
      return <Home />;
    case "/about":
      return <About />;
    case "/contact":
      return <Contact />;
    default:
      return <h1>404 Page Not Found</h1>;
  }
}
```

1. Import necessary libraries and components.
2. Define a `path` variable to store the current URL path using `window.location.pathname`.
3. Use a `switch` statement to conditionally render different components based on the `path`.

- If the path is `/`, it renders the `Home` component.
- If the path is `/about`, it renders the `About` component.
- If the path is `/contact`, it renders the `Contact` component.
- If none of the above cases match, it renders an error message.

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {" "}
    <App />{" "}
  </>
);
```

Finally, the `ReactDOM.createRoot` method is used to create a root for rendering, and `root.render` is used to render the `App` component into the HTML element with the ID `root`.

Using the above method, you can implement basic routing in React.

:::info

For production applications, it is recommended to use a routing library like [React Router](https://reactrouter.com/) instead of implementing routing manually. We will cover React Router in the next section.

:::
