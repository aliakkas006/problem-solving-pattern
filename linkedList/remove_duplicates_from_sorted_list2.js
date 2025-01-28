/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * Key Concepts:
 * We need to remove ALL occurrences of duplicated numbers
 * The list is already sorted
 * We need to keep track of the previous non-duplicate node
 * 
 * Algorithm Steps:
 1. Create a dummy head to handle cases where first elements are duplicates
 2. Use two pointers: prev (last confirmed unique node) and current
 3. When duplicates are found:
    Skip all nodes with the same value
    Link prev to the node after duplicates
4. When no duplicates:
    Move prev forward
5. Continue until end of list
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  // Handle edge cases
  if (!head || !head.next) return head;

  // Create dummy head to handle cases where first elements are duplicates
  const dummyHead = new ListNode(0);
  dummyHead.next = head;

  let prev = dummyHead;
  let current = head;

  while (current) {
    // Skip all consecutive nodes with same value
    while (current.next && current.val === current.next.val) {
      current = current.next;
    }

    if (prev.next === current) {
      // No duplicates found, move prev
      prev = prev.next;
    } else {
      // Duplicates found, skip all of them
      prev.next = current.next;
    }

    current = current = current.next;
  }

  return dummyHead.next;
};
