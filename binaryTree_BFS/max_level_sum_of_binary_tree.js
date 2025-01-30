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
const maxLevelSum = (root) => {
  // If the tree is empty, return 0
  if (!root) return 0;

  // Initialize a queue for BFS and add the root node
  let queue = [root];
  let maxSum = -Infinity; // Track the maximum sum
  let maxLevel = 0; // Track the level with the maximum sum
  let currentLevel = 0; // Track the current level

  // Perform BFS
  while (queue.length > 0) {
    currentLevel++;
    let levelSize = queue.length;
    let levelSum = 0; // Sum of node values at the current level

    // Traverse all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      // Remove the front node from the queue
      let currentNode = queue.shift();

      // Add the node's value to the level sum
      levelSum += currentNode.val;

      // Add the left and right children of the current node to the queue
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    // Update the maximum sum and level if the current level sum is greater
    if (levelSum > maxSum) {
      maxSum = levelSum;
      maxLevel = currentLevel;
    }
  }

  // Return the level with the maximum sum
  return maxLevel;
};
