/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length <= 1) return true;
    var dp = new Array(nums.length).fill(undefined);
    dp[dp.length - 1] = true;
    var traverse = function(index) {
        if (dp[index] !== undefined) {
            return dp[index];
        }
        if (nums[index] === 0) {
            dp[index] = false;
            return false;
        }
        for (var n = 1; n <= nums[index]; n++) {
            if(traverse(index + n)) {
                dp[index] = true;
                return true;
            }
        }
        if (dp[index] === undefined) {
            dp[index] = false;
            return false;
        }
    }
    traverse(0);
    return dp[0];
};