console.log("5" - "4");
// Output: 1
// JavaScript automatically converts the strings '5' and '4' into numbers and performs subtraction.

console.log("5" * "4");
// Output: 20
// JavaScript converts both string values to numbers and performs multiplication.

console.log("5" ** "4");
// Output: 625
// JavaScript converts both strings to numbers and performs exponentiation (5^4 = 625).

console.log("5" / "ahmed");
// Output: NaN
// '5' is converted to a number, but 'ahmed' is not a valid number, so the division results in NaN (Not-a-Number).

//-----------------------------------------------------------------------------------------------------------------------------


// Using the + unary operator (quickest way)
let str = "123";
let num = +str; // Converts string to number
console.log(num); // Output: 123
console.log(typeof num); // Output: number

//-------------------------------------------------------------------------------------------------------------------------------

console.log(typeof '5'); // String
console.log(typeof +'5'); // positive Number
console.log(typeof -'5') // Negative Number
console.log(+true); // 1
console.log(+false); // 0
console.log(+null);
//--------------------------------------------------------------------------------------------------------------------------------------