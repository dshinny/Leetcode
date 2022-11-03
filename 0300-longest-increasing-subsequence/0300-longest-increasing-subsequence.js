/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var dp = new Array(nums.length).fill(1);
    for (var i = nums.length - 1; i >= 0; i--) {
        for (var j = i; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }
    return Math.max(...dp)
};