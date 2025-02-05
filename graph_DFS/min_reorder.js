/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = (n, connections) => {
  // Build the graph as an adjacency list
  const graph = new Array(n).fill().map(() => []);

  for (const [from, to] of connections) {
    // Add the original road (a -> b)
    graph[from].push([to, 1]); // 1 indicates the road needs to be reversed

    // Add the reverse road (b -> a)
    graph[to].push([from, 0]); // 0 indicates the road does not need to be reversed
  }

  // Perform DFS starting from city 0
  const visited = new Set();
  let result = 0;

  function dfs(city) {
    // Mark the current city as visited
    visited.add(city);

    // Traverse all neighbors of the current city
    for (const [neighbor, needsReversal] of graph[city]) {
      if (!visited.has(neighbor)) {
        // If the road needs to be reversed, increment the result
        result += needsReversal;

        // Recursively visit the neighbor
        dfs(neighbor);
      }
    }
  }

  // Start DFS from city 0
  dfs(0);

  return result;
};
