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
    var inOrder = [];
    var traverse = function(node) {
        if (node.left) traverse(node.left)
        inOrder.push(node.val);
        if (node.right) traverse(node.right)
    }
    traverse(root);
    if (isOrdered(inOrder)) {
        return true;
    }
    return false;
};

var isOrdered = function(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) return false;
    }
    return true;
}