---
title: HTML Interview Questions
description: "HTML Interview Questions"
hide_table_of_contents: true
---

<details>
<summary>1. What is HTML?</summary>
<p>
   
HTML is a markup language used for creating web pages. It stands for Hyper Text Markup Language.

</p>
</details>

<details>
  <summary>2. What are tags in HTML?</summary>
  <p>
   
HTML tags are used to define and structure the content of a web page. They provide meaning and formatting to the text or elements within the tags. Tags have opening and closing parts.

  </p>
</details>

<details>
  <summary>3.  What is the purpose of the &lt;head&gt; tag in HTML?</summary>
  <p>
   
 The purpose of the head tag is to discribe the identity of webpage.

  </p>
</details>

<details>
  <summary>4. How do you create a heading using HTML?</summary>
  <p>
   
   Headings in HTML can be created using heading tags. There are six levels of headings: &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt; and &lt;h6&gt;. The &lt;h1&gt; tag represents the highest level of heading, while &lt;h6&gt; represents the lowest level of heading.

  </p>
</details>

<details>
  <summary> 5. What is the difference between empty tag and container tag?</summary>
  <p>
   
An empty tag, also known as a self-closing tag, does not have any content between its opening and closing parts. Examples of empty tags include &lt;br&gt; for line breaks or &lt;img&gt; for images. They do not require a closing tag.<br/>
On the other hand, a container tag, also known as a paired tag, consists of both an opening tag and a closing tag. The opening tag defines the start of a block of content, and the closing tag defines the end of that block. Examples of container tags include &lt;b&gt; and &lt;br&gt; for bold text or &lt;body&gt; and git  for the entire body content of a web page.

  </p>

</details>

<details>
  <summary> 6. How to add manually space in HTML?</summary>
  <p>
   
  If you want to add manually space in your HTML code then you can use &nbsp means non-breaking space. Here example of how to add space between two words:

```html
<p>Hello&nbsp;world!</p>
```

In the above example, the `&nbsp;` is used to add space between the words "Hello" and "world". When the HTML is rendered in a web browser, the two words will appear next to each other with a space between them.

  </p>

</details>

<details>
<summary> 7. What is the use of &lt;p&gt; tag in HTML?</summary>
<p>
      
The paragraph tag is used to define a block of text. The paragraph tag start from new line. It provide margin and line spacing.<br/> The example of &lt;p&gt; tag is <br/>

```html
<p>
  This is a paragraph of text. It contains several sentences that are related to
  each other and form a single unit of thought.
</p>
```

In the above example, the text "This is a paragraph of text. It contains several sentences that are related to each other and form a single unit of thought." it is enclosed between the opening `<p>` tag and the closing `</p>` tag. This tells the web browser that this is a paragraph of text, and it should be formatted.

</p>

</details>

<details>
  <summary> 8. What is an div tag in HTML?
</summary>
  <p>
  
The &lt;div&gt;  tag in HTML is a container that helps to create a division, separate block, or section. It doesn't have a specific meaning but it is used for structuring and styling purposes.
The example of div tag is

```html
<div>
  <h1>Welcome to Rode to code.</h1>
  <p>This is a paragraph of text.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>
```

In the above example, the `<div>` tag is used to group together a heading (`<h1>`), paragraph (`<p>`), and an unordered list (`<ul>`) into a container. This can be useful for applying styles to multiple elements at once, or for structuring the content of a web page in a logical way.

   </p>

</details>

<details>
  <summary>9. How can you create a break line in HTML?</summary>
  <p>
  
 To create a line break in HTML you can use the &lt;br&gt; tag. The &lt;br&gt; is a self-closing tag, it means does not have a closing tag. The example of the &lt;br&gt; tag is:

```html
<p>This is the first line.<br />This is the second line.</p>
```

In the above example, the `<br>` tag is used to create a line break between the first and second lines of text. When the web page is displayed in a browser, there will be a line break between the two lines of text.

  </p>

