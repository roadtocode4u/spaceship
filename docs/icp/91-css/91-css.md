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

CSS can be included in an HTML document by using inline styles, internal stylesheets
within the `<style>` element, or external stylesheets linked via the `<link>` element.

</p>
</details>

<details>
  <summary>3. What is border style in CSS and which properties are included in it?</summary>
  <p>

A border is a decorative or structural element that can be added to HTML elements to visually separate them from other elements. It is a line that surrounds the content of an element and can be customized in terms of color, width, and style.

`border-style` : defines the style of the border line.

`border-color` : sets the color of the border.

`border-width` : sets the thickness or width of the border.

  </p>

</details>

<details>
<summary>4. What are the differences between inline, internal, and external CSS?</summary>
<p>

There are some differences are given below -

**i. Inline CSS :** Inline CSS is applied directly to HTML elements using the style attribute. It allows you to apply CSS styles to individual HTML tags.

**ii. Internal/ Document CSS :** Document level CSS used `<style>` element in the `<head>` section.

**iii. External CSS :** External CSS is stored in a separate CSS file and linked to the HTML document using the `<link>` element. The CSS file is saved with a `style.css` extension.

</p>

</details>

<details>
<summary>5. Could you explain what selectors are in CSS and how they function?</summary>
<p>
  
Yes, Selectors in CSS are patterns that define which elements in an HTML document should be styled, and they function by selecting specific elements based on their classes, IDs, tag names or other attributes.

**i. Class Selector :** The class selector selects elements based on their class attribute. It is denoted by a dot `(.)` followed by the class name.

**ii. ID Selector :** The ID selector selects elements based on their ID attribute. It is denoted by a hash `(#)` followed by the ID name.

**iii. Tagname Selector :** Tagname selector selects HTML elements based on their tag names. For example, h1, h2, p, etc.

</p>

</details>

<details>
<summary>6. How would you change the font style and size using CSS?</summary>
<p>

To change the font style and size using CSS, you can use the `font-family` and `font-size` properties.

1. **Changing the Font Style :**
   You can specify the desired font family for an element using the `font-family` property.

2. **Changing the Font Size :**
   You can adjust the font size of an element using the `font-size` property.

</p>

</details>

<details>
  <summary>7. What are the various methods to apply CSS styles to an element?</summary>
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

<details>
<summary>8. How many ways do we include CSS in an HTML document?</summary>
<p>

There are three ways we include CSS in HTML document : inline css, document css and external css.

1. **Inline CSS :** You can apply CSS directly to an HTML element using the style attribute within the tag.

2. **Document CSS :** You can include CSS within the `<style>` tags in the `<head>` section of your HTML document.

3. **External CSS :** You can create a separate CSS file with a .css extension and link it to your HTML document using the `<link>` tag.

</p>
</details>

<details>
  <summary>9. What are the different types of border styles in CSS?</summary>
  <p>

There are four types of border style in CSS :

`solid` : Creates a continuous line.👉\_\_\_

`double` : Creates two parallel lines. 👉 ====

`dashed` : Creates a series of short dashes. 👉 ------

`dotted` : Creates a series of small dots.👉 ..........

  </p>

</details>

<details>
  <summary>10. What is the use of the border-radius property in CSS and how we used this property?</summary>
  <p>

The border-radius CSS property is used to round the corners of an element's outer border edge. It provides a way to give elements a rounded appearance.

You can provide value to each corner : For example, `border-radius: 0px 50px 0px 50px;`

The 1st value applies to the top-left corner. The 2nd value applies to the top-right corner. The 3rd value applies to the bottom-right corner. The 4th value applies to the bottom-left corner.

  </p>

</details>

<details>
  <summary>11. How would you horizontally and vertically center align an element using CSS?</summary>
  <p>

To center align an element horizontally and vertically using CSS,
you can use the following CSS properties : `display: flex;` `justify-content: center;` `align-items: center;`

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

