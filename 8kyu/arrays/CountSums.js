/*
Description:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


Get an arr of ints

Returning an array
 - First element is the count of POSITIVE NUMS
 - Second element is the SUM of the negative nums.
 - 0 is neither positive nor negative

Edge Cases:
 - if input is empty arrat or is null - then return an empty array.

 let arr = [1,-2,3,-4]
 return => [2, -6]

 create function takes in array

*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

const countPositiveSumNegative = (arr) => {
  if (!arr || arr.length === 0) return [];

  return arr.reduce(
    ([count, sum], curr) => {
      if (curr > 0) count++;
      else if (curr < 0) sum += curr;
      return [count, sum];
    },
    [0, 0]
  );
};

console.log(countPositiveSumNegative(arr));
