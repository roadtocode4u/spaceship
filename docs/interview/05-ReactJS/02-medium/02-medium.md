### ReactJS Medium

<details>
  <summary>What is RealDOM and VirtualDOM?</summary>
  <b>RealDOM</b> and <b>VirtualDOM</b> both are special features in ReactJs.<br/><br/>

![DOM](dom.png)
<b>RealDOM : </b> RealDOM is a representation of current webpage or DOM render the webpage on browser.DOM stand for Document Object Model. It's a tree-like structure of HTML elements that browsers create based on the HTML code of a webpage.<br/>

 <hr/>

<b>VirtualDOM : </b> Virtual DOM is a duplicate copy of RealDOM and Virtual DOM is an in-memory representation of the actual webpage.Changes are first made to the Virtual DOM, and automatically changes reflected in real-time on the Real DOM.<br/>

  <hr/>

<b>Diffing Algorithm : </b> The Diffing Algorithm is creates a copy of the Virtual DOM and checks for differences between the Real DOM and the Virtual DOM . It identifies changes and updates the Real DOM accordingly.<br/>

  <hr/>

<b>Reconciliation : </b> After calculating the differences between the Real DOM and Virtual DOM in React, only the parts of the Real DOM that need to be changed. In this entire process that is called as Reconciliation.<br/>

</details>

<details>
<summary>What is named export and default export? </summary>

**Two types of Export & Import in React:-**

- `Default Export & Import:-` use for only one export.
  - export default Component
  - import Component from "path"

**Ex:**

```js title="src/components/Wishes.js"
export default function Wishes() {
  return (
    <div>
      <h1>Happy Christmas</h1>
    </div>
  );
}
```

```js title="src/components/Home.js"
import Wishes from "./Wishes";

return (
  <>
    <Wishes />
  </>
);
```

- `Name Export & Import:-` use for Multiple export in one component/file
  - export Component
  - import { Component, Another Component} from 'path'

**Ex:**

```js title="src/components/Wishes.js"
export function Wishes() {
  return (
    <div>
      <h1>Happy Christmas</h1>
    </div>
  );
}
```

```js title="src/views/Home.js"
import { Wishes } from "./Wishes";

return (
  <>
    <Wishes />
  </>
);
```

**Can i use default export along with name export?**<br/>
**=>** yes, you can but default export is only one.

**Ex:**

```js title="src/components/Students.js"
export default function Students() {
  return (
    <div>
      <h1>Good morning Sir</h1>
    </div>
  );
}
export function Teacher() {
  return (
    <>
      <h1>Hii Student</h1>
    </>
  );
}
```

```js title="src/views/Home.js"
import Students, { Teacher } from "./School";

return (
  <>
    <Students />
    <Teacher />
  </>
);
```

</details>
