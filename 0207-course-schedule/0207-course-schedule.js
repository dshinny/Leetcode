/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var indegree = new Array(numCourses).fill(0);
    var list = indegree.map(() => [])
    for (var i = 0; i < prerequisites.length; i++) {
        var pair = prerequisites[i];
        list[pair[1]].push(pair[0]);
        indegree[pair[0]]++;
    }
    var stack = [];
    var count = 0;
    for (var i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            stack.push(i);
        }
    }
    while (stack.length) {
        var curr = stack.pop();
        count++;
        const adj = list[curr]
        adj.forEach(neighbor => {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                stack.push(neighbor);
            }
        })
    }
    return count === numCourses;
};