---
title: Favicon
description: Favicon
hide_table_of_content: true
---

## Favicon  
A `favicon` (short for "favorite icon") is a small icon associated with a particular website or webpage. It is displayed in various places such as:
1. Browser Tabs: Next to the page's title.  
2. Bookmarks/Favorites List: When the page is bookmarked.  

**Characteristics of a Favicon:**  
* Size: Common sizes include 16x16, 32x32, and 48x48 pixels.  
* Format: Typically in .ico, .png, or .gif format.  
* Location: Traditionally, it is placed in the root directory of a website as favicon.ico, but it can also be specified in the HTML of a webpage.  

## How to Add a Favicon to a Website:  
To add a `favicon` to your website, include the following line in the `<head> `section of your HTML:  
```html
 <link rel="favicon" href="path/to/favicon.ico" type="image/x-icon">
``` 
For different formats and sizes, you can use:
```html
<link rel="favicon" href="path/to/favicon.png" type="image/png">
<link rel="favicon" sizes="16x16" href="path/to/favicon-16x16.png" type="image/png">
<link rel="favicon" sizes="32x32" href="path/to/favicon-32x32.png" type="image/png">
```

Favicons enhance the user experience by helping users quickly identify and locate a website among their open tabs.

**Example :**

```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Favicon</title>
    <!-- Link to favicon in .PNG format -->
    <link rel="favicon" href="c:./favicon.png" type="image/x-icon">

</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is an example of adding a favicon to your site.</p>
</body>
</html>
```

**OUTPUT :**  


