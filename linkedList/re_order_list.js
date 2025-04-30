/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * We'll solve this problem in 3 simple steps:
    1. Find the middle of the list (using slow/fast pointers)
       - We use two pointers: slow moves one step at a time, fast moves two steps
       - When fast reaches the end, slow will be at the middle
    2. Reverse the second half of the list
       - We split the list at the middle and reverse the second half
    3. Merge the two halves alternately
       - We take one node from the first half and one from the reversed second half
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
  if (!head || !head.next) return;

  // Step 1: Find the middle of the list
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the list
  let prev = null;
  let curr = slow.next;
  slow.next = null; // split the list into two halves

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Step 3: Merge the two halves
  let first = head;
  let second = prev;

  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
};
