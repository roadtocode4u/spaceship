---
title: How to create react app
description: "How to create react app."
hide_table_of_contents: true
---

### There are primarly two best way to create new react app.

1. Using CRA (create-react-app).
2. Using vite

** Both tools are popular and offer unique advantages for different project needs. **

### 1. Using create-react-app

##### It was created and is maintained by Facebook's React team.

#### It use webpack internally.

1. First and very important step, ensure that you have installed `node.js` in your machine .
2. Open terminal or Git Bash, then type `npx create-react-app (name) foody`. (`npx`-Node Package Execute)
3. It will take some time to create react app .
4. It will install some packages `react`, `react-dom` and `react-script`.
5. Close the terminal and open that folder into the vs-code.
6. Open the terminal in vs-code .
7. You see all the necessary folders and files are created .
8. It will redirect to your default browser .
   `Created git commit ` , it create first commit by default .
9. Write this command `npm start ` This command is use to starts the development server.
10. Opne package.json file you will see it install lots of extra libraries `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/user-event` etc.

<img src="/react/02/01-package.png" alt="screenshot1.png" width="600px"/>

11. `npm run build ` command is used to create a production-ready build of application.

### 2. Using Vite

#### Vite is an open-source project created by Evan You, the creator of Vue.js.

#### It's a modern build tool that aims to provide a faster and more efficient development experience for frontend developers.

#### It is lightning fast HMR (hot module reloding)

#### It come with lots of features, plugins

1. Open terminal and type ` npm create vite@latest.
2. Next it will ask name to keep .
3. Next it will ask to choose framework, choose React . ("to navigate the framework use arrow UP and arro down key)
4. It will ask to choose variant, choose your favourite varient .
5. Next close the terminal and open that folder in vs-code .
6. After that open terminal in vs-code and type `npm i` this command install all the necessary libraries and dependencies .

### vite folder structure

<img src="/react/02/02-vite-folder.png" alt="screenshot1.png" width="600px"/>

### vite package.json file

<img src="/react/02/03-vite-json.png" alt="screenshot1.png" width="600px"/>

7. The default behavior of `npm run dev` command is to start the development server using Vite. However, you can modify this behavior by editing the `package.json `file. In the scripts section, you'll find the first script labeled `"dev": "vite"`. You can change it to `"start"` if you want to use a different command for development.

8. To start your development server, run `npm run dev`. The server will start on a port different from the CRA default `(http://localhost:5173/)`. It won't automatically redirect you to the browser, so you'll need to click on the link displayed in the terminal after running the command to navigate there.

9. To create an optimized production build of your React application, run the build command:`npm run build`

10. This command will generate a `dist` folder containing your production-ready files.

11. After that, you are good to go for deployment.
