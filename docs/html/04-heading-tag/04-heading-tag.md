---
title: Heading Tags
description: "Heading Tags"
hide_table_of_contents: true
---

# Heading Tags

In HTML, heading tags are **used to define headings or titles** for sections of a webpage. They provide a hierarchical structure to the content and help in organizing and formatting the text. There are six levels of heading tags available in HTML, ranging from `<h1>` to `<h6>`.

The usage of heading tags is as follows:

**.** `h1` : This is the highest level heading and **represents the main heading of a webpage**. It should be used once per page and usually describes the overall topic or purpose of the page.

**.** `<h2>` to `<h6>` : These are lower-level headings that can be used to represent subheadings or sections within the page. `<h2>` is used for major sections, `<h3>` for subsections within those sections, and so on.

It's important to note that the visual appearance of heading tags is typically defined by CSS (Cascading Style Sheets). By default, heading tags have different font sizes and may be styled differently depending on the browser's default styles or the CSS applied to them.

**Code :**

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Basic Tags</title>
  </head>
  <body>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </body>
</html>
```

**Output :**

<img src="/html/04/output-1.png" alt="output-1" width="600px"/>

:::danger
Do not use heading tags to set font size of your text. It will create negative impact on Search Engine Optimization(SEO).
:::

:::info
In later part we will learn how to change font size using CSS.
:::
