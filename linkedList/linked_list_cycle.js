/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * Floyd's Cycle Finding Algorithm:
Use two pointers: slow (moves 1 step) and fast (moves 2 steps)
If there's a cycle, they will eventually meet
If there's no cycle, fast pointer will reach the end
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    let slow = head
    let fast = head

    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if(fast === slow) return true
    }

    // If fast reaches null, there's no cycle
    return false
};
