/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  // If both are null, they are the same
  if (!p && !q) return true;

  // If one is null and the other is not, not the same
  if (!p || !q) return false;

  // If the values are different, not the same
  if (p.val !== q.val) return false;

  // Recursively compare left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
