/**
 * @param {number[]} nums
 * @return {number}
 */

// I: array nums
// O: maximum sum
// C: contiguous subarray
// E: none

// initialize global max, local max
// loop through
    // compare current value with current value + local max
    // update local max
    // update global max

var maxSubArray = function(nums) {
    var max = nums[0];
    var localMax = nums[0];
    for (var i = 1; i < nums.length; i++) {
        localMax = Math.max(nums[i], (nums[i] + localMax));
        max = Math.max(max, localMax);
    }
    return max;
};