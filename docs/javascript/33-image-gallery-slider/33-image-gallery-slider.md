---
title:  Image Gallery Slider
description: "Image Gallery Slider"
hide_table_of_contents: true
---

**Example :**  

```html showLineNumbers="true"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Gallery</title>
  <style>
    .gallary-img{
      width: 300px;
      height: 200px;
      object-fit: cover;
      background-color: tomato;
      display: block;
      margin: 20px auto;
      border-radius: 10px;
    }
    .btn-container{
      position: relative;
      width: fit-content;
      display: block;
      margin: 10px auto;
    }
    .btn{
      height: 30px;
      margin: 0 10px;
      cursor: pointer;
      background-color: #fff;
      border-radius: 50%;
       position: absolute;
      top: 80px;
    }
    .btn-left{
      left: -30px;
    }

    .btn-right{
      right: -30px;
    }
  </style>
</head>
<body>

<div class="btn-container">
  <img src="./gallery/one.jpg" class="gallary-img" id="img"/>
  <img src="left-arrow.png" class="btn btn-left" onclick="prev()" />
  <img src="arrow-right.png" class="btn btn-right" onclick="next()" />
</div>

<script>
  const imagesArr = [
    "./gallery/zero.jpg",
    "./gallery/one.jpg",
    "./gallery/two.jpg",
    "./gallery/three.jpg",
    "./gallery/four.jpg"
  ];
  let imgIndex = 0;
  
  const imgElement = document.getElementById('img');

  function prev(){
    if (imgIndex == 0) {
      imgIndex = imagesArr.length - 1;
    } else {
      imgIndex--;
    }
    imgElement.src = imagesArr[imgIndex];
  }
  function next(){
    if (imgIndex == imagesArr.length - 1) {
      imgIndex = 0;
    } else {
      imgIndex++;
    }
    imgElement.src = imagesArr[imgIndex];
  }
</script>
</body>
</html>
```

**Output :**

<img src="/javascript/25/output-i1.png" alt="screenshot1" width="600px"/>

After click on next button or sign another image will display.

<img src="/javascript/25/output-i2.png" alt="screenshot1" width="600px"/>

Explanation :

In the above example ,  
* `const imagesArr = [ ... ];` This array containing the paths to all the images in the gallery.  
* `let imgIndex = 0;` It Initializes the index to keep track of the currently displayed image.  
* `const imgElement = document.getElementById('img');` Fetches the` <img> `element with the `id "img"` and stores it in the `imgElement` constant.  

* `function prev() { ... }` Defines the `prev()` function to show the previous image.  
`if (imgIndex == 0) { ... }` It Checks if the current `imgIndex` is `0`.  
`imgIndex = imagesArr.length - 1;` If true, sets `imgIndex` to the last image in the array.  
`else { imgIndex--; }` Otherwise, decrements `imgIndex` by 1.    
`imgElement.src = imagesArr[imgIndex];` It Updates the `src` attribute of `imgElement` to display the previous image.

* `function next() { ... }` It Defines the `next()` function to show the next image.  
`if (imgIndex == imagesArr.length - 1) { ... }` It Checks if the current `imgIndex` is the last image in the array.  
`imgIndex = 0;` If true, sets `imgIndex` to `0`.  
`else { imgIndex++; }` Otherwise, increments `imgIndex` by `1`.  
`imgElement.src = imagesArr[imgIndex];` It Updates the `src` attribute of `imgElement` to display the next image. 

**Example without if else :**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Gallery</title>
  <style>
    .gallary-img{
      width: 300px;
      height: 200px;
      object-fit: cover;
      background-color: tomato;
      display: block;
      margin: 20px auto;
      border-radius: 10px;
    }
    .btn-container{
      position: relative;
      width: fit-content;
      display: block;
      margin: 10px auto;
    }
    .btn{
      height: 30px;
      margin: 0 10px;
      cursor: pointer;
      background-color: #fff;
      border-radius: 50%;
       position: absolute;
      top: 80px;
    }
    .btn-left{
      left: -30px;
    }
    .btn-right{
      right: -30px;
    }
  </style>
</head>
<body>

<div class="btn-container">
  <img src="./gallery/one.jpg" class="gallary-img" id="img"/>
  <img src="left-arrow.png" class="btn btn-left" onclick="prev()" />
  <img src="arrow-right.png" class="btn btn-right" onclick="next()" />
</div>

<script>
  const imagesArr = [
    "./gallery/zero.jpg",
    "./gallery/one.jpg",
    "./gallery/two.jpg",
    "./gallery/three.jpg",
    "./gallery/four.jpg"
    ];

  let imgIndex = 0;
  
  const imgElement = document.getElementById('img');

  function prev(){
    imgIndex==0 ? imgIndex = imagesArr.length - 1 : imgIndex--;

    imgElement.src=imagesArr[imgIndex]
  }

  function next(){
    (imgIndex == imagesArr.length - 1) ? imgIndex = 0 : imgIndex++;

    imgElement.src=imagesArr[imgIndex]
  }
</script>
</body>
</html>
```

**Explanation :**

* `const imagesArr = [ ... ];` This array containing the paths to all the images in the gallery.  
* `let imgIndex = 0;` It Initializes the index to keep track of the currently displayed image.  
* `const imgElement = document.getElementById('img');` It Fetches the `<img>` element with the id `"img"` and stores it in the `imgElement` constant.  
* `function prev(){ ... }` It Defines the `prev()` function to show the previous image.  
`imgIndex==0 ? imgIndex = imagesArr.length - 1 : imgIndex--;` It Checks if the current `imgIndex` is `0`. If true, sets `imgIndex` to the last image in the array. Otherwise, decrements `imgIndex` by `1`  
`imgElement.src=imagesArr[imgIndex];` It Updates the `src` attribute of `imgElement` to display the previous image.  
* `function next(){ ... }` It Defines the `next()` function to show the next image.  
`(imgIndex == imagesArr.length - 1) ? imgIndex = 0 : imgIndex++;` It Checks if the current `imgIndex` is the last image in the array. If true, sets `imgIndex` to `0`. Otherwise, increments `imgIndex` by 1.  
`imgElement.src=imagesArr[imgIndex];` It Updates the `src` attribute of `imgElement` to display the next image.

