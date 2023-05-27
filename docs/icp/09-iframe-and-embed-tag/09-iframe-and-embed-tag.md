---
title: Iframe
description: "Iframe "
hide_table_of_contents: true
---

# Iframe and Embed Tag

Iframe tag is used for to integrate other webpage or the resource of another webpage.

**Syntax :**

```html
<iframe src=" " height=" " width=" "> </iframe>
```

**Code :**

```html
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

<img src="/icp/09/output-1.png" alt="output-1" width="600px"/>

**Code :**

```html
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

<img src="/icp/09/output-2.png" alt="output-2" width="600px"/>

## Target Attribute

Target attribute are used to a name or a keyword that indicates where to display the content.

### `target= "_blank"` Attribute

Target \_blank attribute are used to open the linked document in a new tab.

**Code :**

```html
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

<img src="/icp/09/output-3.png" alt="output-3" width="600px"/>

## Video Tag

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Video</title>
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

<img src="/icp/09/output-8.png" alt="output-8" width="600px"/>

## Map

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Map</title>
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

<img src="/icp/09/output-6.png" alt="output-6" width="600px"/>

## Embed Tag

Embed tag are used to open non html content like pdf file.

**Syntax :**

```html
<embed src="" />
```

**Code :**

```html
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

<img src="/icp/09/output-7.png" alt="output-7" width="600px"/>
