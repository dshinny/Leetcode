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
var levelOrder = function(root) {
    if (!root) return [];
    var result = [];
    var queue = [[root]];
    while (queue.length) {
        var currLevel = [];
        var removed = queue.shift();
        removed.forEach((node, i) => {
            if (node.left) currLevel.push(node.left);
            if (node.right) currLevel.push(node.right);
            removed[i] = node.val;
        })
        if (removed.length) result.push(removed);
        if (currLevel.length) queue.push(currLevel);
    }
    return result;
};