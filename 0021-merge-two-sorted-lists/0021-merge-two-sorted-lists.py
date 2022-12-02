# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        n1, n2 = list1, list2
        prehead = ListNode(-1)
        prev = prehead
        while n1 and n2:
            if n1.val <= n2.val:
                prev.next = n1
                n1 = n1.next
            else:
                prev.next = n2
                n2 = n2.next
            prev = prev.next
        while n1:
            prev.next = n1
            n1 = n1.next
            prev = prev.next
        while n2:
            prev.next = n2
            n2 = n2.next
            prev = prev.next
        return prehead.next