/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

/*
-----------
My Solution
-----------

Given an array of numbers
Array is never Empty
Values are whole

Return the RESULT of multiplying the values together IN ORDER

Example:
[1,2,3,4] => 1 * 2 * 3 * 4 = 24

How to Solve:
sort the array using .sort((a, b) => a - b)
reduce sorted by multiplying the accumulator by the currentValue
return result
*/

let arrayOfNums = [1, 2, 3, 4];

const ReduceButGrow = (arr) =>
  arr.sort((a, b) => a - b).reduce((acc, curr) => acc * curr);

console.log(ReduceButGrow(arrayOfNums));
