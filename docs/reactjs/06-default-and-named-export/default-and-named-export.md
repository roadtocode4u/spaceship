---
title:  Default and Named Export
description: "Default and Named Export"
hide_table_of_contents: true
---

In React, exporting allows you to share code from one file (module) with other files in your application. There are two common ways to export items from a module: **Default Export** and **Named Export**.

## Default Export


Default export is used to export a **single value** or **function** as the main export from a module. It's handy when you want to indicate the primary thing to import from that module. Here's how you use it:

Suppose you have a React component in a file called **GreetingCard.js**

```js
export default function GreetingCard() {
    // Component logic here
}
```

In this case, **GreetingCard** is the default export. When you import it in another file, you can give it any name you prefer:

```js
import CustomName from './GreetingCard';
```

This way, you can easily import the most important part of a module in other parts of your code.

**Examples:**

**File Name : GreetingCard.js**

```js showLineNumbers="true"
export default function GreetingCard(){
    return(
        <div>
        <h1>Happy Birthday...!!</h1>
        </div>
    )
}
```

In the above code, **export default:** This part of the code indicates that you are exporting something as the default export from this module. In this case, you're exporting a function named `GreetingCard` as the `default export`. This means that when another file imports this module, they can choose to give it any name they want.

``function GreetingCard() {``: This is the start of a JavaScript function definition. You are defining a function called `GreetingCard` with an empty set of `parentheses ()`. This function doesn't take any parameters.

`return (`: This is the beginning of the function's return statement. It signifies that the function is going to return a value, which in this case is a `JSX` expression enclosed in parentheses.

`<div>`: This is an opening JSX tag. JSX (JavaScript XML) allows you to write HTML-like code within your JavaScript functions. Here, you are creating an HTML `<div>` element.

``<h1>Happy Birthday...!!</h1>``: This is another JSX element. Here, you're creating an `<h1>` (heading level 1) HTML element with the text `Happy Birthday...!!` inside it.

``</div>``: This is the closing JSX tag that matches the opening `<div>` tag.

``)}``: This is the end of the return statement and the closing curly brace `}` of the GreetingCard function. It concludes the function definition.

**File Name : index.js**

```js showLineNumbers="true"
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

In the above code, `import ReactDOM from 'react-dom/client';`: This line imports the `ReactDOM` library from the `'react-dom/client'` module. ReactDOM is used for rendering React components into the `DOM` (Document Object Model) of a web page.

`import GreetingCard from './GreetingCard';`: This line imports a component called `GreetingCard` from a file named `'GreetingCard'`. The GreetingCard component is likely the one you defined earlier in your code.

`const root = ReactDOM.createRoot(document.getElementById('root'));`: This line creates a variable named root and uses `ReactDOM.createRoot()` to initialize it. It specifies the element with the id `'root'` as the target container for rendering your React components. This means that your React content will be placed inside the HTML element with the id `'root'`.

`root.render(...)`: This code calls the render method on the root object, which you created earlier. Inside the render method, you have the following `JSX` (JavaScript XML)

`<GreetingCard />`: This is a JSX element that represents the `GreetingCard` component you imported earlier. It's used to render two instances of the GreetingCard component.

**Output :**

>Happy Birthday...!! <br/>
>Happy Birthday...!!

**File Name : GreetingCard.js**

```js showLineNumbers="true"
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

<img src="/react/06/screenshot1.png" alt="screenshot1.png" width="600px"/>

## Named Export

Named export allows you to export **multiple components**, **functions**, or **objects** from a module with specific names. This way, you can import and use them by their exact names in other parts of your React application.

Suppose you have a module called **Button.js** that exports multiple components:

```js showLineNumbers="true"
// Exporting a default component
export default function Button({ text }) {
    // Component logic here
}

// Exporting named components
export function OutlineButton() {
    // Component logic here
}

export function LinkButton() {
    // Component logic here
}
```

In this example, `Button` is the default export, and `OutlineButton` and `LinkButton` are named exports. You can import and use them like this:

```js  showLineNumbers="true"
import Button, { OutlineButton, LinkButton } from './Button';
```

Named exports are helpful for structuring and organizing your React code, allowing you to reference components, functions, or objects explicitly by their names.


**Examples:**

**File Name : Button.js**

```js showLineNumbers="true"
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

In the above code Line 12 to 16 , 
 
`export default function Button({ text }) {`: This line exports a default React functional component named `Button`. It takes an object with a `text` property as a parameter (props), which is expected to be passed when using the component.

`<button style={buttonStyle}>`: This line renders a button element in JSX (JavaScript XML) and applies the buttonStyle object as inline CSS.

`{text}`: This JSX expression inserts the value of the text property (passed as a parameter to the component) inside the button element.

`<button>`: This is a closing button tag.

Line 28 to 32,

`export function OutlineButton() {`: This line exports a named React functional component named `OutlineButton`.

`<button style={outlinebuttonStyle}>`: This line renders a button element in JSX and applies the `outlinebuttonStyle` object as inline CSS.

`Outline Button`: This is the text content of the button.

Line 45 to 49, 

`export function LinkButton() {:` This line exports a named React functional component named `LinkButton`.

`<button style={linkButtonStyle}>:` This line renders a button element in JSX and applies the linkButtonStyle object as inline CSS.

`Link Button`: This is the text content of the button.

**File Name : index.js**

```js showLineNumbers="true"
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

In the above code Line 3, 

`import Button, {OutlineButton, LinkButton} from './Button';`: This line imports three components - `Button`, `OutlineButton`, and `LinkButton` - from a file named `Button` located in the same directory as this code. It uses both default and named exports from the `Button` module.

 Line 9 to 13,

`<GreetingCard />`: This JSX element renders the `GreetingCard` component twice. It's placed inside the JSX fragment.

`<Button text={'Buy Now'}/>`: This JSX element renders the Button component with the `text prop` set to `Buy Now`. This will create a button with the text `Buy Now`.

`<Button text={'Cancel'}/>`: Similar to the previous line, this JSX element renders another Button component, but with the `text prop` set to `Cancel`. This will create a button with the text `Cancel`.

`<OutlineButton/>`: This JSX element renders the OutlineButton component. It doesn't have any props, so it will render an outline-style button with default text.

`<LinkButton/>:` This JSX element renders the LinkButton component. Like the previous one, it doesn't have any props, so it will render a link-style button with default text.

**Output :**

><img src="/react/06/screenshot2.png" alt="screenshot2.png" width="600px"/>
