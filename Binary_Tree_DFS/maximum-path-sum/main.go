package main

import (
	"math"
)

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxPathSum(root *TreeNode) int {
	maxSum := math.MinInt32 // Smallest 32-bit int

	var dfs func(node *TreeNode) int

	dfs = func(node *TreeNode) int {
		if node == nil {
			return 0
		}

		// Get maximum path sums from left and right children
		leftMax := max(dfs(node.Left), 0)
		rightMax := max(dfs(node.Right), 0)

		// Calculate path through current node
		currPath := node.Val + leftMax + rightMax

		// Update global max sum
		maxSum = max(maxSum, currPath)

		// Return the maximum path that can be extended upwards
		return node.Val + max(leftMax, rightMax)
	}

	dfs(root)

	return maxSum

}

func max(x, y int) int {
	if x > y {
		return x
	}

	return y
}
