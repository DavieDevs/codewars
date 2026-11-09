/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10]
*/

/*
Give two numbers
they are positive
Both greater than 0

Return an array
n multiples of x

input:
x = 1
n = 10

Output: 
[1,2,3,4,5,6,7,8,9,10]
*/
let multiple = 2;
let total = 5;

const CountByX = (x, n) => {
  let arr = [];
  for (let i = x; arr.length <= n - 1; i += x) {
    console.log(i);
    arr.push(i);
  }

  return arr;
};

console.log(CountByX(multiple, total));

// This was the top rated solution
function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
