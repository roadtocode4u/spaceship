---
title: Bootstrap
description: "Bootstrap"
hide_table_of_contents: true
---

Bootstrap is a popular open-source framework for building responsive and mobile-first websites and web applications. It provides a collection of CSS (Cascading Style Sheets) classes that help to apply the process of designing and developing websites.

**Bootstrap is a CSS Component library and it is also called as prewritten CSS.**

```html
Bootstrap => Frontend Component Libraray, Prewritten CSS and JS
```

**Click Here To Render On Bootstrap Page :** (https://getbootstrap.com/docs/5.3/getting-started/introduction/)

After clicking on the website you this page.

<img src="/icp/39/screenshot-1.png" alt="screenshot-1" width="600px"/>

### How to add Bootstrap In HTML File

The first link is for CSS, which will apply CSS to our code. The second link is for Javascript, which will add some effects to our webpage.

<img src="/icp/39/screenshot-2.png" alt="screenshot-2" width="600px"/>

## What is CDN?

CDN stands for **Content Deliver Network**.

CDN in Bootstrap means using special servers to quickly share Bootstrap's design. It's like getting help from a super-fast library. This makes your site load faster and work smoothly for visitors.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Bootstrap Demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

In the above example, We have included the structure of the bootstrap file.

## Buttons using Bootstrap

### Base Button

Bootstrap has base `.btn` class that sets up basic styles such as padding and content alignment. By default, `.btn` controls have a transparent border and background color.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstarp</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <button class="btn">Click Me!</button>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Output :**

<img src="/icp/39/screenshot-3.png" alt="screenshot-3" width="600px"/>

Bootstrap has nine buttons with plain backgrounds that are easy to use.

1. **btn-primary** : If you select the `btn-primary` color option, a button with a `blue` background will be created.

2. **btn-secondary** : If you select the `btn-secondary` color option, a button with a `grey` background will be created.

3. **btn-success** : If you select the `btn-success` color option, a button with a `green` background will be created.

4. **btn-danger** : If you select the `btn-danger` color option, a button with a `red` background will be created.

5. **btn-warning** : If you select the `btn-warning` color option, a button with a `yellow` background will be created.

6. **btn-info** : If you select the `btn-info` color option, a button with a `sky` background will be created.

7. **btn-light** : If you select the `btn-light` color option, a button with a `white` background will be created.

8. **btn-dark** : If you select the `btn-dark` color option, a button with a `black` background will be created.

9. **btn-link** : If you select the `btn-link` color option, a button with simple **anchor link** will be created.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstarp</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <button class="btn btn-primary">Click Me!</button>
    <button class="btn btn-secondary">Click Me!</button>
    <button class="btn btn-info">Click Me!</button>
    <button class="btn btn-dark">Click Me!</button>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Output :**

<img src="/icp/39/screenshot-4.png" alt="screentshot-4" width="600px"/>

In the above example, we can apply `btn` class for the button and `btn-primary` , `btn-secondary` , `btn-info` , `btn-dark` is used for the background-color, primary means `blue`, secondary means `grey`, info means `sky` and dark means `black`.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstarp</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <button class="btn btn-outline-primary">Click Me!</button>
    <button class="btn btn-outline-secondary">Click Me!</button>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Output :**

<img src="/icp/39/screenshot-5.png" alt="screenshot-5" width="600px"/>

## Padding

Class of padding in Bootstrap = `p`

**Sides for Padding :** We can apply padding for four side such as top, bottom, start and end.

`t` => From Top<br/>
`b` => From Bottom <br/>
`s` => From Start<br/>
`e` => From End

<img src="/icp/39/screenshot-6.png" alt="screenshot-6" width="600px"/>

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstarp</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="p-5 bg-warning">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, error
      recusandae. Nobis officia deleniti nesciunt delectus voluptatem! Odit
      tempore officia, cupiditate iusto adipisci aliquam! Molestiae similique
      cum ratione. Temporibus, laborum.
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Output :**

<img src="/icp/39/screenshot-7.png" alt="screenshot-7" width="600px"/>

## Margin

Class of margin in Bootstrap = `m`

**Sides for Margin :** We can apply margin for four side such as top, bottom, start and end.

`t` => From Top<br/>
`b` => From Bottom <br/>
`s` => From Start<br/>
`e` => From End

<img src="/icp/39/screenshot-6.png" alt="screenshot-6" width="600px"/>

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstarp</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />
  </head>
  <body class="bg-info">
    <div class="m-5 bg-warning">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, error
      recusandae. Nobis officia deleniti nesciunt delectus voluptatem! Odit
      tempore officia, cupiditate iusto adipisci aliquam! Molestiae similique
      cum ratione. Temporibus, laborum.
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Output :**

<img src="/icp/39/screenshot-8.png" alt="screenshot-8" width="600px"/>

## Bootstrap classes for Shadows

```html
no-shadow => shadow-none small-shadow => shadow-sm regular-shadow => shadwo
large-shadow => shadwo-lg
```

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>

  <body style="padding: 10px;">
    <div class="shadow-lg">
      This is Sample Division.
      <br />
      Hello World!!
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Output :**

<img src="/icp/39/output-5.png" alt="output" width="400px"/>

## Navbar

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>

  <body style="padding: 10px;">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Output :**

<img src="/icp/39/output-13.png" alt="output" width="400px"/>

## Badge

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>

  <body style="padding: 10px;">
    <span class=" badge bg-warning">New</span>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Output :**

<img src="/icp/39/output-6.png" alt="output" width="400px"/>

## Grid

```html
row => Horizontal columns => verical 1 row => 12 columns

<div></div>
= row / col class => "row" class => "col-*"
```

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>

  <body style="padding: 10px;">
    <div class="row">
      <div class="col-6 bg-warning">
        <h1>This is Heading 1</h1>
        <h2>This is Heading 2</h2>
      </div>
      <div class="col-6 bg-danger">
        <h1>This is Heading 1</h1>
        <h2>This is Heading 2</h2>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Output :**

<img src="/icp/39/output-7.png" alt="output" width="400px"/>

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>

  <body style="padding: 10px;">
    <div class="row">
      <div class="col-4 bg-info">
        <h1>Column A</h1>
      </div>
      <div class="col-4 bg-danger">
        <h1>Column B</h1>
      </div>
      <div class="col-4 bg-warning">
        <h1>Column C</h1>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Output :**

<img src="/icp/39/output-8.png" alt="output" width="400px"/>

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>

  <body style="padding: 10px;">
    <div class="row">
      <div class="col-6 bg-info">
        <h1>Column A</h1>
      </div>
      <div class="col-3 bg-danger">
        <h1>Column B</h1>
      </div>
      <div class="col-3 bg-warning">
        <h1>Column C</h1>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Output :**

<img src="/icp/39/output-9.png" alt="output" width="400px"/>

```html
break-points small => sm medium => md large => lg extra large => xl extra extra
large => xxl
```

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>

  <body style="padding: 10px;">
    <div class="row">
      <div class="col-md-6 col-lg-4 bg-info">
        <h1>Column A</h1>
      </div>
      <div class="col-md-3 col-lg-4 bg-danger">
        <h1>Column B</h1>
      </div>
      <div class="col-md-3 col-lg-4 bg-warning">
        <h1>Column C</h1>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Output :**

**Small Device**

<img src="/icp/39/output-10.png" alt="output" width="400px"/>

**Medium Device**

<img src="/icp/39/output-12.png" alt="output" width="400px"/>

**Large Device**

<img src="/icp/39/output-11.png" alt="output" width="400px"/>
