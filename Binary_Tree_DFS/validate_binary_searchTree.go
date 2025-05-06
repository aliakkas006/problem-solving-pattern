/* 
✅ Solution Approach (Recursive with Min/Max Bounds):
1. Start at the root node.
2. For each node, keep track of a valid range for its value:
    - Initially, the range is (-∞, ∞).
    - Left child must lie in the range (min, node.Val)
    - Right child must lie in the range (node.Val, max)
3. If a node violates the range, return false.
4. Recursively validate left and right subtrees with updated ranges.
*/

package main

import "math"

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isValidBST(root *TreeNode) bool {
    return validate(root, math.MinInt64, math.MaxInt64)
}

func validate(node *TreeNode, min int, max int) bool {
    if node == nil {
        return true // Empty trees are valid BSTs
    }

    // Check if the current node's value is within the valid range
    if node.Val <= min || node.Val >= max {
        return false
    }

    // Recursively check left and right subtrees with updated ranges
    return validate(node.Left, min, node.Val) && validate(node.Right, node.Val, max)
}

/* 
🔍 Explanation Recap:
* validate takes a node and a range (min, max) the node's value must be within.
* For the left child: new max is node.Val
* For the right child: new min is node.Val
* If all nodes satisfy the condition, it returns true.
*/