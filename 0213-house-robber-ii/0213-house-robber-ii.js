/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
    var nums1 = nums.slice();
    nums1.pop();
    var nums2 = nums.slice();
    nums2.shift();
    return Math.max(findMax(nums1), findMax(nums2))
};

var findMax = function(nums) {
    var dp = new Array(nums.length);
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1]);
    for (var i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[dp.length - 1]
}