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
**Syntax :**

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

>{<br>
        monday: "9AM-10AM",<br>
        tuesday: "9AM-10AM",<br>
        wednesday: "9AM-10AM",<br>
        thursday: "9AM-10AM",<br>
        friday: "9AM-10AM",<br>
        saturday: "9AM-10AM",<br>
        sunday: "off",<br>
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

## Array

**Code :**

```js
    const course = [
        {
            name: 'A',
            age: 26,
        },
        {
            name: 'B',
            age: 25,
        }
        {
            name: 'C',
            age: 21,
        }
    ]
      
    console.log(students);
```

**Output :**
> [ <br>
    {name: 'A', age: 26},<br>
    {name: 'B', age: 25},<br>
    {name: 'C', age: 21},<br>
]

**Code :**

```js
    const course = [
        {
            name: 'A',
            age: 26,
        },
        {
            name: 'B',
            age: 25,
        }
        {
            name: 'C',
            age: 21,
        }
    ]
      
    for(let i=0; i<students.length; i++)
    {
        console.log(students[i])
    }
```

**Output :**
> {name: 'A', age: 26},<br>
  {name: 'B', age: 25},<br>
  {name: 'C', age: 21},<br>

  **Code :**

```js
    const course = [
        {
            name: 'A',
            age: 26,
        },
        {
            name: 'B',
            age: 25,
        }
        {
            name: 'C',
            age: 21,
        }
    ]
      
    for(let i=0; i<students.length; i++)
    {
        const name = students[i].name;
        const age = students[i].age;
        console.log(`Hello ${name}. you are ${age} years old.`)
    }
```

**Output :**
>Hello A. you are 26 years old.<br>
Hello B. you are 25 years old.<br>
Hello C. you are 21 years old.<br>


## JSON stringify() & JSON parse()

**Code :**

```js
    const obj = {
        name : 'Foo Bar',
        age: 36,
    }

    const strObj = JSON.stringify(obj)

    console.log(strObj)
```

**Output :**
> {"name" : "Foo Bar","age": 36,}

**Code :**

```js
    const obj = {
        name : 'Foo Bar',
        age: 36,
        interests: ["Cricket", "Basketball"]
    }
    console.log(obj)
    console.log(typeof obj)

    const strObj = JSON.stringify(obj)
    console.log(strObj)
    console.log(typeof strObj)
```

**Output :**
> <img src="/javascript/22/screenshot1.png" alt="screenshot1.png" width="600px"/>

**Code :**

```js
    const obj = {
        name : 'Foo Bar',
        age: 36,
        interests: ["Cricket", "Basketball"]
    }
   
    const strObj = JSON.stringify(obj)
    const objFromStr = JSON.parse(strObj);
    console.log(objFromStr);
```

**Output :**
> { name: 'Foo Bar', age: 36, interests: [ 'Cricket', 'Basketball' ] }




