---
title: JSX
description: "JSX"
hide_table_of_contents: true
---

## JSX
`JSX` is **HTML** like syntax which enables to write **JS & HTML** at one place.

`JSX` is a syntax extension for JavaScript that allows developers to write **HTML-like code** in their JavaScript files. JSX syntax allows developers to write HTML-like code in their JavaScript files, making it easier to create complex user interfaces.

`JSX` is a strict version of HTML, as it has its own set of rules and syntax. In JSX, every element must be **closed**, including **self-closing tags**, and only one parent element is allowed.

`JSX` also allows developers to embed JavaScript expressions inside **curly braces** `{}`.

**Code :**

```js
 function App()
 {
    return(
        <>
        <h1>Hello {5+5}</h1>
        </>
    )
 }
```


The above code appears to be written in `JSX` syntax and defines a function component named App.

This component returns an element containing an h1 heading element with the text `Hello 10`. The expression `{5+5}` is evaluated as `10` and is used as the content of the heading. 