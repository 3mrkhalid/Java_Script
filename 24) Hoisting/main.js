console.log(x); // undefined (Hoisting applies, but only declaration is hoisted)

var x = 10; // Declaration is hoisted, but assignment happens at this line

//How JavaScript interprets it internally:

var x; // Declaration is hoisted to the top
console.log(x); // Outputs: undefined (x exists but is not assigned yet)
x = 10; // Assignment happens here

/**************************************************************************** */

//Error:
console.log(x); // ReferenceError: Cannot access 'x' before initialization

let x = 10; // 'x' is declared and initialized here

/******************************************************************************* */

console.log(hello()); // Output: 1

function hello() {
  return 1;
}

//How JavaScript Interprets This Internally:

function hello() { // Function declaration is fully hoisted
  return 1;
}

console.log(hello()); // outputs: 1
