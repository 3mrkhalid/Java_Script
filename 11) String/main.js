// Declare a variable 'name' and assign it the string 'amr'
let name = "amr";

// This is just a note: the string 'amr' can be thought of as an array-like structure with characters [a, m, r]
// name => [a , m , r]

// These lines are illustrative; they show how indices map to characters, but they don’t execute
// name[0] = 'a'; // Index 0 is 'a' (not assignable, as strings are immutable)
// name[1] = 'm'; // Index 1 is 'm'
// name[2] = 'r'; // Index 2 is 'r'

// Output the string 'name' repeated twice ('amr' + 'amr' = 'amramr')
console.log(name.repeat(2)); // Output: 'amramr'

// Output the length of the string 'name', which is 3 characters
console.log(name.length); // Output: 3

// Output the character at index 0 of 'name', which is 'a'
console.log(name[0]); // Output: 'a'

// Output the character at index 0 using charAt(), also 'a'
console.log(name.charAt(0)); // Output: 'a'

// Output the character at index 10 using bracket notation; since 'amr' has only 3 characters, this is undefined
console.log(name[10]); // Output: undefined

// Output the character at index 10 using charAt(); out of bounds returns an empty string ''
console.log(name.charAt(10)); // Output: ''

// Output the first index of 'r' in 'amr', which is 2
console.log(name.indexOf('r')); // Output: 2


let str = 'I love java script';
// Output the index of the first 'o' starting from index 2, which is 3
console.log(str.indexOf('o', 2)); // Output: 3

// Output the index of the first occurrence of 'java' in 'I love java script', which is 7
console.log(str.indexOf('java')); // Output: 7
console.log(str.lastIndexOf('java')); // Output: 7

console.log(str.slice(0, 2)); // Extracts and logs the substring from index 0 to 1 ('I ') (Note: The end index 2 is not included)

console.log(str.split(" ")); // Splits the string into an array of words using space (" ") as the delimiter
// Expected output: ['I', 'love', 'java', 'script']

console.log(str.split(" ", 2)); 
// Splits the string into an array using space (" ") as the delimiter
// Limits the output array to the first 2 elements
// Expected output: ['I', 'love']


console.log(str.split('')); // Splits the string into an array of individual characters, including spaces