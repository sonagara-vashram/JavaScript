function runConsoleExamples() {
    console.log("This is a simple log message.");
    console.error("This is an error message.");
    console.warn("This is a warning message.");
    
    console.info("This is some information.");
    
    console.table([{ name: "John", age: 30 }, { name: "Jane", age: 25 }]);

    console.group("Grouped Logs");
    console.log("Inside the group.");
    console.groupEnd();

    console.time("Timer");
    // Some code that takes time to execute
    console.timeEnd("Timer");

    let obj = { name: "John", age: 30 };
    console.dir(obj);
}
