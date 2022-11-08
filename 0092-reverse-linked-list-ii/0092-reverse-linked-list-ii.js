/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function(head, left, right) {
    if (!head) return null;
    var prev = null;
    var curr = head;
    var next;
    var index = 1;
    var subTail;
    var before;
    while (index <= right) {
        next = curr.next;
        if (index === left) {
            subTail = curr;
            before = prev;
        }
        if (index > left) {
            curr.next = prev;  
        }
        prev = curr;
        curr = next;
        index++;
    }
    subTail.next = curr;
    if (before) {
        before.next = prev;
    } else {
        return prev;
    }
    return head;
};