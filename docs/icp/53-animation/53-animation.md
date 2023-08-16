---
title: CSS Animations Adding Motion and Effects to Elements
description: "CSS Animations: Adding Motion and Effects to Elements"
hide_table_of_contents: true
---

CSS animations enable you to add motion and visual effects to elements on your webpage. These animations involve changing the properties of an element, such as its `position`, `size`, or `color`, `over` a specified period of time. This guide will introduce you to different types of CSS animations and transformations with easy-to-understand examples.

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation</title>
    <style>
      .btn {
        background-color: tomato;
        color: #ffff;
        border: none;
      }
      .btn:hover {
        border-radius: 50%;
        transition: 3s;
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

**Output :**

  <video height="300px" controls autoplay muted>
      <source src="/icp/53/output-1.mp4" type="video/mp4" />
    </video>

**Example explanation :**

In the above example, we can create a button. We provide a `btn` class to the button and also provide a CSS style to the button. We provide a background color, color, and border to the button. The `background-color` property sets the background color to the button. The `color` property is set to the text color. The `border: none` property is remove the border. Also we can provide a hover effect to the button. The `border-radius` property adds a circular border radius to the `btn` when they are hovered over. The `transition` property adds a transition effect when properties change.

### Transformations

CSS `transformations` allow you to change how an element appears and behaves by applying various effects like `moving`, `rotating`, and `scaling`. Here are different types of transformations with examples:

### Scale

Scaling changes the size of an element. Use the `transform` property along with the `scale` function. Here's an example of scaling a button on hover:

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation</title>
    <style>
      .btn {
        background-color: tomato;
        color: #ffff;
        border: none;
        transition: 2s;
      }

      .btn:hover {
        transform: scale(1.3);
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

**Output :**

 <video height="300px" controls autoplay muted>
      <source src="/icp/53/output-2.mp4" type="video/mp4" />
    </video>

**Example explanation :**

In the above example, We provide a `btn` class to the button and also provide a CSS style to the button. We provide a background color, color, and border to the button. The `background-color` property sets the background color to the button. The `color` property is set to the text color. The `border: none` property is remove the border. Also we can provide a hover effect to the button. We can used the `scale` property that change the size of the button.

### ScaleX

The `scaleX` property is a transformation function that allows you to scale an element along the `horizontal` (X) axis.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation</title>
    <style>
      .btn {
        background-color: tomato;
        color: #ffff;
        border: none;
        transition: 2s;
      }

      .btn:hover {
        transform: scaleX(1.3);
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

**Output :**

 <video height="300px" controls autoplay muted>
      <source src="/icp/53/output-3.mp4" type="video/mp4" />
    </video>

**Example exaplanation :**

In the above example, we can create button. We provide CSS style to the button. We provide a background color, color, and border to the button. The `background-color` property sets the background color to the button. The `color` property is set to the text color. We can give the hover effect to the button by using transform property. The `transform: scaleX(1.3)` is to set the scale the element in horizontal `x` axis.

### ScaleY

The `scaleY` property is a transformation function that allows you to scale an element along the `vertical` (Y) axis.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation</title>
    <style>
      .btn {
        background-color: tomato;
        color: #ffff;
        border: none;
        transition: 2s;
      }

      .btn:hover {
        transform: scaleY(1.3);
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

**Output :**

 <video height="300px" controls autoplay muted>
      <source src="/icp/53/output-4.mp4" type="video/mp4" />
    </video>

**Example exaplanation :**

In the above example, we can create button. We provide CSS style to the button. We provide a background color, color, and border to the button. The `background-color` property sets the background color to the button. The `color` property is set to the text color. We can give the hover effect to the button by using transform property. The `transform: scaleY(1.3)` is to set the scale the element in vertical `y` axis.

### rotate

Rotation allows you to rotate an element by a specified angle. You can use functions like `rotate`, `rotateX`, `rotateY`, and `rotateZ`. Here's an example of rotating an image:

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation</title>
    <style>
      .img {
        transition: 3s;
      }

      .img:hover {
        transform: rotate(180deg);
      }
    </style>
  </head>

  <body>
    <img src="butterfly .png" alt="img" class="img" width="100px" />
  </body>
</html>
```

**Output :**

<video height="300px" controls autoplay muted>
      <source src="/icp/53/output-6.mp4" type="video/mp4" />
    </video>

**Example exaplanation :**

In the above example, We can take the image and apply the hover effect to the image. We used the `rotate(180deg)` that rotates the image at 180 degrees.

### rotateX

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation</title>
    <style>
      .img {
        transition: 3s;
      }

      .img:hover {
        transform: rotateX(90deg);
      }
    </style>
  </head>

  <body>
    <img src="butterfly .png" alt="img" class="img" width="100px" />
  </body>
</html>
```

**Output :**

<video height="300px" controls autoplay muted>
      <source src="/icp/53/output-7.mp4" type="video/mp4" />
    </video>

**Example exaplanation :**

In the above example, We can take the image and apply the hover effect to the image. We used the `rotateX(45deg)` that rotates the image at 45 degrees.

## rotateY

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation</title>
    <style>
      .img {
        transition: 3s;
      }

      .img:hover {
        transform: rotateY(180deg);
      }
    </style>
  </head>

  <body>
    <img src="butterfly .png" alt="img" class="img" width="100px" />
  </body>
</html>
```

**Output :**

<video height="300px" controls autoplay muted>
      <source src="/icp/53/output-8.mp4" type="video/mp4" />
    </video>

**Example exaplanation :**

In the above example, We can take the image and apply the hover effect to the image. We used the `rotateY(180deg)` that rotates the image at 180 degrees.

### rotateZ

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation</title>
    <style>
      .img {
        transition: 3s;
      }

      .img:hover {
        transform: rotateZ(-45deg);
      }
    </style>
  </head>

  <body>
    <img src="butterfly .png" alt="img" class="img" width="100px" />
  </body>
</html>
```

**Output :**

<video height="300px" controls autoplay muted>
      <source src="/icp/53/output-9.mp4" type="video/mp4" />
    </video>

**Example exaplanation :**

In the above example, We can take the image and apply the hover effect to the image. We used the `rotateZ(-45deg)` that rotates the image at -45 degrees.

### translate

The `translate` function in CSS is a transform property to move (translate) an element along the X and Y axis.

**translateX :** The translateX property move element in X axis.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation</title>
    <style>
      .img {
        transition: 3s;
      }

      .img:hover {
        transform: translateX(10%);
      }
    </style>
  </head>

  <body>
    <img src="butterfly .png" alt="img" class="img" width="100px" />
  </body>
</html>
```

**Output :**

<video height="300px" controls autoplay muted>
      <source src="/icp/53/output-10.mp4" type="video/mp4" />
    </video>

**Example exaplanation :**

In the above example, We can apply the hover effect to the image. We used the `translateX(10%)` that move the image in 10px along the x-axis.

**translateY :** The translateX property move element in Y axis.

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation</title>
    <style>
      .img {
        transition: 3s;
      }

      .img:hover {
        transform: translateY(30%);
      }
    </style>
  </head>

  <body>
    <img src="butterfly .png" alt="img" class="img" width="100px" />
  </body>
</html>
```

**Output :**

<video height="300px" controls autoplay muted>
      <source src="/icp/53/output-11.mp4" type="video/mp4" />
    </video>

**Example exaplanation :**

In the above example, We can apply the hover effect to the image. We used the `translateY(30%)` that move the image in 30px along the y-axis.

###

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation</title>
    <style>
      .img {
        height: 100px;
        animation: dhak-dhak;
        animation-duration: 8s;
        animation-iteration-count: infinite;
      }
      img:hover {
        animation-play-state: paused;
      }
      @keyframes dhak-dhak {
        0% {
          height: 110px;
        }
        25% {
          height: 100px;
        }
        50% {
          height: 110px;
        }
        100% {
          height: 100px;
        }
      }
    </style>
  </head>

  <body>
    <img src="love.png" alt="img" class="img" />
  </body>
</html>
```

**Output :**

<video height="300px" controls autoplay muted>
      <source src="/icp/53/output-12.mp4" type="video/mp4" />
    </video>

**For example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation</title>
    <style>
      .box {
        width: 100px;
        background-color: tomato;
        animation: grow;
        animation-duration: 4s;
        height: 50px;
        animation-iteration-count: infinite;
        margin: 10px;
      }

      .linear {
        animation-timing-function: linear;
      }

      .ease {
        animation-timing-function: ease;
      }

      .ease-in {
        animation-timing-function: ease-in;
      }

      .ease-out {
        animation-timing-function: ease-out;
      }

      .ease-in-out {
        animation-timing-function: ease-in-out;
      }

      @keyframes grow {
        0% {
          width: 300px;
        }

        100% {
          width: 100px;
        }
      }
    </style>
  </head>

  <body>
    <div class="box linear">linear</div>

    <div class="box ease-in">ease</div>

    <div class="box ease-out">ease-in</div>

    <div class="box ease-in-out">ease-out</div>

    <div class="box ease-in-out">ease-in-out</div>
  </body>
</html>
```

**Output :**

<video height="300px" controls autoplay muted>
      <source src="/icp/53/output-13.mp4" type="video/mp4" />
    </video>
