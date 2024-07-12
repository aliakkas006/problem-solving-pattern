/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  const result = [];

  while (matrix.length > 0) {
    // Travarse the top row
    result.push(...matrix.shift());

    // Travarse the right column
    for (let row of matrix) {
      if (row.length > 0) result.push(row.pop());
    }

    // Travarse the bottom row in reverse
    if (matrix.length > 0) result.push(...matrix.pop().reverse());

    // Travarse the left column in reverse
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length > 0) result.push(matrix[i].shift());
    }
  }
  return result;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(matrix));
