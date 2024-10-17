function showDataTypes() {
    var output = "";

    // Primitive Data Types
    var stringData = "Hello World";    // String
    var numberData = 42;               // Number
    var booleanData = true;            // Boolean
    var undefinedData;                 // Undefined
    var nullData = null;               // Null
    var bigIntData = 9007199254740991n; // BigInt
    var symbolData = Symbol("symbol"); // Symbol

    // Non-Primitive Data Type
    var objectData = { name: "John", age: 30 }; // Object

    output += "String: " + stringData + "<br>";
    output += "Number: " + numberData + "<br>";
    output += "Boolean: " + booleanData + "<br>";
    output += "Undefined: " + undefinedData + "<br>";
    output += "Null: " + nullData + "<br>";
    output += "BigInt: " + bigIntData + "<br>";
    output += "Symbol: " + symbolData.toString() + "<br>";
    output += "Object: " + JSON.stringify(objectData) + "<br>";

    document.getElementById("output").innerHTML = output;
}
