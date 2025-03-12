
let name = 'I love java script';

// Using slice(start, end)
// Extracts substring from index 2 to 6 (excluding 6)
console.log(name.slice(2, 6));  // Output: "love"

// Using slice with a negative index
// Extracts last 6 characters of the string
console.log(name.slice(-6));  // Output: "script"

// Using substring(start, end)
// Works similarly to slice for positive indices
console.log(name.substring(2, 6));  // Output: "love"

// Using substring with a negative index
// Negative values are treated as 0, so it extracts from index 0 to end
console.log(name.substring(-6));  // Output: "I love java script"


// Using substr(start, length)
// Extracts a substring starting from index 2 and takes the next 6 characters
console.log(name.substr(2, 6));  // Output: "love j"
