---
title: Iframe
description: "Iframe "
hide_table_of_contents: true
---

# Iframe and Embed Tag

IThe `<iframe>` tag is used to embed content from another webpage or resource within your HTML document.

**Syntax :**

```html
<iframe src=" " height=" " width=" "> </iframe>
```

### Explanation:

- `src`: This attribute specifies the URL or source of the content you want to embed. It can be a webpage, an image, a video, or any other valid web resource.

- `height`: This attribute sets the height of the `iframe` in pixels or as a percentage of the parent container.

- `width`: This attribute sets the width of the `iframe` in pixels or as a percentage of the parent container.

**Code :**

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Iframe</title>
  </head>
  <body>
    <h1>Homepage</h1>
    <iframe src="about.html" height="300px" width="300px"> </iframe>
  </body>
</html>
```

**Output :**

<img src="/html/12/output-1.png" alt="output-1" width="600px"/>

**Code :**

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Iframe</title>
  </head>
  <body>
    <h1>Homepage</h1>
    <iframe src="about.html" height="200px" width="200px"></iframe> <br />
    <br />

    <iframe src="contact.html" height="400px" width="200px"></iframe>
  </body>
</html>
```

**Output :**

<img src="/html/12/output-2.png" alt="output-2" width="600px"/>

## Target Attribute

The `target` attribute is used to specify where the content linked from the iframe should be displayed.

### `target= "_blank"` Attribute

The `_blank` attribute is used to open the linked document in a new tab or window.

**Code :**

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Target Attribute</title>
  </head>
  <body>
    <h1>Iframe</h1>
    <iframe src="" height="400px" width="400px" name="myscreen"> </iframe>

    <br /><br /><br />

    <a href="contact.html" target="myscreen">Contact</a>
    <a href="about.html" target="myscreen">About</a>
  </body>
</html>
```

**Output :**

<img src="/html/12/output-3.png" alt="output-3" width="600px"/>

In this example, an `iframe` is created with a name of `myscreen`. The `Contact` and `About` links use the target attribute to specify that the linked content should be displayed in the `myscreen` iframe.

## Video Tag

**Code :**

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Video Tag</title>
  </head>
  <body>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/BddP6PYo2gs"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </body>
</html>
```

**Output :**

<img src="/html/12/output-6.png" alt="output-8" width="600px"/>

## Map

**Code :**

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Google Map Integration</title>
  </head>
  <body>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980777.5606954987!2d75.94750721102605!3d14.153364207152547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77fd95d4be823%3A0x6e52e05076df36b8!2sHampi%2C%20Karnataka%20583239!5e0!3m2!1sen!2sin!4v1660835732262!5m2!1sen!2sin"
      width="400"
      height="300"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </body>
</html>
```

**Output :**

<img src="/html/12/output-4.png" alt="output-6" width="600px"/>

## Embed Tag

The `<embed>` tag is used to embed non-HTML content, such as PDF files, within an HTML document.

**Syntax :**

```html
<embed src="" />
```

### Explanation:

`src`: This attribute specifies the URL or source of the non-HTML content you want to embed.

**Code :**

```html showLineNumbers=true
<!DOCTYPE html>
<html>
  <head>
    <title>Embed Tag</title>
  </head>
  <body>
    <embed
      src="Homework-3.pdf"
      type="application/pdf"
      height="300px"
      width="300px"
    />
  </body>
</html>
```

**Output :**

<img src="/html/12/output-5.png" alt="output-7" width="600px"/>

In this example, an embed tag is used to embed a PDF file named `Homework-3.pdf` within the HTML document. The type attribute specifies the MIME type of the embedded content.
