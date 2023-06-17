---
title: CSS Interview Questions
description: "CSS Interview Questions"
hide_table_of_contents: true
---

**1. What is CSS and what is its role in web development?**

**Ans :** CSS stands for Cascading Style Sheets. It is used to design webpages and control the visual appearance of HTML elements. CSS describes how HTML elements should be displayed on different devices such as desktops, laptops, tablets or other media.

---

**2. How many ways we include CSS in an HTML document?**

**Ans :** There are three ways we include CSS in HTML document : inline css, document css and external css.

---

**3. What is the difference between inline, internal, and external CSS?**

**Ans :** There are some differences are given below -

**i. Inline CSS :** Inline CSS is applied directly to HTML elements using the style attribute. It allows you to apply CSS styles to individual HTML tags.

**ii. Internal/ Document CSS :** Document level CSS used `<style>` element in the `<head>` section.

**iii. External CSS :** External CSS is stored in a separate CSS file and linked to the HTML document using the `<link>` element. The CSS file is saved with a `style.css` extension

---

**4. What are selectors in CSS and how do they work?**

**Ans :** CSS selectors are used to select HTML elements that you want to style.

There are different types of CSS selectors:

**i. Class Selector :** The class selector selects elements based on their class attribute. It is denoted by a dot `(.)` followed by the class name.

**ii. ID Selector :** The ID selector selects elements based on their ID attribute. It is denoted by a hash `(#)` followed by the ID name.

**iii. Tagname Selector :** Tagname selector selects HTML elements based on their tag names. For example, h1, h2, p, etc.

---

**5. How do you change the font style and size using CSS?**

**Ans :** To change the font style and size using CSS, you can use the `font-family` and `font-size` properties.

---

**6. What are the different ways to apply CSS styles to an element?**

**Ans :** There are three ways to apply style to an element :

- **Inline Styles :** Inline styles are applied directly to individual HTML elements using the style attribute.

- **Internal Styles :** Internal styles are embedded within the HTML document using the `<style>` tags in the `<head>` section.

- **External Stylesheets :** External stylesheets involve linking an external CSS file to the HTML document using the `<link>` tag. The CSS code resides in a separate file with a `.css` extension.

---

**7. What is border style in CSS and which properties are inclueds in it?**

**Ans :** A border is a decorative or structural element that can be added to HTML elements to visually separate them from other elements. It is a line that surrounds the content of an element and can be customized in terms of color, width, and style.

`border-style` : defines the style of the border line.

`border-color` : sets the color of the border.

`border-width` : sets the thickness or width of the border.

---

**8. What are the different types of border styles in CSS?**

**Ans :** There are four types of border style in CSS :

`solid` : Creates a continuous line.👉\_\_\_

`double` : Creates two parallel lines. 👉 ====

`dashed` : Creates a series of short dashes. 👉 ------

`dotted` : Creates a series of small dots.👉 ..........

---

**9. What is used of border radius property in CSS and how we used this property?**

**Ans :** The border-radius CSS property is used to round the corners of an element's outer border edge. It provides a way to give elements a rounded appearance.

You can provide value to each corner : For example, `border-radius: 0px 50px 0px 50px;`

The 1st value applies to the top-left corner. The 2nd value applies to the top-right corner. The 3rd value applies to the bottom-right corner. The 4th value applies to the bottom-left corner.

---

**10. How do you center align an element horizontally and vertically using CSS?**

**Ans :** To center align an element horizontally and vertically using CSS, you can use the following CSS properties : display: flex; justify-content: center; align-items: center;

**Example :**

