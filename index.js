// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function shuffleArray(arr) {
  const mid = arr.length / 2; // Find the midpoint

  const shuffledArray = [];

  for (let i = 0; i < mid; i++) {

    shuffledArray.push(arr[i]); // Add element from the first half

    shuffledArray.push(arr[i + mid]); // Add corresponding element from the second half
  }

  return shuffledArray;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(`Original array: [${arr}]`);
console.log(`Shuffled array: [${shuffleArray(arr)}]`);