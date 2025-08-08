# Creating First Server

## what is server?

<img src="https://media.istockphoto.com/id/1479739680/vector/customer-and-waiter-in-restaurant-cartoon-vector.jpg?s=612x612&w=0&k=20&c=f_TbSMXDKqc9oDMNXeYDWzmB509e4oGcLCiVWKVndE8=" width="300" height="200"></img>

### our server is like a restaurant where clients request for the service and and restaurant fullfills that.

### Where frontend acts like a client, API acts like a waiter and backend acts like a cook.

## which libraries?

- express
- nodemon
- Dotenv
- cors
- mongoose

## How to install?

 <img src="/expressjs/02/6.png"  width="600px"/>

- ### step 1:
  import express and create app using express

```js
import express from "express";

const app = express();
```

- ### step 2

  define port

```js
const PORT = 5000;
```

- ### step 3

server always lisetn on defined port

```js
app.listen(PORT, () => {
console.log(`your server is running on port ${PORT}`);

```

- ### step 4

create API .
API has two things in it

- path
- controller function

```js
app.get("/pizza", (req, res) => {
  res.send("pizza is ready....!");
});
```

<img src="/expressjs/02/8.png"  width="600px"/>

<img src="/expressjs/02/7.png"  width="600px"/>

### congratulation the first server is created...🎉
