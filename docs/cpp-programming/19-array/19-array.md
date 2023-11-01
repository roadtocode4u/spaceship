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
And print array name and index `marks[0]` `endl` for end of line and start from new line.<br/>

**Without optimization code :**

**Example 6️⃣:**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main() {

        int marks[3];

        cout<<"Enter Number 0 :";
        cin>>marks[0];

        cout<<"Enter Number 0 :";
        cin>>marks[1];

        cout<<"Enter Number 0 :";
        cin>>marks[2];

        cout<<"Number 0 :"<<marks[0]<<endl;
        cout<<"Number 1 :"<<marks[1]<<endl;
        cout<<"Number 2 :"<<marks[2]<<endl;

        return 0;
    }
```

**Output :**

> Enter number 0 : 10<br/>
> Enter number 1 : 20<br/>
> Enter number 2 : 30<br/>
> Number 0 : 10<br/>
> Number 0 : 20<br/>
> Number 0 : 30<br/>

**Explanation :**

Declare an array variable that name is `marks` store multiple value `{5, 4, 1, 2, 7}`;<br/>
`Enter Number 0 :` using `cout` object.<br/>
store index of 0 number in using cin object.<br/>
same as line 10 and 13.<br/>
print `Number 0 :` and `marks[0]` using cout `endl` is used to terminate line. <br/>

**With optimization code :**

**Example 7️⃣:**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main() {

        int marks[3];

        for(int i=0; i<3; i++)
        {
            cout<<"Enter Number "<<i<<": "<<endl;
            cin>>marks[i];
        }
        for(int i=0; i<3; i++)
        {
            cout<<"Number "<<i<<": "<<marks[i]<<endl;
        }
    }
```

**Output :**

> Enter number 0 : 10<br/>
> Enter number 1 : 20<br/>
> Enter number 2 : 30<br/>
> Number 0 : 10<br/>
> Number 0 : 20<br/>
> Number 0 : 30<br/>

**Explanation :**

Declare an array variable that name is `marks` store multiple value `{5, 4, 1, 2, 7}`;<br/>
start a for loop from index 0 to the `i<3` and increase value by one. <br/>
print `Enter Number ` using cout and `i` variable `endl` for terminate line.<br/>
store variable of `marks[i]` using cin.<br/>
next start a for loop from index 0 to the `i<3` and increase value by one. <br/>
print `Number ` and variable `i` and `marks[i]` and endl.

**Example 8️⃣️ :**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main() {

        int marks[5];

        for(int i=0; i<5; i++)
        {
            cout<<"Enter Number "<<i<<": "<<endl;
            cin>>marks[i];
        }
        for(int i=0; i<5; i++)
        {
            cout<<"Number "<<i<<": "<<marks[i]<<endl;
        }
    }
```

**Output :**

> Enter number 0 : 10<br/>
> Enter number 1 : 20<br/>
> Enter number 2 : 30<br/>
> Enter number 3 : 40<br/>
> Enter number 4 : 50<br/>
> Number 0 : 10<br/>
> Number 1 : 20<br/>
> Number 2 : 30<br/>
> Number 3 : 40<br/>
> Number 4 : 50<br/>

**Write a program to calculate sum of elements presents in array :**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main()
    {
        int arr[5] = {5, 4, 1, 2, 7};

        int sum = 0;

        for(int i=0; i<5; i++)
        {
            sum = sum + arr[i];
        }
        cout<<"Sum :"<<sum;
    }

```

**Output :**

> Sum :19<br/>

**Explanination :**

initialize an array variable that name is `arr` store multiple value `{5, 4, 1, 2, 7}`;<br/>
initialize `sum` variable set value of `sum` variable is `0`<br/>
start a for loop from index 0 to the `i<5` and increase value by one. <br/>
In every iteration , perform `sum = sum + arr[i]`. <br/>
After the termination of the loop, print the value of `sum`.<br/>

**Wap to print only even number from given array :**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main()
    {
        int numbers[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        for(int i=0; i<10; i++)
        {
            if(numbers[i] % 2==0)
            {
                cout<<Number[i] <<" ,";
            }
        }

    }

```

**Output :**

> 2, 4, 6, 8, 10,

**Explanination :**

In a `line no 5` initialize an array variable that name is `arr` store multiple value `{5, 4, 1, 2, 7}`;<br/>
In a `line no 7` start a for loop from index 0 to the `i<5` and increase value by one. <br/>
In a `line no 9` check condition `if(numbers[i] % 2==0)` if condition is true print even naumber. <br/>

**Wap to print largest number from given array :**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main()
    {
        int numbers[5] = {10, 50, 50, 20, 30};

        int largest = 0;

        for(int i=0; i<5; i++)
        {
            if(number[i] > largest)
              {
                 largest = number[i];
              }
        }
        cout<<"Largest Elements is = "<<largest;
    }
```

**Output :**

> Largest Elements is = 80

**Explanination :**

In a `line no 5` initialize an array variable that name is `arr` store multiple value `{5, 4, 1, 2, 7}`;<br/>
In a `line no 7` initialize `largest` variable set value of `largest` variable is `0`<br/>
In a `line no 9` start a for loop from index 0 to the `i<5` and increase value by one. <br/>
In a `line no 11` check condition `if(numbers[i] > largest)` if condition is true store value `number[i]` in `largest` variable. <br/>
In a `line no 16` Print `Largest Elements is = ` and `largest` variable using `cout`. <br/>
