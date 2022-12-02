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
        if head is None:
            return None
        arr = collections.deque()
        curr = head.next
        prev = head
        while curr:
            arr.append(curr)
            prev.next = None
            prev = curr
            curr = curr.next
        curr = head
        counter = 1
        while arr:
            if counter % 2 == 0:
                removed = arr.popleft()
            else:
                removed = arr.pop()
            counter +=1
            curr.next = removed
            curr = removed
        return head