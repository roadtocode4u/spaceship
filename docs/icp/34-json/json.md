---
title: Objects in JavaScript(JSON)
description: "Objects in JavaScript(JSON)"
hide_table_of_contents: true
---

## Object

Object is a data structure that allows you to store collections of data in key-value pairs. An object can hold various types of values including numbers, strings, arrays, functions, and even other objects.

Object in java script are create by Using the curly braces `{}`and the key value pairs are separated by commas. 

**Code :**

```html
<script>
    const student = {
        "name": "pinks",
        "age": 20,
        "mobile": "7821011979",
        "email": "pinks@roadtocode.org"
    }

    console.log(student);
</script>
```

**Code :**

```html
<script>
    const student = {
        "name": "pinks",
        "age": 20,
        "mobile": "7821011979",
        "email": "pinks@roadtocode.org"
    }

    console.log(student.mobile);
</script>
```

**Output :**

>7821011979

The above code we creates an object named `student` with properties such as `name`, `age`, `mobile`, and `email`. The `console.log(student.mobile)` statement accesses the mobile property of the student object using dot and logs its value to the console.

## JSON Object 

JSON stands for `JavaScript Object Notation`.

In JSON keys must be represented as strings and Keys must be unique within an object. The values associated with the keys can be of various types, including numbers, strings, arrays, or objects.

**Code :**

```html
<script>
    const student = {
        "name": "pinks",
        "age": 20,
        "mobile": "7821011979",
        "email": "pinks@roadtocode.org",
        "whatsapp": "7821011979",
        "corses": ["ICP4.0","DSA","Python"],
        "address":[
            "street": "11th cross A",
            "landmark": "near temple",
            "city": "Bangalore",
            "pin": 560102
        ]
    }

    console.log(student.address.pin);
</script>
```

**Output :**

>7821011979

