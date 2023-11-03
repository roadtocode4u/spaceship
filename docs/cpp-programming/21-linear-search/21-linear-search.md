## search

There are two type of search :

1. linear search
2. binary search

## Linear Search

```cpp


 0   1   2   3   4  5   6   //index
[10][34][24][36][2][9][11]  //position
---------------->

<---------------

for --- i=0 to 4

arr[i] == key
```

**Example 1:**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main() {

       int arr[5] = 10,20,30,40,50;

       int key;
       cout<<"Enter key to search: ";
       cin>>key;

       for(int i=0; i<5; i++)
       {
        if(key==arr[i])
        {
            cout<<"key found at: "<<i<<endl;
        }
       }
        return 0;
    }

```

**Output :**

> Enter key to search: 30<br/>
> key found at: 2

**Explanation :**

In a `line no 5` declare array that name has `arr` and size of array is `5`;<br/>
`Enter 5 Elements in Array:` using `cout`.<br/>
In a `line no 7` declare variable that name has `key` and datatype is `int`.<br/>
print `Enter key to search:` using cout. <br/>
In a `line no 11` `for(int i=0; i<5; i++)` initialize `i` variable check condition `i<5` and increase value by one.<br/>
check if(key == arr[i]) condition key is equal to arr[i] this condition are true then `flag = i` and print `key found at:`and `i` variable.<br/>
check next condition `if(flag == -1)` then print `Element Not found` using `cout`.<br/>

**Example 2:**

```cpp showLineNumbers = "true"
    #include <iostream>
    using namespace std;
    int main() {

       int arr[5] = {10,20,30,40,50};

       int key;
       cout<<"Enter key to search: ";
       cin>>key;

       int flag = -1;

       for(int i=0; i<5; i++)
       {
        if(key==arr[i])
        {
            flag = i;
            cout<<"Key found at: "<<i<<endl;
            break;
        }
       }
       if(flag == -1)
       {
        cout<<"Element Not found";
       }

        return 0;
    }

```

**Output :**

> Enter key to search: 80<br/>
> Element Not found

**Explanation :**

In a `line no 5` declare array that name has `arr` and size of array is `5`;<br/>
`Enter 5 Elements in Array:` using `cout`.<br/>
In a `line no 7` declare variable that name has `key` and datatype is `int`.<br/>
print `Enter key to search:` using cout. <br/>
In a `line no 11` initialized temporary variable that name has `flag` store value `-1` and datatype is `int`.<br/>
In a `line no 13` `for(int i=0; i<5; i++)` initialize `i` variable check condition `i<5` and increase value by one.<br/>
check if(key == arr[i]) condition key is equal to arr[i] this condition are true then `flag = i` and print `key found at:`and `i` variable.<br/>
check next condition `if(flag == -1)` then print `Element Not found` using `cout`.<br/>
