# JavaScript Loops and Conditions Explanation

This document explains the different types of loops and conditional statements in JavaScript. These structures help control the flow of code execution, allowing you to repeat tasks or make decisions based on conditions.

---

## 1. Conditional Statements

Conditional statements in JavaScript help make decisions based on certain conditions. If the condition is true, a block of code is executed; otherwise, another block may be executed.

### 1.1. `if`, `else if`, `else`

- **Description**: Executes code based on whether the condition evaluates to `true` or `false`.
- **Syntax**:

    ```js
    if (condition) {
        // code to execute if condition is true
    } else if (anotherCondition) {
        // code to execute if anotherCondition is true
    } else {
        // code to execute if all conditions are false
    }
    ```

- **Example**:

    ```js
    let age = 18;
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are not an adult.");
    }
    ```

---

### 1.2. `switch` Statement

- **Description**: A `switch` statement is used to perform different actions based on different conditions. It's an alternative to multiple `if-else` statements.
- **Syntax**:

    ```js
    switch (expression) {
        case value1:
            // code to execute if expression === value1
            break;
        case value2:
            // code to execute if expression === value2
            break;
        default:
            // code to execute if no case matches
    }
    ```

- **Example**:

    ```js
    let day = 3;
    switch (day) {
        case 1:
            console.log("It's Monday.");
            break;
        case 2:
            console.log("It's Tuesday.");
            break;
        case 3:
            console.log("It's Wednesday.");
            break;
        default:
            console.log("It's another day.");
    }
    ```

---

## 2. Loops

Loops are used to execute a block of code repeatedly as long as a specified condition is true.

### 2.1. `for` Loop

- **Description**: The `for` loop is the most commonly used loop. It repeats code a specified number of times.
- **Syntax**:

    ```js
    for (initialization; condition; increment/decrement) {
        // code to execute
    }
    ```

- **Example**:

    ```js
    for (let i = 1; i <= 5; i++) {
        console.log("Iteration " + i);
    }
    ```

---

### 2.2. `while` Loop

- **Description**: The `while` loop repeats code as long as the condition remains `true`.
- **Syntax**:

    ```js
    while (condition) {
        // code to execute
    }
    ```

- **Example**:

    ```js
    let i = 1;
    while (i <= 3) {
        console.log("While loop iteration " + i);
        i++;
    }
    ```

---

### 2.3. `do-while` Loop

- **Description**: The `do-while` loop is similar to the `while` loop, but it guarantees that the code block will be executed at least once, even if the condition is `false` from the start.
- **Syntax**:

    ```js
    do {
        // code to execute
    } while (condition);
    ```

- **Example**:

    ```js
    let i = 1;
    do {
        console.log("Do-While loop iteration " + i);
        i++;
    } while (i <= 2);
    ```

---

### 2.4. `for...in` Loop

- **Description**: The `for...in` loop is used to iterate over the properties of an object.
- **Syntax**:

    ```js
    for (key in object) {
        // code to execute
    }
    ```

- **Example**:

    ```js
    let person = { name: "John", age: 30 };
    for (let key in person) {
        console.log(key + ": " + person[key]);
    }
    ```

---

### 2.5. `for...of` Loop

- **Description**: The `for...of` loop is used to iterate over the values of an iterable (like an array or string).
- **Syntax**:

    ```js
    for (value of iterable) {
        // code to execute
    }
    ```

- **Example**:

    ```js
    let array = [10, 20, 30];
    for (let value of array) {
        console.log(value);
    }
    ```

---

## 3. Loop Control Statements

JavaScript also provides some special control statements to modify the flow of loops:

### 3.1. `break`

- **Description**: Exits the loop immediately, regardless of the condition.
- **Example**:

    ```js
    for (let i = 1; i <= 5; i++) {
        if (i === 3) break;
        console.log("Iteration " + i);  // Only logs 1 and 2
    }
    ```

---

### 3.2. `continue`

- **Description**: Skips the current iteration of the loop and moves to the next one.
- **Example**:

    ```js
    for (let i = 1; i <= 5; i++) {
        if (i === 3) continue;
        console.log("Iteration " + i);  // Logs 1, 2, 4, 5 (skips 3)
    }
    ```

---
