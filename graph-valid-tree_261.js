/**
 * Using Union Find algorithm:
 * We create a UnionFind data structure to keep track of connected components.
 * We iterate through the edges and for each edge, check if the two nodes belong to the same connected component. If they do, a cycle is detected, and the graph is not a valid tree.
 * If there are exactly n-1 edges in the graph, and no cycles are found, the graph is a valid tree.
 * 
 * Time Complexity -> O(nlogn)
 * Space Complexity -> O(n)
 */

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
  }

  find(x) {
    if (x === this.parent[x]) return x;
    this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  union(x, y) {
    const root_x = this.find(x);
    const root_y = this.find(y);
    if (root_x !== root_y) this.parent[root_x] = root_y;
  }
}

const validTree = (n, edges) => {
  if (n - 1 !== edges.length) return false;
  const uf = new UnionFind(n);

  for (const [u, v] of edges) {
    if (uf.find(u) === uf.find(v)) return false;
    uf.union(u, v);
  }

  return true;
};

// Example usage:
const n = 5;
const edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
];

console.log('Valid Graph Tree: ', validTree(n, edges));
