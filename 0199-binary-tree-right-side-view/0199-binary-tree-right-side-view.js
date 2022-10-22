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
// var rightSideView = function(root) {
//     if (!root) return [];
//     var result = [];
//     var queue = [root];
//     while (queue.length) {
//         let length = queue.length;
//         let counter = 0;
//         var curr;
//         while (counter < length) {
//             curr = queue.shift();
//             if (curr.left) queue.push(curr.left);
//             if (curr.right) queue.push(curr.right);
//             counter++;
//         }
//         result.push(curr.val)
//     }
//     return result;
// };

// DFS (preorder with right first), keep track of levels
var rightSideView = function(root) {
    if (!root) return [];
    var result = [];
    function traverse(node, level) {
        if (level > result.length) {
            result.push(node.val);
        }
        if (node.right) traverse(node.right, level + 1);
        if (node.left) traverse(node.left, level + 1)
    }
    traverse(root, 1);
    return result;
}