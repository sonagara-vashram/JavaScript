function runArrowFunctionExamples() {
    let output = "";

    // Basic Arrow Function
    const add = (a, b) => a + b;
    output += "Addition: " + add(5, 10) + "<br>";

    // Arrow Function with No Parameters
    const greet = () => "Hello, World!";
    output += greet() + "<br>";

    // Arrow Function with Single Parameter
    const square = x => x * x;
    output += "Square of 5: " + square(5) + "<br>";

    // Arrow Function with Multiple Statements
    const multiply = (x, y) => {
        let result = x * y;
        return result;
    };
    output += "Multiplication: " + multiply(5, 10) + "<br>";

    // Arrow Function and 'this' Binding
    const person = {
        name: "Alice",
        greet: function() {
            return () => `Hello, my name is ${this.name}.`;
        }
    };
    output += person.greet()() + "<br>";

    document.getElementById("output").innerHTML = output;
}
