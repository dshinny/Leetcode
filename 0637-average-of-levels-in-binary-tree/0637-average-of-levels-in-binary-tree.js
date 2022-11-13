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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) return [];
    var result = [];
    var queue = [root];
    while (queue.length) {
        var levelSize = queue.length;
        var avg = 0;
        for (var i = 0; i < levelSize; i++) {
            var removed = queue.shift();
            avg += removed.val;
            if (removed.left) queue.push(removed.left);
            if (removed.right) queue.push(removed.right);
        }
        avg /= levelSize;
        result.push(avg)
    }
    return result;
};