</details>

<details>
<summary>10. How can you add comments in HTML code? </summary>
<p>
     
To add comments in HTML you can use  &lt;!-- --&gt; syntax. That allows you to add comments in HTML code. That are ignored by the browser and not displayed on the webpage. Here the example of how you can add a comment to your HTML code:

```html
<!-- This is a comment. It will not be displayed in the browser. -->
```

In this example, the text "This is a comment. It will not be displayed in the browser." is a comment, and will not be displayed in the browser when the web page is viewed.

 </p>

</details>

<details>
  <summary> 11. What is an attributes? </summary>
  <p>
   
Attributes are used to describe tags. That provides more information about tags. Attributes help to define the characteristics and functionality of HTML tags. Attributes provide additional information about HTML elements. <br/><br/>
For example, let's consider the &lt;img&gt; tag, which is used to display images. It has attributes such as src, alt, and width. The src attribute specifies the URL or file path of the image, the alt attribute provides alternative text for the image (useful for screen readers or when the image cannot be displayed), and the width attribute sets the width of the image.

```html
<img src="tiger.jpg" alt="Image" width="300" />
```

In the above example, the src attribute points to the image file "tiger.jpg", the alt attribute contains the alternative text "Image," and the width attribute sets the width of the image to 300 pixels.

  </p>

</details>

<details>
  <summary> 12. What is the purpose of the &lt;img&gt; tag in HTML, and how can you add image in HTML? </summary>
  <p>
      
The purpose of the &lt;img&gt; tag in HTML is used to display images on a webpage. It is a self-closing tag means it does not need to closing tag. To add an image in HTML, you need to provide the src attribute in the &lt;img&gt; tag. The example of img tag is:

```html
<img src="image.jpg" alt="A beautiful sunset" />
```

In the above example, the &lt;img&gt; tag specifies the source file of the image using the `src` attribute. The `alt` attribute is used to provide a text description of the image for users who cannot see the image.

  </p>

</details>

<details>
  <summary> 13. How can you embed an image in an HTML document? </summary>
  <p>
     
To embed an image in an HTML document you can use the &lt;img&gt; tag. It requires the src attribute that specify the image file's path. You can add additional attributes like alt for alternative text and width and height for image dimensions. The example to img tag is:

```html
<img src="image.jpg" alt="A beautiful sunset" />
```

In this example, the &lt;img&gt; tag specifies the source file (URL) of the image using the src attribute. The alt attribute is used to provide a text description of the image for users who cannot see the image.

  </p>

</details>

<details>
  <summary> 14. what is the use of a &lt;span&gt; tag? </summary>
  <p>
     
The &lt;span&gt; tag helps you to style or manipulate specific parts of your text. It does not have any special meaning on its own. You can use the &lt;span&gt; tag to apply styles, such as font size, color, or background color, to a specific section of text within a larger block of text.

  </p>

</details>

<details>
  <summary> 15. How can you create a hyperlink that opens in a new tab or window? </summary>
  <p>
   
To create a link that opens in a new tab or window in HTML you can use target_blank attribute. The example of how to create a hyperlink that opens in a new tab:

```html
<a href="https://www.roadtocode.org/" target="_blank">text</a>
```

In the above example, the href attribute is specifies the URL of the linked document and the target attribute is set to -blank. That tells the browser to open the linked document in a new tab.

  </p>

</details>

<details>
  <summary> 16. what are the types of list in HTML? </summary>
  <p>
   
  There are two types of lists in HTML.<br/><br/>

1. Ordered list: Ordered list represent the numbered list. These lists are numbered. They are created using the &lt;ol&gt; tag.

For example:

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

2. Unordered list: Unordered list represents bullet points. These lists have bullet points. They are created using the &lt;ul&gt; tag.

For example:

```html
<dl>
  <ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ul>
</dl>
```

  </p>

</details>

<details>
  <summary> 17. What is anchor tag in HTML? </summary>
  <p>
   
