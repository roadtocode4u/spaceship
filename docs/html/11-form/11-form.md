---
title: Forms
description: "Forms"
hide_table_of_contents: true
---

# Forms

Forms in HTML are used to collect input from users. They can include various elements such as text fields, checkboxes, radio buttons, dropdown menus, buttons, and more. In this guide, we'll explore the different form elements and their usage.

## Form Structure

A form is created using the `<form>` element. It serves as a container for form controls and defines the boundaries of the form.

```html
<form>
  <!-- Form controls go here -->
</form>
```

`<form>` is opening tag.

`</form>` is closing tag.

## Forms Contain

```
<input>
<select>
<checkbox>
<radio>
<button>
<option>
<label>
```

## Input Tag

The `<input>` tag is used to create different types of input fields where users can enter data.

### Text Input

The `type="text"` attribute creates a text input field where users can enter single-line text.

```html
<input type="text" />
```

### How to take input from user

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Form</title>
  </head>
  <body>
    <form>
      <input type="text" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-1.png" alt="output-1" width="600px"/>

### Label

- The label is a normal text, its show information about your input element & its visually and pragmatically associated with the input element.

- The `<label>` tag is used to specify a label for an `<input>` element.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Forms</title>
  </head>
  <body>
    <form>
      <label for="inputFullName">Enter FullName: </label>
      <input type="text" id="inputFullName" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-2.png" alt="output-2" width="600px"/>

### Password

The `type="password"` attribute creates a password input field where entered characters are masked for security.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Forms</title>
  </head>
  <body>
    <form>
      <label for="inputPassword">Enter Password:</label>
      <input type="password" id="inputPassword" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-4.png" alt="output-4" width="600px"/>

### Email

- The email Attribute is used to validates the text for correct email address. You must use `@` and `.` in this field.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Forms</title>
  </head>
  <body>
    <form>
      <label for="inputEmail">Enter Email:</label>
      <input type="email" id="inputEmail" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-11.png" alt="output-11" width="600px"/>

:::tip
If we do not enter the proper email address then it will display error like this
:::

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Forms</title>
  </head>
  <body>
    <form>
      <label for="inputFullName">Enter FullName: </label>
      <input type="text" id="inputFullName" required />

      <br /><br />

      <label for="inputEmail">Enter Email:</label>
      <input type="email" id="inputEmail" required />

      <br /><br />

      <label for="inputPassword">Enter Password:</label>
      <input type="password" id="inputPassword" required />

      <br /><br />

      <input type="submit" value="Register Now" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-7.png" alt="output-7" width="600px"/>

## Button

- There are two type of button <br />

1. **Submit button :-** It is used to submit form data.
2. **Button :-** It is used to trigger action.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Forms</title>
  </head>
  <body>
    <form>
      <input type="submit" value="Register Now" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-5.png" alt="output-5" width="600px"/>

### required

- The `required` attribute indicates that an input field must be filled out before submitting the form.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Forms</title>
  </head>
  <body>
    <form>
      <label for="inputFullName">Enter FullName: </label>
      <input type="text" id="inputFullName" required />

      <br /><br />

      <label for="inputPassword">Enter Password:</label>
      <input type="password" id="inputPassword" required />

      <br /><br />

      <input type="submit" value="Register Now" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-6.png" alt="output-6" width="600px"/>

### Placeholder

- Placeholder is a attribute which is used to set a short hint that describes the value of an input field.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Forms</title>
  </head>
  <body>
    <form>
      <input type="text" placeholder="Enter your name" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-8.png" alt="output-8" width="600px"/>

### Date and Time

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Forms</title>
  </head>
  <body>
    <form>
      Date: <input type="date" />

      <br /><br />

      Time: <input type="time" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-9.png" alt="output-9" width="600px"/>

### Dropdown

- We can create drop-down list using `<select>` tag. `<select>` Tag are contain Multiple `<option>` tag. `<option>` Tag are used to display available options in drop-down.

**Syntax :**

```html
<select>
  <option></option>
  <option></option>
  <option></option>
</select>
```

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Select</title>
  </head>
  <body>
    <form>
      <label for="selectLanguage">Choose Language :</label> <br />
      <select id="selectLanguage">
        <option>Choose Language :</option>
        <option>HTML</option>
        <option>CSS</option>
        <option>JAVASCRIPT</option>
      </select>
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-12.png" alt="output-12" width="600px"/>

### Value

