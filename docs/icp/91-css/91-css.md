---
title: CSS Interview Questions
description: "CSS Interview Questions"
hide_table_of_contents: true
---

> 1. What is CSS and what role does it play in web development?

<details>
  <summary>👁 Show Answer</summary>
<p>

CSS stands for **Cascading Style Sheets**. It is used to design webpages and control the visual appearance of HTML elements. CSS describes how HTML elements should be displayed on different devices such as desktops, laptops, tablets or other media.

  </p>

</details>

> 2. How can you include CSS in an HTML document?

<details>
  <summary>👁 Show Answer</summary>
  <p>

CSS can be included in an HTML document by using inline styles, internal stylesheets
within the `<style>` element, or external stylesheets linked via the `<link>` element.

  </p>

</details>

> 3. How many ways do we include CSS in an HTML document?

<details>
  <summary>👁 Show Answer</summary>
  <p>
    There are three ways we include CSS in HTML document : inline css, document css and external css.

  </p>

</details>

> 4. What are the differences between inline, internal, and external CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>

    There are some differences are given below -

**i. Inline CSS :** Inline CSS is applied directly to HTML elements using the style attribute. It allows you to apply CSS styles to individual HTML tags.

**ii. Internal/ Document CSS :** Document level CSS used `<style>` element in the `<head>` section.

**iii. External CSS :** External CSS is stored in a separate CSS file and linked to the HTML document using the `<link>` element. The CSS file is saved with a `style.css` extension.

  </p>

</details>

> 5. Could you explain what selectors are in CSS and how they function?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   Yes, Selectors in CSS are patterns that define which elements in an HTML document should be styled, and they function by selecting specific elements based on their classes, IDs, tag names or other attributes.

**i. Class Selector :** The class selector selects elements based on their class attribute. It is denoted by a dot `(.)` followed by the class name.

**ii. ID Selector :** The ID selector selects elements based on their ID attribute. It is denoted by a hash `(#)` followed by the ID name.

**iii. Tagname Selector :** Tagname selector selects HTML elements based on their tag names. For example, h1, h2, p, etc.

  </p>

</details>

> 6. How would you change the font style and size using CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>

To change the font style and size using CSS, you can use the `font-family` and `font-size` properties.

  </p>

</details>

> 7. What are the various methods to apply CSS styles to an element?

<details>
  <summary>👁 Show Answer</summary>
  <p>

      There are three ways to apply style to an element :

**Inline Styles :** Inline styles are applied directly to individual HTML elements using
the style attribute.

**Internal Styles :** Internal styles are embedded within the HTML document using the `<style>`
tags in the `<head>` section.

**External Stylesheets :** External stylesheets involve linking an external CSS file to the HTML
document using the `<link>` tag. The CSS code resides in a separate file with a `.css` extension.

  </p>

</details>

> 8. What is border style in CSS and which properties are included in it?

<details>
  <summary>👁 Show Answer</summary>
  <p>

A border is a decorative or structural element that can be added to HTML elements to visually separate them from other elements. It is a line that surrounds the content of an element and can be customized in terms of color, width, and style.

`border-style` : defines the style of the border line.

`border-color` : sets the color of the border.

`border-width` : sets the thickness or width of the border.

  </p>

</details>

> 9. What are the different types of border styles in CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>

There are four types of border style in CSS :

`solid` : Creates a continuous line.👉\_\_\_

`double` : Creates two parallel lines. 👉 ====

`dashed` : Creates a series of short dashes. 👉 ------

`dotted` : Creates a series of small dots.👉 ..........

  </p>

</details>

> 10. What is the use of the border-radius property in CSS and how we used this property?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
   The border-radius CSS property is used to round the corners of an element's outer border edge. It provides a way to give elements a rounded appearance.

You can provide value to each corner : For example, `border-radius: 0px 50px 0px 50px;`

The 1st value applies to the top-left corner. The 2nd value applies to the top-right corner. The 3rd value applies to the bottom-right corner. The 4th value applies to the bottom-left corner.

  </p>

</details>

> 11. How would you horizontally and vertically center align an element using CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>

    To center align an element horizontally and vertically using CSS, you can use the following CSS properties : display: flex; justify-content: center; align-items: center;

**Example :**

