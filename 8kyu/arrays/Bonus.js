/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with £ (= "\u00A3", JS, Go, Java, Scala, and Julia), $ (C, C++, C#, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or ¥ (Rust).
*/

/*
My Solution

Given two arguments
Salary -> integer
Bonus -> boolean

if bonus is true salary is multiplied by 10 
If bonus is false return salary only

Return the total figure the individual will receive as a string.
*/
// assert.strictEqual(bonusTime(10000, true), "£100000");
// assert.strictEqual(bonusTime(25000, true), "£250000");
// assert.strictEqual(bonusTime(10000, false), "£10000");
// assert.strictEqual(bonusTime(60000, false), "£60000");

const BonusTime = (salary, bonus) =>
  bonus ? "£:" + (salary * 10).toString() : "£:" + salary.toString();

console.log(BonusTime(10000, true));
