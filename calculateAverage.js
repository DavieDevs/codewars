/*
Description:
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.

PREP
Parameters:
numbers

Return:
Average of those two numbers

Example: 
1, 1, 1, = 3 / 3 => 1

Pseudo
Create a function that takes all given numbers and returns the average of those numbers

*/

function average(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);

  return sum / arr.length;
}

console.log(average([1, 1, 1]));

function sum(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

console.log(sum([1, 9]));
