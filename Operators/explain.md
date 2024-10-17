# JavaScript Operators Explanation

This document explains the various types of operators in JavaScript with examples.

## 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical operations on numbers.

| Operator | Description                    | Example      |
|----------|--------------------------------|--------------|
| `+`      | Addition                       | `a + b`      |
| `-`      | Subtraction                    | `a - b`      |
| `*`      | Multiplication                 | `a * b`      |
| `/`      | Division                       | `a / b`      |
| `%`      | Modulus (Remainder)            | `a % b`      |
| `++`     | Increment                      | `a++` (or `++a`) |
| `--`     | Decrement                      | `a--` (or `--a`) |

**Example**:  
For `a = 10` and `b = 5`:  

- `a + b` results in `15`  
- `a - b` results in `5`  
- `a * b` results in `50`  
- `a / b` results in `2`  
- `a % b` results in `0`

---

## 2. Assignment Operators

Assignment operators assign values to variables.

| Operator | Description                      | Example      |
|----------|----------------------------------|--------------|
| `=`      | Assigns a value                  | `a = 10`     |
| `+=`     | Adds and assigns                 | `a += 5`     |
| `-=`     | Subtracts and assigns            | `a -= 5`     |
| `*=`     | Multiplies and assigns           | `a *= 5`     |
| `/=`     | Divides and assigns              | `a /= 5`     |
| `%=`     | Modulus and assigns              | `a %= 5`     |

**Example**:  
For `a = 10`:  

- `a += 5` results in `a = 15`  
- `a -= 5` results in `a = 5`

---

## 3. Comparison Operators

Comparison operators are used to compare two values. They return a Boolean value (`true` or `false`).

| Operator | Description                      | Example      |
|----------|----------------------------------|--------------|
| `==`     | Equal to                        | `a == b`     |
| `===`    | Strict equal (type + value)      | `a === b`    |
| `!=`     | Not equal                       | `a != b`     |
| `!==`    | Strict not equal (type + value)  | `a !== b`    |
| `>`      | Greater than                    | `a > b`      |
| `<`      | Less than                       | `a < b`      |
| `>=`     | Greater than or equal to        | `a >= b`     |
| `<=`     | Less than or equal to           | `a <= b`     |

**Example**:  
For `a = 10` and `b = 5`:  

- `a == b` results in `false`  
- `a > b` results in `true`  

---

## 4. Logical Operators

Logical operators are used to combine or invert Boolean expressions.

| Operator | Description                      | Example                   |
|----------|----------------------------------|---------------------------|
| `&&`     | Logical AND                      | `(a > 5 && b < 10)`       |
| `||`     | Logical OR                       | `(a > 5 || b > 10)`       |
| `!`      | Logical NOT                      | `!(a < 5)`                |

**Example**:  
For `a = 10` and `b = 5`:  

- `(a > 5 && b < 10)` results in `true`  
- `(a > 5 || b > 10)` results in `true`  
- `!(a < 5)` results in `true`

---

## 5. Bitwise Operators

Bitwise operators perform operations on binary representations of numbers.

| Operator | Description                      | Example      |
|----------|----------------------------------|--------------|
| `&`      | Bitwise AND                      | `a & b`      |
| `|`      | Bitwise OR                       | `a | b`      |
| `^`      | Bitwise XOR                      | `a ^ b`      |
| `~`      | Bitwise NOT                      | `~a`         |
| `<<`     | Left shift                       | `a << b`     |
| `>>`     | Right shift                      | `a >> b`     |
| `>>>`    | Zero-fill right shift            | `a >>> b`    |

---

## 6. Ternary Operator

The ternary operator is a shorthand for an `if-else` statement.

| Operator | Description                      | Example                     |
|----------|----------------------------------|-----------------------------|
| `? :`    | Conditional (ternary)            | `condition ? value1 : value2` |

**Example**:  
For `a = 10`:  

- `(a > 5 ? "Greater" : "Smaller")` results in `"Greater"`

---

## 7. Typeof Operator

The `typeof` operator returns the type of a variable or expression.

| Operator | Description                      | Example         |
|----------|----------------------------------|-----------------|
| `typeof` | Returns the type of a variable   | `typeof a`      |

**Example**:  
For `a = 10`:  

- `typeof a` results in `"number"`

---

## 8. Nullish Coalescing Operator (`??`)

The `??` operator returns the right-hand side operand when the left-hand side operand is `null` or `undefined`.

| Operator | Description                      | Example          |
|----------|----------------------------------|------------------|
| `??`     | Nullish Coalescing               | `a ?? b`         |

**Example**:  
For `a = null` and `b = 5`:

- `a ?? b` results in `5`

---

## 9. Spread Operator (`...`)

The spread operator allows you to expand an array or object into individual elements.

| Operator | Description                      | Example          |
|----------|----------------------------------|------------------|
| `...`    | Spread operator                  | `...array`       |

**Example**:  
For `arr = [1, 2, 3]`:  

- `console.log(...arr)` prints `1 2 3`

---

## 10. Optional Chaining Operator (`?.`)

The `?.` operator is used to safely access deeply nested properties of an object without causing an error if a property is `undefined` or `null`.

| Operator | Description                      | Example          |
|----------|----------------------------------|------------------|
| `?.`     | Optional chaining                | `obj?.prop`      |

**Example**:  
For `obj = { a: { b: 10 } }`:

- `obj?.a?.b` results in `10`

---