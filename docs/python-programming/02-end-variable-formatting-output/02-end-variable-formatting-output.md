---
title: End Variable, Formatting output
description: "End Variable, Formatting output"
hide_table_of_contents: true
---

### End Variable In Python

In Python, the `end` parameter is used with the `print()` function to specify what character(s) should be printed at the end of the output. By default, the `end` value is set to `\n`, which represents a newline character, causing the next output to appear on a new line.

**Here's an example:**

```python showLineNumbers="true"
print("Good Evening", end="\n")
print("Hello Everyone")
```

**Output**

> Good Evening <br/>
> Hello Everyone

In the above example, the first line prints `Good Evening` with the `end` value set to `\n`, which produces a newline. The second line then prints `Hello Everyone` on a new line.

You can change the `end` value to any character or string you want. For instance:

```python showLineNumbers="true"
print("Good Evening" , end=" ")
print("Hello Everyone")
```

**Output**

> Good Evening
> Hello Everyone

In this example, we set the `end` value to a space character `" "`, which results in both strings being printed on the same line with a space between them.

## The format() Function in Python

The `format()` function in Python is used to format strings by replacing placeholders with corresponding values. Placeholders are represented by curly braces `{}` within the string, and the `format()` function replaces them with the provided values.

**Here's an example:**

```python showLineNumbers="true"
x="Sakshi"
y=21
dob= "07/10/2001"
print("Hello {} .Your Age is {} .Your DOB is {}". format(x,y,dob))
```

**Output**

> Hello Sakshi. Your Age is 21. Your DOB is 07/10/2001.

In this example, we have three variables: `x`, `y`, and `dob`, containing the values `Sakshi`, `21`, and `07/10/2001`, respectively. The `format()` function is used to inject these values into the string. The `{}` placeholders are replaced with the corresponding values in the order they appear in the `format()` function..

If you change the order of the variables in the `format()` function, the output will reflect that change:

```python showLineNumbers="true"
x="Sakshi"
y=21
dob= "07/10/2001"
print("Hello {} .Your Age is {} .Your DOB is {}". format(y,dob,x))
```

**Output**

> Hello 21. Your Age is 07/10/2001. Your DOB is Sakshi .

In this example, the variable sequence in the `format()` function is changed, resulting in the values being printed in a different order.

To avoid confusion when the variable sequence is changed, you can assign names to the placeholders and use those names in the `format()` function:

```python showLineNumbers="true"
x="Sakshi"
y=21
dob= "07/10/2001"
print("Hello {place1} .Your Age is {place2} .Your DOB is {place3}". format(place3=dob,place2=y,place1=x))
```

**Output**

> Hello Sakshi. Your Age is 21. Your DOB is 07/10/2001.

In this example, we assign names to the placeholders `place1`, `place2`, `place3` and explicitly specify which value should be placed in each position using keyword arguments in the `format()` function. This way, the output remains consistent even if the variable sequence is changed.