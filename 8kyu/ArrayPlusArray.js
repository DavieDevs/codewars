/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

// The functions parameters will be two arrays
// return one number
/*
Example: 
let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];

Output => 10

Take two different arrays
apply each to a reduce method and add final result
return result
*/
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

const addTwo = (arr1, arr2) => {
  let combine = [...arr1, ...arr2];
  return combine.reduce((acc, curr) => acc + curr, 0);
};

console.log(addTwo(arr1, arr2));

//Other Solutions that were created by others on Code Wars

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

// I was happy to find a solution that was similiar to mine:
function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}
