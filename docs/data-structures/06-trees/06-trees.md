---
title: "Trees"
description: "Trees"
hide_table_of_contents: true
---

## Introduction To Tree

A tree is a widely used data structure that resembles a real-life tree. Just like a tree has a `root`, `branches`, and `leaves`, a tree data structure consists of nodes connected in a hierarchical manner.

At the core of a tree is the `root` node, which serves as the starting point. From the `root`, `branches` extend outward, connecting to other nodes called `child` nodes. Each `child` node can, in turn, have its own child nodes, forming a branching structure.

Nodes in a tree are connected by `edges`, which represent the relationships between them. The edge that connects a `child` node to its `parent` node is known as a `parent-child ` relationship. Nodes that share the same parent are called `siblings`.

A crucial property of trees is that there is only one path between any two nodes. This property ensures a clear hierarchy and allows efficient traversal and searching within the tree structure.

The node at the topmost level, without any parent, is the `root` node. It serves as the entry point to the entire tree. Nodes at the bottom of the tree, without any children, are called `leaf` nodes. They are the endpoints of the tree structure.

A tree is a hierarchical data structure consisting of nodes connected by `edges`, with a root node at the top and leaf nodes at the bottom. It allows for organized and efficient representation of data with clear relationships and hierarchical ordering.

**Code :**

```cpp
#include<iostream>
using namespace std;

class Node
{
    public:
    int data;
    Node *left;
    Node *right;
    
    Node(int data)
    {
        this->data = data;
        left = NULL;
        right = NULL;
    }
};
    int main()
    {
        
    Node *root = new Node(5);
    Node *a = new Node(10);
    Node *b = new Node(15);
    Node *c = new Node(18);
    Node *d = new Node(30);
    Node *e = new Node(26);
    
    root->left = a;
    root->right = b;
    
    a->left = c;
    a->right = d;
    
    b->left = e;
    
        return 0;
}
```

The code defines a class named `Node`, which represents a node in a binary tree. The Node `class` has three members:

`data`: An integer variable to store the data value of the node.
`left`: A pointer to the left child node.
`right`: A pointer to the right child node.
The Node class also has a constructor that takes an integer parameter data. Inside the constructor, it initializes the data variable with the passed value and sets both `left` and `right` pointers to NULL.

The `main()` function serves as the entry point of the program.

Inside the `main()` function, several instances of the Node class are created:

`root` is created with a data value of `5`. <br/>
`a` is created with a data value of `10`. <br/>
`b` is created with a data value of `15`. <br/>
`c` is created with a data value of `18`. <br/>
`d` is created with a data value of `30`. <br/>
`e` is created with a data value of `26`.<br/>

The code establishes the relationships between the nodes to form a binary tree structure. Here's how the connections are made:

root node's left child is set to a node, and its right child is set to b node.
a node's left child is set to c node, and its right child is set to d node.
b node's left child is set to e node.

## BFS 

**Code :**

```cpp
#include<iostream>
#include<queue>

using namespace std; // Added for cout

class Node
{
    public:
    int data;
    Node *left;
    Node *right;
    
    Node(int data)
    {
        this->data = data;
        left = NULL;
        right = NULL;
    }
};

int main()
{
    Node *root = new Node(5);
    Node *a = new Node(10);
    Node *b = new Node(15);
    Node *c = new Node(18);
    Node *d = new Node(30);
    Node *e = new Node(26);
    
    root->left = a;
    root->right = b;
    
    a->left = c;
    a->right = d;
    
    b->left = e;
    
    queue<Node *> q;
    q.push(root);
    
    while (!q.empty())
    {
        Node *front = q.front();
        q.pop();
        
        cout << front->data << ", ";
        
        if(front->left!=NULL)
        {
            q.push(front->left);
        }
        
        if(front->right!=NULL)
        {
            q.push(front->right);
        }
    }
    
    return 0;
}
```

**Output :**

5, 10, 15, 18, 30, 26,


The nodes are then linked together to form a binary tree structure. The left child of the `root` node is set to `a`, and the `right` child is set to `b`. Similarly, the `left` and `right` children of `a` are set to `c` and `d`, respectively. The left child of `b` is set to `e`.

A queue of pointers to Node objects, `q`, is created to perform the breadth-first traversal. The root node is initially pushed into the queue.

The while loop begins and continues until the queue is `empty`. Inside the loop, the front element of the queue is accessed using `q.front()` and assigned to the `front` pointer.

The front node's data is printed using `cout << front->data << ", "`. This prints the data value of the current node.

If the front node has a left child  `front->left is not NULL` , it is pushed into the queue using `q.push(front->left)`. This ensures that the left child will be processed in the subsequent iterations.

Similarly, if the front node has a right child `front->right is not NULL`, it is also pushed into the queue using `q.push(front->right)`.

Once the loop completes, the breadth-first traversal of the binary tree is finished. The nodes are printed in the order they were visited, following a level-by-level approach.

The output of this code, for the given binary tree, would be: `5`, `10`, `15`, `18`, `30`, `26`. This represents the nodes visited during the breadth-first traversal of the binary tree.

## DFS 

**Code :**

```cpp showLineNumbers="true"
#include<iostream>
#include<stack>

using namespace std; 

class Node
{
public:
    int data;
    Node *left;
    Node *right;
    
    Node(int data)
    {
        this->data = data;
        left = NULL;
        right = NULL;
    }
};

int main()
{
    Node *root = new Node(5);
    Node *a = new Node(10);
    Node *b = new Node(15);
    Node *c = new Node(18);
    Node *d = new Node(30);
    Node *e = new Node(26);
    
    root->left = a;
    root->right = b;
    
    a->left = c;
    a->right = d;
    
    b->left = e;
    
    stack<Node *> s;
    s.push(root);
    
    while (!s.empty())
    {
        Node *top = s.top();
        s.pop();
        
        cout << top->data << ", ";
        
        if (top->right != NULL)
        {
            s.push(top->right);
        }
        
        if (top->left != NULL)
        {
            s.push(top->left);
        }
    }
    
    return 0;
}
```

**Output :**

5, 10, 18, 30, 15, 26,

In the above code Line 6 to 19, This section defines a class `Node`, which represents a node in a binary tree. It has three members: `data` (to store the value of the node), `left` (to point to the left child node), and `right` (to point to the right child node). The constructor `Node(int data)` initializes the node with the given data and sets the left and right pointers to `NULL`.

Line 21 to 36, In the `main` function, you create instances of the `Node` class and construct a binary tree. The `root` node has a value of `5`. `a` is its left child with a value of `10`, and `b` is its right child with a value of `15`. `c` is the left child of `a` with a value of `18`, and `d` is the right child of `a` with a value of `30`. `e` is the left child of `b` with a value of 26.

Line 38 to 58, This part of the code performs a pre-order traversal of the binary tree using a stack. We create an empty stack `s` and push the `root` node onto it.

The while loop continues until the stack becomes empty. In each iteration, we retrieve the top node from the stack using `s.top()`, store it in the `top` pointer, and then remove it from the stack using `s.pop()`.

We print the value of the `top` node using `cout << top->data << ", "`. This line will print the data of the current node followed by a comma and a space.

Next, we check if the `top` node has a right child. If it does, we push the right child onto the stack using `s.push(top->right)`. This ensures that right child nodes are processed after left child nodes.

Similarly, we check if the `top` node has a left child. If it does, we push the left child onto the stack using `s.push(top->left)`.

The loop continues until all the nodes have been processed and the stack becomes empty.