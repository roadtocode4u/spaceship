---
title: Components and Props
description: "Components and Props"
hide_table_of_contents: true
---

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


