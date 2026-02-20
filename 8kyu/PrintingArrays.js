/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level

Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕
*/

/*
My Solution
Get an array of elements

Return String with comma delimited elements in the same order
*/

let example = ["h", "o", "l", "a"];

const PrintingArrays = (arr) => arr.join(",");

console.log(PrintingArrays(example));
