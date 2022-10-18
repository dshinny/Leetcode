/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// I: head
// O: reversed head
// C: none
// E: empty list

// initialize prev, curr, next variables
// loop through list while curr.next
    // reorder
    // update variables

var reverseList = function(head) {
    var prev = null;
    var curr = head;
    var next;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};