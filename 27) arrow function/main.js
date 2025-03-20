

// Define an arrow function assigned to variable 'x'
let x = () => 'hello';

// Call the function and print the result
console.log(x());

// Define an arrow function assigned to variable 'y'
// The function takes one parameter named '_', but it is not used
let y = _ => 'hello';

// Call the function and print the result
console.log(y()); // Output: 'hello'


// Define an arrow function assigned to variable 'z'
// The function takes one parameter 'num' and returns 'num * 2'
let z = num => num * 2;

// Call the function with argument 3 and print the result
console.log(z(3)); // Output: 6


let c = (num, c) => num * c;

console.log(c(5 , 6));