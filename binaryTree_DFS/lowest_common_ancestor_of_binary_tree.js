/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * Key Concepts:
    * LCA is the deepest node that is an ancestor of both p and q
    * A node can be its own ancestor
    * The tree is not necessarily a binary search tree

* Algorithm Steps:
    * Base case: return root if it's null or equals p or q
    * Recursively search left and right subtrees
    * If both subtrees return a node, current node is LCA
    * If one subtree returns a node, that's the LCA
    * If neither returns a node, return null
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  // Base case: if the root is null or matches p or q, return root
  if (!root || root === p || root === q) return root;

  // Recursively search for p and q in the left and right subtrees
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // If both left and right are not null, p and q are in different subtrees, so root is the LCA
  if (left && right) return root;

  // If one of the subtrees is null, return the other subtree
  return left || right;
};
