# Project Folder Structure and Path Navigation

This guide explains **how to organize project files** and **how to navigate folders using HTML paths**. Understanding these basics is essential for beginners to correctly **link web pages** and **display images** without errors.

---

## 1. What Is Folder Navigation in HTML?

Folder navigation means telling the browser **where a file is located** using a _path_.

Paths are mainly used in:

- `<a>` tag → to link one page to another
- `<img>` tag → to display images

If the path is incorrect, links will not open and images will not appear.

---

## 2. Standard Project Folder Structure

A clean and beginner-friendly project structure looks like this:

```
project/
│
├── index.html        # Main (Home) page
├── about.html        # Another main-level page
│
├── pages/            # Folder for extra pages
│   └── contact.html
│
└── images/           # Folder for images
    └── logo.png
```

### Why This Structure Is Important

- Keeps files organized
- Makes paths easy to understand
- Prevents confusion as the project grows

---

## 3. Project Rules and Naming Conventions

### a) `index.html` Is the Root File

- `index.html` is the **starting point** of your website
- Browsers automatically open `index.html` when a folder or site is loaded

Example:

```
example.com → loads index.html automatically
```

---

### b) Use Centralized Folders

- **Images:** Store _all_ images inside the `images/` folder
- **Pages:** Store all extra HTML pages inside the `pages/` folder

This keeps your project clean and professional.

---

### c) Case Sensitivity Matters

File and folder names must match **exactly**.

Incorrect

```html
<img src="./Images/logo.png" />
```

Correct

```html
<img src="./images/logo.png" />
```

> Tip: Always use **lowercase names** for files and folders.

---

## 4. Path Navigation Symbols (Very Important)

| Symbol    | Meaning            | Explanation                                            |
| --------- | ------------------ | ------------------------------------------------------ |
| `./`      | Current folder     | Refers to the folder where the current file is located |
| `folder/` | Go inside a folder | Moves into a sub-folder                                |
| `../`     | One folder back    | Moves to the parent folder                             |
| `../../`  | Two folders back   | Moves up two folder levels                             |

---

## 5. Practical Examples

## Example 1: Linking Files in the Same Folder

### File: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Home Page</title>
  </head>
  <body>
    <h1>Welcome to Home Page</h1>

    <p>This page links to another file in the same folder.</p>

    <a href="./about.html">Go to About Page</a>
  </body>
</html>
```

---

### File: `about.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>About Page</title>
  </head>
  <body>
    <h1>About Page</h1>

    <p>This file is in the same folder as index.html.</p>

    <a href="./index.html">Back to Home</a>
  </body>
</html>
```

---

## Example 2: Linking a File Inside a Folder

### File: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Home Page</title>
  </head>
  <body>
    <h1>Home Page</h1>

    <p>Click below to open Contact page inside pages folder.</p>

    <a href="./pages/contact.html">Contact Us</a>
  </body>
</html>
```

---

## Example 3: Moving One Folder Back (`../`)

### File: `pages/contact.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Contact Page</title>
  </head>
  <body>
    <h1>Contact Page</h1>

    <p>This file is inside the pages folder.</p>

    <!-- Link back to index.html -->
    <a href="../index.html">Go to Home</a>

    <br /><br />

    <!-- Load image from images folder -->
    <img src="../images/logo.png" alt="Website Logo" width="200" />
  </body>
</html>
```

---

## Example 4: Moving Two Folders Back (`../../`)

### File Location

`project/folder1/folder2/demo.html`

### File: `demo.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Demo Page</title>
  </head>
  <body>
    <h1>Demo Page</h1>

    <p>This file is two folders deep.</p>

    <a href="../../index.html">Go to Home</a>
  </body>
</html>
```

---

## 6. Common Mistakes & Best Practices

Small mistakes in paths are very common for beginners. Use the table below to avoid them.

| Problem         | Incorrect Example     | Correct Example      |
| --------------- | --------------------- | -------------------- |
| Extra slashes   | `pages//contact.html` | `pages/contact.html` |
| Missing `../`   | `images/logo.png`     | `../images/logo.png` |
| Wrong case      | `./Images/Logo.PNG`   | `./images/logo.png`  |
| Spaces in names | `my images/pic.jpg`   | `my-images/pic.jpg`  |

Happy Coding!
