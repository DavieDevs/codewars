/*
Remove First and Last Character
Task
Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

Examples
'eloquent' --> 'loquen'
'country'  --> 'ountr' 
'person'   --> 'erso'
'ab'       --> '' (empty string)
'xyz'      --> 'y'
*/

/*
given a string

return a string where the first and last character is removed 
For strings with 2 characters return an empty string
*/

let example1 = "xyaz";
let example2 = "ab";

const RemoveFirstAndLast = (str) => str.slice(1, -1);

console.log(RemoveFirstAndLast(example1));
console.log(RemoveFirstAndLast(example2));
