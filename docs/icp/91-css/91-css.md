---
title: CSS Interview Questions
description: "CSS Interview Questions"
hide_table_of_contents: true
---

<details>
<summary>1. What is CSS?</summary>
<p>

CSS stands for **Cascading Style Sheets**. It is used to design webpages and control the visual appearance of HTML elements. CSS describes how HTML elements should be displayed on different devices such as desktops, laptops, tablets or other media.

</p>

</details>

<details>
<summary>2. How can you include CSS in an HTML document?</summary>
<p>

To include CSS (Cascading Style Sheets) in an HTML document, there are a few different methods you can use. Here are the main approaches:

**Inline CSS :** You can apply CSS directly to individual HTML elements by using the style attribute within the element's opening tag. For example:

```css
<p style="color: blue; font-size: 16px;">This is a paragraph with inline CSS.</p>
```

In this example, the style attribute is used to define the CSS properties for the `<p>` element.

**Internal CSS :** You can include CSS within the `<style>` tags in the `<head>` section of your HTML document. This method allows you to define CSS rules that apply to multiple elements in the same HTML file. For example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Internal CSS Example</title>
    <style>
      p {
        color: blue;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <p>This is a paragraph with internal CSS.</p>
    <p>This is another paragraph with internal CSS.</p>
  </body>
</html>
```

In this example, the CSS rules within the `<style>` tags will be applied to all `<p>` elements in the HTML file.

**External CSS :** You can create a separate CSS file with a .css extension and link it to your HTML document using the `<link>` tag. This method is recommended for larger projects or when you want to reuse the same styles across multiple HTML files. Here's an example:

HTML file Name (index.html)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>External CSS Example</title>
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <p>This is a paragraph with external CSS.</p>
    <p>This is another paragraph with external CSS.</p>
  </body>
</html>
```

CSS file Name (styles.css)

```css
p {
  color: blue;
  font-size: 16px;
}
```

In this example, the `<link>` tag in the HTML file references the external CSS file `styles.css`, which contains the CSS rules for the `<p>` elements.

By using any of these methods, you can apply CSS styles to your HTML elements, enabling you to control the presentation, layout, and design of your web pages.

</p>
</details>

<details>
  <summary>3. What is border style in CSS and which properties are included in it?</summary>
  <p>

A border is a decorative or structural element that can be added to HTML elements to visually separate them from other elements. It is a line that surrounds the content of an element and can be customized in terms of color, width, and style.

`border-style` : defines the style of the border line.

For example,

```html
border-style: solid;
```

This line of code sets the style of the border to solid. Think of it as drawing a continuous line around the element. There are other styles available like dashed lines, dotted lines, and more, but here we are using a solid line.

`border-color` : sets the color of the border.

```css
border-color: aqua;
```

This line of code determines the color of the border. In this case, it sets the border color to aqua, which is a light blue color. You can choose any color you like by replacing aqua with the color of your choice.

`border-width` : sets the thickness or width of the border.

```css
border-width: 5px;
```

In the above example, This line of code sets the thickness or width of the border. The value `5px` means that the border will have a width of `5px`.

  </p>

</details>

<details>
<summary>4. What are the difference between Inline, Block and Inline-block?</summary>
<p>

| Inline                             | Block                             | Inline-block                     |
| ---------------------------------- | --------------------------------- | -------------------------------- |
| Does notStart from new line.       | Start from new line.              | Start from same line.            |
| Take required space.               | Take complete space horizontally. | Take required space.             |
| We can't provide height and width. | We can provide height and width.  | We can provide height and width. |

</p>

</details>

<details>
<summary>5. Could you explain what selectors are in CSS and how they function?</summary>
<p>
  
Yes, Selectors in CSS are patterns that define which elements in an HTML document should be styled, and they function by selecting specific elements based on their classes, IDs, tag names or other attributes.

**i. Class Selector :** The class selector selects elements based on their class attribute. It is denoted by a dot `(.)` followed by the class name.

For Example,

```css
.box-text {
  color: ;
}
```

**ii. ID Selector :** The ID selector selects elements based on their ID attribute. It is denoted by a hash `(#)` followed by the ID name.

For Example,

```css
#box-text {
  color: red;
}
```

**iii. Tagname Selector :** Tagname selector selects HTML elements based on their tag names. For example, h1, h2, p, etc.

For Example,

```css
h1 {
  color: red;
}
```

</p>

</details>

<details>
<summary>6. How would you change the font style and size using CSS?</summary>
<p>

To change the font style and size using CSS, you can use the `font-family` and `font-size` properties.

1. **Changing the Font Style :**
   You can specify the desired font family for an element using the `font-family` property.

```css
font-family: sans-serif;
```

In above example, we can applied font-family property to change the font style of text.

2. **Changing the Font Size :**
   You can adjust the font size of an element using the `font-size` property.

```css
font-size: 30px;
```

In above example, we can applied font-size property to change the font size of text we can applied value `30px`.

</p>

</details>

<details>
  <summary>7. What are the different types of border styles in CSS?</summary>
  <p>

There are four types of border style in CSS : solid, double, dashed and dotted.

`solid` : Creates a continuous line.👉\_\_\_

For Example,

```css
border: solid 4px black;
```

`double` : Creates two parallel lines. 👉 ====

For Example,

```css
border: double 4px black;
```

`dashed` : Creates a series of short dashes. 👉 ------

For Example,

```css
border: dashed 4px black;
```

`dotted` : Creates a series of small dots.👉 ..........

For Example,

```css
border: dotted 4px black;
```

  </p>

</details>

<details>
  <summary>8. What is the use of the border-radius property in CSS and how we used this property?</summary>
  <p>

The border-radius CSS property is used to round the corners of an element's outer border edge. It provides a way to give elements a rounded appearance.

You can provide value to each corner :
For example,

```css
border-radius: 0px 50px 0px 50px;
```

The 1st value applies to the top-left corner. The 2nd value applies to the top-right corner. The 3rd value applies to the bottom-right corner. The 4th value applies to the bottom-left corner.

  </p>
</details>

<details>
  <summary>9. How would you horizontally and vertically center align an element using CSS?</summary>
  <p>

To center align an element horizontally and vertically using CSS, You can use the following CSS properties : `display: flex;` `justify-content: center;` `align-items: center;`

For Example

```css
.element {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

  </p>

</details>

<details>
  <summary>10. How can you add a background color or image to an element using CSS?</summary>
  <p>

To add background color in the CSS, you can use this syntax: `background-color: color_name;` and for adding an image in the CSS, you can use this syntax : `background-image: url(" ");`

For Example,

```css
.element {
  background-color: red;
  background-image: url("path/to/image.jpg");
}
```

In the above example, we can applied css property to change the background color of specific element and also applied background-image, provided the url of the image.

  </p>

</details>

<details>
  <summary>11. Which CSS property you can to take a text to center?</summary>
  <p>

To center text horizontally within an element, you can use the CSS property `text-align` with the value `center`. This property is basically applied to the parent container of the text or to the specific element containing the text.

For Example,

```css
text-align: center;
```

In the above example, the text-align property is applied to text to take your text to the centre.

</p>

</details>

<details>
  <summary>12. What is the work of text-align property in CSS and what are their values?</summary>
  <p>

The text-align property is used to specify the horizontal alignment of the text within its containing element. It allows you to control how the text is aligned, whether it's aligned to the left, right, center and justified.

There are four values for the text-align property :

`text-align: right;` : This value aligns the text to the left edge of the containing element. The text will be flush with the left side, and any remaining space will be on the right side.

For Example,

```css
.item {
  text-align: right;
}
```

`text-align: left;` : This value aligns the text to the right edge of the containing element. The text will be flush with the right side, and any remaining space will be on the left side.

For Example,

```css
.item {
  text-align: left;
}
```

`text-align: center;` : This value centers the text horizontally within the containing element. The text will be evenly spaced between the left and right edges.

For Example,

```css
.item {
  text-align: center;
}
```

`text-align: justify;` : This value justifies the text, meaning it spreads the text evenly between the left and right edges of the containing element. It adjusts the spacing between words and characters to create a clean, straight edge on both sides.

For Example,

```css
.item {
  text-align: justify;
}
```

</p>

</details>

<details>
  <summary>13. What is the use of font-family property in CSS?</summary>
  <p>

The `font-family` property is used to specify the font family for the text content of an element. It allows you to define a prioritized list of font families to be used for rendering the text. If the first font is not available, the browser will try the next one in the list, and so on.

For Example,

```css
h3 {
  font-family: sans-serif;
}
```

  </p>

</details>

<details>
  <summary>14. Why we use font-weight property?</summary>
  <p>

The `font-weight` property is used to set how thick or thin characters in text should be displayed.

For Example,

```css
.title {
  font-weight: bold;
}
```

  </p>

</details>

<details>
  <summary>15. Which property is used to define the text color?</summary>
  <p>

The CSS property used to define the text color is color. You can specify the desired color using various formats, such as named colors, hexadecimal values, RGB values, HSL values, or CSS color keywords.

For Example,

```css
h4 {
  color: red;
}
```

In the above example, we can used color property to change color of the font.

</p>

</details>

<details>
  <summary>16. What is the use of margin in CSS and which are their properties?</summary>
  <p>

The margin is used to refers the space around an element, outside of any defined borders. It creates space between elements and their properties are :
Expand All
@@ -247,12 +444,25 @@ The margin is used to refers the space around an element, outside of any defined

`margin-left` : Specifies the margin on the left side of the element.

For Example,

```css
.btn1 {
  background-color: red;
  margin-top: 50px;
  margin-left: 40px;
  margin-right: 30px;
  margin-bottom: 100px;
  padding: 5px 15px 5px 15px;
}
```

</p>

</details>

<details>
  <summary>17. Could you explain the distinction between margin and padding in CSS?</summary>
  <p>

| Margin                                                                                | Padding                                                                                |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Margin refers to the space outside an element.                                        | Padding refers to the space between an element's content and its border.               |
| Margin creates space between elements.                                                | Padding creates space within the element, inside any defined borders.                  |
| Margin do not have a background color.                                                | Padding can have a background color.                                                   |
| Margin are used for creating spacing between elements.                                | Padding is used for creating space within an element.                                  |
| The margin property can be set individually for each side (top, right, bottom, left). | The padding property can be set individually for each side (top, right, bottom, left). |

  </p>

</details>

 <details>
  <summary>18. What is the box model in CSS and how does it operate?</summary>
  <p>

The CSS box model is a fundamental concept that describes how elements on a webpage are rendered and how their dimensions are calculated. It consists of four layers such as content, padding, margin, and border.
It operates by providing a way to control the sizing, spacing, and layout of elements on a web page.

For Example,

HTML:

```html
<div class="box">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
```

CSS:

```css
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 30px;
}
```

  </p>

</details>

<details>
  <summary>19. What is the use of box-shadow in CSS?</summary>
  <p>

The box-shadow property in CSS is used to add a shadow effect to an element's box, providing depth and dimension to the layout. It allows you to create visually appealing effects by simulating the appearance of shadows or glows around elements.

1. **Offset :** It specifies the horizontal and vertical distance of the shadow from the element. You can specify the values using length units, such as pixels (px) or percentages (%).

2. **Blur Radius :** This value determines the amount of blur applied to the shadow. A higher value creates a more diffused and softer shadow effect.

3. **Spread Distance :** It defines the size of the shadow relative to the element. A positive value expands the shadow, while a negative value shrinks it.

4. **Color :** The color value determines the shadow's color. You can use named colors, hexadecimal values, RGB values, or CSS color keywords to specify the color.

For Example,

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Shadow</title>
    <style>
      .img-tiger {
        height: 300px;
        border-radius: 50px;
        margin: 30px;
        box-shadow: 2px 2px 5px 10px rgb(138, 136, 136);
      }
      .img-tiger:hover {
        border-radius: 20px;
        transition: 2s;
      }
    </style>
  </head>
  <body>
    <img src="tiger.png" class="img-tiger" alt="img" />
  </body>
</html>
```

