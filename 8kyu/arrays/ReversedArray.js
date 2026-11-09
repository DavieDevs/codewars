/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]
*/

/*
-----------
My Solution
-----------
Give a number
Non-negative

Return the digits of this number within an array
in reverse order

Example:
Input:
35231 

Output:
[13253]

Input:
0

Output:
[0]
*/
let num = [35231];

const ReversedArray = (num) => {
  return String(num)
    .split("")
    .reverse()
    .map((item) => Number(item));
};

console.log(ReversedArray(num));
