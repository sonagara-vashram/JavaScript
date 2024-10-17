# JavaScript Functions Explanation

Functions in JavaScript are reusable blocks of code designed to perform a specific task. Functions help to organize code, making it more readable and maintainable.

---

## 1. Function Declaration

- **Description**: This is the traditional way of defining a function using the `function` keyword. The function can be called before its declaration due to hoisting.
- **Syntax**:

    ```js
    function functionName(parameters) {
        // code to execute
    }
    ```

- **Example**:

    ```js
    function greet(name) {
        return "Hello, " + name + "!";
    }
    console.log(greet("John"));  // Output: Hello, John!
    ```

---

## 2. Function Expression

- **Description**: A function can also be defined as part of an expression. Function expressions are not hoisted, so they cannot be called before they are defined.
- **Syntax**:

    ```js
    const functionName = function(parameters) {
        // code to execute
    };
    ```

- **Example**:

    ```js
    const add = function(a, b) {
        return a + b;
    };
    console.log(add(5, 10));  // Output: 15
    ```

---

## 3. Immediately Invoked Function Expression (IIFE)

- **Description**: An IIFE is a function that is executed immediately after it is defined. It is often used to create a private scope.
- **Syntax**:

    ```js
    (function() {
        // code to execute
    })();
    ```

- **Example**:

    ```js
    (function() {
        console.log("This is an IIFE.");
    })();
    ```

---

## 4. Function with Default Parameters

- **Description**: Functions can have default parameter values. If no value is passed for that parameter, the default value is used.
- **Syntax**:

    ```js
    function functionName(parameter = defaultValue) {
        // code to execute
    }
    ```

- **Example**:

    ```js
    function greetUser(name = "Guest") {
        return "Welcome, " + name + "!";
    }
    console.log(greetUser());  // Output: Welcome, Guest!
    console.log(greetUser("Alice"));  // Output: Welcome, Alice!
    ```

---

## 5. Function Scope

- **Description**: Each function in JavaScript has its own scope. Variables declared inside a function cannot be accessed from outside.
- **Example**:

    ```js
    function exampleFunction() {
        let localVar = "I'm local";
        console.log(localVar);  // Output: I'm local
    }
    exampleFunction();
    // console.log(localVar);  // Error: localVar is not defined
    ```

---

## 6. Returning Values

- **Description**: Functions can return values to the caller using the `return` statement. If no `return` statement is specified, the function returns `undefined`.
- **Example**:

    ```js
    function square(num) {
        return num * num;
    }
    console.log(square(5));  // Output: 25
    ```

---
