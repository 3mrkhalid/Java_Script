let name = "I love java script";

// Find the first occurrence of the letter 'a' in the string
console.log(name.indexOf("a")); // 8

// Find the last occurrence of the letter 'a' in the string
console.log(name.lastIndexOf("a")); // 13

// Check if the letter 'a' exists in the string
console.log(name.includes("a")); // true


/**************************************************************************/


// Find the first occurrence of the letter 'z' (not present in the string)
console.log(name.indexOf("z")); // -1

// Find the last occurrence of the letter 'z' (not present in the string)
console.log(name.lastIndexOf("z")); // -1

// Check if the letter 'z' exists in the string
console.log(name.includes("z")); // false

/****************************************************************************/ 


// Check if the string starts with 'I'
console.log(name.startsWith('I')); // true The string starts with 'I'

// Check if the string starts with 'a'
console.log(name.startsWith('a')); // false The string does NOT start with 'a'


// Check if the string ends with 't'
console.log(name.endsWith('t')); // true The string ends with 't'

// Check if the string ends with 'a'
console.log(name.endsWith('a')); // false The string does NOT end with 'a'