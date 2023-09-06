---
title: Components and Props
description: "Components and Props"
hide_table_of_contents: true
---

## Components 

Javascript functions that returns `jsx`.

In React, a component is a reusable piece of code that defines the structure and behavior of a part of a user interface. A component is typically written as a JavaScript function or class that returns a JSX element or a tree of elements.

```js
 import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

  function Card(){

  const randomNumber = Math.random();
  return(
    <div>
      <h1>Card {randomNumber}</h1>
    </div>
  )
}
root.render(
  <>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  </>
)
```
**Output :**
><img src="/react/03/screenshot1.png" alt="screenshot1.png" width="600px"/>


## Props 

`props` is a shorthand for `properties`. props means Passing `Parameters` to component. It refers to a mechanism for passing data from `one component to another` in a unidirectional flow. A component can receive data as props from its parent component and use it to render its content. Props are read-only, meaning that a component cannot modify the props it receives from its parent. Overall, props help to create reusable and modular components in React.


**Example 1 :**

```js
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot
(document.getElementById('root'));

function Greeting(props){
  return(
    <div>
      <h1>Hello Greeting</h1>
    </div>
  )
}
root.render(
  <>
  <Greeting/>
  </>
)
```
**Output :**
>Hello Greeting

**Example 2 :**

```js
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting(props){
  console.log(props)
  return(
    <div>
      <h1>Hello</h1>
      <hr/>
    </div>
  )
}
root.render(
  <>
  <Greeting name = "Anand" city = "Pune"/>
  </>
)
```
**Output :**
><img src="/react/03/screenshot2.png" alt="screenshot2.png" width="600px"/>

**Example 3 :**

```js
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting(props){
  console.log(props)
  return(
    <div>
      <h1>I am {props.name} from {props.city}.</h1>
    </div>
  )
}
root.render(
  <>
  <Greeting name = "Anand" city = "Pune"/>
  </>
)
```
**Output :**
><img src="/react/03/screenshot3.png" alt="screenshot3.png" width="600px"/>

**Example 4 :**

```js
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting(props){
  const {name, city} = props;
  return(
    <div>
      <h1>I am {name} from {city}.</h1>
      <hr/>
    </div>
  )
}
root.render(
  <>
  <Greeting name = "Anand" city = "Nagpur"/>
  <Greeting name = "Vaishnavi" city = "Ahmednagar"/>
  <Greeting name = "Suraj" city = "Bhandara"/>
  <Greeting name = "Pinki" city = "Pune"/>
  </>
)
```
**Output :**
><img src="/react/03/screenshot4.png" alt="screenshot4.png" width="600px"/>

**Example 5 :**

```js
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting(props){
  const {name, city, age} = props;
  return(
    <div>
      <h1>I am {name} from {city}. I am {age} years old.</h1>
      <hr/>
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
><img src="/react/03/screenshot5.png" alt="screenshot5.png" width="600px"/>

