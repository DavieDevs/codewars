/*
Sum all the numbers of a given array, except the highest and the lowest element (by value not index)

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value

mind the input validation

array of nums (whole nums)
If an empty value (null) is given instead of an array, or the given array is empty, or only has 1 element: return 0

Output => Sum (excluding the highest and lowest num)

Example
[6, 2, 1, 8, 10] => 16 (6 + 2 + 8) - excluding {highest: 1, Lowest: 10}

You can find the highest and lowest by using
Math.max(...arr)
Math.min(...arr)

*/

const sumWithout = (arr) => {
  if (!Array.isArray(arr) || arr.length <= 2) return 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  arr.splice(arr.indexOf(max), 1);
  arr.splice(arr.indexOf(min), 1);

  return arr.reduce((acc, curr) => acc + curr);
};

console.log(sumWithout([6, 2, 1, 8, 10]));
