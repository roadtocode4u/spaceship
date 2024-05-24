---
title: React Folder Structure
description: "React Folder Structure"
hide_table_of_contents: true
---

### Folder Structure

The folder structure of a React project looks like this:

```bash
>first-flight/
  >node_modules/
  >public/
    index.html
    favicon.ico
  >src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
  gitignore
  package-lock.json
  package.json
  README.md
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

### React folder structures

#### node_modules

This folder contains all the dependencies of the project. It is not recommended to modify the contents of this folder.

### public

This folder contains the `index.html` file which is the entry point of the application. It is not recommended to modify the contents of this folder.

**robots.txt** file is used to tell search engines which pages or files the crawler can or can't request from your site.

**manifest.json** file is used to provide metadata associated with the web application.

**logo192.png** file is used to provide the logo of the web application.

**logo512.png** file is used to provide the logo of the web application.

**favicon.ico** file is used to provide the favicon of the web application.

**index.html** file is used to provide the entry point of the web application.

**%PUBLIC_URL%** This url points to the public folder.

**meta** tag is used to provide the metadata of the web application.

Note: Public folder is accessible everywhere in the application.

### src

It is the source folder of the application. It contains all the files related to the application.

**index.js** file is used to provide the entry point of the application.

**index.css** file is used to provide the styles of the entry point of the application.

**App.js** file is used to provide the root component of the application.

**App.css** file is used to provide the styles of the root component of the application.

**App.test.js** file is used to provide the test cases of the root component of the application.

#### .gitignore

.gitignore file is used to tell git which files or folders to ignore in a project.

#### package-lock.json

`package-lock.json` file contains the exact version of the dependencies of the project. It is not recommended to modify the contents of this file.

#### package.json

`package.json` file contains the dependencies of the project. It is not recommended to modify the contents of this file.