</p>

</details>

<details>
  <summary>20. What is the used of hover selector in CSS?</summary>
  <p>

The `:hover` selector in CSS is used to apply styles to an element when it is being hovered over by the user. It allows you to define different styles or effects that should be applied to an element when the user's cursor is positioned over it.

For Example,

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hover</title>
    <style>
      .btn {
        background-color: tomato;
        color: white;
        border: 2px solid dashed;
        border-radius: 10px;
      }
      .btn:hover {
        background-color: aquamarine;
        color: black;
      }
    </style>
  </head>
  <body>
    <button class="btn">Awesome button</button>
  </body>
</html>
```

</p>

</details>

<details>
  <summary>21. Which CSS property is used to style the hyperlinks on hover (Mouse over)?</summary>
  <p>

To style hyperlinks specifically when the mouse is hovering over them, you can use the `:hover` pseudo-class selector in combining with the a selector (targeting anchor elements). This allows you to apply different styles to hyperlinks when they are being hovered.

For Example,

```css
h1 {
  background-color: red;
}

h1:hover {
  background-color: green;
}
```

  </p>

</details>

<details>
  <summary>22. How can you create a CSS animation or transition?</summary>
  <p>

**CSS Animation:** Use the animation property on the targeted element to apply the animation and specify its duration, timing function, delay, and other properties.

For Example,

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s;
}
```

