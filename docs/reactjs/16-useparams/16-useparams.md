---
title: Advanced Routing
description: "Advanced Routing"
hide_table_of_contents: true
---
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

import Home from "./views/Home/Home";
import Posts from "./views/Posts/Posts";
import ReadPost from "./views/ReadPost/ReadPost";

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
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/post/read/:id",
    element: <ReadPost />,
  },
  {
    path: "*",
    element: <h1> 404 Not Found</h1>,
  }
]);
```

### 3. Render the Router Provider

Finally, render the `RouterProvider` with your router instance to enable routing in your application:

```jsx title="src/index.js" showLineNumbers
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
```

Hurray! Now your React application is ready to handle client-side routing.

### Viewing  Posts

1. Visit the homepage of the application at `http://localhost:3000`.

2. You will see a list of blog post previews, each displaying the **title**, **author**, and  **description**.

3. Click on the `"Read More"` link of a post to view the full post content.

### Reading Individual Posts

1. Click on a post title or the `"Read More"` link on the homepage.

2. You will be taken to a new page displaying the full content of the selected blog post, including the `title`, `author`, `description`, `content`, and the `publication date`.

## Folder Structure

The project has the following folder structure:

- `src/` - Contains the source code for the application.
  - `configs/` - Contains the JSON file with blog post data.
  - `components/` - Contains React components, including `PreviewPostCard`.
  - `views/` - Contains React views, including `Posts` and `ReadPost`.

**Sample Blog Post Data**

```json title="src/configs/blogs-data.json" showLineNumbers="true"
[
    {
        "id":1,
        "title": "How to create first web page",
        "description":"This is my first blog",
        "content": "I am going to create my first web page",
        "author":"Anand",
        "publishedDate":"2017-12-12"
    },
    {
        "id":2,
        "title": "How to create second web page",
        "description":"This is my second blog",
        "content": "I am going to create my second web page",
        "author":"Suraj",
        "publishedDate":"2017-11-12"
    },
    {
        "id":3,
        "title": "How to create third web page",
        "description":"This is my third blog",
        "content": "I am going to create my third web page",
        "author":"Vaishnavi",
        "publishedDate":"2017-10-12"
    },
    {
        "id":4,
        "title": "How to create fourth web page",
        "description":"This is my fourth blog",
        "content": "I am going to create my fourth web page",
        "author":"Pinki",
        "publishedDate":"2017-09-12"
    }
]
```

```jsx title="src/views/PreviewPostCard/PreviewPostCard.js" showLineNumbers="true"
import React from 'react';
import { Link } from 'react-router-dom';
import './PreviewPostCard.css';

function PreviewPostCard({id, title, author, description}){
    return(
        <>
        <div className='preview-post-card'>
        <h2>{title}</h2>
        <span>By{author}</span>
        <p>{description}</p>
        <Link to={`/post/read/${id}`}>Read More</Link>
        </div>
        </>
    )
}
export default PreviewPostCard;
```

```css title="src/views/PreviewPostCard/PreviewPostCard.css" showLineNumbers="true"
 .preview-post-card{
    padding: 10px;
    border: 1px solid #ccc;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 }
```

```jsx title="src/views/Posts/Posts.js" showLineNumbers="true"
import React from 'react';
import blogData from './../../configs/blogs-data.json';
import PreviewPostCard from '../../components/PreviewPostCard/PreviewPostCard';

function Posts(){
    return(
        <>
        <h1>Posts</h1>
        {
            blogData.map((post, index)=>{
                return <PreviewPostCard key={index} id={post.id} title={post.title} description={post.description} content={post.content} author={post.author} publishedDate={post.publishedDate} />
            })
        }
        </>
    )
}
export default Posts;
```
**Output :**
><img src="/react/16/output1.png" alt="output1.png" width="600px"/>

```jsx title="src/views/ReadPost/ReadPost.js" showLineNumbers="true"
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import blogData from './../../configs/blogs-data.json';

function ReadPost(){
    const { id } = useParams()

    const [post, setPost] = useState({})

    useEffect(()=>{
        blogData.forEach((postObj)=>{
            if(postObj.id == id){
                setPost(postObj)
            }
        })
    }, [id])
    return(
        <>
        <div>
        <h1>{post.title}</h1>
        <span>By {post.author}</span>
        <p>{post.description}</p>
        <p>{post.content}</p>
        <p>Published On {post.publishedDate}</p>
        </div>
        </>
    )
}
export default ReadPost;
```

**Output :**
><img src="/react/16/output2.png" alt="output2.png" width="600px"/>