### JavaScript Hard

<details>

  <summary>What is async await and promises in JavaScript</summary>

Generally, in JavaScript, everything is executed sequentially (synchronously), and because of some `long-running` function, we have to wait before executing the next line. In such cases, we use the `async` keyword in a front of function.

An `async function` in JavaScript returns a `Promise` and moves on to the next execution task. Promises are indications that these functions will return something. **Promises** have `three states`.

1. **Pending** - it means it have not returned anything and it is in the initial stage.
2. **Resolved** - it means function has returned something.
3. **Rejected** - it means function was not able to return any value due to some `error`.

with help of `await` keyword we can make this function to wait until the promise is resolved.

</details>
