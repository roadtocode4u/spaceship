---
title: "Queue"
description: "Queue"
hide_table_of_contents: true
---

## Introduction to Queue

A queue is a data structure that works on a `first-in, first-out` (FIFO) principle. Just imagine a real-life queue or line of people waiting for something, like buying tickets or entering a ride at an amusement park.

Similarly, in computer science, a queue is a collection of elements where new elements are added to the back and elements are removed from the front. It follows the rule that the first element added to the queue will be the first one to be removed.

Think of it as a line of items, and you can only access the item at the front. When you add a new item, it goes to the back of the line, and when you remove an item, it's taken from the front.

**Enqueue**: Enqueue means adding an element to the back or end of the queue. It's like joining the end of a line. When you enqueue an element, it becomes the last element in the queue. Think of it as adding a new person to the back of a line of people.

**Dequeue**: Dequeue means removing an element from the front or beginning of the queue. It's like the first person in the line getting their turn and leaving the line. When you dequeue an element, you take out the element that has been in the queue for the longest time. Think of it as the first person in the line getting their turn and moving forward.


**Code :**

```cpp
#include<iostream>
using namespace std;

class Queue 
{
    public:
    int front;
    int back;
    int size;
    int capacity;
    int* queue;  // Added queue array declaration
    
    Queue()
    {
        front = -1;
        back = -1;
        size = 0;
        capacity = 100;
        queue = new int[capacity];  // Dynamically allocate memory for queue
    }
    
    void enqueue(int val)
    {
        if(size == capacity)
        {
            cout<<"Queue is full"<<endl;
            return;
        }
        
        if(front == -1)
        {
            front = 0;
            back = 0;
            queue[0] = val;
        }
        else
        {
            back++;
            queue[back] = val;  // Fixed typo (Queue -> queue)
        }
        size++;
    }
    
    int dequeue()
    {
        if(size  == 0)
        {
            cout<<"Queue is empty"<<endl;  // Fixed typo (Qoueue -> Queue)
            return -1;
        }
        
        int frontElement = queue[front];
        for (int i=front; i<back; i++)
        {
            queue[i] = queue[i+1];
        }
        size--;
        back--;
        return frontElement;
    }
    
    void printQueue()
    {
        for (int i=front; i<=back; i++)
        {
            cout<<queue[i]<<" ";
        }
        cout << endl;
    }
    
};

int main()
{
    Queue q;
    q.enqueue(2);
    q.enqueue(4);
    q.enqueue(6);
    q.enqueue(8);
    q.printQueue();
    return 0;
}

```

**Output :**

   
2 4 6 8 

1. The `Queue` class is defined. It represents a queue data structure and contains member variables and member functions to manage the queue.
2. Inside the `Queue` class, the following member variables are declared:

* `front`: Represents the front index of the queue. It is initialized to `-1`.
* `back`: Represents the back index of the queue. It is initialized to `-1`.
* `size`: Represents the current size of the queue. It is initialized to `0`.
* `capacity`: Represents the maximum capacity of the queue. It is set to `100`.
* `queue`: Represents a dynamically allocated integer array to store the elements of the queue. It is initialized using the new operator to allocate memory for an integer array of size capacity.

3. The `Queue` class has a constructor `Queue()`, which is used to initialize the member variables of the class. In the constructor:

* `front` and back are set to -1 to indicate an empty queue.
* size is set to `0` initially.
* Memory is dynamically allocated for the `queue` array using the `new` operator. The size of the allocated array is determined by the `capacity` variable.

4. The `enqueue(int val)` function is defined to add an element to the `queue`. It takes an integer value `val` as a parameter.

* It first checks if the queue is already full by comparing the size with the capacity. If the queue is full, it prints `Queue is full` and returns.
* If the queue is not full, it checks if it is an empty queue `front == -1`.
* If it is an empty queue, it sets `front` and `back` to `0` and assigns `val` to the first index of the queue array.
* If it is not an empty queue, it increments `back` and assigns `val` to the corresponding index of the `queue` array.
* Finally, it increments the `size` variable.

6. The `dequeue()` function is defined to remove and return an element from the front of the queue.

* It first checks if the queue is empty by comparing the `size` with `0`. If the queue is empty, it prints `Queue is empty` and returns `-1`.
* If the queue is not empty, it retrieves the element at the `front` index of the `queue` array and stores it in the `frontElement` variable.
* It then shifts the elements in the `queue` array to the left by one position to remove the front element.
* It decrements the `size` and `back` variables.
* Finally, it returns the `frontElement`.


6. The `printQueue()` function is defined to print all the elements of the queue.

* It iterates from `front` to `back` and prints each element of the `queue` array.

7. The `main()` function is defined as the entry point of the program.

* An instance of the `Queue` class, `q`, is created.
* Several elements `2, 4, 6, and 8` are enqueued using the `enqueue()` function.
* The `printQueue()` function is called to display the elements in the queue.
* The `main()` function returns `0`, indicating successful program execution.