- The value attribute are used specifies the value of an `<input>` element. Value attribute represent the default value for the input element.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Form</title>
  </head>
  <body>
    <form>
      <label for="motherThoung">Mother Tounge :</label> <br />
      <input type="text" id="motherThoung" value="ABC" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-13.png" alt="output-13" width="600px"/>

### Data List

Data list it is a Searchable list option.
It can help the user, the user does not need to type the whole text data list have predefined suggestions so it can suggest to the user.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Datalist</title>
  </head>
  <body>
    <form>
      <input list="techOptions" />

      <datalist id="techOptions">
        <option>Choose Techonoloy :</option>
        <option>HTML</option>
        <option>CSS</option>
        <option>Javascript</option>
        <option>Bootstrap</option>
        <option>NodeJs</option>
        <option>ExpressJs</option>
      </datalist>
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-14.png" alt="output-14" width="600px"/>

### Checkbox

- Checkbox is used to multiple selection. Checkbox is always in square.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Checkbox</title>
  </head>
  <body>
    <form>
      <input type="checkbox" id="movie1" />
      <label for="movie1">Movie 1</label> <br /><br />

      <input type="checkbox" id="movie2" />
      <label for="movie2">Movie 2</label> <br />
      <br />

      <input type="checkbox" id="movie3" />
      <label for="movie3">Movie 3</label> <br /><br />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-15.png" alt="output-15" width="600px"/>

Checkbox have one `Checked = true` attribute & this attribute specifies input element should be pre-selected or checked.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Checkbox</title>
  </head>
  <body>
    <form>
      <input type="checkbox" id="movie1" checked="true" />
      <label for="movie1">Movie 1</label> <br /><br />

      <input type="checkbox" id="movie2" />
      <label for="movie2">Movie 2</label> <br />
      <br />

      <input type="checkbox" id="movie3" />
      <label for="movie3">Movie 3</label> <br /><br />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-16.png" alt="output-16" width="600px"/>

## Radio Button

- Radio Button is used to Single selection. Radio button is always circle.

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Radio Button</title>
  </head>
  <body>
    <form>
      <input type="radio" name="gender" id="male" />
      <label for="male">Male</label><br />

      <input type="radio" name="gender" id="female" />
      <label for="female">Female</label>
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-17.png" alt="output-17" width="600px"/>

### File

`<input>` elements with `type="file"` it is used to user choose files from their device storage.

**Syntax :**

```html
<form>
  <input type="file" />
</form>
```

`accept="application/pdf"`

The accept attribute specifies what type of file user can pick from their device storage.

The accept attribute can only be used with file tag.

**Different accept attribute value :**<br/>

- **`image/*` = image files**

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>File Picker</title>
  </head>
  <body>
    <form>
      <label for="fileInput"> Upload All Type Of Images</label>
      <input type="file" id="fileInput" accept="image/*" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-19.png" alt="output-19" width="600px"/>

- **`audio/*` = audio files**

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>File Picker</title>
  </head>
  <body>
    <form>
      <label for="fileInput"> Upload Audio</label>
      <input type="file" id="fileInput" accept="audio/*" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-20.png" alt="output-20" width="600px"/>

- **`application/pdf` = pdf file**

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>File Picker</title>
  </head>
  <body>
    <form>
      <label for="fileInput"> Upload Your Marksheet :</label>
      <input type="file" id="fileInput" accept="application/pdf" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-18.png" alt="output-18" width="600px"/>

- **`video/*` = video files**

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>File Picker</title>
  </head>
  <body>
    <form>
      <label for="fileInput"> Upload Video </label>
      <input type="file" id="fileInput" accept="video/*" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-21.png" alt="output-21" width="600px"/>

- `application/*` = all type application

```html
<!DOCTYPE html>
<html>
  <head>
    <title>File Picker</title>
  </head>
  <body>
    <form>
      <label for="fileInput"> Upload Application </label>
      <input type="file" id="fileInput" accept="application/*" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-22.png" alt="output-22" width="600px"/>

- **`image/png` = only png extension images**

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>File Picker</title>
  </head>
  <body>
    <form>
      <label for="fileInput"> Upload PNG format Images Only</label>
      <input type="file" id="fileInput" accept="image/png" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-24.png" alt="output-24" width="600px"/>

- **We can also Upload multiple Type of Files.**

**Code :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>File Picker</title>
  </head>
  <body>
    <form>
      <label for="fileInput"> Upload All Type Of Images</label>
      <input type="file" id="fileInput" accept="video/*,image/png" />
    </form>
  </body>
</html>
```

**Output :**

<img src="/html/11/output-25.png" alt="output-25" width="600px"/>
