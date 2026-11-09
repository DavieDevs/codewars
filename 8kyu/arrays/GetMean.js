/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

/*
My SOlution
Get array of nums
return the average

note: array will never be empty
*/

let example = [2, 2, 2, 2];
let example2 = [1, 1, 1, 1, 1, 1, 1, 2];

const GetMean = (arr) =>
  Math.floor(arr.reduce((acc, curr) => acc + curr) / arr.length);

console.log(GetMean(example));
console.log(GetMean(example2));

// This is the top solution (I did basically the same thing)

function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}