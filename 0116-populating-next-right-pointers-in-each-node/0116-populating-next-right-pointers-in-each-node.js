/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;
    var queue = [root];
    while (queue.length) {
        var levelSize = queue.length;
        for (var i = 1; i < levelSize; i++) {
            var removed = queue.shift();
            removed.next = queue[0];
            if (removed.left) queue.push(removed.left);
            if (removed.right) queue.push(removed.right);
        }
        var removed = queue.shift();
        removed.next = null;
        if (removed.left) queue.push(removed.left);
        if (removed.right) queue.push(removed.right);
    }
    return root;
};