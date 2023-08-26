# definition for singly linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        prev = dummy        # prev = the last node before the sublist of duplicates

        while head:
            if head.next and head.val == head.next.val:
                while head.next and head.val == head.next.val:      # move till the end of the duplicates sublist
                    head = head.next
                prev.next = head.next       # skip all the duplicates
            else:
                prev = prev.next        # otherwise, move prev
            head = head.next        # move forward
        return dummy.next
