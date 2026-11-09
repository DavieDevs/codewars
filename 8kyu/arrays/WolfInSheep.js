/*
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input:
Output: "Pls go away and stop eating my sheep"

*/

const example1 = ["sheep", "sheep", "sheep", "wolf", "sheep"];
const example2 = ["sheep", "sheep", "wolf"];

const checkWolf = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "wolf") {
      const reverseIndex = arr.length - 1 - i;

      if (reverseIndex === 0) {
        return "Pls go away and stop eating my sheep";
      } else {
        return `Oi! Sheep number ${reverseIndex}! You are about to be eaten by a wolf!`;
      }
    }
  }
};

console.log(checkWolf(example1));
console.log(checkWolf(example2));

// this is the top rated solution and is much cleaner than the solution i provided.

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep(example1));
console.log(war(example2));
