// Define an array of names
let arr = ["amr", "ahmed", "youssef"];

// Define an array of numbers
let number = [4, 3, 5, 10];

// Sort the 'arr' array in ascending order (alphabetically)
console.log(arr.sort()); // ['ahmed', 'amr', 'youssef']

// Sort the 'number' array
console.log(number.sort());
// sort() converts numbers to strings before sorting, so it sorts them lexicographically!
// The result will be [10, 3, 4, 5] instead of [3, 4, 5, 10]

// Reverse the sorted 'arr' array
console.log(arr.reverse()); // ['youssef', 'amr', 'ahmed']

// Reverse the sorted 'number' array
console.log(number.reverse()); // [5, 4, 3, 10] (not numerically correct)

// Correct way to sort numbers properly in ascending order:
number.sort((a, b) => a - b); // [3, 4, 5, 10]
console.log(number);

// Reverse the correctly sorted number array:
console.log(number.reverse()); // [10, 5, 4, 3]
