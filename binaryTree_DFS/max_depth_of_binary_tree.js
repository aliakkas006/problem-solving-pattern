/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  // Base case: empty tree
  if (!root) return 0;

  const queue = [[root, 1]]; //[node, depth]
  let maxDepth = 0;

  while (queue.length > 0) {
    const [node, depth] = queue.shift();
    maxDepth = Math.max(maxDepth, depth);

    if (node.left) queue.push([node.left, depth++]);
    if (node.right) queue.push([node.right, depth++]);
  }

  return maxDepth;
};
