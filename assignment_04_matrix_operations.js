// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
const readlineSync = require('readline-sync');

function readMatrix(rowCount, colCount, label) {
  const matrix = [];
  for (let row = 0; row < rowCount; row++) {
    const line = readlineSync.question(`Enter row ${row + 1}${label}: `);
    matrix.push(line.trim().split(/\s+/).map(Number));
  }
  return matrix;
}

function printMatrix(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    console.log(matrix[row].map(value => String(value).padStart(4)).join(' '));
  }
}

function transposeMatrix(matrix) {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const transposed = [];

  for (let col = 0; col < colCount; col++) {
    const newRow = [];
    for (let row = 0; row < rowCount; row++) {
      newRow.push(matrix[row][col]);
    }
    transposed.push(newRow);
  }

  return transposed;
}

function addMatrices(matrixA, matrixB) {
  const sum = [];
  for (let row = 0; row < matrixA.length; row++) {
    const newRow = [];
    for (let col = 0; col < matrixA[row].length; col++) {
      newRow.push(matrixA[row][col] + matrixB[row][col]);
    }
    sum.push(newRow);
  }
  return sum;
}

function multiplyMatrices(matrixA, matrixB) {
  const rowCountA = matrixA.length;
  const colCountA = matrixA[0].length;
  const colCountB = matrixB[0].length;
  const product = [];

  for (let row = 0; row < rowCountA; row++) {
    const newRow = [];
    for (let col = 0; col < colCountB; col++) {
      let cellTotal = 0;
      for (let shared = 0; shared < colCountA; shared++) {
        cellTotal += matrixA[row][shared] * matrixB[shared][col];
      }
      newRow.push(cellTotal);
    }
    product.push(newRow);
  }

  return product;
}

function runTranspose() {
  const rowCount = readlineSync.questionInt('Enter number of rows: ');
  const colCount = readlineSync.questionInt('Enter number of columns: ');
  const matrix = readMatrix(rowCount, colCount, '');

  console.log('\nOriginal Matrix:');
  printMatrix(matrix);
  console.log('\nTransposed Matrix:');
  printMatrix(transposeMatrix(matrix));
}

function runAddition() {
  const rowCount = readlineSync.questionInt('Enter number of rows: ');
  const colCount = readlineSync.questionInt('Enter number of columns: ');

  console.log('Matrix A:');
  const matrixA = readMatrix(rowCount, colCount, '');
  console.log('Matrix B:');
  const matrixB = readMatrix(rowCount, colCount, '');

  console.log('\nSum:');
  printMatrix(addMatrices(matrixA, matrixB));
}

function runMultiplication() {
  const rowCountA = readlineSync.questionInt('Enter rows for Matrix A: ');
  const colCountA = readlineSync.questionInt('Enter columns for Matrix A (= rows for B): ');
  const colCountB = readlineSync.questionInt('Enter columns for Matrix B: ');

  console.log('Matrix A:');
  const matrixA = readMatrix(rowCountA, colCountA, '');
  console.log('Matrix B:');
  const matrixB = readMatrix(colCountA, colCountB, '');

  console.log('\nProduct (A x B):');
  printMatrix(multiplyMatrices(matrixA, matrixB));
}

function main() {
  console.log('--- Part A: Transpose ---');
  runTranspose();

  console.log('\n--- Part B: Addition ---');
  runAddition();

  console.log('\n--- Part C: Multiplication ---');
  runMultiplication();
}

main();
// =============================================================================



