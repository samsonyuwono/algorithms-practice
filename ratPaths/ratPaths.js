// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

// /*Given a maze, represented by a matrix of bits (values 0 and 1),
// a rat must find a path from index [0][0] to [n-1][m-1].
// The rat can only travel to the right or down, and can only travel on 0 values.
//  1 values represent walls.*/

// /* Input:   maze (Matrix of elements with values either 0 or 1)
// Output:  Array of two-item arrays indicating the path.*/

// /*
// Input:   [[0, 0, 0, 1],
//           [0, 1, 0, 1],
//           [0, 1, 0, 0],
//           [0, 0, 1, 0]]

// Output:  [[0, 0],
//           [0, 1],
//           [0, 2],
//           [1, 2],
//           [2, 2],
//           [2, 3],
//           [3, 3]]
//           i, j position values
//           //print out an array of two item arrays of coordinates indicating the
//           path to get to the bottom right

// //Input: Maze (Matrix is an array of an array), two values 0 and 1. Cannot pass 1 it's wall
// //0 is a number that you can pass through
// //Output is an Array of two-item arrays indication the path
// //Instantiate empty array result variable that will hold coordinates for the path - Path
// //create a traverse helper function
// Base case = if row < 0 || column < 0 return || row > matrix.length || column > matrix[0].length
//matrix[row][col] = 1
//push matrix[row][column] to paths
// //Recursive case - Move right (row, col + 1), Move down (row+ 1, col)
// //return path
// */

function ratPath(matrix) {
  let paths = [];
  let result;
  function traverse(row, column) {
    if (
      row >= matrix.length ||
      column >= matrix[0].length ||
      matrix[row][column] === 1
    ) {
      return;
    }

    paths.push([row, column]);
    //       if row or col are at the bottom right corner,
    if (row === matrix.length - 1 && column === matrix[0].length - 1) {
      //  set result to be a copy of path and return

      result = paths.slice();
      // console.log("result", result)
      return;
    }
    traverse(row, column + 1);
    traverse(row + 1, column);
    // paths.pop()
    // If both recursive calls have returned without finding a path,
    // we know this position is part of a dead end. To prevent future
    //recursive calls from going down this path again, we can toggle the position in the original maze,maze[row][col], to be a 1.
    matrix[row][column] = 1;
  }
  traverse(0, 0);
  return !result ? [-1, -1] : result;
}

let matrix = [
  [0, 0, 0, 1],
  [0, 1, 0, 1],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
];
console.log(ratPath(matrix));
