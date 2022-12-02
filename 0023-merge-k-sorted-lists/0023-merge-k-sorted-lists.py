# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
import heapq
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if not lists:
            return None
        minHeap = []
        for head in lists:
            if not head:
                continue
            while head:
                heapq.heappush(minHeap, head.val)
                head = head.next
        if not minHeap:
            return None
        newHead = ListNode(heapq.heappop(minHeap))
        curr = newHead
        while minHeap:
            removed = heapq.heappop(minHeap)
            newNode = ListNode(removed)
            curr.next = newNode
            curr = newNode
        return newHead