**CSS Transitions:** Use the animation property on the targeted element to apply the transition and specify the CSS properties you want to transition and their duration, timing function, delay, etc.

For Example,

```css
div {
  transition-property: width;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
}
```

  </p>

</details>

<details>
  <summary>23. How can you override CSS styles using specificity and the !important rule?</summary>
  <p>

To override CSS styles using specificity and the !important rule, use a more specific selector for the element and add `!important` to the CSS property value. CSS property specificity determines which styles take precedence when multiple rules target the same element. Styles with higher specificity override styles with lower specificity. Specificity is calculated based on the combination of selectors used in a CSS rule.

```css
.myclass {
  background-color: gray;
}

p {
  background-color: red !important;
}
```

  </p>

</details>

<details>
  <summary>24. What is the purpose of comments in CSS, and what are the two types of comments that can be used in CSS?</summary>
  <p>

The purpose of comments in CSS is to add notes, explanations, or reminders within the code.
There are two type of comments :

Single Line : Single line comment denoted by `//`

For Example,

```css
/* This is a single-line comment */
p {
  color: red;
}
```

Multi Line : Muti line comment denoted by `/*  */`

For Example,

```css
/* This is
a multi-line
comment */

p {
  color: red;
}
```

  </p>

</details>

<details>
  <summary>25. Can comments also span multiple lines?</summary>
  <p>

