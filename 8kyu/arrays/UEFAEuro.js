/**
 Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
 */

/*
My Solution
Given an array of strings
And an array of nums

return the strings with the following format:

Input:
['Germany', 'Ukraine'],[2, 0]) 

Output:
"At match Germany - Ukraine, Germany won!"
*/

const UEFAEuro = (arr1, arr2) => {
  return arr2[0] === arr2[1]
    ? `At match ${arr1[0]} - ${arr1[1]}, teams played draw.`
    : `At match ${arr1[0]} - ${arr1[1]}, ${arr2.reduce((acc, curr) =>
        acc > curr ? arr1[0] : arr1[1]
      )} won!`;
};
console.log(UEFAEuro(["Germany", "Ukraine"], [2, 0]));
console.log(UEFAEuro(["Belgium", "Italy"], [0, 2]));
console.log(UEFAEuro(["Portugal", "Iceland"], [1, 1]));
