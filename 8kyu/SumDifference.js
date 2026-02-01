/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

/*
MY Solution

get an array of num

Sort the array

difference of consecutive pairs
add the results

return the result
If the array is empty or only has one element => 0
*/

let example = [2, 1, 10];

const SumDifference = (arr) => {
  arr.length < 2
    ? 0
    : arr
        .sort((a, b) => b - a)
        .map((curr, index, array) => {
          if (index < array.length - 1) {
            return curr - array[index + 1];
          }
          return 0;
        })
        .reduce((curr, acc) => curr + acc);
};
console.log(SumDifference(example));

// Top rated solution. This one is great.
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
