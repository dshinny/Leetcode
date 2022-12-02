# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        # find middle node
        if head is None:
            return None
        fast = head
        middle = head
        midPrev = ListNode(0)
        while fast and fast.next:
            fast = fast.next.next
            midPrev = middle
            middle = middle.next
        midPrev.next = None
        # reverse from middle node
        curr = middle
        prev = None
        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        
        # merge two lists
        l1 = head
        l2 = prev
        while l1 and l2:
            n1, n2 = l1.next, l2.next
            l1.next = l2
            last = l2
            l2.next = n1
            l1, l2 = n1, n2
        if l2:
            last.next = l2
        return head