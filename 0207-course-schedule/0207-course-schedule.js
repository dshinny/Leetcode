/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var inDegree = new Array(numCourses).fill(0);
    var list = inDegree.map(() => []);
    for (var i = 0; i < prerequisites.length; i++) {
        var pair = prerequisites[i];
        inDegree[pair[0]]++;
        list[pair[1]].push(pair[0]);
    }
    var stack = [];
    var count = 0;
    for (var i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            stack.push(i);
        }
    }
    while (stack.length) {
        var curr = stack.pop();
        count++;
        const adjacentArr = list[curr];
        adjacentArr.forEach(neighbor => {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                stack.push(neighbor);
            }
        })
    }
    return count === numCourses;
};