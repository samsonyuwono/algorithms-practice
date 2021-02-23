"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'robotPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

//input is an array of an array of integers
//output is an integer of the total of unique paths from the left corner to the bottom right corner

//instantiate stack with an empty object
//instantiate 0 as empty variable to return
//base case when and row === matrix.length and column is maxtrix[0].length
//pass i, j position into recursive function
//base cases
//1. out of bounds
//2. visited
//3. dest reached, count++
function robotPaths(matrix) {
  let result = 0;
  let maxRow = matrix.length - 1;
  let maxColumn = matrix[0].length - 1;
  function traverse(row, column) {
    //base cases
    //out of bounds
    if (row < 0 || row > maxRow || column < 0 || column > maxColumn) {
      return null;
    }
    //visited
    if (matrix[row][column] === 1) {
      return null;
    }
    //dest reached
    if (row === maxRow && column === maxColumn) {
      result++;
      return null;
    }
    //visited
    matrix[row][column] = 1;
    //right
    traverse(row, column + 1);
    //left
    traverse(row, column - 1);
    //down
    traverse(row + 1, column);
    //up
    traverse(row - 1, column);

    //backtrack: unmark visited
    matrix[row][column] = 0;
  }
  traverse(0, 0);
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const matrixRows = parseInt(readLine().trim(), 10);

  const matrixColumns = parseInt(readLine().trim(), 10);

  let matrix = Array(matrixRows);

  for (let i = 0; i < matrixRows; i++) {
    matrix[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((matrixTemp) => parseInt(matrixTemp, 10));
  }

  const result = robotPaths(matrix);

  ws.write(result + "\n");

  ws.end();
}
