/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;

  // Directions for 4-directional adjacency
  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
  ];

  // Queue to store the positions of rotten oranges
  let queue = [];
  let freshOranges = 0;

  // Initialize the queue and count fresh oranges
  for (i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
      // Add rotten oranges to the queue
      if (grid[i][j] === 2) queue.push([i, j]);

      // Count fresh oranges
      if (grid[i][j] === 1) freshOranges++;
    }
  }

  // If there are no fresh oranges, return 0
  if (freshOranges === 0) return 0;

  let minutes = 0;

  // Perform BFS
  while (queue.length > 0 && freshOranges > 0) {
    const levelSize = queue.length;
    minutes++;

    // Process all oranges at the current level
    for (i = 0; i < levelSize; i++) {
      const [row, col] = queue.shift();

      // Check all 4 directions
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        // Check if the new position is within the grid and has a fresh orange
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === 1
        ) {
          // Mark the orange as rotten and add it to the queue
          grid[newRow][newCol] = 2;
          queue.push([newRow, newCol]);
          freshOranges--;
        }
      }
    }
  }

  // If there are still fresh oranges left, return -1
  return freshOranges === 0 ? minutes : -1;
};
