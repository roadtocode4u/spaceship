---
title: JSON
description: "JSON"
hide_table_of_contents: true
---

## JSON Object 

JSON stands for `JavaScript Object Notation`.

In JSON keys must be represented as strings and Keys must be unique within an object. The values associated with the keys can be of various types, including numbers, strings, arrays, or objects.

JSON is a text-based format that consists of `key-value` pairs enclosed in` curly braces {}`, where each key is a string and each value can be one of the following data types:

`String:` Enclosed in double quotes, `e.g., "name": "Anand"`<br/>
`Number:` E.g., `"age": 23`<br/>
`Boolean:` `true` or `false`<br/>
`Null:` `null`<br/>
`Object:` A collection of key-value pairs enclosed in curly braces, e.g.,

```js
"address": {
    "street": "123 Main St",
    "city": "Pune"
}
```

`Array:` An ordered list of values enclosed in square brackets `[]`, e.g.,
```js
students:["a@gmail.com", "b@gmail.com", "c@gmail.com"]
```

```js
`{}` <----- empty object

key -----> `name`, `age`, `city`

value -----> `string`, `number`, `array`, `object`, `boolean`
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

**Example Explanation :**

`const student` = This line declares a constant variable named `student` and initializes it with an object literal enclosed in curly braces `{}`. This object has three key-value pairs separated by colons:

`"name": "Anand"`: This is a key-value pair where the key is `name` and the value is `Anand`. It represents the name of the student, which is a string.

`"age": 23`: This is another key-value pair where the key is `age` and the value is `23`. It represents the age of the student, which is a number.

`"city": "Pune"`: This is the third key-value pair where the key is `city` and the value is `Pune`. It represents the city where the student lives, which is also a string.

`console.log(student)`: This line uses the `console.log()` function to output the student object to the console.

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

**Example Explanation :**

In the above example,we creates a JavaScript object called `student` with three properties:

1. `"name"`: It has the value `"Anand"` and represents the name of the student.
2. `"age"`: It has the value `23` and represents the age of the student.
3. `"city"`: It has the value `"Pune"` and represents the city where the student lives.

After defining the `student` object, the code uses `console.log(student.age)` to access the `"age"` property of the `student` object and prints its value (`23`) to the console. So, the output of this code will be `23`, which is the age of the student.

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

**Example Explanation :**

In the above example,we creates a JavaScript object called `student` with three properties:

1. `"name"`: It has the value `"Anand"` and represents the name of the student.
2. `"age"`: It has the value `23` and represents the age of the student.
3. `"city"`: It has the value `"Pune"` and represents the city where the student lives.

After defining the `student` object, the code uses `console.log(student.city)` to access the `"city"` property of the `student` object and prints its value (`Pune`) to the console. So, the output of this code will be `Pune`, which is the city of the student.

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

**Example Explanation :**

In the above example,we creates a JavaScript object called `student` with three properties:

1. `"name"`: It has the value `"Anand"` and represents the name of the student.
2. `"age"`: It has the value `23` and represents the age of the student.
3. `"city"`: It has the value `"Pune"` and represents the city where the student lives.

After defining the `student` object, the code uses `console.log(student.name)` to access the `"name"` property of the `student` object and prints its value (`Anand`) to the console. So, the output of this code will be `Anand`, which is the name of the student.

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

**Example Explanation :**

In the above example,we creates a JavaScript object called `student` with three properties:

1. `"name"`: It has the value `"Anand"` and represents the name of the student.
2. `"age"`: It has the value `23` and represents the age of the student.
3. `"city"`: It has the value `"Pune"` and represents the city where the student is located.

After creating the `student` object, the code modifies the value of the `"city"` property using square bracket notation: `student['city'] = 'Nagpur'`. This statement updates the `"city"` property from `"Pune"` to `"Nagpur"`.

Finally, it uses `console.log(student)` to print the entire `student` object to the console, which will show that the `"city"` property has been changed to `"Nagpur"`. The output will be:

```javascript
{
    "name": "Anand",
    "age": 23,
    "city": "Nagpur"
}
```

So, the `"city"` property's value has been updated to `"Nagpur"` in the `student` object.

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

**Example Explanation :**

In the above example,we creates a JavaScript object called `student` with four properties:

1. `"name"`: It has the value `"Anand"` and represents the name of the student.
2. `"age"`: It has the value `23` and represents the age of the student.
3. `"city"`: It has the value `"Pune"` and represents the city where the student lives.
4. `"first-name"`: It has the value `"XYZ"` and represents the first name of the student. 

The property `"first-name"` contains a hyphen in its name, which is a valid practice in JavaScript, but it requires the use of square bracket notation to access its value due to the hyphen. 

So, the code uses `console.log(student['first-name'])` to access the `"first-name"` property of the `student` object and prints its value (`"XYZ"`) to the console. The square bracket notation allows you to access properties with special characters, such as hyphens or spaces, in their names.

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

**Example Explanation :**

In the above example, a JavaScript object named `course` is defined with several properties:

1. `"title"`: It has the value `"IGCP-1.0"` and represents the title of the course.
2. `"students"`: It is an array containing three email addresses, `"a@gmail.com"`, `"b@gmail.com"`, and `"c@gmail.com"`, representing the students enrolled in the course.
3. `"isActive"`: It has the value `true`, indicating that the course is currently active.
4. `"totalSeats"`: It has the value `30`, representing the total number of seats available in the course.
5. `"batchTimings"`: It is an object containing the batch timings for each day of the week, such as Monday, Tuesday, Wednesday, etc.

The code uses `console.log(course.title)` to access and print the value of the `"title"` property of the `course` object, which is `"IGCP-1.0"`. So, when you run this code, it will display `"IGCP-1.0"` in the console.

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

**Example Explanation :**

In the above example , a JavaScript object named `course` is defined with several properties, including an array property `"students"`:

1. `"title"`: It has the value `"IGCP-1.0"` and represents the title of the course.
2. `"students"`: It is an array containing three email addresses, `"a@gmail.com"`, `"b@gmail.com"`, and `"c@gmail.com"`, representing the students enrolled in the course.
3. `"isActive"`: It has the value `true`, indicating that the course is currently active.
4. `"totalSeats"`: It has the value `30`, representing the total number of seats available in the course.
5. `"batchTimings"`: It is an object containing the batch timings for each day of the week, such as Monday, Tuesday, Wednesday, etc.

The code uses `console.log(course.students)` to access and print the value of the `"students"` property of the `course` object, which is `["a@gmail.com", "b@gmail.com", "c@gmail.com"]`. So, when you run this code, it will display `["a@gmail.com", "b@gmail.com", "c@gmail.com"]` in the console.

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

**Example Explanation :**

In the above example , a JavaScript object named `course` is defined with several properties, including an array property `"students"`:

1. `"title"`: It has the value `"IGCP-1.0"` and represents the title of the course.
2. `"students"`: It is an array containing three email addresses, `"a@gmail.com"`, `"b@gmail.com"`, and `"c@gmail.com"`, representing the students enrolled in the course.
3. `"isActive"`: It has the value `true`, indicating that the course is currently active.
4. `"totalSeats"`: It has the value `30`, representing the total number of seats available in the course.
5. `"batchTimings"`: It is an object containing the batch timings for each day of the week, such as Monday, Tuesday, Wednesday, etc.

The code uses `console.log(course.students.length)` to access the `"students"` property of the `course` object and retrieve its length, which is the number of elements in the array. In this case, the length of the `"students"` array is `3`, as there are three email addresses in it. So, when you run this code, it will display `3` in the console.

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

**Example Explanation :**

In the above example, a JavaScript object named `course` is defined with several properties:

1. `"title"`: It has the value `"IGCP-1.0"` and represents the title of the course.
2. `"students"`: It is an array containing three email addresses, `"a@gmail.com"`, `"b@gmail.com"`, and `"c@gmail.com"`, representing the students enrolled in the course.
3. `"isActive"`: It has the value `true`, indicating that the course is currently active.
4. `"totalSeats"`: It has the value `30`, representing the total number of seats available in the course.
5. `"batchTimings"`: It is an object containing the batch timings for each day of the week, such as Monday, Tuesday, Wednesday, etc.

The code uses `console.log(course.isActive)` to access and print the value of the `"isActive"` property of the `course` object, which is `"true"`. So, when you run this code, it will display `"true"` in the console.

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

>{   <br/>
        monday: "9AM-10AM",<br/>
        tuesday: "9AM-10AM",<br/>
        wednesday: "9AM-10AM",<br/>
        thursday: "9AM-10AM",<br/>
        friday: "9AM-10AM",<br/>
        saturday: "9AM-10AM",<br/>
        sunday: "off",<br/>
  }

  **Example Explanation :**

 In the above example, a JavaScript object named `course` is defined with several properties, including an object property `"batchTimings"`:

1. `"title"`: It has the value `"IGCP-1.0"` and represents the title of the course.
2. `"students"`: It is an array containing three email addresses, `"a@gmail.com"`, `"b@gmail.com"`, and `"c@gmail.com"`, representing the students enrolled in the course.
3. `"isActive"`: It has the value `true`, indicating that the course is currently active.
4. `"totalSeats"`: It has the value `30`, representing the total number of seats available in the course.
5. `"batchTimings"`: It is an object containing batch timings for each day of the week, such as Monday, Tuesday, Wednesday, etc., with corresponding time ranges.

The code uses `console.log(course.batchTimings)` to access and print the entire `"batchTimings"` object, which includes the timings for each day of the week. When you run this code, it will display the following output:

```javascript
{
    monday: "9AM-10AM",
    tuesday: "9AM-10AM",
    wednesday: "9AM-10AM",
    thursday: "9AM-10AM",
    friday: "9AM-10AM",
    saturday: "9AM-10AM",
    sunday: "off"
}
```

This output shows the batch timings for each day of the week as defined in the `course` object's `"batchTimings"` property.

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

**Example Explanation :**

 In the above example, a JavaScript object named `course` is defined with several properties, including an object property `"batchTimings"`:

1. `"title"`: It has the value `"IGCP-1.0"` and represents the title of the course.
2. `"students"`: It is an array containing three email addresses, `"a@gmail.com"`, `"b@gmail.com"`, and `"c@gmail.com"`, representing the students enrolled in the course.
3. `"isActive"`: It has the value `true`, indicating that the course is currently active.
4. `"totalSeats"`: It has the value `30`, representing the total number of seats available in the course.
5. `"batchTimings"`: It is an object containing batch timings for each day of the week, such as Monday, Tuesday, Wednesday, etc., with corresponding time ranges.

The code uses `console.log(course.batchTimings.monday)` to access and print the value associated with the `"monday"` property within the `"batchTimings"` object. In this case, the `"monday"` property holds the string `"9AM-10AM"`, which represents the batch timing for Mondays.

When you run this code, it will display `"9AM-10AM"` in the console because you are specifically accessing the `"monday"` property within the `"batchTimings"` object of the `course` object.

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
    const students = [
        {
            name: 'A',
            age: 26,
        },
        {
            name: 'B',
            age: 25,
        },
        {
            name: 'C',
            age: 21,
        }
    ]
      
    console.log(students);
```