The anchor tag in HTML is used to create clickable links that redirect one webpage to other web pages. The href attribute to specify the destination URL or target location. The text or content placed between the opening and closing.

For example:

```html
<a href="https:www.google.com/"></a>
```

In the above example the anchor tag is used to create hyperlink to the google website. When user clicks on the link they will be taken to the google website. The href attribute specifies URL of website you want to link to.

  </p>

</details>

<details>
  <summary> 18. What is a subscript tag? </summary>
  <p>
    
The  &lt;sub&gt; tag is used in HTML to create subscript text, which is text that is smaller and lower than the surrounding text.

For example:

```html
H<sub>2</sub>O
```

In the above example, the number "2" will displayed as subscript text.

You can also use CSS to style the subscript text, such as changing the font size or color.

For example:

```css
sub {
  font-size: 10px;
  color: blue;
}
```

This CSS code will make all subscript text on the page appear smaller and blue.

  </p>

</details>

<details>
  <summary> 19. How can you create a table in HTML? </summary>
  <p>
    
To create a table in HTML, you can use the &lt;table&gt; tag in HTML along with other tags such as &lt;tr&gt; , &lt;th&gt; , and &lt;td&gt;.

</p>

</details>

<details>
  <summary> 20. Which attributes are used for creating the table in HTML? </summary>
  <p>

The attribute are used for creating table in HTML is<br/>

1. &lt;table&gt; tag: The &lt;table&gt; tag is used to create the table.<br/>
2. &lt;tr&gt; tag: The &lt;tr&gt; tag is used to create each row in the table.<br/>
3. &lt;td&gt; tag: The &lt;td&gt; tag is used to create each cell in the table.<br/>
4. &lt;th&gt; tag: The &lt;th&gt; tag is used to create table headers.<br/>
5. colspan: The colspan attribute is used to merge multiple cells horizontally. <br/>
6. rowspan: The rowspan attribute is used to merge multiple cells vertically. <br/><br/>

For example:

```html
<table>
  <tr>
    <th>Product</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Product 1</td>
    <td>$10</td>
  </tr>
  <tr>
    <td>Product 2</td>
    <td>$15</td>
  </tr>
</table>
```

In the above example, the `<table>` tag is used to create a table. The `<tr>` tag is used to create a table row, and the `<th>` tag is used to create a table header. The `<td>` tag is used to create table data.

</p>

</details>

<details>
  <summary> 21. What is the purpose of the &lt;ul&gt; and &lt;ol&gt; tags in HTML? </summary>
  <p>
   
The purpose of the &lt;ul&gt; is used to create an unordered list. The items in the unordered list are displayed with bullet points. <br/>

`Syntax`

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

For example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ordered List</title>
  </head>
  <body>
    <h1>Syllabus of RTC</h1>

    <ul>
      <li>HTML5</li>
      <li>CSS</li>
      <li>Git & Github</li>
      <li>JavaScript</li>
    </ul>
  </body>
</html>
```

In this example, we created an unordered list containing four items "HTML5", "CSS", "Git &Github" and "JavaScript". When you open this HTML file in a web browser it will display the list.

- The purpose of the &lt;ol&gt; is used to create an ordered list. The items in the ordered list are displayed with numbers or letters.

`Syntax`

```html
  <ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ul>
```

For example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>List</title>
  </head>
  <body>
    <h1>Features of RTC</h1>

    <ol>
      <li>Live + Recorded Classes</li>
      <li>Teaching Assistance for Doubt Solving</li>
      <li>Notes for Quick Revision</li>
      <li>Low Fees</li>
    </ol>
  </body>
</html>
```

In the above example, we created an ordered list. This list contains features of RTC such as "Live+ Recorded Classes", "Teaching Assistance for Dout Solving", "Low Fees" and "Notes for Quick Revision".

  </p>

</details>

<details>
  <summary> 22. What is the purpose of the &lt;form&gt; tag in HTML? </summary>
  <p>
    
