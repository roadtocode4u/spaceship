---
title: Default and Named Export
description: "Default and Named Export"
hide_table_of_contents: true
---

In React, exporting allows you to share code from one file (module) with other files in your application. There are two common ways to export items from a module: **Default Export** and **Named Export**.

## What is Default Export?

Default export is used to export a **single value** or **function** as the main export from a module. It's handy when you want to indicate the primary thing to import from that module. Here's how you use it:

Suppose you have a React component in a file called **GreetingCard.js**

```js
export default function GreetingCard() {
  // Component logic here
}
```

In this case, **GreetingCard** is the default export. When you import it in another file, you can give it any name you prefer:

```js
import CustomName from "./GreetingCard";
```

This way, you can easily import the most important part of a module in other parts of your code.

**Examples:**

```jsx title="src/GreetingCard.js" showLineNumbers
export default function GreetingCard() {
  return (
    <div>
      <h1>Happy Birthday...!!</h1>
    </div>
  );
}
```

In the above code, **export default:** This part of the code indicates that you are exporting something as the default export from this module. In this case, you're exporting a function named `GreetingCard` as the `default export`. This means that when another file imports this module, they can choose to give it any name they want.

`function GreetingCard() {`: This is the start of a JavaScript function definition. You are defining a function called `GreetingCard` with an empty set of `parentheses ()`. This function doesn't take any parameters.

`return (`: This is the beginning of the function's return statement. It signifies that the function is going to return a value, which in this case is a `JSX` expression enclosed in parentheses.

`<div>`: This is an opening JSX tag. JSX (JavaScript XML) allows you to write HTML-like code within your JavaScript functions. Here, you are creating an HTML `<div>` element.

`<h1>Happy Birthday...!!</h1>`: This is another JSX element. Here, you're creating an `<h1>` (heading level 1) HTML element with the text `Happy Birthday...!!` inside it.

`</div>`: This is the closing JSX tag that matches the opening `<div>` tag.

`)}`: This is the end of the return statement and the closing curly brace `}` of the GreetingCard function. It concludes the function definition.

**File Name : index.js**

```jsx title="src/index.js" showLineNumbers
import ReactDOM from "react-dom/client";
import GreetingCard from "./GreetingCard";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <GreetingCard />
    <GreetingCard />
  </>
);
```

In the above code, `import ReactDOM from 'react-dom/client';`: This line imports the `ReactDOM` library from the `'react-dom/client'` module. ReactDOM is used for rendering React components into the `DOM` (Document Object Model) of a web page.

`import GreetingCard from './GreetingCard';`: This line imports a component called `GreetingCard` from a file named `'GreetingCard'`. The GreetingCard component is likely the one you defined earlier in your code.

`const root = ReactDOM.createRoot(document.getElementById('root'));`: This line creates a variable named root and uses `ReactDOM.createRoot()` to initialize it. It specifies the element with the id `'root'` as the target container for rendering your React components. This means that your React content will be placed inside the HTML element with the id `'root'`.

`root.render(...)`: This code calls the render method on the root object, which you created earlier. Inside the render method, you have the following `JSX` (JavaScript XML)

`<GreetingCard />`: This is a JSX element that represents the `GreetingCard` component you imported earlier. It's used to render two instances of the GreetingCard component.

**Output :**

> Happy Birthday...!! <br/>
> Happy Birthday...!!

```jsx title="src/GreetingCard.js" showLineNumbers
export default function GreetingCard() {
  const cardStyle = {
    border: "4px double black",
    backgroundColor: "aqua",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
  };

  const headingStyle = {
    color: "tomato",
  };

  return (
    <div style={cardStyle}>
      <h1 style={headingStyle}>Happy Birthday...!!</h1>
    </div>
  );
}
```

**Output :**

<img src="/react/06/screenshot1.png" alt="screenshot1.png" width="600px"/>

---

## What is Named Export?

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

```js showLineNumbers="true"
import Button, { OutlineButton, LinkButton } from "./Button";
```

Named exports are helpful for structuring and organizing your React code, allowing you to reference components, functions, or objects explicitly by their names.

**Examples:**

```jsx title="src/Button.js" showLineNumbers="true"
export default function Button({ text }) {
  return <button>{text}</button>;
}

export function OutlineButton() {
  return <button>Outline Button</button>;
}

export function LinkButton() {
  return <button>Link Button</button>;
}
```

In the above, <br/>

