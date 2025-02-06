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
  // Base case: if the root is null, the depth is 0
  if (root === null) {
    return 0;
  }

  // Recursively calculate the depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // The maximum depth is the maximum of the left and right depths, plus 1 for the root
  return Math.max(leftDepth, rightDepth) + 1;
};
