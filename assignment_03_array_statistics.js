// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
const readlineSync = require('readline-sync');

function calculateSum(values) {
  let runningTotal = 0;
  for (let index = 0; index < values.length; index++) {
    runningTotal += values[index];
  }
  return runningTotal;
}

function calculateAverage(values) {
  return calculateSum(values) / values.length;
}

function findMaximum(values) {
  let highest = values[0];
  for (let index = 1; index < values.length; index++) {
    if (values[index] > highest) {
      highest = values[index];
    }
  }
  return highest;
}

function findMinimum(values) {
  let lowest = values[0];
  for (let index = 1; index < values.length; index++) {
    if (values[index] < lowest) {
      lowest = values[index];
    }
  }
  return lowest;
}

function main() {
  const entryCount = readlineSync.questionInt('How many numbers? ');

  if (entryCount <= 0) {
    console.log('Error: Please enter a positive number of values.');
    return;
  }

  const values = [];
  for (let index = 0; index < entryCount; index++) {
    values.push(readlineSync.questionInt(`Enter number ${index + 1}: `));
  }

  console.log('\nResults:');
  console.log(`Sum:     ${calculateSum(values)}`);
  console.log(`Average: ${calculateAverage(values)}`);
  console.log(`Maximum: ${findMaximum(values)}`);
  console.log(`Minimum: ${findMinimum(values)}`);
}

main();
// =============================================================================