Yes, comments can also span multiple lines. HTML supports the multi-line commits.

  </p>

</details>

<details>
  <summary>26. What is the purpose of the "position" property and its values in CSS?</summary>
  <p>

The position property is used to set the position to the CSS element accordingly.
Expand All
@@ -373,24 +734,92 @@ There are five different types of positions in css :

`absolute` : It is relative to parent element. This element is positioned relative to the first parent element and absolute to its child elements.

For Example,

HTML:

```html
<div class="container">
  <div class="box static">Static</div>
  <div class="box relative">Relative</div>
  <div class="box absolute">Absolute</div>
  <div class="box fixed">Fixed</div>
  <div class="box sticky">Sticky</div>
</div>
```

CSS:

```css
.container {
  height: 300px;
  position: relative;
}

.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  margin-bottom: 10px;
  text-align: center;
  line-height: 100px;
  font-weight: bold;
}

.static {
  position: static;
}

.relative {
  position: relative;
  top: 20px;
  left: 20px;
}

.absolute {
  position: absolute;
  top: 50px;
  left: 50px;
}

.fixed {
  position: fixed;
  top: 20px;
  right: 20px;
}

.sticky {
  position: sticky;
  top: 20px;
}
```

  </p>

</details>

<details>
  <summary>27. Could you please explain the concept of device breakpoints in media queries?</summary>
  <p>

Media queries allow you to create responsive websites on all screen sizes from desktop to mobile.

Small mobile device : less than `600px`

Normal mobile device : greater than `600px` and less than `768px`

Tablets : greater than `768px` and less than `992px`

Laptops / desktops : greater than `992px` and less than `1200px`

TV/Large desktop : greater than `1200px`

  </p>

</details>

<details>
  <summary>30. What is the used of display property? and difference between their properties (Inline,Block and Inline-block).</summary>
  <p>

The display property in CSS is used to control the layout and behavior of elements. There are three commonly used display properties: `inline`, `block` and `inline-block`.

| Inline                             | Block                             | Inline-Block                     |
| ---------------------------------- | --------------------------------- | -------------------------------- |
| Does not start from new line.      | Start from new line.              | Start from same line.            |
| Take required space.               | Take complete space horizontally. | Take required space.             |
| We can't provide height and width. | We can provide height and width.  | We can provide height and width. |

  </p>

</details>

<details>
  <summary>29. What is the significance of the "float" property in CSS?</summary>
  <p>

The float property in CSS is used to specify how an element should float within its containing element. When an element is floated, it is taken out of the normal flow of the document and positioned either to the left or right of its containing element.

The float property accepts the following values:

**none:** The element does not float. This is the default value.

**left:** The element floats to the left of its containing element. Other content flows around it on the right side.

For Example,

```css
.image {
  float: left;
  margin-right: 10px;
}
```

**right:** The element floats to the right of its containing element. Other content flows around it on the left side.

For Example,

```css
.image {
  float: right;
  margin-left: 10px;
}
```

  </p>

</details>

<details>
  <summary>30. What is the purpose of vendor prefixes in CSS and why are they used?</summary>
  <p>

The purpose of vendor prefixes is to allow browser vendors to implement new CSS features before they are standardized feedback from developers and the community. It is used to implement non-standard CSS features in different web browsers.

  </p>

</details>

<details>
  <summary>31. What is flexbox in CSS?</summary>
  <p>

Flexbox stands for flexible box. To align cards flexibly inside to container. Flexbox make it simple to align items vertically and horizontally using rows and columns. Flexbox makes it easier to design a flexible responsive layout of a webpage.

</p>

</details>

<details>
  <summary>32. What is the purpose of the flex-direction property?</summary>
  <p>

The flex-direction property determines the arrangement and flow direction of flex items within a flex container. It controls whether the flex items are arranged horizontally or vertically and the order in which they are displayed. By adjusting the flex-direction value, you can change the layout from left-to-right to right-to-left or top-to-bottom to bottom-to-top, providing flexibility in designing different types of layouts.

  </p>

