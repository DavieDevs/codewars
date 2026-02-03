/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

/*
My Solution

Given array of ints

return new array with each value doubled

input:
[1,2,3,4]

output: 
[2,4,6,8]
*/

let example = [1, 2, 3, 4];

const doubleArr = (arr) => arr.map((num) => num * 2);

console.log(doubleArr(example));
