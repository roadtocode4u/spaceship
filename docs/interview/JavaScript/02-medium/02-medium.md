### JavaScript Medium

<details>
  <summary>How to handle Runtime Error in javaScript?</summary>

   In javaScript, we Handle a Runtime Error  by using `try-catch` block.
   we put a possible error throwing code  in try block and if error is occured then the catch block is caught a error and handle the error .
   By using `try-catch ` we can execute a code without  interrupted or stoppted the application .  

   ```js
    try {
      // Possible error throwing code
    } catch (error) {
      // Handle the error here
    }
   ```

  
**try ()**: 
In **try** block we put possible error throwing or code block were error occure in runtime .For Example,API's call . So that we can execute this block safetly it the error occure then this error catch by **catch** block.

**catch(error)**:
 **catch** block receive a error object .
 In error object their are multiple parameters like `error message` , `error name` , `error stack` this things available in error object. By using error message we can safely show the message of the error  to the user just like error message we can use error name and error stack also.

 In this way our whole execution will not be interrupted or stopped but we will handle the error safely .

 ```js showLiniNumbers=true
 try{
    const a =10;
    console.log(a)
    console.log(c)
}
catch(e){
    console.log(e.message)
}
console.log("Hi")

 ```

 **Output**

 > 10 <br/>
   c is not defined <br/>
   Hi

</details>