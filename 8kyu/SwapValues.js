/*
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?

function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}
*/

/*
-----------
My Solution
-----------
Given an array with TWO elements

Return an array with the values swapped (in index)


*/

let myArr = [1, 2];

function swapValues(arr) {
  const temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
}

swapValues(myArr);
