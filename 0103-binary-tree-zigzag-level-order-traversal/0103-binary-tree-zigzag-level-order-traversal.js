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
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    var result = [];
    var queue = [root];
    var counter = 1;
    while (queue.length) {
        var levelSize = queue.length;
        var currLevel = [];
        for (var i = 0; i < levelSize; i++) {
            var removed = queue.shift();
            if (counter % 2 === 0) {
                currLevel.unshift(removed.val);
            } else {
                currLevel.push(removed.val);
            }
            if (removed.left) queue.push(removed.left);
            if (removed.right) queue.push(removed.right);
        }
        counter++;
        result.push(currLevel);
    }
    return result;
};