The purpose of the &lt;form&gt; tag in HTML is used to create a container for the user input. The &lt;form&gt; tag is used to send data from the user's browser to the server.

```html
<form action="">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" /><br />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" /><br />

  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea><br />

  <input type="submit" value="Submit" />
</form>
```

In this example, the `action` attribute is set to "submit-form.php", which is the URL of the script that will handle the form data when the user submits the form. The `method` attribute is set, which means that the form data will be sent in the request body instead of in the URL.

  </p>

</details>

<details>
  <summary> 23. How can you create a text input field in HTML? </summary>
  <p>
    
To create a text input field in HTML, you can use the  &lt;input&gt; tag with type attribute is set text.

```html
<input type="text" name="myText" />
```

This will create a text input field with the name "myText". When the user types something into the field and submits the form, the value of the field will be sent to the server along with the name "myText".

  </p>

</details>

<details>
  <summary>24. How can you create an ordered list with Roman numerals (I, II, III) in HTML? </summary>
  <p>
   
To create an ordered list with Roman numerals (I, II, III) in HTML, you can use the &lt;ol&gt; tag with type attribute is set I.

  </p>

</details>

<details>
  <summary> 25. what is the use of video tag in HTML?</summary>
  <p>
      
The &lt;video&gt; tag in HTML is used to display videos on a web page. It allows you to play videos directly in the browser without the need for separate video player.

For example:

```html
<video src="myvideo.mp4" controls>
  Your browser does not support the video tag.
</video>
```

In this example, the `src` attribute specifies the URL of the video file to be played back. The `controls` attribute adds a set of playback controls to the video player, including play/pause, volume, and fullscreen.

  </p>

</details>

<details>
  <summary> 26. How can you add a background image to an HTML element? </summary>
  <p>
    
To add a background image to an HTML element, you can use the `background-image` property in CSS.

For example:

```html
<style>
  .my-element {
    background-image: url("my-image.jpg");
    background-size: cover;
    background-position: center;
  }
</style>

<div class="my-element">
  <!-- Content goes here -->
</div>
```

In this example, we use the `.my-element` class to target a `<div>` element and set its background image to `my-image.jpg`. We also set the `background-size` property to `cover` to make the image cover the entire element, and the `background-position` property to `center` to center the image within the element.

  </p>

</details>

<details>
  <summary>27. What is the purpose of the &lt;iframe&gt; tag in HTML? </summary>
  <p>
   
The purpose of the &lt;iframe&gt; tag is used to embed another HTML document into the current document. It allows us to display the content of another website on our own webpage.

For example:

```html
<iframe src="https://www.google.com"></iframe>
```

In the above example, the src attribute specifies the URL of the web page to be embedded. When the document is loaded in web browser the web page specified by the src attribute will be displayed within the &lt;iframe&gt; element.

  </p>

</details>

<details>
  <summary> 28. How can you create a dropdown menu in HTML? </summary>
  <p>
    
To create a dropdown menu in HTML, you can use the &lt;select&gt; and &lt;option&gt; elements. The drop-down menu is a user interface control that allows users to choose one value from multiple options. The &lt;select&gt; element creates the dropdown menu. And the &lt;option&gt; element creates the individual options in the menu.

For example:

```html
<select id="my-dropdown" name="my-dropdown">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
```

In the above example, we use the `<select>` tag to create the dropdown menu, and the `<option>` tags to specify the options that will be displayed in the menu. The `value` attribute of each `<option>` tag specifies the value that will be submitted to the server when the form is submitted.

  </p>

</details>

<details>
  <summary> 29. What is the purpose of the &lt;label&gt; tag in HTML forms? </summary>
  <p>
   
The purpose of the &lt;label&gt; tag is to specify a label for &lt;input&gt; tag. The label is a normal text, its shows information about your input element.

