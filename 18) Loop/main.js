// Start of the loop
for (let i = 0; i < 10; i++) {
  // Initialize i to 0, run the loop while i is less than 10, and increment i by 1 in each iteration
  console.log("hello world"); // Print "hello world" in each iteration
}

// Start of the loop
for (let i = 0; i <= 10; i += 2) {
  // Initialize i to 0, run the loop while i is less than or equal to 10, and increment i by 2 in each iteration
  console.log(i); // Print the value of i in each iteration
}

// Start of the loop
for (let i = 10; 0 <= i; i--) {
  // Initialize i to 10, run the loop while i is greater than or equal to 0, and decrement i by 1 in each iteration
  console.log(i); // Print the value of i in each iteration
}

for (let i = 0; i <= 10; i++) {
  console.log('Amr' + i); // Concatenate "Amr" with the value of i
}

// Define an array containing a list of names
let names = ['amr', 'ahmed', 'khalid', 'ali', 'youssef'];

// Use a for loop to iterate through all elements in the array
for (let i = 0; i < names.length; i++) {
  // Print each name in the array
  console.log(names[i]);
}
