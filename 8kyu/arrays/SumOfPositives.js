/*
Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 
1
+
7
+
12
=
20
1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.
*/

/*
-----------
My Solution
-----------

Get an array of nums


Return the sum of all positive numbers
If the array is 0 or if there are no positives then return 0

Example:
Input: [1, -4, 7, 12]
Output: 20 // 1 + 7 + 12 

check if empty
Filter out negative nums
return sum of positive nums
*/

let myArr = [1, -4, 7, 12];
let myNegativeArr = [-1, -3, -5];

const SumOfPositives = (arr) => {
  let filtered = arr.filter((num) => num > 0);

  return filtered.reduce((acc, curr) => acc + curr, 0);
};

console.log(SumOfPositives(myArr));
console.log(SumOfPositives(myNegativeArr));
