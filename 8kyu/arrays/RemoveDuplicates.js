/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
*/

/*
My Solution
given an array
array contains non negative numbers

return array of removed duplicated


*/

let example = [1, 1, 2];

const RemoveDuplicates = (arr) => [...new Set(arr)];

console.log(RemoveDuplicates(example));
