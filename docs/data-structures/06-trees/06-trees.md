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

