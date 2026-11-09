/*

An AI has infected a text with a character!!

This text is now fully mutated to this character.

Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"*/

/*
given a string and a character 

Return the texts so that all the text has been replace with the character
*/

let example = "abc";

const contamination = (str, char) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += char;
  }

  return newStr;
};

console.log(contamination(example, "z"));
