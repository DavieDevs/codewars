/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

/*
-----------
My Solution
-----------

Given array of strings
No given arrays will be empty

Remove every second element from the array
Always keep first element the remove the next element

Example

Input: 
["Keep", "Remove", "Keep", "Remove", "Keep", ...]

Output:
["Keep", "Keep", "Keep", ...]
*/

let testArr = ["Keep", "Remove", "Keep", "Remove", "Keep"];

const removeElement = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  return result;
};

console.log(removeElement(testArr));

//top rated solution:

function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}
