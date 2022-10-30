/**
 * @param {number[]} cost
 * @return {number}
 */

// minCost(n) = min(minCost(n - 1), minCost(n - 2)) + cost[n]

// Bottom-Up
var minCostClimbingStairs = function(cost) {
    var n = cost.length;
    if (n === 0) return cost[0];
    if (n === 1) return cost[1];
    var prev = cost[0];
    var curr = cost[1];
    for (var i = 2; i < n; i++) {
        var temp = cost[i] + Math.min(prev, curr);
        prev = curr;
        curr = temp;
    }
    return Math.min(prev, curr);
}

// Top-Down
// var minCostClimbingStairs = function(cost) {
//     var n = cost.length;
//     var dp = [];
//     var minCost = function(i) {
//         if (i < 0) return 0;
//         if (i === 0 || i === 1) return cost[i];
//         if (dp[i]) return dp[i];
//         dp[i] = Math.min(minCost(i - 1), minCost(i - 2)) + cost[i];
//         return dp[i];
//     }
//     return Math.min(minCost(n - 1), minCost(n - 2));
// };