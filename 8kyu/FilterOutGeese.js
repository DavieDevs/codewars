/*
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array:
["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

So if the following array was passed as an argument:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

The function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

The geese returned should be in the same order as in the initial array passed to the function.

All the strings will be in the same case as those provided. 


*/
let test1 = [
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
];
//["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
let test2 = [
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
];
//["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

let test3 = ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"];
//["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]

let test4 = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//[]

const gooseFilter = (arr) => {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return arr.filter((str) => !geese.includes(str));
};

console.log(gooseFilter(test1));
console.log(gooseFilter(test2));
console.log(gooseFilter(test3));
console.log(gooseFilter(test4));

// I found a brute force solution after I submitted the working solution above:

function gooseFilterBrute(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  var newArray = [];
  for (var i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      newArray.push(birds[i]);
    }
  }
  return newArray;
}

console.log(gooseFilterBrute(test1));
console.log(gooseFilterBrute(test2));
console.log(gooseFilterBrute(test3));
console.log(gooseFilterBrute(test4));
