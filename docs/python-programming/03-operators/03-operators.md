---
title: Operator
description: "Operators"
hide_table_of_contents: true
---

# Arithmetic Operators

1. Addition Operator (+)

```python title="addition.py" showLineNumbers="true"
a=10
b=20
c=a+b
print(c)
```

**Output**

> 30

2. Subtraction Operator (-)

```python title="subtraction.py" showLineNumbers="true"
a=20
b=10
c=a-b
print(c)
```

**Output**

> 10

3. Multiplication Operator (\*)

```python title="multplication.py" showLineNumbers="true"
a=10
b=20
c=a*b
print(c)
```

**Output**

> 200

4. Division Operator (/)

```python title="division.py" showLineNumbers="true"
a=20
b=10
c=a/b
print(c)
```

**Output**

> 2.0

5. Modulus Operator (%)

```python title="modulus.py" showLineNumbers="true"
a=20
b=3
c=a%b
print(c)
```

**Output**

> 2

6. Exponentiation Operator (\*\*)

```python title="modulus.py" showLineNumbers="true"
base = 2
power = 3
result = base ** power
print(result)
```

**Output**

> 8

7. Floor Operator (//)

```python title="modulus.py" showLineNumbers="true"
a = 20
b = 10
result = a // b
print(result)
```

**Output**

> 2

# Comparision Operators

Comparison operators are used to compare two values and return output in boolean value.<br/>
Comparision operator have 6 types : 
1. Equal Operator
2. Less than Operator
3. Greater than Operator
4. Less than or equal to Operator
5. Greater than or equal to Operator
6.  Not equal Operator


 1. Equal  (==)
```python title="equal.py" showLineNumbers="true"
a = 10 
b = 10
result = a == b
print(result)
```

**Output**
>True

In the above code assigns the integer value of 10 to the variable `a` and the integer value of 10 to the variable `b`.

The next line of code compares `a` and `b` using the `==` operator, which means "equal to."

Since `a` is 10 and `b` is 10 so, `a` is equal to `b` Therefore, the comparison a `==` b evaluates to True.

Finally, the result of the comparison is assigned to the variable result.

The last line of code prints the value of result, which in this case is True.

1. Less than  (<)

```python title="less than.py" showLineNumbers="true"
a = 10 
b = 20
result = a < b
print(result)
```

**Output**
>True

In the above code assigns the integer value of 10 to the variable `a` and the integer value of 20 to the variable `b`.

The next line of code compares `a` and `b` using the `<` operator, which means "less than."

Since `a` is 10 and `b` is 20 so, `a` is less than `b` Therefore, the comparison a `<` b evaluates to True.

Finally, the result of the comparison is assigned to the variable result.

The last line of code prints the value of result, which in this case is True.

3. Greater than  (>)

```python title="greater than.py" showLineNumbers="true"
a = 30 
b = 10
result = a > b
print(result)
```

**Output**
>True

In the above code assigns the integer value of 30 to the variable `a` and the integer value of 10 to the variable `b`.

The next line of code compares `a` and `b` using the `>` operator, which means "greater than."

Since `a` is 30 and `b` is 10 so, `a` is greater than `b` Therefore, the comparison a `>` b evaluates to True.

Finally, the result of the comparison is assigned to the variable result.

The last line of code prints the value of result, which in this case is True.


4. Less than or equal to  (<=)

```python title="less than or equal to.py" showLineNumbers="true"
a = 20
b = 20
result = a <= b
print(result)
```

**Output**
>True

In the above code assigns the integer value of 20 to the variable `a` and the integer value of 20 to the variable `b`.

The next line of code compares `a` and `b` using the `<=` operator, which means "less than or equal to."

Since `a` is 20 and `b` is 20 so, `a` is equal to `b` Therefore, the comparison a `<=` b evaluates to True.

Finally, the result of the comparison is assigned to the variable result.

The last line of code prints the value of result, which in this case is True.


5. Greater than or equal to  (>=)

```python title="greater than or equal to.py" showLineNumbers="true"
a = 30
b = 20
result = a >= b
print(result)
```

**Output**
>True

In the above code assigns the integer value of 30 to the variable `a` and the integer value of 20 to the variable `b`.

The next line of code compares `a` and `b` using the `>=` operator, which means "greater than or equal to."

Since `a` is 30 and `b` is 20,so `a` is greater than `b` Therefore, the comparison a `>=` b evaluates to True.

Finally, the result of the comparison is assigned to the variable result.

The last line of code prints the value of result, which in this case is True.

6.  Not equal  (!=)

```python title="not equal.py" showLineNumbers="true"
a = 50 
b = 100
result = a != b
print(result)
```

**Output**
>True 

In the above code assigns the integer value of 50 to the variable `a` and the integer value of 100 to the variable `b`.

The next line of code compares `a` and `b` using the `!=` operator, which means "not equal to."

Since `a` is 50 and `b` is 100 so, `a` is not equal to `b` Therefore, the comparison a `!=` b evaluates to True.

Finally, the result of the comparison is assigned to the variable result.

The last line of code prints the value of result, which in this case is True.

## Logical Operator

Logical operators are used to combine conditional statements.

1. AND operator (and)

 The `and` operator returns `True` only if both of its conditions are True. Otherwise, it returns   `False`.

**Code :**

```py title="logical-opertor.py" showLineNumbers="true"
hsc=50
jee=120
result= hsc>60 and jee>130
print(result)
```
**Output:**

>False 

In the above program is to create two variables `hsc` and `jee`, assigning them the values of `50` and `130`, respectively.

Then it creates a new variable called `result` which uses the and logical operator to check if both `hsc is greater than 60` `AND` `jee is greater than 120`. The and operator returns `True` if both conditions are `true`, and `False` otherwise.

So, the output of this code will be `False` since `hsc is not greater than 60`.

**Code :**

```py title="logical-opertor.py" showLineNumbers="true"
hsc=70
jee=130
result= hsc>60 and jee>130
print(result)
```
**Output:**

>True

In the above program is to create two variables `hsc` and `jee`, assigning them the values of `70` and `130`, respectively.

Then it creates a new variable called `result` which uses the and logical operator to check if both `hsc is greater than 60` `AND` `jee is greater than 120`. The and operator returns `True` if both conditions are `true`, and `False` otherwise.

So, the output of this code will be `true` because both condition are true.

2. OR operator (or)

 The `or` operator returns `True` if at least one of its operands is `True`. If both operands are `False`, it returns `False`.

**Code :**

```py title="logical-opertor.py" showLineNumbers="true"
neet=80
aiims=130
result=neet>520 or aiims>220
print(result)
```
**Output:**

>false

In the above program variable `neet` equal to `80`, sets the variable `aiims` equal to `130`, checks whether `neet is greater than 520` `or` `aiims is greater than 220`, and assigns the result to the variable `result`.

The `or` operator evaluates to True if at least one of the expressions it connects is True. Since neither `neet > 520` nor `aiims > 220` is True, the overall result of the expression `neet > 520 or aiims > 220` is False.

Therefore, the code will output `False`.

**Code :**

```py title="logical-opertor.py" showLineNumbers="true"
neet=530
aiims=230
result=neet>520 or aiims>220
print(result)
```
**Output:**

>true

In the above program variable `neet` equal to `530`, sets the variable `aiims` equal to `230`, checks whether `neet is greater than 520` `or` `aiims is greater than 220`, and assigns the result to the variable `result`.

The `or` operator evaluates to True if at least one of the expressions it connects is True. Since neither `neet > 520` nor `aiims > 220` is True so both condition are true. 

Therefore, the code will output `true`.


