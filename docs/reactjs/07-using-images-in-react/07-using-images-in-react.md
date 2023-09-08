---
title:  Using Images In React
description: "Using Images In React"
hide_table_of_contents: true
---

The displaying pictures within a React web application. This involves tasks like importing image files, showing them on your app's pages or components.

There are several ways to do it. Here's a step-by-step guide on how to use images in a React application:

1. **Prepare Your Images:**
   - First, make sure you have the images you want to use in your React project. Place these images in a folder within your project directory, typically named `public` or `src`.

2. **Import the Image:**
   - To use an image in your React component, you need to import it. You can use the `import` statement at the top of your component file to do this.<br/>
   
  **For example:**
   ```javascript
   import ImgPizza from './pizza.png'; // Replace './pizza.png' with the actual path to your image
   ```

   Here, `ImgPizza` is a variable that now holds the image.

3. **Render the Image:**
   - To display the image in your component, use the `<img>` HTML element with the `src` attribute set to the imported image variable. 

   **For example:**
   ```javascript
   <img src={ImgPizza} alt="Pizza" />
   ```

   - The `alt` attribute is used to provide alternative text for the image.

4. **CSS Styling (Optional):**
   - You can use CSS styles to control the appearance and layout of your image. You can apply styles inline using the `style` attribute or by adding CSS classes and defining styles in your CSS file.

   ```javascript
   <img src={ImgPizza} alt="Pizza" style={{ width: '200px', height: 'auto' }} />
   ```

   Or, in your CSS file:

   ```css
   .pizza-image {
     width: 200px;
     height: auto;
   }
   ```

   In your component:

   ```javascript
   <img src={ImgPizza} alt="Pizza" className="pizza-image" />
   ```

**Example:**

```js showLineNumbers="true"
import ImgPizza from './pizza.png'

export default function GoodComponent() {
    return(
        <img src={ImgPizza} alt="React Logo" />
    )
}
```
**Output :**

<img src="/react/07/screenshot1.png" alt="screenshot1.png" width="600px"/>

**Example Explanation :**

In Line 1, `import ImgPizza from './pizza.png'`: In this line, we are importing an image of a pizza. We're giving it the name `ImgPizza` so that we can use it in our component.

Line 2, This line `export default function GoodComponent() {}`: Here, we're defining a component named `GoodComponent`. This component is meant to display an image.

Line 4 and 12, Inside the `return` statement, we have `<img src={ImgPizza} alt="React Logo" />`. This part is responsible for rendering the image on the web page.

   - `<img>`: This is an HTML element used for displaying images on a webpage.

   - `src={ImgPizza}`: Here, we are specifying the `source (src)` of the image. We're using the `ImgPizza` variable that we imported earlier to tell the browser where to find the pizza image.

   - `alt="React Logo"`: This is used to provide an alternative text for the image.

So, this code imports an image of a pizza and creates a React component called `GoodComponent` that displays the pizza image on a webpage when used.
