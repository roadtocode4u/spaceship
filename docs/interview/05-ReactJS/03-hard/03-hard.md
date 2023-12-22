### ReactJS Hard

<details>
<summary>Explain React folder structure.</summary>

## React Folder Structure

- If we create react app then run `npx create-react-app <app-name>` command.

<img src="/interview/react-folder-screenshot-1.png" alt="output-1" width="200px" height="200px"/>

<br/>
<br/>

**node_modules:**<br/>
based on the package.json dependencies react will download all the node modules.
`node_modules` means files required for our dependencies or libraries. Those files will be stored inside the node modules. Just after downloading all the node modules we will our react app will create `package-lock.json`

**package.json:**<br/>
Firstly `package.json` file will be created. Our `package.json` file contains named of projects, version of project, author's, reactScripts, dependencies and browserList.

```js showLineNumbers=true
{
"name": "react-app",
"version": "0.1.0",
"private": true,
"dependencies": {
 "@testing-library/jest-dom": "^5.17.0",
 "@testing-library/react": "^13.4.0",
 "@testing-library/user-event": "^13.5.0",
 "react": "^18.2.0",
 "react-dom": "^18.2.0",
 "react-scripts": "5.0.1",
 "web-vitals": "^2.1.4"
},
"scripts": {
 "start": "react-scripts start",
 "build": "react-scripts build",
 "test": "react-scripts test",
 "eject": "react-scripts eject"
},
"eslintConfig": {
 "extends": [
   "react-app",
   "react-app/jest"
 ]
},
"browserslist": {
 "production": [
   ">0.2%",
   "not dead",
   "not op_mini all"
 ],
 "development": [
   "last 1 chrome version",
   "last 1 firefox version",
   "last 1 safari version"
 ]
}
}
```

- `dependencies:`<br/>
  So mainly `dependencies` mean our project which is dependent on npm libraries. So name and version of those libraries will be stored in dependencies objects.
- `Browserlist:`<br/>
  Browserlist means our project will support to specific production level browsers & development level browsers. So for those browsers supported data will be added in browserlist.
- `reactScripts:`<br/>
  Also we have reactScripts. So reactScript help us to write Scripts like `npm start` and all those command So this is all about `package.json`.<br/>

**package-lock.json:** <br/>
In `package-lock.json` file store the locked version of our dependencies & dependencies of our dependencies.

**public folder:** <br/>
After that` public folder` will be created.public folder is entry point to our application. So we can directly access any files from public folder &

- `index.html:` public/index. html is the main HTML file of our app that includes your React code and provides a context for React to render to.

**scr folder:**<br/>

<img src="/interview/react-folder-screenshot-2.png" alt="output-1" width="200px" height="200px"/><br/>

Thier is another folder is `Source(src)`inside the source one `index.js` file will be their

- `index.js:` index.js ia a entry point on the javascript side or the react side. So index.js will be responsible for manipulating index.html inside the public folder & this is how our entire `react folder structure` looks like,
  <br/>

later also we can `customized some folder structure` like for `assets` for `views` for `components`. We can create our folder structure.

<img src="/interview/custom-folder-structure.png" alt="output-1" width="200px" height="200px"/> <br/>

- `assets:` In assets we are store the all images of the project or app.
- `views:` In views folder developer can add single folders like Home, About and in the Home, About folder we create a js and css file like Home.js, Home.css
- `components:` In components we create resuable components folders like Footer, Navbar and in this folders same as views we create a js and css file like Navbar.js, Navbar.css

</details>

<details>
  <summary>What is useState? What is useEffect and difference between them?</summary>

## UseState <br/>

usestate variable is mostly used hook in react . It allow us to store a values or data in fuctional component . It work like simple variable ,It provide us one variable and one setter method . using setter method we can change the value of usestate variable where ever it using . It work like pup sub model that mean When a user follows another user, they are subscribing to the recipes that the friend publishes.

**For using usestate hook we need to firstly import it in module**

```js
import { useState } from "react";
```

**code implementation of usestate hook**

```js showLineNumbers=true
function Subscrib() {
  const [subscribe, setSubscribe] = useState(0);

  return (
    <>
      <p>{subscribe}</p>
      <button onClick={() => setSubscribe(subscribe + 1)}>subscribe</button>
    </>
  );
}
```

## useeffect

useeffect is also hook in react. useeffect generally perform a side effects. It is used to execute any perticular code that not related to reloading the web page. It mainly takes two parameter first one is a function that contain side effect code and second one is dependies. whenever the dependies change then a side effect code get executed .

**For using useeffect hook we need to firstly import it in module**

```js
import { useeffect } from "react";
```

**code implementation of useeffect hook**

```js showLineNumbers=true
function PrintHelloWorld() {
  const [num, setNum] = usestate;
  useeffect(() => {
    console.log("hello world");
  }, [num]);
  return (
    <>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>print</button>
    </>
  );
}
```

## Difference between usestate and useeffect

useState is used to manage state within a component, allowing you to store and update data. useEffect is used to perform side effects in a component, such as updating the document title, fetching data, or subscribing to events.

</details>
