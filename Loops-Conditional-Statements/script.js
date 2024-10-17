function runLoops() {
    let output = "";

    // For loop
    for (let i = 1; i <= 5; i++) {
        output += "For Loop - Iteration " + i + "<br>";
    }

    // While loop
    let j = 1;
    while (j <= 3) {
        output += "While Loop - Iteration " + j + "<br>";
        j++;
    }

    // Do-while loop
    let k = 1;
    do {
        output += "Do-While Loop - Iteration " + k + "<br>";
        k++;
    } while (k <= 2);

    document.getElementById("output").innerHTML = output;
}

function runConditions() {
    let age = 18;
    let output = "";

    // if-else condition
    if (age >= 18) {
        output += "You are an adult.<br>";
    } else {
        output += "You are not an adult.<br>";
    }

    // switch statement
    let day = 3;
    switch (day) {
        case 1:
            output += "It's Monday.<br>";
            break;
        case 2:
            output += "It's Tuesday.<br>";
            break;
        case 3:
            output += "It's Wednesday.<br>";
            break;
        default:
            output += "It's another day.<br>";
            break;
    }

    document.getElementById("output").innerHTML = output;
}
