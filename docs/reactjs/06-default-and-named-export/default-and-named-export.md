---
title:  Default and Named Export
description: "Default and Named Export"
hide_table_of_contents: true
---
React Exporting: **Default Export and Named Export**.

```
1. export default & 
2. named export
```

1. **export default :** In React, specifically in the context of modules, `export default` is a way to export a single value or function as the default export from a module. It's used to indicate the main thing that should be imported when another file imports the module. 

For example, in a React component file:

```javascript
import React from 'react';

export default function MyComponent() {
    return(
        // Component logic here
    )
};

export default MyComponent;
```

In this case, `MyComponent` is the default export, and when you import it in another file, you can give it any name you want, like this:

```javascript
import CustomName from './MyComponent';
```

So, `export default` is a way to export the most important or commonly used part of a module for easy import in other parts of your code.

**Examples:**

**File Name : index.js**

```js
import ReactDOM from 'react-dom/client';
import GreetingCard from './GreetingCard';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
 <GreetingCard />
 <GreetingCard />
  </>
)
```

**File Name : GreetingCard.js**

```js
export default function GreetingCard(){
    return(
        <div>
        <h1>Happy Birthday...!!</h1>
        </div>
    )
}
```
**Output :**
>Happy Birthday...!! <br/>
>Happy Birthday...!!

**File Name : GreetingCard.js**

```js
export default function GreetingCard(){
  const cardStyle = {
  border: '4px double black',
  backgroundColor: 'aqua',
  borderRadius: '10px',
  padding: '10px',
  margin: '10px',
}

const headingStyle = {
  color: 'tomato'
}

  return(
    <div style={cardStyle}>
      <h1 style={headingStyle}>Happy Birthday...!!</h1>
    </div>
  )
}
```
**Output :**
><img src="/react/06/screenshot1.png" alt="screenshot1.png" width="600px"/>

2. **named export :** In React, "named export" is a way to export one or more components, functions, or objects from a module with specific names so that they can be imported and used by their exact names in other parts of your React application. Named exports are a key part of structuring and organizing your React code.

Here's a simple example of how you can use named exports in a React component file:

```javascript
// MyComponent.js
import React from 'react';

export function ComponentA() {
  // ComponentA logic here
}

export function ComponentB() {
  // ComponentB logic here
}
```

In this example, we have two components, `ComponentA` and `ComponentB`, which are exported using named exports. You can import and use them by their specific names in other React files:

```javascript
// AnotherFile.js
import { ComponentA, ComponentB } from './MyComponent';

// Now you can use 'ComponentA' and 'ComponentB' in this file
```

Named exports are useful for sharing and reusing components, functions, or objects across different parts of your React application while maintaining clear and explicit references to them by their names.

**Examples:**

**File Name : index.js**

```js
import ReactDOM from 'react-dom/client';
import GreetingCard from './GreetingCard';
import Button, {OutlineButton, LinkButton} from './Button'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
 <GreetingCard />
 <GreetingCard />
 <Button text={'Buy Now'}/>
 <Button text={'Cancel'}/>
 <OutlineButton/>
 <LinkButton/>
  </>
)
```

**File Name : Button.js**

```js
const buttonStyle = {
 padding: '10px 20px',
 margin: '10px',
 borderRadius: '5px',
 border: 'node',
 color: '#fff',
 fontSize: '16px',
 cursor: 'pointer',
 backgroundColor: '#6772e5'
}

export default function Button({text}){
  return(
    <button style={buttonStyle}>{text}<button>
  )
}

const outlinebuttonStyle = {
 padding: '10px 20px',
 margin: '10px',
 borderRadius: '5px',
 border: '2px solid #6772e5',
 color: '#6772e5',
 fontSize: '16px',
 cursor: 'pointer',
}

export function OutlineButton(){
  return(
    <button style={outlinebuttonStyle}>Outline Button</button>
  )
}

const linkButtonStyle = {
 padding: '10px 20px',
 margin: '10px',
 borderRadius: '5px',
 border: 'none',
 color: '#6772e5',
 fontSize: '16px',
 cursor: 'pointer',
 backgroundColor: 'transparent'
}

export function LinkButton(){
  return(
    <button style={linkButtonStyle}>Link Button</button>
  )
}
```
**Output :**
><img src="/react/06/screenshot2.png" alt="screenshot2.png" width="600px"/>