```css
.element {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

  </p>

</details>

> 12. How can you add a background color or image to an element using CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>

To add background color in the CSS, you can use this syntax: `background-color: color_name;` and for adding an image in the CSS, you can use this syntax : `background-image: url(" ");`

```css
.element {
  background-color: red;
  background-image: url("path/to/image.jpg");
}
```

  </p>

</details>

> 13. Which CSS property and value is used to center an element?

<details>
  <summary>👁 Show Answer</summary>
  <p>

`text-align` property with value `center` is used to center an elements.

  </p>

</details>

> 14. What is the work of text-align property in CSS and what are their values?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
   The text-align property is used to specify the horizontal alignment of the text within its containing element. It allows you to control how the text is aligned, whether it's aligned to the left, right, center and justified.

There are four values for the text-align property :

`text-align: left;` `text-align: right;` `text-align: center;` `text-align: justify;`

  </p>

</details>

> 15. What is the use of font-family property in CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
   The font-family property is used to specify the font family for the text content of an element. It allows you to define a prioritized list of font families to be used for rendering the text. If the first font is not available, the browser will try the next one in the list, and so on.

  </p>

</details>

> 16. Why we use font-weight property?

<details>
  <summary>👁 Show Answer</summary>
  <p>
    The font-weight property is used to set how thick or thin characters in text should be displayed.
  </p>

</details>

> 17. Which property is used to define the text color?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
The color property is used to define the text color in CSS.

For example : `color : red;`

  </p>

</details>

> 18. What is the use of margin in CSS and which are their properties?

 <details>
  <summary>👁 Show Answer</summary>
  <p>
   
   The margin is used to refers the space around an element, outside of any defined borders. It creates space between elements and their properties are :

`margin-top` : Specifies the margin on the top side of the element.

`margin-right` : Specifies the margin on the right side of the element.

`margin-bottom` : Specifies the margin on the bottom side of the element.

`margin-left` : Specifies the margin on the left side of the element.

  </p>

 </details>

> 19. Could you explain the distinction between margin and padding in CSS?

<details>
  <summary>👁 Show Answer</summary>
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

> 20. What is the box model in CSS and how does it operate?

<details>
  <summary>👁 Show Answer</summary>
  <p>
  
  The CSS box model is a fundamental concept that describes how elements on a webpage are rendered and how their dimensions are calculated. It consists of four layers such as content, padding, margin, and border.
  It operates by providing a way to control the sizing, spacing, and layout of elements on a web page.

  </p>

</details>

> 21. What is the use of box-shadow in CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>
  
  The box-shadow property is used to add one or more shadows to an element. It allows you to create visually appealing effects, such as giving the illusion of depth or highlighting elements.

  </p>

</details>

> 22. What is the used of hover selector in CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>

The `:hover` selector is used to apply styles to an element when it is being hovered over by the mouse.
It allows you to add interactive effects to elements on your web page.

  </p>

</details>

> 23. Which CSS property is used to style the hyperlinks on hover (Mouse over)?\*\*

<details>
  <summary>👁 Show Answer</summary>
  <p>

The `a:hover` property is used to define the style on mouse over event.

  </p>

</details>

> 24. How can you create a CSS animation or transition?

<details>
  <summary>👁 Show Answer</summary>
  <p>

To create a CSS animation or transition, use CSS properties and selectors to define how an element should behave and appear during the animation or transition.

  </p>

</details>

> 25. How can you override CSS styles using specificity and the !important rule?

<details>
  <summary>👁 Show Answer</summary>
  <p>

To override CSS styles using specificity and the !important rule, use a more specific selector for the element and add !important to the CSS property value.

  </p>

</details>

> 26. What is the purpose of comments in CSS, and what are the two types of comments that can be used in CSS?\*\*

<details>
  <summary>👁 Show Answer</summary>
  <p>

The purpose of comments in CSS is to add notes, explanations, or reminders within the code.

There are two type of comments :

Single Line : Single line comment denoted by `//`

Multi Line : Muti line comment denoted by `/*  */`

  </p>

</details>

> 27. Can comments also span multiple lines?

<details>
  <summary>👁 Show Answer</summary>
  <p>

Yes, comments can also span multiple lines.

  </p>

</details>

> 28. What is the purpose of the "position" property and its values in CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>

The position property is used to set the position to the CSS element accordingly.

There are five different types of positions in css :

`static` : The static position is by default position. It does not provide any effect.

`relative` : The relative position is the relative to original position or nearest element.

`sticky` : A sticky element are relative and fixed, its depending on the scroll position.

`fixed` : Fixed is set with respect to viewport. Removed from normal flow.

`absolute` : It is relative to parent element. This element is positioned relative to the first parent element and absolute to its child elements.

  </p>

</details>

> 29. Could you explain the distinction between absolute and relative positioning in CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
    Absolute position is relative to parent element.
    Relative position is relative to original position.

  </p>

</details>

> 30. What is the used of display property? and difference between their properties (Inline,Block and Inline-block).\*\*

<details>
  <summary>👁 Show Answer</summary>
  <p>