</details>

<details>
<summary>33. Whats the use of flex direction in CSS and explain their directions?</summary>
<p>

Flex direction are used to define the direction of child item are placed in the flex container.

There are four flex directions in CSS :

**flex-direction:row;** : By default direction is row. Child items are are Left to Right direction.

For Example,

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Flex Box</title>
    <style>
      .item {
        background-color: tomato;
        height: 100px;
        width: 100px;
        margin: 10px;
        font-size: 50px;
        padding: 10px;
      }
      .conatiner {
        display: flex;
      }
    </style>
  </head>

  <body>
    <div class="conatiner">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </body>
</html>
```

**flex-direction: row-reverse;** : Child item are Right to Left direction.

For Example,

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Flex Box</title>
    <style>
      .item {
        background-color: tomato;
        height: 100px;
        width: 100px;
        margin: 10px;
        font-size: 50px;
        padding: 10px;
      }
      .conatiner {
        display: flex;
        flex-direction: row-reverse;
      }
    </style>
  </head>

  <body>
    <div class="conatiner">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </body>
</html>
```

**flex-direction: column;** : Child items are Top to Bottom direction.

For Example,

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Flex Box</title>
    <style>
      .item {
        background-color: tomato;
        height: 100px;
        width: 100px;
        margin: 10px;
        font-size: 50px;
        padding: 10px;
      }
      .conatiner {
        display: flex;
        flex-direction: column;
      }
    </style>
  </head>

  <body>
    <div class="conatiner">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </body>
</html>
```

**flex-direction: column-reverse;** : Child items are Bottom to Top direction.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Flex Box</title>
    <style>
      .item {
        background-color: tomato;
        height: 100px;
        width: 100px;
        margin: 10px;
        font-size: 50px;
        padding: 10px;
      }
      .conatiner {
        display: flex;
        flex-direction: column-reverse;
      }
    </style>
  </head>

  <body>
    <div class="conatiner">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </body>
</html>
```

</p>

</details>

<details>
<summary>34. What are the main properties used to control the layout of flex containers and flex items?</summary>
  <p>

The main properties used to control the layout of flex containers and flex items are :
`display` : Sets the element as a flex container.

`flex-direction` : It determines the direction row or column within the flex container.

`justify-content` : Aligns flex items along the main axis.

`align-items` : Aligns flex items along the cross axis.

  </p>

</details>

<details>
  <summary>35. How do you create a responsive layout using flexbox?</summary>
  <p>

To create a responsive layout using Flexbox, you can follow these steps:

1. **Set up the HTML structure :** Start by creating the HTML structure of your layout. This will typically involve using container elements to hold the different sections or columns of your layout.

2. **Apply Flexbox to the container :** Add a CSS class or ID to your container element, and then apply the `display: flex;` property to it. This will enable the Flexbox behavior for the container and its child elements.

3. **Define the flex direction :** Use the `flex-direction` property to specify the direction in which the flex items should be arranged. By default, it is set to `row`, which creates a horizontal layout. You can also use `column` to create a vertical layout.

4. **Utilize media queries for responsiveness:** To make your layout responsive, you can use media queries to apply different styles based on the screen size or device. Adjust the flex properties, item order, or alignment within media queries to adapt the layout as needed.

Example of a basic responsive layout using Flexbox :

HTML File :

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

CSS File :

```css
.container {
  display: flex;
  flex-direction: row;
}

.item {
  flex: 1;
  /* Other styles for the items */
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```

In the example above, the container element has the class `container` and applies Flexbox behavior. The items inside it have the class "item" and use the `flex: 1;` property to distribute available space equally among them. Additionally, a media query is used to change the flex-direction to "column" when the screen width is below 600 pixels, resulting in a vertical layout.

  </p>

</details>

<details>
  <summary>36. What are the properties of align-items in CSS?</summary>
  <p>

When the flex-direction is a row then justify-content control horizontally. This means the `X axis` but you can control the opposite axis Which means the `Y axis` then you use the property align-items. Align items are used to control items on the opposite axis.

1. `align-items: flex-start;` : Items are placed at the start of the Opposite ( Y axis ) axis.

For Example,

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Flex Box</title>
    <style>
      .item {
        background-color: tomato;
        height: 100px;
        width: 100px;
        margin: 10px;
        font-size: 50px;
        padding: 10px;
      }
      .conatiner {
        background-color: aqua;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 500px;
      }
    </style>
  </head>

  <body>
    <div class="conatiner">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </body>
