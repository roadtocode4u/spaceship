---
title: Creating Card Using Loop
description: "Creating Card Using Loop"
hide_table_of_contents: true
---

**Example :**

```html showLineNumbers="true"
<!DOCTYPE html>
<html>
  <head>
    <title>Array With Loop</title>
  </head>
  <style>
    .text-center {
      text-align: center;
    }
    .bg-primary {
      background-color: #99ccff;
    }

    .student-container {
      background-color: #fff;
      padding: 5px;
      margin: 5px;
      border: 4px double #ccc;
    }

    .student-card {
      border: 1px solid #ccc;
      margin: 5px;
      padding: 5px;
      background-color: #ffdab3;
      border-radius: 5px;
    }
  </style>
  <body class="bg-primary">
    <h1 class="text-center">Students List</h1>
    <div class="student-container" id="students-list"></div>

    <script>
      const students = [
        "Aarti",
        "Bharti",
        "Kirti",
        "Murti",
        "Shakti",
        "Bhakti",
      ];

      const studentsList = document.getElementById("students-list");

      for (let i = 0; i < students.length; i++) {
        studentsList.innerHTML =
          studentsList.innerHTML +
          `<div class="student-card"> Hello ${students[i]}</div>`;
      }
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/21/screenshot-1.png" alt="screenshot-1" width="600px"/>

In the above example, we initialized an array name of that array is `students` this contains a list of `student` names.

In line no. 45, you are selecting an HTML element an ID `students-list` using the `getElementById` method and store it into the `studentsList` variable.

The `students` array using a for loop. The loop runs as long as the loop counter `i` is less than the `length` of the students array.

In the for loop, you are using the innerHTML property of the `studentsList` element to add new content. You are creating a new `<div>` element with the class `student-card` for each student name and adding the student's name within the `<div>`. The `${students[i]}` is a template literal that allows you to add the current student's name into the your string.

**Example :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Array With Loop</title>
  </head>
  <style>
    .text-center {
      text-align: center;
    }
    .bg-primary {
      background-color: #99ccff;
    }

    .student-container {
      background-color: #fff;
      padding: 5px;
      margin: 5px;
      border: 4px double #ccc;
    }

    .student-card {
      border: 1px solid #ccc;
      margin: 5px;
      padding: 5px;
      background-color: #ffdab3;
      border-radius: 5px;
    }
  </style>
  <body class="bg-primary">
    <h1 class="text-center">Students List</h1>
    <div class="student-container" id="students-list"></div>

    <script>
      function getRandomEmogi() {
        const emojiList = [
          "🐵",
          "🐺",
          "🐶",
          "🐱",
          "🐭",
          "🐰",
          "🦊",
          "🐻",
          "🐼",
          "🐨",
          "🐯",
          "🦁",
        ];
        const min = 0;
        const max = emojiList.length;
        const randomEmojiIndex = Math.floor(Math.random() * (max - min) + min);
        return emojiList[randomEmojiIndex];
      }

      const emoji = getRandomEmogi();
      console.log(emoji);

      const students = [
        "Aarti",
        "Bharti",
        "Kirti",
        "Murti",
        "Shakti",
        "Bhakti",
      ];

      const studentsList = document.getElementById("students-list");

      for (let i = 0; i < students.length; i++) {
        const emoji = getRandomEmogi();
        studentsList.innerHTML =
          studentsList.innerHTML +
          `<div class="student-card"> Hello ${students[i]} ${emoji}</div>`;
      }
    </script>
  </body>
</html>
```

**Output :**

<img src="/javascript/21/screenshot-2.png" alt="screenshot-2" width="600px"/>

In the above example, in `<script>` tag we take `getRandomEmogi()` function you have defined that returns a random emoji from the `emojiList` array. The function works by generating a random index within the range of the array's length and using that index to select an `emoji` from the array.

You take an array which is `emojiList` containing a list of emojis.

The `min` and `max` constants are used to define the range for generating a random index. `min` is set to `0`, and `max` is set to the `length of the emojiList array`.

The random emoji index is generated using the formula `Math.floor(Math.random() * (max - min) + min)`. This generates a random integer between `0` and the `length of the emojiList array`.

You are selecting a random emoji from the emojiList array using the randomly generated index and storing it in the emoji variable.

The `students` array remains the same, containing a list of `student` names.

Similar to the previous code, you are selecting the HTML element with the ID `students-list` using `getElementById` and storing it in the `studentsList` variable.

A for `loop` iterates through each student in the `students` array.

Within the loop, you are calling the `getRandomEmogi()` function again to generate a new random emoji for each student.

The student's name and the randomly generated emoji are concatinate using template string added to the `studentsList` element's innerHTML.

The loop continues until all student names have been processed.