The display property in CSS is used to control the layout and behavior of elements. There are three commonly used display properties: `inline`, `block` and `inline-block`.

| Inline                             | Block                             | Inline-Block                     |
| ---------------------------------- | --------------------------------- | -------------------------------- |
| Does not start from new line.      | Start from new line.              | Start from same line.            |
| Take required space.               | Take complete space horizontally. | Take required space.             |
| We can't provide height and width. | We can provide height and width.  | We can provide height and width. |

  </p>

</details>

> 31. What is the significance of the "float" property in CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>

     The "float" property in CSS is used to control the positioning and layout of elements within a document flow.

  </p>

</details>

> 32. What is the purpose of vendor prefixes in CSS and why are they used?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
   The purpose of vendor prefixes is to allow browser vendors to implement new CSS features before they are standardized feedback from developers and the community. It is used to implement non-standard CSS features in different web browsers.

  </p>

</details>

> 33. What is flexbox in CSS?\*\*

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
   Flexbox stands for flexible box. To align cards flexibly inside to container. Flexbox make it simple to align items vertically and horizontally using rows and columns. Flexbox makes it easier to design a flexible responsive layout of a webpage.

  </p>

</details>

> 34. What is the purpose of the flex-direction property?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
   The flex-direction property determines whether flex items are arranged horizontally or vertically within a flex container by defining the direction.

  </p>

</details>

> 35. Whats the use of flex direction in CSS and explain their directions?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
Flex direction are used to define the direction of child item are placed in the flex container.

There are four flex directions in CSS :

`flex-direction: row;` : By default direction is row. Child items are are Left to Right direction.

`flex-direction: row-reverse;` : Child item are Right to Left direction.

`flex-direction: column;` : Child items are Top to Bottom direction.

`flex-direction: column-reverse;` : Child items are Bottom to Top direction.

  </p>

</details>

> 36. What are the main properties used to control the layout of flex containers and flex items?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
   The main properties used to control the layout of flex containers and flex items are :

`display` : Sets the element as a flex container.

`flex-direction` : It determines the direction row or column within the flex container.

`justify-content` : Aligns flex items along the main axis.

`align-items` : Aligns flex items along the cross axis.

  </p>

</details>

> 37. What is a media query in CSS and what is its purpose?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
A media query in CSS is a technique used to apply different styles based on the characteristics of the device or viewport, such as screen size allowing for responsive design and optimized user experiences across various devices and screen sizes.

  </p>

</details>

> 38. What are the different types of media features that can be used in a media query?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
   Media queries in CSS allow you to target and customize styles based on various device characteristics such as screen size, aspect ratio, orientation, resolution, color, and more, enabling precise styling adjustments for different devices.

  </p>

</details>

> 39. Are media queries limited to screen sizes, or can they target other device characteristics as well?

<details>
  <summary>👁 Show Answer</summary>
  <p>
   
   Media queries can target more than just screen sizes; they can also be used to customize styles based on various device characteristics like screen size, aspect ratio, resolution, color, input capabilities (mouse or touchscreen), and even the user's preferred display mode (light or dark), providing a flexible way to adapt designs to different devices and user preferences.

  </p>

</details>

> 40. How would you create a responsive navigation menu using CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>

To create a responsive navigation menu using CSS, you can used CSS media queries, flexbox, or CSS grid to adjust the structure and visual presentation of the menu based on the screen size or device, and user-friendly across different devices and viewport sizes.

  </p>

</details>

> 41. Could you please explain the concept of device breakpoints in media queries?

<details>
  <summary>👁 Show Answer</summary>
  <p>

Media queries allow you to create responsive websites on all screen sizes from desktop to mobile.

Small mobile device : less than `600px`

Normal mobile device : greater than `600px` and less than `768px`

Tablets : greater than `768px` and less than `992px`

Laptops / desktops : greater than `992px` and less than `1200px`

TV/Large desktop : greater than `1200px`

  </p>

</details>

> 42. What is the purpose of pseudo-classes in CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>
  
   The purpose of the pseudo-classes in CSS enable the selection and styling of elements based on various conditions, allowing for dynamic and interactive styling based on user interactions.

  </p>

</details>

> 43. How would you style a hyperlink differently when it is being hovered over?

<details>
  <summary>👁 Show Answer</summary>
  <p>

To style a hyperlink differently when it is being hovered over, you can use CSS and the `:hover` pseudo-class to apply specific styles when the mouse hovers over the link, allowing you to change its color, or add effects.

 </p>

 </details>

> 44. How do you hide an element using CSS?

<details>
  <summary>👁 Show Answer</summary>
  <p>

To hide an element using CSS, you can use the display property and set value to "none", which removes the element from the page flow and makes it invisible.

  </p>

</details>