<details>
  <summary>12. How can you add a background color or image to an element using CSS?</summary>
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

<details>
  <summary>13. Which CSS property you can to take a text to center?</summary>
  <p>

To center text horizontally within an element, you can use the CSS property `text-align` with the value `center`. This property is basically applied to the parent container of the text or to the specific element containing the text.

  </p>

</details>

<details>
  <summary>14. What is the work of text-align property in CSS and what are their values?</summary>
  <p>

The text-align property is used to specify the horizontal alignment of the text within its containing element. It allows you to control how the text is aligned, whether it's aligned to the left, right, center and justified.

There are four values for the text-align property :

`text-align: left;` `text-align: right;` `text-align: center;` `text-align: justify;`

  </p>

</details>

<details>
  <summary>15. What is the use of font-family property in CSS?</summary>
  <p>

The `font-family` property is used to specify the font family for the text content of an element. It allows you to define a prioritized list of font families to be used for rendering the text. If the first font is not available, the browser will try the next one in the list, and so on.

  </p>

</details>

<details>
  <summary>16. Why we use font-weight property?</summary>
  <p>

The `font-weight` property is used to set how thick or thin characters in text should be displayed.

  </p>

</details>

<details>
  <summary>17. Which property is used to define the text color?</summary>
  <p>

The CSS property used to define the text color is color. You can specify the desired color using various formats, such as named colors, hexadecimal values, RGB values, HSL values, or CSS color keywords.

</p>

</details>

 <details>
  <summary>18. What is the use of margin in CSS and which are their properties?</summary>
  <p>

The margin is used to refers the space around an element, outside of any defined borders. It creates space between elements and their properties are :

`margin-top` : Specifies the margin on the top side of the element.

`margin-right` : Specifies the margin on the right side of the element.

`margin-bottom` : Specifies the margin on the bottom side of the element.

`margin-left` : Specifies the margin on the left side of the element.

</p>

</details>

<details>
  <summary>19. Could you explain the distinction between margin and padding in CSS?</summary>
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
  <summary>20. What is the box model in CSS and how does it operate?</summary>
  <p>

The CSS box model is a fundamental concept that describes how elements on a webpage are rendered and how their dimensions are calculated. It consists of four layers such as content, padding, margin, and border.
It operates by providing a way to control the sizing, spacing, and layout of elements on a web page.

  </p>

</details>

<details>
  <summary>21. What is the use of box-shadow in CSS?</summary>
  <p>

The box-shadow property in CSS is used to add a shadow effect to an element's box, providing depth and dimension to the layout. It allows you to create visually appealing effects by simulating the appearance of shadows or glows around elements.

1. **Offset :** It specifies the horizontal and vertical distance of the shadow from the element. You can specify the values using length units, such as pixels (px) or percentages (%).

2. **Blur Radius :** This value determines the amount of blur applied to the shadow. A higher value creates a more diffused and softer shadow effect.

3. **Spread Distance :** It defines the size of the shadow relative to the element. A positive value expands the shadow, while a negative value shrinks it.

4. **Color :** The color value determines the shadow's color. You can use named colors, hexadecimal values, RGB values, or CSS color keywords to specify the color.

</p>

</details>

<details>
  <summary>22. What is the used of hover selector in CSS?</summary>
  <p>

The `:hover` selector in CSS is used to apply styles to an element when it is being hovered over by the user. It allows you to define different styles or effects that should be applied to an element when the user's cursor is positioned over it.

  </p>

</details>

<details>
  <summary>23. Which CSS property is used to style the hyperlinks on hover (Mouse over)?</summary>
  <p>

To style hyperlinks specifically when the mouse is hovering over them, you can use the `:hover` pseudo-class selector in combining with the a selector (targeting anchor elements). This allows you to apply different styles to hyperlinks when they are being hovered.

  </p>

</details>

