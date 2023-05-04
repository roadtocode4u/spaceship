---
title: useState
description: "useState"
hide_table_of_contents: true
---
## What is useState?

`useState` is a hook in ReactJS that allows you to have state variables in functional components. The state variable is used to store and manage the data that changes within a component. The `useState` hook returns an array with two values. The first value is the state variable, and the second value is a function to update the state variable.

To use useState, you need to declare a state variable and set an initial value. You can declare a state variable using the `const` keyword and the array destructuring syntax. The first element of the array is the state variable, and the second element is a function to update the state.

Here is an example of using useState:

```js
    const [count, setCount] = useState(0);
```

In this example, the `count` is the state variable, and the initial value is set to `0`. The `setCount` is the function that is used to update the `count` variable.

Here is an example of using useState in a functional component:

```js
    function App()
    {
        const [count, setCount] = useState(0);
        return(
            <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            </>
        )
    }
```

In this example, the `App` function is a functional component that uses the `useState` hook to declare a `count` state variable with an initial value of `0`. The return statement of the function returns the `h1` element with the current value of the `count` variable, and a button that updates the `count` variable using the `setCount` function when clicked.