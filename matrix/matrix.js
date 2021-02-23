function matrixSpiral(matrix) {
  let rowMin = 0;
  let colMin = 0;
  let rowMax = matrix.length - 1;
  let colMax = matrix[0].length - 1;
  let results = [];

  while (rowMin <= rowMax && colMin <= colMax) {
    for (let i = colMin; i <= colMax; i++) {
      results.push(matrix[rowMin][i]);
    }
    rowMin++;
    for (let i = rowMin; i <= rowMax; i++) {
      results.push(matrix[i][colMax]);
    }
    colMax--;
    if (rowMin <= rowMax) {
      for (let i = colMax; i >= colMin; i--) {
        results.push(matrix[rowMax][i]);
      }
    }
    rowMax--;
    if (colMin <= colMax) {
      for (let i = rowMax; i >= rowMin; i--) {
        results.push(matrix[i][colMin]);
      }
    }
    colMin++;
  }
  return results;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
];

console.log(matrixSpiral(matrix));

//input is matrix array;
//output array with matrix in a flat one row array
//Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
//set result array
//set colMin + row min to 0
//set colMax to matrix.length
//set rowMax to matrix[0].length
//while rowMin <= rowMax && colMin <= colMax
//loop through first row of array then push elements
//loop through up through down rightmost side of matrix then push elements
//loop through bottom row of matrix from right to left then push elements
//loop through left side of matrix stopping at the very first element then push elements
//loop through 2nd row of array stopping at last element in 2nd row of matrix
//return result
