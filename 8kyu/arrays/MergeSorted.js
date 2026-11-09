/*
You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

The resulting array is sorted in ascending order.

Any duplicate values are removed, so each integer appears only once.

If both input arrays are empty, return an empty array.

No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
*/

/*
-----------
My Solution
-----------

Given two sroted arrays
They contain only integers
Could be sorted ascending or descending

Return one array merging the given two arrays
Should be in ascending order
There should be no duplicate values

Edge case:
If both arrays are given return an empty array

All arrays will have 0 or more integers - no funny business
*/

let myArr1 = [1, 2, 3, 4, 5];
let myArr2 = [6, 7, 8, 9, 10];

let myZero = [];
let myZero2 = [];

const MergeSorted = (arr1, arr2) => {
  let merged = [...arr1, ...arr2];
  let uniqueSet = new Set(merged.sort((a, b) => a - b));
  let convertArr = [...uniqueSet];
  return merged.length === 0 ? [] : convertArr;
};

console.log(MergeSorted(myArr1, myArr2));
console.log(MergeSorted(myZero, myZero2));

// Top rated solution
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}
