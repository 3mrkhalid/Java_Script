// Initialize a variable 'i' with the value 0
let i = 0;

// Start a while loop that runs as long as 'i' is less than 3
while (i < 3) {
  // Write an <h1> element with "hello world" inside the document
  document.write(`<h1>hello world</h1>`);
  // Increment 'i' by 1 in each iteration to avoid an infinite loop
  i++;
}

// Initialize a variable 'j' with the value 0
let j = 0;

// Execute the do-while loop at least once
do {
  // Write 'hello' to the document
  document.write('hello');  
  // Increment 'j' by 1 in each iteration
  j++;
} while (j < 3); // Continue looping while 'j' is less

