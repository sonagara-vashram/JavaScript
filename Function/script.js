function runFunctionExamples() {
    let output = "";

    // Function Declaration
    function greet(name) {
        return "Hello, " + name + "!";
    }
    output += greet("John") + "<br>";

    // Function Expression
    const add = function (a, b) {
        return a + b;
    };
    output += "Addition: " + add(5, 10) + "<br>";

    // IIFE (Immediately Invoked Function Expression)
    (function () {
        output += "This is an IIFE.<br>";
    })();

    // Function with Default Parameters
    function greetUser(name = "Guest") {
        return "Welcome, " + name + "!";
    }
    output += greetUser() + "<br>";
    output += greetUser("Alice") + "<br>";

    document.getElementById("output").innerHTML = output;
}
