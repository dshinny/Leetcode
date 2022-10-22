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

// BFS and result.push the last node of each level
var rightSideView = function(root) {
    if (!root) return [];
    var result = [];
    var queue = [root];
    while (queue.length) {
        let length = queue.length;
        let counter = 0;
        var curr;
        while (counter < length) {
            curr = queue.shift();
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            counter++;
        }
        result.push(curr.val)
    }
    return result;
};