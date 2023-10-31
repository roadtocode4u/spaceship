---
title: comments-in-c++
description: "comments-in-c++"
hide_table_of_contents: true
---

## endl

`endl` is stand for **end of line**. <br/>
It is used to end the line and start from new line.<br/>

**Example :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

   cout<<"Good Evening"<<endl;
   cout<<"Hello Students";
   return 0;

}
```

**Output :**

> Good Evening<br/>
> Hello Students

**Explanation :**

In a `Line no 6 ` print message of `Good Evening` using `cout`, and use `endl` for end of line .<br/>
In a `Line no 7 ` print message of `Hello Students` using `cout`.

# Comments in C++

```
* compiler ---> ignore

* programmer ---> redability
```

**Two Types of Comments :**

1. single line comments <br/>
   ` // This is sample program` <br/>
   • Single-line comments start with two forward slashes`(//)`. <br/>
   • Any text between `(//)` and the end of the line is ignored by the compiler.

2. multiple line comments <br/>
   ` /* ------- */`<br/>
   • Multi-line comments start with `/*` and ends with `*/`. <br/>
   • Any text between `(/*)` and `(*/)` will be ignored by the compiler.

**1. Single Line Comment :**

**Example :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

   // This is sample program
   cout<<"Good Evening"<<endl;
   cout<<"Hello Students";
   return 0;

}
```

**Output :**

> Good Evening<br/>
> Hello Students

**Explanation :**

In a `Line no 6 ` we add comment and this comment ignored by the compiler.<br/>
In a `Line no 7 ` print message of `Good Evening` using `cout`, and use `endl` for end of line .<br/>
In a `Line no 8 ` print message of `Hello Students` using `cout`.

**2. Multiple Line Comment :**

**Example :**

```cpp showLineNumbers = "true"
#include <iostream>
using namespace std;

int main() {

   /*
    This is sample program
    in this program we print two message
    1. good evening
    2. hello students
    */
   cout<<"Good Evening"<<endl;
   cout<<"Hello Students";
   return 0;

}
```

**Output :**

> Good Evening<br/>
> Hello Students

**Explanation :**

In a `Line no 6 ` we add multiline comment `/*` this all text are ignored by complier up to `line no 11` `*/`<br/>
In a `Line no 12 ` print message of `Good Evening` using `cout`, and use `endl` for end of line .<br/>
In a `Line no 13 ` print message of `Hello Students` using `cout`.
