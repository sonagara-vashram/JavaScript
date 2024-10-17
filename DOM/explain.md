# JavaScript DOM Methods Explanation

This document explains commonly used JavaScript DOM methods with examples.

## 1. `document.getElementById()`

**Description**: This method accesses an element by its unique `id`. You can use this to manipulate or interact with a specific element on the page.

**Example**:  
When the button is clicked, the text of the element with `id="myElement"` is changed.

---

## 2. `document.getElementsByClassName()`

**Description**: This method accesses elements by their `class` name. It returns a collection of all elements that share the same class name. You can loop through the elements to apply changes.

**Example**:  
When the button is clicked, the color of all elements with `class="myClass"` is changed from red to green.

---

## 3. `document.getElementsByTagName()`

**Description**: This method selects all elements by their tag name (e.g., `div`, `p`, `span`). You can use this method to target all elements of a specific type.

**Example**:  
When the button is clicked, the font size of all `<p>` elements is increased from 16px to 24px.

---

## 4. `document.querySelector()`

**Description**: This method selects the first element that matches a CSS-style selector. It is very powerful and flexible since you can use complex CSS selectors.

**Example**:  
When the button is clicked, the background color of the first element with the class `myClass` is changed to yellow.

---

## 5. `document.querySelectorAll()`

**Description**: This method selects all elements that match a CSS-style selector. It returns a `NodeList`, which is similar to an array. You can loop through the NodeList to apply changes to all selected elements.

**Example**:  
When the button is clicked, the background color of all elements with the class `myClass` is changed to light blue.

---

## 6. `document.createElement()`

**Description**: This method creates a new HTML element that you can insert into the DOM. You can also modify its properties before appending it to the document.

**Example**:  
When the button is clicked, a new `<p>` element is created with the text "This is a new paragraph!" and added to the div with `id="container"`.

---
