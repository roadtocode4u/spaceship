## User Input & Type Casting in Python

### User Input

Python allows for user input. That means we are able to ask the user for input. input()= To take input from user.

For Example :

```python showLineNumbers="true"
name=input("Enetr Yourname :")
print(name)
```

**Output**

> Enter Yourname : Sakshi <br/>
> Sakshi

In above example, we are taking input from user with the help of `input` function and assign to the variable `name` and print `name` using `print()` function. That `name` value is Sakshi.

Formatting Output

```python showLineNumbers="true"
name=input("Enetr Yourname :")
print("Good Evening {}".format(name))
```

**Output**

> Enter Yourname : Sakshi <br/>
> Good Evening Sakshi .

In the above example, we are taking input from the user with the help of the `input` function and assign to the variable `name` and print a message `Good Evening` `{}`, this `{}` means `format()` function. We are assign `name` variable in `format()` function. So output is Good Evening Sakshi.

### Type Casting

Type Casting is the method to convert the variable data type into a certain data type in order to the operation required to be performed by users.

For Example :

```python showLineNumbers="true"
val1=int(input("Enter val1:"))
val2=int(input("Enter val2:"))
sum=val1+val2
print(sum)
```

**Output**

> Enter val1: 14 <br/>
> Enter val2: 10 <br/>
> 24

In the above example, In 1st line, we are taking input from the user with the help of the `input` function and type casting this input into the `int` data type and assign to the variable `val1`. In the 2nd line, we typecast the input into the `int` data type and assign it to the variable `val2`. <br/>
In the 3rd line, we are adding both the variables `val1` and `val2` and assign them to the variable `sum`. In the 4th line we print the variable `sum`.

```python showLineNumbers="true"
val1=(input("Enter val1:"))
val2=(input("Enter val2:"))
sum=int(val1) + int(val2)
print(sum)
```

**Output**

> Enter val1: 12 <br/>
> Enter val2: 5 <br/>
> 17

In the above example, we are taking two inputs from the user with the help of the `input` function and assigning them to the variable `val1` and `val2` respectively. After that, we are adding both the variables `val1` and `val2` by typecasting them into the `int` data type and assigning it to the variable `sum`.
Now we print the variable `sum`.

Formatting Output

```python showLineNumbers="true"
val1=(input("Enter val1:"))
val2=(input("Enter val2:"))
sum=int(val1) + int(val2)
print("sum of {} and {} is {}".format(val1,val2,sum))
```

**Output**

> Enter val1: 5 <br/>
> Enter val2: 15 <br/>
> sum of 5 and 15 is 20 .

In the above example, we are taking two inputs from the user with the help of the `input` function and assigning them to the variable `val1` and `val2` respectively. After that, we are adding both the variables `val1` and `val2` by typecasting them into the `int` data type and assigning it to the variable `sum`.
Now we print sum of `{}` and `{}` is `{}` . That `{}` means `format()` function.
