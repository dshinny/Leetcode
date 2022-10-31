/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */

// prob(k, r, c) = sum of all direction(x, y) -> prob(k -1, r + x, c + y) / 8
const directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

var knightProbability = function(n, k, row, column) {
    const dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(undefined)));
    var traverse = function(k, r, c) {
        if (r < 0 || c < 0 || r >= n || c >= n) return 0;
        if (k === 0) return 1;
        if (dp[k][r][c] !== undefined) return dp[k][r][c];
        var result = 0;
        for (var i = 0; i < directions.length; i++) {
            var currDir = directions[i];
            result += traverse(k - 1, r + currDir[0], c + currDir[1]) / 8;
        }
        dp[k][r][c] = result;
        return dp[k][r][c];
    }
    return traverse(k, row, column);
};