<details>
  <summary>24. How can you create a CSS animation or transition?</summary>
  <p>

**CSS Animation:** Use the animation property on the targeted element to apply the animation and specify its duration, timing function, delay, and other properties.

**CSS Transitions:** Use the animation property on the targeted element to apply the transition and specify the CSS properties you want to transition and their duration, timing function, delay, etc.

  </p>

</details>

<details>
  <summary>25. How can you override CSS styles using specificity and the !important rule?</summary>
  <p>

To override CSS styles using specificity and the !important rule, use a more specific selector for the element and add `!important` to the CSS property value. CSS property specificity determines which styles take precedence when multiple rules target the same element. Styles with higher specificity override styles with lower specificity. Specificity is calculated based on the combination of selectors used in a CSS rule.

  </p>

</details>

<details>
  <summary>26. What is the purpose of comments in CSS, and what are the two types of comments that can be used in CSS?</summary>
  <p>

The purpose of comments in CSS is to add notes, explanations, or reminders within the code.

There are two type of comments :

Single Line : Single line comment denoted by `//`

Multi Line : Muti line comment denoted by `/*  */`

  </p>

</details>

<details>
  <summary>27. Can comments also span multiple lines?</summary>
  <p>

Yes, comments can also span multiple lines.

  </p>

</details>

<details>
  <summary>28. What is the purpose of the "position" property and its values in CSS?</summary>
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

<details>
  <summary>29. Could you please explain the concept of device breakpoints in media queries?</summary>
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
  <summary>31. What is the significance of the "float" property in CSS?</summary>
  <p>

The float property in CSS is used to position and align elements horizontally within their parent containers. When an element is floated, it is taken out of the normal flow of the document and positioned to the left or right of its container.

  </p>

</details>

<details>
  <summary>32. What is the purpose of vendor prefixes in CSS and why are they used?</summary>
  <p>

The purpose of vendor prefixes is to allow browser vendors to implement new CSS features before they are standardized feedback from developers and the community. It is used to implement non-standard CSS features in different web browsers.

  </p>

</details>

<details>
  <summary>33. What is flexbox in CSS?</summary>
  <p>

Flexbox stands for flexible box. To align cards flexibly inside to container. Flexbox make it simple to align items vertically and horizontally using rows and columns. Flexbox makes it easier to design a flexible responsive layout of a webpage.

</p>

</details>

<details>
  <summary>34. What is the purpose of the flex-direction property?</summary>
  <p>

The flex-direction property determines the arrangement and flow direction of flex items within a flex container. It controls whether the flex items are arranged horizontally or vertically and the order in which they are displayed. By adjusting the flex-direction value, you can change the layout from left-to-right to right-to-left or top-to-bottom to bottom-to-top, providing flexibility in designing different types of layouts.

  </p>

</details>

<details>
<summary>35. Whats the use of flex direction in CSS and explain their directions?</summary>
<p>

Flex direction are used to define the direction of child item are placed in the flex container.

There are four flex directions in CSS :

`flex-direction: row;` : By default direction is row. Child items are are Left to Right direction.

`flex-direction: row-reverse;` : Child item are Right to Left direction.

`flex-direction: column;` : Child items are Top to Bottom direction.

`flex-direction: column-reverse;` : Child items are Bottom to Top direction.

</p>

</details>

<details>
  <summary>36. What are the main properties used to control the layout of flex containers and flex items?</summary>
  <p>

The main properties used to control the layout of flex containers and flex items are :

`display` : Sets the element as a flex container.

`flex-direction` : It determines the direction row or column within the flex container.

`justify-content` : Aligns flex items along the main axis.

`align-items` : Aligns flex items along the cross axis.

  </p>

</details>

<details>
  <summary>37. How do you create a responsive layout using flexbox?</summary>
  <p>

To create a responsive layout using flexbox, you can use media queries to change the flex container's properties, such as flex-direction, flex-wrap, and justify-content, based on different screen sizes.

  </p>

