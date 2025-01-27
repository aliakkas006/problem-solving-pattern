/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * Key Concepts:
 * Both input lists are already sorted
 * We need to maintain the sorted order in the result
 * We can reuse the existing nodes (no need to create new ones)
 *
 * Algorithm Steps:
 * Create a dummy head node for easier list construction
 * Compare nodes from both lists and link the smaller one
 * Move forward in the list that had the smaller value
 * When one list is exhausted, append the remaining list
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  // Create dummy head node to simplify handling the first element
  const dummyNode = new ListNode(0);
  let current = dummyNode;

  // Continue while both lists have nodes
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  // If any list remains, append it
  current.next = list1 || list2;

  return dummyNode.next;
};
