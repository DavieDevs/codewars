/*
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

/*
My Solution

given a str


return an array into words(strings)

Example:

Input: "Robin Singh"

Output: ["Robin", "Singh"];
*/

const example = "Damian Padilla";

const ConvertStrArr = (arr) => arr.split(" ");

console.log(ConvertStrArr(example));
