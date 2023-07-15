---
title: Heading Tags
description: "Heading Tags"
hide_table_of_contents: true
---

# Heading Tags

In HTML, heading tags are used to define headings or titles for sections of a webpage. They provide a hierarchical structure to the content and help in organizing and formatting the text. There are six levels of heading tags available in HTML, ranging from `<h1>` to `<h6>`.

The usage of heading tags is as follows:  

**.**  `h1`  :  This is the highest level heading and represents the main heading of a webpage. It should be used once per page and usually describes the overall topic or purpose of the page.  

**.** `<h2>` to `<h6>` : These are lower-level headings that can be used to represent subheadings or sections within the page. `<h2>` is used for major sections, `<h3>` for subsections within those sections, and so on.  

It's important to note that the visual appearance of heading tags is typically defined by CSS (Cascading Style Sheets). By default, heading tags have different font sizes and may be styled differently depending on the browser's default styles or the CSS applied to them.

**Here's an example of how heading tags can be used in an HTML document :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Heading Tags Example</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>This is some content under the main heading.</p>
    
    <h2>Subheading 1</h2>
    <p>This is some content under subheading 1.</p>
    
    <h3>Subheading 2</h3>
    <p>This is some content under subheading 2.</p>
    
    <h3>Subheading 3</h3>
    <p>This is some content under subheading 3.</p>

    <h4>Subheading 4</h4>
    <p>This is some content under subheading 4.</p>

    <h5>Subheading 5</h5>
    <p>This is some content under subheading 5.</p>

    <h6>Subheading 6</h6>
    <p>This is some content under subheading 6.</p>
  </body>
</html>
```

**Output :**

<img src="/icp/02/output-2.png" alt="output-2" width="600px"/>
