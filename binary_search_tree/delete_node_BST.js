/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * Main Cases for Deletion:
 * Case 1: Leaf node (no children)
 * Simply remove the node
 * Case 2: Node with one child
 * Connect parent to the child
 * Case 3: Node with two children
 * Find successor (minimum value in right subtree)
 * Copy successor value to current node
 * Delete successor
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = (root, key) => {
  // Base case: if the tree is empty, return null
  if (!root) return null;

  // If the key is smaller than the root's value, recurse on the left subtree
  if (key < root.val) root.left = deleteNode(root.left, key);
  // If the key is larger than the root's value, recurse on the right subtree
  else if (key > root.val) root.right = deleteNode(root.right, key);
  // If the key is equal to the root's value, delete the node
  else {
    // Case 1: Node has no children (leaf node)
    if (!root.left && !root.right) return null;

    // Case 2: Node has only one child
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // Case 3: Node has two children
    let successor = findMin(root.right); // Find the minimum value in right subtree (successor)
    root.val = successor.val; // Replace the root's value with the successor's value
    root.right = deleteNode(root.right, successor.val); // Delete the successor node
  }

  // Return the modified root
  return root;
};

/**
 * Helper function to find minimum value node in a BST
 * @param {TreeNode} node
 * @return {TreeNode}
 */
function findMin(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}
