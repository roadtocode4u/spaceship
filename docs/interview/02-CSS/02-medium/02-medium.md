### CSS Medium

<details>
  <summary>Explain Inline, Block and Inline Block property in CSS?</summary>
  TODO: add answer @AbhijitKokat
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
