/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// I: head of linked list
// O: node where cycle begins
// C: O(1) space -> tortoise and hare algorithm
// E: no cycle -> null

// initialize fast and slow pointers
// loop through
    // if fast and slow meet, break
    // increment fast by 2, and slow by 1
// loop through from fast and start
    // if they meet, return node

var detectCycle = function(head) {
    if (!head) return null;
    var slow = head;
    var fast = head;
    while (true) {
        if (!fast || !fast.next) {
            return null;
        } else {
            fast = fast.next.next;
            slow = slow.next;
        }
        if (fast === slow) break;
    }
    var pointer = head;
    while (fast !== pointer) {
        fast = fast.next;
        pointer = pointer.next;
    }
    return fast;
};