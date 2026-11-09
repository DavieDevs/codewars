/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

/*
-----------
My Solution
-----------
Get two arguments
first argument: array of numbers
second argument: the divisor (a num)

Return all numbers which are divisible by the given divisor.

Example:

Input:
[1,2,3,4,5,6] // array of numbers
2 // the divisor

Output:
[2,4,6]
*/

let example = [1, 2, 3, 4, 5, 6];

const FindDivisible = (arr, divisor) =>
  arr.filter((num) => num % divisor === 0);

console.log(FindDivisible(example, 2));
