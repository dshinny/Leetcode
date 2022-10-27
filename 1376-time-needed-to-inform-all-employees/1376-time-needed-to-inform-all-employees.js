/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

// make adjacencyList
// start from headId and dfs
    // 
var numOfMinutes = function(n, headID, manager, informTime) {
    var list = manager.map(() => []);
    for (var i = 0; i < n; i++) {
        const currManager = manager[i];
        if (currManager === -1) continue;
        list[currManager].push(i)
    }
    var minutes = 0;
    var dfs = function(employee, totalTime) {
        if (list[employee].length === 0) {
            minutes = Math.max(totalTime, minutes);
        };
        var children = list[employee];
        children.forEach(child => {
            dfs(child, totalTime + informTime[child]);
        })
    }
    dfs(headID, informTime[headID])
    return minutes;
};