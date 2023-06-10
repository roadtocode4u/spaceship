---
title: API calls from React Using axios
description: "API calls from React Using axios"
hide_table_of_contents: true
---

You can create API to read specific student data.

```js
app.get("/student", async (req, res) => {
  const email = req.query.email;

  const student = await Student.findOne({ email: email });

  if (student) {
    res.json({
      success: true,
      message: "Student fetched successfully",
      data: Student,
    });
  }

  res.json({
    success: false,
    message: "Student not found",
    data: null,
  });
});
```

In the `/student` route, we retrieve the email from the request body.

In the `/students` route, we use Student.findOne() to retrieve specific student from the database. The fetched students are returned in the response.
We have get request so we can pass parameter in query.

To find specific student from database. Then follow the following steps:

**Steps :**

1. To open Thunder client.
2. Create a new request.
3. Request type should be get.
4. `http://localhost:5000/student?email=<email>&regNo=<regNo>`

**ex.**

```js
http://localhost:5000/student?email=harshda@gmail.com&regNo=1
```

where,

**`?`** It is used because we have pass query.

**`&`** when we have passed multiple parameter then use `&` parameter.that separate the parametrs.

**Example :**

**`Input`**

<img src="/icp/47/step-1.png" alt="step-1" width="600px"/>

**`Output`**

<img src="/icp/47/step-2.png" alt="step-2" width="600px"/>

## Axios

Thunder client is used to calls the APIs. Axios is a client library and it is used to calls an APIs in the react app.axios library can be install on frontend.

To install axios

```js
npm i axios
```

**To call API's in react app.**

Firstly you have create simple react app.

```js
npx create-react-app frontend
```

Then install axiox library for calling frontend API's in the react app.In the react app remove unwanted content from `App.js` file.Then create `async function` and set proxy in `package.json` file.

```js
 "proxy": "http:localhost:5000"
```

**file Name:** App.js

```js
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  async function loadData() {
    const response = await axios.get("/student?email=harshda@gmail.com");
    console.log(response.data.data.fullname);
  }
  loadData();

  return (
    <div>
      <h1>Making API call from fontend</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default App;
```
