const output = document.getElementById("output");

// For Loop
output.innerHTML += "<h2>For Loop</h2>";
for (let i = 0; i < 5; i++) {
    output.innerHTML += "Value of i: " + i + "<br>";
}

// While Loop
output.innerHTML += "<h2>While Loop</h2>";
let j = 0;
while (j < 5) {
    output.innerHTML += "Value of j: " + j + "<br>";
    j++;
}

// Do While Loop
output.innerHTML += "<h2>Do While Loop</h2>";
let k = 0;
do {
    output.innerHTML += "Value of k: " + k + "<br>";
    k++;
} while (k < 5);

// For...of Loop
output.innerHTML += "<h2>For...of Loop</h2>";
const arr = [1, 2, 3];
for (const value of arr) {
    output.innerHTML += "Value: " + value + "<br>";
}

// For...in Loop
output.innerHTML += "<h2>For...in Loop</h2>";
const obj = { a: 1, b: 2 };
for (const key in obj) {
    output.innerHTML += "Key: " + key + ", Value: " + obj[key] + "<br>";
}

// For Each Loop
output.innerHTML += "<h2>For Each Loop</h2>";
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((value, index) => {
    output.innerHTML += `Index: ${index}, Value: ${value}<br>`;
});

// If Statement
output.innerHTML += "<h2>If Statement</h2>";
const age = 20;
if (age >= 18) {
    output.innerHTML += "You are an adult.<br>";
}

// If...else Statement
output.innerHTML += "<h2>If...else Statement</h2>";
const age2 = 16;
if (age2 >= 18) {
    output.innerHTML += "You are an adult.<br>";
} else {
    output.innerHTML += "You are a minor.<br>";
}

// If...else if...else Statement
output.innerHTML += "<h2>If...else if...else Statement</h2>";
const score = 85;
if (score >= 90) {
    output.innerHTML += "Grade: A<br>";
} else if (score >= 75) {
    output.innerHTML += "Grade: B<br>";
} else {
    output.innerHTML += "Grade: C<br>";
}

// Switch Statement
output.innerHTML += "<h2>Switch Statement</h2>";
const fruit = "apple";
switch (fruit) {
    case "banana":
        output.innerHTML += "It's a banana.<br>";
        break;
    case "apple":
        output.innerHTML += "It's an apple.<br>";
        break;
    default:
        output.innerHTML += "Unknown fruit.<br>";
}
