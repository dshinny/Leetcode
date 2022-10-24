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
 * @return {boolean}
 */
var isValidBST = function(root) {
    var result = true;
    function traverse(node, left, right) {
        if (node.val <= left || node.val >= right) result = false;
        if (node.left) traverse(node.left, left, node.val);
        if (node.right) traverse(node.right, node.val, right);
    }
    traverse(root, -Infinity, Infinity);
    return result;
};