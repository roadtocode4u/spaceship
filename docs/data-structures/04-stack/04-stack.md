---
title: "Stack"
description: "Stack"
hide_table_of_contents: true
---

#  Introduction to Stack

The stack data structure is a fundamental concept in computer science. It follows the Last-In, First-Out (LIFO) principle, which means that the last item added to the stack is the first one to be removed.

To use the stack, you can perform the following operations:

1. Push: Add an item to the top of the stack.
2. Pop: Remove the top item from the stack and return it.
3. isEmpty: Check if the stack is empty.
4. isFull: Check if the stack is full.

**Code :**

```cpp showLineNumbers="true"
#include<iostream>
using namespace std;

class Stack
{
    public:
    int arr[5];
    int capacity;
    int top;
    Stack()
    {
        capacity = 5;
        top = -1;
    }
    
    void push(int val)
    {
        if(top == capacity-1)
        {
            cout<<"Error: Stack Overflow"<<endl;
        }
        else
        {
            top++;
            arr[top] = val;
        }
    }
    
    int pop()
    {
        if(top==-1)
        {
            cout<<"Error: Stack UnderFlow"<<endl;
            return -1;
        }
        int topElement = arr[top];
        top--;
        return topElement;
    }
    
    void printStack()
    {
        cout<<"Current Stack :"<<endl;
        for(int i=top; i>=0; i--)
        {
            cout<<arr[i]<<endl;
        }
    }
};

int main()
{
    Stack s;
    s.push(4);
    s.push(8);
    s.push(12);
    s.push(19);
    s.push(20);
    s.pop();
    s.printStack();
    
    return 0;
}
```

**Output :**

Current Stack : <br/>
19 <br/>
12 <br/>
8 <br/>
4

Line 4 to 14, This block defines a class named `Stack`. It contains three member variables:

**arr[5]**: An array that will store the elements of the stack.
**capacity**: Represents the maximum capacity of the stack, set to `5` in this example.
**top**: Tracks the index of the top element in the stack, initialized to `-1` to indicate an empty stack.
The class also has a constructor `Stack()` which initializes the capacity and top variables.

Line 16 to 27, This function, `push()`, is used to add an element to the top of the stack. It takes an integer value as an argument. If the top is equal to `capacity-1`, it means the stack is already full and a `Stack Overflow` error message is printed. Otherwise, the top is incremented and the `val` is assigned to `arr[top]`, effectively adding the element to the stack.

Line 29 to 39, The `pop()` function is responsible for removing and returning the top element from the stack. If top is equal to `-1`, it means the stack is `empty`, and an `Stack Underflow` error message is printed. The function returns `-1` to indicate an error. Otherwise, the `topElement` is assigned the value of `arr[top]`, the top is decremented, and `topElement` is returned.

Line 41 to 48, The `printStack()` function is used to display the current elements in the stack. It iterates from the top index to `0` and prints the corresponding values of `arr[i]`.

Line 51 to 60, In the `main()` function, an instance of the `Stack` class, `s`, is created. Elements are then pushed onto the stack using the `push()` method. After that, `pop()` is called to remove the top element `(20 in this case)`. Finally, `printStack()` is invoked to display the remaining elements in the stack.