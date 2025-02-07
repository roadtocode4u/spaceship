---
title: Routing with react-router
description: "Routing with react-router"
hide_table_of_contents: true
---

## Introduction to react-router

In the previous chapter, we implemented basic routing in React using `window.location.pathname`. In this chapter, we'll explore how to use the `react-router` library for more advanced routing capabilities.

## Installing react-router

To get started with `react-router`, you'll need to install it using npm:

```bash
npm install react-router
```

## Setting Up Routing

The react-router library provides a `BrowserRouter`, `Routes` and `Route` components that enables client-side routing. Here's how you can set it up:

### 1. Import Required Dependencies

In your src/main.jsx file, import the necessary dependencies:

```jsx title="src/main.jsx" showLineNumbers
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
```

### 2. Setting up `BrowserRouter` component

- **BrowserRouter**: The `BrowserRouter` component is used to wrap your application and enable client-side routing.

- **Routes**: The `Routes` component is used to define the routes for your application.

- **Route**: The `Route` component is used to specify a route and its corresponding component.

```jsx title="src/main.jsx"
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
```

Hurray! Now your React application is ready to handle client-side routing.

Wait, wait wait! We haven't actually implemented any routing yet. Let's do that next.

## Navigating Between Routes

:::info
Avoid using the `<a>` tag in React because its default behavior reloads the entire page when clicked. Instead, use the `Link` component, which allows navigation without reloading the page, providing a smoother user experience.
:::

The `Link` component is provided by `react-router-dom`. Here's an example of how to create a navigation bar with links to different routes:

```jsx title="src/components/Navbar/Navbar.jsx" showLineNumbers
import { Link } from "react-router";

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

### Hurray! You've successfully implemented routing in your React application using `react-router` 🎉

<img src="https://media.tenor.com/BGsAhrY5FMMAAAAd/great-job-yes.gif" alt="react-router-dom" width="30%" />

<br /> <br />

:::caution
`react-router-dom` is a npm package and syntax might change over time. Make sure to check the [official documentation](https://reactrouter.com/home) for the latest updates.
:::
