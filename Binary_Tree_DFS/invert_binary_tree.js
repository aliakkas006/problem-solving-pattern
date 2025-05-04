/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  if (!root) return null;

  // Swap lef and right children
  [root.left, root.right] = [root.right, root.left];

  // Recursively invert the sub-trees
  invertTree(root.left);
  invertTree(root.right);

  return root;
};
