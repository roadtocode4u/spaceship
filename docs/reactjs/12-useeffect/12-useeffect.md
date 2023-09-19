---
title: useEffect
description: "useEffect"
hide_table_of_contents: true
---

In React, a component's primary purpose is to render UI based on the input (props) and its own state (useState). However, sometimes components need to perform additional tasks that are not directly related to rendering UI. These tasks are known as `side effects`.

Side effects can include tasks like:

* Fetching data from an API.
* Updating the document title or the DOM.
* Subscribing to external services or events.
* Creating timers or intervals.
* Cleaning up resources or 

The useEffect hook in React allows you to perform side effects in a function component. It is called after the component has rendered (or re-rendered) and runs every time the component updates (unless specific dependencies are provided).

useEffect takes two arguments, a function that contains the side effect code and a list of values that the component relies on, called `dependencies`. The function will run every time the component is rendered, and after the component updates. It also can return a cleanup function that runs before the next render, allowing you to clean up any side effects created by the effect. This helps you avoid memory leaks and keeps your application running smoothly.

The list of dependencies is used to determine when the effect should run. If any of the dependencies change, the effect will run again. If no dependencies are provided, the effect will run on every render.


**You can import `useEffect` to use it in the application similar to how we did with useState.**

```js
import { useEffect } from 'react';
```

We call `useEffect` from the function component to ensure it has access to state variables. This allows useEffect to change the component state if the `side effect` requires it.

`useEffect accepts two arguments`. The first one is the function that carries out the side effect. The second is an optional array of variables that controls exactly when to run the effect. If you don’t pass this second argument, the effect executes after every rendering process.

Let’s see how we can set up useEffect to log the current value of the count state to the console.

**Without Passing Dependencies to useEffect:**

In this example, we will not pass any dependencies to the useEffect hook. This means the effect will run after every render of the component.

```js
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  
  useEffect(() => {
    console.log("Effect ran without dependencies.");
  });

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={incrementCount}>
        Increment Count
      </button>
    </div>
  );
}

export default Counter;
```

In this example, the effect will run every time the component renders, and it will log "Effect ran without dependencies" to the console.


**Passing Dependencies to useEffect :**

In this example, we will pass `[count]` as a dependency array to the useEffect hook. This means the effect will only run when the count state variable changes.

```js
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Effect ran with dependency: Count is ${count}`);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={incrementCount}>
        Increment Count
      </button>
    </div>
  );
}

export default Counter;
```

In this example, the effect will only run when the count state variable changes, and it will log the current count value to the console.

<img src="https://media0.giphy.com/media/24akSucLOFwwoZamdr/200w.gif?cid=6c09b952o1edfjqcjqamozqyn328lcrbsqyr5xrrtdmeefs4&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="usestate" width="30%" />