**Output :**
> [ <br/>
    {name: 'A', age: 26},<br/>
    {name: 'B', age: 25},<br/>
    {name: 'C', age: 21},<br/>
]

**Example Explanation :**

In the above example, the code defines a JavaScript array called `students`, which contains three objects.

`"name"`: It represents the name of the student name as a `string`. <br/>
`"age"`: It represents the age of the student age as a `number`.

The `console.log(students) `statement is used to print the entire students array, including the information about the three students, to the console. The output will display the array of student objects as follows:

```js
[
    { name: 'A', age: 26 },
    { name: 'B', age: 25 },
    { name: 'C', age: 21 }
]
```
This output shows the array of student objects, along with their respective `names` and `ages`.


**Code :**

```js
    const students = [
        {
            name: 'A',
            age: 26,
        },
        {
            name: 'B',
            age: 25,
        },
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
> {name: 'A', age: 26},<br/>
  {name: 'B', age: 25},<br/>
  {name: 'C', age: 21},<br/>

**Example Explanation :**

In the above example:

1. An array named `students` is defined, which contains three objects. Each object represents a student with properties `name` and `age`. 

2. A `for` loop is used to iterate over the `students` array. The loop is structured to run as long as the loop variable `i` is less than the length of the `students` array, which ensures that it iterates through all the elements in the array.

3. Inside the loop, for each iteration, it accesses and prints the entire student object at the current index using `console.log(students[i])`. This means that it will display all the properties `(name and age)` of each student in the array.

As a result, this code will print the information for each student in the `students` array, including their `name and age`. 

```js
 {name: 'A', age: 26},
 {name: 'B', age: 25},
 {name: 'C', age: 21}
