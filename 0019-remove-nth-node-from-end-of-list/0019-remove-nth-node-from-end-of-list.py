# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if head is None:
            return None
        prehead = ListNode(0)
        prehead.next = head
        first = head
        second = head
        prev = prehead
        for i in range(n):
            first = first.next
        while first:
            first = first.next
            prev = prev.next
            second = second.next
        prev.next = second.next
        return prehead.next
        