For example:

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" />
```

In the above example, the `<label>` element is associated with the `<input>` element using the `for` attribute. The value of the `for` attribute should match the `id` attribute of the input element. This tells the browser that the label is associated with the input element, and clicking on the label will automatically focus the input element.

  </p>

</details>

<details>
  <summary> 30. What is checkbox in HTML and how to create it? </summary>
  <p>
   
Checkbox in HTML is a user interface element that allows users to select one or more options from  multiple options. To create a checkbox in HTML, you can use the &lt;input&gt; tag with the type attribute set to checkbox.

For example:

```html
<input type="checkbox" id="fruit1" name="fruit" value="apple" />
<label for="fruit1">Apple</label>

<input type="checkbox" id="fruit2" name="fruit" value="banana" />
<label for="fruit2">Banana</label>

<input type="checkbox" id="fruit3" name="fruit" value="orange" />
<label for="fruit3">Orange</label>
```

In this example, we have three checkboxes, each with a unique `id`, `name`, and `value`. The `id` attribute is used to associate the `<label>` element with the corresponding `<input>` element, while the `name` attribute is used to group the checkboxes together. The `value` attribute specifies the value that will be submitted to the server if the checkbox is selected.

  </p>

</details>

<details>
  <summary>31. What is the purpose of the &lt;audio&gt; tag? </summary>
  <p>
   
The purpose of the &lt;audio&gt; tag is used to embed audio content, such as music or sound files, directly into a web page.

For example:

```html
<audio controls>
  <source src="music.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

In this example, the `<audio>` element includes a `<source>` element that specifies the URL of the audio file (`music.mp3`) and the MIME type of the file (`audio/mpeg`). The `controls` attribute adds basic audio controls to the player.

  </p>

</details>

<details>
  <summary> 32. What are the attributes of vedio tag? </summary>
  <p>
   
  The attribute of the vedio tag is
1. Controls :  Adds vedio controls such as play, pause, volume and fullscreen toggle.<br/>
2. Height and width : You can set height and width of the vedio element.<br/>
3. Autoplay : Automatically starts playing the video when the web page is loaded.<br/>
4. Muted : Mute the audio of the vedio.<br/>
5. Poster : Displays an images as a placeholder before the vedio is loaded.<br/>

For example:

```html
<video
  src="video.mp4"
  controls
  width="640"
  height="360"
  poster="poster.jpg"
  preload="metadata"
>
  Your browser does not support the video tag.
</video>
```

In the example, the `<video>` element includes a `src` attribute that specifies the URL of the video file (`video.mp4`), `controls` attribute that adds basic video controls to the player, `width` and `height` attributes that specify the dimensions of the player, `poster` attribute that specifies an image to be displayed while the video is loading and `preload` attribute that specifies that only the metadata of the video should be preloaded. If the user's browser does not support the `<video>` tag, the text "Your browser does not support the video tag." will be displayed instead.

  </p>

</details>

<details>
  <summary>33. Explain the target attribute in HTML? </summary>
  <p>
   
The target attribute in HTML is used to specify where to open the linked document or resource when a user clicks on a link. It determines the browser window or tab in which the linked content will be displayed. 
     
  </p>

</details>

<details>
  <summary> 34. What is the value attribute in form Tag? </summary>
  <p>
   
 The value attribute are used to specifies the value of an input element. The value attribute represent the default value for the input element. 
 
 For example:

```html
<label for="name">Enter Your Name</label>
<input type="text" id="name" name="name" value="Harshda" />
```

In this example, the `value` attribute is set to "Harshda", so the text input field will be pre-filled with this value when the page loads.

  </p>

</details>

<details>
  <summary> 35. What is the difference between &lt;div&gt; and &lt;span&gt; tag? </summary>
  <p>
   
&lt;div&gt; tag is used for create division, seperate block or a section in an HTML document. The div tag is a block element means it occupies full space. Div tag starts on a new line.<br/>

For Example:

```html
<div class="header">
  <h1>Welcome to my website!</h1>
</div>
```

In this example, the `<div>` tag is used to group the `<h1>` tag together with some CSS styles.

