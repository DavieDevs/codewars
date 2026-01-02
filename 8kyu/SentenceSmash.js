/*

Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
Assumptions
You can assume that you are only given words.
You cannot assume the size of the array.
You can assume that you do get an array.
What We're Testing
We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.

Disclaimer
This is for beginners so we want to test basic loops and string manipulation.
*/

/*
-----------
My Solution
-----------

Takes an array for srtings
"Smash them together"
Return the sentence

Each word will have spaces betweeen.
No space at the beginnig or end of the sentence.

Example:
['hello', 'world', 'this', 'is', 'great'] => 'Hello world this is great'

We are only given words
Don't assume the size of the array
We do get an array.

Loop the array

*/

let example = ["hello", "world", "this", "is", "great"];

const smash = (arr) => arr.join(" ");

smash(example);
