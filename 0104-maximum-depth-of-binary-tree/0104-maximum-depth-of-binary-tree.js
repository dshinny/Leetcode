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
var maxDepth = function(root) {
    if (!root) return 0;
    var max = 1;
    function traverse(node, depth) {
        max = Math.max(depth, max);
        if (node.left) traverse(node.left, depth + 1);
        if (node.right) traverse(node.right, depth + 1);
    }
    traverse(root, 1);
    return max;
};