`<span>` tag is an inline element means it occupies only the necessary space to contain its content and Span tag does not create line breaks.

For Example:

```html
<p>This is a <span class="highlight">highlighted</span> sentence.</p>
```

The `<span>` tag is used to highlight a single word within a sentence.

   </p>

</details>

<details>
  <summary> 36. what is button tag? </summary>
  <p>
   
 The button tag in HTML is used to create a clickable button on webpage. It represents a user interface element that interact with the user to perform actions.
 
  For example:

```html
<button type="submit" class="btn">Submit</button>
```

In the above example, the `<button>` tag is used to create a clickable button that submits a form. The `type` attribute is set to "submit" to trigger the form submission, and the `class` attribute is set to "btn" to apply some CSS styles.

  </p>

</details>

<details>
  <summary> 37. What is the purpose of DOCTYPE in HTML? </summary>
  <p>
    
 The purpose of the DOCTYPE declaration in HTML is to specify the version of HTML being used in the document. It is placed at the very beginning of an HTML document before the &lt;html&gt; tag.

 </p>

</details>

<details>
  <summary>38. What is datalist tag? </summary>
  <p>
     
Datalist is a searchable list option. It can help the user, the user does not need to type the whole text data list have predefined suggestions so it can suggest to the user. The example of datalist is:

```html
<label for="course">Choose a courses</label>
<input list="course-list" id="course" name="course" />

<datalist id="course-list">
  <option value="HTML"></option>
  <option value="CSS"></option>
  <option value="JavaScript"></option>
  <option value="React"></option>
  <option value="Bootstrap"></option>
</datalist>
```

In the above example, the `<datalist>` tag is used to create a list of course options that can be selected from when entering data into the "course" input field. The `list` attribute on the input field is set to "course-list" to link it to the `<datalist>` element.

</p>

</details>

<details>
  <summary> 39. What is the purpose of the &lt;meta&gt; tag in HTML? </summary>
  <p>
   
The purpose of the meta tag is to provide additional information and metadata about the HTML document, such as character encoding, viewport settings, description, keywords.

  </p>

</details>

<details>
  <summary> 40. How can you add buttons in HTML? </summary>
  <p>

To add buttons in HTML, you can use the &lt;button&gt; tag. Here the example to create simple button:

```html
<button>Click me!</button>
```

In the above example,the &lt;button&gt; tag create a button that displays the text "Click me!" on the webpage. When the button is clicked, it will not perform any action by default.

  </p>

</details>

<details>
  <summary> 41. What is the alt attribute in HTML? </summary>
  <p>
   
The alt attribute is used to provide the alternative text of the image if the image is not displayed for some reason. The alt attribute is used with &lt;img&gt; tag.

For example:

```html
<img src="tiger.jpg" alt="image not shown" />
```

In the above example, the `alt` attribute provides a description of the image which is a `image`. If the image cannot be displayed for any reason the text "image not shown" will be displayed.

  </p>

</details>

<details>
  <summary>42. Can HTML Tags and elements are same? </summary>
  <p>
    
No, HTML tags and elements are not same. HTML tags are enclosed in angle brackets &lt; and &gt;. They are used to define elements, attributes, and another content. Elements can have opening tag, closing tag and the content that is contained between them.

For example:

```html
<p>This is a paragraph element.</p>
```

In the above example, the `<p>` tag is the opening tag, the `</p>` tag is the closing tag, and the text "This is a paragraph element." is the content of the element.

  </p>

</details>

<details>
  <summary> 43. What is an input tag? </summary>
  <p>
     
The input tag in HTML is used to create an interactive form element and to take input from the user, you can place the input tag within a form tag.

For example:

```html
<input type="text" id="name" name="name" />
```

In the above example, the `<input>` tag creates a text field that allows users to enter their name. The `type` attribute is set to "text" to create a text field, and the `id` and `name` attributes are used to identify the field in the HTML code and to send the data to the server when the form is submitted.

  </p>

