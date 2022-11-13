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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return [];
    var result = [];
    var queue = [root];
    while (queue.length) {
        var levelSize = queue.length;
        var currLevel = [];
        for (var i = 0; i < levelSize; i++) {
            var removed = queue.shift();
            currLevel.push(removed.val)
            if (removed.left) queue.push(removed.left);
            if (removed.right) queue.push(removed.right);
        }
        result.unshift(currLevel);
    }
    return result;
};