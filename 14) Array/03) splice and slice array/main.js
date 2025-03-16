//splice(start , end , add)
//slice(start , end)

let names = ["Amr", "Ahmed", "Ali", "Mohamed"]; // Define an array with four names

names.splice(0, 1); // Remove 1 element starting from index 0 ('Amr')
console.log(names); // Output: ['Ahmed', 'Ali', 'Mohamed']

names.splice(1, 2); // Remove 2 elements starting from index 1 ('Ali' and 'Mohamed')
console.log(names); // Output: ['Ahmed']

names.splice(0, 0, 'gamal', 'mona'); // Insert 'gamal' and 'mona' at the beginning of the names array without removing any elements


// Create a new array containing elements from index 0 to 2 (3 elements total)
let newArray = names.slice(0, 3);
console.log(newArray);