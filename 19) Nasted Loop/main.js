// Define an array containing different car brands
let cars = ["BMW", "Mercedes", "Honda"];

// Define an array containing different car models (years)
let Modle = [2021, 2023, 2024];

// Outer loop: Iterates through each car brand in the 'cars' array
for (let i = 0; i < cars.length; i++) {
  console.log(`Cars: ${cars[i]}`); // Print the current car brand

  // Inner loop: Iterates through each model year in the 'Modle' array
  for (let j = 0; j < Modle.length; j++) {
    console.log(`Model: ${Modle[j]}`); // Print the corresponding model year
  }
  console.log(`_________________________________`);
}
