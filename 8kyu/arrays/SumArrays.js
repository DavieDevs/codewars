/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.

*/

/*
-----------
My Solution
-----------

Given a array of nums
Nums can be negative or non-integer

Returns the sum of those nums.
If the array does not containt any numbers then the function should return 0

Example:
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: [-2.398]
Output: -2.398

Example: []
Output: 0

check if array is empty
if so, return 0

Else
reduce array
adding values to accumulator
*/

let myExample = [1, 5.2, 4, 0, -1];

const SumArrays = (arr) =>
  arr.length <= 0 ? 0 : arr.reduce((acc, curr) => acc + curr);

console.log(SumArrays(myExample));

// Here is the highest rated solution:

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// This solution is more concise because it sets an initial value of 0. So if the array was empty, the return value would be the set initial value of 0.

/*
If the array is empty, reduce:
- Never calls the callback function
- immediately returns the intial value
- This value is 0


*/