```
The output will consist of three sets of student data, one for each student in the array.


**Code :**

```js
    const students = [
        {
            name: 'A',
            age: 26,
        },
        {
            name: 'B',
            age: 25,
        },
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
>Hello A. you are 26 years old.<br/>
Hello B. you are 25 years old.<br/>
Hello C. you are 21 years old.<br/>

**Example Explanation :**

In the above example, an array called `students` containing three objects, each representing a student with a `name` and an `age` property. It then iterates through this array using a `for` loop and prints a message for each student, displaying their name and age.

1. The `students` array contains three objects, each with `name` and `age` properties.

2. A `for` loop is used to iterate through the `students` array. The loop starts with `i` initialized to `0` and continues as long as `i` is less than the length of the `students` array.

3. Inside the loop, two variables, `name` and `age`, are assigned the values of the `name` and `age` properties of the current student object (accessed using `students[i]`).

4. A message is then printed to the console using `console.log()`, which includes the `student's name` and `age` using` template string` (enclosed in backticks).

So, for each student in the `students` array, the code prints a message like: <br/>
`"Hello [name]. You are [age] years old."`
```js
Hello A. you are 26 years old.
Hello B. you are 25 years old.
Hello C. you are 21 years old.
```

## JSON stringify() & JSON parse()
 1.  **JSON stringify():** `JSON.stringify` is a method used to convert a JavaScript object into a `JSON string`.
 2. **JSON parse():** `JSON.parse `is a method used to `parse a JSON string` and convert it back into a JavaScript object.


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

**Example Explanation :**

In the above example:

1. An object named `obj` is defined with two properties: `name` and `age`.

2. The `JSON.stringify(obj)` method is used to convert the `obj` into a JSON string (`strObj`). 

3. The `console.log(strObj)` statement prints the `strObj` JSON string to the console.

So, this example demonstrates how to convert a JavaScript object (`obj`) into a JSON (JavaScript Object Notation) string (`strObj`) using the `JSON.stringify()` method. The resulting `strObj` contains the serialized representation of the `obj` object as a string. 

```js
{"name" : "Foo Bar","age": 36,}
```
The output will be the JSON representation of the `obj` object.

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

**Example Explanation :**

In the above example, demonstrates the conversion between a JavaScript object (`obj`) and a `JSON (JavaScript Object Notation)` string (`strObj`) and illustrates how their types change during the process.

1. First, an object named `obj` is defined with three properties: `name`, `age`, and `interests`.

2. The `console.log(obj)` statement prints the `obj` object to the console, showing its structure and values.

3. The `console.log(typeof obj)` statement prints the type of the `obj` variable, which will be "object."

4. The `JSON.stringify(obj)` method is used to convert the `obj` into a JSON string (`strObj`). This function serializes the JavaScript object into a string representation.

5. The `console.log(strObj)` statement prints the `strObj` JSON string to the console.

6. The `console.log(typeof strObj)` statement prints the type of the `strObj` variable, which will be "string."

So, this example first shows the original object (`obj`) and its type, then converts it to a JSON string (`strObj`) and prints both the string and its type. It demonstrates how the `JSON.stringify()` function transforms a JavaScript object into a JSON string, changing its type from `"object"` to `"string"` in the process.

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

**Example Explanation :**

In the above example demonstrates how to convert a JavaScript object (`obj`) into a `JSON (JavaScript Object Notation)` string and then parse it back into a `JavaScript object`.

1. First, an object named `obj` is defined with three properties: `name`, `age`, and `interests`.

2. The `JSON.stringify()` method is used to convert the `obj` into a JSON string (`strObj`). This function serializes the JavaScript object into a string representation.

3. The `JSON.parse()` method is then applied to `strObj` to parse it back into a JavaScript object, creating `objFromStr`.

4. Finally, the `console.log()` function is used to print the `objFromStr` object to the console.

The output will be the same as the original `obj`. <br/>i.e `{ name: 'Foo Bar', age: 36, interests: [ 'Cricket', 'Basketball' ] }`.


## Object Destructuring
`Object destructuring` is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a more `concise and convenient way`. It is a way to `"destructure"` or break down the properties of an object into separate variables. This feature can make your code cleaner and more readable.

**Code :**

```js
    const user = {
       name: "Anand",
       age: 23,
       mobile: "7020407429",
       isActive: true,
       city: "Pune"
    }

    const {name, age} = user;

    console.log(name);
    console.log(age)
```

**Output :**
> Anand <br/>
23

**Example Explanation :**

In the above example, a JavaScript object named `user` is defined with several properties:

1. `"name"`: It has the value `"Anand"` and represents the name of the user.
2. `"age"`: It has the value `23` and represents the age of the user.
3. `"mobile"`: It has the value `"7020407429"` and represents the user's mobile number.
4. `"isActive"`: It has the value `true`, indicating that the user's account is currently active.
5. `"city"`: It has the value `"Pune"` and represents the city where the user is located.

Next, the code uses `object destructuring` to extract specific properties from the `user` object and assign them to variables. Specifically, it extracts the `"name"` property and assigns it to the variable `name`, and it extracts the `"age"` property and assigns it to the variable `age`.

Finally, the code uses `console.log(name)` and `console.log(age)` to print the values of the `name` and `age` variables to the console. When you run this code, it will display:

```js
Anand
23
```

These lines show the values extracted from the `user` object using `object destructuring`.