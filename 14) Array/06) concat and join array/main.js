


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5, 6]

arr1 += arr2; // Equivalent to arr1 = arr1.toString() + arr2.toString();

console.log(arr1); // "1,2,34,5,6" (String)
console.log(typeof arr1); // "string"


console.log(arr2.join('-')); // Output: "1,2,3,4" (as a string)


