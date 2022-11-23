/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var dp = new Array(nums.length).fill(false);
    dp[dp.length - 1] = true;
    for (var i = nums.length - 1; i >= 0; i--) {
        for (var n = 0; n <= nums[i]; n++) {
            if (dp[i + n]) {
                dp[i] = true;
            }
        }
    }
    return dp[0]
};