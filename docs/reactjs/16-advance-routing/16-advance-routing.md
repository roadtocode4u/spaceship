---
title: Advanced Routing
description: "Advanced Routing"
hide_table_of_contents: true
---

## Installing react-router

To get started with `react-router`, you'll need to install it using npm:

```bash
npm install react-router
```

## Setting Up Routing

The react-router-dom library provides a `BrowserRouter`, `Routes` and `Route` components that enables client-side routing. Here's how you can set it up:

### 1. Import Required Dependencies

In your src/main.jsx file, import the necessary dependencies:

```jsx title="src/main.jsx" showLineNumbers
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./views/Blogs/Blogs";
import Contact from "./views/Contact/Contact";
import About from "./views/About/About";
```

### 2. Setting-Up BrowserRouter component.

- **BrowserRouter**: The `BrowserRouter` component is used to wrap your application and enable client-side routing.

- **Routes**: The `Routes` component is used to define the routes for your application.

- **Route**: Each `<Route/>` defines a path (path attribute) and a corresponding component (element attribute) to render.

```jsx title="src/main.jsx"
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
```

Hurray! Now your React application is ready to handle client-side routing.

## Now Let's learn how advance routing works.

1. Create a folder into src called `data` and create a file called `blogs-data.json` in it.

2. Add the following data to the `blogs-data.json` file:

```json title="src/configs/blogs-data.json" showLineNumbers="true"
[
  {
    "id": 1,
    "title": "Embrace the Present Moment",
    "content": " Mindfulness helps you stay grounded in the present, reducing stress and increasing focus. A few minutes of being fully aware each day can transform your life.",
    "  author": "Abhimanyu ",
    "date": "2023-08-01"
  },

  {
    "id": 2,
    "title": "Embrace the Present Moment",
    "content": " Mindfulness helps you stay grounded in the present, reducing stress and increasing focus. A few minutes of being fully aware each day can transform your life.",
    "author": "Abhimanyu ",
    "date": "2023-02-01"
  },

  {
    "id": 3,
    "title": "The Power of Mindfulness",
    "content": "Simple moments of mindfulness can help you reclaim control over stress. Start small, be present, and experience more peace in your day.",
    "author": "Abhimanyu ",
    "date": "2023-06-01"
  },

  {
    "id": 4,
    "title": "Slow Down to Find Peace",
    "content": " Mindfulness helps you stay grounded in the present, reducing stress and increasing focus. A few minutes of being fully aware each day can transform your life.",
    "author": "Abhimanyu ",
    "date": "2022-04-01"
  }
]
```

3. Create a card component called `BlogCards` in the `components` folder.

```jsx title="src/components/BlogCard/BlogCards.jsx" showLineNumbers="true"
function BlogCards({ id, title, content, author, date }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content.length > 100 ? content.slice(0, 100) + "..." : content}</p>
      <span>{author}</span>
      <span>{date}</span>
    </div>
  );
}

export default BlogCards;
```

:::info
Provide css `(styling)` according to your choice.
:::

## Output

4. Create a page called `Blogs` in the `views` folder and map the `BlogCard` component to each blog post in the `blogs-data.json` file.

```jsx title="src/views/Blogs/Blogs.jsx" showLineNumbers="true"
import BlogCards from "../components/BlogCards";
import data from "../data/data.json";
function Blogs() {
  return data.map((data, index) => {
    const { id, title, content, author, date } = data;
    return (
      <BlogCards
        key={index}
        id={id}
        title={title}
        content={content}
        author={author}
        date={date}
      />
    );
  });
}

export default Blogs;
```

<img src="/react/16/output1.png" alt="output1.png" width="600px"/>

5. Create a page called `Read` in the `views` folder, which displays the full content of a blog post.

```jsx title="src/views/ReadPost/Read.jsx" showLineNumbers="true"
function Read() {
  return (
    <div>
      <h1></h1>
      <p>content</p>
      <span>author</span>
      <span>date</span>
    </div>
  );
}

export default Read;
```

:::info
Provide css `(styling)` according to your choice.
:::

6. Now define another route into main.jsx file for the `Read` page.

```jsx title="src/main.jsx" showLineNumbers="true"
import Read from "./views/Read/Read";

// rest of your code from main.jsx

<Route path="/read/:id" element={<Read />} />;
```

- The colon `:` before id indicates that id is a dynamic parameter.

:::info
Don't forgot to import the `Read` page in `main.jsx` file.
:::

7. Now let's back to the BlogCards component and wrap the `BlogCards` component with the `Link` component. Whenever the `BlogCards` component is clicked, the user will be redirected to the `Read` page.

```jsx title="src/components/BlogCard/BlogCards.jsx" showLineNumbers="true"
import { Link } from "react-router";

function BlogCards({ id, title, content, author, date }) {
  return (
    <Link to={`/read/${id}`}>
      <div className=" bg-gray-300 text-zinc-800 m-2 p-2 ">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{content.length > 100 ? content.slice(0, 100) + "..." : content}</p>
        <span>Published on: {date}</span>
        <span className="text-sm mx-2">By: {author}</span>
      </div>
    </Link>
  );
}

export default BlogCards;
```

8. Now let's go back to the read page and make it dynamic.

```jsx title="src/views/Read/Read.jsx" showLineNumbers="true"
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import blogJsonData from "../data/data.json";
function Read() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({
    id: null,
    title: "",
    content: "",
    author: "",
    date: "",
  });

  useEffect(() => {
    const blog = blogJsonData.find((blog) => blog.id == id);
    setBlogData(blog);
  }, [id]);

  return (
    <div>
      <h1>{blogData.title}</h1>

      <p>{blogData.content}</p>

      <span>{blogData.author}</span>

      <span>{blogData.date}</span>
    </div>
  );
}

export default Read;
```

- **useParams**: This hook (provided by React Router) is used to access the dynamic parameters from the URL.

- **_const { id } = useParams()_** The component extracts the dynamic `id` from the `URL`.

```useEffect(() => {
  const blog = blogJsonData.find((blog) => blog.id == id);
  setBlogData(blog);
}, [id]);
```

- As above you can see Whenever dependencies `id` will be changed then the `useEffect` will be called. change the state of `blogData` with the `id` of the blog post.

- `find` method is used to find the blog post with the matching `id`.It is actually extracting the id from the url and comparing it with the id of the blog post and returning the blog post with the matching id.
