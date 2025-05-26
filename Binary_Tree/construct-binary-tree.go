package main

import "fmt"

/**
 * Definition for a binary tree node.
 */
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func buildTree(preorder []int, inorder []int) *TreeNode {
	if len(preorder) == 0 || len(inorder) == 0 {
		return nil
	}

	// Create a map to store value to index mapping for inorder
	inorderMap := make(map[int]int)
	for i, val := range inorder {
		inorderMap[val] = i
	}

	return helper(preorder, inorderMap, 0, 0, len(inorder)-1)

}

// Helper function for recursive construction
func helper(preorder []int, inorderMap map[int]int, preStart, inStart, inEnd int) *TreeNode {
	if preStart >= len(preorder) || inStart > inEnd {
		return nil
	}

	// Current root is the first element in preorder
	rootVal := preorder[preStart]
	root := &TreeNode{Val: rootVal}

	// Find root's position in inorder
	inRoot := inorderMap[rootVal]

	// Build left subtree
	root.Left = helper(preorder, inorderMap, preStart+1, inStart, inRoot-1)

	// Build right subtree
	// preStart = preStart + (number of nodes in left subtree) + 1
	root.Right = helper(preorder, inorderMap, preStart+(inRoot-inStart)+1, inRoot+1, inEnd)

	return root
}

// function to print the tree (inorder)
func printInorder(node *TreeNode) {
	if node == nil {
		return
	}

	printInorder(node.Left)
	fmt.Print(node.Val, " ")
	printInorder(node.Right)
}

func main() {
	preorder := []int{3, 9, 20, 15, 7}
	inorder := []int{9, 3, 15, 20, 7}

	root := buildTree(preorder, inorder)

	fmt.Println("Root value:", root.Val) // Output: 3

	printInorder(root) // 9, 3, 15, 20, 7
}
