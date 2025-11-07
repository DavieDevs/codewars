/*
HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive

recieve an array full of strings
Each string is a subject

return an array of sroted strings

example:
let subjects = ["Math", "Reading", "History"];

Output => ["History", "Math", "Reading"];


Create a function that takes an array
.sort() that arr
return result

*/

let subjects = ["math", "English", "history", "Art", "Science"];

const sorter = (textbooks) =>
  textbooks.sort((a, b) => {
    const aa = a.toLowerCase();
    const bb = b.toLowerCase();
    if (aa > bb) return 1;
    if (aa < bb) return -1;
    return 0;
  });

console.log(sorter(subjects));
