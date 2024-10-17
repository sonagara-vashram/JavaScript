# JavaScript Data Types Explanation

This document explains the different data types available in JavaScript, divided into two categories: primitive and non-primitive (reference) types.

---

## 1. Primitive Data Types

Primitive data types are the most basic data types in JavaScript. They are immutable, which means their values cannot be changed once created.

### 1.1. String

- **Description**: Strings represent a sequence of characters. They can be written inside single or double quotes.
- **Example**:

    ```js
    let stringData = "Hello World";
    ```

- **Type**:  

    ```js
    typeof stringData; // "string"
    ```

---

### 1.2. Number

- **Description**: Numbers include both integer and floating-point values.
- **Example**:

    ```js
    let numberData = 42;
    ```

- **Type**:

    ```js
    typeof numberData; // "number"
    ```

**Note**: In JavaScript, there is only one type for numbers, which means integers and floating-point numbers are both of type `number`.

---

### 1.3. Boolean

- **Description**: Boolean represents a logical entity and can have two values: `true` or `false`.
- **Example**:

    ```js
    let booleanData = true;
    ```

- **Type**:  

    ```js
    typeof booleanData; // "boolean"
    ```

---

### 1.4. Undefined

- **Description**: A variable that has been declared but not assigned a value has the type `undefined`.
- **Example**:

    ```js
    let undefinedData;
    ```

- **Type**:

    ```js
    typeof undefinedData; // "undefined"
    ```

---

### 1.5. Null

- **Description**: `null` represents an intentional absence of any object value. It is often used to represent "no value" or "empty".
- **Example**:

    ```js
    let nullData = null;
    ```

- **Type**:  

    ```js
    typeof nullData; // "object" (This is actually a well-known bug in JavaScript, `null` should be its own type.)
    ```

---

### 1.6. BigInt

- **Description**: BigInt is a special numeric type that can represent integers with arbitrary precision. It's useful for handling large numbers that cannot be safely represented using the `number` type.
- **Example**:

    ```js
    let bigIntData = 9007199254740991n;
    ```

- **Type**:

    ```js
    typeof bigIntData; // "bigint"
    ```

---

### 1.7. Symbol

- **Description**: A Symbol is a unique and immutable data type often used as the key for object properties to ensure that no other property has the same key.
- **Example**:

    ```js
    let symbolData = Symbol("uniqueSymbol");
    ```

- **Type**:  

    ```js
    typeof symbolData; // "symbol"
    ```

---

## 2. Non-Primitive (Reference) Data Types

Non-primitive data types are more complex. These types hold references to objects rather than actual values. They can grow dynamically and are mutable, meaning their contents can be changed.

### 2.1. Object

- **Description**: Objects in JavaScript are collections of key-value pairs. An object can store multiple types of data, including other objects.
- **Example**:

    ```js
    let objectData = { name: "John", age: 30 };
    ```

- **Type**:  

    ```js
    typeof objectData; // "object"
    ```

---

### Special Types of Objects

Objects include several special types in JavaScript:

- **Array**:  
    Arrays are a special kind of object that store values in a numerically indexed order.  
    Example:

    ```js
    let arrayData = [1, 2, 3];
    ```

- **Function**:  
    Functions are also objects in JavaScript. They are blocks of reusable code that can be invoked using parentheses.  
    Example:

    ```js
    function sayHello() {
        return "Hello!";
    }
    ```

- **Date**:  
    The `Date` object is used to work with dates and times.  
    Example:

    ```js
    let dateData = new Date();
    ```

---

## Type Checking in JavaScript

In JavaScript, you can use the `typeof` operator to determine the type of a value. However, note the following peculiarities:

- `typeof null` returns `"object"` (this is a long-standing bug in JavaScript).

- Arrays are objects, so `typeof []` returns `"object"`.

To check if a variable is an array, use:

```js
Array.isArray(variable);
```
