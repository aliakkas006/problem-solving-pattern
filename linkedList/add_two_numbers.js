/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  // Create dummy head node
  let dummyNode = new ListNode(0);
  let current = dummyNode;
  let carry = 0;

  // Continue while there are digits to process or carry exists
  while (l1 || l2 || carry) {
    // Get values of current digits or 0 if list ended
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // Calculate sum and new carry
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);

    // Create new node with ones digit
    const num = sum % 10;
    current.next = new ListNode(num);
    current = current.next;

    // Move to next digits if available
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummyNode.next;
};
