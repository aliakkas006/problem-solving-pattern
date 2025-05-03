/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  // Create a dummy node to handle edge cases (like removing the head)
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  // Move fast n steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both until fast reaches the end
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the nth node
  slow.next = slow.next.next;

  return dummy.next;
};

/* 
🚀 Two-Pointer Technique (Fast & Slow Pointers):
    1. Create a dummy node before the head to handle edge cases (like deleting the first node).
    2. Use two pointers: fast and slow, both starting at dummy.
    3. Move fast ahead by n + 1 steps.
        Now there's a gap of n nodes between fast and slow.
    4. Move both fast and slow one step at a time until fast reaches the end.
    5. Now slow is just before the node we want to remove.
    6. Skip the node:
        slow.next = slow.next.next
    7. Return the list starting from dummy.next.
*/
