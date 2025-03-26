// Create an object 'user' with a property 'name'
let user = {
  name: "Amr",
};

// Print the initial value of 'name'
console.log(user.name); // Output: Amr

// Update the 'name' property
user.name = "ahmed";

// Print the updated value of 'name'
console.log(user.name); // Output: ahmed

// Add a new property 'age' to the object
user["age"] = 25;

// Print the value of 'age'
console.log(user.age); // Output: 25

// Add a function 'hello' to the object
user.hello = () => {
  return "hello";
};

// Call and print the result of 'hello' function
console.log(user.hello()); // Output: hello

// Create an empty string object using the String constructor
let hi = new String();

// Create an object 'pop' using the Object constructor
let pop = new Object({
  name: "ahmed",
  age: 20,
});

// Print the 'hi' string object
console.log(hi); // Output: [String: '']

// Print the 'pop' object
console.log(pop); // Output: { name: 'ahmed', age: 20 }

// Print the 'age' property of 'pop'
console.log(pop.age); // Output: 20
