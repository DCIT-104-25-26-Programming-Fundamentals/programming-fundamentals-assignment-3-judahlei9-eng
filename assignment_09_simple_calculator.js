// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
const readlineSync = require('readline-sync');

function add(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}

function subtract(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
  if (secondOperand === 0) {
    return null;
  }
  return firstOperand / secondOperand;
}

function modulus(firstOperand, secondOperand) {
  if (secondOperand === 0) {
    return null;
  }
  return firstOperand % secondOperand;
}

function exponentiate(firstOperand, secondOperand) {
  return firstOperand ** secondOperand;
}

function printMenu() {
  console.log('============================');
  console.log('     SIMPLE CALCULATOR');
  console.log('============================');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Modulus');
  console.log('6. Exponentiation');
  console.log('7. Quit');
}

function runOperation(menuChoice, operationSymbol, operationFn, allowsZeroDivisor) {
  const firstOperand = readlineSync.questionFloat('Enter first number : ');
  const secondOperand = readlineSync.questionFloat('Enter second number: ');

  if (!allowsZeroDivisor && secondOperand === 0) {
    console.log('Error: Cannot divide by zero.');
    return;
  }

  const outcome = operationFn(firstOperand, secondOperand);
  console.log(`Result: ${firstOperand} ${operationSymbol} ${secondOperand} = ${outcome.toFixed(2)}`);
}

function main() {
  let menuChoice;

  do {
    printMenu();
    menuChoice = readlineSync.questionInt('Select an operation (1-7): ');

    switch (menuChoice) {
      case 1:
        runOperation(menuChoice, '+', add, true);
        break;
      case 2:
        runOperation(menuChoice, '-', subtract, true);
        break;
      case 3:
        runOperation(menuChoice, '*', multiply, true);
        break;
      case 4:
        runOperation(menuChoice, '/', divide, false);
        break;
      case 5:
        runOperation(menuChoice, '%', modulus, false);
        break;
      case 6:
        runOperation(menuChoice, '**', exponentiate, true);
        break;
      case 7:
        console.log('Goodbye!');
        break;
      default:
        console.log('Error: Please choose a valid option (1-7).');
    }
  } while (menuChoice !== 7);
}

main();
// =============================================================================


