// Function for Addition
function add(a, b) {
    return a + b;
}

// Function for Subtraction
function subtract(a, b) {
    return a - b;
}

// Function for Multiplication
function multiply(a, b) {
    return a * b;
}

// Function for Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed!";
    }
    return a / b;
}

// Testing the functions
console.log("Addition (10 + 5): " + add(10, 5));
console.log("Subtraction (20 - 8): " + subtract(20, 8));
console.log("Multiplication (4 * 5): " + multiply(4, 5));
console.log("Division (10 / 2): " + divide(10, 2));