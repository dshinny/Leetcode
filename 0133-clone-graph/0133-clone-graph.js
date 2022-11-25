/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return node;
    var visited = {};
    return createClone(node, visited);
};

var createClone = function(node, visited) {
    var newNode = new Node(node.val);
    visited[node.val] = newNode;
    node.neighbors.forEach(neighbor => {
        if (visited[neighbor.val]) {
            var newNeighbor = visited[neighbor.val]
        } else {
            var newNeighbor = createClone(neighbor, visited);
        }
        newNode.neighbors.push(newNeighbor)
    })
    return newNode;
}