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

// I: head of SLL
// O: head of reversed list
// C: none
// E: reversing the entire list

// intiailize prev, curr, next, position = 1
// initialize before, after, subHead, last
// loop through until right
    // if position is left
        // before = prev
        // subHead = curr
    // if position is greater than left
        // reverse
    // update variables
    // increment position
// connect sublist with list


var reverseBetween = function(head, left, right) {
    var prev = null;
    var curr = head;
    var next;
    var position = 1;
    var head = head;
    var before, after, subHead, last
    while (position <= right) {
        var next = curr.next;
        if (position === left) {
            before = prev;
            subHead = curr;
        }
        if (position > left) {
            curr.next = prev;
        }
        prev = curr;
        curr = next;
        position++;
    }
    if (before) before.next = prev;
    subHead.next = curr;
    if (left === 1) {
        head = prev;
    }
    return head;
};