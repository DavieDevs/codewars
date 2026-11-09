/*
This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

/*
-----------
My Solution
-----------
Given: a string
The string is a sequence of character sequences separated by commas

Return a new string
containing the same character sequence
minus the first and last ones but this time separated by spaces (instead of commas)

Edge Cases:
If string is empty => NULL
If removal of the first and last times would cause a string to be empty => NULL

Example:
"1,2,3" = > "2"
"1,2,3,4" => "2 3"
"1,2,3,4,5" => "2 3 4"

Edge Case Examples:
"" => NULL
"1" => NULL
"1,2" => NULL
*/

let example = "1,2,3";
let edgeExample = "1";

const RemoveFirstLast = (str) =>
  str.split(",").length <= 2 ? null : str.split(",").slice(1, -1).join(" ");

console.log(RemoveFirstLast(example));
console.log(RemoveFirstLast(edgeExample));

//str.length <= 3 ? null :

// Top Rated Solution:
function array(arr) {
  return arr.split(",").slice(1, -1).join(" ") || null;
}
