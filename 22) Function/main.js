// Define a function named 'hello'
function hello() {
  // Print 'hello world' to the console
  console.log("hello world");
}

// Call the 'hello' function to execute it
hello();

// Function to calculate the number of days based on age in years
function CalcAge(age) {
  // Multiply the given age by 365 to convert years into days
  let result = age * 365;

  // Print the result to the console
  console.log(result);
}

// Call the function with an argument of 19 years
CalcAge(19);

// Function to calculate the total price including taxes and ads
function pro(price, taxes, ads) {
    // Add the price and taxes to get the intermediate total
    let product = price + taxes;

    // Add the ads cost to get the final result
    let result = product + ads;

    // Print the final result to the console
    console.log(result);
}

// Call the function with different sets of values
pro(200, 2.5, 210); // Output: 412.5
pro(400, 2, 40);    // Output: 442
