### ReactJS Hard

<details>
<summary>Explain React folder structure.</summary>

## React Folder Structure

- Firstly run `npx create-react-app <app-name>` command.

<img src="/interview/react-folder-screenshot-1.png" alt="output-1" width="200px" height="200px"/>

<br/>
<br/>

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

**node_modules:**<br/>
based on the package.json dependencies react will download all the node modules.
`node_modules` means files required for our dependencies or libraries. Those files will be stored inside the node modules. Just after downloading all the node modules we will our react app will create `package-lock.json`

**package-lock.json:** <br/>
In `package-lock.json` file store the locked version of our dependencies & dependencies of our dependencies.

**public folder:** <br/>
After that` public folder` will be created.public folder is entry point to our application. So we can directly access any files from public folder &

- `index.html:` index.html is a main file & thier will be a new with specific `id` that we can manipulate later using Js

**scr folder:**<br/>
<img src="/interview/react-folder-screenshot-2.png" alt="output-1" width="200px" height="200px"/><br/>

Thier is another folder is `Source(src)`inside the source one `index.js` file will be their

- `index.js:` index.js ia a entry point on the javascript side or the react side. So index.js will be responsible for manipulating index.html inside the public folder & this is how our entire `react folder structure` looks like,
  <br/>

later also we can `customized some folder structure` like for `assets` for `views` for `components`. We can create our folder structure.

<img src="/interview/custom-folder-structure.png" alt="output-1" width="200px" height="200px"/> <br/>

</details>
