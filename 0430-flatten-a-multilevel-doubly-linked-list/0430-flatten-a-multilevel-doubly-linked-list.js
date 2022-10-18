/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// initialize 
// loop over list
    // if child, 
        // traverseChild(curr, next)

// traverseChild (curr, next):
// initialize subHead = curr.child
// initialize pointer = subHead
// loop through starting from subHead
    // if child,
        // traverse(curr, next)
// link subHead to curr
// link 

var flatten = function(head) {
    var curr = head;
    while (curr) {
        if (curr.child) {
            traverseChild(curr, curr.next);
            curr.child = null;
        }
        curr = curr.next;
    }
    function traverseChild(curr, next) {
        var subHead = curr.child;
        var subTail = subHead;
        var pointer = subHead;
        while (pointer) {
            subTail = pointer;
            pointer = pointer.next;
        }
        subTail.next = next;
        if (next) next.prev = subTail;
        curr.next = subHead;
        subHead.prev = curr;
    }
    return head;
};