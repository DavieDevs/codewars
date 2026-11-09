/**
 Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
 */

/*
My Solution

Get an array
Multiple of their own index

return a new array consisting of elements which are multiples of their own index

Example
input:
[22, -6, 32, 82, 9 ,25]

Output:
[-6, 32, 25]

*/

const example = [22, -6, 32, 82, 9, 25];
const text2 = [0, 2, 3, 6, 9];

const MultipleOfIndex = (arr) =>
  arr.filter((item, index) => item == 0 || item % index === 0);

console.log(MultipleOfIndex(example));

console.log(MultipleOfIndex(text2));
