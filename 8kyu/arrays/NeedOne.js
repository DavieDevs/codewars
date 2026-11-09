/**
 You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.
 */

/**
 Given: Array (a), value (x)
 
 check if array contains the value 

 return true if so
 */
let example = [66, 101];
let example2 = [101, 45, 75, 105, 99, 107];
let example3 = ["t", "e", "s", "t"];
let example4 = ["what", "a", "great", "kata"];

const NeedOne = (a, x) => a.reduce((acc, curr) => acc || curr === x, false);

console.log(NeedOne(example, 66));
console.log(NeedOne(example2, 76));
console.log(NeedOne(example3, "e"));
console.log(NeedOne(example4, "kat"));
