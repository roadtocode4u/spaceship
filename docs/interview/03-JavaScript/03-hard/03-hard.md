### JavaScript Hard

<details>

  <summary>What is async await and promises in JavaScript</summary>

Generally, in JavaScript, everything is executed sequentially (synchronously), and because of some `long-running` function, we have to wait before executing the next line. In such cases, we use the `async` keyword in a front of function.

An `async function` in JavaScript returns a `Promise` and moves on to the next execution task. Promises are indications that these functions will return something. **Promises** have `three states`.

1. **Pending** - it means it have not returned anything and it is in the initial stage.
2. **Resolved** - it means function has returned something.
3. **Rejected** - it means function was not able to return any value due to some `error`.

with help of `await` keyword we can make this function to wait until the promise is resolved.

examples:

```js
function longRunningTask() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random() * 10;

    setTimeout(() => {
      if (randomNumber > 5) {
        resolve(
          `Task completed successfully with random value: ${randomNumber}`
        );
      } else {
        reject(`Task failed with random value: ${randomNumber}`);
      }
    }, 5000);
  });
}

async function performAsyncTask() {
  console.log("Start of async task");

  try {
    const result = await longRunningTask();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  console.log("End of async task");
}

performAsyncTask();
```

There's a function called `longRunningTask()` that act to do a `time-consuming` execution by creating a random number. This function uses `return Promise`, and the result of this promise can either be a **success or failure**, depending on a random number. The function takes about 5 seconds to let us know if it worked or not, using `setTimeout()` function.

Then, there's another function called `performAsyncTask()`. This one uses the **await** keyword to stop and wait until `longRunningTask()` function finishes its execution (to wait for promise to be resolved or rejected).

It logs the `Start of async task`, waits for it to finish, and then logs the `result or an error`. Finally, it logs `End of async task"`.

</details>

<details>
  <summary>What is Array and What are the different methods available in Array?</summary>
    TODO: add answer @PournimaAnjole
</details>
