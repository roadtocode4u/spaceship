---
title: useState
description: "useState"
hide_table_of_contents: true
---

## Hooks

Hooks are functions in React that allow you to use state and other React features in functional components, rather than just in class components. Some examples of hooks include `useState`, which allows you to add state to a functional component, and `useEffect`, which allows you to run side effects (such as fetching data) in a functional component.

## What is use of useState hook?

The useState hook in React allows you to add state to functional components. It's a way to store data that can change over time and affect the component's behavior or appearance.

`useState` hook is used to give a state to a function component.

When the `useState` hook is invoked, it creates a state variable along with its corresponding setter function. The state variable is used to store the current state, while the setter function enables us to modify its value. Invoking the setter function also triggers a re-render of the component.

For example, you could use `useState` to store a count that increases every time a button is clicked, or to store a form's input values as the user types.

**To create state variables with useState, first, we have to import the hook to our application.**

```js
import { useState } from 'react';
```

**We can pass the initial state value when calling useState. It returns the variable and its setter, like in the below example.**

```js
const [count, setCount] = useState(0);
```

**Now, whenever there’s a change in one of the states, we can call its setter to update the value.**

To understand this, let’s create a simple counter component that increments its value by one every time we click a button.


```js
function Counter() {
  const [count, setCount] = useState(0); //initial state is 0

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
``` 

Here, we have attached an `onClick` listener to the button. It runs the `setCount` method to increment the count by one. This prompts the Counter component to re-render every time the button is clicked and show the new state value.

Note that `setCount` method updates the state asynchronously. If you access the count variable immediately after calling `setCount` in the onClick handler, it won’t show you the new value but the old one.

:::info 
In upcoming guides, we will delve into other React hooks, such as `useEffect`, to expand our knowledge of building powerful and interactive React applications.
:::

<img src="https://media.tenor.com/Kh3ZR5hJ-AUAAAAM/dancing-so.gif" alt="usestate" width="30%" />