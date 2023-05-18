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

# Reverse String Using Stack

**Code :**

```cpp  showLineNumbers="true"
#include<iostream>
using namespace std;

class Stack
{
    public:
    int arr[100];
    int capacity;
    int top;
    
    Stack()
    {
        capacity = 100;
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
            cout<<"Error: Stack Underflow"<<endl;
            return -1;
        }
        int topElement = arr[top];
        top--;
        return topElement;
    }
    
    void printStack()
    {
        cout<<"Current Stack: "<<endl;
        for(int i=top; i>=0; i--)
        {
            cout<<(char)arr[i]<<endl;
        }
    }
};

int main()
{
    Stack s;
    
    string str = "ROAD TO CODE";
    for(int i=0; i<str.length(); i++)
    {
        s.push(str[i]);
    }

    cout<<"Original String: "<<str<<endl;
    
    cout<<"Reverse String: ";
    
    while(s.top!=-1)
    {
        char topElement = s.pop();
        cout<<topElement<<endl;
    }
    
    
    return 0;
}
```

**Output :**
Original String: ROAD TO CODE <br/>
Reverse String: EDOC OT DAOR

`class Stack`: This line starts the definition of a class named `Stack`.

`public:`: This line specifies that the members defined after it are accessible from outside the class.

`int arr[100];`: This line declares an integer array named `arr` with a size of `100`, which will be used to store the elements of the stack.

`int capacity;`: This line declares an integer variable capacity to store the maximum capacity of the stack.

`int top;`: This line declares an integer variable top to keep track of the top element of the stack.

`Stack()`: This is the constructor of the Stack class. It is called when a Stack object is created. It initializes the capacity to `100` and top to `-1`.

`void push(int val)`: This is a member function of the `Stack` class that takes an integer value as a parameter. It is used to push an element onto the stack. If the stack is full `top == capacity-1`, it displays an error message. Otherwise, it increments top and assigns the value to `arr[top]`.

`int pop()`: This member function of the `Stack` class is used to pop an element from the stack. If the stack is empty `top==-1`, it displays an error message and returns `-1`. Otherwise, it stores the top element in `topElement`, decrements top, and returns `topElement`.

`void printStack()`: This member function of the `Stack` class is used to print the elements of the stack in reverse order. It iterates from the top of the stack to the bottom and prints each element.

`int main()`: This is the starting point of the program. The main function is executed first.

`Stack s;`: This line creates an object `s` of the `Stack` class.

`string str = "ROAD TO CODE";`: This line declares a string variable `str` and assigns it the value `"ROAD TO CODE"`.

`for(int i=0; i<str.length(); i++)`: This line starts a loop that iterates over the characters of the string `str`.

`s.push(str[i]);`: This line pushes each character of the string onto the stack `s` using the push member function.

`cout<<"Original String: "<<str<<endl;`: This line prints the original string.

`cout<<"Reverse String: ";`: This line prints the text `Reverse String: `.

`while(s.top!=-1)`: This line starts a loop that continues until the stack s is empty `top is -1`.

`char topElement = s.pop();`: This line pops the top element from the stack `s` using the pop member function and assigns it to the `topElement` variable.

`cout<<topElement<<endl;`: This line prints the value of `topElement`, which represents the reversed string character by character.