function runOperators() {
    var a = 10;
    var b = 5;
    var output = "";

    // Arithmetic Operators
    output += "Addition: " + (a + b) + "<br>";
    output += "Subtraction: " + (a - b) + "<br>";
    output += "Multiplication: " + (a * b) + "<br>";
    output += "Division: " + (a / b) + "<br>";
    output += "Modulus: " + (a % b) + "<br>";

    // Comparison Operators
    output += "Is a equal to b? " + (a == b) + "<br>";
    output += "Is a greater than b? " + (a > b) + "<br>";

    // Logical Operators
    output += "Logical AND: " + (a > 5 && b < 10) + "<br>";
    output += "Logical OR: " + (a > 5 || b > 10) + "<br>";
    output += "Logical NOT: " + !(a < 5) + "<br>";

    document.getElementById("output").innerHTML = output;
}
