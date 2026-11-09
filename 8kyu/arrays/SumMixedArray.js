/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

/*
-----------
My Solution
-----------

Given an array of integers
Ints can be strings or numbers

Return the sum of array values 
as if they were all numbers

The returned value should be a number
*/

let nums = [9, 3, "7", "3"]; // => 22

const SumMixedArrays = (arr) =>
  arr.reduce((acc, curr) => acc + Number(curr), 0);

console.log(SumMixedArrays(nums));

// Top related solution
function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}
