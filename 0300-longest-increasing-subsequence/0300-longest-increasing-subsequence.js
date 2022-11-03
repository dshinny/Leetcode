/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var result = 1;
    var dp = new Array(nums.length).fill(1);
    for (var i = nums.length - 1; i >= 0; i--) {
        var start = nums[i]
        for (var j = i; j < nums.length; j++) {
            var curr = nums[j];
            if (curr > start) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
                result = Math.max(dp[i], result);
            }
        }
        dp[i] = Math.max(dp[i], 1)
        result = Math.max(result, dp[i])
    }
    return result;
};