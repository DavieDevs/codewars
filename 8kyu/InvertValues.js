/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array.


*/

/*
-----------
My Solution
-----------
Given an array of numbers
Assume that all values are integers
Do not mutate the input array

return the additive inverse of each (the number added to get zero - the opposite)
Each positive becomes negative 
Each negative becomes positive

Example:

[1,2,3,4,5] -> [-1,-2,-3,-4,-5]
*/

let example = [1, 2, 3, 4, 5];

const InvertValues = (arr) => arr.map((item) => -item);

console.log(InvertValues(example));
