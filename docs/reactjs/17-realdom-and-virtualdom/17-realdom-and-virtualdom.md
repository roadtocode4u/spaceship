---
title: RealDOM and VirtualDOM
description: "RealDOM and VirtualDOM"
hide_table_of_contents: true
---
**Real DOM** and **Virtual DOM** are concepts in web development that pertain to the way web browsers manage and update the structure of web pages. They are key components of popular JavaScript libraries and frameworks like React.

Understanding the Fundamentals of `DOM`,  `Virtual DOM`,  `Diffing Algorithms`,  and `Reconciliation`.

```jsx
1. RealDom
2. Virtual Dom
3. diffing Algorithm
4. Reconciliation
```  
## 1. **Real DOM:**
   - The **Real DOM** (Document Object Model) is the actual `tree-like structure` that represents the HTML elements of a web page.
   - It is a `hierarchical representation` of all the HTML elements on a page, and it corresponds directly to the structure of the HTML document.
   - Whenever there is a change in the web page's content or structure, the Real DOM gets updated to reflect these changes.

## 2. **Virtual DOM:**
   - The** Virtual DOM** is an abstraction or a lightweight **copy of the Real DOM** created and managed by JavaScript libraries or frameworks like React.
   - Instead of directly modifying the Real DOM when changes occur, changes are first made to the Virtual DOM.
   - The Virtual DOM acts as an intermediary layer that allows the framework to compare the current state of the Virtual DOM with its previous state, identifying the differences or changes.
   - Once the differences are identified, the framework can efficiently update the Real DOM only in the places where changes occurred, reducing the number of direct interactions with the browser's rendering engine.
   - This process is often referred to as "reconciliation."

The main advantage of using the Virtual DOM is that it can significantly improve the performance of web applications. By minimizing direct updates to the Real DOM and batching changes, it reduces the time and resources required for rendering updates. This makes web applications built with frameworks like React more responsive and efficient.

Real DOM represents the actual structure of a web page, while Virtual DOM is a lightweight copy of the Real DOM used to optimize updates and improve performance in web applications.

## 3. diffing Algorith'm

The term **"diffing algorithm"** (short for "difference algorithm") refers to an algorithm used to compare two sets of data or structures and identify the differences or changes between them. In the context of web development, it is often used in combination with `Virtual DOM` to efficiently update the `Real DOM` when changes occur in a web application.

## 4. Reconciliation

`Reconciliation` is process of Changing elements is a react components using virtualDom and **Diff Algorithm**.

`Reconciliation` is the process of efficiently updating the real **Document Object Model (DOM)** based on changes made to the **Virtual DOM**, which represents the desired state of the user interface. It involves identifying the differences between the current Virtual DOM and the previous one and making minimal updates to the real DOM to reflect those changes. Reconciliation is a key technique that helps React applications stay fast and responsive.





