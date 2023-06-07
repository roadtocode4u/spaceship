---
title: Box Shadow and Hover
description: Box Shadow and Hover
hide_table_of_contents: true
---

## Hover

The `:hover` selector is used to apply styles to an element when it is being hovered over by the mouse. It allows you to add interactive effects to elements on your web page.

**In the first example you provided, the HTML code is as follows:**

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hover</title>
    <style>
      .btn {
        background-color: tomato;
        color: white;
        border: 2px solid dashed;
        border-radius: 10px;
      }
      .btn:hover {
        background-color: aquamarine;
        color: black;
      }
    </style>
  </head>
  <body>
    <button class="btn">Awesome button</button>
  </body>
</html>
```

In this example, there is a button element with the class `btn`. The CSS styles defined for the class `btn` specify that the background color is `tomato`, the text color is `white`, and there is a dashed border with a `2px` width and a border-radius of `10px`.

The `.btn:hover` selector is used to define the styles that will be applied when the button is being hovered over. In this case, it changes the background color to `aquamarine` and the text color to `black`.

When you view this HTML page in a browser, the button will have the default styles defined by the `.btn` class. However, when you move your mouse over the button, the styles defined by the `.btn:hover` selector will be applied, resulting in a different background color and text color for the button.

## Hover effect on image

**In the second example you provided, you want to apply a hover effect to an image. Here's the code:**

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>shadow</title>
    <style>
      img-tiger {
        height: 100px;
        border-radius: 50%;
      }
      img-tiger:hover {
        border-radius: 20px;
        transition: 2s;
        margin-left: 30px;
      }
    </style>
  </head>
  <body>
    <img src="tiger.png" alt="img" />
  </body>
</html>
```

**Output :**

<img src="/icp/17/step-1.png" alt="step-1" width="500px"/>

In this example, there is an image element with the class `img-tiger`. The CSS styles defined for the class `img-tiger` specify that the image should have a height of `100px` and a border-radius of `50%`, giving it a circular shape.

The `.img-tiger:hover` selector is used to define the styles that will be applied when the image is being hovered over. In this case, it changes the border-radius to `20px`, making the image slightly less circular. It also adds a transition effect with a duration of `2 seconds`, so the change happens gradually. Additionally, it moves the image `30px` to the right by setting the margin-left property.

When you view this HTML page in a browser, the image will have the default styles defined by the `.img-tiger` class. However, when you move your mouse over the image, the styles defined by the `.img-tiger:hover` selector will be applied, resulting in a change in border-radius and a transition effect.

## Box-Shadow

The `box-shadow` property is used to add one or more shadows to an element. It allows you to create visually appealing effects, such as giving the illusion of depth or highlighting elements.

**The syntax for the box-shadow property is as follows:**

           h-shadow v-shadow  blur spread  color
              |       |      |      |       |
box-shadow: 5px 5px 5px 2px #808080;
* **`h-shadow`** : The horizontal offset of the shadow. A positive value puts the shadow on the right side of the box, and a negative value puts the shadow on the left side.
* **`v-shadow`** : The vertical offset of the shadow. A positive value puts the shadow below the box, and a negative value puts the shadow above.

* **`blur`** : The blur radius. The higher the value, the more blurred the shadow will be.

* **`spread`** : The spread radius. A positive value increases the size of the shadow, and a negative value decreases the size.

* **`color`** : The color of the shadow.

**In the third example you provided, you want to add a box shadow to an image. Here's the code:**

**Code :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>shadow</title>
    <style>
      .img-tiger {
        height: 300px;
        border-radius: 50px;
        margin: 30px;
        box-shadow: 2px 2px 5px 10px rgb(138, 136, 136);
      }

      .img-tiger:hover {
        border-radius: 20px;
        transition: 2s;
      }
    </style>
  </head>

  <body>
    <img src="tiger.png" class="img-tiger" alt="img" />
  </body>
</html>
```

**Output :**

<img src="/icp/17/step-2.png" alt="step-2" width="500px"/>


In this example, there is an image element with the class `img-tiger`. The CSS styles defined for the class `img-tiger` specify that the image should have a height of `300px`, a border-radius of `50px`, and a margin of `30px`. The `box-shadow` property is used to add a shadow to the image. The values `2px 2px 5px 10px` define the horizontal offset, vertical offset, blur radius, and spread radius of the shadow, respectively. The color of the shadow is specified as `rgb(138, 136, 136)`.

When you view this HTML page in a browser, the image will have a box shadow applied to it according to the styles defined by the `.img-tiger` class. When you move your mouse over the image, the border-radius will change to 20px with a transition effect, as defined by the `.img-tiger:hover` selector.