</html>
```

2. `align-item: flex-end;` : Items are placed at the end of the Opposite ( Y axis ) axis.

For Example,

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Flex Box</title>
    <style>
      .item {
        background-color: tomato;
        height: 100px;
        width: 100px;
        margin: 10px;
        font-size: 50px;
        padding: 10px;
      }
      .conatiner {
        background-color: aqua;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 500px;
      }
    </style>
  </head>

  <body>
    <div class="conatiner">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </body>
</html>
```

3. `align-item: center;` : Items are centered in the Opposite axis.

For Example,

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Flex Box</title>
    <style>
      .item {
        background-color: tomato;
        height: 100px;
        width: 100px;
        margin: 10px;
        font-size: 50px;
        padding: 10px;
      }
      .conatiner {
        background-color: aqua;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 500px;
      }
    </style>
  </head>

  <body>
    <div class="conatiner">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </body>
</html>
```

  </p>

</details>

<details>
  <summary>37. What is a media query in CSS and what is its purpose?</summary>
  <p>

A media query in CSS is a technique used to apply different styles based on the characteristics of the device or viewport, such as screen size allowing for responsive design and optimized user experiences across various devices and screen sizes.

**max-width -** The max-width are specifies the maximum width of a particular device.

**Syntax :**

```css
@media screen and (max-width: 600px) {
}
```

For Example,

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Media Query</title>
    <style>
      .test-btn {
        width: 400px;
        height: 50px;
        font-size: 20px;
        background-color: tomato;
        color: white;
      }
      @media screen and (max-width: 500px) {
        .test-btn {
          background-color: blue;
          width: 300px;
          height: 80px;
          font-size: 40px;
        }
      }
    </style>
  </head>

  <body>
    <button class="test-btn">This Is Button</button>
  </body>
</html>
```

**min-width -** The min-width are specifies the minimum width of a specific device.

**Syntax :**

```css
@media screen and (min-width: 600px) {
}
```

For Example,

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Media Query</title>
    <style>
      .test-btn {
        width: 400px;
        height: 50px;
        font-size: 20px;
        background-color: tomato;
        color: white;
      }
      @media screen and (min-width: 600px) {
        .test-btn {
          background-color: blue;
          width: 300px;
          height: 50px;
          font-size: 40px;
        }
      }
    </style>
  </head>

  <body>
    <button class="test-btn">This Is Button</button>
  </body>
</html>
```

**min-width and max-width at same time**

**Syntax :**

```css
media screen and (min-width: 600px) and (max-width: 800px) {
}
```

For Example,

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Media Query</title>
    <style>
      .test-btn {
        width: 400px;
        height: 50px;
        font-size: 20px;
        background-color: tomato;
        color: white;
      }
      @media screen and (min-width: 600px) and (max-width: 800px) {
        .test-btn {
          background-color: black;
          border: 25px;
        }
      }
    </style>
  </head>
  <body>
    <button class="test-btn">This Is Button</button>
  </body>
</html>
```

</p>

</details>

<details>
  <summary>38. What are the different types of media features that can be used in a media query?</summary>
  <p>

CSS provides a variety of media features that can be used in media queries to target different device characteristics. Here are some commonly used media features:

1. Width and height:

   - `width`: Specifies the width of the viewport or device.
   - `height`: Specifies the height of the viewport or device.

2. Resolution:

   - `resolution`: Specifies the pixel density or resolution of the output device.
   - `min-resolution` and `max-resolution`: Allow you to specify a minimum and maximum pixel density.

3. Orientation:

   - `orientation`: Targets the orientation of the viewport, such as `portrait` or `landscape`.

4. Aspect ratio:

   - `aspect-ratio`: Specifies the aspect ratio of the viewport or device.
   - `min-aspect-ratio` and `max-aspect-ratio`: Set the minimum and maximum aspect ratio.

5. Device type:

   - `device-type`: Differentiates between different types of devices, such as `screen`, `print`, `speech`, etc.

6. Color capabilities:

   - `color`: Specifies the number of bits per color component the device supports.
   - `color-index`: Indicates the number of entries in the device's color lookup table.

7. Grid:

   - `grid`: Checks whether the device uses a grid or bitmap display.

8. Pointer:

   - `pointer`: Targets devices based on the available pointing device, such as `coarse` or `fine`.

9. Hover:
   - `hover`: Differentiates devices based on whether they support hovering, such as `hover` or `none`.

These are just a few examples of media features available in CSS. Each media feature has specific syntax and usage. You can combine multiple media features within a media query to create responsive styles that adapt to different device characteristics.

  </p>

</details>

<details>
  <summary>39. Which are different way to apply CSS color?</summary>
  <p>

There are different ways to add css colors.

1. **Color name** - CSS provides predefined color names that you can use directly.

For Example,

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: red;
        color: white;
      }
    </style>
  </head>
  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

