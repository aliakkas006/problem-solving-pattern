/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Create arrays to track zero positions in rows and columns
  const zeroRows = new Array(rows).fill(false);
  const zeroCols = new Array(cols).fill(false);

  // Iterate through the matrix to mark rows and columns with zeros
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }

  // Set entire rows to zero
  for (let i = 0; i < rows; i++) {
    if (zeroRows[i]) {
      for (let j = 0; j < cols; j++) matrix[i][j] = 0;
    }
  }

  // Set entire columns to zero
  for (let j = 0; j < cols; j++) {
    if (zeroCols[j]) {
      for (let i = 0; i < rows; i++) matrix[i][j] = 0;
    }
  }
};

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

setZeroes(matrix);
console.log(matrix);
