/*
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task:

Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
name is a property of Player objects, e.g Player.name

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

*/

/*
-----------
My Solution
-----------

Given: array of Objects and their position

Return the chosen Player.name (property of Player)

Example:
duck_duck_goose([a, b, c, d], 1) => a.name
duck_duck_goose([a, b, c, d], 5) => a.name
duck_duck_goose([a, b, c, d], 4) => d.name


*/

let players = [
  { Number: 1, name: "a" },
  { Number: 2, name: "b" },
  { Number: 3, name: "c" },
  { Number: 4, name: "d" },
];

const duck_duck_goose = (arr, goose) => {
  const index = (goose - 1) % arr.length;
  return arr[index].name;
};

console.log(duck_duck_goose(players, 5));
console.log(duck_duck_goose(players, 6));
