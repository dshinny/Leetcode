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

// the levels until the last level = 2^(height - 1) - 1
// the last level:
    // binary search to find the rightmost node and add to total nodes
var countNodes = function(root) {
    // levels until last level 
    var upperNodes = 0;
    if (!root) return 0;
    const height = getTreeHeight(root);
    upperNodes = Math.pow(2, height - 1) - 1;
    
    // last level - binary search to find rightmost node
    var left = 0;
    var right = Math.pow(2, height - 1) - 1;
    var mid;
    var index;
    while (right > left) {
        mid = Math.ceil((left + right) / 2);
        if (nodeExists(mid, height, root)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return upperNodes + left + 1;
};

var nodeExists = function(index, height, node) {
    var count = 1;
    var left = 0;
    var right = Math.pow(2, height - 1) - 1;
    var mid;
    while (count < height) {
        mid = Math.ceil((left + right) / 2);
        if (index >= mid) {
            node = node.right;
            left = mid
        } else {
            node = node.left;
            right = mid - 1;
        }
        count++;
    }
    if (node) return true;
    return false;
}

var getTreeHeight = function(root) {
    // dfs left side to get height
    var height = 1;
    var traverse = function(node) {
        if (node.left) {
            traverse(node.left);
            height++;
        }
    }
    traverse(root);
    return height;
}