---
title: Forms
description: "Forms"
hide_table_of_contents: true
---

# Forms

- Form is an HTML element which is used to take input from user.
- Forms are created using `<form>`.

```html
<form></form>
```

`<form>`is opening tag.

`</form>`is closing tag.

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

- Input tag specifies an input filed where the user can enter data.

- Input box is created using `<input>` tag.

```html
<input></input>
```

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

<img src="/icp/10/output-1.png" alt="output-1" width="600px"/>

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

<img src="/icp/10/output-2.png" alt="output-2" width="600px"/>

### Password

- Password is attribute which is invisible to the user in password field.

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

<img src="/icp/10/output-4.png" alt="output-4" width="600px"/>

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

<img src="/icp/10/output-11.png" alt="output-11" width="600px"/>

📝Note:- If we do not enter the proper email address then it will display error like this

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

<img src="/icp/10/output-7.png" alt="output-7" width="600px"/>

## Button

- There are two type of button <br />

1. Submit button :- it is used to submit form data.
2. Button :- it is used to trigger action.

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

<img src="/icp/10/output-5.png" alt="output-5" width="600px"/>

### required

- It is specifies that the element is mandatory to filled out before submitting the form.

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

<img src="/icp/10/output-6.png" alt="output-6" width="600px"/>

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

<img src="/icp/10/output-8.png" alt="output-8" width="600px"/>

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

<img src="/icp/10/output-9.png" alt="output-9" width="600px"/>

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

<img src="/icp/10/output-12.png" alt="output-12" width="600px"/>

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

<img src="/icp/10/output-13.png" alt="output-13" width="600px"/>

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

<img src="/icp/10/output-14.png" alt="output-14" width="600px"/>

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

<img src="/icp/10/output-15.png" alt="output-15" width="600px"/>

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

<img src="/icp/10/output-16.png" alt="output-16" width="600px"/>

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

<img src="/icp/10/output-17.png" alt="output-17" width="600px"/>

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

Different accept attribute value :

`image/*` = image files <br/>
`audio/*` = audio files <br/>
`video/*` = video files <br/>
`application/*` = all type application <br/>
`application/pdf` = pdf file <br/>
`image/png` = only png extension images <br/>

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

<img src="/icp/10/output-18.png" alt="output-18" width="600px"/>
