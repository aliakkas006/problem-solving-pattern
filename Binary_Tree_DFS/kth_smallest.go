package main

/*
* In-Order Traversal: gives nodes in ascending order
* Stack: helps track nodes we need to revisit
* Early Termination - we stop as soon as we find the kth element

Efficiency:
Time: O(H + k) where H is tree height
Space: O(H) for the stack
*/

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func kthSmallest(root *TreeNode, k int) int {
	stack := []*TreeNode{}
	currNode := root

	for {
		// Go all the way to the leftmost node
		for currNode != nil {
			stack = append(stack, currNode)
			currNode = currNode.Left
		}

		// Pop the last node from stack
		currNode = stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		k--

		if k == 0 {
			return currNode.Val
		}

		// Move to the right child
		currNode = currNode.Right

	}
}

/*
1. Start at the root (top of the tree)
2. Go left as far as possible (find the smallest element)
    - As we go left, remember our path by putting nodes in a "stack" (like dropping breadcrumbs)
3. When we can't go left anymore:
    - Take the last node we remembered (the smallest unvisited element)
    - Count it (k--)
4. Found it?
    - If count reaches 0, this is your kth smallest element!
5. Not found yet?
    - Check if this element has a right branch (bigger elements)
    - Repeat the process there
*/
