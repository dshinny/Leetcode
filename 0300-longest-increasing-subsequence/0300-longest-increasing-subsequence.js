/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var result = -Infinity;
    var dp = new Array(nums.length).fill(-Infinity);
    var dfs = function(index, len) {
        var start = nums[index]
        for (var i = index; i < nums.length; i++) {
            var curr = nums[i];
            if (curr > start) {
                if (dp[i] !== -Infinity) {
                    dp[index] = Math.max(dp[index], len + dp[i]);
                    result = Math.max(dp[index], result);
                } else {
                    dfs(i, len + 1)
                }
            }
        }
        dp[index] = Math.max(dp[index], len)
        result = Math.max(result, dp[index])
    }
    for (var i = nums.length - 1; i >= 0; i--) {
        dfs(i, 1);
    }
    return result;
};