/*
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

/*
-----------
My Solution
-----------

Given an array of ages
Will be in any order
Ages will be whole numbers
if a baby is 5 months it will be given an age of 0

Return a new array
[youngestAge, oldestAge, difference]

Example:

Input: [12, 8, 35, 3]
Output: [3, 35, 32]
*/

let familyAges = [12, 8, 35, 3];

const DifferenceInAge = (arr) => {
  let differenceArr = [];
  let largestNum = Math.max(...arr);
  let smallestNum = Math.min(...arr);
  let difference = largestNum - smallestNum;

  differenceArr.push(smallestNum);
  differenceArr.push(largestNum);
  differenceArr.push(difference);

  return differenceArr;
};

console.log(DifferenceInAge(familyAges));

// Here is the top rated solution:
function differenceInAges(ages) {
  let max = Math.max(...ages),
    min = Math.min(...ages);
  diff = max - min;

  return [min, max, diff];
}