</details>

<details>
  <summary>38. What is a media query in CSS and what is its purpose?</summary>
  <p>

A media query in CSS is a technique used to apply different styles based on the characteristics of the device or viewport, such as screen size allowing for responsive design and optimized user experiences across various devices and screen sizes.

  </p>

</details>

<details>
  <summary>39. What are the different types of media features that can be used in a media query?</summary>
  <p>

Media queries in CSS allow you to target and customize styles based on various device characteristics such as screen size, aspect ratio, orientation, resolution, color, and more, enabling precise styling adjustments for different devices.

  </p>

</details>

<details>
  <summary> 40. Are media queries limited to screen sizes, or can they target other device characteristics as well?</summary>
  <p>

Media queries can target more than just screen sizes; they can also be used to customize styles based on various device characteristics like screen size, aspect ratio, resolution, color, input capabilities (mouse or touchscreen), and even the user's preferred display mode (light or dark), providing a flexible way to adapt designs to different devices and user preferences.

  </p>

</details>

<details>
  <summary>41. How would you create a responsive navigation menu using CSS?r</summary>
  <p>

To create a responsive navigation menu using CSS, you can used CSS media queries, flexbox, or CSS grid to adjust the structure and visual presentation of the menu based on the screen size or device, and user-friendly across different devices and viewport sizes.

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

  </p>

</details>

<details>
  <summary>44. How would you style a hyperlink differently when it is being hovered over?</summary>
  <p>

To style a hyperlink differently when it is being hovered over, you can use CSS and the `:hover` pseudo-class to apply specific styles when the mouse hovers over the link, allowing you to change its color, or add effects.

 </p>

 </details>

<details>
  <summary>45. How do you hide an element using CSS?</summary>
  <p>

To hide an element using CSS, you can use the `display` property and set value to `none`, which removes the element from the page flow and makes it invisible.

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
  <summary>47. What are CSS backgrounds, list the properties?</summary>
  <p>

The CSS backgrounds are used to style and customize the background of an element, and there are some main properties `background-color`, `background-image`, `background-repeat` and more.

**background-color:** Sets the background color of an element.

**background-image:** Specifies the URL or path to an image to be used as the background.

**background-repeat:** Determines how the background image is repeated, such as repeat, repeat-x, repeat-y, no-repeat, space, or round.

</p>

</details>

<details>
  <summary>48. What are the various positioning properties in CSS?</summary>
  <p>

The various positioning properties in CSS are `static`, `relative`, `absolute`, `fixed` and `sticky` which determine how elements are positioned and interact with the document flow.

**position :** Specifies the positioning method for an element, which can be static, relative, absolute, fixed, or sticky.

**top, right, bottom, left :** These properties, used in conjunction with the position property, specify the offset or distance of an element from the top, right, bottom, or left edges of its positioned container.

**z-index :** Determines the stacking order of positioned elements. Elements with a higher z-index value appear in front of elements with a lower value.

  </p>

</details>

<details>
  <summary>49. What is meant by universal selector?</summary>
  <p>
 
In CSS, the universal selector, denoted by the asterisk `*`, is a special selector that matches any element in the HTML document. It applies styles to all elements on the page, regardless of their type or location within the document structure. The universal selector targets every element, including the &lt;head&gt; , &lt;body&gt; , &lt;div&gt; , &lt;p&gt; , &lt;span&gt; , etc.

  </p>

</details>

<details>
  <summary>50. How can you use the CSS property to repeat the image?</summary>
  <p>

This property is used to repeat the image. It can repeat image in differnet direction

**background-repeat:** repeat-x; This value is used to repeat the background image horizontally along the x-axis.

**background-repeat:** repeat-y; This value is used to repeat the background image horizontally along the y-axis.

**background-repeat:** repeat; This value is used to repeat the background image.

</p>

</details>
