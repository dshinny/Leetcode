/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return null;
    var queue = [root];
    var depth = 1;
    while (queue.length) {
        var levelSize = queue.length;
        for (var i = 0; i < levelSize; i++) {
            var removed = queue.shift();
            if (!removed.left && !removed.right) return depth;
            if (removed.left) queue.push(removed.left);
            if (removed.right) queue.push(removed.right);
        }
        depth++;
    }
};