let x = 'amr   ';
let y = 'ahmed';

console.log(x == y); // Compare the two values using loose equality (==)
console.log(x = y); // This assigns the value of y ('ahmed') to x Then, it prints 'ahmed' as the new value of 



// console.log(x.toUpperCase()); Output: 'AMR'
// console.log(y.toLowerCase()); Output: 'ahmed'

console.log(x.trim()); // Removes whitespace from both ends of the string x and logs the result


// This comparison uses the '==' operator, which performs type coercion. 
// Since '5' is converted to the number 5, the comparison returns true.
console.log(5 == '5');  // Output: true


// This comparison uses the '===' operator, which checks both value and type. 
// Since 5 is a number and '5' is a string, the comparison returns false.
console.log(5 === '5');  // Output: false


// This checks if 4 is greater than 5, which is false.
console.log(4 > 5);  // Output: false

// This checks if 4 is less than 5, which is true.
console.log(4 < 5);  // Output: true


// This checks if 4 is less than or equal to 4, which is true.
console.log(4 <= 4);  // Output: true


// This checks if 4 is not equal to 4, which is false since both values are the same.
console.log(4 != 4);  // Output: false


let Product = 'Samsung-Tv';
let Salary = 10000;
let size = 50

// This checks if Salary is less than 12000 AND size is equal to 50. Both are true, so the result is true.
console.log((Salary < 12000 && size == 50));  // Output: true

// This checks if Salary is greater than 15000 OR size is equal to 50. Since size is 50, the result is true.
console.log((Salary > 15000 || size == 50));  // Output: true
