

let names = ["Amr", "Ahmed", "youssef", "Amr", "Ahmed", "youssef"];

// The indexOf() method returns the first index at which a given element is found in the array.
// It starts searching from the beginning (index 0) by default.
console.log(names.indexOf("Amr")); // Output: 0 (First occurrence of "Amr" is at index 0)

// The second argument specifies the starting index for the search.
// Here, it starts searching for "Amr" from index 1.
console.log(names.indexOf("Amr", 1)); // Output: 3 (Next occurrence of "Amr" is at index 3)



// The lastIndexOf() method returns the last occurrence of "Ahmed" in the array.
// It searches from the end of the array towards the beginning.
console.log(names.lastIndexOf("Ahmed")); // Output: 4 (Last occurrence of "Ahmed" is at index 4)

// The indexOf() method returns the first occurrence of "Ahmed" in the array.
// It searches from the beginning (index 0).
console.log(names.indexOf("Ahmed")); // Output: 1 (First occurrence of "Ahmed" is at index 1)


// Check if the array 'names' includes the string "ahmed"
console.log(names.includes("Amr")); // Returns true 

// Check if the array 'names' includes the string "mazan"
console.log(names.includes("mazan")); // Returns false
