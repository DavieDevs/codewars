/*

Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
Explanation: The strings s and t can be made identical by:

• Mapping 'e' to 'a'.
• Mapping 'g' to 'd'.

Example 2:
Input: s = "foo", t = "bar"
Output: false
Explanation: The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3: Input: s = "paper", t = "title"
Output: true

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/

/*
Notes:

Given two strings (s,t)
Output: boolean - depending if s and t are isomorphic

Example 1: 
Input: s = "egg", t = "add"
Output is true

Example 2: 
Input: s = "foo", t = "bar"
Output: false

Write function to take in two strings
split "s" into an array
map over "s"
take not of each character and their index
compare results with "t"

if true => true
else => false

*/

let str1 = "egg";
let str2 = "add";

const isIsomorphicString = (s, t) => {
  if (s.length !== t.length) return false;

  const check = (str) => {
    const result = {};

    str.split("").forEach((char, index) => {
      if (!result[char]) {
        result[char] = { count: 0, indexes: [] };
      }
      result[char].count++;
      result[char].indexes.push(index);
    });
    return result;
  };

  const result1 = check(s);
  const result2 = check(t);

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    const c1 = s[i];
    const c2 = t[i];

    if ((sMap[c1] && sMap[c1] !== c2) || (tMap[c2] && tMap[c2] !== c1)) {
      return false;
    }

    sMap[c1] = c2;
    tMap[c2] = c1;
  }

  return true;
};

console.log(isIsomorphicString(str1, str2));

// Paper
// Title