</details>

<details>
  <summary> 44. How can you embed video in HTML? </summary>
  <p>
   
To embed audio and video content in HTML, you can use the audio and video tag. That specify the source file using the "src" attribute within the tag.  Both of these tags allow to include audio and video content in your web page.

For example:

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  video tag.
</video>
```

In the above example, the `<video>` tag creates a video player that allows users to play video "video.mp4". The `controls` attribute adds playback controls to the player and the `<source>` tag specifies the location of the video file and the type of video file.

  </p>

</details>

<details>
  <summary> 45. what is the use of br tag? </summary>
  <p>
   
The &lt;br&gt; tag in HTML is a line break tag. It is a self-closing tag, which means it does not have a closing tag.

For example:

```html
<p>Hello Students.<br />Good Evening.</p>
```

In the above example, the `<br>` tag is used to create a line break between the first and second lines of text. When the web page is rendered the text "Hello Students." will be displayed on the first line, and the text "Good Evening." will be displayed on the second line.

  </p>

</details>

<details>
  <summary> 46. Do all HTML tag have an end tag? </summary>
  <p>
     
No, not all HTML tags have end tag. There are some tags that doesn't need to close the tag like &lt;image&gt; , &lt;input&gt; tag.

For example:

```
<img src="image.jpg" alt="img not display">
```

In this example, the `<img>` tag is used to display an image on the web page. The `src` attribute specifies the location of the image file, and the `alt` attribute provides alternative text that is displayed if the image cannot be loaded. Because the `<img>` tag doesn't have any content, it doesn't require an end tag.

  </p>

</details>

<details>
  <summary>47. What is empty tag? </summary>
  <p>
    
The HTML tag which does not have content called as empty tag. Empty tags are self-closing tags that don't require a separate closing tag. Examples of empty tags are the  &lt;input&gt;, &lt;img&gt; and  &lt;br&gt; tags.

  </p>

</details>

<details>
  <summary>48. What are the attributes of audio tag? </summary>
  <p>
   
There are various attributes of the audio tag is:<br/><br/>
Controls: Adds audio controls like play, pause, and volume.<br/>
Muted: Mutes the audio playback by default.<br/>
Autoplay: Automatically starts playing the audio when the web page is loaded.<br/><br/>

For example:

```html
<audio controls>
  <source src="music.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

In this example, the `<audio>` element includes a `<source>` element that specifies the URL of the audio file (`music.mp3`) and the MIME type of the file (`audio/mpeg`). The `controls` attribute adds basic audio controls to the player.

  </p>

</details>

<details>
  <summary> 49.  What is placeholder in form HTML? </summary>
  <p>
   
Placeholder is a attribute which is used to set a short hint that describes the value of an input field. For example, form that asks for the user's email address that have a placeholder that says "Enter your email address here". This gives the user a clear indication of what type of information is expected and can help to reduce errors and confusion.

```html
<input type="text" name="email" placeholder="Enter your email address here" />
```

In the above example, the `placeholder` attribute is set to "Enter your email address here". When the user clicks on the input field, this text will displayed as a hint inside the field. When the user starts typing the text will disappear and be replaced by the user's input.

  </p>

</details>

<details>
  <summary> 50. What is radio button? </summary>
  <p>
     
 A radio button in HTML is form element that allows users to select a single option from multiple choice. It is represented by an &lt;input&gt; element with the type attribute is to set radio.

For example:

```html
<form>
  <input type="radio" name="gender" id="male" />
  <label for="male">Male</label><br />

  <input type="radio" name="gender" id="female" />
  <label for="female">Female</label>
</form>
```

In the above example, the `name` attribute is set to "gender" for each radio button which makes them part of the same group. The `value` attribute is set to "male", "female" for the two options. When the user selects one of the radio buttons, the `value` of the selected button is submitted with the form data. Only one radio button in a group can be selected at a time

  </p>

</details>
