---
title: Todo app
description: "Todo App"
hide_table_of_contents: true
---

#### First create basic structure with html and give some style and then jump to the js part .

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>

    <style>
      .heading {
        text-align: center;
      }
      .todo-item {
        border: 4px double #0055ff;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        background-color: #ccddff;
        color: #0055ff;
        display: flex;
        justify-content: space-between;
      }

      .btn-del {
        background-color: tomato;
        color: white;
        font-size: 8px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        height: 12px;
      }

      .tasks-container {
        height: 250px;
        overflow-y: scroll;
      }

      .task-input-container {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin: 10px;
      }

      .task-input {
        width: 50%;
        border-radius: 10px;
        padding: 5px 10px;
        font-size: 20px;
        border: 1px solid #0055ff;
      }

      .btn-add {
        border-radius: 40px;
        background-color: #0055ff;
        color: #fff;
        padding: 15px 30px;
        border: none;
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <h1 class="heading">ToDo App</h1>

    <div id="tasks-container" class="tasks-container"></div>

    <div class="task-input-container">
      <input
        type="text"
        id="task-input"
        placeholder="Enter a task"
        class="task-input"
      />
      <button onclick="addTask()" class="btn-add">Add Task</button>
    </div>
  </body>
</html>
```

### Output

<img src="/javascript/26/1.png" alt="screenshot1" width="600px"/>

#### lets start working on functionality with `Javascript`

### 1. Initialize the Tasks Array

```js
const tasks = [];
```

This line creates an empty array named `tasks` to store the list of tasks.

### 2. Load Tasks into the DOM:

```js
function loadTasks() {
  const tasksContainer = document.getElementById("tasks-container");
  tasksContainer.innerHTML = "";

  for (const task of tasks) {
    tasksContainer.innerHTML += `
      <div class="todo-item">
        ${task}
        <button class="btn-del" type="button" onclick="deleteTask('${task}')">
          Delete
        </button>
      </div>
    `;
  }
}
```

1. `loadTasks` is a function that updates the tasks displayed on the web page.
2. const tasksContainer = document.getElementById("tasks-container"); gets the container where tasks will be displayed.
3. ` tasksContainer.innerHTML = "";` clears any existing tasks in the container.
4. The `for (const task of tasks)` loop goes through each task in the tasks array.
5. Inside the loop, it creates a `div element for each task with a delete button`, and adds it to the container.

### 3. Delete a Task

```js
function deleteTask(task) {
  const taskIndex = tasks.indexOf(task);
  tasks.splice(taskIndex, 1);

  loadTasks();
}
```

1. `deleteTask is a function` that removes a task from the tasks array.
2. `const taskIndex = tasks.indexOf(task);` finds the index of the task to be deleted.
3. `tasks.splice(taskIndex, 1);` removes the task from the array.
4. `loadTasks();` is called to update the displayed tasks after a task is deleted.

### 4. Add a New Task:

```js
function addTask() {
  const taskInputElement = document.getElementById("task-input");
  const task = taskInputElement.value;

  if (!task) {
    alert("Please enter a task");
    return;
  }

  tasks.unshift(task);
  loadTasks();

  taskInputElement.value = "";
}
```

1. `addTask is a function` that adds a new task to the tasks array.
2. `const taskInputElement = document.getElementById("task-input");` gets the input element where the user types the task.
3. `const task = taskInputElement.value;` gets the value of the input.
4. `if (!task) { alert("Please enter a task"); return; }` checks if the input is empty and shows an alert if it is.
5. `tasks.unshift(task);` adds the new task to the beginning of the tasks array.
6. `loadTasks();` is called to update the displayed tasks.
7. `taskInputElement.value = "";` clears the input field.

### Adding Local Storage

#### let's add the `local storage functionality` to `save` and load tasks between `sessions.`

### 5. Load Tasks from Local Storage.

```js
function loadFromLocalStorage() {
  const allTasks = JSON.parse(localStorage.getItem("allTasks"));

  if (allTasks) {
    tasks.push(...allTasks);
  }

  loadTasks();
}
loadFromLocalStorage();
```

1. `loadFromLocalStorage` is a function that loads tasks from local storage.
2. `const allTasks = JSON.parse(localStorage.getItem("allTasks"));` retrieves the tasks from local storage and parses them as JSON.
3. `if (allTasks) { tasks.push(...allTasks); }` checks if there are tasks in local storage and adds them to the tasks array.
4. `loadTasks();` is called to update the displayed tasks.
5. `loadFromLocalStorage();` is called to load tasks from local storage when the script runs.

### 6. Update Local Storage When Loading Tasks.

```js
function loadTasks() {
  localStorage.setItem("allTasks", JSON.stringify(tasks));

  const tasksContainer = document.getElementById("tasks-container");
  tasksContainer.innerHTML = "";

  for (const task of tasks) {
    tasksContainer.innerHTML += `
      <div class="todo-item">
        ${task}
        <button class="btn-del" type="button" onclick="deleteTask('${task}')">
          Delete
        </button>
      </div>
    `;
  }
}
```

Inside the loadTasks function, localStorage.setItem("allTasks", JSON.stringify(tasks)); saves the current tasks array to local storage as a JSON string.

## full code with html, css and javascript.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>

    <style>
      .heading {
        text-align: center;
      }
      .todo-item {
        border: 4px double #0055ff;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        background-color: #ccddff;
        color: #0055ff;
        display: flex;
        justify-content: space-between;
      }

      .btn-del {
        background-color: tomato;
        color: white;
        font-size: 8px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        height: 12px;
      }

      .tasks-container {
        height: 250px;
        overflow-y: scroll;
      }

      .task-input-container {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin: 10px;
      }

      .task-input {
        width: 50%;
        border-radius: 10px;
        padding: 5px 10px;
        font-size: 20px;
        border: 1px solid #0055ff;
      }

      .btn-add {
        border-radius: 40px;
        background-color: #0055ff;
        color: #fff;
        padding: 15px 30px;
        border: none;
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <h1 class="heading">ToDo App</h1>

    <div id="tasks-container" class="tasks-container"></div>

    <div class="task-input-container">
      <input
        type="text"
        id="task-input"
        placeholder="Enter a task"
        class="task-input"
      />
      <button onclick="addTask()" class="btn-add">Add Task</button>
    </div>

    <script>
      const tasks = [];

      function loadFromLocalStorage() {
        const allTasks = JSON.parse(localStorage.getItem("allTasks"));

        if (allTasks) {
          tasks.push(...allTasks);
        }

        loadTasks();
      }
      loadFromLocalStorage();

      function loadTasks() {
        localStorage.setItem("allTasks", JSON.stringify(tasks));

        const tasksContainer = document.getElementById("tasks-container");
        tasksContainer.innerHTML = "";

        for (const task of tasks) {
          tasksContainer.innerHTML += `
        <div class="todo-item">
          ${task}
          <button class="btn-del" type="button" onclick="deleteTask('${task}')">
            Delete
          </button>
        </div>
        `;
        }
      }

      function deleteTask(task) {
        const taskIndex = tasks.indexOf(task);
        tasks.splice(taskIndex, 1);

        loadTasks();
      }

      function addTask() {
        const taskInputElement = document.getElementById("task-input");
        const task = taskInputElement.value;

        if (!task) {
          alert("Please enter a task");
          return;
        }

        tasks.unshift(task);
        loadTasks();

        taskInputElement.value = "";
      }
    </script>
  </body>
</html>
```

## Output

<img src="/javascript/26/2.png" alt="screenshot1" width="600px"/>

## Happy Coding 🤖
