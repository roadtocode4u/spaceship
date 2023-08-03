---
title: Math Functions
description: "Math Functions"
hide_table_of_contents: true
---

The `Math` function provides built-in functions for performing various mathematical operations, such as ceiling, floor, absolute, square roots, powers, rounding, min, max, and more.

There are Math Function in JS :

- Math.ceil(x)
- Math.floor(x)
- Math.round(x)
- Math.pow(x,y)
- Math.abs(x)
- Math.min(x)
- Math.max(x)
- Math.sqrt(x)

1. **`Math.ceil(x)`** : It returns the smallest integer greater than or equal to `x`.

**Syntax :**

```
Math.ceil(x);
```

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ceil Function</title>
  </head>
  <body>
    <script>
      const value = Math.ceil(3.2);
      console.log("Ceiling value = " + value);
    </script>
  </body>
</html>
```

**Output :**

> Ceiling value = 4

**Example Explanation :**

In the above example, `Math.ceil(3.2)` is used to calculate the ceiling value of the number `3.2`. The `Math.ceil()` function rounds up a number to the nearest greater or equal to integer value. In this example, `3.2` is closer to `4` than `3`, the output will be `4`.

2. **`Math.floor(x)`** : It returns the largest integer less than or equal to `x`.

**Syntax :**

```
Math.floor(x);
```

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Floor Function</title>
  </head>
  <body>
    <script>
      const value = Math.floor(3.2);
      console.log("Floor value = " + value);
    </script>
  </body>
</html>
```

**Output :**

> Floor value = 3

**Example Explanation :**

In the above example, `Math.floor(3.2)` is used to calculate the floor value of the number `3.2`. The `Math.floor()` function rounds down a number to the nearest less or equal integer value. In this example, `3.2` is closer to `3` than `4`, the out will be `3`.

3. **`Math.round(x)`** : It returns the value of `x` rounded to the nearest integer value.

- If the decimal part of the number is less than `0.5`, it rounds down to the nearest integer value.
- If the decimal part is equal to or greater than `0.5`, it rounds up to the nearest integer value.

**Syntax :**

```
Math.round(x)
```

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Round Function</title>
  </head>
  <body>
    <script>
      const val1 = Math.round(3.2);
      console.log("Round value = " + val1);

      const val2 = Math.round(3.6);
      console.log("Round value = " + val2);
    </script>
  </body>
</html>
```

**Output :**

> Round value = 3<br/>
> Round value = 4

**Example Explanation :**

In the above example, `Math.round()` function is used to round the numbers `3.2` and `3.6` to their nearest integers value. The variable `val1` returns rounding down value is `3`, and the variable `val2` return rounding up value is `4`.

3. **`Math.pow(x,y)`** : It returns the value of `x` raised to the power of `y`.

**Syntax :**

```
Math.pow(x,y)
```

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Pow Function</title>
  </head>
  <body>
    <script>
      const value = Math.pow(2, 2);
      console.log("Power of value = " + value);
    </script>
  </body>
</html>
```

**Output :**

> Power of value = 4

**Example Explanation :**

In the above example, `Math.pow(2, 2)` is used to calculate the value of `2` raised to the power of `2`. This function takes two arguments, the base is `2` and the exponent `2`.
In this example, `Math.pow(2, 2)` calculates `2` raised to the power of `2`, which is `2 * 2 = 4`.

4. **`Math.abs(x)`** : This function always returns the `positive` (+ve) value of `x`.

**Syntax :**

```
Math.abs(x)
```

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Abs Function</title>
  </head>
  <body>
    <script>
      const val1 = Math.abs(3.2);
      console.log("Absolute value = " + val1);

      const val2 = Math.abs(-3.2);
      console.log("Absolute value = " + val2);
    </script>
  </body>
</html>
```

**Output :**

> Absolute value = 3.2<br/>
> Absolute value = 3.2

In the above example, `Math.abs()` is used to find the absolute value of `-3.2`, which returns in variable `val2` is `3.2`. The `Math.abs()` function returns `-ve` numbers to `+ve` numbers and never changed `+ve` numbers.

5. **`Math.min(x)`** : It returns the `minimum` value from the given arguments.

**Syntax :**

```
Math.min(x)
```

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Min Fun</title>
  </head>
  <body>
    <script>
      const value = Math.min(10, 5, 20);
      console.log("Minimum value = " + value);
    </script>
  </body>
</html>
```

**Output :**

> Min value = 1

**Example Explanation :**

In the above example, `Math.min(10, 5, 20)` is used to find the minimum value from the given values `(10, 5, 20)`. The `Math.min()` function finds the smallest value from the given numbers and the output is `5`.

6. **`Math.max(x)`** : It returns the `maximum` value from the given arguments.

**Syntax :**

```
Math.max()
```

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Max Function</title>
  </head>
  <body>
    <script>
      const value = Math.max(10, 5, 20);
      console.log("Maximum value = " + value);
    </script>
  </body>
</html>
```

**Output :**

> Maximum value = 20

**Example Explanation :**

In the above example, `Math.min(10, 5, 20)` is used to find the maximum value from the given values `(10, 5, 20)`. The `Math.max()` function finds the largest value from the given numbers and the output is `20`.

7. **`Math.sqrt(x)`** : It returns the square root of `x`.

**Syntax :**

```
Math.sqrt(x)
```

**Example :**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Square Root Function</title>
  </head>
  <body>
    <script>
      const value = Math.sqrt(81);
      console.log("Square Root = " + value);
    </script>
  </body>
</html>
```

**Output :**

> Square Root = 9

**Example Explanation :**

In the above example, `Math.sqrt(81)` is used to calculate the square root of the given agrument.
