function changeText() {
    var element = document.getElementById("myElement");
    element.innerHTML = "Text has been changed!";
}

function changeColor() {
    var elements = document.getElementsByClassName("myClass");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "green";
    }
}

function increaseFontSize() {
    var elements = document.getElementsByTagName("p");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = "24px";
    }
}

function highlightFirst() {
    var element = document.querySelector(".myClass");
    element.style.backgroundColor = "yellow";
}

function highlightAll() {
    var elements = document.querySelectorAll(".myClass");
    elements.forEach(function(element) {
        element.style.backgroundColor = "lightblue";
    });
}

function addParagraph() {
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph!";
    document.getElementById("container").appendChild(newParagraph);
}
