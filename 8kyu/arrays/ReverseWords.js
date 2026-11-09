/*
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/
/*
My Solution

Given a string

Return a string that contains the givens strings words in reverse
words are separated by one space exactly with no leading or trailing spaces
*/

let myStr = "The greatest victory is that which requires no battle";

const reverseString = (str) => str.split(" ").reverse().join(" ");

console.log(reverseString(myStr));
