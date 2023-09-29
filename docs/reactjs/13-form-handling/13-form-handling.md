---
title: Form Handling
description: "Form Handling"
hide_table_of_contents: true
---

`Form handling` in React.js refers to the process of managing and processing HTML forms within a React application. HTML forms are commonly used to collect and submit user `input`, such as `text`, `checkboxes`, `radio button`s, and more. React provides a way to handle forms by creating controlled components, which means that the form elements are controlled by the state of your React components.

Here are the  steps and concepts involved in form handling in React:

1. **Create a Home Component:** You can create a React component that represents the form. This component will contain the form elements and handle user interactions.

2. **Controlled Components:** In React, form elements like `<input>` and `<select>` are turned into controlled components by binding their values to the component's state. This means that you set the value of the input elements based on the state and handle changes to the input elements through event handlers.

3. **State Management:** Define state variables to store the data entered by the user in the form elements. When a user interacts with the form (e.g., typing in an input field), update the state accordingly.

4. **Event Handlers:** Use event handlers like onChange for input fields and onClick for buttons to capture user actions. When an input field value changes, update the corresponding state variable.

5. **Form Submission:** Handle form submission using the onSubmit event of the `<form>` element. Prevent the default form submission behavior (which would cause a page refresh) by calling `event.preventDefault()` in the event handler.

**input field**

```jsx title="src/components/Home/Home.js" showLineNumbers
import React, {useState} from "react";

function Home() {

const [fullName, setFullName] = useState('')
  return (
    <>
    <div>
    <form>
    {fullName}
    <input type="text"
     placeholder="Full Name"
     onChange={(e)=>{
        setFullName(e.target.value)
     }} />
    </form>
    </div>
    </>
  );
}

export default Home;
```

**output:**
<img src="/react/13/output1.png" alt="output1.png" width="600px"/>

**radio button**

```jsx title="src/components/Home/Home.js" showLineNumbers
import React, {useState} from "react";

function Home() {
 // handling ratio buttons
const [gender, setGender] = useState('male')
  return (
    <>
    <div>
    <form>
    <h2>Selected Gender: {gender}</h2>
    <input
     type="radio"
     name="gender"
     value="male"
     onChange={(e)=>{
        if(e.target.checked){
            setGender(e.target.value)
        }
     }}
     checked={gender==="male"}
    />Male

    <br />

    <input
     type="radio"
     name="gender"
     value="female"
      onChange={(e)=>{
        if(e.target.checked){
            setGender(e.target.value)
        }
     }}
     checked={gender==="female"}
    />Female
    </form>
    </div>
    </>
  );
}

export default Home;
```

**output:**
<img src="/react/13/output2.png" alt="output2.png" width="600px"/>

**check boxes**

**Example 1:**

```jsx title="src/components/Home/Home.js" showLineNumbers
import React, {useState} from "react";

function Home() {
 // handling check boxes
const [mobile, setMobile] = useState(false);
const [laptop, setLaptop] = useState(false);
const [smartwatch, setSmartWatch] = useState(false);
  return (
    <>
    <div>
    <form>
    {mobile ? 'Mobile is checked' : 'Mobile is not checked'} 

    {laptop ? 'Laptop is checked' : 'Laptop is not checked'}

    {smartwatch ? 'Mobile is checked' : 'Mobile is not checked'}
    <input 
    type="checkbox"
    value="mobile"
    checked={mobile}
    onChange={(e)=>{
        setMobile(e.target.checked);
    }}
     /> Mobile <br/>

    <input
    type="checkbox" 
    value="laptop"
    checked={laptop}
    onChange={(e)=>{
        setLaptop(e.target.checked);
    }}
     /> Laptop <br/>

    <input 
    type="checkbox" 
    value="smartwatch"
    checked={smartwatch}
    onChange={(e)=>{
        setSmartWatch(e.target.checked);
    }}
    /> Smartwatch <br/>

    </form>
    </div>
    </>
  );
}

export default Home;
```

**output:**
<img src="/react/13/output3.png" alt="output3.png" width="600px"/>

**Example 2:**

```jsx title="src/components/Home/Home.js" showLineNumbers
import React, {useState, useEffect} from "react";

function Home() {
 // handling check boxes
const [devices, setDevices] = useState([]);

useEffect(()=>{
   console.log(devices);
},[devices]);

const handleCheck = (e)=>{
    if(e.target.checked){
        setDevices([...devices, e.target.value]);
    }
    else{
        const indexToBeDeleted = devices.indexOf(e.target.value);
        devices.splice(indexToBeDeleted, 1);
        setDevices([...devices]);
    }
}

  return (
    <>
    <div>
    <form>
    <input 
    type="checkbox"
    value="mobile"
    onChange={handleCheck}
     /> Mobile <br/>

    <input
    type="checkbox" 
    value="laptop"
    onChange={handleCheck}
     /> Laptop <br/>

    <input 
    type="checkbox" 
    value="smartwatch"
    onChange={handleCheck}
    /> Smartwatch <br/>

    </form>
    </div>
    </>
  );
}

export default Home;
```

**output:**
<img src="/react/13/output5.png" alt="output5.png" width="600px"/>

**select box**

**Example 1:**

```jsx title="src/components/Home/Home.js" showLineNumbers
import React,  { useState } from 'react'

function Home() {

    const [iceCream, setIceCream] = useState('chocolate');
  return (
    <div>
      <form>
        <select value={iceCream}
        onChange={(e)=>{
          setIceCream(e.target.value)  
        }}>
            <option value="chocolate">Chocolate</option>
            <option value="strawberry">Strawberry</option>
            <option value="vanilla">Vanilla</option>
        </select>
        <h1>Selected IceCream : {iceCream}</h1>
      </form>
    </div>
  )
}

export default Home;
```
**output:**
<img src="/react/13/output4.png" alt="output4.png" width="600px"/>

