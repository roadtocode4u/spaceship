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


## Form Handling using useState

This Readme will show you how to use the `useState` hook in React to handle form input. We'll create a simple form component that allows the user to enter their `name` and `email` address, and then display that information on the screen.

First, create a new component called `Form`. In this component, we'll create a form with two input fields for the `user's name` and `email address`. We'll also create a button to `submit` the form.

**Code :**

```js 
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
```

In the above code,  we're using the `useState` hook to create two state variables, `name` and `email`, and two setter functions, `setName` and `setEmail`. We're also creating a `handleSubmit` function that will be called when the `user submits the form`.

In the return statement, we're rendering a form with two input fields, one for the `user's name` and one for their `email address`. We're setting the value of each input to its corresponding state variable, and using the `onChange event` to update the state variable when the user types into the input.

Finally, we're rendering a submit button that will call the `handleSubmit` function when clicked.



