function runArrayExamples() {
    let output = "";

    // Array Declaration
    const fruits = ["Apple", "Banana", "Mango"];
    output += "Fruits Array: " + fruits + "<br>";

    // Accessing Elements
    output += "First Fruit: " + fruits[0] + "<br>";

    // Modifying Elements
    fruits[1] = "Orange";
    output += "Modified Fruits Array: " + fruits + "<br>";

    // Array Length
    output += "Array Length: " + fruits.length + "<br>";

    // Adding Elements (push)
    fruits.push("Grapes");
    output += "After Push: " + fruits + "<br>";

    // Removing Last Element (pop)
    fruits.pop();
    output += "After Pop: " + fruits + "<br>";

    // Adding Element at Start (unshift)
    fruits.unshift("Strawberry");
    output += "After Unshift: " + fruits + "<br>";

    // Removing First Element (shift)
    fruits.shift();
    output += "After Shift: " + fruits + "<br>";

    // Slicing Array (slice)
    const slicedFruits = fruits.slice(1, 3);
    output += "Sliced Array (1 to 3): " + slicedFruits + "<br>";

    // Splicing Array (splice)
    fruits.splice(1, 0, "Pineapple");
    output += "After Splice: " + fruits + "<br>";

    // Finding Index (indexOf)
    const index = fruits.indexOf("Mango");
    output += "Index of Mango: " + index + "<br>";

    // Concatenating Arrays
    const moreFruits = ["Kiwi", "Papaya"];
    const allFruits = fruits.concat(moreFruits);
    output += "Concatenated Array: " + allFruits + "<br>";

    // Checking if an Object is an Array (isArray)
    output += "Is fruits an Array? " + Array.isArray(fruits) + "<br>";

    document.getElementById("output").innerHTML = output;
}
