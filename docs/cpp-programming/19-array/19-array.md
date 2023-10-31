---
title: array
description: "array"
hide_table_of_contents: true
---

# Array

- An array is a variable that can store multiple values in single variable.
- Array is a collection of homogeneous data .
- homogeneous means similar type
- array of index is always start from 0.

```cpp
syntax :
  datatype arrayname[size];
  int number[5];
```

int marks[5] = {10,20,30,40,50};<br/>
index = 0

**Example 1️⃣:**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main() {

        int marks[5]={10, 20, 30, 40, 50};

        cout<<marks[0]<<endl;
        cout<<marks[1]<<endl;
        cout<<marks[2]<<endl;
        cout<<marks[3]<<endl;
        cout<<marks[4]<<endl;
        return 0;
    }
```

**Output :**

> 10<br/>
> 20<br/>
> 30<br/>
> 40<br/>
> 50<br/>

**Explanation :**

In a `Line no 5` we declare and initialize array that name is `marks` and size of array is `[5]` and store value in array is `{10, 20, 30, 40, 50}`
and datatype of array is `int`. we use semicolon `;` for terminate array. <br/>
In a `Line no 7` `marks[0]` we print array using index and index is start from 0 `marks` is array variable and index of `10` is 0 `endl` use to end of line and start from new line. <br/>
In a `Line no 8` `marks[1]` index of `20` is `1` .<br/>
In a `Line no 9` `marks[2]` index of `30` is `2` .<br/>
In a `Line no 10` `marks[3]` index of `40` is `3` .<br/>
In a `Line no 11` `marks[4]` index of `50` is `4` .<br/>

**Example 2️⃣:**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main() {
        int marks[5]={10, 20, 30, 40, 50, 60};

        cout<<marks[0]<<endl;
        cout<<marks[1]<<endl;
        cout<<marks[2]<<endl;
        cout<<marks[3]<<endl;
        cout<<marks[4]<<endl;
        return 0;
    }
```

**Output :**

> ERROR <br/>
> g++ /tmp/zIOh6NZyDx.cpp <br/>
> tmp/zIOh6NZyDx.cpp: In function 'int main()':<br/>
> tmp/zIOh6NZyDx.cpp:6:37:error: too many initializers for 'int[5]' <br/>
> 6 | int marks[5] = {10,20,30,40,50,60};<br/>

**Explanation :**

In this example we see this error because of size of array is 5 and we store the 6 value in array variable.<br/>
In `line no 6` int marks[5] = {10,20,30,40,50,60};<br/>
this error are occour

**Example 3️⃣:**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main() {
        int marks[5]={10, 20, 30, 40, 50,};

        cout<<marks[0]<<endl;
        cout<<marks[1]<<endl;
        cout<<marks[2]<<endl;
        cout<<marks[3]<<endl;
        cout<<marks[4]<<endl;
        cout<<marks[5]<<endl;
        return 0;
    }
```

**Output :**

> 10<br/>
> 20<br/>
> 30<br/>
> 40<br/>
> 50<br/>
> 32766

**Explanation :**

In a `Line no 5` we declare and initialize array that name is `marks` and size of array is `[5]` and store value in array is `{10, 20, 30, 40, 50}`
and datatype of array is `int`. we use semicolon `;` for terminate array. <br/>
In `line no 11` we print `marks[5]` but we can not store value in array varible for index 5. <br/>
compiler print the number `32766` it is address of index 5.<br/>

**Example 4️⃣:**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main() {

        int marks[6]={10, 20, 30, 40, 50, 60};

        cout<<marks[0]<<endl;
        cout<<marks[1]<<endl;
        cout<<marks[2]<<endl;
        cout<<marks[3]<<endl;
        cout<<marks[4]<<endl;
        cout<<marks[5]<<endl;
        return 0;
    }
```

**Output :**

> 10<br/>
> 20<br/>
> 30<br/>
> 40<br/>
> 50<br/>
> 60<br/>

**Explanation :**

In a `Line no 5` we declare and initialize array that name is `marks` and size of array is `[6]` and store value in array is `{10, 20, 30, 40, 50, 60}`
and datatype of array is `int`. we use semicolon `;` for terminate array. <br/>
In a `Line no 7` `marks[0]` we print array using index and index is start from 0 `marks` is array variable and index of `10` is 0 `endl` use to end of line and start from new line. <br/>
In a `Line no 8` `marks[1]` index of `20` is `1` .<br/>
In a `Line no 9` `marks[2]` index of `30` is `2` .<br/>
In a `Line no 10` `marks[3]` index of `40` is `3` .<br/>
In a `Line no 11` `marks[4]` index of `50` is `4` .<br/>
In a `Line no 12` `marks[5]` index of `60` is `5` .<br/>

**Example 5️⃣:**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main() {
        int marks[]={10, 20, 30, 40, 50, 60, 70 ,80};

        cout<<marks[0]<<endl;
        cout<<marks[1]<<endl;
        cout<<marks[2]<<endl;
        cout<<marks[3]<<endl;
        cout<<marks[4]<<endl;
        return 0;
    }
```

**Output :**

> 10<br/>
> 20<br/>
> 30<br/>
> 40<br/>
> 50<br/>

**Explanation :**

In a `line no 5` we declare array that name is `marks` datatype of array is `int` we can not mention size of array, and store multiple value
{10, 20, 30, 40, 50, 60, 70 ,80}; <br/>
And print arrayname nad index `marks[0]` `endl` for end of line and start from new line.<br/>
