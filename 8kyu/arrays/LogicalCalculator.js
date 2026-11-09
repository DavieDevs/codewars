/*
Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).
*/

/*
My Solution

Given array of Boolean and a logical operator

Return a Boolean result based on sequentially applying the operator to the values in the array

Example:
booleans = [True, True, False], operator = "AND"

Output:
True AND True -> True
True AND False -> False
return False
*/

const myArr = [true, true, false];
const op = "AND"

const logicalCalc = (array, op) => {
      if(op === "AND") {
        return array.reduce((pre, curr) => pre && curr);
    } else if(op === "OR") {
         return array.reduce((pre, curr) => pre || curr);
    } else {
      array.reduce((pre, curr) => pre || curr);

      return array.reduce((pre, curr) => pre !== curr);
    }
}

console.log(logicalCalc(myArr, op));