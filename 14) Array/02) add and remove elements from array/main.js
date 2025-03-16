let names = ["ahmed", "ali", "mazen"]; // Define an array with three names

console.log(names); // Print the original array -> ['ahmed', 'ali', 'mazen']

names.push("amr"); // Add 'amr' to the end -> ['ahmed', 'ali', 'mazen', 'amr']

names.unshift("malak"); // Add 'malak' to the beginning -> ['malak', 'ahmed', 'ali', 'mazen', 'amr']

console.log(names.shift()); // Remove and print the first element ('malak') -> 'malak'

console.log(names.pop()); // Remove and print the last element ('amr') -> 'amr'

console.log(names); // Print the final array -> ['ahmed', 'ali', 'mazen']
