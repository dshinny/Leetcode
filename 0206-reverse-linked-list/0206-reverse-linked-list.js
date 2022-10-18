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
    // next is curr.next
    // if theres no next, update head
    // curr.next is prev
    // update variables

var reverseList = function(head) {
    var prev = null;
    var curr = head;
    var next;
    var newHead = head;
    while (curr) {
        next = curr.next;
        if (!curr.next) {
            newHead = curr;
        }
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return newHead;
};