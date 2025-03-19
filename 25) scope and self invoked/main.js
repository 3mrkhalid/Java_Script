// Global variable
var x = 4; // 'x' is declared globally and accessible throughout the script.
console.log(x); // Outputs: 4

for (var i = 1; i < 100; i++); // The loop runs but does nothing because of the semicolon
console.log(i); // Outputs: 100

// Local scope example
function hello() {
  console.log(x); // Since 'x' is global, it is accessible inside the function. Outputs: 4
  var y = 5; // 'y' is declared inside the function and is only accessible within this function (local scope).
}

console.log(x); // Again, accessing the global 'x', Outputs: 4
// console.log(y); // Error: 'y' is not defined because it is declared inside 'hello()' and is not accessible outside.

// for (let k = 1; k < 100; k++); // The loop runs but does nothing because of the semicolon
// console.log(k); // Outputs: 100

/**************************************************************************************************************** */

// IIFE (Immediately Invoked Function Expression) - A function that executes immediately after being defined
(function () {
  console.log("hello"); // Prints 'hello' immediately upon execution
})(); // The parentheses at the end () invoke the function right away

/**************************************************************************************************************** */

console.log(x());

function x() {
  function y() {
    return 1;
  } // First declaration of function y

  return y(); // Calling y()

  function y() {
    return 0;
  } // Second declaration of function y
   // Calls the final `y()` which returns 0 (Hoisting)
}
