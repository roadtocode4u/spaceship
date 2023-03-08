---
title: Element Selectors and DOM Manipulation
description: "Element Selectors and DOM Manipulation"
hide_table_of_contents: true
---
## Element Selectors in Javascript

**Case**

1. Camel Case 
   
   ex: HelloWorldBye

   ex: helloWorldBye

2. Snake case 

    ex : hello_world

## Element Selectors in Javascript

```html
1. getElementById()
2. getElementsByClassName()
````

```getElementById()```

`getElementById()` is a method in JavaScript that is used to retrieve a reference to an HTML element with a specific `identifier` or `ID`. This method searches the document for an element with a matching `ID` and returns a reference to it if found. 

**Code :**

```html
<!DOCTYPE html>
<html>
<head>
    <title> Javscript </title>
</head>

<body>
    <h1 id="firstHeading">This is Heading 1</h1>

    <h2 id="secondHeading">This is Heading 2</h2>

    <script>
      const tag = document.getElementById("firstHeading");
     console.log(tag);
    </script>
</body>
</html>
```

In the above code is an example of using the `getElementById()` method to retrieve a reference to an HTML element with the ID `firstHeading` and it to the console using `console.log()`.

The first two lines of code define two heading elements with IDs ``firstHeading` and `secondHeading`. The third line uses `getElementById()` to retrieve a reference to the `firstHeading` element and assigns it to the variable `tag`. The fourth line logs the value of tag to the console, which will be the HTML element with the ID `firstHeading`.


**Code :**
```html
<!DOCTYPE html>
<html>
<head>
    <title> Javscript </title>
</head>

<body>
   <h1 id="firstHeading">This is Heading 1</h1>

    <h2 id="secondHeading">This is Heading 2</h2>

    <script>
      const tag = document.getElementById("secondHeading");
      tag.innerHTML = "Modified Heading"
    </script>
</body>
</html>
```

In above code is an example of using the `getElementById()` method to retrieve a reference to an HTML element with the ID `secondHeading` and then accessing its `innerHTML` property to change its content.

The first two lines of code define two heading elements with IDs `firstHeading` and `secondHeading`. The third line uses `getElementById()` to retrieve a reference to the `secondHeading` element and assigns it to the variable `tag`.

The fourth line sets the `innerHTML` property of the tag element to `Modified Heading`, which will replace the original text `This is Heading 2` with `Modified Heading`.

When you run this code, you should see the text of the `secondHeading` element updated in the browser to display `Modified Heading`.

