---
title: Introduction to HTML
description: "Introduction to HTML"
hide_table_of_contents: true
---

# Introduction to HTML

### What is HTML

> HTML stands for **Hyper Text Markup Language**. It is the standard markup language used to create web pages. HTML provides a set of tags and attributes that define the structure and content of a webpage. It was created by Tim Berners-Lee and released in 1993.

1. Editor: for writing code.
2. Browser: for checking output from the code.

### Browser

<img src="/icp/01/chrome.png" alt="chrome" width="50px"/>

Browsers are software applications used to access and view websites. Some popular browsers include Google Chrome, Safari, and Mozilla Firefox. When a user enters a URL or clicks on a link, the browser sends a request to the server where the website is hosted. The server responds with the webpage content, and the browser renders and displays it to the user.

### Editor

<img src="/icp/01/vs-code.png" alt="chrome" width="50px"/>

An editor is a software tool used for writing and editing code. In web development, an editor is used to create HTML files and other related files such as CSS and JavaScript. One commonly used editor is Visual Studio Code (VS Code). It provides features like syntax highlighting, code suggestions, and debugging capabilities, making it popular among web developers.

## Search Engine Optimization (SEO)

Search Engine Optimization (SEO) is the practice of optimizing a website to improve its visibility and ranking in search engine results pages (SERPs). While HTML (Hypertext Markup Language) is the standard markup language for creating web pages, it plays a crucial role in implementing SEO techniques. Here are some key aspects of SEO in HTML:

1.**Title Tags**: The title tag, defined within the `<title> ` element in the HTML `<head>` section, is an essential HTML element for SEO. It represents the title of a web page and appears as the clickable link in search engine results. It is advisable to include relevant keywords in the title tag to optimize it for search engines.

**Example:**

```html
<head>
  <title>My Website - Welcome</title>
</head>
```

2. **Heading Tags:** HTML provides six levels of heading tags, from `<h1>` to `<h6>`, to structure content hierarchy on a web page. Search engines consider heading tags as important signals for understanding the page's structure and content. Properly utilizing heading tags, including relevant keywords, can enhance the SEO of your HTML.

**Example:**

```html
<body>
  <h1>Main Heading</h1>
  <h2>Subheading</h2>
  <h3>Subheading</h3>
</body>
```
3. **Alt Text for Images**: When including images on your web page, using the alt attribute within the `<img>` tag provides alternative text that describes the image's content. This text is important for accessibility purposes and helps search engines understand the context of the image.

**Example:**

```html
<img src="image.jpg" alt="Description of the image">
```

These are just a few examples of how HTML can be optimized for search engines. SEO also involves off-page factors like building backlinks, social signals, and user engagement metrics. Remember that SEO is an ongoing process, and staying up to date with the latest best practices and algorithm changes is essential for maintaining and improving your website's search engine visibility.

### Steps to download VS Code
  
  To download and install VS Code, follow these steps:  
1. Visit the official website of Visual Studio Code at https://code.visualstudio.com/download.  
2. Download the latest version of VS Code for your operating system (Windows, macOS, or Linux).
3. Once the download is complete, double-click the downloaded file to start the installation process.
4. Follow the installation prompts, such as accepting the license agreement and choosing the installation location.  
5. After the installation is finished, you can launch VS Code by clicking on its icon or searching for it in your operating system's applications or programs menu.

### HTML Tags

HTML uses tags to define the structure and formatting of content on a webpage. Tags are enclosed in angle brackets `< >` and can have attributes to provide additional information. Here is an example of an HTML tag

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
    Hello Students 👋 Good Evening, Welcome to ICP 4.0 💫❤️
  </body>
</html>
```

### Explanation of the above example

`<!DOCTYPE html>`: This declaration informs the browser that the webpage is written in HTML5.

`<html> </html>`: This is the root element that defines the HTML document.

`<head> </head>`: The head element contains meta-information about the webpage, such as the title.

`<title> </title>`: The title element sets the title of the webpage, which appears in the browser's title bar or tab.

`<body> </body>`:  The body element contains the visible content of the webpage that will be displayed in the browser's content area.

**Output :**

<img src="/icp/01/output-1.png" alt="output-1" width="600px"/>

Congratulations! You have created your first webpage.  🍻

<img src="/icp/01/minion.gif" alt="Cheers you have create your first webpage 🍻" />
