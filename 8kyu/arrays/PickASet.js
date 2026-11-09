/*
Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/

/*
PREP

Given an array (sequence)
Given n for num () (default is 1) 

Return an array with n elements

example
let arr = ['a', 'b', 'c', 'd', 'e'];

first(arr) => ['a']
first(arr, 1) => ['a', 'b'];


*/

let arr = ["a", "b", "c", "d", "e"];

const first = (arr, n = 1) => arr.slice(0, n).map((item) => item);

console.log(first(arr, 2));

// this is the top rated
function first(arr, n = 1) {
  return arr.slice(0, n);
}
