
let user = {
  // Properties
  FirstName: "Amr", // Stores the user's first name
  LastName: "Gamal", // Stores the user's last name
  email: "amrahmedyoussef79@gmail.com", // Stores the user's email address
  age: 26, // Stores the user's age
  skills: ["html", "css", "JavaScript", "React"], // Array storing the user's skills
  active: true, // Boolean indicating if the user is active

  // Nested Object: Phone Numbers
  phoneNumber: {
    first: "01272030384", // Primary phone number
    second: "01020382186", // Secondary phone number
  },

  // Nested Object: Address
  adress: {
    Egypt: "14 street alsed mohamed alsed", // Stores the user's address in Egypt
  },

  // Methods
  IsActive: () => {
    // Checks if the user is active and returns a message accordingly
    if (user.active === true) return "hello user";
    else return "Sorry,";
  },

  GetAge: () => {
    // Checks if the user's age is 18 or older
    if (user.age >= 18) return "ok";
    else return "no";
  },
};

console.log(user.IsActive()); // Calls the IsActive method and logs the returned message based on the user's active status.

console.log(user.phoneNumber.first); // Logs the user's first phone number to the console.

console.log(user['GetAge']()); // Calls the GetAge method using bracket notation and logs the returned value.

