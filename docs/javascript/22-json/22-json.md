---
title: JSON
description: "JSON"
hide_table_of_contents: true
---

## JSON Object 

JSON stands for `JavaScript Object Notation`.

In JSON keys must be represented as strings and Keys must be unique within an object. The values associated with the keys can be of various types, including numbers, strings, arrays, or objects.

```js
{} <----- empty object

key -----> name, age, city

value -----> string, number, array, object, boolean
```

```js
{
    name : "Anand",
    age : 23,
    city : "Pune"
}
```

**Code :**

```js
    const student = {
        "name": "Anand",
        "age": 23,
        "city": "Pune",
    }
    console.log(student);
```

**Output :**

>{name: "Anand", age: 23, city: "Pune"}

**Code :**

```js
    const student = {
        "name": "Anand",
        "age": 23,
         "city": "Pune",
    }
    console.log(student.age);
```

**Output :**

>23

**Code :**

```js
    const student = {
        "name": "Anand",
        "age": 23,
        "city": "Pune",
    }
    console.log(student.city);
```

**Output :**

>Pune

**Code :**

```js
    const student = {
        "name": "Anand",
        "age": 23,
        "city": "Pune",
    }
    console.log(student['name']);
```

**Output :**

>Anand

**Code :**

```js
    const student = {
        "name": "Anand",
        "age": 23,
        "city": "Pune",
    }
      
    student['city'] = 'Nagpur'

    console.log(student);
```

**Output :**

>{name: "Anand", age: 23, city: "Nagpur"}

**Code :**

```js
    const student = {
        "name": "Anand",
        "age": 23,
        "city": "Pune",
        "first-name": "XYZ"
    }
      
    console.log(student['first-name']);
```

**Output :**

>XYZ

**Code :**

```js
    const course = {
       title: "IGCP-1.0",
       students:["a@gmail.com", "b@gmail.com", "c@gmail.com"],
       isActive: true,
       totalSeats: 30,
       batchTimings: {
        monday: "9AM-10AM",
        tuesday: "9AM-10AM",
        wednesday: "9AM-10AM",
        thursday: "9AM-10AM",
        friday: "9AM-10AM",
        saturday: "9AM-10AM",
        sunday: "off",
       }
    }
      
    console.log(course.title);
```

**Output :**

>IGCP-1.0

**Code :**

```js
    const course = {
       title: "IGCP-1.0",
       students:["a@gmail.com", "b@gmail.com", "c@gmail.com"],
       isActive: true,
       totalSeats: 30,
       batchTimings: {
        monday: "9AM-10AM",
        tuesday: "9AM-10AM",
        wednesday: "9AM-10AM",
        thursday: "9AM-10AM",
        friday: "9AM-10AM",
        saturday: "9AM-10AM",
        sunday: "off",
       }
    }
      
    console.log(course.students);
```

**Output :**

>["a@gmail.com", "b@gmail.com", "c@gmail.com"]

**Code :**

```js
    const course = {
       title: "IGCP-1.0",
       students:["a@gmail.com", "b@gmail.com", "c@gmail.com"],
       isActive: true,
       totalSeats: 30,
       batchTimings: {
        monday: "9AM-10AM",
        tuesday: "9AM-10AM",
        wednesday: "9AM-10AM",
        thursday: "9AM-10AM",
        friday: "9AM-10AM",
        saturday: "9AM-10AM",
        sunday: "off",
       }
    }
      
    console.log(course.students.length);
```

**Output :**

>3 

**Code :**

```js
    const course = {
       title: "IGCP-1.0",
       students:["a@gmail.com", "b@gmail.com", "c@gmail.com"],
       isActive: true,
       totalSeats: 30,
       batchTimings: {
        monday: "9AM-10AM",
        tuesday: "9AM-10AM",
        wednesday: "9AM-10AM",
        thursday: "9AM-10AM",
        friday: "9AM-10AM",
        saturday: "9AM-10AM",
        sunday: "off",
       }
    }
      
    console.log(course.isActive);
```

**Output :**

>true

**Code :**

```js
    const course = {
       title: "IGCP-1.0",
       students:["a@gmail.com", "b@gmail.com", "c@gmail.com"],
       isActive: true,
       totalSeats: 30,
       batchTimings: {
        monday: "9AM-10AM",
        tuesday: "9AM-10AM",
        wednesday: "9AM-10AM",
        thursday: "9AM-10AM",
        friday: "9AM-10AM",
        saturday: "9AM-10AM",
        sunday: "off",
       }
    }
      
    console.log(course.batchTimings);
```

**Output :**

>{
        monday: "9AM-10AM",
        tuesday: "9AM-10AM",
        wednesday: "9AM-10AM",
        thursday: "9AM-10AM",
        friday: "9AM-10AM",
        saturday: "9AM-10AM",
        sunday: "off",
  }

  **Code :**

```js
    const course = {
       title: "IGCP-1.0",
       students:["a@gmail.com", "b@gmail.com", "c@gmail.com"],
       isActive: true,
       totalSeats: 30,
       batchTimings: {
        monday: "9AM-10AM",
        tuesday: "9AM-10AM",
        wednesday: "9AM-10AM",
        thursday: "9AM-10AM",
        friday: "9AM-10AM",
        saturday: "9AM-10AM",
        sunday: "off",
       }
    }
      
    console.log(course.batchTimings.monday);
```

**Output :**

>9AM-10AM

**Code :**

```js
    const course = {
       "title": "IGCP-1.0",
       "students":["a@gmail.com", "b@gmail.com", "c@gmail.com"],
       "isActive": true,
       "totalSeats": 30,
       "batchTimings": {
        "monday": "9AM-10AM",
        "tuesday": "9AM-10AM",
        "wednesday": "9AM-10AM",
        "thursday": "9AM-10AM",
        "friday": "9AM-10AM",
        "saturday": "9AM-10AM",
        "sunday": "off",
       }
    }
      
    console.log(course.batchTimings.monday);
```

**Output :**

>9AM-10AM















