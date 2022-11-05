/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var dp = new Array(m).fill(0).map(() => new Array(n).fill(1));
    for (var i = m - 2; i >= 0; i--) {
        for (var j = n - 2; j >= 0; j--) {
            dp[i][j] = dp[i][j + 1] + dp[i + 1][j]
        }
    }
    return dp[0][0]
};