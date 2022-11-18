/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    var dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));
    for (var i = dp.length - 2; i >= 0; i--) {
        for (var j = dp[i].length - 2; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                dp[i][j] = dp[i + 1][j + 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
            }
        }
    }
    return dp[0][0];
};