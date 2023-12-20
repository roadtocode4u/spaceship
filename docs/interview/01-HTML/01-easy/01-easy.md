### HTML Easy

<details>
  <summary>What is HTML stands for?</summary>

HTML stands for Hyper Text Markup Language. It is the standard markup language used to create web pages. HTML provides a set of tags and attributes that define the structure and content of a webpage. It was created by Tim Berners-Lee and released in 1993.

</details>

<details>
  <summary>What is HTML5?</summary>
HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.
HTML5 was first released in a public-facing form on 22 January 2008.
</details>

<details>
  <summary>What is DOCTYPE?</summary>
  
  The HTML document type declaration, also known as DOCTYPE.
All HTML documents must start with a DOCTYPE declaration.The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.
The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in.

In HTML 5, the declaration is simple:

```html
<!DOCTYPE html>
```

</details>

<details>
  <summary>Difference between inline, block, and inline-block elements.?</summary>
 <ul>
<li>

**Display Properties:**<br/>
The display property in CSS is used to control the layout and behavior of elements. There are three commonly used display properties: inline, block, and inline-block.

</li>
<li>

**_Inline Elements_**<br/>
Inline elements have the following characteristics:<br/>

1.They do not start from a new line.<br/>
2.The height and width properties cannot be applied to inline elements.<br/>
3.Inline elements only occupy the space required for their content.<br/>

Some examples of inline elements include `<span>, <a>, <img>, <sub>, <sup>, and <label>.`

`<button>` button starts from same line it can not start from new line. button takes only required space. but we can set height and width to button. That's the reason button is not inline-element.

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>inline-element</title>
    <style>
      .rtc {
        background-color: aquamarine;
        height: 100px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <span class="rtc">RTC</span>
    <span class="rtc">ICP</span>
    <span class="rtc">Offline Classroom program</span>
  </body>
</html>
```

</li>

<li>

**_Block Elements_**<br/>
Block elements exhibit the following characteristics:<br/>

1.They always start from a new line.<br/>
2.Block elements occupy the full available horizontal space.<br/>
3.The height and width properties can be assigned to block elements.<br/>

Here are some of the block elements: `<div>, <p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <ul>, <ol>, <li>`,

Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>block element</title>
    <style>
.container{
    background-color: yellow;
    width: 500px;
    height: 100px;
}
.box{
   background-color: red;
   width: 200px;
   height: 100px;
}
body{
    margin: 0;
}
    </style>
</head>
<body>
    <div class="container">
        Hi, I am learning css from road to code.
    </p>
    <div class="box">
      Hello, I am a web developer.
    </div>
</body>
</html>

```

</li>

<li>

**_Inline-Block Elements_**<br/>
Elements with the display property set to inline-block exhibit the combined behavior of inline and block elements. They possess the following characteristics:<br/>

1.Inline-block elements do not start from a new line.<br/>
2.The height and width properties can be assigned to inline-block elements.<br/>
3.Inline-block elements occupy the required space based on their content.

Some inline-block elements are `<button>, <input>`

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Inline Block Element</title>
  </head>
  <style>
    .a {
      background-color: red;
    }

    .b {
      background-color: aquamarine;
    }

    .c {
      background-color: brown;
      color: white;
    }

    .card {
      height: 80px;
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      display: inline-block;
      width: 150px;
    }
  </style>

  <body>
    <div class="a card">This is a card</div>
    <div class="b card">This is b card</div>
    <div class="c card">This is c card</div>
  </body>
</html>
```

</li>

 </ul>

</details>
