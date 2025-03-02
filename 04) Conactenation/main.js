let name = 'Amr';
let x = 10;
let y = 20;

console.log(name + x); // "Amr" + 10 -> String concatenation -> Output: "Amr10"

console.log(x + y); // 10 + 20 -> Numeric addition -> Output: 30

console.log(20 + name); // 20 + "Amr" -> String concatenation (number gets converted to a string) -> Output: "20Amr"


console.log(`My Name is ${name} and my age is ${y}`);  
// Using template literals (backticks ` `) to insert variables into the string
// ${name} is replaced with "Amr"
// ${y} is replaced with 20
// Output: "My Name is Amr and my age is 20"
