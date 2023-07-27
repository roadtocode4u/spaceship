---
title: Text Align and Font Family
description: Text Align and Font Family
hide_table_of_contents: true
---

## Text-align

The `text-align` property is used to specify the horizontal alignment of the text within its containing element. It allows you to control how the text is aligned, whether it's aligned to the `left`, `right`, `center`, or `justified`.

**There are four values for the `text-align` property:**

1. **`text-align: left;` :** This value aligns the text to the left edge of the containing element. The text will be flush with the left side, and any remaining space will be on the right side.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Text Align</title>
    <style>
      .box {
        width: 600px;
        background-color: aquamarine;
        border: 2px solid black;
        text-align: left;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      makea type specimen book.
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-1.png" alt="output-1" width="600px"/>

2. **`text-align: right;`:** This value aligns the text to the right edge of the containing element. The text will be flush with the right side, and any remaining space will be on the left side.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Text Align</title>
    <style>
      .box {
        width: 600px;
        background-color: aquamarine;
        border: 2px solid black;
        text-align: right;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      makea type specimen book.
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-2.png" alt="output-2" width="600px"/>

3. `text-align: center;` : This value centers the text horizontally within the containing element. The text will be evenly spaced between the left and right edges.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Text Align</title>
    <style>
      .box {
        width: 600px;
        background-color: aquamarine;
        border: 2px solid black;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      makea type specimen book.
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-3.png" alt="output-3" width="600px"/>

4. `text-align: justify;`: This value justifies the text, meaning it spreads the text evenly between the left and right edges of the containing element. It adjusts the spacing between words and characters to create a clean, straight edge on both sides.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Text Align</title>
    <style>
      .box {
        width: 600px;
        background-color: aquamarine;
        border: 2px solid black;
        text-align: justify;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      makea type specimen book.
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-4.png" alt="output-4" width="600px"/>

## Font Family

The `font-family` property is used to specify the font family for the text content of an element. It allows you to define a prioritized list of font families to be used for rendering the text. If the first font is not available, the browser will try the next one in the list, and so on.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Text Align</title>
    <style>
      .box {
        width: 600px;
        border: 2px solid black;
        text-align: justify;
      }
      .highlight {
        background-color: yellow;
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      <span class="highlight"
        >Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,</span
      >when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the
      leap into electronic typesetting, remaining essentially unchanged.
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-5.png" alt="output-5" width="600px"/>

In the example above, the font family is set to `Arial, sans-seri`. This means that the browser will first attempt to use the `Arial` font. If Arial is not available on the user's system, the browser will use a generic `sans-serif` font as a fallback.

You can specify multiple font families separated by commas. The browser will try each font family in order until it finds one that is available.

It's important to note that the font families specified must be installed on the user's system or available through web fonts. Commonly used generic font families include `serif`, `sans-serif`, `monospace`, `cursive`, and `fantasy`. These generic font families are available on most systems and provide a fallback option if the specified font is not available.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Text Align</title>
    <style>
      .box {
        width: 600px;
        border: 2px solid black;
        text-align: justify;
      }
      .highlights {
        background-color: aqua;
        font-family: cursive;
      }
    </style>
  </head>
  <body>
    <div class="box">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsumhas been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
      <span class="highlights"
        >It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.</span
      >
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-6.png" alt="output-6" width="600px"/>

## Inpage Navigation

Inpage navigation is the process of moving between different webpages or sections within a webpage. It allows users to explore and access various content or information available on the webpage.

**For example:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
    <style>
      * {
        scroll-behavior: smooth;
      }
    </style>
  </head>
  <body>
    <a href="#intro">Intro</a>
    <a href="#features">Features</a>
    <a href="#testimoal">Testimoal</a>
    <a href="#about">About us</a>
    <a href="#wwd">What we do?</a>

    <h1 id="intro">Intro🖥️</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae autem
      velit ducimus rerum iure reiciendis eum fugit optio at, perspiciatis
      tempora a, non vero earum soluta, corporis doloremque dolorem qui.
    </p>

    <h2 id="features">Features🤩</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      voluptates iste, distinctio et obcaecati non nesciunt ea ut dolorem porro
      dolores optio excepturi eius minus. Voluptates nulla voluptatem libero
      distinctio!
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum
      iusto perspiciatis consequuntur voluptatem explicabo. Non, numquam alias?
      Dolorum doloremque vel unde. Quasi, officiis voluptatibus! Voluptates,
      veritatis. Maxime, voluptas odio.
    </p>

    <h2 id="testimoal">Testimoal</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam
      consectetur nemo pariatur, natus, suscipit magnam hic modi obcaecati sunt
      earum, sapiente veniam nisi vero sed cupiditate sint quae odio!
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt
      aliquid eaque voluptas placeat minus nisi, libero ex distinctio corporis
      at. Enim nesciunt laboriosam distinctio ipsam vitae suscipit pariatur
      veritatis.
    </p>

    <h2 id="about">About us💫</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
      sapiente mollitia amet minima dolorem at harum dolor doloremque natus
      nesciunt eveniet aperiam earum quam, autem veritatis ipsa iste.
      Necessitatibus, eligendi.
    </p>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      adipisci at cumque asperiores dolores? Quis sunt at magni reiciendis
      adipisci quidem eaque voluptatem incidunt, voluptatibus error illo quae
      quaerat provident?
    </p>

    <h2 id="wwd">🏏What we do?</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde non
      dolores! Vitae perspiciatis molestias quam, repudiandae distinctio labore
      accusantium. Ipsam fugit id quasi officia ad error dolore, esse quae?
    </p>

    <a href="#top"> Scroll to top </a>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-7.png" alt="output-7" width="600px"/>

### Font-Awesome

Font Awesome is an iconic font and CSS toolkit that used by web developers to enhance the functionality of websites and web applications. To use Font Awesome you include the Font Awesome CSS file in your HTML file which provides CSS classes corresponding to each icon.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Awesome font</title>
    <style>
      .khud-ka-class {
        color: tomato;
        font-size: larger;
      }
      .tie {
        color: blue;
      }
    </style>
    <script
      src="https://kit.fontawesome.com/fabfdf08cb.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <h2>Awesome Font</h2>
    <i class="fa-brands fa-fort-awesome-alt khud-ka-class"></i>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam velit
      odio quibusdam quidem recusandae eligendi officiis quas dignissimos
      similique quo explicabo architecto nemo minima earum aperiam, est sunt
      aspernatur numquam.
    </p>

    <i class="fa-brands fa-black-tie tie"></i>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
      consequuntur, illum ut ullam assumenda rerum eaque facere iste autem
      maxime non quaerat est qui! Quas, quaerat. Voluptatibus minima dolor
      facere.
    </p>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-8.png" alt="output-8" width="600px"/>

### Verical Alignment

Vertical alignment is a concept that deals with the positioning of elements along the `vertical` axis typically within container or parent element. It determines how content or objects are vertically centered or positioned relative to each other.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vertical Alignment</title>
    <style>
      .parent {
        background-color: tomato;
        padding: 0;
      }

      .card-a {
        display: inline-block;
        width: 200px;
        border: 2px solid black;
        background-color: aliceblue;
        height: 140px;
        vertical-align: bottom;
      }

      .card-b {
        border: 2px solid black;
        width: 200px;
        background-color: aliceblue;
        display: inline-block;
        height: 100px;
        vertical-align: bottom;
      }

      .card-c {
        border: 2px solid black;
        width: 200px;
        background-color: aliceblue;
        display: inline-block;
        height: 200px;
        vertical-align: middle;
      }
    </style>
  </head>

  <body>
    <div class="parent">
      H
      <div class="card-a">Card A</div>

      <div class="card-b">Card B</div>

      <div class="card-c">Card C</div>
    </div>
  </body>
</html>
```

**Output :**

<img src="/icp/18/output-10.png" alt="output-10" width="600px"/>
