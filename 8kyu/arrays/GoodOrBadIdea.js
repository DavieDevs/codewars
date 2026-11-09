/*

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

given an array

iterate to check for 'good' ideads or 'bad' ideas.

Return 'Publish!' if there are one or two good ideas
Return 'I smell a series!' if there are more than 2 good ideas
Return 'Fail!' if there are NO good ideas

*/

const example1 = ["bad", "bad", "good", "good", "good", "good"];
const example2 = ["bad", "bad", "bad"];
const example3 = ["bad", "bad", "bad", "good"];

const well = (arr) => {
  `  const result = arr.reduce((acc, curr) => acc + (curr === "good" ? 1 : 0), 0);
  if (result > 2) {
    return "I smell a series!";
  } else if (result >= 1) {
    return "Publish!";
  } else {
    return "Fail!";
  }`;
};
console.log(well(example1));
console.log(well(example2));
console.log(well(example3));
