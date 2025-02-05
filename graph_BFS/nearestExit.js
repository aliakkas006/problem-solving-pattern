/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = (maze, entrance) => {
  const rows = maze.length;
  const cols = maze[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [[entrance[0], entrance[1], 0]]; // Fix: Properly initialize as an array of arrays

  // Mark entrance as visited
  maze[entrance[0]][entrance[1]] = '+';

  while (queue.length) {
    const [row, col, steps] = queue.shift();

    for (const [dr, dc] of directions) {
      const nr = row + dr;
      const nc = col + dc;

      // Check if it's a valid cell to move into
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        maze[nr][nc] === '.'
      ) {
        // If it's an exit (not entrance), return the steps
        if (nr === 0 || nr === rows - 1 || nc === 0 || nc === cols - 1) {
          return steps + 1;
        }

        // Mark visited and add to queue
        maze[nr][nc] = '+';
        queue.push([nr, nc, steps + 1]);
      }
    }
  }

  return -1; // No exit found
};
