/**
 * @param {character[][]} grid
 * @return {number}
 *
 * Time Complexity -> O(m * n)
 * Space Complexity -> O(m* n)
 */
const numIslands = (grid) => {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let isIsland = 0;

  // Define DFS function to mark all connected land cells as visited
  function dfs(r, c) {
    // Check if the current cell is out of bounds or not land (water)
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') return;

    // Mark the current cell as visited by setting it to '0'
    grid[r][c] = '0';

    // Explore all four directions (up, down, left, right)
    dfs(r - 1, c); // Up
    dfs(r + 1, c); // Down
    dfs(r, c - 1); // Left
    dfs(r, c + 1); // Right
  }

  // Traverse the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // If the current cell is land, start DFS and increment island count
      if (grid[r][c] === '1') {
        isIsland++;
        dfs(r, c);
      }
    }
  }

  return isIsland;
};
