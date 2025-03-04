console.log(+'4 amr');        // NaN
console.log(Number('4 amr')); // NaN
console.log(parseInt('4 amr')); // 4
console.log(parseFloat('4.5 amr')); //4.5

//--------------------------------------------------------------------------------------------------------
console.log(parseInt('ahmed 4 amr')); // NaN
// - parseInt() reads the string from left to right and tries to extract a number.
// - If the string starts with a non-numeric character, parseInt() immediately returns NaN (Not a Number).
// - Since 'ahmed' starts with a letter, parseInt() cannot find a valid number to extract.
// - Therefore, the output is NaN.
