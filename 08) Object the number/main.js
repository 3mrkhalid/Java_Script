// Print the largest number that can be represented in JavaScript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// Adding a small number to Number.MAX_VALUE
console.log(Number.MAX_VALUE + 1000); // 1.7976931348623157e+308 (No change due to precision limits)
console.log(Number.MAX_VALUE + 1e307); // Infinity (Exceeds the maximum limit)

//---------------------------------------------------------------------------------------------------

// Print the largest safe integer in JavaScript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Print the smallest safe integer in JavaScript
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991


//----------------------------------------------------------------------------------------------------


// Check if 9007199254740991 is a safe integer
console.log(Number.isSafeInteger(9007199254740991)); // true (within safe integer range)

// Check if 9007199254740992 is a safe integer
console.log(Number.isSafeInteger(9007199254740992)); // false (exceeds safe integer range)

//-----------------------------------------------------------------------------------------------------

console.log(Number.isInteger(4));  // true because 4 is an integer

console.log(Number.isInteger('4')); // false because '4' is a string, not a number

console.log(Number.isNaN(4)); // false because 4 is a valid number, not NaN