This document provides details about three React functional components: `Button`, `OutlineButton`, and `LinkButton`. These components demonstrate the usage of default and named exports.

## Components Explanation

### 1. `Button`

- **Export Type**: Default Export
- **Description**:  
  This is a React functional component that takes an object with a `text` property as its parameter (props).  
  The `text` property is expected to be passed when using this component.

#### Code:

````jsx
export default function Button({ text }) {
  return <button>{text}</button>;
}


```jsx title="src/index.js" showLineNumbers
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
````

In the above code Line 3,

`import Button, {OutlineButton, LinkButton} from './Button';`: This line imports three components - `Button`, `OutlineButton`, and `LinkButton` - from a file named `Button` located in the same directory as this code. It uses both default and named exports from the `Button` module.

Line 9 to 13,

`<GreetingCard />`: This JSX element renders the `GreetingCard` component twice. It's placed inside the JSX fragment.

`<Button text={'Buy Now'}/>`: This JSX element renders the Button component with the `text prop` set to `Buy Now`. This will create a button with the text `Buy Now`.

`<Button text={'Cancel'}/>`: Similar to the previous line, this JSX element renders another Button component, but with the `text prop` set to `Cancel`. This will create a button with the text `Cancel`.

`<OutlineButton/>`: This JSX element renders the OutlineButton component. It doesn't have any props, so it will render an outline-style button with default text.

`<LinkButton/>:` This JSX element renders the LinkButton component. Like the previous one, it doesn't have any props, so it will render a link-style button with default text.

**Output :**

> <img src="/react/06/screenshot2.png" alt="screenshot2.png" width="600px"/>

````

---

# When to Use Default vs Named Exports

#### Choosing between default and named exports depends on how you plan to use your code.

### Use Default Exports When:
 **1. Single Component or Function per File :**
If your file contains just one main thing, like a single React component, use a default export. <br/>

Example:

```jsx
// GreetingCard.js
export default function GreetingCard() {
    return <h1>Happy Birthday!</h1>;
}
````

Import it like this:

```jsx
import GreetingCard from "./GreetingCard";
```

**2. Flexibility in Naming:**
You can import a default export with any name you like.<br/>

Example:

```jsx
import MyCustomName from "./GreetingCard";
```

### Use Named Exports When:

**1. Exporting Multiple Items from a Single File:**
If your file has many components, functions, or constants, named exports are better. <br/>

Example:

```jsx
export function Header() {
  return <header>Header Content</header>;
}
export function Footer() {
  return <footer>Footer Content</footer>;
}
```

Import them like this:

```jsx
import { Header, Footer } from "./LayoutComponents";
```

**2. Clear Naming:**
Named exports make it clear what you’re importing by enforcing the same names in both the export and import.

---

# Exporting Multiple Components in a Single File

#### Sometimes, you might want to put several related components in one file. For example, in a file called `Buttons.js`:

```jsx
// Default export
export default function PrimaryButton({ text }) {
  return <button>{text}</button>;
}

// Named exports
export function OutlineButton({ text }) {
  return <button style={{ border: "2px solid black" }}>{text}</button>;
}

export function LinkButton({ text }) {
  return (
    <button style={{ background: "none", textDecoration: "underline" }}>
      {text}
    </button>
  );
}
```

Importing them:

```jsx
import PrimaryButton, { OutlineButton, LinkButton } from "./Buttons";

function App() {
  return (
    <>
      <PrimaryButton text="Click Me" />
      <OutlineButton text="Outline" />
      <LinkButton text="Learn More" />
    </>
  );
}
```

---

# Error Scenarios and Best Practices

#### Common Pitfalls:

**1 Forgetting Curly Braces for Named Exports:**

Named exports must be imported using curly braces.<br/>

Example:

```jsx
// Wrong
import OutlineButton from "./Buttons"; // Error: OutlineButton is not a default export

// Correct
import { OutlineButton } from "./Buttons";
```

**2. Wrong Name for Default Export:**

You can rename a default export, but if you use the wrong name for a named export, you’ll get an error.<br/>

Example:

```jsx
// Buttons.js
export function LinkButton() {}

// Wrong
import { LinkBtn } from "./Buttons"; // Error: LinkBtn is not exported

// Correct
import { LinkButton } from "./Buttons";
```

**3. Mixing Import Styles:**

Be careful when combining default and named imports.<br/>

Example:

```jsx
import { OutlineButton, PrimaryButton } from "./Buttons"; // Wrong if PrimaryButton is default
```