In the above example, set the background color to `red` or the text color to `white`.

2. `Hexadecimal colors` : Hexadecimal colors start with a pound sign (#) followed by six characters representing red, green, and blue (RGB) values. Each pair of characters represents a value from 00 (minimum) to FF (maximum).

For Example,

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: #ff0000;
        color: #ffffff;
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

In the above example, sets the background color to red (#FF0000) and the text color to white (#FFFFFF).

3. `rgb` : RGB colors allow you to specify the intensity of red, green, and blue using decimal values ranging from 0 to 255. You can use the rgb() function for this.

For Example,

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: rgb(255, 0, 0);
        color: rgb(255, 255, 255);
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

In the above example, sets the background color to red (255, 0, 0) and the text color to white (255, 255, 255).

4. `rgba` : RGBA colors are similar to RGB, but with an additional alpha channel representing capacity. The alpha value ranges from 0 (transparent) to 1 (opaque). Use the rgba() function to specify these colors.

For Example,

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: rgba(0, 0, 0, 0);
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

In the above example, the background color is black with full transparency (0), making it completely invisible.

5. `hsl` : HSL colors define hue, saturation, and lightness. Hue represents a color on the color wheel, saturation determines the intensity and lightness controls the brightness. Use the hsl() function to specify these colors.

For Example,

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: hsl(0, 100%, 50%);
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

In the above example, sets the background color to pure red (0 degrees), with 100% saturation and 50% lightness.

  </p>

</details>

<details>
  <summary> 40. Are media queries limited to screen sizes, or can they target other device characteristics as well?</summary>
  <p>

Media queries are not limited to screen sizes; they can target various device characteristics in addition to screen size. While screen size is a common use case for media queries, you can also use media queries to target other aspects of a device, such as:

**Screen resolution:** You can specify a specific resolution or a range of resolutions using the min-resolution and max-resolution media features.

**Orientation:** You can target the orientation of a device, such as portrait or landscape, using the orientation media feature.

**Device type:** You can differentiate styles based on the type of device, such as desktop, tablet, or mobile, using the device-type media feature.

**Color capabilities:** You can adjust styles based on the color capabilities of the device using the color and color-index media features.

**Accessibility features:** You can target devices based on their accessibility settings, such as whether they have a reduced motion preference or a prefers-reduced-transparency setting.

  </p>

</details>

<details>
  <summary>41. How would you create a responsive navigation menu using CSS?</summary>
  <p>

To create a responsive navigation menu using CSS, you can utilize media queries and flexbox or grid layout. Here's an example of how you can do it:

HTML File:

```html
<nav class="navigation">
  <ul class="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

CSS File:

```css
/* Base styles for the navigation */
.navigation {
  background-color: #f2f2f2;
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.menu li {
  margin: 0 10px;
}

.menu li a {
  text-decoration: none;
  color: #333;
  padding: 10px;
}

/* Media query for small screens */
@media (max-width: 768px) {
  .menu {
    flex-direction: column;
    align-items: center;
  }

  .menu li {
    margin: 10px 0;
  }
}
```

In the above example, the navigation menu is structured using an unordered list (ul) with list items (li). The CSS styles define the basic appearance of the navigation menu.

The media query (@media) is used to specify different styles for different screen sizes. In this case, when the screen width is less than or equal to 768 pixels, the menu switches to a vertical layout by setting flex-direction: column and centers the items using `align-items: center`.

You can customize the styles further to meet your design requirements, such as adding hover effects, dropdown menus, or any additional functionality you may need.

  </p>

</details>

<details>
  <summary>42. Could you explain the distinction between absolute and relative positioning in CSS?
</summary>
  <p>

| Absolute Position                                                              | Relative Position                                                                                                   |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Positions an element relative to its normal position within the document flow. | Positions an element relative to its closest positioned ancestor or the initial containing block.                   |
| Absolute position is relative to parent element.                               | Relative position is relative to original position.                                                                 |
| Element remains within the normal flow of the document.                        | Element is taken out of the normal flow of the document.                                                            |
| Can adjust position using offset properties (top, right, bottom, left).        | Position is determined by offset properties (top, right, bottom, left) relative to its nearest positioned ancestor. |

  </p>

</details>

<details>
  <summary>43. What is the purpose of pseudo-classes in CSS?</summary>
  <p>

The purpose of the pseudo-classes in CSS enable the selection and styling of elements based on various conditions, allowing for dynamic and interactive styling based on user interactions.

For Example,

```html
<button class="btn">Click me</button>
```

```css
.btn {
  padding: 10px 20px;
  background-color: #f2f2f2;
  color: #333;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #999;
  color: #fff;
}

.btn:active {
  background-color: #555;
}

.btn:focus {
  outline: 2px solid blue;
}
```

In the above example, we have a button element with the class "btn". Here's how the different pseudo-classes are utilized:

**:hover** : When the mouse pointer hovers over the button, the background color changes to gray (#999) and the text color changes to white (#fff).

**:active** : When the button is being clicked or pressed, the background color changes to dark gray (#555).

**:focus** : When the button receives focus (e.g., by clicking on it or using the keyboard to navigate to it), an outline with a blue color is added to the button.

  </p>

</details>

<details>
  <summary>44. How would you style a hyperlink differently when it is being hovered over?</summary>
  <p>

To style a hyperlink differently when it is being hovered over in CSS, you can use the :hover pseudo-class selector.

For Example,

```css
a {
  /* Styles for normal state */
  color: blue; /* Default link color */
  text-decoration: none; /* Remove underline */
}
a:hover {
  /* Styles for hover state */
  color: red; /* Change link color on hover */
  text-decoration: underline; /* Add underline on hover */
}
```

In the above example, the hyperlink `<a>` is initially styled with blue color and without any underline. When the user hovers over the hyperlink, the a:hover selector is applied, and the color is changed to red, and an underline is added.

 </p>

 </details>

<details>
  <summary> 45. How do you hide an element using CSS?</summary>
  <p>

To hide an element using CSS, you can use the `display` property and set value to `none`, which removes the element from the page flow and makes it invisible.

For Example,

```css
.element {
  display: none;
}
```

  </p>

</details>

<details>
  <summary>46. What is the distinction between class selectors and id selectors?</summary>
  <p>

| Class Selector                                                                    | Id Selector                                                                          |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Class selectors are preceded by a period (.) followed by the class name.          | ID selectors are preceded by a hash/pound symbol (#) followed by the unique ID name. |
| They can be used to target multiple elements that share the same class attribute. | They are used to target a single unique element based on its ID attribute.           |

  </p>

</details>

<details>
  <summary> 47. What are CSS backgrounds, list the properties?</summary>
  <p>

The CSS backgrounds are used to style and customize the background of an element, and there are some main properties `background-color`, `background-image`, `background-repeat` and more.

**background-color:** Sets the background color of an element.

For Example,

```css
background-color: tomato;
```

**background-image:** Specifies the URL or path to an image to be used as the background.

For Example,

```css
background-image: bat.jpg;
```

**background-repeat:** Determines how the background image is repeated, such as repeat, repeat-x, repeat-y, no-repeat, space, or round.

For example,

```css
.img {
  background-image: url("https://www.tutorialspoint.com/images/css.png");
  background-repeat: no-repeat;
}
```

</p>

</details>

<details>
  <summary>48. What are the various positioning properties in CSS?</summary>
  <p>

The various positioning properties in CSS are `static`, `relative`, `absolute`, `fixed` and `sticky` which determine how elements are positioned and interact with the document flow.

**position :** Specifies the positioning method for an element, which can be static, relative, absolute, fixed, or sticky

**top, right, bottom, left :** These properties, used in conjunction with the position property, specify the offset or distance of an element from the top, right, bottom, or left edges of its positioned container.

**z-index :** Determines the stacking order of positioned elements. Elements with a higher z-index value appear in front of elements with a lower value.

  </p>

</details>

<details>
  <summary> 49. What is meant by universal selector?</summary>
  <p>

In CSS, the universal selector, denoted by the asterisk (\*), is a special selector that matches any element in the HTML document. It applies styles to all elements on the page, regardless of their type or location within the document structure. The universal selector targets every element, including the &lt;head&gt; , &lt;body&gt; , &lt;div&gt; , &lt;p&gt; , &lt;span&gt; , etc.

For Example,

```css
* {
  margin: 0;
  padding: 0;
}
```

  </p>

</details>

<details>
  <summary>50. How can you use the CSS property to repeat the image?</summary>
  <p>

This property is used to repeat the image. It can repeat image in differnet direction

**background-repeat:** repeat-x; This value is used to repeat the background image horizontally along the x-axis.

**background-repeat:** repeat-y; This value is used to repeat the background image horizontally along the y-axis.

**background-repeat:** repeat; This value is used to repeat the background image.

For Example,

**HTML File:**

```html
<div class="container">
  <h1>This is a card</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptates
    cum veritatis odio voluptas nihil commodi sunt facere illum quis nostrum nam
    quasi aut ipsam aliquam, similique accusamus nulla! Molestias.
  </p>
</div>
```

**CSS File:**

```css
.container {
  border: 1px solid black;
  width: 600px;
  height: 400px;
  background-image: url("https://cdn-icons-png.flaticon.com/128/3595/3595455.png");
  background-size: auto;
  background-repeat: no-repeat;
}
```

</p>

</details>
