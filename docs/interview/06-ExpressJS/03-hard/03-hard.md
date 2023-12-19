### ExpressJS Hard

<details>
  <summary>What is the REST API?</summary>

## REST API ?

REST API is know as RESTfull API, It is standard process set which is use while an making an API if a API follows Rest Standard that API called as `RESTfull API`.
REST stands for Representational state transfer.All the business logic is store in server that is need to tranfer to the client. If the State is tranfereing data from server to the client is Reprentational state then it called as RESTfull API.

### REST API Standrads

1. Rest standard says that only four method or api request should be use that are `GET` , `POST` , `PUT` , `PATCH` , `DELETE`.
   If you are using other than above method then you are not following REST Standard. <br/>
   `POST` method is use for creating the resource , `GET` method is use for reading the source ,`PUT` method is use for updating the source, `PATCH` method is use for updating the specific field. `DELETE` method is use for deleting the resource.

- At a time only one resource would be creadted ,updated, deleted.
- At a time one or more than one resources would be get.

2. In RESTful API design, it is recommended to use plural nouns for resource endpoints. For example, you would have endpoints like `/students` and `/products` instead of using verbs like `getStudent`, `fetchStudent` etc. This approach promotes simplicity, consistency, and intuitiveness in the API structure

3. API should be `Idempotent` except POST method , the term `idempotent` refers to a property of certain HTTP methods. An HTTP method is considered idempotent if making multiple identical requests has the same effect as making a single request. In other words, whether you send the request once or multiple times, the result should be the same.

The idempotent property is important for various reasons, including reliability and robustness in distributed systems. It allows clients to recover from failures or errors by simply retrying a request without causing unintended side effects.

**The following HTTP methods are considered idempotent:** <br/>
GET:The GET method is inherently `Idempotent`. Retrieving a resource multiple times should not have any side effects on the server or the resource itself

PUT/PATCH:The PUT method is `Idempotent` because multiple identical requests to update or create a resource should have the same result as a single request. If the resource exists, it is updated; if it doesn't exist, it is created

DELETE:The DELETE method is `Idempotent` as well. Deleting a resource multiple times is still a valid operation, and subsequent delete requests have no additional effect if the resource is already deleted

4. HTTP status codes are an integral part of the REST (Representational State Transfer) architecture, and they are used to indicate the result of a client's request to a server. The status code is a three-digit numeric code that is part of the HTTP response. It provides information about the success, failure, or other conditions of the request. <br/>
   200 is use for successfully getting a resources

```js showLineNumbers=true
app.get("/api/buses/:_id", async (req, res) => {
  return res.status(200).json({
    success: true,
    data: [{ _id: _id }],
    message: "data found successfully",
  });
});
```

201 is use for creating resources

```js showLineNumbers=true
app.post("/api/buses",async(req , res)=>{
   const { busno,seats}=req.body;
    return res.status(201).json({
     success:true,
     data:[
       {
      busno:121,
      seats:20
       },
       {
      busno:121,
      seats:20
       },
     ],,
     message:'bus data added successfully'
 })
})
```

203 is use when resource not found

```js showLineNumbers=true
app.get("/api/buses/:_id", async (req, res) => {
  const { _id } = req.params;

  if (_id == 24) {
    return res.status(203).json({
      success: true,
      data: [],
      message: "data found successfully",
    });
  }
  return res.status(200).json({
    success: true,
    data: [{ _id: _id }],
    message: "data found successfully",
  });
});
```

5. API Verserning:When making any modifications to your API, it is necessary to maintain versioning

```js showLineNumbers=true
app.post("/api/v1/buses", async (req, res) => {
  const { busno, seats } = req.body;
  return res.status(201).json({
    success: true,
    data: [
      {
        busno: 121,
        seats: 20,
      },
      {
        busno: 121,
        seats: 20,
      },
    ],
    message: "bus data added successfully",
  });
});

app.post("/api/v2/buses", async (req, res) => {
  const { busno, seats } = req.body;
  return res.status(201).json({
    success: true,
    data: [
      {
        busno: 121,
        totalseat: 20,
      },
      {
        busno: 121,
        totalseat: 20,
      },
    ],
    message: "bus data added successfully",
  });
});
```

</details>
