/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 

*/

/*
    My Solution

    array of nums

    return square of given nums then add together 
*/

let example = [1, 2, 2];

const SquareNSum = (arr) =>
  arr.map((item) => item ** 2).reduce((acc, curr) => acc + curr, 0);

console.log(SquareNSum(example));

// Top rated solution:

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
