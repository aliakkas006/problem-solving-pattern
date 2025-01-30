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
 * @return {number[]}
 */
const rightSideView = (root) => {
  // If the tree is empty, return an empty array
  if (!root) return [];

  // Initialize a queue for BFS and add the root node
  let queue = [root];
  let result = [];

  // Perform BFS
  while (queue.length > 0) {
    // Get the number of nodes at the current level
    let levelSize = queue.length;

    // Traverse all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      // Remove the front node from the queue
      const currentNode = queue.shift();

      // If this is the last node in the current level, add it to the result
      if (i === levelSize - 1) result.push(currentNode.val);

      // Add the left and right children of the current node to the queue
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  // Return the right side view
  return result;
};
