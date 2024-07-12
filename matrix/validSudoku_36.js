/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  // Arrays to store the presence of the digits in rows, columns and subgrids
  const rowSet = new Array(9).fill(null).map(() => new Set());
  const colSet = new Array(9).fill(null).map(() => new Set());
  const subgridSet = new Array(9).fill(null).map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const digit = board[i][j];

      if (digit !== '.') {
        // Check row
        if (rowSet[i].has(digit)) return false;
        rowSet[i].add(digit);

        // Check column
        if (colSet[j].has(digit)) return false;
        colSet[j].add(digit);

        // Check subgrid
        const subgridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (subgridSet[subgridIndex].has(digit)) return false;
        subgridSet[subgridIndex].add(digit);
      }
    }
  }

  return true;
};

const sudokuBoard = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(sudokuBoard));

/**
 * Time Complexity -> O(1)
 * Space Complexity -> O(1)
 */
