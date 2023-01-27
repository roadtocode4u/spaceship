---
title: Media Queries
description: Media Queries
hide_table_of_contents: true
---
# Media Queries

## Responsive design using media query

Media Queries allow you to create responsive websites on all screen sizes, from desktop to mobile.

**Desktop**

<img src="/icp/22/img-1.png" alt="img-1" width="400px" />

**Phone**

<img src="/icp/22/img-2.png" alt="img-2" width="400px" />

> In a Big Screen You can show all possible Elements. 

>In a Small Screen You can show Only Important Elements.


## Device Breakpoint

1. Small mobile device : less than ```600px```
2. Normal mobile device : greater than ```600px``` and less than ```768px```
3. Tablets : greater than ```768px``` and less than ```992px```
4. Laptops / desktops :  greater than ```992px``` and less than ```1200px```
5. TV/Large desktop : greater than ```1200px```

Media Query calculate screen size and if it matches you passed screen size and media query screen size  then media query will apply effect. 


**max-width**

The max-width are specifies the maximum width of a particular device.

**Syntax :**
 
```css
@media screen and (max-width:600px)
{

}
```

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Media Query </title>
    <style>
        .test-btn {
            width: 400px;
            height: 50px;
            font-size: 20px;
            background-color: tomato;
            color: white;
        }

        @media screen and (max-width:500px) {
            .test-btn{
                background-color: blue;
                width: 300px;
                height: 80px;
                font-size: 40px;
            }
        }
    </style>
</head>

<body>

    <button class="test-btn">
        This Is Button
    </button>

</body>

</html>
```

**Output :**

**Normal Screen**

<img src="/icp/22/output-1.png" alt="output-1" width="600px"/>

**Screen size is less than 500px**

<img src="/icp/22/output-2.png" alt="output-2" width="600px"/>

In the above outputs in the normal screen 1st output will display and if the screen size is less than 500px then the media query effects will apply then that's the time 2nd output will display on the screen.

**min-width**

The min-width are specifies the minimum width of a specific device.

**Syntax :**
 
```css
@media screen and (min-width:600px)
{

}
```

**Code :**

```html

<!DOCTYPE html>
<html>

<head>
    <title> Media Query </title>
    <style>
        .test-btn {
            width: 400px;
            height: 50px;
            font-size: 20px;
            background-color: tomato;
            color: white;
        }

        @media screen and (min-width:600px) {
            .test-btn{
                background-color: blue;
                width: 300px;
                height: 50px;
                font-size: 40px;
            }
        }
    </style>
</head>

<body>

    <button class="test-btn">
        This Is Button
    </button>

</body>

</html>
```

**Output :**

**Normal Screen**

<img src="/icp/22/output-4.png" alt="output-4" width="600px"/>

**Screen size is less than 600px**

<img src="/icp/22/output-3.png" alt="output-3" width="600px"/>

In the above outputs in the normal screen 1st output will display and if the screen size is less than 600px then the media query effects will apply then that's the time 2nd output will display on the screen.


**min-width and max-width at same time**

**Syntax :**

```css
 media screen and (min-width: 600px) and (max-width: 800px) 
 {

 }
```

**Code :**

```html
<!DOCTYPE html>
<html>

<head>
    <title> Media Query </title>
    <style>
        .test-btn {
            width: 400px;
            height: 50px;
            font-size: 20px;
            background-color: tomato;
            color: white;
        }

        @media screen and (min-width: 600px) and (max-width: 800px) {
            .test-btn{
              background-color: black;
              border: 25px;
            }
        }
    </style>
</head>

<body>

    <button class="test-btn">
        This Is Button
    </button>

</body>

</html>
```