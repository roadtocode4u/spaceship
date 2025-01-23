---
title: Semantic HTML
description: "Semantic HTML"
hide_table_of_contents: true
---

Semantic HTML was introduced to improve the accessibility and meaning of web content. It provides a set of semantic elements that convey the meaning and structure of the content. These elements help search engines, screen readers, and other devices understand the content better.

:::note
Semantic HTML was introduced in HTML5. It is not supported in older versions of HTML.
:::

**Semantic HTML**
Tags provide a clear structure and meaning to the content.

**Non-Semantic HTML**
Tags do NOT provide any meaning or structure to the content.

### Semantic HTML Tags

| Tag            | Usage                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------- |
| `<header>`     | Defines a header section of a document or a section.                                      |
| `<nav>`        | Defines a set of navigation links.                                                        |
| `<main>`       | Defines the main content of a document.                                                   |
| `<article>`    | Defines an independent self-contained content.                                            |
| `<section>`    | Defines a section in a document.                                                          |
| `<aside>`      | Defines content aside from the content.                                                   |
| `<footer>`     | Defines a footer for a document or a section.                                             |
| `<figure>`     | Defines self-contained content, like illustrations, diagrams, photos, code listings, etc. |
| `<figcaption>` | Defines a caption for a `<figure>` element.                                               |
| `<details>`    | Defines additional details that the user can view or hide.                                |
| `<summary>`    | Defines a visible heading for a `<details>` element.                                      |
| `<mark>`       | Defines marked/highlighted text.                                                          |
| `<time>`       | Defines a date/time.                                                                      |

There are many other semantic HTML tags, but these are the most commonly used.

### Example 1: Navigation Bar

`nav` tag is used to define a set of navigation links. Whenever you have a set of links that are used for navigation purposes, you should use the `nav` tag.

**Non-Semantic HTML**

```html
<div>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</div>
```

**Semantic HTML**

```html
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
```

### Example 2: Header

`header` tag is used to define a header section of a document or a section. It typically contains the heading of the page or section.

**Non-Semantic HTML**

```html
<div>
  <h1>Welcome to my website</h1>
  <p>I am a web developer</p>
</div>
```

**Semantic HTML**

```html
<header>
  <h1>Welcome to my website</h1>
  <p>I am a web developer</p>
</header>
```

### Example 3: Footer

`footer` tag is used to define a footer for a webpage or a section. It typically contains copyright information, contact details, etc.

**Non-Semantic HTML**

```html
<div>
  <p>&copy; All Rights Reserved</p>
</div>
```

**Semantic HTML**

```html
<footer>
  <p>&copy; All Rights Reserved</p>
</footer>
```

### Example 4: Article

`article` tag is used to define an independent self-contained content. It can be a blog post, news article, forum post, etc.

**Non-Semantic HTML**

```html
<div>
  <h1>Blog Title</h1>
  <p>Blog Content</p>
</div>
```

**Semantic HTML**

```html
<article>
  <header>
    <h1>Blog Title</h1>
  </header>
  <section>
    <p>Blog Content</p>
  </section>
</article>
```

### Example 5: Section

`section` tag is used to define a section in a document. It can be used to group related content together.

**Non-Semantic HTML**

```html
<div>
  <h1>About Us</h1>
  <p>Company Information</p>
</div>
```

**Semantic HTML**

```html
<section>
  <h1>About Us</h1>
  <p>Company Information</p>
</section>
```

### Example 6: Aside (Sidebar)

`aside` tag is used to define content aside from the content. It can be used to display a sidebar or a side panel.

**Non-Semantic HTML**

```html
<div>
  <div>Sidebar Content</div>
  <div>Main Content</div>
</div>
```

**Semantic HTML**

```html
<main>
  <aside>Sidebar Content</aside>
  <section>Main Content</section>
</main>
```

### Example 7: Figure and Figcaption

`figure` tag is used to define self-contained content, like illustrations, diagrams, photos, code listings, etc. `figcaption` tag is used to define a caption for a `figure` element.

**Non-Semantic HTML**

```html
<div>
  <img src="image.jpg" alt="Image" />
  <p>Image Description</p>
</div>
```

**Semantic HTML**

```html
<figure>
  <img src="image.jpg" alt="Image" />
  <figcaption>Image Description</figcaption>
</figure>
```

### Example 8: Time

`time` tag is used to define a date/time. It can be used to represent dates, times, or durations.

**Non-Semantic HTML**

```html
<div>
  <p>Published on <span>2023-05-15</span></p>
</div>
```

**Semantic HTML**

```html
<p>Published on <time datetime="2023-05-15">May 15, 2023</time></p>
```

### Example 9: Details and Summary

`details` tag is used to define additional details that the user can view or hide. `summary` tag is used to define a visible heading for a `details` element.

**Non-Semantic HTML**

```html
<div>
  <div>
    <h3>Click to view details</h3>
    <p>Details</p>
  </div>
</div>
```

**Semantic HTML**

```html
<details>
  <summary>Click to view details</summary>
  <p>Details</p>
</details>
```

### Example 10: Mark

`mark` tag is used to define marked/highlighted text.

**Non-Semantic HTML**

```html
<div>
  <p>This is <span>important</span> information.</p>
  <div></div>
</div>
```

**Semantic HTML**

```html
<p>This is <mark>important</mark> information.</p>
```

:::info
Using semantic HTML tags not only improves the accessibility and SEO of your website but also makes your code more readable and maintainable. It is recommended to use semantic HTML tags whenever possible. Also it is not necessary to use all the semantic tags in a single webpage, use them as per the requirement.
:::
