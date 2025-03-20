function hello(name) {
  // If no argument is passed, 'name' will be undefined, leading to "hello undefined" in the output.
  console.log(`hello ${name}`);
}

// Calling the function without an argument will result in "hello undefined".
hello();

/************************************************************************************************* */

function welcome(name = "Amr") {
  // The parameter 'name' has a default value of 'Amr'.
  // If no argument is passed, 'name' will take the default value.
  console.log(`hello ${name}`);
}

// Calling the function without an argument will use the default value 'Amr'.
welcome(); // Output: hello Amr

// Calling the function with an argument will override the default value.
welcome("Sara"); // Output: hello Sara

/************************************************************************************************* */

function age(age) {
  // The function expects an argument, but if none is provided, 'age' will be undefined.
  // Attempting to multiply 'undefined' by 365 will result in NaN (Not a Number).
  console.log(age * 365);
}

// Calling the function without an argument will result in NaN.
age();

/************************************************************************************************* */

function age2(age = 0) {
  // The parameter 'age' has a default value of 0.
  // If no argument is passed, 'age' will take the default value (0).
  // This prevents NaN and ensures a valid numerical output.
  console.log(age * 365);
}

// Calling the function without an argument will use the default value 0, resulting in 0.
age2(); // Output: 0

// Calling the function with an argument will override the default value.
age2(25); // Output: 9125

/************************************************************************************************* */

function calc(...numbers) {
    // The function uses the rest parameter (...numbers) to collect all arguments into an array.
    // If no arguments are passed, 'numbers' will be an empty array.
    console.log(numbers);
}

// Calling the function without arguments will log an empty array: []
calc(); // Output: []
  
// Calling the function with multiple arguments will log them as an array.
calc(1, 2, 3, 4); // Output: [1, 2, 3, 4]
