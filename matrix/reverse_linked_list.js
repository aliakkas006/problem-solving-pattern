/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev; // Reverse pointer
    prev = curr;
    curr = next;
  }

  return prev;
};
