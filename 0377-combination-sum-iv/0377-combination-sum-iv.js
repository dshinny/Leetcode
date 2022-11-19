/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    var dp = [1];
    for (var i = 1; i <= target; i++) {
        dp[i] = 0
        for (var j = 0; j < nums.length; j++) {
            if (nums[j] <= i) {
                dp[i] += dp[i - nums[j]]
            }
        }
    }
    return dp[target]
};