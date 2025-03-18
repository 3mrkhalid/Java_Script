// Function to calculate the total price including taxes and ads
function pro(price, taxes, ads) {
  // Add the price and taxes to get the intermediate total
  let product = price + taxes;

  // Add the ads cost to get the final result
  let result = product + ads;

  // Return the final result
  return result;
}

// Call the function with values (200, 1.5, 40) and store the result in 'x'
let x = pro(200, 1.5, 40);

// Divide 'x' by 2 and print the result
console.log(x / 2);
