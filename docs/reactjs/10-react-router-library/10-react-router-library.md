---
title: Routing with react-router-dom
description: "Routing with react-router-dom"
hide_table_of_contents: true
---

## Introduction to react-router-dom

In the previous chapter, we implemented basic routing in React using `window.location.pathname`. In this chapter, we'll explore how to use the `react-router-dom` library for more advanced routing capabilities.

## Installing react-router-dom

To get started with `react-router-dom`, you'll need to install it using npm:

```bash
npm install react-router-dom
```

## Setting Up Routing

The react-router-dom library provides a `createBrowserRouter`, `RouterProvider` components that enables client-side routing. Here's how you can set it up:

### 1. Import Required Dependencies

In your src/index.js file, import the necessary dependencies:

```jsx title="src/index.js" showLineNumbers
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
```

### 2. Create a Router

Next, create a router instance using the `createBrowserRouter` function and define the routes for your application:

```jsx title="src/index.js" showLineNumbersx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
```

### 3. Render the Router Provider

Finally, render the `RouterProvider` with your router instance to enable routing in your application:

```jsx title="src/index.js" showLineNumbers
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
```

Hurrah! Now your React application is ready to handle client-side routing.

Wait, wait wait! We haven't actually implemented any routing yet. Let's do that next.

## Navigating Between Routes

To navigate between routes in your application, you can use the `Link` component provided by `react-router-dom`. Here's an example of how to create a navigation bar with links to different routes:

```jsx title="src/components/Navbar/Navbar.jsx" showLineNumbers
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
```

> You might have noticed that we used `Link` instead of `a` tags. Here are a few things to note about this 👇

- `Link` is a special component provided by `react-router-dom` that allows you to navigate between routes without reloading the page.

- We provide the `to` prop to the `Link` component to specify the route we want to navigate to.

- If you use `a` tags, the page will reload every time you click on a link.

### Hurrah! You've successfully implemented routing in your React application using `react-router-dom` 🎉

<img src="https://media.tenor.com/BGsAhrY5FMMAAAAd/great-job-yes.gif" alt="react-router-dom" width="30%" />
