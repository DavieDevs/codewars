/*

Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/

/*
Given 2 sorted arrays

Merge and return the 2 given arrays into one array
The merged array can only contain integers
Must be sorted
conain NO duplicates.

Input:
[1, 3, 5] 
[2, 4, 6]

Output:
[1, 2, 3, 4, 5, 6]);
*/

let myArr1 = [1, 3, 5];
let myArr2 = [2, 4, 6];

const MergeSorted = (arr1, arr2) => {
  let merged = [...arr1, ...arr2];
  let uniqueSet = new Set(merged.sort((a, b) => a - b));
  let convertArr = [...uniqueSet];
  return convertArr;
};

console.log(MergeSorted(myArr1, myArr2));

// top rated solution:
function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a, b) => a - b);
}
