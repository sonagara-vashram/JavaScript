// Event Listener for Click Event
document.getElementById("clickButton").addEventListener("click", function() {
    document.getElementById("output").innerHTML += "<p>Button Clicked!</p>";
});

// Event Listener for Mouse Over Event
document.getElementById("hoverButton").addEventListener("mouseover", function() {
    document.getElementById("output").innerHTML += "<p>Mouse Over Button!</p>";
});

// Event Listener for Double Click Event
document.getElementById("dblClickButton").addEventListener("dblclick", function() {
    document.getElementById("output").innerHTML += "<p>Button Double Clicked!</p>";
});

// Event Listener for Key Press Event
document.getElementById("inputField").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("output").innerHTML += "<p>You pressed Enter!</p>";
    }
});

// Event Listener for Focus Event
document.getElementById("inputField").addEventListener("focus", function() {
    document.getElementById("output").innerHTML += "<p>Input Field Focused!</p>";
});

// Event Listener for Blur Event
document.getElementById("inputField").addEventListener("blur", function() {
    document.getElementById("output").innerHTML += "<p>Input Field Lost Focus!</p>";
});

// Event Listener for Change Event
document.getElementById("inputField").addEventListener("change", function() {
    document.getElementById("output").innerHTML += "<p>Input Field Changed!</p>";
});

// Event Listener for Mouse Leave Event
document.getElementById("hoverButton").addEventListener("mouseleave", function() {
    document.getElementById("output").innerHTML += "<p>Mouse Left Button!</p>";
});

// Event Listener for Resize Event
window.addEventListener("resize", function() {
    document.getElementById("output").innerHTML += "<p>Window Resized!</p>";
});

// Event Listener for Scroll Event
window.addEventListener("scroll", function() {
    document.getElementById("output").innerHTML += "<p>Window Scrolled!</p>";
});

// Event Listener for Load Event
window.addEventListener("load", function() {
    document.getElementById("output").innerHTML += "<p>Page fully loaded!</p>";
});

// Event Listener for Unload Event
window.addEventListener("unload", function() {
    document.getElementById("output").innerHTML += "<p>Goodbye!</p>";
});

// Event Listener for Before Unload Event
window.addEventListener("beforeunload", function(event) {
    event.preventDefault();
    event.returnValue = '';
});

// Event Listener for Mouse Down Event
document.getElementById("clickButton").addEventListener("mousedown", function() {
    document.getElementById("output").innerHTML += "<p>Mouse button pressed down!</p>";
});

// Event Listener for Mouse Up Event
document.getElementById("clickButton").addEventListener("mouseup", function() {
    document.getElementById("output").innerHTML += "<p>Mouse button released!</p>";
});

// Event Listener for Key Down Event
document.addEventListener("keydown", function(event) {
    document.getElementById("output").innerHTML += "<p>Key pressed down: " + event.key + "</p>";
});

// Event Listener for Key Up Event
document.addEventListener("keyup", function(event) {
    document.getElementById("output").innerHTML += "<p>Key released: " + event.key + "</p>";
});

// Event Listener for Context Menu Event
document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Prevent default context menu
    document.getElementById("output").innerHTML += "<p>Custom context menu!</p>";
});

// Event Listener for Change Event on Checkbox
document.getElementById("myCheckbox").addEventListener("change", function() {
    document.getElementById("output").innerHTML += "<p>Checkbox state changed!</p>";
});

// Event Listener for Input Event
document.getElementById("inputField").addEventListener("input", function() {
    document.getElementById("output").innerHTML += "<p>Input value changed: " + this.value + "</p>";
});

// Event Listener for Drag Event
document.addEventListener("drag", function() {
    document.getElementById("output").innerHTML += "<p>Element is being dragged!</p>";
});

// Event Listener for Drop Event
document.addEventListener("drop", function() {
    document.getElementById("output").innerHTML += "<p>Element dropped!</p>";
});
