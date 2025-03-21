let title = "BMW"; // Variable holding the car title
let price = 5000; // Variable holding the car price
let color = "red"; // Variable holding the car color
let modle = 2020; // Typo: "modle" should be "model"

let car = {
  title: "BMW", // Property storing the car title
  price: 5000, // Property storing the car price
  color: ["red", "white", "black"], // Array storing available colors
  modle: 2020, // Typo: should be "model"

  hello: () => {
    return 1; // Function returning the number 1 (consider changing if a meaningful return value is needed)
  },
};

console.log(car.color); // Logs the array of available car colors to the console

console.log(car.color[0]); // Logs "red"
console.log(car.color[1]); // Logs "white"
console.log(car.color[2]); // Logs "black"

console.log(car.hello()); // Calls the hello function and logs its return value (1) to the console.
