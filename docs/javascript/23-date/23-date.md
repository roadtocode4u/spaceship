---
title: Date 
description: "Date"
hide_table_of_contents: true
---

## Introduction to the Date


The `Date` object is a built-in JavaScript class that allows you to work with dates and times. It provides methods and properties to create, manipulate, and format dates and times. You can create a new Date object like this:

```js
const date = new Date();
console.log(date);
```

```js
2023-09-11T06:12:38.628Z (Coordinated Universal Time)
```

In the above Example, We start by getting the current `date` and `time`, but by default, it's in `Coordinated Universal Time (UTC)`, which is like the global standard for time.

Now, to make it show the time in India `(Indian Standard Time or IST)`, we need to adjust it. `IST` is `5 hours and 30 minute`s ahead of UTC. So, to get Indian time, we add 5 hours and 30 minutes to the UTC time.

After this adjustment, we have the date and time in IST, which represents the local time in India.

To display it nicely, we use a function called `toLocaleString()`. This formatting gives us the `date` and `time` in the IST timezone.

```js
const date = new Date();
console.log(date.toLocaleString());
```

```js
11/9/2023, 11:52:45 am
```

## Date Object Methods

1. **`getMonth()`**

The `getMonth()` method retrieves the current month (0-11) from a Date object. Months are zero-based, so January is 0, February is 1, and so on.

```js
const date = new Date();
const month = date.getMonth(); /
console.log(month); 
```

**Output:**

```js
8
```

2. **`getFullYear()`**

The `getFullYear()` method retrieves the current year (4 digits) from a Date object.

```js
const date = new Date();
const year = date.getFullYear(); 
console.log(year); 
```
**Output :**

```js
2023
```

3. **`getDate()`**

The `getDate()` method retrieves the day of the month (1-31) from a Date object.

```js
const date = new Date();
const day = date.getDate(); 
console.log(day);

```
**Output :**

```js
11
```

4. **`getDay()`**

The `getDay()` method retrieves the day of the week (0-6) from a Date object, where 0 represents Sunday, 1 represents Monday, and so on.

```js
const date = new Date();
const dayOfWeek = date.getDay();
console.log(dayOfWeek); 
```
**Output :**

```js
1
```

5. **`getHours()`**

The `getHours()` method retrieves the current hour (0-23) from a Date object.

6. **`getMinutes()`**

The `getMinutes()` method retrieves the current minutes (0-59) from a Date object.

7. **`getSeconds()`**

The `getSeconds()` method retrieves the current seconds (0-59) from a Date object.

```js
const date = new Date();

const currentHour = date.getHours();
const currentMinutes = date.getMinutes();
const currentSeconds = date.getSeconds(); 

console.log(`Current Time: ${currentHour}:${currentMinutes}:${currentSeconds}`);
```

**Output:**

```js
Current Time: 12:5:46
```

### **You've successfully learned how to work with the Date object to manage date and time in JavaScript. 🎉**

<img src="/javascript/23/sticker.webp" alt="sticker" width="200px"/>