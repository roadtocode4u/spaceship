---
title: Programs on Array
description: "Programs on Array"
hide_table_of_contents: true
---

### Implementing Queue using Array

A queue is a data structure that follows the `First In First Out (FIFO)` or `First Come First Serve (FCFS)` principle.

The first element added to the queue is the first one to be removed. This is like being in a queue to get a movie ticket. The first one in the queue gets the ticket first.

Queues can be implemented in JavaScript using either the `push and shift methods` or `unshift and pop methods` of the array object. Although this is a simple way to implement queues, it is very inefficient for large queues — because of the methods operate on arrays, the shift and unshift methods move every element in the array each time they are called.

**Example of train ticket booking**
```js
const waiting_list = ["Sahil", "Bhakti", "Sakshi"];
console.log(waiting_list);
waiting_list.push("Nikita");
console.log(waiting_list);

waiting_list.shift()
console.log(waiting_list)
```
**Output**

> ["Sahil", "Bhakti", "Sakshi"] <br/> >["Sahil", "Bhakti", "Sakshi". "Nikita"]

>["Bhakti", "Sakshi". "Nikita"]


`waiting_list.push(" ")` used to add passenger name in queue.
`waiting_list.shift(" ")` used to remove or shift name from queue.

In this program  `[0:Sahil, 1:Bhakti, 2:Sakshi, 3:Nikita ]` this are waiting list names, this names can be added by using `waiting_list.push()`.

After this if the ticket is confirm of index number 1:sahil then it will be automatically shift by using `waiting_list.shift()`,then the list will be `[0:Bhakti, 1:Sakshi, 2:Nikita]`.


**Example to find largest number from given array**

```js
const marks = [99, 50, 180, 70]
let largest = marks[0]
for (const num of marks)
{
    if(num>largest)
    {
        largest=num
    }
}
console.log(largest)
```
**Output**  

> 180   

In this JavaScript code finds the largest number in an array. It initializes the `largest` variable with the first element of the `marks` array. It then iterates through each element, updating `largest `whenever it finds a larger number. After looping through all the elements, it prints the largest number. For the `array [99, 50, 180, 70],` the output is `180`.