# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        prehead = ListNode(0)
        minHeap = []
        for head in lists:
            while head:
                heappush(minHeap, head.val)
                head = head.next
        curr = prehead
        while minHeap:
            removed = heappop(minHeap)
            newNode = ListNode(removed)
            curr.next = newNode
            curr = newNode
        return prehead.next