```css
.element {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

**11. How do you add a background color or image to an element using CSS?**

**Ans :** To adding background color in the CSS, you can used this syntax: `background-color: color_name;` and
for adding image in the CSS, you can used this syntax : `background-image: url(" ");`

**Example :**

```css
.element {
  background-color: red;
  background-image: url("path/to/image.jpg");
}
```

---

**12. What is the box model in CSS?**

**Ans :** The CSS box model is a fundamental concept that describes how elements on a webpage are rendered and how their dimensions are calculated. It consists of four layers: `content`, `padding`, `margin`, and `border`.

---

**13. What is the used of margin in CSS and which are their properties?**

**Ans :** The margin is used to refers the space around an element, outside of any defined borders. It creates space between elements. The CSS properties used to control margin:

`margin-top` : Specifies the margin on the top side of the element.

`margin-right` : Specifies the margin on the right side of the element.

`margin-bottom` : Specifies the margin on the bottom side of the element.

`margin-left` : Specifies the margin on the left side of the element.

---

**14. What is the difference between margin and padding in CSS?**

**Ans :** Difference between margin and padding :

| Margin                                                                                | Padding                                                                                |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Margin refers to the space outside an element.                                        | Padding refers to the space between an element's content and its border.               |
| Margin creates space between elements.                                                | Padding creates space within the element, inside any defined borders.                  |
| Margin do not have a background color.                                                | Padding can have a background color.                                                   |
| Margin are used for creating spacing between elements.                                | Padding is used for creating space within an element.                                  |
| The margin property can be set individually for each side (top, right, bottom, left). | The padding property can be set individually for each side (top, right, bottom, left). |

---

**15. What is the used of hover selector in CSS?**

**Ans :** The `:hover` selector is used to apply styles to an element when it is being hovered over by the mouse. It allows you to add interactive effects to elements on your web page.

---

**16. What is the used of box-shadow in CSS?**

**Ans :** The box-shadow property is used to add one or more shadows to an element. It allows you to create visually appealing effects, such as giving the illusion of depth or highlighting elements.

---

**17. What is work of text-align property in CSS and what are their values?**

**Ans :** The text-align property is used to specify the horizontal alignment of the text within its containing element. It allows you to control how the text is aligned, whether it's aligned to the `left`, `right`, `center` and `justified`.

There are four values for the text-align property:

`text-align: left;` `text-align: right;` `text-align: center;` `text-align: justify;`

---

**18. What is the used of font family property in CSS?**

**Ans :** The font-family property is used to specify the font family for the text content of an element. It allows you to define a prioritized list of font families to be used for rendering the text.

---

**19. What is the used of display property? and difference between their properties (Inline,Block and Inline-block).**

**Ans :** The display property in CSS is used to control the layout and behavior of elements. There are three commonly used display properties: `inline`, `block` and `inline-block`.

| Inline                             | Block                             | Inline-Block                     |
| ---------------------------------- | --------------------------------- | -------------------------------- |
| Does not start from new line.      | Start from new line.              | Start from same line.            |
| Take required space.               | Take complete space horizontally. | Take required space.             |
| We can't provide height and width. | We can provide height and width.  | We can provide height and width. |

---

**20. What is the purpose of the "position" property and its values in CSS?**

**Ans :** The position property is used to set the position to the CSS element accordingly.

There are five different types of positions in css :

- `static` : The static position is by default position. It does not provide any effect.
- `relative` : The relative position is the relative to original position or nearest element.
- `sticky` : A sticky element are relative and fixed, its depending on the scroll position.
- `fixed` : Fixed is set with respect to viewport. Removed from normal flow.
- `absolute` : It is relative to parent element. This element is positioned relative to the first parent element and absolute to its child elements.

---

**21. What is the difference between absolute and relative positioning in CSS?**

**Ans :**

| Absolute                                         | Relative                                            |
| ------------------------------------------------ | --------------------------------------------------- |
| Absolute position is relative to parent element. | Relative position is relative to original position. |

---

**22. What is the purpose of pseudo-classes in CSS?**

**Ans :**

---

**23. How do you style a hyperlink differently when it is hovered over?**

**Ans :**

---

**24. How do you create a CSS animation or transition?**

**Ans :**

---

**25. What is the purpose of the "float" property in CSS?**

**Ans :**

---

**26. How do you create a responsive navigation menu using CSS?**

**Ans :**

---

**27. How do you override CSS styles using specificity and the !important rule?**

**Ans :**

---

**28. How do you hide an element using CSS?**

**Ans :**

---

**29. How do you create a responsive design using CSS media queries?**

**Ans :**

---

**30. What are vendor prefixes in CSS and why are they used?**

**Ans :**

---
