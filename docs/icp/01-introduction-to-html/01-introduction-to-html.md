---
title: Introduction to HTML
description: "Introduction to HTML"
hide_table_of_contents: true
---

# Introduction to HTML

### What is HTML

> **HTML** is the language are used to create website structure.

HTML stands for **Hyper Text Markup Language**. HTML is the standard markup language and is used to create Web pages. It was created by `Tim Berners Lee` and released in 1993.

Mainly we will be using two type of softwares while developing webpages.

1. Editor: for writing code.
2. Browser: for checking output from the code.

### Browser

<img src="/icp/01/chrome.png" alt="chrome" width="50px"/>

There are many different web browsers, like Google Chrome, Safari, and Mozilla Firefox. Browsers are used to visit websites. Browser are send request to server (computer) and server give response to browser then browser will show content.

### Editor

<img src="/icp/01/vs-code.png" alt="chrome" width="50px"/>

Editor is a simple software where we can create and edit files. We will be using VS Code editor in this course.

### Steps to download VS Code

1. Download the latest version of VS Code from the official website: https://code.visualstudio.com/download
2. Double-click the downloaded file to start the installation process.
3. Follow the prompts to complete the installation. This may include accepting the license agreement and choosing the location to install VS Code.
4. Once the installation is complete, you can launch VS Code by clicking on its icon or by searching for it in your operating system's Start menu.

### Steps to run the first webpage

**To write the Following HTML code in a new file in the VS Code editor, follow these steps:**

1. Create a new folder on your computer where you want to store your project files.
2. Open VS Code editor on your computer.
3. Click on `File` in the top menu bar.

<img src="/icp/01/step-1.png" alt="step-1" width="600px"/>

4. Click on `Open Folder` in the drop-down menu.

<img src="/icp/01/step-2.png" alt="step-2" width="600px"/>

5. Navigate to the folder you created in step 1 and click on `Open`.

6. In the VS Code editor, on the right-hand side of your folder name, click on the `New File` option. This will allow you to create a new file within your folder.

<img src="/icp/01/step-3.png" alt="step-3" width="600px"/>

7. Give your file a name with ".html" extension (e.g. `suraj.html`).

<img src="/icp/01/step-4.png" alt="step-4" width="600px"/>

8. Now click on your file name to open the file, then Write the following HTML code into that file.

<img src="/icp/01/step-5.png" alt="step-5" width="600px"/>

9. Click on `File` in the top menu bar again.

<img src="/icp/01/step-1.png" alt="step-1" width="600px"/>

10. Click on the `Save` button.

<img src="/icp/01/step-6.png" alt="step-6" width="600px"/>


**Now you have created a new HTML file and save your file. To view the output of your HTML code, follow these steps:**

1. Open your folder in your local system where you saved your HTML file.

<img src="/icp/01/step-7.png" alt="step-7" width="600px"/>

1. Right-click on the HTML file you just created.

<img src="/icp/01/step-8.png" alt="step-8" width="600px"/>

2. Click on `Open with` in the drop-down menu.

<img src="/icp/01/step-9.png" alt="step-9" width="600px"/>

3. Choose a web browser of your choice (e.g. Google Chrome, Mozilla Firefox, etc.).

<img src="/icp/01/step-10.png" alt="step-10" width="600px"/>

4. The browser will open and display the output of your HTML code.

<img src="/icp/01/step-11.png" alt="step-11" width="600px"/>

### Tag in HTML

Tags are used to provide meaning/effect to content.Also it provides special information about content.

`<tagname>` 👈 Opening Tag

`</tagname>` 👈 Closing Tag

### First Webpage

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Frist Webpage</title>
  </head>
  <body>
    Hello Students 👋 Good Evening, Welcome to ICP 5.0 💫❤️
  </body>
</html>
```

### Explanation of the above example

`<!DOCTYPE html>`: This is not a tag but it is the declaration for browser that we are using HTML5.

`<html> </html>`: It is root element . It defines the Html page.

`<head> </head>`: In head tag we describe the identity of webpage.

`<title> </title>`: This tag specifies a title for the HTML page.

`<body> </body>`: Define the body of webpage and content of this body will be visible on browser's content area.

**Output :**

<img src="/icp/01/step-11.png" alt="step-11" width="600px"/>

Cheers you have create your first webpage 🍻

<img src="/icp/01/minion.gif" alt="Cheers you have create your first webpage 🍻" />
