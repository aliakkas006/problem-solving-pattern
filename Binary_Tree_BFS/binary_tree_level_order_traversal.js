/* 
 * Input:

      3
     / \
    9   20
        / \
       15  7
*/

/* 
 * Output:
[
  [3],
  [9, 20],
  [15, 7]
]
*/

/* 
🚀 Concept: BFS (Breadth-First Search) using a Queue.
    * This is perfect for going level by level, because we finish one level before starting the next.
*/

/* 
✅ Steps (Algorithm):
1. Start with the root in the queue.
2. While the queue is not empty:
    - Note the number of nodes at the current level (levelSize = len(queue)).
    - For each of these nodes:
        - Pop it from the queue.
        - Add its value to a list for this level.
        - If it has children, add them to the queue.
    - Add the level list to your result list.


*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  const result = [];

  function traverse(node, level) {
    if (!node) return;

    if (!result[level]) result[level] = [];

    result[level].push(node.val);

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0);

  return result;
};
