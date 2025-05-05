package main

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}
 
/*
* Check if subRoot is a subtree of root .

* isSubtree(root, subRoot):
    if root is null:
        return false

    if isSameTree(root, subRoot):
        return true

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)

*/
func isSubtree(root *TreeNode, subRoot *TreeNode) bool {
    if root == nil {
        return false
    }

    if isSameTree(root, subRoot) {
        return true
    }

    return isSubtree(root.Left, subRoot) || isSubtree(root.Right, subRoot)
}

/*
* Checks if two trees are identical.

* isSameTree(node1, node2):
  - if both are null → return true
  - if one is null → return false
  - if values not equal → return false
  - return isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right)
*/
func isSameTree(node1, node2 *TreeNode) bool {
	// If both are null, they are the same
	if node1 == nil && node2 == nil {
		return true
	}

	// If one is null and the other is not, not the same
	if node1 == nil || node2 == nil {
		return false
	}

	// If the values are different, not the same
	if node1.Val != node2.Val {
		return false
	}

	// Recursively compare left and right subtrees
	return isSameTree(node1.Left, node2.Left) && isSameTree(node1.Right, node2.Right)
}

func main() {
    root := &TreeNode{Val: 3}
    root.Left = &TreeNode{Val: 4}
    root.Right = &TreeNode{Val: 5}
    root.Left.Left = &TreeNode{Val: 1}
    root.Left.Right = &TreeNode{Val: 2}

    subRoot := &TreeNode{Val: 4}
    subRoot.Left = &TreeNode{Val: 1}
    subRoot.Right = &TreeNode{Val: 2}

    isSubtree(root, subRoot) // Output: true
}

/* 
🧠 Time Complexity:
* O(n * m) where:
    - n is number of nodes in root
    - m is number of nodes in subRoot

Because for each node in root, we might compare all nodes in subRoot
*/
