---
title: JSX and Components in React
description: "JSX and Components in React"
hide_table_of_contents: true
---

## JSX

`JSX` is a syntax extension for JavaScript that allows developers to write HTML-like code in their JavaScript files. JSX syntax allows developers to write HTML-like code in their JavaScript files, making it easier to create complex user interfaces.

`JSX` is a strict version of HTML, as it has its own set of rules and syntax. In JSX, every element must be closed, including self-closing tags, and only one parent element is allowed.

`JSX` also allows developers to embed JavaScript expressions inside curly braces `{}`.

**Code :**

```js
 function App()
 {
    return(
        <>
        <h1>Hello {5+5}</h1>
        </>
    )
 }
```


The above code appears to be written in `JSX` syntax and defines a function component named App.

This component returns an element containing an h1 heading element with the text `Hello 10`. The expression `{5+5}` is evaluated as `10` and is used as the content of the heading. 

## Components 

In React, a component is a reusable piece of code that defines the structure and behavior of a part of a user interface. A component is typically written as a JavaScript function or class that returns a JSX element or a tree of elements.

## Props 

`props` is a shorthand for `properties`. props means Passing Parameters to component. It refers to a mechanism for passing data from one component to another in a unidirectional flow. A component can receive data as props from its parent component and use it to render its content. Props are read-only, meaning that a component cannot modify the props it receives from its parent. Overall, props help to create reusable and modular components in React.


Example :

**File Name : App.js**

```js
import './App.css';

import Chocolate from './Chocolate';

function App() {
  return (
    <>
      <h1 className='app-header'>Chocolate App 💙</h1>

      <Chocolate title="Kharbuj" description="Khabuj is fruit"/>
      <Chocolate title="Dairy Milk" description="dairy milk is sweet"/>
      <Chocolate title="Perk" description="perk is chocolate"/>
      
    </>
  );
}

export default App;

```

**File Name : Chocolate.js**

```js
import './Chocolate.css';

function Chocolate({title, description}) {
  return (
    <div className="chocolate-card">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Chocolate
```

**File Name : Chocolate.css**

```css
.chocolate-card{
    width: 300px;;
    margin: 20px;
    border: 1px solid #ccc;
    border-radius:  5px;
    padding: 10px;
    box-shadow: 0 0 10px #ccc;
    transition: all 0.3s ease-in-out;
}
```

<img src="/icp/41/output-1.png" alt="output" width="400px"/>


