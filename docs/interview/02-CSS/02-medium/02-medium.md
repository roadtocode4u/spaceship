### CSS Medium

<details>
  <summary>Explain Inline, Block and Inline Block property in CSS?</summary>

The display property in CSS (Cascading Style Sheets) specifies how an HTML element shows on a webpage. The display property has three common values: **`inline`**, **`block`**, and **`inline-block`**. Let's discuss each of them:
<br/>
<br/>

**1. Inline:**

<ul>

<ul> 
<li>

When an element has **`display:inline;`**, it looks on the same line as the content around it. The width and height features have no effect on them, so they simply cover the correct range of width.

</li>

<li>
Examples of inline elements include

<li>

```html
<span
  >,
  <a
    >,
    <strong
      >, <em>, and <img /> </em>
    </strong>
  </a>
</span>
```

**CSS Declaration:**

</li>

```css showLineNumbers=true
selector {
  display: inline;
}
```

```css showLineNumbers=true
span {
  display: inline;
}
```

</li>
</ul>
</ul>

<br/>

**Block:**

<ul>

<ul>
<li>

When an element has **`display: block;`** used it displays on a new line and fills the available width. Block-level features can have all height and width attributes applied to them.

</li>

<li>
Examples of block elements include

```html
<div>
  ,
  <p>,</p>
  <h1>
    to
    <h6>
      ,
      <ul>
        ,
        <ol>
          , and
          <li>.</li>
        </ol>
      </ul>
    </h6>
  </h1>
</div>
```

</li>

<li>

**CSS Declaration:**

</li>

```css showLineNumbers=true
selector {
  display: block;
}
```

```css showLineNumbers=true
div {
  display: block;
}
```

</ul>
</ul>
<br/>

**Inline-Block:**

<ul>
<li>

Elements with **`display: inline-block;`** can have a width and height specified, but they normally display on the same line as the content above them. It allows them to remain a part of the inline content flow while having block-level attributes.

</li>

<li>
When you want an element to be visibly inline but also need to apply block-level values, like width or height, this is a helpful tool.
</li>

<li>
Examples of inline-block elements are often

```html showLineNumbers=true
<img class="inline-block" src="example.jpg" alt="Example Image" />
```

elements when you want them to align horizontally with text.

</li>
<li>

**CSS Declaration:**

</li>

```css showLineNumbers=true
selector {
  display: inline-block;
}
```

```css showLineNumbers=true
img {
  display: block;
}
```

</ul>

<br/>

**Example**

```html showLineNumbers=true
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .inline-example {
        display: inline;
        border: 1px solid red;
        padding: 5px;
      }

      .block-example {
        display: block;
        border: 1px solid blue;
        padding: 10px;
      }

      .inline-block-example {
        display: inline-block;
        border: 1px solid green;
        padding: 8px;
      }
    </style>
  </head>
  <body>
    <span class="inline-example">Inline</span>
    <div class="block-example">Block</div>
    <div class="inline-block-example">Inline-Block</div>
  </body>
</html>
/>
```

In this example, you can observe how each element behaves based on its display property. The inline element (span) only takes up as much space as necessary, the block element (div) takes up the full width, and the inline-block element (div) flows inline but can have dimensions and spacing.

</details>

<details>
<summary>What is used of media query ?</summary>
The Media query in CSS is used to create a <b>responsive web design</b>. It means that the view of a web page differs from system to system based on screen or media types.Device breakpoints are points where a webpage's design adjusts for different devices, like phones, tablets, and desktops.

<br/><br/>
Here's a basic example of using media queries with device breakpoints in CSS:
<br/>

1. Small mobile device : less than 600px<br/>
2. Normal mobile device : greater than 600px and less than 768px<br/>
3. Tablets : greater than 768px and less than 992px<br/>
4. Laptops / desktops : greater than 992px and less than 1200px<br/>
5. TV/Large desktop : greater than 1200px<br/><br/>

<b>max-width:-</b> The max-width are specifies the maximum width of a particular device.
<br/>

<b>Syntax:-</b>

```html
@media screen and (max-width: 600px) { }
```

<b>min-width:-</b>The min-width are specifies the minimum width of a particular device.
<br/>

<b>Syntax:-</b>

```html
@media screen and (min-width: 600px) { }
```

<b>min-width and max-width at same time</b>
<br/>

<b>Syntax:-</b>

```html
@media screen and (min-width: 600px) and (max-width: 800px) { }
```

<b>For example :</b>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .btn {
        background-color: black;
        color: white;
        width: 300px;
        height: 80px;
        font-size: 40px;
      }
      /* Mobile Devices */

      @media screen and (min-width: 600px) and (max-width: 768px) {
        .btn {
          background-color: blue;
          font-size: 20px;
        }
      }

      /* Tablet Devices */

      @media screen and (min-width: 769px) and (max-width: 992px) {
        .btn {
          background-color: pink;
          color: black;
        }
      }

      /* Dekstop device */

      @media screen and (min-width: 993px) and (max-width: 1200px) {
        .btn {
          background-color: red;
        }
      }
    </style>
  </head>

  <body>
    <button class="btn">Button</button>
  </body>
</html>
```

</details>
