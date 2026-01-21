/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

/*
My Solution

given an array of strings

Sort alphabetically

Return the first value
must be a string
should have "***" between each of its letter

Do not remove or add elements from/ to the array.

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n'
*/

let example = [
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
]; // => 'b***i***t***c***o***i***n'

let example2 = [
  "turns",
  "out",
  "random",
  "test",
  "cases",
  "are",
  "easier",
  "than",
  "writing",
  "out",
  "basic",
  "ones",
]; //'a***r***e'

const SortAndStar = (arr) => arr.sort()[0].split("").join("***");

console.log(SortAndStar(example2));
