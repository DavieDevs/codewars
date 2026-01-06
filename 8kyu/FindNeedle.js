/*

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"
*/

/*
-----------
My Solution
-----------

Given an array of strings
This array contains one str: "needle"

After finding the string return a string:
"found the needle at position "  + the index it was at

Example:
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

Output:
"found the needle at position 5"
*/

let haystack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];

const findNeedle = (arr) => {
  let position = arr.indexOf("needle");
  return `found the needle at position ${position}`;
};

console.log(findNeedle(haystack));

// This is the top rated solution:
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
