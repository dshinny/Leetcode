# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if head is None:
            return None
        length = 0
        curr = head
        while curr:
            length += 1
            curr = curr.next
        index = length - n
        i = 0
        curr = head
        prev = None
        while curr:
            if i == index:
                if prev is None:
                    return head.next
                prev.next = curr.next
                return head
            i += 1
            prev = curr
            curr = curr.next