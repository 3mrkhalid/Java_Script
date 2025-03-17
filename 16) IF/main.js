// Get user input for num1 and num2 (both will be strings by default)
let num1 = prompt("num1");
let num2 = prompt("num2");

// Check if num2 is greater than num1
if (num2 > num1) {
  // If the condition is true, log 'hello' to the console
  console.log("hello");
}

let role = prompt("what is role?");

if (role == "admin") {
  document.writeln("update, creat , delet");
} else if (role == "moderator") {
  document.writeln("update, creat");
} else {
  document.writeln("hello user");
}
/********************************************************************** */

let result = prompt("what is your result?");

if (result >= 90) {
  document.writeln("excellent");
} else if (result >= 80) {
  document.writeln("very good");
} else if (result >= 70) {
  document.writeln("good");
} else if (result >= 50) {
  document.writeln("acceptable");
} else {
    document.writeln('fail');
}

/************************************************************************** */

// Get the user's age as input (it will be a string by default)
let age = prompt('what is your age');

// Use the ternary operator to check the age and display a message
let user = age >= 18 ? document.write('hello user')  // If age is 18 or older, display 'hello user'
             : age == 18 ? document.write('hi 18')    // If age is exactly 18, display 'hi 18'
             : document.write('no you are very young');  // If age is less than 18, display 'no you are very young'

// Log the value of the 'user' variable to the console
console.log(user);
