---
title:  Styling React Components
description: "Styling React Components"
hide_table_of_contents: true
---

Exploring **CSS Styling** Methods in React :

1. Inline CSS
2. Document CSS
3. External CSS


1. **Inline CSS :** In React, `inline CSS` refers to adding CSS styles directly to individual `JSX elements using the style attribut`e. It allows for unique and immediate styling of specific elements within a component.

**File Name : index.js**

```js
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting(props){
  const {name, city, age} = props;
  return(
    <div style={{border: '5px double black', backgroundColor: 'lightblue', borderRadius: '10px', padding: '10px', margin: '10px'}}>
      <h1 style={{color: 'tomato'}}>I am {name} from {city}. I am {age} years old.</h1>
    </div>
  )
}
root.render(
  <>
  <Greeting name = "Anand" city = "Nagpur" age = "23"/>
  <Greeting name = "Vaishnavi" city = "Ahmednagar" age = "22"/>
  <Greeting name = "Suraj" city = "Bhandara" age = "23"/>
  <Greeting name = "Pinki" city = "Pune" age = "20"/>
  </>
)
```
**Output :**
><img src="/react/05/screenshot1.png" alt="screenshot1.png" width="600px"/>

2. **Document CSS :** Document CSS, also known as embedded CSS, involves placing CSS styles within a `<style> tag` within the `HTML document or JSX file`. These styles apply to the entire document or a specific section, making them reusable within that document.

**File Name : index.js**

```js
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

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

function Greeting(props){
  const {name, city, age} = props;
  return(
    <div style={cardStyle}>
      <h1 style={headingStyle}>I am {name} from {city}. I am {age} years old.</h1>
    </div>
  )
}
root.render(
  <>
  <Greeting name = "Anand" city = "Nagpur" age = "23"/>
  <Greeting name = "Vaishnavi" city = "Ahmednagar" age = "22"/>
  <Greeting name = "Suraj" city = "Bhandara" age = "23"/>
  <Greeting name = "Pinki" city = "Pune" age = "20"/>
  </>
)
```
**Output :**
><img src="/react/05/screenshot2.png" alt="screenshot2.png" width="600px"/>


3. **External CSS :**  External CSS refers to placing CSS styles in a separate `external file (typically with a .css extension)` and linking it to your React components. This method promotes reusability and separation of concerns, as the styles can be shared across multiple components or pages.

**File Name : index.js**

```js
import ReactDOM from 'react-dom/client';
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting(props){
  const {name, city, age} = props;
  return(
    <div className='card'>
      <h1>I am {name} from {city}. I am {age} years old.</h1>
    </div>
  )
}
root.render(
  <>
  <Greeting name = "Anand" city = "Nagpur" age = "23"/>
  <Greeting name = "Vaishnavi" city = "Ahmednagar" age = "22"/>
  <Greeting name = "Suraj" city = "Bhandara" age = "23"/>
  <Greeting name = "Pinki" city = "Pune" age = "20"/>
  </>
)
```

**File Name : index.css**
```css
.card{
  border: 5px double black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background-color: aquamarine;
}
```
**Output :**
><img src="/react/05/screenshot3.png" alt="screenshot3.png" width="600px"/>

