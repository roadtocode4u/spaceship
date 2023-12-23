### ExpressJS Easy

<details>
  <summary>What is ExpressJS?</summary>

**Express.js** is a flexible and clean Node.js web application framework that provides robust features to develop web and mobile applications. You can assume express as a layer built on top of the `Node.js` that helps us to manage a server and routes.

### Let's See More Features Of Express.js :

1. It can be used to design single-page, multi-page and hybrid Web Applications
2. It allows you to set up `middleware` to respond to `HTTP` requests.
3. It Defines a routing table that is used to perform different actions based on `HTTP methods and URL`
4. It allows you to dynamically read HTML pages based on passing arguments to templates

It facilitates the rapid development of Node-based web applications.
In the MERN stack, Express will be used as a backend API
server that interacts with the MongoDB database to
serve data to client (React) applications.

</details>

<details>
  <summary>What is API?</summary>

**APIs:** API stands for "Application Programming Interface", is a set of rules and tools that allows different software applications to communicate with each other.
An API is like a messenger between different computer programs. It helps them share information and work together smoothly.

</details>

<details>

  <summary>What are the various HTTP methods? </summary>
  TODO: add answer @PournimaAnjole
=======
  <summary>What are the various HTTP methods?</summary>

**HTTP Methods:** HTTP methods (Hypertext Transfer Protocol methods).
HTTP methods provide a way for clients to interact with web servers in a standardized manner. Each method corresponds to a specific action that the server should take regarding the requested resource. For example, a GET request is used when you want to retrieve data, and a POST request is used when you want to send data to be processed or stored.The most common HTTP methods are:

**1.GET:** Used to request data from a specified resource.

**2.POST:** Used to submit data to be processed to a specified resource. Often used for submitting form data or uploading a file.

**3.PUT:** Used to update a resource or create a new resource if it does not exist at the specified URI.

**4.DELETE:** Used to request the removal of a resource.

**5.PATCH:** Used to apply partial modifications to a resource.


</details>

<details>
  <summary>What is middleware?</summary>

**middleware:** middleware is like a communication helper, translator, and security guard for computer systems, ensuring they work together smoothly and safely.
Middleware often includes security features to protect data during communication. This can involve encryption, authentication, and authorization mechanisms.

middleware functions often receive three parameters: req (request), res (response), and next.

**1.req (request):** This parameter contains information about the incoming HTTP request, including data like headers, parameters, and the request body.

**2.res (response):** This parameter is used to construct and send the HTTP response back to the client.

**3.next:** This is a function that, when called, passes control to the next middleware in the chain. If next is not called within a middleware function, the request-response cycle may be terminated, and the response may be sent back to the client.

```js showLineNumbers=true
const validateParams = (req, res, next) => {
  const { title, description, price } = req.body;
  if (!title) {
    res.json({
      success: false,
      message: "title is missing",
    });
  }

  if (!description) {
    res.json({
      success: false,
      message: "description is missing",
    });
  }

  if (!price) {
    res.json({
      success: false,
      message: "price is missing",
    });
  }

  next();
};

app.post("/orders", validateParams, async (req, res) => {
  const { title, description, price } = req.body;
  res.json({
    success: true,
    data: [],
    message: "order created succesffully",
  });
});
```

</details>
