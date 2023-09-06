---
title: Components and Props
description: "Components and Props"
hide_table_of_contents: true
---

## Components 

Javascript functions that returns `jsx`.

In React, a component is a reusable piece of code that defines the structure and behavior of a part of a user interface. A component is typically written as a JavaScript function or class that returns a JSX element or a tree of elements.

**File Name : index.js**

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

**Example Explanation :**

In this example, we're using React to create a web page with multiple `"Card" components`. Each `"Card`" component displays a `title with a random number`.

1. We import a part of React called `ReactDOM`, which helps us work with web pages.

2. We create a `"root"` element in our HTML with the `ID 'root'`, where our React content will appear.

3. We define a function called `"Card"` that generates a `random number` and displays it as a title inside a card-like container.

4. Inside the "Card" component, we use `Math.random()` to create a random number each time the component is called, and we show it in the title of the card.

5. We use React to render four instances of the "Card" component inside the 'root' element. As a result, you'll see four cards on the web page, each with a different random number in its title.

So, `when you load the page, you'll see four cards`, and each card will have a `unique random number in its title`, created by the "Card" component. 

## Props 

`props` is a shorthand for `properties`. props means Passing `Parameters` to component. It refers to a mechanism for passing data from `one component to another` in a unidirectional flow. A component can receive data as props from its parent component and use it to render its content. Props are read-only, meaning that a component cannot modify the props it receives from its parent. Overall, props help to create reusable and modular components in React.


**Example 1 :**

**File Name : index.js**

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

**Example Explanation :**

In this example, we are using a `JavaScript library called React` to build a web application.

1. We import a part of React called `ReactDOM`, which helps us interact with the web browser.

2. We create a `"root" element` in our HTML document where our React application will be displayed. This root element is typically identified by an `"id"` called `'root'`.

3. We define a function called `"Greeting"` that represents a part of our web page. It displays a heading saying `"Hello Greeting."`

4. We use React to render our `"Greeting"` component inside the `"root"` element. This means the "Hello Greeting" message will appear on the web page inside the 'root' element.


**Example 2 :**

**File Name : index.js**

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

**Example Explanation :**

In this example, we are using a `JavaScript library called React` to build a web application.

1. We import a part of React called `ReactDOM`, which helps us interact with the web browser.

2. We create a `"root" element` in our HTML document where our React application will be displayed. This root element is typically identified by an `"id"` called `'root'`.

3. We define a function called `"Greeting"` that takes some `information (props)` and displays a greeting message with a horizontal line.

4. Inside the `"Greeting" component`, we use` "console.log(props)"` to show the props (information) passed to it.

5. We use React to `render the "Greeting" component inside the 'root' element`. We also pass some information `like a name ("Anand") and a city ("Pune") as props` to the "Greeting" component.

So, when the page loads, you'll see a greeting message saying "Hello" with a line below it, and in the console, you'll see the props with the `name and city` you provided. This helps us display dynamic information on our web page using React.

**Example 3 :**

**File Name : index.js**

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

**Example Explanation :**

In this example, we are using a `JavaScript library called React` to build a web application.

1. We import a part of React called `ReactDOM`, which helps us interact with the web browser.

2. We create a `"root" element` in our HTML document where our React application will be displayed. This root element is typically identified by an `"id"` called `'root'`.

3. We define a function called `"Greeting"` that takes two pieces of information (props): a person's `name` and their `city`.

4. Inside the `"Greeting"` component, we display a message using these props, like `"I am Anand from Pune."`

5. We use React to render the "Greeting" component inside the 'root' element. We provide the `name as "Anand"` and the `city as "Pune"` as props to the "Greeting" component.

So, when you load the page, you'll see a greeting message that says, `"I am Anand from Pune,"` with the name and city values you provided as props.

**Example 4 :**

**File Name : index.js**

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

**Example Explanation :**

In this example, we are using a `JavaScript library called React` to build a web application.

1. We import a part of React called `ReactDOM`, which helps us interact with the web browser.

2. We create a `"root" element` in our HTML document where our React application will be displayed. This root element is typically identified by an `"id"` called `'root'`.

3. We define a function called `"Greeting"` that takes two pieces of information (props): a person's `name` and their `city`.

4. Inside the "Greeting" component, we use these props to create a personalized message, such as `"I am Anand from Nagpur,"` and we add a horizontal line below it for separation.

5. We use React to render `four` instances of the `"Greeting"` component inside the `'root'` element. Each instance has `different name and city values passed as props`.

When you open the web page, you'll see four greeting messages, each with a different name and city, like `"I am Anand from Nagpur," "I am Vaishnavi from Ahmednagar,"` and so on. 

**Example 5 :**

**File Name : index.js**

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

**Example Explanation :**

In this example, we are using a `JavaScript library called React` to build a web application.

1. We import a part of React called `ReactDOM`, which helps us interact with the web browser.

2. We create a `"root" element` in our HTML document where our React application will be displayed. This root element is typically identified by an `"id"` called `'root'`.

3. We define a function called `"Greeting"` that takes three pieces of information (props): a person's `name`, `city` and their `age`.

4. Inside the "Greeting" component, we use these props to create a personalized message, such as `"I am Anand from Nagpur.I am 23 years old"`, and we add a horizontal line below it for separation.

5. We use React to render `four` instances of the `"Greeting"` component inside the `'root'` element. Each instance has `different name, city and age values passed as props`.

When you open the web page, you'll see four greeting messages, each with a different name, city and age, like `"I am Anand from Nagpur.I am 23 years old", "I am Vaishnavi from Ahmednagar. I am 22 years old,"` and so on. 